colors = require('colors');

fs = require('fs');
Parser = require('jison').Parser;
bnf = require('ebnf-parser');
Lexer = require('jison-lex');
chai = require('chai');

llmd = require('lib/llmd.js')

var grammar = fs.readFileSync('src/llmdParser.y','utf8');
var content = fs.readFileSync('content.md','utf8');

parser = new Parser(grammar);
lexer = new Lexer(grammar);


console.log('\nCONTENT:'.green);
console.log(content);

console.log('\nTOKENS:'.green);
var lex = lexer.setInput(content);
var token,i=0, max = 29;
do{
	(token = lex.lex());
	i++;
	console.log( '\t< '+lex.topState()+', '+token.yellow+', '+(token!='EOL'?lex.yytext.replace('\n','\\n').red:'\\n'.red)+' >' );
} while ( token != 'EOF' && (i<max || max == -1) )
console.log('\nOUTPUT:'.green);

parser.yy.ctx = {keks:{wow:'aha?'}};
parser.yy.llmd = new LLMD();

var output = parser.parse(content);

console.log(JSON.stringify(output,null,2));
