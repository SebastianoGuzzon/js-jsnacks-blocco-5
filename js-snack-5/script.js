// *SNACK 5*
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
  
  {
    name : 'Roncade',
    peso : 15,
  },

  {
    name : 'Speedair',
    peso : 6,
  },

  {
    name : 'Pinarello',
    peso : 5,
  },

  {
    name : 'DecaBike',
    peso : 22,
  },

  {
    name : 'Superlight',
    peso : 2,
  },
]

// Troviamo la bici più leggera

const bikesDot = bikes.sort(function(a, b){return a.peso-b.peso})
console.log(bikesDot);

const {name, peso} = bikes[0];
console.log(name, peso, bikes[0]);

const message = `La bici da corsa più leggera è la ${name} che pesa ${peso}kg`
console.log(message);