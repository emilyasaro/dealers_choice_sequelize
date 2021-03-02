const navBar = require('./navBar.js');
const html = require('html-template-tag');

module.exports = (martialArtists) => html`
<html lang="en">
<head>
<link rel="stylesheet" type="text/css" href="/style.css" />
  <!-- <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <title>Martial Artists </title>
</head>
<body>
  <nav>
    <div id='navBar'>
      <a href="/">Back to Home</a>
      <a href="/martialartists">Full Roster</a>
    </div>
  </nav>
  <div class="text" >
  <h1> The Rivals </h1>
    <ul style="list-style-type:none">
      <li> ${martialArtists.name} </li>
      <li> Level: ${martialArtists.level} </li>
      <li> Rival: <a href="${martialArtists.rival.id}"> ${martialArtists.rival.name} </a> </li>
    </ul>
</div>
</body>
</html>
`



