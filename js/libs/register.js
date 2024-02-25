/*IMPORTACIONES */

/*SELECTORES*/
const inputCompany = document.querySelector("#company");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const formResgister = document.querySelector("#register");
const imgCompany = document.querySelector("#img-company");

formResgister.addEventListener("submit", (e) => {
  e.preventDefault();

  addCompany();
});

async function addCompany() {
    try {
      const response = await fetch(`http://localhost:4002/companies?email=${inputEmail.value}`);
  
      if (response.ok) {
        const data = await response.json();
  
        if (data.length === 0) {
          const password = inputPassword.value;
  
          if (password.length >= 6) {
            await fetch(`http://localhost:4002/companies`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "name": inputCompany.value,
                "email": inputEmail.value,
                "password": password
              })
            });
          } else {
            alert("La contraseña debe tener al menos 6 caracteres");
          }
        } else {
          alert("El correo ya está registrado");
          formResgister.reset();
        }
      } else {
        console.error(`Failed to fetch data. Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // otro comentario 
  

