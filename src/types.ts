export type SignatureHandlerSync = (message: string) => string
export type SignatureHandlerAsync = (message: string) => Promise<string>
export type SignatureHandler = SignatureHandlerSync | SignatureHandlerAsync
