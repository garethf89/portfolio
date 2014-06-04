$(document).ready(function(){
//define data for all work
var work = {};
work['ba'] = {
    name: 'Biritish Airways',
    desc: 'While working for web agency Leighton, I contributed to British Airways projects. This involved working directly with a team based in London and Newcastle to complete various projects<br/><br/>The most high profile project i worked on was the front end interface to allow Saved Payment Cards on the payment page, giving the functnality re-use previously saved cards and save new ones. <br/><br/> I also worked on a project to improve the functionality of the recent searches feature. This used the browsers localStorage and a database to allow the user to replay a previous search by clicking a button.',
    input: '',
    skills: ['CSS3', 'HTML5', 'JQuery & Javascript'],
    images: [{
        thumb: 'img/thumbs/bathumb1.png',
        image: 'images/lightboximg/bamain1.png'
    }, {
        thumb: 'img/thumbs/bathumb2.png',
        image: 'images/lightboximg/bamain2.png'
    }, {
        thumb: 'img/thumbs/bathumb3.png',
        image: 'images/lightboximg/bamain3.png'
    }],
    links: [{
        title: 'Leighton',
        link: 'http://www.leighton.com'
    }]
};
work['elevon'] = {
    name: 'Elévon World',
    desc: "Wordpress based site for a fashion company. This project invovled work on the wordpress template using PHP, HTML and JavaScript. It also required integration with a payment system which is currently PayPal.",
    input: '',
    skills: ['Wordpress', 'PayPal','CSS3', 'HTML5', 'JQuery & Javascript', 'PHP'],
    images: [{
        thumb: 'img/thumbs/elevonthumb1.png',
        image: 'images/lightboximg/elevonmain1.png'
    }, {
        thumb: 'img/thumbs/elevonthumb2.png',
        image: 'images/lightboximg/elevonmain2.png'
    }, {
        thumb: 'img/thumbs/elevonthumb3.png',
        image: 'images/lightboximg/elevonmain3.png'
    }],
    links: [{
        title: 'Elevon',
        link: 'http://www.elevonworld.com'
    }]
};
work['happiest_homepage'] = {
    name: 'Happiest Homepage',
    desc: "Happiest's latest homepage was designed mobile first so it would be compatible with all devices. the aim of the page is to give the user enough information about the company to convince them to sign up. <br /> <br /> This project was developed using HTML5 and CSS3 with the modal popups and other functionality using JQuery.",
    input: 'I developed all of this project myself working alongside a designer.',
    skills: ['Responsive Design', 'CSS3', 'HTML5', 'JQuery & Javascript'],
    images: [{
        thumb: 'img/shots/hphome1.png',
        image: 'img/shots/hphome1.png'
    }, {
        thumb: 'img/shots/hphome2.png',
        image: 'img/shots/hphome2.png'
    }, {
        thumb: 'img/shots/hphome3.png',
        image: 'img/shots/hphome3.png'
    }],
    links: [{
        title: 'Happiest',
        link: 'http://www.happie.st'
    }]
};
work['happiest_app'] = {
    name: 'Happiest Application',
    desc: "Happiest is a social network that allows users to connect with businesses and gain rewards for the products they buy. This complex site was built with PHP & JQuery which connected to a PHP API and Postgres database. ",
    input: 'I developed this as part of a team with my responsibility being the front end, occasionally helping with the API. ',
    skills: ['CSS3', 'HTML5', 'JQuery & Javascript', 'PHP', 'PostgreSQL'],
    images: [{
        thumb: 'img/shots/hpapp1.png',
        image: 'img/shots/hpapp1.png'
    }, {
        thumb: 'img/shots/hpapp2.png',
        image: 'img/shots/hpapp2.png'
    }, {
        thumb: 'img/shots/hpapp3.png',
        image: 'img/shots/hpapp3.png'
    }],
    links: [{
        title: 'Happiest',
        link: 'http://www.happie.st'
    }]
};
work['esearcher'] = {
    name: 'eSearcher',
    desc: "This project intended to provide a visually appealing application that used a database to display media from events by the client. It supplied videos, images, documents and links to learning resources. The aim was make content easy to find by using sorting and searching features. <br/><br/> In addition to the main app, a client admin app was also created to allow the client to add and edit resources.",
    input: 'I developed this for my dissertation project at university. ',
    skills: ['Flash Builder', 'PHP', 'MySQL'],
    images: [{
        thumb: 'img/shots/esearcher1.png',
        image: 'img/shots/esearcher1.png'
    }, {
        thumb: 'img/shots/esearcher2.png',
        image: 'img/shots/esearcher2.png'
    }, {
        thumb: 'img/shots/esearcher3.png',
        image: 'img/shots/esearcher3.png'
    }],
    links: [{
        title: 'eSearcher',
        link: 'http://garethferguson.co.uk/projects/esearcher/eSearcher.swf'
    }]
};

work['other_projects'] = {
    name: 'Other Projects',
    desc: ' I developed several flash based projects between 2008-2010. Flash is deprecated technology today however it was not long ago that most of the internets interactive content ran on it. My flash projects were always driven by the programming capabilities of ActionScript 3, a language which shares a lot of similiarities with JQuery and other modern web technologies.<br/><br/>The WiiSources project was designed to be playable on Nintendo Wii but also on computers, It was a series of games aimed at small children to improve hand-eye coordination.<br/><br/>The music finder app was built using Adobe Flex (Flash Builder). This allowed the user to search for music in a database.<br/><br/>The Hartlepool Space to Learn site was built as a holding page for Hartlepool Council to advertise an upcoming learning building.<br/><br/>The Northern Grid Awards 2010 site was built to show the winners of the learning technology awards show. It was built using JQuery. <br/><br/> Unfortunately these sites have served their purpose and are now offline. ',
    skills: ['HTML5', 'CSS3', 'JQuery & Javascript', 'Adobe Flash','Flash Builder', 'PHP', 'SQL Lite'],
    links: [{
        title: 'WiiSources',
        link: 'http://garethferguson.co.uk/files/menu.swf'
    },{
        title: 'Music Finder',
        link: 'http://garethferguson.co.uk/projects/esearcher/eSearcher.swf'
    }],
    images: [{
        thumb: 'img/shots/music1.png',
        image: 'img/shots/music1.png'
    },{
        thumb: 'img/shots/mini1.png',
        image: 'img/shots/mini1.png'
    }, {
        thumb: 'img/shots/mini2.png',
        image: 'img/shots/mini2.png'
    },
    {
        thumb: 'img/shots/flash1.png',
        image: 'img/shots/flash1.png'
    }, {
        thumb: 'img/shots/flash2.png',
        image: 'img/shots/flash2.png'
    }, {
        thumb: 'img/shots/flash3.png',
        image: 'img/shots/flash3.png'
    }]  
};

	var tech_classes = {
	'CSS3' : 'tech_css',
	'HTML5' : 'tech_html',
	'Responsive Design' : 'tech_responsive',
	'JQuery & Javascript' : 'tech_jquery',
	'PHP' : 'tech_php',
	'Flash Builder' : 'tech_fb',
	'Adobe Flash' : 'tech_fl',
	'MySQL' : 'tech_db',
	'SQL Lite' : 'tech_db',
	'PostgreSQL' : 'tech_db',
    'Wordpress' : 'tech_wordpress',
	'PayPal' : 'tech_paypal'};

	//get class name in template based on text of skill
	Handlebars.registerHelper('getClass', function(skill) {
 	 return tech_classes[skill];
	});
    
    //setup social links
    $(".classysocial").each(function() {
        new ClassySocial(this);
    });
	
     //Get GET param
     function getUrlVars() {
   		var vars = {};
   		 var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      	  vars[key] = value;
   	 	});
    		return vars;
		}

	 //hide content
	 function hideMain(){
	 
		var slider = $('.home_slider');
		var hompage_main = $('#main_content_upper');
		var myWork = $('#my_work');
		
		myWork.fadeOut();
		hompage_main.fadeOut();
		slider.slideUp();

	 }
	 
	 //show content
	 function showMain(){
	 
		var slider = $('.home_slider');
		var hompage_main = $('#main_content_upper');
		var myWork = $('#my_work');
		
		myWork.delay(400).fadeIn();
		hompage_main.delay(400).fadeIn();
		slider.slideDown();

	 }
	 
	 //remove everything
	 function removePages(){
	 	
	 	//remove the pages
	 	$('#work_page,#contact_success,#contact_me').remove();
	 }
	 
	 //if returning from contact form
	 if(!!getUrlVars()["email"]){
	 
	 	hideMain();
	 	
	 	var contact_form = $("#tmpl_contact_success").html();
		
		$('#main_content').append(contact_form);
	 }
	 
	 //home button
	  $(document).on('click', '.home_button', function(){
	  	removePages();
		showMain();
	 });
	 
	 //contact button
	 $('#contact_button').on('click', function(){
		
		removePages();
		hideMain();
		
		var contact_form = $.parseHTML($("#tmpl_contact_form").html());
		
		$(contact_form).appendTo('#main_content').hide().delay(400).fadeIn();
		
	 });
	 
	 //work choice
	 $('.work_item').on('click', function(){
	 	
	 	$(document).scrollTop();
	 	
	 	removePages();
	 	
	 	//get the value
	 	var data_type = $(this).attr('data-work');	
	 	var current_work = work[data_type];	 	
	 	
	 	//do this is a value found
	 	if(current_work){
	 	     console.log(current_work);
	 		//setup template
	 		var template_source = $("#tmpl_work_item").html();
			var template = Handlebars.compile(template_source);
			var work_hmtl =  $.parseHTML(template(current_work));
		
			//add to page
			$(work_hmtl).appendTo('#main_content').hide();
            
            $(work_hmtl).fadeIn(400, function(){
                
                $(work_hmtl).find('.fancyModal').fancybox();
			
			});

			hideMain();
	 	  		
  		}
	 	
	 });	 

});