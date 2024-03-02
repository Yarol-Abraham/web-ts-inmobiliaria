"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { SessionInformationCredential } from "@/context/interface/sessionInformation";
import { useAuthenticationAction } from "../../hooks/UseAuthentication";

export default  function Login()
{
    const router = useRouter()
    const { postSessionInformation } = useAuthenticationAction();
  
  
    const [ submitted, setSubmitted ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
  
    const [ messageResponse, setMessageResponse ] = useState("");
   
    function handleChange(params:string, e: any) 
    {
      if(params === 'username') setUsername(e.target.value);
      if(params === 'password') setPassword(e.target.value);
    }
  
    async function handleSubmit(e: any)
    {
      e.preventDefault();
      
      setMessageResponse("");
  
      if((username == "" || username == null) || (password == "" || password == null) )
      {
        setSubmitted(!submitted);
        return;
      }
  
      setIsLogin(!isLogin);
      setSubmitted(!submitted);
  
      const sessionInformationCredentials: SessionInformationCredential = {
        name: username,
        password: password
      }
  
      const sessionInformationResponse: any = await postSessionInformation(sessionInformationCredentials);
    
      setTimeout(()=> {
        setIsLogin(false);
        if(sessionInformationResponse.status == 200)
        {
            router.replace("/");
        }
        else{
          setMessageResponse(sessionInformationResponse.message);
        }
      }, 2000)
      
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://raw.githubusercontent.com/Yarol-Abraham/sistema-planilla-frontend/c6c0558be301e769f145bebc4a624673f620284a/public/logo.svg" alt="logo" />
                    Trade Dev    
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                           Iniciar Sesión
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                             { 
                                messageResponse != "" && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span className="font-medium">Alerta !</span> {messageResponse }.
                              </div>
                            }
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">usuario</label>
                                <input type="text" name="username" value={username} onChange={(e)=> handleChange("username", e)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  />
                                  {submitted && !username &&
                                        <div className="help-block">El correo electr&otilde;nico es requerido</div>
                                    }
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input type="password"name="password" value={password} onChange={(e) => handleChange("password", e) }  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {submitted && !password &&
                                    <div className="help-block">La contrase&ntilde;a es requerida</div>
                                }
                            </div>
                           
                            <button type="submit" className={`${ !isLogin ? "" : " hidden  "} w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>Ingresar</button>
                            {
                                isLogin &&
                                <img className='h-100' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                               Todos los derechos reservados.&copy; | By Yarol Abraham
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}