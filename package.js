Package.describe({
  summary: "Slides AST Parser"
});

Package.on_use(function (api) {
  api.add_files("slideParser.js", "client");
  api.add_files("./parserWrapper.js", "client");

  if (api.export) 
    api.export('SlideParser');
});
