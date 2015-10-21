$('.user-header-menu').prepend('<li><button class="relate" style="font-size: 1em;height: 32px;margin-right: 16px;border-radius: 0.1875em;" onclick="lennyClick()">lenny</button></li>');

function lennyClick() {
$('#chat-txt-message').val('( ͡° ͜ʖ ͡°)');
            Dubtrack.room.chat.sendMessage();
            sendAutorespond = false;
            setTimeout (function() {
                sendAutorespond = true;
            }, 30 * 1000);
			
}
