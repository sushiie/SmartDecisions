const isAdult = (age) => {
    return age > 17;
}

const canDrink = (age) => {
    return age > 21;
}

export { isAdult, canDrink };

export default (age) => age >= 65;