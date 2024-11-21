export interface IEnvironment {
	environment: EEnvironment
	production: boolean
}

export enum EEnvironment {
	production = 'production',
	staging = 'staging',
	development = 'development',
	local = 'local',
}
