fs = require('fs');
Parser = require('jison').Parser;
bnf = require('ebnf-parser');
Lexer = require('jison-lex');
chai = require('chai');

var should = require('chai').should()


describe('slide Parser', function(){

	// Load the grammer file and parse the parser
  before( function(done){
    var grammar = fs.readFileSync('src/llmdParser.y','utf8');
    parser = new Parser(grammar);
    done();
	});
  
  describe('??? blocks', function(){
    
    it('should find empty blocks', function() {
      parser.parse('???\n???\n').should.deep.equal([{exp:[]}]);
    });
    
    it('should ignore whitespace', function() {
      parser.parse('???  \n???\n').should.deep.equal([{exp:[]}]);
      parser.parse('???\n???  \n').should.deep.equal([{exp:[]}]);
      parser.parse('???\t\n???\n').should.deep.equal([{exp:[]}]);
      parser.parse('???\n???\t\n').should.deep.equal([{exp:[]}]);
    });
    
    it('should find full blocks', function() {
      parser.parse('???\nasd\n???\n').should.deep.equal([{exp:["asd"]}]);
    });
    
    it('should ignore empty lines', function() {
      parser.parse('???\nasd\n\nasd\n???\n').should.deep.equal([{exp:["asd","asd"]}]);
    });
    
  })
  
  describe('md blocks', function(){
    
    it('should find them', function(){
      parser.parse('asd\n').should.deep.equal([{md:"asd\n"}]);
    });
    
    it('should persist multiple lines', function(){
      parser.parse('line1\nline2\n').should.deep.equal([{md:"line1\nline2\n"}]);
    });
    
  });
  
  describe('block interaction', function(){
    
    it('should find multiple blocks', function() {
      parser.parse('markdown1\n???\nexp\n???\n').should.deep.equal([{md:"markdown1\n"},{exp:["exp"]}]);
    });
    
    it('should find multiple blocks', function() {
      parser.parse('???\nexp\n???\nmarkdown1\n').should.deep.equal([{exp:["exp"]},{md:"markdown1\n"}]);
    });
    
  });
  
});


var test = function( name ){
	var test   = fs.readFileSync('./test/tests/'+name+'.md','utf8');
	var result = fs.readFileSync('./test/tests/'+name+'.out','utf8');
	parser.parse(test).should.equal(result);
}
