export interface signIn {
    sCorreoElectronico: string,
    sPassword: string,
}

export interface SignInResponse {
    iEstatus: number,
    iIdUsuario: number,
    iTipoRedSocial: number,
    sCorreoElectronico: string,
    sIdRedSocial: string,
    sPassword: string,
    sToken: string,
    error?: any,
}