import json
import threading
import socket

address = '<broadcast>'
address = '10.64.255.255'
port = 37020

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
sock.setsockopt(socket.SOL_SOCKET,socket.SO_BROADCAST,1)
sock.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1)

know_users = {}

def send_id(name):
    pack = dict(type="id",data=name)
    raw_pack = json.dumps(pack).encode()
    sock.sendto(raw_pack,(address,port))

def send_msg(message):
    pack = dict(type="msg",data=message)
    raw_pack = json.dumps(pack).encode()
    sock.sendto(raw_pack,(address,port))

def receive_id(parsed_pack, address):
    know_users[address[0]] = parsed_pack['data']

def receive_msg(parsed_pack,address):
    user = know_users.get(address[0],address[0])
    print('%s: %s' % (user,parsed_pack['data']))

parsers = {
    'id' : receive_id,
    'msg': receive_msg,
}

def parse_pack(pack,address):
    try:
        parsed_pack = json.loads(pack)
        parsers[parsed_pack['type']](parsed_pack,address)
    except:
        print('error on pack',pack)

def receive():
    sock.bind(('',port))
    while True:
        data,address = sock.recvfrom(1024)
        # print(address,data.decode())
        parse_pack(data.decode(),address)
        

#try:
thread = threading.Thread(target=receive)
thread.daemon = True
thread.start()
send_id('brito')
while True:
    print('...')
    value = input()
    send_msg(value)
#except Exception as ex:
    #print(ex)
