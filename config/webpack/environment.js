const { environment } = require('@rails/webpacker');
const typescript =  require('./loaders/typescript');
const html =  require('./loaders/html');

environment.loaders.prepend('typescript', typescript);
environment.loaders.append('html', html);

module.exports = environment;
