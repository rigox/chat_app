var socket  = io();


socket.on('connect',()=>{
            console.log("connected to server")
            socket.emit('createMessage',{
                 to:"tyrion",
                 text:'good luck'
            });
        });


socket.emit('createEmail',{
            to:'rigoc1994@gmail.com',
            text:"this is a test email"
        });

socket.on('newMessage',function(message){
            console.log(message)
  });






socket.on('disconnect', () => {
  console.log('Disconnected from server');
});