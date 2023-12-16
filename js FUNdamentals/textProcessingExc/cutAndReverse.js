function cutAndReverse(input) {
    let firstHalf = "";
    let secondHalf = "";
    let midPoint = Math.round(input.length / 2);
    for(let i = midPoint - 1; i >= 0; i--) {
        firstHalf += input[i];
    }
    for(let i = input.length - 1; i >= midPoint; i--) {
        secondHalf += input[i];
    }
    console.log(firstHalf);
    console.log(secondHalf);
}
// cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');