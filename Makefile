all: src/slideParser.y
	jison src/slideParser.y
	echo "\nSlideParser = slideParser;" >> slideParser.js

test: src/slideParser.y test/stub.js
	mocha test

