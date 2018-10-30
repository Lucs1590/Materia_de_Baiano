import socket
import struct
import sys

message = 'Britao aqui!'
multicast_group = ('224.0.0.10', 10000)

# Create the datagram socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Set a timeout so the socket does not block indefinitely when trying
# to receive data.
sock.settimeout(0.2)

# Set the time-to-live for messages to 1 so they do not go past the
# local network segment.
ttl = struct.pack('b', 1)
sock.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_TTL, ttl)

try:

    # Send data to the multicast group
    print >>sys.stderr, 'Enviando "%s"' % message
    sent = sock.sendto(message, multicast_group)

    # Look for responses from all recipients
    while True:
        print >>sys.stderr, 'Aguardando resposta'
        try:
            data, server = sock.recvfrom(16)
        except socket.timeout:
            print >>sys.stderr, 'timed out :c'
            break
        else:
            print >>sys.stderr, 'Recebendo: "%s" de %s' % (data, server)

finally:
    print >>sys.stderr, 'Tchaaau!'
    sock.close()