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
var doRollover = false;
//58092105263158

function loadDone(svg, error){
	if (error != null || error != undefined) {
		$(this).append("<img data-type='svg' class='svgIsmg' src=" + $(this).attr("data-source") + ".svg" + " />");
		$(svg.root()).addClass("noShow");
	} else {
		if ($(this).attr("data-source").indexOf("honeycomb") >= 0) {
			hcLoaded = true;
			hcHeight = $('#headerComb').width() * 0.58092105263158;
			$("#headerImg").css("height","auto");
			$("#hcBackground").css("height",hcHeight+"px");
		} else if ($(this).attr("data-source").indexOf("dopamine") >= 0) {
			logoLoaded = true;
			logoHeight = $('#headerComb').width() * 0.11845286;
			$("#logo").css("height","auto");
			$("#svgLogo").css("height",logoHeight+"px");
		};
	};

//error.indexOf("Error") >= 0 || error.indexOf("Error") >= 0
};

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
	if ($(window).innerWidth() > 700) {
		$(".pageTitle").css("font-size",fontSize-2 + "px");	
	};
	

	var titlePosRatio = 0.513699;
	var logoH = $("#logo").height();
	
	if ($("#logo").height() == null || $("#logo").height() == 0) {
		//console.log("logoHeight was null");
		logoH = $("#headerComb").width() * 0.11845286;

	};

	var titlePos = (logoH * titlePosRatio) - ($("#catalystName").height()/2);
	$("#catalystName").css("top",titlePos + "px");
};

function contTop() {
	var contTop = parseInt($("#catalystName").css("top"),10) + ($("#catalystName").height() * 2.5);
	if ($(window).innerWidth() <=500 ) {
		$("#content").css("top",contTop*2 + "px");
	} else if ($(window).innerWidth() <=700 ) {
		$("#content").css("top",contTop*1.5 + "px");
	} else {
		$("#content").css("top",contTop + "px");
	};
};


$(document).ready(function() {
	var hoverBox = $("#logoHover");
	hoverBox.css({"height":hoverBox.width(),"background":"none"});

	hcHeight = $(window).innerWidth() * 0.58092105263158;
	$("#headerComb").css("height",hcHeight + "px");

	logoHeight = $(window).innerWidth() * 0.11845286;
	$("#logo").css("height",logoHeight + "px");

	$("#logoHover").hover(
		function(){
			if ($("#logo img").attr("data-type") != null || $("#logo img").attr("data-type") != undefined) {
				$("#logo img").attr('src','images/dopamine.' + $("#logo img").attr("data-type"));
			} else {
				$(".vman").css("fill-opacity","0.0");
				$(".bonds").css("stroke-opacity","1.0");
			};
		},
		function(){
			if ($("#logo img").attr("data-type") != null || $("#logo img").attr("data-type") != undefined) {
				$("#logo img").attr('src','images/dopaminemanboth.' + $("#logo img").attr("data-type"));
			} else {
				$(".vman").css("fill-opacity","1.0");
				$(".bonds").css("stroke-opacity","0.0");
			};
		}
	);

	$(".social").each(function(){
		if (Modernizr.svg) {
			$(this).svg();
			var svg = $(this).svg('get');
			svg.load($(this).attr("data-source")+".svg", {onLoad: loadDone});
		} else {
			$(this).append("<img data-type='png' src=" + $(this).attr("data-source") + ".png" + "class='social' />");
		};
	});
	

	
	$(".headerSvg").each(function(){
		if (Modernizr.svg) {
			$(this).svg();
			var svg = $(this).svg('get');
			svg.load($(this).attr("data-source")+".svg", {onLoad: loadDone});
		} else {
			$(this).append("<img data-type='png' class='svgImg' src=" + $(this).attr("data-source") + ".png" + " />");
		};
	});


	titleResize();
	contTop();

	// var contTop = parseInt($("#catalystName").css("top"),10) + ($("#catalystName").height() * 2.5);
	// if ($(window).innerWidth() <=500 ) {
	// 	$("#content").css("top",contTop*3 + "px");
	// } else if ($(window).innerWidth() <=700 ) {
	// 	$("#content").css("top",contTop*1.5 + "px");
	// } else {
	// 	$("#content").css("top",contTop + "px");
	// };
	//console.log(contTop);

	$("#navigation").css("margin-top",-1 * $("#navigation").height());
	$("#navigationFront").css("margin-top",-1 * $("#navigationFront").height());

	//if ($('#content').position().top+$('#content').outerHeight(false) > $(window).innerHeight()) {
});

on_resize(function() {
	//console.log("resized");
	var hoverBox = $("#logoHover");
	hoverBox.css("height",hoverBox.width());


	// titleResize();
	// var contTop = parseInt($("#catalystName").css("top"),10) + ($("#catalystName").height() * 1.75);
	// if ($(window).innerWidth() <=700 ) {
	// 	$("#content").css("top",contTop*1.5 + "px");
	// } else {
	// 	$("#content").css("top",contTop + "px");
	// };

	hcHeight = $('#headerComb').width() * 0.58092105263158;
	$("#headerComb").css("height",hcHeight + "px");
	logoHeight = $('#headerComb').width() * 0.11845286;
	$("#logo").css("height","auto");

	if (hcLoaded) {
		$("#hcBackground").css("height",hcHeight+"px");
	};
	if (logoLoaded) {
		$("#svgLogo").css("height",logoHeight+"px");
		console.log(logoHeight);										/////////////log both widths and see if there is a difference
	};

	$("#navigation").css("margin-top",-1 * $("#navigation").height());

	titleResize();
	contTop();

	$("#navigation").css("margin-top",-1 * $("#navigation").height());
	$("#navigationFront").css("margin-top",-1 * $("#navigationFront").height());

})();


/*
$(window).resize(function() {
	
});
*/