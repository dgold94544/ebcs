addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
		<title>East Bay Communication Systems &#8211; Serving volunteer radio.</title>
		<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
      </head>
      <body class="is-preload">
		<!-- Header -->
			<section id="header">
				<header>
					<span class="image avatar"><img src="images/ebcs_logo.png" alt="East Bay Communication Systems logo" /></span>
					<h1 id="logo"><a href="#">Leaders Needed</a></h1>
					<p>Train and mentor others in auxiliary communications.</p>
				</header>
				<nav id="nav">
					<ul>
						<li><a href="#one" class="active">About</a></li>
						<li><a href="#two">What We Do Well</a></li>
						<li><a href="#three">Our Board</a></li>
						<li><a href="#four">Contact</a></li>
					</ul>
				</nav>
				<footer>
					<ul class="icons">
						<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
						<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
						<li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
						<li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
					</ul>
				</footer>
			</section>

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Main -->
					<div id="main">

						<!-- One -->
							<section id="one">
								<div class="image main" data-position="center">
									<img src="images/Barn-near-Kregor-Peak-1.jpg" alt="Barn in fields of mustard near Kregor Peak" />
								</div>
								<div class="container">
									<header class="major">
										<h2>East Bay Communication Systems</h2>
										<h3><i>Serving volunteer radio</i></h3>
										<p>Welcome to East Bay Communication Systems!</p>
									</header>
									<p>EBCS is the new name for the CCRA, representing both a merger and an expansion of the great pioneering work of the original CCRA founders and members.</p>
									<p> As we embark on new missions serving the volunteer radio community throughout the Bay Area, we still adhere to the guiding principles that serve this spirited community: Collaboration, technical excellence, mentorship, and partnership. All are welcome to be part of the effort. There are no dues. Your time and expertise are value enough.</p>

<p>Our mission remains the same, with some new expansion&#8230;</p>
<p>1.  Provide an auxiliary emergency amateur radio communications repeater system that supports the needs of Bay Area residents.</p>
<p>2.  Provide amateur radio operators (hams), students, and teachers communications infrastructure where they can meet using amateur radio.</p>
<p>3.  Develop STEM education programs that allow students to grow their skills by managing, building, maintaining, and programming an emergency communications system with the guidance of mentors and partners.</p>
<p>4.  EBCS is a 501(c)(3) not-for-profit corporation able to obtain funding for maintaining the repeater infrastructure and for providing grants and scholarships to students and teachers.</p>
<br>
<p>73…Steve Overacker, WA6HAM
<br>One of the Founders of the CCRA, Trustee and Licensee of the WA6HAM repeater system</p>
<p><strong>This site is under construction! Please bear with us as we migrate to our new home here. Thanks for your continued support and understanding.</strong></p>
								</div>
							</section>

						<!-- Two -->
							<section id="two">
								<div class="container">
									<h3>What We Do Well</h3>
									<p>Our executive leadership team has built and maintained GMRS and Amateur radio repeater systems, Winlink hybrid nodes, and many complementary infrastructure elements.</p>
									<ul class="feature-icons">
										<li class="icon solid fa-cubes">Build repeater stacks</li>
										<li class="icon solid fa-code">Write code</li>
										<li class="icon solid fa-book">Document our work</li>
										<li class="icon solid fa-coffee">Have fun</li>
										<li class="icon solid fa-bolt">Energize auxiliary communications</li>
										<li class="icon solid fa-users">Train and mentor</li>
									</ul>
								</div>
							</section>

						<!-- Three -->
							<section id="three">
								<div class="container">
									<h3>Our Board</h3>
									<p>Our Board consists of proven leaders each with decades of experience serving volunteer radio.</p>
									<div class="features">
										<article>
											<a href="#" class="image"><img src="images/george.png" alt="George Moorehead KG6GEM" /></a>
											<div class="inner">
												<h4>George Moorehead KG6GEM 
												<br><i>President</i></h4>
												<p>George served as the EOC Manager for Lawrence Livermore National Laboratory. He served as the Community Emergency Response Team (CERT) Program Manager for the City of Brentwood, and he is a CERT instructor. He currently serves as a San Ramon Valley Fire Communication Reserve.</p>
											</div>
										</article>
										<article>
											<a href="#" class="image"><img src="images/chris.png" alt="Chris Quirk W6CJQ" /></a>
											<div class="inner">
												<h4>Chris Quirk W6CJQ 
												<br><i>Vice President & Treasurer</i></h4>
												<p>Chris has served 18 years with the San Ramon Valley Fire Protection district CERT leadership program. He served in support of a local neighborhood and wide area network of GMRS and Amateur radio systems, 15 years as a Communications Reservist with San Ramon Valley Fire as a COMT, RADO, COML. He has 30 years experience in complex medical and life science devices and electronic medical records.</p>
											</div>
										</article>
										<article>
											<a href="#" class="image"><img src="images/dan.png" alt="Daniel Goldstein KJ6KEU" /></a>
											<div class="inner">
												<h4>Daniel Goldstein KJ6KEU 
												<br><i>Vice President Technology</i></h4>
												<p>Dan has been in IT for over 35 years, and in cybersecurity for 25 years. He currently serves as the Administrative Sergeant for the Alameda County Sheriff's Communications Team, the California Region 2 Auxiliary Communications Mutual Aid Coordinator, and he serves as the ARRL East Bay Section Emergency Coordinator. Dan is also an elected Hayward City Council member.</p>
											</div>
										</article>
										<article>
											<a href="#" class="image"><img src="images/ryan.png" alt="" /></a>
											<div class="inner">
												<h4>Ryan Mahoney W6RAM 
												<br><i>Secretary<i></h4>
												<p>Ryan is a Public Safety Systems Specialist for the San Ramon Valley Fire Protection District and member of the Communications Reserve program. He established CERT communications systems on GMRS and trains in their use and operation.</p>
											</div>
										</article>
									</div>
								</div>
							</section>

						<!-- Four -->
							<section id="four">
								<div class="container">
									<h3>Contact Us!</h3>
									<p>If you would like to be part of the working group, please fill out this form. One of us will get back to you within the week.</p>
									<form method="post" action="#">
										<div class="row gtr-uniform">
											<div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
											<div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
											<div class="col-12"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
											<div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea></div>
											<div class="col-12">
												<ul class="actions">
													<li><input type="submit" class="primary" value="Send Message" /></li>
													<li><input type="reset" value="Reset Form" /></li>
												</ul>
											</div>
										</div>
										<br>EBCS is a 501(c)(3) non-profit public benefit charity. EIN: 99-3997529
									</form>
								</div>								
							</section>
				<!-- Footer -->
					<section id="footer">
						<div class="container">
							<ul class="copyright">
								<li>&copy; 2025 EBCS. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</section>
        <script>
          (function($) {
            var $window = $(window),
                $body = $('body'),
                $nav = $('#nav'),
                $wrapper = $('#wrapper');

            $window.on('load', function() {
              window.setTimeout(function() {
                $body.removeClass('is-preload');
              }, 100);
            });

            var $nav_a = $nav.find('a');
            $nav_a.on('click', function(e) {
              var $this = $(this);
              if ($this.attr('href').charAt(0) != '#') return;
              e.preventDefault();
              var target = $this.attr('href');
              $('html, body').animate({
                scrollTop: $(target).offset().top
              }, 1000);
            });
          })(jQuery);
        </script>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { "Content-Type": "text/html;charset=UTF-8" }
  });
}
