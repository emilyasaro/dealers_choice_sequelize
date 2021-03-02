const html = require('html-template-tag');

module.exports = (dojoList) =>
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
        <a href="/martialartists">Full Roster</a>
        <a href="/join"> Join a Dojo </a>
      </div>
    </nav>
  </header>
  <h1> Rival Dojos in the Valley </h1>
  <div class="container">
    <!-- <div class="column">
      <img src ="homepage_left.jpg">
    </div> -->
    <div class="text" >
      ${dojoList.map((dojo) =>
        html`
          <p> <a href="dojos/${dojo.id}"> ${dojo.name} </a>
           <br>${dojo.name} was founded by ${dojo.grandMaster}, and its motto is "${dojo.motto}"
          </p>
      `)}
    </div>
    <!-- <div class="column">
      <img class="column" src ="homepage_right.jpg" > -->
    </div>
  </div>
  <footer> Image and styling credit: <a href="https://thekaratekid.fandom.com/wiki"> The Karate Kid Wiki </a></footer>
</body>
</html>
  `



