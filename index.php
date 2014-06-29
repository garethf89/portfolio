<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Gareth Ferguson - Web Developer</title>
        <meta name="description" content="Personal portfolio of Gareth Ferguson, web developer from Newcastle, UK">
        <meta name="viewport" content="width=device-width, initial-scale=1.0,target-densitydpi=device-dpi">

        <base href="/">
        
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
         
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/jquery.classysocial.css">
        
        <!--[if lt IE 9]>
    		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
			<script src="http://code.jquery.com/jquery-migrate-1.1.1.min.js"></script>
		<![endif]-->
		
		<!--[if gte IE 9]><!-->
   			 <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<!--<![endif]-->
        
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.18/angular.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.18/angular-sanitize.min.js"></script>
        <script src="js/angular-route.min.js"></script>
        <script src="js/angular-animate.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/controllers.js"></script>
        
        <!-- Fancybox, CLassySocial -->
        <script src="js/plugins.js"></script>
        
        <link rel="stylesheet" href="js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
        
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'>
 
    </head>
    <body ng-app="garethPortfolio">
    
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        
        <!-- Header -->

        <header role="banner" id="top_header">
            
<!--<div id="social_nav">
       <div title="Share this" class="classysocial right" data-theme="default" data-arc-length="140" data-arc-start="60" data-image-type="picture" data-picture="images/share.png" data-facebook-handle="https://www.facebook.com/sharer/sharer.php?u=http://www.garethferguson.co.uk"" data-twitter-handle="https://twitter.com/share?text=Gareth Ferguson - Web Developer Portfolio&url=http://www.garethferguson.co.uk&via=gazmatron1" data-google-handle="https://plus.google.com/share?url=http://www.garethferguson.co.uk" data-linkedin-handle="http://www.linkedin.com/shareArticle?mini=true&url=http://www.garethferguson.co.uk&title=Gareth%20Ferguson%20Portfolio" data-networks="facebook,twitter,google,linkedin" data-radius="80"></div	
</div> -->
                                                                                                                                                           
        <nav class="site_width" role="navigation"> 
            <ul id="main_nav" class="clearfix">
                <li id="home_button" class="home_button"><a href="#">Home</a></d></li>
                <li id="contact_button"><a href="#/contact">Contact</a></li>
                <li><a href="files/cv.pdf" target="_blank">Download CV</a></li>
            </ul>
        </nav>
		
		</header>
		
		<article id="main_content">
		
            <section id="main_header">

            <div class="site_width centered">
                <h1>Gareth Ferguson.</h1>
                <p class="heading_subtext">Web developer<br/>based in Newcastle upon Tyne, UK</p> 			 	
            </div>

            </section>

            <section ng-view class="fadeAnimation" ></section>
		
		</article> 
		
		<div class="clearfix">&nbsp;</div>

        <!-- Google Analytics -->
<?php if(!isset($_GET['devmode'])) { ?>
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-23609811-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })(); 
	</script>
<?php } ?>
                              
    </body>
</html>
