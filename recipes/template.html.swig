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
    <title>{{ recipe.name }}</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="../assets/css/styles.css" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
    </style>
  </head>
  <body>
    <div class="column-view">
      <div class="container frosted-glass">
        <div class="section-centered section">
          <h1>{{ recipe.name }}</h1>
          {% if recipe.description %}
          <h3>{{ recipe.description }}</h3>
          {% endif %}
        </div>
        <div class="section">
          {% for intro in recipe.intro %}
          <p>{{ intro }}</p>
          {% endfor %}
          <p>
            This recipe uses insights from: {% for inspiration in
            recipe.inspiration %}
            </br><a href="{{ inspiration }}">{{ inspiration }}</a>
            {% endfor %}
          </p>
        </div>
        <div class="section">
          <h2>Ingredients</h2>
          <ul class="ingredients">
            {% for ingredient in recipe.ingredients %}
            <li>
              <p>
                {{ ingredient.quantity }} {{ ingredient.name }} 
                {% if ingredient.alt %}
                ({{ ingredient.alt }})
                {% endif %}
              </p>
            </li>
            {% endfor %}
          </ul>
        </div>
        <div class="section">
          <h2>Directions</h2>
          <ol class="numbered-list">
            {% for direction in recipe.directions %}
            <li>
              <p>{{ direction.text }}</p>
              {% if direction.image %}
              <img src="{{ direction.image }}" />
              {% endif %}
            </li>
            {% endfor %}
          </ol>
        </div>
        <div class="footer">
          <p>All projects made by Ekimerton with 💛</p>
        </div>
      </div>
    </div>
  </body>
</html>
