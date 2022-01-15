 
 export  const movies = [
    {
        "id": 1,
        "Name": "12 Monkeys",
        "Description": " A deadly virus, released in 1996, wipes out almost all of humanity, forcing survivors to live underground. A group known as the Army of the Twelve Monkeys is believed to have released the virus. In 2035, James Cole is a prisoner living in an underground compound beneath Philadelphia.",
        "Director": " Terry Gilliam",
        "Year": "1.996",
        "Image":"https://media-cache.cinematerial.com/p/500x/robmezoz/twelve-monkeys-german-dvd-movie-cover.jpg?v=1456283760",
        
      },
      {
        "id": 2,
        "Name": "Tesis",
        "Description": "Why is death and violence so fascinating? Is it morally correct to show violence in movies? If so, is there a limit to what we should show? That's the subject of Ángela's examination paper. She is a young student at a film school in Madrid. Together with the student Chema (who is totally obsessed with violent movies) they find a snuff movie in which a young girl is tortured and killed. Soon they discover that the girl was a former student at their school..",
        "Director": "Alejandro Amenábar",
        "Year": "1996",
        "Image":"https://pics.filmaffinity.com/Thesis-538811105-large.jpg",
        
      },
      {
        "id": 3,
        "Name": "Goodfellas",
        "Description": "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?",
        "Director": "Martin Scorsese",
        "Year": "1990",
        "Image":"https://flxt.tmsimg.com/NowShowing/41424/41424_ba.jpg",
        
      },
      {
        "id": 4,
        "Name": "Basic Instint",
        "Description": "A former rock star, Johnny Boz, is brutally killed during sex, and the case is assigned to detective Nick Curran of the SFPD. During the investigation, Nick meets Catherine Tramell, a crime novelist who was Boz's girlfriend when he died. Catherine proves to be a very clever and manipulative woman, and though Nick is more or less convinced that she murdered Boz, he is unable to find any evidence. Later, when Nilsen, Nick's rival in the police, is killed, Nick suspects of Catherine's involvement in it. He then starts to play a dangerous lust-filled mind game with Catherine to nail her, but as their relationship progresses, the body count rises and contradicting evidences force Nick to start questioning his own suspicions about Catherine's guilt.",
        "Director": "Paul Verhoeven",
        "Year": "1992",
        "Image":"https://i.ytimg.com/vi/WiETSAk4b9w/movieposter_en.jpg",
        
      },
      {
        "id": 5,
        "Name": "Casablanca",
        "Description": "The story of Rick Blaine, a cynical world-weary ex-patriate who runs a nightclub in Casablanca, Morocco during the early stages of WWII. Despite the pressure he constantly receives from the local authorities, Rick's cafe has become a kind of haven for refugees seeking to obtain illicit letters that will help them escape to America. But when Ilsa, a former lover of Rick's, and her husband, show up to his cafe one day, Rick faces a tough challenge which will bring up unforeseen complications, heartbreak and ultimately an excruciating decision to make.",
        "Director": "Michael Curtiz",
        "Year": "1942",
        "Image":"https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
        
      },
      {
        "id": 6,
        "Name": "Lawrence of Arabia",
        "Description": "Due to his knowledge of the native Bedouin tribes, British Lieutenant T.E. Lawrence is sent to Arabia to find Prince Faisal and serve as a liaison between the Arabs and the British in their fight against the Turks. With the aid of native Sherif Ali, Lawrence rebels against the orders of his superior officer and strikes out on a daring camel journey across the harsh desert to attack a well-guarded Turkish port.",
        "Director": "David Lean",
        "Year": "1962",
        "Image":"https://m.media-amazon.com/images/I/51MGIXsVpcL.jpg",
        
      },
      {
        "id": 7,
        "Name": "Alien",
        "Description": "In the distant future, the crew of the commercial spaceship Nostromo are on their way home when they pick up a distress call from a distant moon. The crew are under obligation to investigate and the spaceship descends on the moon afterwards. After a rough landing, three crew members leave the spaceship to explore the area on the moon. At the same time as they discover a hive colony of some unknown creature, the ship's computer deciphers the message to be a warning, not a distress call. When one of the eggs is disturbed, the crew realizes that they are not alone on the spaceship and they must deal with the consequences.",
        "Director": "Ridley Scott",
        "Year": "1.979",
        "Image":"https://m.media-amazon.com/images/I/81lrPEEJ2WL._AC_SY741_.jpg",
        
      },
      {
        "id": 8,
        "Name": "The Dreamers",
        "Description": "Paris, spring 1968. While most students take the lead in the May 'revolution', a French poet's twin son Theo and daughter Isabelle enjoy the good life in his grand Paris home. As film buffs they meet and 'adopt' modest, conservatively educated Californian student Matthew. With their parents away for a month, they drag him into an orgy of indulgence of all senses, losing all of his and the last of their innocence. A sexual threesome shakes their rapport, yet only the outside reality will break it up.",
        "Director": "Bernardo Bertolucci",
        "Year": "2003",
        "Image":"https://flxt.tmsimg.com/assets/p33818_p_v7_ai.jpg",
        
      
        
      }
]


const div= document.querySelector('div').content;
const film= document.querySelector('film');
const fragment=document.createDocumentFragment();

movies.forEach(movie =>{

  const {Name, Description, Director, Year, Image} = movie;
   
    div.querySelector('h1').textContent=Name;
    div.querySelector('p').textContent=Description;
    div.querySelector('img').setAttribute('src', Image);
    div.querySelector('h2').textContent=Director ;
    div.querySelector('h3').textContent=Year;
    const clone =div.cloneNode(true);
    fragment.appendChild(clone);
    console.log(Name);
})
film.appendChild(fragment)