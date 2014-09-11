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

function checkCorsSvg(sel) {
	var svg = sel.svg('get');
	if ($(svg.root()).attr("class" == null)) {
		//console.log("null shit");
		$(svg.root()).addClass("noShow");
		sel.children('img').removeClass("noShow");
	};
};

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
		$('#sizer').css("font-size",fontSize++ + "pt");
	}
	//console.log("sizer w: " + $('#sizer').width() + ", titleWidth: " + titleWidth + " | " + fontSize);
	$("#sizer").css("font-size","12pt");
	$("#catalystName").css("font-size",fontSize + "pt");

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

	$('#fb').svg({loadURL: "images/fb.svg"});
	$('#twitter').svg({loadURL: "images/twitter.svg"});
	
	$("div.hasSVG").each(function() {
		checkCorsSvg($(this));
	});
	

	titleResize();

	var contTop = parseInt($("#catalystName").css("top"),10) + ($("#catalystName").height() * 1.75);
	$("#content").css("top",contTop + "px");
	//console.log(contTop);
});

$(window).onerror = function (message, filename, linenumber) {
	alert("JS error: " + message + " on line " + linenumber + " for " + filename);
}

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