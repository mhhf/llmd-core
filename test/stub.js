Parser = require('jison').Parser;
bnf = require('ebnf-parser');
Lexer = require('jison-lex');
chai = require('chai');
fs = require('fs');

var should = require('chai').should()


describe('slide Parser', function(){

	// Load the grammer file and parse the parser
	before( function(done){
		var grammar = fs.readFileSync('./src/slideParser.y','utf8');
		parser = new Parser(grammar);
		done();
	});

	it('should ectract --- lines', function() {
		parser.parse('slide1---\nstill slide 1').should.have.length(1);
		parser.parse('slide1\n ---\nstill slide 1').should.have.length(1);
		parser.parse('slide1').should.have.length(1);
		parser.parse('slide1\n---\nslide2').should.have.length(2);
		parser.parse('slide1\n---\nslide2\n---\nslide3').length.should.equal(3);
	});

  it('should ignore chars after "---" ', function() {
		parser.parse('slide1\n---   \nslide2').length.should.equal(2);
		parser.parse('slide1\n---   this should be ignored\nslide2').should.deep.equal(
       [{ from: 1, to: 2, md: 'slide1', notes:'' }, { from: 3, to: 3, md: 'slide2', notes:'' }]
      );
  });

  it('should ignore chars after "???" ', function() {
		parser.parse('slide1\n???   \nnotes2').length.should.equal(1);
		parser.parse('slide1\n???   this should be ignored\nnotes1').should.deep.equal(
       [{ from: 1, to: 3, md: 'slide1', notes:'notes1' }]
      );
  });

  it('should extract notes split with the "???" seperator', function() {
		parser.parse('slide1???\nstill slide 1')[0].should.have.property('notes').and.equal('');
		parser.parse('slide1\n ???\nstill slide 1')[0].should.have.property('notes').and.equal('');
		parser.parse('slide1\n???\nnotes')[0].should.have.property('notes').and.equal('notes');
  });

  it('should ignore "---" and "???" in codelines', function() {
		parser.parse('slide\n```\n???\n```\n???\nnotes').should.deep.equal([
      { from: 1, to: 6, md: 'slide\n```\n???\n```', notes: 'notes' } 
    ]);
		parser.parse('slide\n```\n---\n```\n???\nnotes').should.deep.equal([
      { from: 1, to: 6, md: 'slide\n```\n---\n```', notes: 'notes' } 
    ]);
  });


})

var test = function( name ){
	var test   = fs.readFileSync('./test/tests/'+name+'.md','utf8');
	var result = fs.readFileSync('./test/tests/'+name+'.out','utf8');
	parser.parse(test).should.equal(result);
}
