#Servidor UDP
import socket
#Endereco IP do Servidor
HOST = '127.0.0.1'
# Porta que o Servidor vai escutar
PORT = 8080
udp = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
orig = (HOST, PORT)
udp.bind(orig)
while True:
    msg, cliente = udp.recvfrom(1024)
    print (cliente, msg)
    while msg:
        udp.sendto (msg, cliente)
        print ('enviado!')
        msg = None

udp.close()
