function scroll_f(a) {
	console.log(a);
	var e = a_array.main_timeline.progress();
	1 == $current_page && 0 > a ? (a_array.main_timeline.play(), animation_fired = !0) : e > 0 && 1 > e ? 0 > a && 6 > $current_page ? (a_array.main_timeline.play(), animation_fired = !0) : a > 0 && $current_page > 1 && (a_array.main_timeline.reverse(), animation_fired = !0) : 6 == $current_page && a > 0 && (a_array.main_timeline.reverse(), animation_fired = !0), $scroll_fired || ($scroll_fired = !0, setTimeout(function () {$scroll_fired = !1}, 1300)), a_array.main_timeline.timeScale(default_time_scale)
}function side_menu(){var a=$(".on_page_nav_item");a.on("click",function(){for(var a=$(this),e=parseInt(a.data("index")),t=0;t<a_array.skip.length;t++)e==t+1?a_array.skip[t]=!1:a_array.skip[t]=!0;a_array.main_timeline.timeScale(menu_time_scale),$current_page>e?a_array.main_timeline.reverse():e>$current_page&&a_array.main_timeline.play()}),a_array.side_nav_item=[],a.each(function(){var a=$(this);a_array.side_nav_item.push(a)})}function active_menu_el(a){for(var e=0;e<a_array.side_nav_item.length;e++)a==e+1?a_array.side_nav_item[e].addClass("active_mod"):a_array.side_nav_item[e].removeClass("active_mod")}function init(){function a(){animation_fired=!1}function e(){animation_fired=!1,$current_page=6,$past_page=6}function t(a,e){"start"==a?0==a_array.butterfly_wings[e].progress()?a_array.butterfly_wings[e].play():a_array.butterfly_wings[e].resume():0!=a_array.butterfly_wings[e].progress()&&a_array.butterfly_wings[e].pause()}function r(a){"start"==a&&void 0!=a_array.one_timeline&&1!=$past_page?(a_array.skip[0]||(a_array.main_timeline.pause(),0==a_array.one_timeline.progress()?(a_array.one_timeline.play(),a_array.clouds_one.play(),animation_fired=!1):(a_array.one_timeline.restart(),a_array.clouds_one.restart(),animation_fired=!1),$past_page=1,$current_page=1,active_menu_el($current_page)),_("stop")):0!=a_array.one_timeline.progress()&&(a_array.one_timeline.pause(),a_array.clouds_one.pause(),setTimeout(function(){a_array.one_timeline.progress(0),a_array.clouds_one.progress(0)},500))}function _(a){"start"==a&&void 0!=a_array.alis_hexagons_tl&&2!=$past_page?(a_array.skip[1]||(a_array.main_timeline.pause(),0==a_array.alis_hexagons_tl.progress()?(a_array.alis_hexagons_tl.play(),animation_fired=!1):(a_array.alis_hexagons_tl.restart(),animation_fired=!1),$current_page=2,$past_page=2,active_menu_el($current_page)),r("stop"),o("stop")):0!=a_array.alis_hexagons_tl.progress()&&(a_array.alis_hexagons_tl.pause(),setTimeout(function(){a_array.alis_hexagons_tl.progress(0)},500))}function o(a){"start"==a&&void 0!=a_array.design_tl&&3!=$past_page?(a_array.skip[2]||(a_array.main_timeline.pause(),0==a_array.design_tl.progress()?(a_array.design_tl.play(),animation_fired=!1):(a_array.design_tl.restart(),animation_fired=!1),$past_page=3,$current_page=3,active_menu_el($current_page)),_("stop"),i("stop")):(a_array.design_tl.pause(),setTimeout(function(){a_array.design_tl.progress(0)},500))}function i(a){"start"==a&&void 0!=a_array.dev_tl&&4!=$past_page?(a_array.skip[3]||(a_array.main_timeline.pause(),0==a_array.dev_tl.progress()?(a_array.dev_tl.play(),animation_fired=!1):(a_array.dev_tl.restart(),animation_fired=!1),$past_page=4,$current_page=4,active_menu_el($current_page)),o("stop"),s("stop")):0!=a_array.dev_tl.progress()&&(a_array.dev_tl.pause(),setTimeout(function(){a_array.dev_tl.progress(0)},500))}function n(){a_array.flying_man_tl.play()}function s(a){"start"==a&&void 0!=a_array.flying_man_tl&&5!=$past_page?(a_array.skip[4]||(a_array.main_timeline.pause(),0==a_array.flying_man_start_tl.progress()?(a_array.flying_man_start_tl.play(),animation_fired=!1):(a_array.flying_man_tl.restart(),animation_fired=!1),$past_page=5,$current_page=5,active_menu_el($current_page)),i("stop")):0!=a_array.flying_man_tl.progress()&&(a_array.flying_man_tl.pause(),setTimeout(function(){a_array.flying_man_tl.progress(0)},500))}a_array.main_section=$(".main_section"),a_array.stage_1_logo_block=$(".stage_logo_block"),a_array.stage_1_logo_w=$(".stage_logo_w"),a_array.stage_1_back=$(".stage_back"),a_array.butterfly_b_global_mod=$(".butterfly_b.global_mod"),a_array.butterfly_b_global_left=$(".butterfly_left",".butterfly_b.global_mod"),a_array.butterfly_b_global_right=$(".butterfly_right",".butterfly_b.global_mod"),a_array.stage_1_timeline=new TimelineMax,a_array.stage_1_timeline.addLabel("stage_1_start").to(a_array.stage_1_logo_block,.7,{className:"stage_logo_block stage_1_from_mod",ease:$linear}).to(a_array.stage_1_logo_w,.35,{className:"stage_logo_w stage_1_from_mod",ease:$easeOut},"-=.5").to(a_array.stage_1_back,.35,{className:"stage_back stage_1_from_mod",ease:$easeOut},"-=.5").to(a_array.stage_1_logo_block,.5,{rotation:180,ease:$easeOut},"stage_1_start").to(a_array.stage_1_logo_block,.7,{className:"stage_logo_block stage_2_to_mod",ease:$linear}).to(a_array.stage_1_logo_w,.35,{scale:.0,rotation:"+=180",ease:$easeIn},"-=.35"),a_array.stage_1_timeline.timeScale(.6),a_array.stage_2_from_timeline=new TimelineMax,a_array.stage_2_from_timeline.addLabel("start").to(a_array.stage_1_logo_block,.7,{className:"stage_logo_block stage_2_from_mod",ease:$linear}).to(a_array.stage_1_logo_w,.3,{scale:.5,xPercent:-500,rotation:"+=90",ease:$easeOut},"-=.7").to(a_array.stage_1_logo_w,.3,{xPercent:0,rotation:0,ease:$easeIn},"start+=.40").addLabel("start_from").to(a_array.stage_1_logo_block,.7,{className:"stage_logo_block stage_3_to_mod",ease:$linear}).to(a_array.stage_1_logo_w,.35,{className:"stage_logo_w stage_3_to_mod",ease:$easeOut},"-=.5").to(a_array.stage_1_back,.35,{className:"stage_back stage_3_to_mod",ease:$easeOut},"-=.5").to(a_array.stage_1_logo_w,.35,{scale:2,ease:$easeOut},"start_from+=.2"),a_array.stage_2_from_timeline.timeScale(1.2),a_array.stage_3_from_timeline=new TimelineMax,a_array.stage_3_from_timeline.addLabel("start").to(a_array.stage_1_logo_block,.3,{opacity:1,ease:$easeOut}).to(a_array.stage_1_logo_block,.7,{className:"stage_logo_block stage_3_from_mod",ease:$linear}).to(a_array.stage_1_logo_w,.35,{scale:1.7,ease:$easeOut},"-=.5").to(a_array.stage_1_logo_block,.3,{opacity:0,ease:$easeOut},"-=.2"),a_array.stage_3_from_timeline.timeScale(.8),a_array.butterfly_b_global_timeline=new TimelineMax,a_array.butterfly_b_global_timeline.set(a_array.butterfly_b_global_mod,{scaleY:2,scaleX:2.5}).set(a_array.butterfly_b_global_left,{xPercent:50,force3D:!0,transformOrigin:"100% 50%"}).set(a_array.butterfly_b_global_right,{xPercent:-50,force3D:!0,transformOrigin:"0 50%"}).addLabel("butterfly_three").to(a_array.butterfly_b_global_mod,.35,{opacity:1,scale:2,ease:$easeOut}).to(a_array.butterfly_b_global_left,.35,{xPercent:-20,ease:$easeOut},"butterfly_three").to(a_array.butterfly_b_global_right,.35,{xPercent:20,ease:$easeOut},"butterfly_three").to(a_array.butterfly_b_global_left,.35,{opacity:0,ease:$easeOut},"butterfly_three+=.1").to(a_array.butterfly_b_global_right,.35,{opacity:0,ease:$easeOut},"butterfly_three+=.1"),a_array.stage_4_from_timeline=new TimelineMax,a_array.stage_4_from_timeline.addLabel("start").to(a_array.stage_1_logo_block,.3,{opacity:1,ease:$easeOut}).to(a_array.stage_1_logo_block,.7,{className:"stage_logo_block stage_4_from_mod",ease:$linear}).addLabel("start_two").to(a_array.stage_1_logo_w,.35,{opacity:0,ease:$easeOut},"start_two-=.4").add(a_array.butterfly_b_global_timeline,"start_two-=.4"),a_array.stage_4_from_timeline.timeScale(1),a_array.main_timeline=new TimelineMax;var l=2;$ease=Power1.easeInOut,a_array.main_timeline.addLabel("step_one").call(a).call(r,["start"]).to(a_array.main_section,l,{yPercent:-20,ease:$ease,force3D:!0}).add(a_array.stage_1_timeline,"-=1.5").addLabel("step_two").call(_,["start"]).to(a_array.main_section,l,{yPercent:-40,ease:$ease}).add(a_array.stage_2_from_timeline,"-=1.5").addLabel("step_three").call(o,["start"]).to(a_array.main_section,l,{yPercent:-60,ease:$ease}).add(a_array.stage_3_from_timeline,"-=1.5").addLabel("step_four").call(i,["start"]).to(a_array.main_section,l,{yPercent:-80,ease:$ease}).addLabel("step_five").add(a_array.stage_4_from_timeline,"-=1.5").call(s,["start"],"step_five-=.9").to(a_array.main_section,l,{y:-38*rem,ease:$ease}).call(e),a_array.main_timeline.timeScale(default_time_scale),a_array.butterfly_1=$(".butterfly_b.mod_1"),a_array.butterfly_2=$(".butterfly_b.mod_2"),a_array.butterfly_3=$(".butterfly_b.mod_3"),a_array.butterfly_4=$(".butterfly_b.mod_4"),a_array.butterfly_5=$(".butterfly_b.mod_5"),a_array.butterfly_left=$(".butterfly_left"),a_array.butterfly_right=$(".butterfly_right"),a_array.s1_cloud_1=$(".cloud_1"),a_array.s1_cloud_2=$(".cloud_2"),a_array.s1_cloud_3=$(".cloud_3"),a_array.one_timeline=new TimelineMax({paused:!0,repeat:-1}),a_array.one_timeline.call(t,["start",0]).to(a_array.butterfly_1,4,{bezier:{type:"soft",values:[{left:"100%",top:"35%"},{left:"45%",top:"25%"},{left:"65%",top:"-15%"}],autoRotate:-40},ease:$linear}).call(t,["stop",0]).call(t,["start",1]).to(a_array.butterfly_2,6,{bezier:{type:"thru",values:[{left:"100%",top:"60%"},{left:"67%",top:"25%"},{left:"45%",top:"30%"},{left:"50%",top:"28%"},{left:"67%",top:"30%"},{left:"81%",top:"50%"},{left:"105%",top:"12%"}],autoRotate:70},ease:$linear}).call(t,["stop",1]).call(t,["start",2]).to(a_array.butterfly_3,10,{bezier:{type:"thru",curviness:2,timeResolution:0,values:[{left:"100%",top:"10%"},{left:"67%",top:"15%"},{left:"50%",top:"30%"},{left:"60%",top:"31%"},{left:"75%",top:"45%"},{left:"72%",top:"30%"},{left:"55%",top:"10%"},{left:"40%",top:"-15%"}],autoRotate:70},ease:$linear}).call(t,["stop",2]).call(t,["start",3]).to(a_array.butterfly_4,10,{bezier:{type:"thru",curviness:1,timeResolution:2,values:[{left:"20%",top:"-10%"},{left:"22%",top:"60%"},{left:"22%",top:"55%"},{left:"22%",top:"30%"},{left:"50%",top:"22%"},{left:"30%",top:"-15%"}],autoRotate:70},ease:$linear}).call(t,["stop",3]),a_array.clouds_one=new TimelineMax({paused:!0,repeat:-1}),a_array.clouds_one.addLabel("start").to(a_array.s1_cloud_1,130,{x:1.2*-window_width}).to(a_array.s1_cloud_3,110,{x:1.2*-window_width},"start+=3").to(a_array.s1_cloud_2,120,{x:1.2*window_width},"start"),a_array.butterfly_wings=[],$(".butterfly_b",".section_one").each(function(){var a=$(this),e=$(".butterfly_left",a),t=$(".butterfly_right",a),r=new TimelineMax({repeat:-1,paused:!0});r.set(e,{force3D:!0,transformOrigin:"100% 50%"}).set(t,{force3D:!0,transformOrigin:"0 50%"}).addLabel("butterfly_start").staggerTo(e,.5,{rotationY:80},0,"butterfly_start").staggerTo(t,.5,{rotationY:80},0,"butterfly_start").addLabel("butterfly_two").staggerTo(e,.5,{rotationY:0},0,"butterfly_two").staggerTo(t,.5,{rotationY:0},0,"butterfly_two"),r.timeScale(1.1),a_array.butterfly_wings.push(r)}),a_array.ali_img_1=$(".ali_img_1"),a_array.ali_img_2=$(".ali_img_2"),a_array.hexagon_1_one=$(".hexagon_1_one"),a_array.hexagon_1_two=$(".hexagon_1_two"),a_array.hexagon_1_wrap=$(".hexagon_1_wrap"),a_array.alis_hexagons_tl=new TimelineMax({paused:!0}),a_array.alis_hexagons_tl.to(a_array.hexagon_1_one,.5,{xPercent:200,yPercent:-20,rotation:180,force3D:!0}).set(a_array.hexagon_1_two,{opacity:1,force3D:!0}).to(a_array.hexagon_1_two,.5,{xPercent:130,yPercent:-5,scale:1,rotation:180}).set(a_array.ali_img_1,{opacity:0}).set(a_array.ali_img_2,{opacity:1}).addLabel("g_start"),a_array.hexagon_1_array=[],a_array.hexagon_1_wrap.each(function(){var a=$(this),e=[{top:0,left:getRandomInt(10,90)+"%",ease:$bounce},{top:getRandomInt(10,87)+"%",left:0,ease:$bounce},{top:"87%",left:getRandomInt(10,90)+"%",ease:$bounce},{top:getRandomInt(10,87)+"%",left:"92%",ease:$bounce}],t=getRandomInt(0,3),r=getRandomInt(0,2),_=getRandomInt(0,1);a.index()<3?t=a.index():a.index()<7?t=a.index()-3:a.index()<15&&(t=a.index()-7);var o=e[t];e.splice(t,1);var i=e[r];e.splice(r,1);var n=e[_];e.splice(_,1);var s=e[0],l=new TimelineMax,g=new TimelineMax({repeat:-1});a.index()%2?g.addLabel("start").to(a,getRandom(1,2),i).to(a,getRandom(1,2),n).to(a,getRandom(1,2),s).to(a,getRandom(1,2),o):g.addLabel("start").to(a,getRandom(1,2),i).to(a,getRandom(1,2),n).to(a,getRandom(1,2),o),first_duration||(first_duration=g.totalDuration()),g.timeScale(g.totalDuration()/first_duration),l.to(a,.3,{scale:.3,force3D:!0}).addLabel("start").to(a,1,{scale:.5,ease:$easeOut},"start").to(a,1,o,"start").add(g).to(a,1.5,{top:window_height-74.7*rem,left:"51%",ease:$easeOut}).to(a,.3,{scale:.3},"-=.3").set(a,{opacity:0}),a_array.alis_hexagons_tl.add(l,"g_start")}),a_array.alis_hexagons_tl.to(a_array.hexagon_1_two,.5,{xPercent:0,yPercent:10,scale:.5,rotation:0}).set(a_array.hexagon_1_two,{opacity:0}).to(a_array.hexagon_1_one,.5,{xPercent:-50,yPercent:0,rotation:0}),a_array.design_man_img_1=$(".design_man_img_1"),a_array.design_man_img_2=$(".design_man_img_2"),a_array.hexagon_circle=$(".hexagon_circle"),a_array.design_wrap=$(".design_wrap"),a_array.design_tl=new TimelineMax({paused:!0,repeat:-1}),a_array.design_tl.set(a_array.hexagon_circle,{force3D:!0}).to(a_array.hexagon_circle,1,{rotation:"+=60"}).set(a_array.design_wrap,{className:"design_wrap pink_mod second_img_mod"}).set(a_array.design_wrap,{className:"design_wrap pink_mod"},"+=.3").to(a_array.hexagon_circle,1,{rotation:"+=60"}).set(a_array.design_wrap,{className:"design_wrap blue_mod second_img_mod"}).set(a_array.design_wrap,{className:"design_wrap blue_mod"},"+=.3").to(a_array.hexagon_circle,1,{rotation:"+=60"}).set(a_array.design_wrap,{className:"design_wrap orange_mod second_img_mod"}).set(a_array.design_wrap,{className:"design_wrap orange_mod"},"+=.3").to(a_array.hexagon_circle,1,{rotation:"+=60"}).set(a_array.design_wrap,{className:"design_wrap green_mod second_img_mod"}).set(a_array.design_wrap,{className:"design_wrap green_mod"},"+=.3").to(a_array.hexagon_circle,1,{rotation:"+=60"}).set(a_array.design_wrap,{className:"design_wrap second_img_mod"}).set(a_array.design_wrap,{className:"design_wrap "},"+=.3"),a_array.dev_girl=$(".dev_girl"),a_array.dev_girl_hexagon=$(".hexagon_figure_10"),a_array.dev_girl_hexagon_w=$(".hexagon_figure_w"),a_array.dev_girl_tl=new TimelineMax({repeat:2}),a_array.dev_girl_tl.set(a_array.dev_girl,{className:"dev_girl img_1_mod"}).set(a_array.dev_girl,{className:"dev_girl img_2_mod"},"+=.14").set(a_array.dev_girl,{className:"dev_girl img_3_mod"},"+=.14"),a_array.dev_tl=new TimelineMax({paused:!0,repeat:-1}),a_array.dev_tl.addLabel("start").set(a_array.dev_girl_hexagon_w,{opacity:1}).add(a_array.dev_girl_tl).set(a_array.dev_girl,{className:"dev_girl img_4_mod"},"+=.14").from(a_array.dev_girl_hexagon_w,1.8,{y:-window_height+42.6*rem},"start").to(a_array.dev_girl_hexagon,1,{className:"+=orange_mod",rotation:180,ease:$linear}).to(a_array.dev_girl_hexagon_w,1,{y:28*rem,ease:$linear}).set(a_array.dev_girl,{className:"dev_girl img_5_mod"}).to(a_array.dev_girl_hexagon_w,.5,{transformOrigin:"100% 100%",rotation:"+=180",ease:$linear}).to(a_array.dev_girl_hexagon_w,1,{y:100*rem,ease:$linear}).set(a_array.dev_girl,{className:"dev_girl img_6_mod"},"-=.8"),a_array.section_five_hline=$(".section_hline_b.section_five_mod"),a_array.flying_man=$(".flying_man"),a_array.hexagon_wings=$(".hexagon_wings"),a_array.hexagon_wing_left=$(".hexagon_wing_left"),a_array.hexagon_wing_right=$(".hexagon_wing_right"),a_array.flying_man_start_tl=new TimelineMax({paused:!0,onComplete:n}),a_array.flying_man_start_tl.addLabel("start").from(a_array.section_five_hline,2,{opacity:0},"start").from(a_array.flying_man,2,{y:4*rem},"start").from(a_array.hexagon_wing_left,2,{opacity:0,rotationY:-80,rotationX:-15},"start").from(a_array.hexagon_wing_right,2,{opacity:0,rotationY:80,rotationX:-15},"start"),a_array.flying_man_tl=new TimelineMax({paused:!0,repeat:-1}),a_array.flying_man_tl.addLabel("start").to(a_array.hexagon_wing_left,1,{rotationY:-60,rotationX:-10},"start").to(a_array.hexagon_wing_right,1,{rotationY:60,rotationX:-10},"start").to(a_array.flying_man,1,{y:2*rem},"start").addLabel("third").to(a_array.hexagon_wing_left,.5,{rotationY:0,rotationX:0},"third").to(a_array.hexagon_wing_right,.5,{rotationY:0,rotationX:0},"third").to(a_array.flying_man,.5,{y:0},"third")}
function throttle(a,e,t){e||(e=250);var r,_;return function(){var o=t||this,i=+new Date,n=arguments;r&&r+e>i?(clearTimeout(_),_=setTimeout(function(){r=i,a.apply(o,n)},e)):(r=i,a.apply(o,n))}}function getRandomInt(a,e){return Math.floor(Math.random()*(e-a))+a}function getRandom(a,e){return Math.random()*(e-a)+a}var $html,rem=10,$body_var,window_height,window_width,vert_percent,hor_percent,$current_page=1,$past_page=0,a_array={skip:[!1,!1,!1,!1,!1]},hor_constant=1920,vert_constant=1080,animation_fired=!1,$ease,first_duration=!1,default_time_scale=1,menu_time_scale=5,$linear=Power0.easeNone,$easeInOut=Power1.easeInOut,$easeOut=Power1.easeOut,$easeIn=Power1.easeIn,$bounce=CubicBezier.config(.89,1.01,.99,.9),$scroll_fired=!1,touchstart=!1,clickPointY,shift;$(document).ready(function(a){$html=a("html"),$body_var=a("body"),resize_f();var e=document.documentElement;e.setAttribute("data-useragent",navigator.userAgent),e.setAttribute("data-platform",navigator.platform),e.className+="ontouchstart"in window||"onmsgesturechange"in window?" touch":""}),$(window).on("load",function(){init(),side_menu(),LazyLoad.css("dist/styles/images.css")}),$(window).on("resize",resize_f),$(window).on("orientationchange",resize_f),$(window).on("touchstart",function(a){touchstart=!0,clickPointY=a.originalEvent.touches[0].pageY}),$(window).on("touchmove",function(a){shift=a.originalEvent.touches[0].pageY-clickPointY,animation_fired||a_array.main_timeline.isActive()||$scroll_fired||(scroll_f(shift),a_array.skip=[!1,!1,!1,!1,!1]),a.preventDefault()}),$(window).on("touchend",function(a){touchstart=!1,clickPointY=0,shift=0}),$(window).on("mousewheel",function(a){animation_fired||a_array.main_timeline.isActive()||$scroll_fired||(scroll_f(a.deltaY),a_array.skip=[!1,!1,!1,!1,!1])});

