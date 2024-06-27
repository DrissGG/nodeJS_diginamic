const readline = require("readline")

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

r.question("quel est votre nom ? ", (name) => {
    console.log(`bonjour ${name} !`)
    r.close()
})