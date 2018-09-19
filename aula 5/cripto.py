#!/usr/bin/env python
# -*- coding: utf-8 -*-
import uuid
import hashlib
import rsa


def check_pass(password1,password2):
    return password1 == password2


def encript_rsa(msg,chave):
    return rsa.encrypt(msg,chave)



(pu_key, pv_key) = rsa.newkeys(1024)
blocksize = 7000

# CRIPTOGRAFIA PARA ARQUIVO 1
cripto_hash = hashlib.sha256()
with open('arquivo1.txt', 'rb') as file1:
    letra = file1.read(blocksize)
    while len(letra) > 0:
        cripto_hash.update(letra)
        msg = letra
        letra = file1.read(blocksize)

# CRIPTOGRAFIA PARA ARQUIVO 2
cripto_hash1 = hashlib.sha256()
with open('arquivo2.txt', 'rb') as file2:
    letra2 = file2.read(blocksize)
    while len(letra2) > 0:
        cripto_hash1.update(letra2)
        msg2 = letra2
        letra2 = file2.read(blocksize)

ch1 = cripto_hash.hexdigest()
ch2 = cripto_hash1.hexdigest()
print('Mensagem(Hash): ', ch1 ,'\n')


msg_rsa1 = encript_rsa(msg,pu_key)
msg_rsa2 = encript_rsa(msg2,pu_key)

print('A mensagem(RSA) é: ', msg_rsa1, '\n')

msg_dec1 = rsa.decrypt(msg_rsa1, pv_key)
msg_dec2 = rsa.decrypt(msg_rsa2, pv_key)

print('A descriptografia de RSA é: ', msg_dec1.decode('utf8'), '\n')

if check_pass(ch1,ch2):
    print('Mensagens correspondentes!')
else:
    print('Mensagens não correspondentes!')


file1.close()
file2.close()
