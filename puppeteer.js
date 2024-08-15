const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const pagina = await browser.newPage();
  await pagina.goto('https://rockinrio.com/rio/pt-br/home/')
  const conteudo = await pagina.$eval('#header', e => e.textContent)
  console.log(conteudo)
  await browser.close()
})();
const html = `
<html>
  <body>
    <p> Funciona ou nao ? </p>
  </body>
</html>
`;