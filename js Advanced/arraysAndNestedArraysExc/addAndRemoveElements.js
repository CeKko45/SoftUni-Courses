function addAndRemoveElements(arr) {
    let addNum = 1;
    let resultArr = [];
    for(let command of arr) {
        switch(command) {
            case "add":
                resultArr.push(addNum);
                addNum++;
            break;
            case "remove":
                resultArr.pop();
                addNum++;
            break;
        }
    }
    if(resultArr.length === 0) {
        console.log("Empty");
    } else {
        console.log(resultArr.join("\n"));
    }
}
addAndRemoveElements(['add',
'add',
'add',
'add']);
addAndRemoveElements(['add',
'add',
'remove',
'add',
'add']);
addAndRemoveElements(['remove',
'remove',
'remove']);
addAndRemoveElements(['add',
'add',
'remove',
'remove',
'remove']);