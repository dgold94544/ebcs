document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll("#header > nav a[href^=\"#\"]");
	const heroImage = document.querySelector("#one .image.main");
	const headerContent = document.querySelector("#header > header");

	// Keep the selected navigation item visibly selected.
	navLinks.forEach(function (link) {
		link.addEventListener("click", function () {
			navLinks.forEach(function (item) { item.classList.remove("active"); });
			link.classList.add("active");
		});
	});

	// On desktop, align the bottom of the hero image with the bottom of
	// the header content (including the “Train and mentor...” tagline).
	function alignHeroImage() {
		if (!heroImage || !headerContent) return;
		if (window.matchMedia("(min-width: 980px)").matches) {
			heroImage.style.height = headerContent.getBoundingClientRect().height + "px";
		} else {
			heroImage.style.height = "";
		}
	}

	alignHeroImage();
	window.addEventListener("resize", alignHeroImage);
});
