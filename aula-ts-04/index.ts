//https://www.typescriptlang.org/play?noImplicitAny=false&pretty=true#code/GYVwdgxgLglg9mABAWxAG1gBzQTwBRgjICMAXIocgEYCmATgDQVEBM5ltdAlIgN4BQiIYjo0oIOkkrFEAKmbIWAbn4Bffv1CRYCRAGciBImQWcmlNqfo8BwkWIlTjiANQLlajVujwkMPQCiAG40YEbI7EScNoLCouKSCogApIgsiAC8WYgADCrqmuA+unoAFnAA7gBKNAYYeKJ1UJHU1nyxQjDAeP7BoQ216FBcMXZ2EAh6cGg0AHRocADmeAAGACqlNPZNiP6IACS8jUOqiACGYAAmu1AA5HqINCFgAIQrXCp2pzRoelu2YyEEzAUxm8yWqw2W2OGF2D0OMKgpwu1xgdwecEulzeHw6iHUBTweB4GQAfO1xpMoAoZBlEJg6HBkJgoHgAEQAMRgdD01IAclF6GzcZSQdSLJl6Yzmay2QBlGjA64C1p0YWfYR44G8hT0OC0xAqzjhYgi4Ta8VEPXpOlG+jhFhmzrARA9PR8s588J602IAA+frhHq9lGtIzxotBcwWyzZAEl0RQ4NTMHA9HoYFQZogoHBHgAPRUgKBbKCbRATS5bCpo0o58uLGDPKw84V4n5-AGAmbUxGSgzIb2M4gMUOMx0awF9lx01AYGDYfAjicR4RlSo1JoDJpO-FqLjElRAA

function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 + num2;
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showResult(result: number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");
    
    const numero1 = Number(num1);
    const numero2 = Number(num2);
    if (isNaN(numero1) || isNaN(numero2))
        console.log("It's not possible to execute the code with the given numbers")
    else{
        let result = sum(numero1,numero2);
        result += multiply(1,2);
        showResult(result);
    }
})();