function resize_f() {
	window_width = $(window).width();
	window_height = $(window).height();

	vert_percent = Math.round(window_height / 100);
	hor_percent = Math.round(window_width / 100);

	if ($body_var.hasClass('develop_mod')) {
		console.log('window ' + window_width + ' X ' + window_height);
	}
	if (window_height > window_width - 500) {
		rem = (window_width / hor_constant) * 10;
		$body_var.removeClass('w_main').addClass('h_main');
	}
	else {
		$body_var.removeClass('h_main').addClass('w_main');
		rem = (window_height / vert_constant) * 10;
	}

	$html.css('font-size', rem + 'px');
}
/*$(document).ready(function(){
	$(".menu_trigger").click(function() {
		$(this).toggleClass("menu-expanded");
		$(".main_logo").toggle();
	});
});*/

$(document).ready(function() {
	$(".menu_trigger").on('click', function () {

		var this_cached = $(this);

		this_cached.find('.hamburger-menu').toggleClass('open');

		setTimeout(
				function () {
					this_cached.find('.hamburger-menu').toggle();

					//do something special
					this_cached.toggleClass("menu-expanded");
					$(".main_logo").toggle();
				}, 200);

	}); // end click function

	$(".section_corner").on('click', function () {
		if(!$(this).hasClass('first-box')){
			scroll_f(-1);
		}
	});

	var section_corner = $(".section_corner.section_first_v2");
	var tl = new TimelineMax({repeat:-1});

	tl
		.fromTo(section_corner, 1, {yPercent:-20},{yPercent:20})
		.to(section_corner, 1, {yPercent:-20})
	;

});


$(window).ready(function(){
if ($(window).width() <= 800){	
$("#service_menu").attr("href", "http://www.nikalabs.com/services-phone/")
}
});