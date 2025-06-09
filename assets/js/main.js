// Ensure the script runs after the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    // Dynamically load jQuery
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
    script.onload = function() {
        console.log("jQuery loaded successfully");

        // Now that jQuery is available, initialize your functions
        (function($) {
            var $window = $(window),
                $body = $('body'),
                $header = $('#header'),
                $nav = $('#nav'),
                $wrapper = $('#wrapper');

            // Play initial animations on page load
            $window.on('load', function() {
                window.setTimeout(function() {
                    $body.removeClass('is-preload');
                }, 100);
            });

            // Header panel behavior
            var $nav_a = $nav.find('a');
            $nav_a.addClass('scrolly').on('click', function() {
                var $this = $(this);

                if ($this.attr('href').charAt(0) != '#') return;

                $nav_a.removeClass('active');
                $this.addClass('active').addClass('active-locked');
            });

            // Scrolly behavior for smooth scrolling
            $('.scrolly').scrolly({
                speed: 1000,
                offset: function() {
                    return ($('#titleBar').length > 0) ? $('#titleBar').height() : 0;
                }
            });

        })(jQuery);
    };
    
    document.head.appendChild(script);
});
