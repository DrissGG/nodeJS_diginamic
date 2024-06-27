const os = require("os")

// console.log("architecture de l'os :", os.arch())
// console.log(os.tmpdir())


const r = require('./readLine');

function demandeInfoOS() {
    const options = `
    Quelle information voulez-vous sur votre OS ?
    1. Platform
    2. Architecture
    3. CPUs
    4. Mémoire totale du système
    5. Répertoire temporaire du système
    Tapez 'exit' pour quitter.
    `;

    r.question(options, (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Ciao');
            r.close();
        } else {
            switch (input) {
                case '1':
                    console.log("Plateforme du système:", os.platform());
                    break;
                case '2':
                    console.log("Architecture du système:", os.arch());
                    break;
                case '3':
                    console.log("Informations sur les CPUs:");
                    console.table(os.cpus());
                    break;
                case '4':
                    console.log("Mémoire totale du système:", os.totalmem(), "octets");
                    break;
                case '5':
                    console.log("Répertoire temporaire du système:", os.tmpdir());
                    break;
                
                default:
                    console.log('Option non valide. Veuillez réessayer.');
            }
            demandeInfoOS();
        }
    });
}

demandeInfoOS();
