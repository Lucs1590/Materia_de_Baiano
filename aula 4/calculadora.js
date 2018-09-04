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
    IP1 = separarIP(ip1);
    IP2 = separarIP(ip2);

    classeIP1 = classeHost(IP1[0]);
    classeIP2 = classeHost(IP2[0]);
    
    subclasse1 = subClasseBin(classeIP1);
    subclasse2 = subClasseBin(classeIP2);

    r1 = EParaIP(ip1Bin,subclasse1).toString();
    r2 = EParaIP(ip2Bin,subclasse2).toString();

    console.log("IP 1: ",r1);
    console.log("IP 2: ",r2);

    if (r1 === r2) {
        console.log("Ambos estão na mesma rede");
    } else {
        console.log("Ambos estão em redes diferentes");
    };
};


function reverseString(str) {
    return str.split("").reverse().join("");
};


function adicionaZero(bloco) {
    bloco = bloco.padStart(8, 0);
    return(bloco);
};


function EParaIP(IP_Bin, subclasse) {
    cont = 0;
    resultBloco = [];
    while (cont < 4) {
        let blocoIP = adicionaZero(IP_Bin[cont]);
        let blocoSub = adicionaZero(subclasse[cont]);
        
        resultado = "";

        for (let index = 0; index < blocoIP.length; index++) {
            const numerosIP = blocoIP[index];
            const numerosMask = blocoSub[index];

            if (numerosIP.indexOf("1") == 0) {
                if (numerosMask.indexOf("1") == 0) {
                    resultado += "1";
                } else {
                    resultado += "0";
                };
            } else if (numerosMask.indexOf("1") == 0) {
                if (numerosIP.indexOf("1") == 0) {
                    resultado += "1";
                } else {
                    resultado += "0";
                };
            } else {
            resultado += "0";
            };
        };
        resultBloco.push(reverseString(resultado));
        cont++;
    };
    return(resultBloco);
};


function main(ip) {
    padraoDesejado = 18;
    segundoIP = '172.17.0.1';

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
    // console.log(redeIgual);

}

main('192.168.0.1');
