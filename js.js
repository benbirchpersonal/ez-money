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

function randstr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function shorten(){
  if($('#cst').is(':checked')){
    $("#shortenedLink").text( "quay.group" + "/" + $("#customLinkBox").val());
  }
  else{
    $("#shortenedLink").text( "quay.group" + "/" + randstr(5));
  }
}


