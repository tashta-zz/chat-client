var Message = function(username, text){
    this.username = username;
    this.text = text;
};

var friends = [];

$(document).ready(function(){

  $('.addMessageForm').submit(function(e){
    e.preventDefault();
    var roomName = $('.roomName').html();
    newMessage = new Message();
    newMessage.username = $('.addMessageForm input').val();
    newMessage.text = $('.addMessageForm textarea').val();
    if (roomName !== "Home Page"){
      newMessage.roomname = roomName;
    };
    postMessage(newMessage, roomName);
    // getMessages(roomName, false);

    // // if ($('.roomnameInput').html()){
    // //   newMessage.roomname = $('.roomnameInput').html();
    // //   $('.rooms').append('<div class="oneRoom" data-roomname="'+$('.roomnameInput').html()+'">'+$('.roomnameInput').html()+'</div>');
    // //   rooms.push(val.roomname);
    // // } else 
    
    // if (_.contains(friends, newMessage.username)){
    //   var addMessage = '<div class="bold"><span class="username">'+newMessage.username+'</span>\
    //     <span class="text">'+newMessage.text+'</span></div>';
    // } else {
    //   var addMessage = '<div><span class="username">'+newMessage.username+'</span>\
    //     <span class="text">'+newMessage.text+'</span></div>';
    // };
    
    

  });

  
  $(document).on('click', '.username', function(){
    var name = $(this).data('username');
    $("div[data-username='"+name+"']").addClass('bold');
    friends.push(name);
  });

  $(document).on('click', '.oneRoom', function(){
    var roomName = $(this).data('roomname');
    getMessages(roomName, false);
  });

});

    
  // $.post(url, JSON.stringify(newMessage),function(headerSetter) {
  //   $('#main h1').after(addMessage);
    
  // },'json');  

