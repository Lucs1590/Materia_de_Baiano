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
    
    // Criando paridades e colocando-as em um dicionário (chave e valor)
    for (let index = 0; index < tam; index++) {
        var paridade = func[index];
        if (paridade == undefined) {
            break;
        }
        // Definindo um array valor vazio para cada paridade
        dic[paridade] = [];

        //Loop que define uma variavel igual ao numero de paridade e o contador é presente
        for (let cont = 0, posicaoAtual = paridade; true; cont++) {
            /* Se o contador for igual ao valor da paridade o contador é zerado e a posição recebe o seu valor mais 2x o valor da paridades,
             ou seja, se a paridade for 2, ele captura dois valores, pula dois valores e volta a capturar */
            if (cont == paridade) {
                cont = 0;
                posicaoAtual += 2*paridade; 
            }
            // Se a posição atual for maior que o numero de entradas, ele para e vai para a proxima paridade
            if (posicaoAtual > tam) break;
            // Insere os valores em determinada paridade até que chegue na condição de cima
            dic[paridade].push(+posicaoAtual +cont)
        }
    }
    console.log(dic);
    return (dic);
}

function correcaoBits(entrada) {
    entrada = Array.from(entrada);
    dic = criacaoParidade(entrada);
    
    // Para cada soma de paridade que tem o valor, dividido por 2 e não há sobra, recebe-se true, se não recebe false
    Object.entries(dic).map((posicaoCont) => 
    {
        dic[posicaoCont[0]] = posicaoCont[1].filter(valor => entrada[valor] == 1).length % 2 == 0 ? true : false;
    });

    console.log(dic)

    somaParidade = 0;

    Object.entries(dic).forEach((valorEspecifico) => {
        if (valorEspecifico[1] == false) {
            somaParidade += parseInt(valorEspecifico[0]);
        }
    });

    entrada[somaParidade] = entrada[somaParidade] == '1' ? '0' : '1';

	return entrada.join('');
}


// positionBit('1111011');
// criacaoParidade('1111011')
resultado = correcaoBits('1111011')

console.log('O correto seria:', resultado)
// X = IMPAR    0 = PAR
// p1 - 1 1 0 1     X
// p2 - 1 1 1 1     0
// p3 - 1 0 1 1     X

// 5ª posição
