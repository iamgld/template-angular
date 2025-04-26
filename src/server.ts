// Angular Imports
import { APP_BASE_HREF } from '@angular/common'
import { CommonEngine } from '@angular/ssr'
import express from 'express'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import bootstrap from './main.server'

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
	const server = express()
	const serverDistFolder = dirname(fileURLToPath(import.meta.url))
	const browserDistFolder = resolve(serverDistFolder, '../browser')
	const indexHtml = join(serverDistFolder, 'index.server.html')

	const commonEngine = new CommonEngine()

	server.set('view engine', 'html')
	server.set('views', browserDistFolder)

	// Serve static files from /browser
	server.get(
		'*.*',
		express.static(browserDistFolder, {
			maxAge: '1y',
		}),
	)

	// All regular routes use the Angular engine
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	server.get('*', (request: any, response: any, next: any) => {
		const { protocol, originalUrl, baseUrl, headers } = request

		commonEngine
			.render({
				bootstrap,
				inlineCriticalCss: true,
				documentFilePath: indexHtml,
				url: `${protocol}://${headers.host}${originalUrl}`,
				publicPath: browserDistFolder,
				providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
			})
			.then((html) => response.send(html))
			.catch((err) => next(err))
	})

	return server
}

function run(): void {
	const port = process.env['PORT'] || 3000

	// Start up the Node server
	const server = app()
	server.listen(port, () => {
		console.log(`Node express server listening on http://localhost:${port}`)
	})
}

run()
