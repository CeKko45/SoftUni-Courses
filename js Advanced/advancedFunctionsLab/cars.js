function cars(input) {
    const data = {}
    const getAllProps = obj => {
        const p = {}
        for (
            ;
            !obj.hasOwnProperty("constructor");
            obj = Object.getPrototypeOf(obj)
        ) {
            let op =
                Object.getOwnPropertyNames(obj) !== -1
                    ? Object.getOwnPropertyNames(obj)
                    : 0
            for (let i = 0; i < op.length; i++) p[op[i]] = obj[op[i]]
        }
        return p
    }

    const instr = {
        create: (n, inherits, n2) =>
            (data[n] = inherits ? Object.create(data[n2]) : {}),
        set: (n, k, v) => (data[n][k] = v),
        print: n => {
            console.log(
                Object.entries(getAllProps(data[n]))
                    .map(x => `${x[0]}:${x[1]}`)
                    .join(",")
            )
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ")

        instr[c](n, k, v)
    })
}
cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);
cars(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat'])

// color:red
// model:new,color:red