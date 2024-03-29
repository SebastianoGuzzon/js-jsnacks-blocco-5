// *SNACK 6*
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
// punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
// falli subiti e stampiamo tutto in console.

const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const teams = [
  
  {
    name : 'Juventus F.C.',
    points : randomNumberGenerator(30,120),
    fouls : randomNumberGenerator(10,50)
  },

  {
    name : 'Napoli F.C.',
    points : randomNumberGenerator(30,120),
    fouls : randomNumberGenerator(10,50)
  },

  {
    name : 'Milan F.C.',
    points : randomNumberGenerator(30,120),
    fouls : randomNumberGenerator(10,50)
  },

  {
    name : 'Inter F.C.',
    points : randomNumberGenerator(30,120),
    fouls : randomNumberGenerator(10,50)
  },

  {
    name : 'Torino F.C.',
    points : randomNumberGenerator(30,120),
    fouls : randomNumberGenerator(10,50)
  },

  {
    name : 'Venezia F.C.',
    points : randomNumberGenerator(30,120),
    fouls : randomNumberGenerator(10,50)
  },

  {
    name : 'Sassuolo F.C.',
    points : randomNumberGenerator(30,120),
    fouls : randomNumberGenerator(10,50)
  },

  {
    name : 'Roma F.C.',
    points : randomNumberGenerator(30,120),
    fouls : randomNumberGenerator(10,50)
  },

  {
    name : 'Lazio F.C.',
    points : randomNumberGenerator(30,120),
    fouls : randomNumberGenerator(10,50)
  },
]

const newTeams = teams.map(team => {
  const {name, fouls} = team;
  const teamObj = {
    name,
    fouls,
  }
  return teamObj
})

console.log(newTeams);