$(document).ready(function() { 

    $('#fullpage').fullpage(
      {
        fixedElements: '#togelContainer,#contactContainer, #menuContainer',
        css3: true,
	      scrollingSpeed:1000,
        autoScrolling:  true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Accueil/Welcom', 'secondSlide'],

        sectionsColor : ['#ccc', '#333'],

        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        
	      
      });

    $("#menu li a").click(function(){
      if (!$(this).hasClass("btn")) {
        if (!$(this).hasClass("active")) {
          $("li a.active").removeClass("active");
          $(this).addClass("active");
        }
      }
        
    });

    $('#toggel').on('click',function(){
        if (!$(this).children().hasClass("change")) {
          $(this).children().addClass('change');
          $("#menuContainer").css({'display': 'block'}).animate({opacity:1},1000);
        }else{
          $(this).children().removeClass('change');
          $("#menuContainer").animate({opacity:0},500).css({'display': 'none'});
        }     
    });

    $('#menu li').mouseover(function(){
        $(this).children(".barEffect").css({'display':'block'}).animate({'height':'50px'},300)
    });
    $('#menu li').mouseout(function(){
        $(this).children(".barEffect").css({'height':'0px','display':'none'});
    });

    
    $('#dropecontainer').hide();
    $('#dropItem').click(function(){
      $('#dropecontainer').show();
    })
    

  
});