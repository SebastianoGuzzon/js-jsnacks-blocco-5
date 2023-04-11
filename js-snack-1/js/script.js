const utenti = [
  
  {
    firstname : 'Mario',
    lastname  : 'Sovella',
    age       : 23, 
  },

  {
    firstname : 'Federica',
    lastname  : 'Simonella',
    age       : 27, 
  },

  {
    firstname : 'Andrea',
    lastname  : 'Mazzoni',
    age       : 57, 
  },

  {
    firstname : 'Tommaso',
    lastname  : 'Sultano',
    age       : 68, 
  },

  {
    firstname : 'Don',
    lastname  : 'Perignon',
    age       : 37, 
  },

  {
    firstname : 'Fabio',
    lastname  : 'Deluigi',
    age       : 70, 
  },
]

const minorenni = utenti.filter((utente) => (utente.age < 18));
console.log(minorenni);

const over65 = utenti.filter((utente) => (utente.age > 65));
console.log(over65);