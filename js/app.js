 $(function() {

    var header = $("#header"),
         introH = $("#intro").innerHeight(),
         scrollOffset = $(window).scrollTop;


            // Fixed Header  
          checkSkroll(scrollOffset);
   
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
       
        checkSkroll(scrollOffset);

    });


    function checkSkroll(scrollOffset) {
        
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
         }  else {
            header.removeClass("fixed");
         }
    }


    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
    
    var $this = $(this)
        blockid = $this.data('scroll'),
        blockOffset = $(blockid).offset().top;


        $("#nav a").removeClass("active");
        $this.addClass("active");

       $("html, body").animate({
        scrollTop: blockOffset
       }, 500)
        
    });

 

    // Menu nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    // Collapse
    $("[data-collapse]").on("click",function(event) {
        event.preventDefault();
        
        var $this = $(this)
        blockid = $this.data('collapse');

        ;
        $(blockid).slideToggle();


    });


// Slider
$("[data-slider]").slick({
    infinite: true,
    fade : false,
    slidesToShow: 1,
    slidesToScroll: 1
})



});