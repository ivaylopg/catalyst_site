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

var hcLoaded = false;
var logoLoaded = false;
var hcHeight;
var logoHeight;


function loadDone(svg, error){
	if (error != null || error != undefined) {
		$(this).append("<img class='svgIsmg' src=" + $(this).attr("data-source") + ".svg" + " />");
		$(svg.root()).addClass("noShow");
	} else {
		if ($(this).attr("data-source").indexOf("honeycomb") >= 0) {
			hcLoaded = true;
			hcHeight = $('#headerComb').width() * 0.58092105263158;
			$("#headerImg").css("height","auto");
			$("#hcBackground").css("height",hcHeight+"px");
		} else if ($(this).attr("data-source").indexOf("dopamine") >= 0) {
			logoLoaded = true;
			logoHeight = $('#logo').width() * 0.11845286;
			$("#logo").css("height","auto");
			$("#svgLogo").css("height",logoHeight+"px");   //////////////////////////Should work. Gotta do resize function. Keep copying from HC bg
		};
	};

//error.indexOf("Error") >= 0 || error.indexOf("Error") >= 0
}

// debulked onresize handler
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,250)};return c};

function titleResize() {
	var sizerRatio = 0.17;
	// if ($(window).innerWidth() <= 1024) {
	// 	sizerRatio = 0.195;
	// };
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

	//var combHeight = $("#headerComb").width() * 0.58092105263158; ////////////////////////////////////////////////////////////////////////////
	hcHeight = $(window).innerWidth() * 0.58092105263158;
	$("#headerComb").css("height",hcHeight + "px");

	logoHeight = $(window).innerWidth() * 0.11845286
	$("#logo").css("height",logoHeight + "px");

	//* 0.11845286


	$("#logoHover").hover(
		function(){
			$("#logo").attr('src','images/dopamine.svg');/////////////////////////////////
		},
		function(){
			$("#logo").attr('src','images/dopamineman.svg');
		}
	);

	$(".social").each(function(){
		if (Modernizr.svg) {
			$(this).svg();
			var svg = $(this).svg('get');
			svg.load($(this).attr("data-source")+".svg", {onLoad: loadDone});
		} else {
			$(this).append("<img src=" + $(this).attr("data-source") + ".png" + "class='social' />");
		};
	});
	

	
	$(".headerSvg").each(function(){
		if (Modernizr.svg) {
			$(this).svg();
			var svg = $(this).svg('get');
			svg.load($(this).attr("data-source")+".svg", {onLoad: loadDone});
		} else {
			$(this).append("<img class='svgImg' src=" + $(this).attr("data-source") + ".png" + " />");
		};
	});


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

	//var combHeight = $("#headerComb").width() * 0.58092105263158;
	//var combHeight = $(window).innerWidth() * 0.58092105263158;
	//$("#headerComb").css("height","height");

	titleResize();
	var contTop = parseInt($("#catalystName").css("top"),10) + ($("#catalystName").height() * 1.75);
	$("#content").css("top",contTop + "px");

	hcHeight = $('#headerComb').width() * 0.58092105263158;
	$("#headerComb").css("height",hcHeight + "px");

	logoHeight = $('#logo').width() * 0.11845286;
	$("#logo").css("height","auto");

	if (hcLoaded) {
		$("#hcBackground").css("height",hcHeight+"px");
	};

	if (logoLoaded) {
		$("#svgLogo").css("height",logoHeight+"px");
	};

})();


/*
$(window).resize(function() {
	
});
*/