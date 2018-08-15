#Cliente UDP
import socket
import time
# Endereco IP do Servidor
SERVER = '127.0.0.1'
# Porta que o Servidor esta escutando
PORT = 8080
udp = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
dest = (SERVER, PORT)
print ('Para sair use CTRL+X\n')
msg = input()
while msg != '\x18':
    udp.sendto (msg.encode(), dest)
    print('enviado!')
    time.sleep(3)
    msg, cliente = udp.recvfrom(1024)
    print('verificado!')
    print (cliente, msg)
    msg = input()
udp.close()
