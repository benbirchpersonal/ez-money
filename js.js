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


function download(){
	var link = $("#originalLinkBox").val();
	var format = "mp3"
	var src = "" + link + "=" + format + "";
	dld(link, format);
    
  };



  function dld(link, format){
	$("#shortenedLink").text(link);
	$("#widgetApi").attr('src', 'https://yt-download.org/api/widget?url=' + link);
  }



