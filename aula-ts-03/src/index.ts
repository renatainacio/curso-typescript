//https://www.typescriptlang.org/play?ssl=19&ssc=2&pln=1&pc=1#code/GYVwdgxgLglg9mABAWxAG1gBzQTwBRgjICMAXIocgEYCmATgDQVEBM5ltdAlIgN4BQiIYjo0oIOkkrFEAKmbIWAbn4Bffv1CRYCRAGciBImQWcmlNqfo8BwkWIlTjchcrUat0eEhh6AogBuNGBGyOxEnDaCwqLikgqIAKSILIgAvBmIAAwq6prgXrp6ABZwAO4ASjQGGHiiNVDh1NZ80UIwwHi+gcF11ehQXFF2dhAIenBoNAB0aHAA5ngABgAqxTT2DYi+iAAkvPUDqogAhmAAJttQAOR6iDRBYACES1wqdsc0aHobtiNCYzAEymswWyzWG0OGG2d32UKgxzOlxgNzuD2CLzebUQ6lUQA

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 * num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number): void{
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

showResult(15);
showResult(16);