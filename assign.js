const kiosk = {
    Fruit: "mango",
    get getFruit() {
        return this.Fruit;
    },
    set setFruit(newFruit) {
        this.Fruit = newFruit

    }
};
console.log(kiosk.Fruit);
kiosk.newFruit = "orange"
console.log(kiosk.newFruit);;