function cats(arr) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${Number(this.age)} says Meow`);
        }
    }
    for(let catInfo of arr) {
        let [name, age] = catInfo.split(" ");
        let newCat = new Cat(name, age);
        newCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);