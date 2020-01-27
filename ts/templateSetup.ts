config {
  htmlTag_setParams.xmlns="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" xml:lang="de" lang="de"
  doctype = html5
  xhtml_cleaning = all        
  simulateStaticDocuments = 0
  baseURL  = {$BaseURL}
  index_enable = 1
  #index_externals = 1    
  sys_language_mode= content_fallback
  #sys_language_overlay = hideNonTranslated
  sys_language_uid = 0
  no_cache = 1
  language = de
  locale_all = german
  locale_all = de_DE.utf-8
  linkVars = L
  renderCharset =utf-8
  metaCharset =utf-8
  tx_realurl_enable = 1
 
  htmlTag_langKey = de

}

#tt_content.image.20.renderMethod = figure
#tt_content.image.20.rendering.figure

#tt_content.stdWrap.innerWrap >
tt_content.stdWrap.innerWrap.cObject {
  100 = TEXT
  100.value = <div class="news-cont">|</div>
  101 = TEXT
  101.value = <div class="col-xs-7 col-md-12">|</div>
  
 

}



#fluid template mapping 
page = PAGE
page.typeNum = 0




[globalVar=TSFE:page|layout=0] 
  
  page.10 = FLUIDTEMPLATE
  page.10 {
    format = html
    file = fileadmin/templates/home.html
    partialRootPath = fileadmin/templates/partials/
    layoutRootPath = fileadmin/templates/layouts/
    variables {
      main_content < styles.content.get
      main_content.select.where = colPos = 0
      
      banner_content < styles.content.get
      banner_content.select.where = colPos = 1
      
      pinpost_content < styles.content.get
      pinpost_content.select.where = colPos = 2
      
      
    }
  }
  
  page.bodyTag = <body>
  
[global]

[globalVar=TSFE:page|layout=1] 
  
  page.10 = FLUIDTEMPLATE
  page.10 {
    format = html
    file = fileadmin/templates/Leistungen.html
    partialRootPath = fileadmin/templates/partials/
    layoutRootPath = fileadmin/templates/layouts/
    variables {
    banner_content < styles.content.get
      banner_content.select.where = colPos = 1
    
      main_content < styles.content.get
      main_content.select.where = colPos = 0
    }
  }
  
  page.bodyTag = <body>
  
[global]



page.headerData.25 = TEXT
page.headerData.25.value(
<link rel="stylesheet" type="text/css" href="http://flipbookplugin.com/wp-content/cache/minify/000000/bY1RCoAgEAUvlLzqRquuKZhKuxLevugjCPobhoE5m3G1KBdFb7mSF1hrWu5bKnDkImM1mUbtOs3wGnlnOBE89FWRyfMxLfAhpwYSYZU3TmGYdL_kL3jEBQ.css" media="all" />
 <link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />

        <style type="text/css">
img.wp-smiley,
img.emoji {
    display: inline !important;
    border: none !important;
    box-shadow: none !important;
    height: 1em !important;
    width: 1em !important;
    margin: 0 .07em !important;
    vertical-align: -0.1em !important;
    background: none !important;
    padding: 0 !important;
}
</style>

<link rel='stylesheet' id='DTheme-google_fonts-css'  href='//fonts.googleapis.com/css?family=Open+Sans:400,600,700|Roboto:400,500,700&#038;subset=latin,latin-ext' type='text/css' media='all' />

  <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/style.css">
  <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/font-style.css">
  <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/font-awesome.css">
  <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/main.css">
  <!-- Bootstrap Menu CSS -->
  <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/jquery.smartmenus.bootstrap.css">

  <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/ninja-slider.css">
  <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/jquery.fancybox.css?v=2.1.5" media="screen" />
  <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/cubeportfolio.min.css">

  <script data-cfasync="false"> var dFlipLocation = "http://flipbookplugin.com/wp-content/plugins/dflip/assets/"; var dFlipWPGlobal = {"text":{"toggleSound":"Turn on\/off Sound","toggleThumbnails":"Toggle Thumbnails","toggleOutline":"Toggle Outline\/Bookmark","previousPage":"Previous Page","nextPage":"Next Page","toggleFullscreen":"Toggle Fullscreen","zoomIn":"Zoom In","zoomOut":"Zoom Out","toggleHelp":"Toggle Help","singlePageMode":"Single Page Mode","doublePageMode":"Double Page Mode","downloadPDFFile":"Download PDF File","gotoFirstPage":"Goto First Page","gotoLastPage":"Goto Last Page","share":"Share"},"mainControls":"altPrev,pageNumber,altNext,outline,thumbnail,zoomIn,zoomOut,fullScreen,share,more","hideControls":"","scrollWheel":"true","backgroundColor":"#777","backgroundImage":"","height":"100%","duration":800,"soundEnable":"true","enableDownload":"true","webgl":"true","hard":"cover","maxTextureSize":"1600","zoomRatio":1.5,"singlePageMode":"0"};</script>
)  


