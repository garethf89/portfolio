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

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/jquery.classysocial.css">
        
        <script src="http://code.jquery.com/jquery-2.1.0.min.js" />
        
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <!--<script src="js/main.js"></script>-->
        <script src="js/plugins.js"></script>
        
        <link rel="stylesheet" href="js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
        <script type="text/javascript" src="js/fancybox/jquery.fancybox.pack.js"></script>
        
        <!--[if lt IE 9]>
    		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
			<script src="http://code.jquery.com/jquery-migrate-1.1.1.min.js"></script>
		<![endif]-->
		
		<!--[if gte IE 9]><!-->
   			 <script src="js/myjs.js"></script>
		<!--<![endif]-->

		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'>
 
    </head>
    <body>
    
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        
        <!-- Header -->

        <header role="banner" id="top_header">
            
            <div id="social_nav">
       <div title="Share this" class="classysocial right" data-theme="default" data-arc-length="140" data-arc-start="60" data-image-type="picture" data-picture="images/share.png" data-facebook-handle="https://www.facebook.com/sharer/sharer.php?u=http://www.garethferguson.co.uk"" data-twitter-handle="https://twitter.com/share?text=Gareth Ferguson - Web Developer Portfolio&url=http://www.garethferguson.co.uk&via=gazmatron1" data-google-handle="https://plus.google.com/share?url=http://www.garethferguson.co.uk" data-linkedin-handle="http://www.linkedin.com/shareArticle?mini=true&url=http://www.garethferguson.co.uk&title=Gareth%20Ferguson%20Portfolio" data-networks="facebook,twitter,google,linkedin" data-radius="80"></div>		
</div>
        <div class="site_width">
        <nav role="navigation"> 
        
			<ul id="main_nav" class="clearfix">
				<li id="home_button" class="home_button">Home</li>
				<li id="contact_button">Contact</li>
				<li><a href="files/cv.pdf" target="_blank">Download CV</a></li>
			</ul>
								
		</nav>
		</div>
		
		</header>
		
		<article id="main_content">
		
		<section id="main_header">
		
		<div class="site_width centered">
			<h1>Gareth Ferguson.</h1>
			<p class="heading_subtext">Web developer<br/>based in Newcastle upon Tyne, UK</p> 			 	
		</div>
				
		</section>
		
		<section id="main_content_upper" class="site_width clearfix centered">
		
			<article id="about_me">
				<h2>About Me...</h2>
				<p class="about_text">
					Hi, I am a Front End Web Developer based in Newcastle Upon Tyne, UK. I graduated from Northumbria University in 2011 with first class honors and have been working on various projects since then. I specialise in working on large scale web applications in which I have used primarily JQuery and PHP. I also have experience in regular web pages and converting PSD images to HTML code. 
				</p>
			</article>
			
		
		</section>
		
		<section id="my_work" class="site_width centered">
		
			<h2>My Work...</h2>
			
			<div id="work_items">
            <div class="work_item" data-work="elevon">
				<div class="work_image work_elevon"></div>
				<h4>Elévon World</h4>
			</div>                    
            <div class="work_item" data-work="happiest_homepage">
				<div class="work_image work_hhomepage"></div>
				<h4>Happiest Homepage</h4>
			</div>
			<div class="work_item" data-work="happiest_app">
				<div class="work_image work_happ"></div>
				<h4>Happiest App</h4>
			</div>
			<div class="work_item end" data-work="esearcher">
				<div class="work_image work_esearch"></div>
				<h4>eSearcher</h4>
			</div>
			<div class="work_item" data-work="music_finder">
				<div class="work_image work_music"></div>
				<h4>Music Finder</h4>
			</div>
			<div class="work_item" data-work="other_projects">
				<div class="work_image work_mini"></div>
				<h4>Other Projects</h4>
			</div>
			</div>
		
		</section>
		
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
                              
                              
    <div id="fb-root"></div>
    
    <script id="tmpl_contact_form" type="text/x-handlebars-template">
		
		<section id="contact_me" class="site_width centered">
		
			<form id="contact_form" action="formEmail.php" method="post">
			
			<h2>Contact me</h2>
			
			<label for="person_name">Name:<span class="required"> *</span></label>
			<input type="text" required name="person_name" id="person_name" tabindex="1" />
			
			<label for="person_email">Email:<span class="required"> *</span></label>
			<input type="email" required name="person_email" id="person_email" tabindex="2" />
			
			<label for="person_enq">Message:<span class="required"> *</span></label>
			<textarea name="person_enq" id="person_enq" tabindex="3" rows="4" ></textarea>
			
			<button id="submit_message" class="green_button" tabindex="4">Submit</button>
			
			<p><span class="required">* = Required field</span></p>
			
			</form>
		
		</section>
		
	</script>
	
	<script id="tmpl_contact_success" type="text/x-handlebars-template">
		
		<section id="contact_success" class="site_width">
		
			<h2>Thank you!</h2>
			
			<p>Your email was successfully sent, thanks for your interest!</p>
		
		</section>
		
	</script>
	
	<script id="tmpl_work_item" type="text/x-handlebars-template">
	
	<section id="work_page" class="site_width">

    <section id="work_details">
                              
        <header class="wiHeader clearfix">
            <div class="workPage_home home_button">Home</div>
            <span class="workPage_divider">&#47;</span>
            <h2>{{name}}</h2>
        </header>                  

        <h4>Details:</h4>
        <p>{{{desc}}}</p>

         {{#if input}}
        <h4>Input:</h4>
        <p>{{input}}</p>
        {{/if}}

        <h4>Technology:</h4>
        <ul id="tech_used">
            {{#each skills}}
            <li>
                <div class="{{getClass this}}"></div>{{this}}</li>
            {{/each}}
        </ul>
                                              
        <div class="clearfix">&nbsp;</div>                                   

        <h4>Images:</h4>                  
        <div id="work_slider">

            <div class="sliderContainer">
                {{#each images}}
                <a class="fancyModal" rel="galWork" href="{{image}}">
                    <img src="{{thumb}}" />
                </a>
                {{/each}}
            </div>

            {{#if links}} {{#each links}}
            <a class="green_button work_link" target="_blank" href="{{this.link}}" tabindex="1">Visit {{this.title}}</a>
            {{/each}} {{/if}}

        </div>


    </section>

</section>
		
	</script>
	
    </body>
</html>
