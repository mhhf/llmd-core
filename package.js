Package.describe({
  summary: "LiquidLearning Core Package"
});

Package.on_use(function (api) {
  api.add_files("llmd.js", ["client","server"]);

  if (api.export) {
    api.export('LLMD');
  }
  
});
