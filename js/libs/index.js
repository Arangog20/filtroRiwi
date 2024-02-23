/*IMPORTACIONES */
import{urlRiwi} from "../libs/url.json";
import {urlCompanies } from "../libs/url.json"

/* SELECTORES */


const formulario = document.getElementById("formloging");
const  inputEmail = document.getElementById("email");
const inputPassword= document.getElementById("password");

/*EVENTOS*/
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    LoginC();
});

/*FUNCIONES */

async function LoginC() {
    try {
        
        const response = await fetch(`http://localhost:4002/companies?email=${inputEmail.value}`)
        const data = await response.json()
        if(data.length){
            if(data[0].password == inputPassword.value){
                
                localStorage.setItem("loginCompany",data[0].id)
                window.location.href = "home.html"
            } else {   
                alert(" contraseña incorrecta")
            }
        } else { 
            alert("El correo no esta registrado")
        }

    } catch (error) { 
        console.error(error)
    }
}



