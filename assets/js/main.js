addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>jQuery on Worker</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <style>
          body.is-preload { opacity: 0.3; transition: opacity 0.5s ease-in; }
          body { font-family: sans-serif; padding: 2rem; }
        </style>
      </head>
      <body class="is-preload">
        <h1>Hello from Cloudflare Worker + jQuery</h1>
        <nav id="nav">
          <a href="#section1">Go to Section 1</a>
        </nav>
        <div id="wrapper">
          <section id="section1">
            <p>This is Section 1. Scroll smoothly when clicked!</p>
          </section>
        </div>

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
