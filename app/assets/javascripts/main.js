jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    // $('body').scrollspy({ target: '#header', offset: 400});
    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});

    // function loadRadioScript(){
    //     var el = document.createElement("script");
    //     el.type = "text/javascript"
    //     el.src = "http://cdn.caster.fm/0070B7/widgets/player.js"
        
    //     $("#radioContainer").append(el);
    // }

    // $("#listenNowBtn").click(function(){
    //     loadRadioScript();
    // });
});