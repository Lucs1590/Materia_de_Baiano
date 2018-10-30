import socket
import struct
import sys

multicast_group = '224.0.0.10'
server_address = ('', 10000)

# Create the socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Bind to the server address
sock.bind(server_address)

# Tell the operating system to add the socket to the multicast group
# on all interfaces.
group = socket.inet_aton(multicast_group)
mreq = struct.pack('4sL', group, socket.INADDR_ANY)
sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreq)

# Receive/respond loop
while True:
    # print >>sys.stderr, '\nAguardando resposta'
    data, address = sock.recvfrom(1024)
    
    # print >>sys.stderr, 'rebecendo %s bytes por %s' % (len(data), address)
    print (str(address) + ': ' + str(data))
    # print >>sys.stderr, data

    # print >>sys.stderr, 'enviando para: ', address
    sock.sendto('VemProFut', address)