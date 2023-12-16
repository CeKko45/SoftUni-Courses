function meetings(input) {
    let meetSchedule = {};
    for(let line of input) {
        let [day, name] = line.split(" ");
        if(meetSchedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}`);
        } else {
            meetSchedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let key in meetSchedule) {
        console.log(`${key} -> ${meetSchedule[key]}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);