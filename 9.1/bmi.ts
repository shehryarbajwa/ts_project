type ResultType = string

interface input {
    value1: number;
    value2: number;
}

let finalBmi: number = null

const calculateBMI = (a: number, b: number) : ResultType => {
   

    if ((a > 0) && (b > 0)){
        const weight : number = a
        const height : number = b

        finalBmi = (weight / (height * height) * 100)
        console.log(finalBmi)
        
    } else {
        throw new Error("Provided values are not BMI compatible")
    }

    if (finalBmi < 18.5){
        return "You are under weight"
    } else if (finalBmi > 18.5 && finalBmi < 25){
        return "You are in a healthy weight range"
    } else if (finalBmi > 25){
        return "You are overweight"
    } else {
        throw new Error("Please provide correct BMI values")
    }
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

console.log(calculateBMI(a, b))