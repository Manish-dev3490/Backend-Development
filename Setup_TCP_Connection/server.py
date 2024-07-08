# In this dile i am going to create a server and establish pure TCP connnection without http at localhost
import socket
import threading

def connect_a_client(conn,addr):
    print("new client has been connected")

HOST="localhost"
PORT=3000
socket_server=socket.socket()
socket_server.bind((HOST,PORT))
socket_server.listen()
print("Server is listening on ",HOST,PORT)
while True:
    conn,addr= socket_server.accept()
    t=threading.Thread(target=connect_a_client,args=((conn,addr)))
    t.start()

