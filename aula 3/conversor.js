function entrada(params) {
    
}

function positionBit(entrada) {
    //Valor que vai sair
    var saida = [];

    //Potenciação de 2
    for (let pos = 0; true; pos++) {
        var potencia = Math.pow(2,pos);
        // Verificando se a quantidade de caracter na string é maior que o numero da potenciação
        if (entrada.length <= potencia) {
            break;
        }
        saida.push(potencia);
    }
    return(saida);
}

function criacaoParidade(entrada) {
    func = positionBit(entrada);
    console.log(func)
    tam = func.length;
    var dic = {};

    // Criando paridades e colocando-as em um dicionário (chave. e valor)
    for (let index = 0; index < tam; index++) {
        var paridade = func[index];
    
        dic[paridade] = [];

        Object.entries(dic).forEach((keyValue) => {
              //keyValue[0];
                
        })
    }
}



// positionBit('1111011');
// criacaoParidade('1111011')


// X = IMPAR    0 = PAR
// p1 - 1 1 0 1     X
// p2 - 1 1 1 1     0
// p3 - 1 0 1 1     X

// 5ª posição