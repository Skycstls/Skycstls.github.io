import {menu} from './menu.js';
import nunjucks from 'nunjucks';
import fs from 'fs';

const templateFile = 'menu.njk';
const outputFile = './dist/index.html';

nunjucks.configure({ autoescape: true });

const templateContent = fs.readFileSync(templateFile, 'utf-8');
const renderedContent = nunjucks.renderString(templateContent, { menu });
if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
}
fs.writeFileSync(outputFile, renderedContent, 'utf-8');
console.log(`Archivo ${outputFile} generado con éxito.`);
fs.writeFileSync(outputFile, renderedContent, 'utf-8');

const cssFile = 'style.css';
const outputCssFile = './dist/style.css';
fs.copyFileSync(cssFile, outputCssFile);