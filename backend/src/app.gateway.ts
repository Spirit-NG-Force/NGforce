import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
   } from '@nestjs/websockets';
   import { Logger } from '@nestjs/common';
   import { Socket, Server } from 'socket.io';
   
   @WebSocketGateway(4001)
   export class MessagesGateway implements  OnGatewayConnection, OnGatewayDisconnect {
   
    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('AppGateway');
   
    @SubscribeMessage('msgToServer')
    handleConnection(client : Socket) {
      
        client.emit( "connection" , "hello world1")

        this.logger.log(`Client connected: ${client.id}`);
       }
    handleDisconnect(client: Socket) {
     
     this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleMessage(client: Socket, payload: string): void {
    //  this.server.emit('msgToClient', payload); 
    
    }
   

    
   
   
   }