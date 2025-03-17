/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	var $window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Hack: Enable IE flexbox workarounds.
	if (browser.name === 'ie') {
		$body.addClass('is-ie');
	}

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Sidebar.
	if ($sidebar.length > 0) {
		var $sidebar_a = $sidebar.find('a');

		$sidebar_a
			.addClass('scrolly')
			.on('click', function() {
				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) !== '#') {
					return;
				}

				// Deactivate all links.
				$sidebar_a.removeClass('active').removeClass('active-locked');

				// Activate link *and* lock it.
				$this.addClass('active').addClass('active-locked');
			})
			.each(function() {
				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1) {
					return;
				}

				// Scrollex for all sections except #intro.
				if (id !== '#intro') {
					$section.scrollex({
						mode: 'middle',
						top: '-20vh',
						bottom: '-20vh',
						initialize: function() {
							$section.addClass('inactive');
						},
						enter: function() {
							$section.removeClass('inactive');

							// If no link is locked, activate this link.
							if ($sidebar_a.filter('.active-locked').length === 0) {
								$sidebar_a.removeClass('active');
								$this.addClass('active');
							}
							// If this link is locked, unlock it.
							else if ($this.hasClass('active-locked')) {
								$this.removeClass('active-locked');
							}
						}
					});
				}
			});
	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function() {
			if (breakpoints.active('<=large') && !breakpoints.active('<=small') && $sidebar.length > 0) {
				return $sidebar.height();
			}
			return 0;
		}
	});
})(jQuery);

// Consolidated DOMContentLoaded handler
document.addEventListener('DOMContentLoaded', () => {
	// Typing animation for Intro section
	const typingElement = document.querySelector('.typing');
	if (typingElement) {
		const text = typingElement.textContent;
		typingElement.textContent = '';
		let i = 0;

		function typeLetter() {
			if (i < text.length) {
				typingElement.textContent += text.charAt(i);
				i++;
				setTimeout(typeLetter, 200);
			}
		}
		typeLetter();
	} else {
		console.warn('Typing element not found.');
	}

	// Skills button logic
	const skillButtons = document.querySelectorAll('.skill-btn');
	const skillCategories = document.querySelectorAll('.skill-category');

	if (skillButtons.length && skillCategories.length) {
		skillButtons.forEach(button => {
			button.addEventListener('click', () => {
				// Remove active class from all buttons and categories
				skillButtons.forEach(btn => btn.classList.remove('active'));
				skillCategories.forEach(cat => cat.classList.remove('active'));

				// Add active class to clicked button and corresponding category
				button.classList.add('active');
				const category = button.getAttribute('data-category');
				const targetCategory = document.querySelector(`.skill-category[data-category="${category}"]`);
				if (targetCategory) {
					targetCategory.classList.add('active');
				} else {
					console.error(`Skill category with data-category="${category}" not found!`);
				}
			});
		});
	} else {
		console.warn('Skills buttons or categories not found:', {
			skillButtons: skillButtons.length,
			skillCategories: skillCategories.length
		});
	}

	// Projects scroll logic
	const projectGrid = document.querySelector('.project-grid');
	const projectLeftArrow = document.querySelector('.projects-section .left-arrow');
	const projectRightArrow = document.querySelector('.projects-section .right-arrow');
	const projectCardWidth = 250 + 32; // Card width (250px) + gap (2rem = 32px)

	if (projectLeftArrow && projectRightArrow && projectGrid) {
		console.log('Project scroll elements initialized:', {
			projectLeftArrow,
			projectRightArrow,
			projectGrid
		});

		projectLeftArrow.addEventListener('click', () => {
			console.log('Project Left arrow clicked');
			projectGrid.scrollBy({ left: -projectCardWidth, behavior: 'smooth' });
		});

		projectRightArrow.addEventListener('click', () => {
			console.log('Project Right arrow clicked');
			projectGrid.scrollBy({ left: projectCardWidth, behavior: 'smooth' });
		});
	} else {
		console.error('Project scroll elements not found:', {
			projectLeftArrow,
			projectRightArrow,
			projectGrid
		});
	}

	// Badges scroll logic
	const badgesGrid = document.querySelector('.badges-grid');
	const badgesLeftArrow = document.querySelector('.badges-left-arrow');
	const badgesRightArrow = document.querySelector('.badges-right-arrow');
	const badgeWidth = 150 + 32; // Badge width (approx) + gap (2rem = 32px)

	if (badgesLeftArrow && badgesRightArrow && badgesGrid) {
		console.log('Badges scroll elements initialized:', {
			badgesLeftArrow,
			badgesRightArrow,
			badgesGrid
		});

		badgesLeftArrow.addEventListener('click', () => {
			console.log('Badges Left arrow clicked');
			badgesGrid.scrollBy({ left: -badgeWidth, behavior: 'smooth' });
		});

		badgesRightArrow.addEventListener('click', () => {
			console.log('Badges Right arrow clicked');
			badgesGrid.scrollBy({ left: badgeWidth, behavior: 'smooth' });
		});
	} else {
		console.error('Badges scroll elements not found:', {
			badgesLeftArrow,
			badgesRightArrow,
			badgesGrid
		});
	}

	// Certificates scroll logic
	const certificatesGrid = document.querySelector('.certificates-grid');
	const certificatesLeftArrow = document.querySelector('.certificates-left-arrow');
	const certificatesRightArrow = document.querySelector('.certificates-right-arrow');
	const certificateWidth = 200 + 32; // Certificate width (approx) + gap (2rem = 32px)

	if (certificatesLeftArrow && certificatesRightArrow && certificatesGrid) {
		console.log('Certificates scroll elements initialized:', {
			certificatesLeftArrow,
			certificatesRightArrow,
			certificatesGrid
		});

		certificatesLeftArrow.addEventListener('click', () => {
			console.log('Certificates Left arrow clicked');
			certificatesGrid.scrollBy({ left: -certificateWidth, behavior: 'smooth' });
		});

		certificatesRightArrow.addEventListener('click', () => {
			console.log('Certificates Right arrow clicked');
			certificatesGrid.scrollBy({ left: certificateWidth, behavior: 'smooth' });
		});
	} else {
		console.error('Certificates scroll elements not found:', {
			certificatesLeftArrow,
			certificatesRightArrow,
			certificatesGrid
		});
	}

	// Navigation scrolling
	const navLinks = document.querySelectorAll('#sidebar nav ul li a');
	if (navLinks.length) {
		navLinks.forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				const targetId = link.getAttribute('href').substring(1);
				const targetSection = document.getElementById(targetId);
				if (targetSection) {
					targetSection.scrollIntoView({ behavior: 'smooth' });
				} else {
					console.warn(`Target section #${targetId} not found.`);
				}
			});
		});
	} else {
		console.warn('Navigation links not found.');
	}
});