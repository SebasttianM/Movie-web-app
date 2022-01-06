 const movies = [
    {
        "id": 1,
        "Name": "Aguacate Hass",
        "Description": "Aguacate de calidad, su peso aproximado por pieza, puede variar de acuerdo peso real. Year por Kg",
        "Director": "Fruta",
        "Year": "3.000",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633223/WorkShop2/Aguacate_s7kvnn.png",
        
      },
      {
        "id": 2,
        "Name": "Limón con semillas",
        "Description": "Limones Jugosos de cal heroku logs --tailidad, su peso aproximado por pieza, puede variar de acuerdo a peso real. Year por Kg",
        "Director": "Fruta",
        "Year": "5.000",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/limon_qfkzy5.png",
        
      },
      {
        "id": 3,
        "Name": "Tomates Verdes",
        "Description": "Tomates Verdes, su peso aproximado por pieza, puede variar de acuerdo a peso real. Year por Kg",
        "Director": "Fruta",
        "Year": "6.000",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633225/WorkShop2/TomateVerde_rfr6uf.png",
        
      },
      {
        "id": 4,
        "Name": "Tomates Rojos",
        "Description": "Tomates Rojos, su peso aproximado por pieza, puede variar de acuerdo a peso real. Year por Kg",
        "Director": "Fruta",
        "Year": "5.000",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633225/WorkShop2/Tomate_uwgknx.png",
        
      },
      {
        "id": 5,
        "Name": "Nopal Limpio",
        "Description": "Nopal limpio, su peso aproximado por pieza, puede variar de acuerdo a peso real. Year por Kg",
        "Director": "Fruta",
        "Year": "4.000",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633225/WorkShop2/NopalLimpio_f1paex.png",
        
      },
      {
        "id": 6,
        "Name": "Pan Bimbo, Pan Blanco- Grande",
        "Description": "Con la suavidad de bimbo a su mesa, pan tajado en presentación de 460gr",
        "Director": "Viveres",
        "Year": "6.500",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/PanBimbo_v038ba.png",
        
      },
      {
        "id": 7,
        "Name": "Jamon Pechuga de Pavo",
        "Description": "San Rafael, Jamon pechuga de Pavo, con la calidad de en presentación de 250gr",
        "Director": "Viveres",
        "Year": "5.350",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/PechugadePavo_ifj19e.png",
        
      },
      {
        "id": 8,
        "Name": "Mc Cormick Mayonesa",
        "Description": "Mayonesa Mc Cormick, con su refinada textura y sabor, en presentación de 250gr",
        "Director": "Viveres",
        "Year": "7.450",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/Mayonesa_r1upr1.png",
        
      },
      {
        "id": 9,
        "Name": "Huevos San Juan",
        "Description": "Huevos san Juan, en presentación de 15 unidades",
        "Director": "Viveres",
        "Year": "5.890",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/Huevos_silkqd.png",
        
      },
      {
        "id": 10,
        "Name": "Colagate Pasta dental Triple familiar",
        "Description": "Colagate Pasta dental Triple familiar, con la frescura que nos brinda su marca, en presentación de 2 unidades, de 125Ml",
        "Director": "Viveres",
        "Year": "8.230",
        "Image":"https://res.cloudinary.com/danimel/image/upload/v1631633223/WorkShop2/Colgate_sjm0kx.png",
        
      }
]


const div= document.querySelector('div')

const fragment=document.createDocumentFragment();

movies.forEach(producto  =>{

  const {Name, Description, Director, Year, Image } = Movie;
   
    div.querySelector('h1').textContent= Name
    div.querySelector('p').textContent= Description
    div.querySelector('img').setAttribute('src', Image)
    div.querySelector('h2').textContent= Director 
    div.querySelector('h3').textContent= Year
    const clone =div.cloneNode(true)
    fragment.appendChild(clone)
    console.log(Movie)
})

div.appendChild(fragment)