this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () =>{
        console.log("click en faq")
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
        }
        else{
            questions.forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active")
        }
    }))
}) 