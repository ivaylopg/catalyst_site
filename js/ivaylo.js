/*
jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();
*/

// debulked onresize handler
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,250)};return c};



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

	$(".hexFilled").attr("fill","#0000ff");
	$(".svgHoneycomb").attr("width","40px");

	$(".hexFilled").click(function(){
		$(this).attr("class", "hexFilled shiny");
	});

	// Instead of .addClass("newclass")
	//$("#item").attr("class", "oldclass newclass");
	// Instead of .removeClass("newclass")
	//$("#item").attr("class", "oldclass");

	//$('#svgtest').svg({loadURL: "images/twohex.svg"}); 
	//var svg = $('#svgtest').svg('get');
	//svg.load("../images/twohex.svg"); 
	//resetSize(svg);
	

});

on_resize(function() {
	//console.log("resized");
	var hoverBox = $("#logoHover");
	hoverBox.css("height",hoverBox.width());
	console.log(hoverBox.width());
});


/*
$(window).resize(function() {
	
});
*/