const Registro = document.getElementById("btnReg");
const Formulario = document.getElementById("formulario");

const users= []

Formulario.addEventListener('submit', e =>{
  e.preventDefault();
  let name= document.getElementById('nameuser').value;
  let phone= document.getElementById('phonenumber').value;
  let adress= document.getElementById('address').value;
  let email= document.getElementById('emailuser');

  let usrs= {
      nuser:name,
      puser:phone,
      paddress:adress,
      emailuser:email,
    }
users.push(usrs)
console.log(users);
})

