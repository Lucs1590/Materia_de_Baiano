# -*- coding: utf-8 -*-

class CamadaA:
    def main(self, tipo, texto):
        self.texto = texto
        print [tipo ,texto]
        return texto

    
    def __init__(self, tipo, texto):
        self.tipo = tipo
        self.texto = texto
        tipo = tipo.lower()

        if 'get' in tipo:
            self.main(tipo, texto)
        elif 'set' in tipo:
            self.main(tipo, texto)

        else:
            raise('Entrada incorreta!')


class CamadaB:
    def main(self, tipo, texto):
        self.texto = texto
        texto_rev = ""
        for i in reversed(texto):
            texto_rev += i
        del texto
        print [tipo, texto_rev]
        return texto_rev
    
    def __init__(self, tipo, texto):
        self.tipo = tipo
        self.texto = texto
        tipo = tipo.lower()

        if 'get' in tipo:
            self.main(tipo, texto)
        elif 'set' in tipo:
            self.main(tipo, texto)

        else:
            raise('Entrada incorreta!')


class CamadaC:
    def main1(self, tipo, texto):
        self.texto = texto
        palavra_sep = []
        for letra in texto:
            palavra_sep += letra
        print [tipo, palavra_sep]
        return palavra_sep

    def main2(self, tipo, texto):
        self.texto = texto
        palavra = ''.join(texto)
        del texto
        print [tipo, palavra]
        return palavra


    def __init__(self, tipo, texto):
        self.tipo = tipo
        self.texto = texto
        tipo = tipo.lower()

        if 'get' in tipo:
            self.main1(tipo, texto)
        elif 'set' in tipo:
            self.main2(tipo, texto)

        else:
            raise('Entrada incorreta!')


lista = ['a', 'l', 'v', 'a', 'r', 'o']
CamadaC('set', lista)

# O QUE FAZER?
# 1º Separar cada camada(A,B e C) em uma classe
# 2º Fazer um getter e um setter para cada classe criada ou olhar encode e decode
# 3º Tentar fazer uma camada receber o valor de outra automaticamente