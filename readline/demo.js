const readline = require("readline")

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// r.question("quel est votre nom ? ", (name) => {
//     console.log(`bonjour ${name} !`)
    
// })

function demandeText (){
    r.question('Écrivez une ligne (ou tapez "exit" pour quitter) : ', (input) => {
        if(input.toLowerCase() === "exit"){
            console.log("Ciao")
            r.close();
        }else{
            console.log(`Vous avez écrit : ${input}`);
            demandeText();
        }
    })
}
demandeText()