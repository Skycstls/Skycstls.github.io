import {menu} from './menu.js';
import nunjucks from 'nunjucks';
import fs from 'fs';

const templateFile = 'menu.njk';
const outputFile = './dist/index.html';

nunjucks.configure({ autoescape: true });

const templateContent = fs.readFileSync(templateFile, 'utf-8');
const renderedContent = nunjucks.renderString(templateContent, { menu });
console.log(renderedContent);