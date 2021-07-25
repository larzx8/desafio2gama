function validar() {
    const data = document.getElementById('name').value + ";" +
        document.getElementById('surname').value + ";" +
        document.getElementById('email').value + ";" +
        document.getElementById('tel').value + ";" +
        document.getElementById('birth').value + ";" + 
        document.getElementById('cpf').value + ";" +
        document.getElementById('address').value + ";" +
        document.getElementById('city').value + ";" +
        document.getElementById('state').value + ";" +
        document.getElementById('zipcode').value;
    localStorage.setItem('usuario', JSON.stringify(data));
    if (document.getElementById('email').value != '') {
        myMessege();
    }
   

}

function validarProd() {
   
    const prod = document.getElementById('name').value + ";" +
        document.getElementById('developed').value + ";" +
        document.getElementById('dist').value + ";" +
        document.getElementById('date').value + ";" +            
        document.getElementById('gender').value + ";" +
        document.getElementById('price').value + ";" +
        document.getElementById('qntd').value + ";" ;        
       
    localStorage.setItem('produto', JSON.stringify(prod));
    if (document.getElementById('name').value != '') {
        myMessege();
    }
   

}


function myMessege() {    
        var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

