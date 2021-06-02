$(document).ready(function(){
	$('.second__screen').hide();
	$('.third__screen').hide();
	$('.fourth__screen').hide();
	$('.fifth__screen').hide();
	$('.sixth__screen').hide();   
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
	

	$('.radio__button1').click(function (event) {
		$('.first__screen').toggleClass('active');
		$('.first__screen').show();
		$('.second__screen').hide();
		$('.third__screen').hide();
		$('.fourth__screen').hide();
		$('.fifth__screen').hide();
		$('.sixth__screen').hide();
	});

	$('.radio__button2').click(function (event) {
		$('.second__screen').toggleClass('active');
		$('.second__screen').show();
		$('.first__screen').hide();
		$('.third__screen').hide();
		$('.fourth__screen').hide();
		$('.fifth__screen').hide();
		$('.sixth__screen').hide();
	});

	$('.radio__button3').click(function (event) {
		$('.third__screen').toggleClass('active');
		$('.third__screen').show();
		$('.first__screen').hide();
		$('.second__screen').hide();
		$('.fourth__screen').hide();
		$('.fifth__screen').hide();
		$('.sixth__screen').hide();
	});

	$('.radio__button4').click(function (event) {
		$('.fourth__screen').toggleClass('active');
		$('.fourth__screen').show();
		$('.first__screen').hide();
		$('.second__screen').hide();
		$('.third__screen').hide();
		$('.fifth__screen').hide();
		$('.sixth__screen').hide();
	});

	$('.radio__button5').click(function (event) {
		$('.fifth__screen').toggleClass('active');
		$('.fifth__screen').show();
		$('.first__screen').hide();
		$('.second__screen').hide();
		$('.third__screen').hide();
		$('.fourth__screen').hide();
		$('.sixth__screen').hide();
	});

	$('.radio__button6').click(function (event) {
		$('.sixth__screen').toggleClass('active');
		$('.sixth__screen').show();
		$('.first__screen').hide();
		$('.second__screen').hide();
		$('.third__screen').hide();
		$('.fourth__screen').hide();
		$('.fifth__screen').hide();
	});
});