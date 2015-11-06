(function() {
  'use strict';

  angular.module('app', ['irontec.simpleChat']);

  angular.module('app').controller('ChatController', ChatController);

  ChatController.$inject = ['$filter'];

  function ChatController($filter) {

    var vm = this;
    vm.sendMessage = sendMessage;
    vm.headChatBoxClick = headChatBoxClick;
    vm.openChats = openChats;
    vm.closeChats = closeChats;
    vm.classMessege = classMessege;
    vm.minChats = minChats;


    /////////////////////////////////////////////////////////////////////////////////

    vm.usersOnline=[
    	{
    		'username': 'Bruja 1', 
        "visible": false,
        "message":[{"usernameSend":"Bruja 1", "usernameReceive":vm.username, "content":"Habla claro"}]
    	},
    	{
    		'username': 'Bruja 2',
        "visible": false,
        "message":[]
    	},
    	{
    		'username': 'Bruja 3',
        "visible": false,
        "message":[]
    	}
    ];

    vm.username = 'Emil';
     
    function headChatBoxClick(){
      $('.chat_body').slideToggle('slow');
    };

    function openChats(name){
      	vm.usersOnline.forEach(function (a){
            if(name == a.username)
              {
                a.visible = true;
              }
        });
    };

    function classMessege(sendUsername){
      if(sendUsername == vm.username)
        return "msg_send";
      else
        return "msg_receive"
    }

    function minChats(index){
      $('#msg_wrap_'+index).slideToggle('slow');
    }

    function closeChats(name){
      vm.usersOnline.forEach(function (a){
          if(name == a.username)
            {
              a.visible = false;
            }
        });
    };

    function showHideCharMsg(){
    	$('.msg_box').hide();
    };

    function sendMessage(event, name, index){
      var messages = $("#contentMesaggesId"+index).val();
      if(event.keyCode == 13 && messages){
        vm.usersOnline.forEach(function (a){
          if(name == a.username)
            {
      	       a.message.push({"usernameSend":vm.username, "usernameReceive":name, "content":messages});
            }
        });
      }
      if(event.keyCode == 13){
        setTimeout(function() {
          $("#contentMesaggesId"+index).val(null);
        }, 10);
      }
    };

  }
})();