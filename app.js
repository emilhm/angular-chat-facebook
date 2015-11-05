(function() {
  'use strict';

  angular.module('app', ['irontec.simpleChat']);

  angular.module('app').controller('ChatController', ChatController);

  function ChatController() {

    var vm = this;
    vm.sendMessage = sendMessage;
    vm.headChatBoxClick = headChatBoxClick;
    vm.openChats = openChats;
    vm.closeChats = closeChats;

    vm.messages = [
      {
        'username': 'Matt',
        'content': 'Hi!'
      },
      {
        'username': 'Elisa',
        'content': 'Whats up?'
      },
      {
        'username': 'Matt',
        'content': 'I found this nice AngularJS Directive'
      },
      {
        'username': 'Elisa',
        'content': 'Looks Great!'
      }
    ];

    vm.usersOnline=[
    	{
    		'users': 'Bruja 1'
    	},
    	{
    		'users': 'Bruja 2'
    	},
    	{
    		'users': 'Bruja 3'
    	}
    ]

    vm.chatActivate = [];


    vm.username = 'Emil';

    function headChatBoxClick(){
		$('.chat_body').slideToggle('slow');
    };

    function ifExist(name){
		var exist = false;
		vm.chatActivate.forEach(function (a){
			if(name == a.username)
			{
				exist = true;
			}
		});
		return exist;
    };

    function openChats(name){
		var exist = ifExist(name);
		if(!exist)
			vm.chatActivate.push({"username":name, "message":[]});
    };

    function closeChats(index){
		vm.chatActivate.splice(index,1);
    };
   	

    function headChat(){
    	$('.msg_wrap').slideToggle('slow');
    };

    function showHideCharMsg(){
    	$('.msg_box').hide();
    };

    function sendMessage(event, name, index){
		var messages = $("#contentMesaggesId"+index).val();
		console.log((messages.match(/\n/g)||[]).length);
		if(event.keyCode == 13 && messages){
			vm.chatActivate[index].message.push({"usernameSend":vm.username, "usernameReceive":name, "content":messages});
			console.log($("#contentMesaggesId"+index).value);
			$("#contentMesaggesId"+index).val(null);


		};
	};
}
})();


$(document).ready(function(){

	$('.msg_head').click(function(){
		$('.msg_wrap').slideToggle('slow');
	});
	
	$('.close').click(function(){
		$('.msg_box').hide();
	});
	
	$('.user').click(function(){

		$('.msg_wrap').show();
		$('.msg_box').show();
	});	
});