const teste = require("../src/teste"); 

//testando valores 
test('soma de 5 + 2 é igual a 7', () => {
    expect(teste.soma(5,2)).toBe(7);
}); 

test('divisão de 10 / 2 é igual a 5', () => {
    expect(teste.div(10,2)).toBe(5);
}); 

test('divisão de 10 / 2 é igual a 5', () => {
    expect(teste.div(10, 3)).toBeCloseTo(3.33, 2);
}); 

test('verifica se 5 é positivo', () => {
    expect(teste.verificaNumero(5)).toBe('positivo');
}); 

test('verifica se -3 é negativo', () => {
    expect(teste.verificaNumero(-3)).toBe('negativo');
});

test('verifica se 0 é zero', () => {
    expect(teste.verificaNumero(0)).toBe('zero');
});

//testando string
test('verifica se "hello" é uma string', () => {
    expect(teste.ehString('hello')).toBe(true);
});

test('verifica se 42 não é uma string', () => {
    expect(teste.ehString(42)).toBe(false);
});

//testando objetos/ vetores/ arrays 
test('retorna lista de números pares até 6', () => {
    expect(teste.numerosPares(6)).toEqual([2, 4, 6]);
});
