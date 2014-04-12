LLMD = function() {
  this.blockTypes = LLMD.defaultBlocks;
  this.packageTypes = LLMD.defaultPackages;
  this.currentNode = null;
}

LLMD.prototype.filterRoot = function( rawData ) {
  return cleanBlocks( rawData );
}

LLMD.prototype.newBlock = function( name, params, data ) {
  var type;
  
  if( this.blockTypes[name] ) {
    type = this.blockTypes[name];
  }
  
  var node = new LLMD.Block( type, name, params, data );
  
  this.currentNode = node;
  return node;
}

LLMD.prototype.newPackage = function( name, params ){
  var type;
  
  if( this.packageTypes[name] ) {
    type = this.packageTypes[name];
  }
  
  return new LLMD.Package( type, name, params );
}

LLMD.prototype.newExpr = function( key ){
  return new LLMD.Expr( key );
}

LLMD.Block = function( type, name, params, data ){
  this.name = name;
  // if the Blocktype has a Data Filter, do the filter, otherwise return the piain data
  var filteredData;
  
  if(type && type.dataFilter && (filteredData = type.dataFilter.apply( this, [params, data] ))) this.data = filteredData;
  else if(!type || !type.dataFilter) this.data=data;
  
  return this;
}

// example data filter for if
LLMD.Package = function( type, name, data ) {
  this.name = name;
  
  if(type && type.dataFilter && (filteredData = type.dataFilter.apply( this, [data] ))) this.data = filteredData;
  else if(!type || !type.dataFilter) this.data=data;
  
}

LLMD.Expr = function( key ){
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
  nested:['t','f'],
  dataFilter: function( params, rawData ){
    this.c; // condition
    this.t = []; // condition is true block 
    this.f = []; // condition is false block
    
    var bool = true;
    
    // scans the body of the block for if/ else blocks
    for (var i=0; i < rawData.length; i++) {
      
      if(rawData[i].key == 'else') {
        bool = false;
        continue;
      }
      
      // interpret as markdown
      if( !rawData[i].name ) rawData[i].name = 'md';
      
      if( bool ) {
        this.t.push(rawData[i])
      } else {
        this.f.push(rawData[i])
      }
      
    }
    this.t = cleanBlocks(this.t);
    this.f = cleanBlocks(this.f);
    
    // TODO - check if condition has to be an expr?
    if( !params || params.length>1 ) throw new Error('no or corrupt condition given')
    
    this.c = params && params[0] || true;
  }
} 

LLMD.defaultBlocks["???"] = {
  dataFilter: function( params, rawData ){
    var data = [];
    
    if(params && params.length == 1) this.lang = params[0];
    
    for( var block in rawData ) {
      // interpret als sentance
      if( !block.name ) data.push( rawData[block].data );
    }
    
    return data;
  }
}

LLMD.defaultPackages = {};
LLMD.defaultPackages["include"] = {
  dataFilter: function( params ){
    return params && params[0] ;
  }
}


var cleanBlocks = function( bs ){
  
  var blocks = [];
  var l;
  if( 0 in bs )
    l = bs[0];

  for(var i = 1; i<bs.length; i++) {
    if( ( !bs[i]['name'] || bs[i]['name'] == "md" ) &&
         ( !l['name'] || l['name'] == "md" ) && (l.name = "md")) {
        l['data'] += bs[i]['data'];
    } else {
      blocks.push(l)
      l = bs[i];
    }
  }
  
  if( l )
    blocks.push(l);
  return blocks;
}
