// export k alada lekhe kaj kora jabe

/*
export var fulName = 'Md: Ehasan Ali';

export const add = () => {
    let x = 50;
    let y = 60;
    return x + y;
}

export const add2 = (a, b) => {
    return a + b;
}

export const setText = (txt) => {
    fulName = txt + fulName;
}
*/




// export k akshate lekhe kaj kora jabe


export {
    fulName,
    add,
    add2,
    setText
}
var fulName = 'Md: Ehasan Ali';

const add = () => {
    let x = 50;
    let y = 60;
    return x + y;
}

const add2 = (a, b) => {
    return a + b;
}

var setText = (txt) => {
    fulName = txt + fulName;
}





// name chenge 

var amarName = 'Md: Ehasan Ali';
export {
    amarName as myName
}

export var amarName2 = 'Md: Ehasan Ali';