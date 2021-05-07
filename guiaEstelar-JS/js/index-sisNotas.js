function getNota(note) {
    if (isNaN(Number(note))) {
        throw "Digite uma nota válida";
        return;
    }

    noteInNumber = Number(note);    
    const notes = {
        notaA: noteInNumber >= 90,
        notaB: noteInNumber >= 80 && noteInNumber <= 89,
        notaC: noteInNumber >= 70 && noteInNumber <= 79,
        notaD: noteInNumber >= 60 && noteInNumber <= 69,
        notaF: noteInNumber < 60
    }

    if (notes.notaA) {
        alert("Nota A");
    } else if (notes.notaB) {
        alert("Nota B");        
    } else if (notes.notaC) {
        alert("Nota C");        
    } else if (notes.notaD) {
        alert("Nota D");        
    } else if (notes.notaF) {
        alert("Nota F");        
    } 
}

getNota(prompt("Digite sua nota"));