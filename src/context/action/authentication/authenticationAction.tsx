'use client'

import { ReactNode, useEffect, useReducer } from "react";

import { AuthenticationContext } from "../../AuthenticationContext";
import AuthenticationReducer from "../../reducer/authentication/authenticationReducer";
import { initialState } from "../../interface/sessionInformationProps";
import { SessionInformationCredential, SessionInformationResponse } from "../../interface/sessionInformation";
import { SESSIONINFORMATION_SUCCESS } from "../../types/authentication/authenticationType";
import request from "../../../config/axios";

interface props {
    children: ReactNode
}

const AuthenticationAction: React.FC<props> = (props: props)  =>
{
    const [state, dispatch] = useReducer(AuthenticationReducer, initialState);
    const IGNORE_PATH: Array<String> = [ '/login' ];
    const SUCCESS = "00";

    // redireccionar a login
    const redireccionar = function()
    {
        let origin = window.location.origin;
        window.location.replace(origin+IGNORE_PATH[0]);
    }

    // verificar sesion de usuario
    const getSessionInformation = function ()
    {
        try{
            
            const sessionInfomation = localStorage.getItem("sessionInfomation");
            if(sessionInfomation != null)
            {
                const sessionInfomationObject: SessionInformationResponse = JSON.parse(sessionInfomation); 
                if(sessionInfomationObject.data.token == undefined) redireccionar();
                
                dispatch({
                    type: SESSIONINFORMATION_SUCCESS,
                    payload: {
                        sessionInformationResponse: sessionInfomationObject
                    }
                });

                return SUCCESS;
            }
            redireccionar();
        }catch(error)
        {
            redireccionar();
        }
    }

    // iniciar sesión
    const postSessionInformation = async function(sessionInformationCredential: SessionInformationCredential): Promise<SessionInformationResponse>
    {
        let sessionInformationResponse: SessionInformationResponse = initialState.sessionInformationResponse;
        try {
            
            const sendRequest = await request.post("auth/login", sessionInformationCredential);
            sessionInformationResponse = sendRequest.data;

            if(sessionInformationResponse.status === 200)
            {
                localStorage.setItem("sessionInfomation", JSON.stringify(sessionInformationResponse));
                dispatch({
                    type: SESSIONINFORMATION_SUCCESS,
                    payload: {
                        sessionInformationResponse
                    }
                });
            }
    
        } catch (error: any) {
            sessionInformationResponse.status =  error.response.data.status;
            sessionInformationResponse.message = error.response.data.message;
        }
        return sessionInformationResponse;
    }

    useEffect(()=> {
        if(!IGNORE_PATH.includes(window.location.pathname)) getSessionInformation();
    }, [])

    return (
        <AuthenticationContext.Provider
            value={{
                sessionInformationResponse: state.sessionInformationResponse,
                sessionInformationCredential: state.sessionInformationCredential,
                getSessionInformation,
                postSessionInformation
            }}
        >
            {props.children}
        </AuthenticationContext.Provider>
    );

}


export default AuthenticationAction;