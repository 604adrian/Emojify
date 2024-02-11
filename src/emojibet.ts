//export {}; // Suggested by Stack Overflow: https://stackoverflow.com/a/62912102
const emojibet: { [key: string]: Array<string> } = {
  'a': ['🇦','🅰️'],
  'b': ['🇧','🅱️'],
  'c': ['🇨', '©️',],
  'd': ['🇩', '🐬'],
  'e': ['🇪','📧'],
  'f': ['🇫'],
  'g': ['🇬', '🗜️'],
  'h': ['🇭', '♓'],
  'i': ['🇮', 'ℹ️ ', '👁️'],
  'j': ['🇯', '🏑', '🐋'],
  'k': ['🇰'],
  'l': ['🇱', '🏒'],
  'm': ['🇲','Ⓜ️', '〽️', '♏', '♍'],
  'n': ['🇳', '👡', '♑'],
  'o': ['🇴','🅾️', '⭕', '🍩', '🔘', '🛟'],
  'p': ['🇵','🅿️'],
  'q': ['🇶', '🔮'],
  'r': ['🇷', '®️'],
  's': ['🇸', '💲'],
  't': ['🇹', '✝️', '☦️', '🎚️', '⛏️'],
  'u': ['🇺', '⛎'],
  'v': ['🇻','✌️', '♈'],
  'w': ['🇼', '🔱'],
  'x': ['🇽','✖️', '❎','❌','𝕏'],
  'y': ['🇾', '✌️', '🔧'],
  'z': ['🇿', '💤'],
  '?': ['?', '❔', '❓'],
  '!': ['!', '❕', '❗', '‼️', '⚠️'],
  '0': ['🅾️'],
  '1': ['1️⃣'],
  '2': ['2️⃣'],
  '3': ['3️⃣'],
  '4': ['4️⃣'],
  '5': ['5️⃣'],
  '6': ['6️⃣'],
  '7': ['7️⃣'],
  '8': ['8️⃣'],
  '9': ['9️⃣'],
  '-': ['-', '➖'],
  '+': ['➕'],
  '=': ['🟰'],
  '÷': ['➗'],
  '#': ['#️⃣'],
  '*': ['*️⃣', '😋', '😛', '🤪', '😝', '🤗', '🤭',
        '🫢', '🫣', '🤫', '🤔', '🫡', '🤤', '🤠',
        '🥳', '🥳', '🥸', '😎', '🤓', '🧐', '😍',
        '😘', '😇', '😵‍💫', '🥴', '😨', '😰', '😭',
        '😈', '💀', '💩', '🤡', '👺', '👻', '😼',
       ]
}

const alphabet: Array<string> = Object.keys(emojibet)
const alphaValues: Array<Array<string>> = Object.values(emojibet)

module.exports = { emojibet, alphabet, alphaValues, } 
