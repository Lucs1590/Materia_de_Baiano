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


function preencherParidade(entrada,prim_par) {
    // recebe o um valor e retorna uma lista com as posiçoes
    // posição_ent = atual + prim_par + 1
    primeiro = parseInt(prim_par)
    atual = entrada[(primeiro+1)]  //transformar em array
    console.log(atual)
    posicao = (atual + primeiro + 1)
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
    }
}



// positionBit('1111011');
//criacaoParidade('1111011')
preencherParidade('1111011','1')

// X = IMPAR    0 = PAR
// p1 - 1 1 0 1     X
// p2 - 1 1 1 1     0
// p3 - 1 0 1 1     X

// 5ª posição