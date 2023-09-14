// Classe JavaScript
class Car{
  constructor(make,model,year){
      this.make = make;
      this.model = model;
      this.year = year;
  }
}
// Objeto Carro
let car1 = new Car("audi","Q8",2019);

//serialização
let carJSON1 = JSON.stringify(car1);
// Visualizando os atributos da classe instanciada (objeto)
//console.log(carJSON1);
//console.log(car1);

let carJSON2 = '{"made": "Ford","model": "Mustang","year": "1998"}';
let car2 = JSON.parse(carJSON2);
//console.log(car2);

var sensor = {
  "name":"Accelerometer",
  "values":{
      "x": -0.23487,
      "y": -0.65432,
      "z": 0.98465
  },
  "accuracy": 3,
  "time": 123494654
};

//console.log(sensor["name"]);
//console.log(sensor["values"]["x"])

var sensors = [
  {
      "name":"accelerometer",
      "values":{
          "x": -0.23487,
          "y": -0.65432,
          "z": 0.98465
      },
      "accuracy": 3,
      "time": 123494654
  },
  {
      "name":"gravity",
      "values":{
          "x": 0.54123,
          "y": -0.65445,
          "z": -9.89465
      },
      "accuracy": 2,
      "time": 123494965
  }
];

// Acessando objetos do array
//console.log(sensors[0].name);
//console.log(sensors[1].name);

//imprimir todos os objetos do array
for (let i=0; i<sensors.length;i++){
  console.log(sensors[i].name)
}
