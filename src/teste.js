exports.soma = (a, b) => {
    return a + b;
}

exports.sub = (a, b) => {
    return a - b;
}

exports.div = (a, b) => {
    return a / b;
}

exports.mult = (a, b) => {
    return a * b;
}


exports.verificaNumero = (numero) => {
    if (numero > 0) {
        return 'positivo';
    } 
    else if (numero < 0) {
        return 'negativo';
    } 
    else {
        return 'zero';
    }
}