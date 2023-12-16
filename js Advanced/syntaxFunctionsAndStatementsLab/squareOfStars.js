function squareOfStars(dimensions){
    if(dimensions === undefined) {
        dimensions = 5;
    }
    let line = "";
    for(let i = 0; i < dimensions; i++) {
        line += "* ";
    }
    for(let i = 1; i <= dimensions; i++) {
        console.log(line);
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
squareOfStars();