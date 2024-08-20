console.log("form");
let formData = {
    email:  "",
    message: "",
}
const formEl = document.querySelector('.feedback-form');
const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state')); 
    if (formDataFromLS === null) {
        return;
    }
    formData = formDataFromLS;
    for (const key in formDataFromLS) {
        if (formDataFromLS.hasOwnProperty(key)) {
            formEl.elements[key].value = formDataFromLS[key];
            
        }
    }
    
 };
fillFormFields();
const onFormElInput = event => {
    
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    
    
    formData[fieldName] = fieldValue;
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    
   

}
const onFormElSubmit = event => { 
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

   
    console.log(formData);
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    
};
formEl.addEventListener('input', onFormElInput);
formEl.addEventListener('submit', onFormElSubmit);

