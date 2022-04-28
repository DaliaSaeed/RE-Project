(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

  
// function getPageList(totalPages, page, maxLength){
// 	function range(start, end){
// 	//   return Array.from(Array(end - start + 1), (_, i) => i + start);
// 	return [1, 2]
// 	}
  
// 	var sideWidth = maxLength < 9 ? 1 : 2;
// 	var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
// 	var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
// 	if(totalPages <= maxLength){
// 	  return range(1, totalPages);
// 	}
  
// 	if(page <= maxLength - sideWidth - 1 - rightWidth){
// 	  return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
// 	}
  
// 	if(page >= totalPages - sideWidth - 1 - rightWidth){
// 	  return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
// 	}
  
// 	return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
//   }
  
//   $(function(){
// 	var numberOfItems = $(".card-content .card").length;
// 	var limitPerPage = 3; //How many card items visible per a page
// 	var totalPages = Math.ceil(numberOfItems / limitPerPage);
// 	var paginationSize = 7; //How many page elements visible in the pagination
// 	var currentPage;
  
// 	function showPage(whichPage){
// 	  if(whichPage < 1 || whichPage > totalPages) return false;
  
// 	  currentPage = whichPage;
  
// 	  $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
  
// 	  $(".pagination li").slice(1, -1).remove();
  
// 	  getPageList(totalPages, currentPage, paginationSize).forEach(item => {
// 		$("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
// 		.toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
// 		.attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
// 	  });
  
// 	  $(".previous-page").toggleClass("disable", currentPage === 1);
// 	  $(".next-page").toggleClass("disable", currentPage === totalPages);
// 	  return true;
// 	}
  
// 	$(".pagination").append(
// 	  $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
// 	  $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
// 	);
  
// 	$(".card-content").show();
// 	showPage(1);
  
// 	$(document).on("click", ".pagination li.current-page:not(.active)", function(){
// 	  return showPage(+$(this).text());
// 	});
  
// 	$(".next-page").on("click", function(){
// 	  return showPage(currentPage + 1);
// 	});
  
// 	$(".previous-page").on("click", function(){
// 	  return showPage(currentPage - 1);
// 	});
//   });

  var yourDateToGo = new Date(); //here you're making new Date object
yourDateToGo.setDate(yourDateToGo.getDate() + 1); //your're setting date in this object 1 day more from now
//you can change number of days to go by putting any number in place of 1

var timing = setInterval( // you're making an interval - a thing, that is updating content after number of miliseconds, that you're writing after comma as second parameter
  function () {

	var currentDate = new Date().getTime(); //same thing as above
	var timeLeft = yourDateToGo - currentDate; //difference between time you set and now in miliseconds

	var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days 
	if (days < 10) days="0"+days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
	var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //conversion miliseconds on hours
	if (hours < 10) hours="0"+hours;
	var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes 
	if (minutes < 10) minutes="0"+minutes;
	var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
	if (seconds < 10) seconds="0"+seconds;

	document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s"; // putting number of days, hours, minutes and seconds in div, 
	//which id is countdown

	if (timeLeft <= 0) {
	  clearInterval(timing);
	  document.getElementById("countdown").innerHTML = "It's over"; //if there's no time left, programm in this 2 lines is clearing interval (nothing is counting now) 
	  //and you see "It's over" instead of time left
	}
  }, 1000);

  function firstExample () {

	for(;;) {
	var x = prompt("Enter number of days");
	x = parseInt(x);
	if (x>0 && x<30) break;
	else alert("Enter number between 0 and 30")

	}
   

	var yourDateToGo2 = new Date();
	yourDateToGo2.setDate(yourDateToGo2.getDate() + x);

	var timing2 = setInterval(
  function () {

	var currentDate2 = new Date().getTime();
	var timeLeft2 = yourDateToGo2 - currentDate2; 

	var days2 = Math.floor(timeLeft2 / (1000 * 60 * 60 * 24));
	if (days2 < 10) days2="0"+days2; 
	var hours2 = Math.floor((timeLeft2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	if (hours2 < 10) hours2="0"+hours2;
	var minutes2 = Math.floor((timeLeft2 % (1000 * 60 * 60)) / (1000 * 60));  
	if (minutes2 < 10) minutes2="0"+minutes2;
	var seconds2 = Math.floor((timeLeft2 % (1000 * 60)) / 1000);
	if (seconds2 < 10) seconds2="0"+seconds2;

	document.getElementById("countdown2").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s";  
	

	if (timeLeft2 <= 0) {
	  clearInterval(timing2);
	  document.getElementById("countdown2").innerHTML = "It's over"; 
	  
	}
  }, 1000);

  }
document.getElementById('btnId').addEventListener('click', firstExample);
