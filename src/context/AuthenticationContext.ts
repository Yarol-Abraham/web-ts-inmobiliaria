import { createContext } from "react";
import { props, initialState } from './interface/sessionInformationProps';

export const AuthenticationContext = createContext<props>({
    sessionInformationResponse: initialState.sessionInformationResponse,
    sessionInformationCredential: initialState.sessionInformationCredential,
    getSessionInformation(){},
    postSessionInformation(){}
});