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
    let morseStr = toMorse(expr)

    let decodedStr = ''

    morseStr.forEach(char => {
        decodedStr += MORSE_TABLE[char] || ' '
    })

    return decodedStr
}

function toMorse(expr) {
    const morse = []
    for (let i = 0; i < expr.length; i += 10) {
        let char = expr.slice(i, i + 10)
        char = char.replace(/00/g, '')
        char = char.replace(/10/g, '.')
        char = char.replace(/11/g, '-')
        morse.push(char)
    }
    return morse
}


module.exports = {
    decode
}