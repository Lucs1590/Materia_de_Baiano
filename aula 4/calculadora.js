function separarIP(ip) {
    ip = ip.split('.');
    
    oc1 = parseInt(ip[0]);
    oc2 = parseInt(ip[1]);
    oc3 = parseInt(ip[2]);
    oc4 = parseInt(ip[3]);

    return([oc1, oc2, oc3, oc4]);
};


function classeHost(val1) {
    classe = "";
    if (128 > val1 &&  val1 >= 0) {
        classe = "A";
    };
    if (192 > val1 && val1 >= 128) {
        classe = "B";
    };
    if (224 > val1 && val1 >= 192){
        classe = "C";
    };
    if (240 > val1 && val1 >= 224){
        classe = "D";
    };
    if (256 > val1 && val1 >= 240){
        classe = "E";
    };
    return (classe)
};


function padraoMask(classeHost) {
    padrao = 0;

    if (classeHost.indexOf("A") == 0) {
        padrao = 8;
    };
    if (classeHost.indexOf("B") == 0) {
        padrao = 16;
    };
    if (classeHost.indexOf("C") == 0){
        padrao = 24;
    };
    if (classeHost.indexOf("D") == 0){
        /* tirar duvida de qual é o padrão DA CLASSE D e E */
        padrao = 28;
    };
    if (classeHost.indexOf("E") == 0){
        padrao = 30;
    };

    return(padrao);
};


function subClasseBin(classeHost) {
    subclasse = [];

    if (classeHost.indexOf("A") == 0) {
        subclasse = ["11111111", "00000000", "00000000", "00000000"];
    };
    if (classeHost.indexOf("B") == 0) {
        subclasse = ["11111111", "11111111", "00000000", "00000000"];
    };
    if (classeHost.indexOf("C") == 0){
        subclasse = ["11111111", "11111111", "11111111", "00000000"];
    };
    if (classeHost.indexOf("D") == 0){
        /* tirar duvida de qual é o padrão DA CLASSE D e E */
        subclasse = ["11111111", "11111111", "11111111", "00000000"];
    };
    if (classeHost.indexOf("E") == 0){
        subclasse = ["11111111", "11111111", "11111111", "00000000"];
    };

    return(subclasse);
};


function transformarBinIP(ip) {
    ip = ip.split('.');

    ipBinario = [];

    ip.forEach(conjunto => {
        conBinario = parseInt(conjunto).toString(2);
        ipBinario.push(conBinario);
    });

    return (ipBinario);
};


function quantHost(padraoMask) {
    pm = parseInt(padraoMask);
    quant = Math.pow(2,(32-pm));

    quant -= 2;

    return (quant);
};


function quantSubRedes(padraoMask, padraoDesejado) {
    pm = parseInt(padraoMask);
    pd = parseInt(padraoDesejado);
    quant = Math.pow(2,(pm-pd));

    return (quant);
};


function mesmaRede(ip1,ip2) {
    ip1Bin = transformarBinIP(ip1);
    ip2Bin = transformarBinIP(ip2);

    classeIP1 = classeHost(IP1[0]);
    classeIP2 = classeHost(IP2[0]);
    
    subclasse1 = subClasseBin(classeIP1);
    subclasse2 = subClasseBin(classeIP2);
    resultado1 = [];
    resultado2 = [];

    for (let cont = 0; cont <= ip1Bin.length; cont++) {
        let blocoIP = ip1Bin[cont];
        let blocoSub = subclasse[cont]
        console.log(blocoIP)
        console.log(blocoSub)
        // adicionar Zeros a frente de onde só tem 1 caracter
        // comparar com forEach e adcicionar a lista resultado
        // repitir o processo para o segundo valor
        // coparar os dois resultados (se iguais, então estão na mesma rede, se não não)
    }
};


function main(ip) {
    padraoDesejado = 18;
    segundoIP = '192.168.0.9';

    parteSeparada = separarIP(ip);
    // console.log(parteSeparada[0]);

    classe = classeHost(parteSeparada[0]);
    // console.log(classe);

    mascaraPadrao = padraoMask(classe);
    // console.log(mascaraPadrao);

    binario = transformarBinIP(ip);
    // console.log(binario);

    quantiHost = quantHost(mascaraPadrao);
    // console.log(quantiHost);

    quantiSubRedes = quantSubRedes(mascaraPadrao, padraoDesejado);
    // console.log(quantiSubRedes);

    subclasse = subClasseBin(classe)
    // console.log(subclasse);

    redeIgual = mesmaRede(ip, segundoIP);
    console.log(redeIgual);

}


main('192.168.0.1');
