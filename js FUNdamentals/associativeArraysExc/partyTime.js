function partyTime(arr) {
    let guestListObj = {};
    let guestList = [];
    let normalGuestArr = [];
    let command = arr.shift();
    while(command !== "PARTY") {
        let listCheck = command.split("").shift();
        if(listCheck.charCodeAt() >= 48 && listCheck.charCodeAt() <= 57) {
            guestList.push(command);
        } else {
            normalGuestArr.push(command);
        }
        command = arr.shift();
    }
    guestsArr(normalGuestArr, guestList);
    for(let i = 0; i < guestList.length; i++) {
        guestListObj[i] = guestList[i];
    }
    for(let name of arr) {
        if(Object.keys(guestListObj.hasOwnProperty(name))) {
           let objKey = Object.keys(guestListObj).find(key => guestListObj[key] === name);
           delete guestListObj[objKey];
        }
    }
    console.log(Object.keys(guestListObj).length);
    for (const name of Object.values(guestListObj)) {
        console.log(name);    
    }
    function guestsArr(arr1, arr2) {
        for(let name of arr1) {
            arr2.push(name);
        }
    }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);