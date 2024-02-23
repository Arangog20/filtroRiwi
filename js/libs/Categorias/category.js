/*SELECTORES */
const categoryForm = document.querySelector("#addJob");
const titleVacancy = document.querySelector("#title-job");
const experienceVacancy = document.getElementById("experience");
const salaryVacancy = document.getElementById("salary");
const locationVacancy = document.getElementById("Location");
const modalityVacancy = document.getElementById("modality");
const descriptionVacancy = document.querySelector("#description");

const btnSave = document.querySelector("#save");

/*EVENTO */

document.addEventListener("DOMContentLoaded",()=>{
    getCategory()
})

btnSave.addEventListener("click", () => {
  createCategory();
});



/*  FUNCION */

async function createCategory() {
    if(titleVacancy.value && descriptionVacancy.value){
        try {
            const response = await fetch(`http://localhost:4002/jobs`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: titleVacancy.value,
                experience: experienceVacancy.value,
                salary: salaryVacancy.value,
                location: locationVacancy.value,
                modality: modalityVacancy.value,
                description: descriptionVacancy.value
              }),
            });
            const data = response.json();
            return data;
        
          } catch (error) {
            console.error(error);
        
          }

    }else {
        alert("llenar todos los campos")
    }

  
};

async function getCategory(){
    try{
        const response = await fetch(`http://localhost:4002/jobs`)
    }
}
