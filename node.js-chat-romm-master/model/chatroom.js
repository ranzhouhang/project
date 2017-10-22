var socketio = require("socket.io");
var io;
var guest_num = 0;

//接口

exports.listen = function(server){

  io = socketio(server);

  io.on("connection",function(socket){
    var addedUser = false;


    //用户发送“join”时响应

    socket.on("join",function(username){
      if(addedUser) return;

      socket.username = username;
      ++guest_num;
      addedUser = true;

      //告知用户登录成功
      socket.emit("login",{
        username: socket.username,
        numUsers: guest_num
      });

      //广播所用用户
      socket.broadcast.emit("user_joined",{
        username: socket.username,
        msg: "欢迎" + socket.username + "进入聊天室",
        type: "broadcast",
        numUsers: guest_num
      });
    });

    //用户离开
    socket.on("disconnect",function(){
      if(addedUser){
        --guest_num;

        //告知所用用户
        socket.broadcast.emit("user_left",{
          username: socket.username,
          msg: socket.username + "离开了聊天室！",
          type: "broadcast",
          numUsers: guest_num
        });
      }
    });

    //更改昵称
    socket.on('change_name',function(newname){
      if(addedUser){
        var oldname = socket.username;
        socket.username = newname;

        //告知所有用户
        socket.broadcast.emit('name_changed',{
          username:newname,
          msg:"[" + oldname +"]改名为[" + socket.username + "]",
          type:"BROADCAST",
          numUsers:guest_num
        });
      }
    });

    //发送消息
    socket.on('send_msg',function(msg){
      if(addedUser){

        //广播消息
        socket.broadcast.emit('msg_sent',{
          username:socket.username,
          msg:msg,
          type:"BROADCAST"
        });
      }
    });

  });

}
