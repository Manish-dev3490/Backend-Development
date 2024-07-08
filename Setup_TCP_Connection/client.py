import socket

print("Starting a client")
HOST = "localhost"
PORT = 3000

try:
    client_socket = socket.socket()
    client_socket.connect((HOST, PORT))
    message = "Hello from the client side"
    client_socket.sendall(message.encode('utf-8'))
    print("Message sent")
    response_from_serever=client_socket.recv(2048)
    print("the data comes from server is ",response_from_serever)
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    client_socket.close()
    print("Socket closed")
