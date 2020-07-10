type Operation = 'multiply' | 'add' | 'divide';
type Result = string | number

export const calculator = (a: number, b: number, op: Operation) : Result => {
    if (op === 'multiply'){
        return a * b;
    } else if (op === 'add'){
        return a + b;
    } else if (op === 'divide'){
        if (b === 0) return 'cant divide by 0!';
        return a / b;
    }
}

console.log(calculator(2,4, 'multiply'))