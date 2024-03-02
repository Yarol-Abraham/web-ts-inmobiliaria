import { SessionInformationCredential, SessionInformationResponse } from "./sessionInformation";

export interface props {
    sessionInformationResponse: SessionInformationResponse,
    sessionInformationCredential: SessionInformationCredential,
    getSessionInformation: () => void,
    postSessionInformation:  (sessionInformationCredential: SessionInformationCredential) => void
}

export const initialState: props = {
    sessionInformationResponse: {
        status: 0,
        message: "",
        data: {
            token: "",
            user: {
                name: "",
                id: ""
            }
        }
    },
    sessionInformationCredential: {
        name: "",
        password: ""
    },
    getSessionInformation: function(){},
    postSessionInformation: function() {}
}