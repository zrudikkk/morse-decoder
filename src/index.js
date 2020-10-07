const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArr = [];
    exprArr.push(expr.slice(0, 10));
    for (let i = 1; i < (expr.length / 10); i++) {
        exprArr.push(expr.slice(i * 10, (i + 1) * 10));
    }
    exprArr = exprArr.map((item) => {
        if (item === '**********') {
            return ' ';
        }
        item = item.slice(item.indexOf('1'), item.length);
        item = item.match(/.{1,2}/g).map((num) => {
            if (+num[1] === 1){
                return '-'
            } else {
                return '.'
            }
        }).join('');
        item = MORSE_TABLE[item];
        return item;
    });
    return exprArr.join('');
};

module.exports = {
    decode
}