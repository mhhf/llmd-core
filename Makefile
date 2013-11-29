all: src/slideParser.y
	jison src/slideParser.y

test: src/slideParser.y test/stub.js
	mocha test

