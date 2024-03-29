Package.describe({
  summary: "LiquidLearning Core Package"
});

Package.on_use(function (api) {
  
  api.use('templating','client');
  api.use('less','client');
  api.use('crypto-base',['client','server']);
  api.use('crypto-sha1',['client','server']);
  
  api.add_files("llmd.js", ["client","server"]);
  
  api.add_files("plugin.js", ["client"]);
  api.add_files("handler.js", ["client"]);
  
  api.add_files("std/common.js", ['client',"server"]);
  api.add_files("std/commonPlugins.html", ["client"]);
  api.add_files("std/commonPlugins.less", ["client"]);
  api.add_files("std/commonPlugins.js", ["client"]);
  

  if (api.export) {
    api.export('LLMD');
    api.export('BasicPlugin');
    api.export('PluginHandler');
  }
  
});
