// JavaScript Document
// Author Name: Saptarang
// Author URI: http://www.saptarang.org
// Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
// Creation Date: 22nd December, 2013
// Version 1.0.2
// Description: A default stylesheet for OnEvent - Special Event Landing Page Template Designed & Developed By Saptarang./* CUSTOM PARAMETERS */

/* ==================================  GLOBAL  ==================================== */

			var main_color = "088A4B"; // Orange: This is global main color for your template.

			var page_background_color = "e6e6e6"; // Light Grey: This is the page background color for your template.

			var Heading_Font = "Roboto"; // thats your special Heading font

			var Site_Font = "Roboto"; // thats your special body content font

			var body_texture = "body-bg1.png"; // Change body texture here over the slideshow e.g. body-bg1.png, body-bg2.png, body-bg3.png, body-bg4.png


/* ================================  REGISTER FORM  =================================== */

	/* SET REGISTER FORM SUCCESS MESSAGE */

			var submitMessage = "Seus dados foram enviados com sucesso.";

			var successParagraph = "Entraremos em contato em breve!";

			var successBoxColor = "f9ffef"; // Background color for the success box

			var successBoxBorderStyle = "solid"; // Border Style  -  Example: solid, dotted, dashed, double

			var successBox_Border_Color = "bede8f"; // Border color for success box

			var textColor = "7a994c"; // text color for success box

/* ================================  SUBSCRIBE FORM  =================================== */

	/* SET SUBSCRIBE FORM SUCCESS MESSAGE */

			var sub_submitMessage = "Sua inscrição foi aceita com sucesso.";

			var sub_successBoxColor = "f9ffef"; // Background color for the success box

			var sub_successBoxBorderStyle = "solid"; // Border Style  -  Example: solid, dotted, dashed, double

			var sub_successBox_Border_Color = "bede8f"; // Border color for success box

			var sub_textColor = "7a994c"; // text color for success box

/* ================================  BACKGROUND SLIDESHOW  =================================== */

			$.backstretch([

			  // you can additional images in here with comma separated values
			  "../img/slider/slide_03.jpg",
			  "../img/slider/slide_02.jpg",
			  "../img/slider/slide_01.jpg"

			  ], {
				fade: 1000,
				duration: 7000
			});

/* ================================  REPLACE GOOGLE FONT CODE HERE  =================================== */

// Google Web Fonts

WebFontConfig = {
    google: { families: [ 'Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic:latin'] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
