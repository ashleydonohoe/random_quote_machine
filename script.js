$(document).ready(function() {
	$('#generate').click(function() {
		var memeURL = $('input[name=image-url]').val();
		var topText = $('input[name=top-text]').val();
		var bottomText = $('input[name=bottom-text]').val();
		console.log(memeURL);
		console.log(topText);
		console.log(bottomText);
		$('.meme-image').css('background-image', 'url(' + memeURL + ')');
		$('.meme-image').append('<h1 class="text-center meme-top">' + topText + '</h1>');
		$('.meme-image').append('<h1 class="text-center meme-bottom">' + bottomText + '</h1>');
	});
	$('#clear').click(function() {
		$('.meme-image').remove();
		return true;

	});
	/* Taken from http://stackoverflow.com/questions/4078245/onsubmit-return-false-has-no-effect-on-internet-explorer-7-8-form-is-still-su */
	$("form[name=myform]").bind('submit',function(){
   		return false;
	});
});

