import express from 'express';
import {calculator} from './calculator'
const app = express()

app.get('/ping', (_req, res) => {
    res.send('Hello Motherfuckers')
})

app.get('/calculate', (req, res) => {
    const value1 = Number(req.query.a)
    const value2 = Number(req.query.b)
    const op = (req.query.op)

    const result = calculator(value1, value2, op)
    
    res.send({
        weight: req.query.weight,
        height: req.query.height,
        bmi: ""
    })
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})