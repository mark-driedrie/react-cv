import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Typekit from 'react-typekit';
import './css/foundation.css';
import './css/App.css';
const HtmlLayout = () => (
<html class="no-js" lang="en" dir="ltr">
  <body>
  

  	<div class="intro grid-container">
	  	<div class="grid-x grid-padding-x">
		  	
		  	<div class="image-wrapper large-5 medium-6 small-12">
			  	<div class="image-container">
			  	<figure class="effect-hover">
						<img class="image-head" src={"http://driedrie.nl/wp-content/uploads/2018/09/Mark_profile.jpg"} alt="profile"/>
						<figcaption>
							<p>
								<i><a href="http://www.driedrie.nl">Website</a></i> <br/>
								<i><a href="https://www.linkedin.com/in/markmeijer33/">LinkedIn</a></i>
							</p>
						</figcaption>			
					</figure>


		  	</div>
		  	</div>
		  	
		  	<div class="intro-greeting large-5 medium-6 small-12">
			  	<h1>HELLO!</h1>
			  	<h3>NICE TO MEET YOU</h3>
		  	</div>
	  	</div>
	  	
	  
	  	<div class="intro-txt">
		  	<p>ik ben Mark Meijer, woonachtig in arnhem en werkzaam als grafisch vormgever, webdesigner en front-end developer met een brede interesse en een groot doorzettingsvermogen. Vormgeven en ontwikkeling van eigen ideeën en inbreng is belangrijk, dit uit zich vooral in het zoeken naar andere manieren om een idee visueel te maken en een hoge investering in mijn eigen ontwikkeling als vormgever in zowel communicatie op het web als in print. Ook de technische realisatie van websites en digitale mailings heeft mijn aandacht en interesse.</p>
	  	</div>
  	</div> 
  	<hr />

  	<div class="timeline">
  	<div class="module-head large-5 medium-6 small-12">
  	<h1>Werkervaring</h1>
  	</div>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work vertical-timeline-element-left"
    date="Jan 2013 - present"
    iconStyle={{ background: 'rgb(42, 155, 119)', color: '#fff' }}
    icon={<img class="timeline-icon" src="http://driedrie.nl/wp-content/uploads/2018/09/driedrie.png"/>}
  >
    <h3 className="vertical-timeline-element-title">Frontend Developer, Webdesigner en Grafisch Vormgever</h3>
    <h4 className="vertical-timeline-element-subtitle">3/3, Arnhem</h4>
    <p>
      Vanuit 3/3 help ik startende ondernemers, zzp’ers en kleine bedrijven op het gebied van print, web en branding.
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work vertical-timeline-element-right"
    date="Nov 2014 - present"
    iconStyle={{ background: 'rgb(42, 155, 119)', color: '#fff' }}
    icon={<img class="timeline-icon" src="http://driedrie.nl/wp-content/uploads/2018/09/wab.png"/>}
  >
    <h3 className="vertical-timeline-element-title">Frontend Developer, Webdesigner en Grafisch Vormgever</h3>
    <h4 className="vertical-timeline-element-subtitle">We Are Bold, Amsterdam</h4>
  </VerticalTimelineElement>
  
    <VerticalTimelineElement
    className="vertical-timeline-element--work vertical-timeline-element-left"
    date="Nov 2013 - Nov 2014"
    iconStyle={{ background: 'rgb(42, 155, 119)', color: '#fff' }}
    icon={<img class="timeline-icon" src="http://driedrie.nl/wp-content/uploads/2018/09/countryfield.png"/>}
  >
    <h3 className="vertical-timeline-element-title">Grafisch Vormgever</h3>
    <h4 className="vertical-timeline-element-subtitle">Decostar/Countryfield, Apeldoorn</h4>
    <p>
      Vormgeving van verschillende vormen van drukwerk, denk hierbij aan beursmateriaal, flyers, uitnodigingen en drukwerkbegeleiding. Onderhoud website en webshop. Productfotografie en beeldbewerking. Opzetten van mailchimp-mailingen met een custom template.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work vertical-timeline-element-right"
    date="Feb 2011 - Jan 2013"
    iconStyle={{ background: 'rgb(42, 155, 119)', color: '#fff' }}
    icon={<img class="timeline-icon" src="http://driedrie.nl/wp-content/uploads/2018/09/tp.png"/>}
  >
    <h3 className="vertical-timeline-element-title">Frontend Developer, Webdesigner en Grafisch Vormgever</h3>
    <h4 className="vertical-timeline-element-subtitle">Terra Preta, Amsterdam</h4>
    <p>
      Gewerkt aan uiteenlopende projecten. Van drukwerk tot volledig digitaal, binnen dit spectrum van communicatieprojecten heb ik de vormgeving gedaan, van idee tot uitvoeren. Denk hierbij bijvoorbeeld aan branding-trajecten, webdesign/developement, digitale mailings, folder- en brochuremateriaal, kwartaalrapportages en huisstijlen.


    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work vertical-timeline-element-left"
    date="Jan 2007 - Jul 2009"
    iconStyle={{ background: 'rgb(42, 155, 119)', color: '#fff' }}
    icon={<svg class="jss1" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg>}
  >
    <h3 className="vertical-timeline-element-title">Studio Medewerker</h3>
    <h4 className="vertical-timeline-element-subtitle">Buttonboss, Enschede</h4>
    <p>
      Verantwoordelijk voor het ondersteunen van de productie, het maken van artist-impressions en productfotografie.


    </p>
  </VerticalTimelineElement>

  
</VerticalTimeline>
  	</div>
  	<hr />
<div class="toekomst grid-x grid-padding-x"> 
  	<div class="large-5 medium-6 small-12 img-wrap"> 	
  	<img src="http://driedrie.nl/wp-content/uploads/2018/09/surfer.gif" />

  	
  	</div>

<div class="large-5 medium-6 small-12"> 	
  	<div class="module-head"> <h1>En nu?</h1> </div>
  	  		  	<div class="intro-txt">
		  	<p>
		  	Goede vraag! 
		  	Op dit moment ben ik bezig mezelf verder te ontwikkelen als frontend developer. Dit houdt in dat ik react verder aan het ontdekken ben en ook andere .js frameworks staan op mijn lijstje, zoals Vue.js en Angular.js. Ook Javascript zelf wil ik verder uitdiepen en mezelf daarin verbeteren. Mijn ervaring op het gebied van front-end development zit hem vooral in html/css/scss/less/sass en wordpress-development. Ook elke website die ik maak en oplever is Responsive. Tegenwoordig mag dit eigenlijk al niet eens meer een vraag zijn, naar mijn bescheiden mening, elke site MOET responsive zijn.		  	</p>
		  	<p>
		  	Daar ik mij verder aan het ontwikkelen ben, zoek ik een plek waar ik dat kan en mag gaan doen! Ik hoop dat ik die kans bij tweedegolf krijg! Ik ben in ieder geval ontzetten gemotiveerd.
		  	
		  	</p>
		  	</div>
  	
  	</div>

  </div>
<Typekit kitId="fzi5uyr"/>
  </body>
</html>
    );

export default HtmlLayout;