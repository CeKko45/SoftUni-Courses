function guineaPig(input) {
    let foodKg = Number(input.shift());
    let hayKg = Number(input.shift());
    let coverKg = Number(input.shift());
    let weightKg = Number(input.shift());
    let hasToGoToStore = false;

    for (let i = 1; i <= 30; i++) {
        foodKg = foodKg - 0.3;
        if (i % 2 === 0) {
            hayKg -= foodKg * 0.05;
        }
        if (i % 3 === 0) {
            coverKg -= weightKg / 3;
        }
        if (foodKg - 0 < 1e-3 || hayKg - 0 < 1e-3 || coverKg - 0 < 1e-3) {
            hasToGoToStore = true;
            break;
        }
    }
    return hasToGoToStore ? "Merry must go to the pet store!"
        : `Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`
}
console.log(guineaPig(["10",
    "5",
    "5.2",
    "1"]));
console.log(guineaPig(["1",
    "1.5",
    "3",
    "1.5"
]));
console.log(guineaPig(["9",
    "5",
    "5.2",
    "1"])
);