import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth(){
    //RETORNA O VALOR ATUAL DO QUE ESTÁ NO CONTEXTO
    return useContext(AuthContext); 
}