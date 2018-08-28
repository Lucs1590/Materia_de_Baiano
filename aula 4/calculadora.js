function classeHost(ip) {
    ip = ip.split('.');
    
    val1 = parseInt(ip[0]);
    
    classe = "";
    if (128 > val1 &&  val1 >= 0) {
        classe = "classe A";
    };
    if (192 > val1 && val1 >= 128) {
        classe = "classe B";
    };
    if (224 > val1 && val1 >= 192){
        classe = "classe C";
    };
    if (240 > val1 && val1 >= 224){
        classe = "classe D";
    };
    if (256 > val1 && val1 >= 240){
        classe = "classe E";
    };
    return (classe)
}


function transform(ip) {
    ip = ip.split('.');

    ipInt = [];
    ipBinario = [];

    ip.forEach(conjunto => {
        conjunto = parseInt(conjunto);
        conBinario = parseInt(conjunto.toString(2));
        ipInt.push(conjunto);
        ipBinario.push(conBinario);
    });
    // console.log(ipInt);
    // console.log(ipBinario);
    return (ipBinario);
}


function quantHost(padraoMask) {
    pm = parseInt(padraoMask);
    quant = Math.pow(2,(32-pm));

    quant -= 2;

    return (quant);
}

function quantSubRedes(padraoMask, padraoDesejado) {
    pm = parseInt(padraoMask);
    pd = parseInt(padraoDesejado);
    quant = Math.pow(2,(pm-pd));

    return (quant);
}


function main(ip) {
    padraoMask = 24;
    padraoDesejado = 18;

    classe = classeHost(ip);
    // console.log(classe);

    binario = transform(ip);
    // console.log(binario);

    quantiHost = quantHost(padraoMask)
    // console.log(quantiHost)

    quantiSubRedes = quantSubRedes(padraoMask, padraoDesejado)
    console.log(quantiSubRedes)

}


main('192.168.0.1');

