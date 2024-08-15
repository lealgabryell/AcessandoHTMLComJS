const cheerio = require('cheerio')
const html = `
<ul id = "frutas">
<li class="elemento1">Maca</li>
<li class="elemento2">Uva</li>
<li class="elemento3">Laranja</li>
</ul>
`;
const search = cheerio.load(html);
const content = search('#frutas .elemento2').text()
console.log(content)