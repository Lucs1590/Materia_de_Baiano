#!/usr/bin/env python
# -*- coding: utf-8 -*-
import uuid
import hashlib
 
def hash_password(password):
    salt = uuid.uuid4().hex
    return hashlib.sha256(salt.encode() + password.encode()).hexdigest() + ':' + salt
    
def check_password(hashed_password, user_password):
    password, salt = hashed_password.split(':')
    return password == hashlib.sha256(salt.encode() + user_password.encode()).hexdigest()
 
senha = input('Entre com a senha: ')
senha_hash = hash_password(senha)
print('A senha no BD é: ' + senha_hash + '\n')
senha01 = input('Entre com a senha novamente: ')
if check_password(senha_hash, senha01):
    print('As senhas correspondem')
else:
    print('As senhas não correspondem')
