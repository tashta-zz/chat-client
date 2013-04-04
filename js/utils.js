// utility function for setting authentication headers.
// use it like this: 
// $.ajax(url, {
//   ...,
//   beforeSend: headerSetter
// })
var baseURL = 'https://api.parse.com/1/classes/messages';


var headerSetter = function(xhr) {
  xhr.setRequestHeader("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r");
  xhr.setRequestHeader("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf");
};

var populate = function(data, roomName, needRooms){
  $('.roomName').html(roomName);
  if (roomName){
    var rooms = [];
  }
  $('#main').html('');
  $.map(data.results, function(val){
    if (roomName==="Home Page" || (val.roomname && (val.roomname === roomName))){
      $('#main').append('<div data-username="' +val.username+ '"><span class="username" data-username="' +val.username+ '">'+val.username+'</span><span class="text">'+val.text+'</span></div>');
    };
    if (needRooms && val.roomname && !_.contains(rooms, val.roomname)){
      $('.rooms').append('<div class="oneRoom" data-roomname="'+val.roomname+'">'+val.roomname+'</div>');
      rooms.push(val.roomname);
    }
  });
};

var getMessages = function(roomName, needRooms){
  $.ajax(baseURL, {
    beforeSend: headerSetter,
    contentType: 'application/json',
    success: function(data){
      populate(data, roomName, needRooms);
    }
  });
};

getMessages("Home Page", true);


var postMessage = function(newMessage, roomName){
  $.ajax({
    url: baseURL,
    type: 'POST',
    beforeSend: headerSetter,
    contentType: 'application/json',
    data: JSON.stringify(newMessage),
    dataType: 'json',
    success: function(){
      getMessages(roomName, false);
    }
  });
}

