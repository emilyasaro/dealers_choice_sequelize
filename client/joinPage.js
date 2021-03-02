const html = require('html-template-tag');

module.exports = (dojosToJoin) =>
  html`
  <html lang="en">
<head>
  <link rel="stylesheet" type="text/css" href="/style.css" />
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> Dojos </title>
</head>
<body>
  <header class="header">
    <nav>
    <div id='navBar'>
      <a href="/">Back to Home</a>
      <a href="/martialartists">Full Roster</a>
    </div>
  </nav>
</header>
  <div class="container">
    <h1> Join a dojo today! </h1>
        <form method="POST" action="/join">
        <input name="name" placeholder="Your Name" />
        <label for="dojo">Choose a dojo</label>
        <select id="dojos" name="dojo">
          ${dojosToJoin.map(
            (dojo) =>
              html` <option value="Choose wisely!">
                ${dojo.name}
              </option>`
          )}
        </select>
        <label for="rival"> Have a rival? </label>
        <input name="rival" placeholder="Your rival here" />
        <button type="submit">Save</button>
      </form>
    </div>
</body>
</html>
  `



