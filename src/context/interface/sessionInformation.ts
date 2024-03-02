export interface SessionInformationCredential {
    name: string
    password: string  
}

export interface SessionInformationResponse {
    status: number
    message: string
    data: Data
  }
  
  export interface Data {
    token: string
    user: User
  }
  
  export interface User {
    name: string
    id: string
  }
  