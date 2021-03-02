const navBar = require('./navBar.js');
const html = require('html-template-tag');

module.exports = (dojoStudents, dojoSensei) => html`
<html lang="en">
<head>
  <link rel="stylesheet" type="text/css" href="/style.css" />
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> ${dojoStudents[0].name} </title>
</head>
<body>
  <header> <nav>
    <div id='navBar'>
      <a href="/dojos">Back to Home</a>
      <a href="/martialartists">Full Roster</a>
    </div>
  </nav></header>
  <h1> The ${dojoStudents[0].name} Dojo </h1>
<h4> ${dojoStudents[0].motto} </h4>
  <div>
    <p> Current Sensei
      <br> ${dojoSensei[0].members.map((member) => html`
            ${member.name}`)}

<ul style="list-style-type:none"> Students
    ${dojoStudents[0].members.map((member) => html`
      <li> <a href="/martialartists/${member.id}"> ${member.name} </a> </li>
    `)}
    </ul>
    </p>


  </div>
</body>
</html>
`
