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

exports.ehString = (valor) => {
    return typeof valor === 'string';
}

exports.numerosPares = (n) => {
    const pares = [];
    for (let i = 2; i <= n; i += 2) {
        pares.push(i);
    }
    return pares;
}