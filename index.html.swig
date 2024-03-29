<!DOCTYPE html>
<html>
  <head>
    <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-35GVGC6CS5"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-35GVGC6CS5");
    </script>
    <title>Ekimerton</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="assets/css/styles.css" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
    </style>
  </head>
  <body>
    <div class="column-view">
      <div class="container frosted-glass">
        <div class="section-centered section">
          <img class="propic" src="assets/img/pfp.png" />
          <h1>Ekim Karabey</h1>
          <h3>Software Engineer</h3>
        </div>
        <div class="section">
          <p>
            Hey there! 👋 I'm a software engineer who loves to solve puzzles and
            build cool stuff. This website is a little look into my world - my
            projects, my love for tech, and a bit about what I do when I'm not
            coding. Hope you find it interesting!
          </p>
          <p class="links">
            <a href="Resume-Ekim-Karabey.pdf">Resume</a> -
            <a href="https://github.com/Ekimerton">Github</a> -
            <a href="https://www.linkedin.com/in/ekim-karabey/">LinkedIn</a> -
            <a href="mailto:ekim0252@gmail.com">Email</a>
          </p>
        </div>

        <div class="section">
          <h3>For Recruiters</h3>
          <p>
            Glad you stopped by. I'm a software engineer with a rich blend of
            experiences. Recently, I've been at
            <a href="https://www.shopify.com">Shopify</a>, building better user
            experiences for thousands of merchants. Previously, I've played many
            roles, from full-stack development at my own venture,
            <a href="http://tinyshed.co">Tinyshed</a>, to data engineering at
            <a href="https://www.wayfair.com">Wayfair</a>. This diverse history
            has me comfortable wearing many hats - tackling front-end, back-end,
            or data tasks with equal enthusiasm.
          </p>
          <p>
            You can get more details about my journey in my resume. Feel free to
            also check out my LinkedIn and GitHub. Reach out if you see a
            potential fit, or even just to chat. I'm always ready for new
            opportunities and challenges.
          </p>
        </div>
        <div class="section">
          <h3>Projects Links</h3>
          <p><a href="https://chickadee.fun/">Chickadee.fun</a></p>
          <p><a href="https://hexcodle.com/">Hexcodle</a></p>
          <p><a href="https://reciple-game.vercel.app/">Reciple</a></p>
          <p><a href="/classio">Classio (sunset)</a></p>
        </div>
        <div class="section">
          <h3>Recipes</h3>
          {% for recipeLink in recipeLinks %}
          <p>
            <a href="{{ recipeLink.url }}">{{ recipeLink.name }}</a>
          </p>
          {% endfor %}
        </div>
        <div class="section">
          <h3>Diving Footage</h3>
          <p>
            <a href="https://www.youtube.com/channel/UCV4dT7WnTjglXSQOLNc0TWQ"
              >Youtube</a
            >
          </p>
          <p><a href="https://gopro.com/v/y8rbldd2e3kw1">GoPro</a></p>
        </div>
        <div class="footer">
          <p>All projects made by Ekimerton with 💛</p>
        </div>
      </div>
    </div>
  </body>
</html>
