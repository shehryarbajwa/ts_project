let apples : number = 5

let speed: string = 'Fast';

let hasName: boolean = true;

let nothingMuch: null = null;

// built in objects

let now: Date = new Date();

//Array

let colors: string[] = ['Red', 'Green', 'Blue']

let mynumbers: number[] = [1, 2, 3]

let truths: boolean[] = [false, true]

class Car {

}

let car: Car = new Car()

//Object Literal
//Property names listed - all of properties have to be listed here
let point : {x: number, y: number, z: string} = {
    x: 1,
    y: 2015,
    z: 'False'
}

const subtract = (a: number, b: number) : number => {
    return a - b
}

const logger = (a: number, b: number): void | number => {
    console.log(a + b)
}

function multiply (a: number, b: number) : number {
    return a * b
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logweather = (forecast: {date: Date, weather: string}) : void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

//Destructuring ES types
const logWeather = ({date, weather}: {date: Date, weather: string}) : void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}






