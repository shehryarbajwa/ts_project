import express from 'express';
import {calculateBmi } from './bmi'

const app = express()

app.get('/ping', (_req, res) => {
    res.send('Hello BMI brothers')
})

app.get('/bmi', (req, res) => {
    const weight = Number(req.query.weight)
    const height = Number(req.query.height)

    if (!req.query.height || !req.query.weight){
        return res.send(400).json({error: "Height and Weight must be provided"})
    }

    const bmi : string = calculateBmi(weight, height)
    
    res.send({
        "weight": req.query.weight,
        "height": req.query.height,
        "bmi": bmi
    })
})



const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})