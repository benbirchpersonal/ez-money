function shortenClicked(){
	$(".btn").animate({
		opacity: 0,
  		}, 1, function() {

  		});
	$(".title-div").animate({
		opacity: 0.25,
    	top:0,
  		}, 500, function() {

  		});
	$(".urlDesignPage").animate({
		opacity: 1,
    	top:0,
  		}, 800, function() {
  		});
}


