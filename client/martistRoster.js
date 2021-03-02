const html = require('html-template-tag');

module.exports = (roster) => html `
<html lang="en">
<head>
  <link rel="stylesheet" type="text/css" href="/style.css" />
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Martial Arts Roster</title>
</head>
<body>
  <header>
    <nav>
    <div id='navBar'>
      <a href="/dojos">Back to Home</a>
      <a href="/martialartists">Full Roster</a>
    </div>
  </nav>
</header>

  <h2> The Roster </h2>
    <ul id="member" style="list-style-type:none">
    ${roster.map((member) => html `
    <a href="/martialartists/${member.id}"> ${member.name} </a>:
      <li> Rank: ${member.level} </li>
      <li> Member of: ${member.Dojo.name} </li>
    `)}
    </ul>
</body>
</html>
`

