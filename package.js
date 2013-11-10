Package.describe({
  summary: "Meteor smart package for GraphicsMagick node.js"
});

if((typeof Npm==="object")||(typeof Npm==="function")){
  if (typeof Npm.depends == "function"){
    Npm.depends({cheerio: "0.12.1"});
  }
}

Package.on_use(function (api) {
  api.add_files('cheerio_server.js', 'server');
});

