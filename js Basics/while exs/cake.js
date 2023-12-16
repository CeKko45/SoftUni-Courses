function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let pieses = length * width;
    let index = 2;  
    
    while (pieses >= 0){
        if (input[index] === "STOP") {
            console.log(`${pieses} pieces are left.`);
            break;
        }
    let takes = Number(input[index]);
    pieses -= takes;
    index++;
    }
    if (pieses <= 0) {
        console.log(`No more cake left! You need ${Math.abs(pieses)} pieces more.`);
    }
    }
cake (["10",
"10",
"20",
"20",
"20",
"20",
"21"])
