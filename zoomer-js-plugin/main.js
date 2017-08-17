<script>
function zoomdiv() {
var myRange = document.getElementById('my-range'),
zoomlevel = myRange.value;
var elements = document.getElementsByClassName("zoomer");
for (var i = 0, len = elements.length; i < len; i++) {
elements[i].style.transform = "scale("+zoomlevel+")";
elements[i].style.webkitTransform = "scale("+zoomlevel+")";

}

}

jQuery(document).ready(function($){
$(document).on('input', '#my-range', function() {
   var zoomlevel = $("#my-range").val();
if ( zoomlevel = 1.25 ){
$(".et_pb_toggle").toggleClass("zoomed-in");
$(".products-store").toggleClass("zoomed-in");
$("#gform_wrapper_3").toggleClass("zoomed-in");
$("#thirdsection #second-col h4").toggleClass("zoomed-in");
} 
});



</script>