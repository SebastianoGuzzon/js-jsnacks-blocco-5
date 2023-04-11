const studenti = [
  
  {
    firstname : 'Luigino',
    lastname  : 'Sovella',
    matricola : 33, 
    voti      : [ 4,6,7,5 ]
  },

  {
    firstname : 'Giulio',
    lastname  : 'Nerone',
    matricola : 66, 
    voti      : [ 9,6,9,8 ]
  },

  {
    firstname : 'Cesare',
    lastname  : 'Augusto',
    matricola : 22, 
    voti      : [ 5,6,5,6 ]
  },

  {
    firstname : 'Simone',
    lastname  : 'Stancato',
    matricola : 11, 
    voti      : [ 10,7,4,8 ]
  },

  {
    firstname : 'Mimmo',
    lastname  : 'Motivo',
    matricola : 44, 
    voti      : [ 6,3,7,8 ]
  },

  {
    firstname : 'Franco',
    lastname  : 'Pino',
    matricola : 56, 
    voti      : [ 7,7,7,7 ]
  },
]

const studentiNuovo = studenti.map((studente, voti) => {
  const object = {
    completeName : `${studente.firstname} ${studente.lastname}`,
    matricola : studente.matricola,
    mediaVoto : mediaVoti(studente.voti),
  }
  return object;
})

console.log(studentiNuovo);

// FUNCTIONS

function mediaVoti (voti){
  let somma = 0
  for (let voto of voti){
    somma += voto;
  }

  const media = (somma / voti.length).toFixed(2);
  return media;
}