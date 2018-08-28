function positionBit(entrada) {
    //Transformando em array e declarando valor que vai sair
    entrada = Array.from(entrada);
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
    console.log(saida);
    return(saida);
}


function criacaoParidade(entrada) {
    entrada = Array.from(entrada);
    func = positionBit(entrada);

    tam = entrada.length;
    var dic = {};
    
    // Criando paridades e colocando-as em um dicionário (chave. e valor)
    for (let index = 0; index < tam; index++) {
        var paridade = func[index];
        if (paridade == undefined) {
            break;
        }

        dic[paridade] = [];

        for (let cont = 0, posicaoAtual = paridade; true; cont++) {
            if (cont == paridade) {
                cont = 0;
                posicaoAtual += 2*paridade; 
            }
            if (posicaoAtual > tam) break;
            dic[paridade].push(+posicaoAtual +cont)
        }
    }
    console.log(dic)
}


// positionBit('1111011');
criacaoParidade('1111011')

// X = IMPAR    0 = PAR
// p1 - 1 1 0 1     X
// p2 - 1 1 1 1     0
// p3 - 1 0 1 1     X

// 5ª posição
