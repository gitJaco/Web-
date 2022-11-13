function carNames(arr){

    arr.splice(1, 1, "ferrari", "lamborghini")
    return arr;
}

console.log(carNames("charger", "mustang", "viper"));