page.footerData {
  800 = TEXT
  800.value (
  <script type="text/javascript" src="fileadmin/templates/js/jquery-1.12.0.min.js"></script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTEgeugKIuqvOqVHr1AtG7tKA1wQFYBDs&callback=initMap"></script>
<script src="typo3conf/ext/pb_tt_address_googlemaps/Resources/Public/JavaScript/googleMaps.1486018888.js" type="text/javascript"></script>
  <script type="text/javascript"> 
  $(document).ready(function(){
    $('.container img').removeAttr('width');    
    $('.container img').removeAttr('height');
    $('.banner img').removeAttr('width');    
    $('.banner img').removeAttr('height');
	$('.csc-textpic-imagewrap').removeAttr('style');
	$('.csc-textpic-imagewrap img').removeAttr('width');
	$('.csc-textpic-imagewrap img').removeAttr('height');
      
  });
  
  </script>
    <!-- JS -->
  
  <script type="text/javascript" src="fileadmin/templates/js/bootstrap.min.js"></script>
  
  <script type="text/javascript" src="fileadmin/templates/js/jquery.cubeportfolio.min.js"></script>
    <script type="text/javascript" src="fileadmin/templates/js/main.js"></script>
    <script type="text/javascript">
      
      function toggleIcon(e) {
        jQuery(e.target)
          .prev('.panel-heading')
          .find(".more-less")
          .toggleClass('glyphicon-plus glyphicon-minus');
      }
      jQuery('.panel-group').on('hidden.bs.collapse', toggleIcon);
      jQuery('.panel-group').on('shown.bs.collapse', toggleIcon);
      $('.carousel').carousel({
      interval: 7000
      }); 
    </script>
    
  
    <script type="text/javascript">
    $("#myCarousel").on("slid.bs.carousel", function () {
      
      var slide_number = $(".carousel-indicators").find(".active").attr("data-slide-to");
      
      $(".acts").removeClass("active");    
      
      $(".act"+slide_number).addClass("active");
    });
      
    </script>

  <!-- Bootstrap Menu JS -->
  <script type="text/javascript" src="fileadmin/templates/js/jquery.smartmenus.js"></script>
  <script type="text/javascript" src="fileadmin/templates/js/jquery.smartmenus.bootstrap.js"></script>
  <script type="text/javascript" src="fileadmin/templates/js/jquery.mobile-1.4.5.js"></script>
  <script type="text/javascript" src="fileadmin/templates/js/jquery.fancybox.js?v=2.1.5"></script>
  <script type="text/javascript">
      $(document).ready(function() { 
        $(".fancybox").fancybox(); 
         $("#myCarousel").swiperight(function() {  
          $("#myCarousel").carousel('prev');  
        });  
         $("#myCarousel").swipeleft(function() {  
          $("#myCarousel").carousel('next');  
         });  
      });  

      function showdata(num) {
        $(".panel-heading").removeClass("selected");
        //$(".iframe-right-cont").attr("style","display:none;"); 
        var classes = $('#collapse-'+num).attr('class').split(' ');
        
        if(classes[2] == "in"){
          $("#left"+num).removeClass("selected");
        
        }else{
          $("#left"+num).addClass("selected"); 
        }
     }

     function showmode(id){
        $(".normal").hide();
        if(id == 0){
          $(".normal").show();
        }
        $(".showmode"+id).show();

     }
  </script>
  <script type="text/javascript" src="fileadmin/templates/js/first.js"></script>
  )  
    
}


tt_content.gridelements_pi1.20.10.setup {
 # ID des gridelements
 1 < lib.gridelements.defaultGridSetup
 1 {
   columns {
     # colPos ID
     401 < .default
     401.wrap = <div class="col-sm-7 mid-left-content"><div class="row">|</div></div>
    
     # colPos ID
     402 < .default
     402.wrap = <div class="col-sm-5 right-content-details"><div class="row"><div class="">|</div></div></div>
   
   
   }
   # Optional kann das gesamte Element noch einen wrap bekommen
   wrap = |
 }
 
 2 < lib.gridelements.defaultGridSetup
 2 {
   columns {
     # colPos ID
     501 < .default
     501.wrap =  <div class="mid-right-content">|</div>
    
    
   
  
   }
   # Optional kann das gesamte Element noch einen wrap bekommen
   wrap = |
 }
 
 3 < lib.gridelements.defaultGridSetup
 3 {
   columns {
     # colPos ID
     601 < .default
     601.wrap = <div class="banner-img">|</div>
    
     
   }
   # Optional kann das gesamte Element noch einen wrap bekommen
   wrap = |
 }
 
 4 < lib.gridelements.defaultGridSetup
 4 {
   columns {
     # colPos ID
     801 < .default
     801.wrap = <div class="col-sm-4 col-md-4 pad-right"><div class="row">|</div></div>
    
     # colPos ID
     802 < .default
     802.wrap = <div class="col-sm-4 col-md-4 pad-right"><div class="row">|</div></div>
   
   # colPos ID
     803 < .default
     803.wrap = <div class="col-sm-4 col-md-4 pad-left"><div class="row">|</div></div>
   }
   # Optional kann das gesamte Element noch einen wrap bekommen
   wrap = |
 }

}

lib.logo1 = TEXT
lib.logo1.value= <a href="./"><img src="fileadmin/templates/img/logo1.png" alt="" /></a>

lib.logo3 = TEXT
lib.logo3.value= <a href="./"><img src="fileadmin/templates/img/logo3.png" alt=""></a>

lib.kontakt1 = TEXT
lib.kontakt1.value= <a class="top-kont visible-xs" href="./kontakt.html">KONTAKT</a>

lib.kontakt2 = TEXT
lib.kontakt2.value= <a class="top-kont" href="./kontakt.html">KONTAKT</a>

lib.footersocialicon = TEXT
lib.footersocialicon.value(
<ul>
  <li><a href="./"><img src="fileadmin/templates/img/fb.png" /></a></li>
  <li><a href="./"><img src="fileadmin/templates/img/g+.png" /></a></li>
</ul>
)

lib.footeraddres = RECORDS
lib.footeraddres {
    tables = tt_content    
    source = 1
}

lib.footerphone = RECORDS
lib.footerphone {
    tables = tt_content    
    source = 3
}

lib.footerform = RECORDS
lib.footerform {
    tables = tt_content    
    source = 4
}

tt_content.image.20.1.imageLinkWrap {
  JSwindow = 0
  directImageLink = 1
  linkParams.ATagParams {
    dataWrap = class="fancybox" data-fancybox-group="lightbox{field:uid}"
  }
}
