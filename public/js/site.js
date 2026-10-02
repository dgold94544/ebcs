document.addEventListener("DOMContentLoaded", function () {
	
	const archiveLink = document.querySelector(
    '#header > nav a.archive-link'
	);

	if (archiveLink) {

		archiveLink.classList.remove('active');

		archiveLink.addEventListener('click', function () {
			this.classList.remove('active');
		});

		window.addEventListener('pageshow', function () {

			if (archiveLink) {
				archiveLink.blur();
				archiveLink.classList.remove('active');
			}

		});

	}

	const navLinks = document.querySelectorAll(
		'#header > nav a[href^="#"]'
	);

	const sections = document.querySelectorAll(
		'#main > section[id]'
	);


	/*
	 * Update the navigation based on the section
	 * currently visible on screen.
	 */
	function updateActiveNav() {

		let currentSection = sections[0] ? sections[0].id : "";

		sections.forEach(function (section) {

			const rect = section.getBoundingClientRect();

			/*
			 * A section becomes active when its top
			 * reaches approximately the upper third
			 * of the browser window.
			 */
			if (rect.top <= window.innerHeight * 0.35) {
				currentSection = section.id;
			}

		});


		/*
		 * When we reach the very bottom of the page,
		 * make Contact (#four) active.
		 */
		if (
			window.innerHeight + window.scrollY >=
			document.documentElement.scrollHeight - 10
		) {
			currentSection = sections[sections.length - 1].id;
		}


		/*
		 * Only the four internal section links participate
		 * in the active-state system.
		 *
		 * CCRA Archive has href="/archive/" and is
		 * therefore never touched here.
		 */
		navLinks.forEach(function (link) {

			if (link.getAttribute("href") === "#" + currentSection) {
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}

		});

	}


	/*
	 * Update navigation while scrolling.
	 */
	window.addEventListener("scroll", updateActiveNav);


	/*
	 * Recalculate after resizing the browser.
	 */
	window.addEventListener("resize", updateActiveNav);


	/*
	 * Recalculate when the page is restored with
	 * the browser Back button.
	 */
	window.addEventListener("pageshow", updateActiveNav);


	/*
	 * Also update when clicking one of the four
	 * internal navigation links.
	 */
	navLinks.forEach(function (link) {

		link.addEventListener("click", function () {

			navLinks.forEach(function (item) {
				item.classList.remove("active");
			});

			link.classList.add("active");

		});

	});


	/*
	 * Initial state.
	 */
	updateActiveNav();



	const archiveLink = document.querySelector(
		'#header > nav a.archive-link'
	);

	if (archiveLink) {
		archiveLink.classList.remove('active');

		archiveLink.addEventListener('click', function () {
			this.classList.remove('active');
		});
	}

});