LLMD = function() {
  this.blockTypes = LLMD.defaultBlocks;
  this.currentNode = null;
};

LLMD.prototype.filterRoot = function( rawData ){
  
  return cleanBlocks( rawData );
}

LLMD.prototype.newBlock = function( name, params, data ){
  var type;
  if( this.blockTypes[name] ) {
    type = this.blockTypes[name];
  }
  
  var node = new Block( type, name, params, data );
  
  this.currentNode = node;
  return node;
}

LLMD.prototype.newPackage = function( name, params ){
  return new Package( name, params );
}

LLMD.prototype.newExpr = function( key ){
  return new Expr( key );
}

Block = function( type, name, params, data ){
  this.name = name;
  // if the Blocktype has a Data Filter, do the filter, otherwise return the piain data
  this.data = type && type.dataFilter && type.dataFilter( params, data ) || data;
  return this;
}

// example data filter for if
Package = function( name, data ) {
  this.name = name;
  this.data = data;
}

Expr = function( key ){
  this.name = 'expr';
  this.key = key;
}

// registers a new block type
LLMD.prototype.registerBlockType = function( name, o ){
  this.blockTypes[name] = o;
}

// [TODO] - dataFilter gets params and rawData -> output is just data
// reduce param/data to one data main field
LLMD.defaultBlocks = {};
LLMD.defaultBlocks["if"] = {
  dataFilter: function( params, rawData ){
    var data = {c: null, t:[], f:[]};
    var bool = true;
    for (var i=0; i < rawData.length; i++) {
      
      if(rawData[i].key == 'else') {
        bool = false;
        continue;
      }
      
      // interpret as markdown
      if( !rawData[i].name ) rawData[i].name = 'md';
      
      if( bool ) {
        data.t.push(rawData[i])
      } else {
        data.f.push(rawData[i])
      }
      
    }
    data.t = cleanBlocks(data.t);
    data.f = cleanBlocks(data.f);
    
    // TODO - check if condition has to be an expr?
    if( !params || params.length>1 ) throw new Error('no or corrupt condition given')
    
    data.c = params && params[0] || true;
    
    return data;
  }
} 

LLMD.defaultBlocks["???"] = {
  dataFilter: function( params, rawData ){
    var data = [];
    var lang = 'en'; // TODO - inherent from context
    
    if(params && params.length == 1) lang = params[0];
    
    for( var block in rawData ) {
      // interpret als sentance
      if( !block.name ) data.push( rawData[block].data );
    }
    
    return {
      lang: lang,
      text: data
    };
  }
}


cleanBlocks = function( bs ){
  
  var blocks = [];
  var l;
  if( 0 in bs )
    l = bs[0];

  for(var i = 1; i<bs.length; i++) {
    if( !bs[i]['name'] && !l['name'] && (l.name = "md") ||
        bs[i]['name'] == "md" && l['name'] == "md" ) {
      l['data'] += bs[i]['data'];
      l.to = bs[i].to;
    } else {
      blocks.push(l)
      l = bs[i];
    }
  }
  
  if( l )
    blocks.push(l);
  return blocks;
};



module.exports = {
  Block: Block,
  LLMD: LLMD
};
