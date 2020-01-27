###top navigation start###
lib.navigation = HMENU
lib.navigation {
    
  special = directory
  special.value = 1  
  #excludeUidList = 18
  1 = TMENU
  1 {

    wrap = <ul class="nav navbar-nav">|</ul>
    expAll = 1
    noBlur = 1

    NO {
      wrapItemAndSub = <li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>    
         
    } 
	
    ACT = 1    
    ACT {
      wrapItemAndSub = <li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>  
	  #doNotLinkIt = 1
	  ATagParams = class="activ"
              
	  
    }    

	IFSUB = 1
    IFSUB {
      wrapItemAndSub = <li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>
	  stdWrap.wrap = |<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>
	  #ATagParams = class="activ"
    }       
    
	ACTIFSUB = 1
    ACTIFSUB {
      wrapItemAndSub = <li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>||<li>|</li>
	 stdWrap.wrap = |<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>|||<span class="caret"></span>
	  ATagParams = class="activ"
    }       
	
  } 

  2 < .1
  2 {
    wrap = <ul class="dropdown-menu">|</ul>        
    expAll = 1
    noBlur = 1
    NO {
      wrapItemAndSub = <li>|</li>   
	  
    }
    ACT = 1    
    ACT {
      wrapItemAndSub = <li>|</li>
	  ATagParams = class="activs"
    }        
    
	IFSUB = 1
    IFSUB {
     wrapItemAndSub = <li>|</li>
	 stdWrap.wrap = |<span class="caret no-rightpad"></span>
    }       
    
	ACTIFSUB = 1
    ACTIFSUB {
     wrapItemAndSub = <li>|</li>
	 stdWrap.wrap = |<span class="caret no-rightpad"></span>
	 ATagParams = class="activs"
    }
	
  }
  
  3 < .2
  3 {
    wrap = <ul class="dropdown-menu">|</ul>        
    expAll = 1
    noBlur = 1
    NO {
      wrapItemAndSub = <li>|</li>      
    }
    ACT = 1    
    ACT {
      wrapItemAndSub = <li>|</li>
	  ATagParams = class="activs"
    }        
    
    
  }
  
}

lib.navigation1 = TEXT
lib.navigation1.value(
	<li><a href="./kontakt.html">KONTAKT</a></li>
	<li><a href="./impressum.html">IMPRESSUM</a></li>
)

lib.boxtop1 = HMENU
lib.boxtop1{
  special = list
  special.value = 4
  1 = TMENU
  1.NO{
      doNotLinkIt = 1
      linkWrap = <ul><li><a href="javascript:;" style="color:#000;">|</a></li>
  }
}

lib.footernavigation = COA
lib.footernavigation {
    
  9 < lib.boxtop1
  10 = HMENU
  10.special = directory
  10.special.value = 4
  #excludeUidList = 2,5,6,7,8,9
  10.1 = TMENU
  10.1 {

    wrap = <ul>|</ul>
    expAll = 1
    noBlur = 1

    NO {
      wrapItemAndSub = <li>|</li>    
         
    } 
	
    ACT = 1    
    ACT {
      wrapItemAndSub = <li>|</li>  
	  #doNotLinkIt = 1
	  ATagParams = class="aktiv"
              
	  
    }    

  } 

}

lib.boxtop2 = HMENU
lib.boxtop2{
  special = list
  special.value = 31
  1 = TMENU
  1.NO{
      doNotLinkIt = 1
      linkWrap = <ul><li style="color:#000;"><a href="javascript:;" style="color:#000;">|</a></li>
  }
}

lib.footernavigation1 = COA
lib.footernavigation1 {
    
  9 < lib.boxtop2
  10 = HMENU
  10.special = directory
  10.special.value = 31  
  #excludeUidList = 2,3,4,7,8,9
  10.1 = TMENU
  10.1 {

    wrap = <ul>|</ul>
    expAll = 1
    noBlur = 1

    NO {
      wrapItemAndSub = <li>|</li>    
         
    } 
	
    ACT = 1    
    ACT {
      wrapItemAndSub = <li>|</li>  
	  #doNotLinkIt = 1
	  ATagParams = class="aktiv"
              
	  
    }    

  } 

}

lib.boxtop3 = HMENU
lib.boxtop3{
  special = list
  special.value = 3
  1 = TMENU
  1.NO{
      doNotLinkIt = 1
      linkWrap = <ul><li><a href="javascript:;" style="color:#000;">|</a></li>
  }
}


lib.footernavigation2 = COA
lib.footernavigation2 {
    
  9 < lib.boxtop3
  10 = HMENU
  10.special = directory
  10.special.value = 3   
  #excludeUidList = 2,3,4,5,6,7
  10.1 = TMENU
  10.1 {

    wrap = <ul>|</ul>
    expAll = 1
    noBlur = 1

    NO {
      wrapItemAndSub = <li>|</li>    
         
    } 
	
    ACT = 1    
    ACT {
      wrapItemAndSub = <li>|</li>  
	  #doNotLinkIt = 1
	  ATagParams = class="aktiv"
              
	  
    }    

  } 

}

lib.boxtop4 = HMENU
lib.boxtop4{
  special = list
  special.value = 43
  1 = TMENU
  1.NO{
      doNotLinkIt = 1
      linkWrap = <ul><li><a href="javascript:;" style="color:#000;">|</a></li>
  }
}



lib.footernavigation3 = COA
lib.footernavigation3 {
    
  9 < lib.boxtop4
  10 = HMENU
  10.special = directory
  10.special.value = 43   
  10.1 = TMENU
  10.1 {

    wrap = <ul>|</ul>
    expAll = 1
    noBlur = 1

    NO {
      wrapItemAndSub = <li>|</li>    
         
    } 
	
    ACT = 1    
    ACT {
      wrapItemAndSub = <li>|</li>  
	  #doNotLinkIt = 1
	  ATagParams = class="aktiv"
              
	  
    }    

  } 

}


