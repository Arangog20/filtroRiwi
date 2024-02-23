(
    ()=>{
    const  user = localStorage.getItem("loginCompany");
    if (!user){
        window.location.href = "index.html"
    }
})()