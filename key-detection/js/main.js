let pressedKeys = []
let secretWord = 'keevah'

document.addEventListener('keyup', (e) =>{
    let key = e.key
    pressedKeys.push(key)
    console.log(pressedKeys)

    pressedKeys.splice(-secretWord.length - 1, pressedKeys.length - secretWord.length)

    pressedKeys.join('').includes(secretWord) ? cornify_add() : pressedKeys
})