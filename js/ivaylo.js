//*
jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();
//*/

function loadDone(svg, error){
	if (error != null || error != undefined) {
		$(this).children('img').removeClass("noShow");
		$(svg.root()).addClass("noShow");
	}
//error.indexOf("Error") >= 0 || error.indexOf("Error") >= 0
}

// debulked onresize handler
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,250)};return c};

function titleResize() {
	var sizerRatio = 0.17;
	if ($(window).innerWidth() <= 1024) {
		sizerRatio = 0.195;
	};
	var titleWidth = sizerRatio * $("#headerComb").width();

	var fontSize = 12;
	while($('#sizer').width() < titleWidth-5){
		$('#sizer').css("font-size",fontSize++ + "px");
	}
	//console.log("sizer w: " + $('#sizer').width() + ", titleWidth: " + titleWidth + " | " + fontSize);
	$("#sizer").css("font-size","12px");
	$("#catalystName").css("font-size",fontSize + "px");
	$(".pageTitle").css("font-size",fontSize-2 + "px");

	var titlePosRatio = 0.513699;
	var logoH = $("#logo").height()
	
	if ($("#logo").height() == null || $("#logo").height() == 0) {
		console.log("logoHeight was null");
		logoH = $("#headerComb").width() * 0.11845286;

	};

	var titlePos = (logoH * titlePosRatio) - ($("#catalystName").height()/2);
	$("#catalystName").css("top",titlePos + "px");
}


$(document).ready(function() {
	var hoverBox = $("#logoHover");
	hoverBox.css({"height":hoverBox.width(),"background":"none"});


	$("#logoHover").hover(
		function(){
			$("#logo").attr('src','images/dopamine.svg');
		},
		function(){
			$("#logo").attr('src','images/dopamineman.svg');
		}
	);

	$('#fb').svg();
	var fbsvg = $('#fb').svg('get');
	fbsvg.load("images/fb.svg", {onLoad: loadDone});

	$('#twitter').svg();
	var twsvg = $('#twitter').svg('get');
	twsvg.load("images/twitter.svg", {onLoad: loadDone});

	titleResize();

	var contTop = parseInt($("#catalystName").css("top"),10) + ($("#catalystName").height() * 1.75);
	$("#content").css("top",contTop + "px");
	//console.log(contTop);
});

on_resize(function() {
	//console.log("resized");
	var hoverBox = $("#logoHover");
	hoverBox.css("height",hoverBox.width());
	//console.log(hoverBox.width());


	titleResize();
	var contTop = parseInt($("#catalystName").css("top"),10) + ($("#catalystName").height() * 1.75);
	$("#content").css("top",contTop + "px");

})();


/*
$(window).resize(function() {
	
});
*/