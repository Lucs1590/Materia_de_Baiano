import socket
import time

#def send_id(name):
#    packet = dict("type:"id, "name": name)

server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
server.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)

server.settimeout(0.2)
server.bind(("", 44444))
while True:
    message = raw_input('Type here: ').decode('utf-8')
    server.sendto(message.encode('utf-8'), ('<broadcast>', 37020))
    time.sleep(1)
