/*
Переделать логику смены слайдов. Теперь все картинки надо прятать, а показывать только одну,
добавляя картинке класс active, соответственно, надо этот класс при перелистывании передавать следующей или предыдущей картинке
*/

var leftBtn = document.querySelector('.left');
var rightBtn = document.querySelector('.right');
var sliderList = document.querySelectorAll('.slide');

var currentSlide = 0;


rightBtn.addEventListener('click', function(){
	 
	sliderList[currentSlide].className = 'slide inactive';
	currentSlide += 1;
	if (currentSlide >= sliderList.length) {
		currentSlide = 0;
	} 
	sliderList[currentSlide].className = 'slide active';

});

leftBtn.addEventListener('click', function(){
	sliderList[currentSlide].className = 'slide inactive';
	currentSlide -= 1;
	if (currentSlide < 0) {
		currentSlide = sliderList.length - 1;
	}
	sliderList[currentSlide].className = 'slide active';
});

