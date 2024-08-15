const { JSDOM } = require('jsdom');

const html = `
<html>
  <body>
    <p> Funciona ou nao ? </p>
  </body>
</html>
`;

const dom = new JSDOM(html)
const p = dom.window.document.querySelector("p").textContent;
console.log(p)