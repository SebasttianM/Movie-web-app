const Registro = document.getElementById("btnReg");
const Formulario = document.getElementById("formulario");

const datos= []

Formulario.addEventListener('submit', e =>{
  e.preventDefault();
  let name= document.getElementById('nameuser').value;
  let phone= document.getElementById('phonenumber').value;
  let adress= document.getElementById('address').value;
  let email= document.getElementById('emailuser').value;

  agregarUsuario(name, phone, adress, email);
  guardarDatos();

})

const agregarUsuario= (name, phone, adress, email)=>{
  let registro= {
    name :name,
    phone:phone,
    adress:adress,
    email:email,
  }
datos.push(registro);

}

const guardarDatos = () =>{
  localStorage.setItem('usuario', JSON.stringify(datos));
  listarDatos();
}

const listarDatos = () =>{
  listar.innerHTML='';
  datos=JSON.parse(localStorage.getItem('usuario'));
  datos.forEach(element =>{
    const{name, phone, adress, email} = element
    listar.innerHTML +=`
    <div class='card' style='width: 15rem;'>
    <div class='card-body'>
      <h5 class='card-title'${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${email}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${phone}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${adress}</h6>
    
    
    
    </div>
    </div>`
  })  
}




