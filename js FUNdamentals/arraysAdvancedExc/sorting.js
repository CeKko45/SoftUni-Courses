function sorting(arr) {
    arr.sort((a,b) => a-b);
    let sortArr = [];
    while(arr.length !==0) {
        sortArr.push(arr.pop());
        if(arr.length === 0) {
            break;
        }
        sortArr.push(arr.shift());
    }
    console.log(sortArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);