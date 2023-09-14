function identity<T> (value: T) : T {
    return value;
}

console.log(identity<number>(1)) // 1
console.log(identity<string>("teste"))
console.log(identity<boolean>(true))
console.log(identity<number[]>([1,2,3])); 