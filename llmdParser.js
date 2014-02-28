/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var llmdParser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"MDARKDOWN":3,"SLIDES":4,"SLIDE":5,"SLIDE_SEPERATOR":6,"EOS":7,"MD":8,"NOTES_SEPERATOR":9,"OPT_NOTES":10,"NOTES":11,"LINE":12,"BEGIN_PACKAGE":13,"PACKAGENAME":14,"PACKAGELINES":15,"END_PACKAGE":16,"BEGIN_CODE":17,"CODELINES":18,"END_CODE":19,"BRACE_OPEN":20,"BRACE_CLOSE":21,"PACKAGELINE":22,"CODELINE":23,"EOL":24,"EOF":25,"$accept":0,"$end":1},
terminals_: {2:"error",6:"SLIDE_SEPERATOR",9:"NOTES_SEPERATOR",12:"LINE",13:"BEGIN_PACKAGE",14:"PACKAGENAME",16:"END_PACKAGE",17:"BEGIN_CODE",19:"END_CODE",20:"BRACE_OPEN",21:"BRACE_CLOSE",22:"PACKAGELINE",23:"CODELINE",24:"EOL",25:"EOF"},
productions_: [0,[3,1],[4,4],[4,1],[5,3],[5,1],[10,2],[10,1],[11,3],[11,2],[11,2],[11,1],[8,3],[8,6],[8,6],[8,2],[8,0],[15,4],[15,2],[15,2],[15,0],[18,3],[18,2],[18,0],[7,1],[7,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0]; 
break;
case 2: 
        var slide = [{ 
          from: _$[$0-3].first_line, 
          to: _$[$0-3].last_line, 
          md: $$[$0-3].md, 
          notes: $$[$0-3].notes
        }];
        this.$ = slide.concat( $$[$0] );
      
break;
case 3: 
        this.$ = [{ 
          from: _$[$0].first_line, 
          to: _$[$0].last_line, 
          md: $$[$0].md, 
          notes: $$[$0].notes
          }];
      
break;
case 4: 
        cleanMd = (function(arr){
          var o = [];
          var lastStr = "";
          for(var i=0; i<arr.length; i++) {
            if( typeof arr[i] == "string" )
              lastStr += arr[i];
            else {
              if( lastStr != '' ) {
                o.push(lastStr);
                lastStr = '';
              }
              o.push(arr[i]);
            }
          }
          if( lastStr != '' ) o.push(lastStr);
          return o;
        });
        this.$ = { md: cleanMd($$[$0-2]), notes: $$[$0] }; 
      
break;
case 5: this.$ = { md: $$[$0], notes: [] }; 
break;
case 6: this.$ = $$[$0]; 
break;
case 7: this.$ = []; 
break;
case 8: this.$ = [$$[$0-2]].concat($$[$0]); 
break;
case 9: this.$ = [$$[$0-1]]; 
break;
case 10: this.$ = $$[$0]; 
break;
case 11: this.$ = []; 
break;
case 12: this.$ = [$$[$0-2]+($$[$0].length>0?$$[$0-1]:'')].concat($$[$0]); 
break;
case 13: this.$ = [{ type:"package", name: $$[$0-4], data: $$[$0-3] }].concat($$[$0]); 
break;
case 14: this.$ = [$$[$0-5]+$$[$0-4]+$$[$0-3]+$$[$0-2]+($$[$0].length>0?$$[$0-1]:'')].concat($$[$0]); 
break;
case 15: this.$ = [$$[$0].length>0?$$[$0-1]:''].concat($$[$0]); 
break;
case 16: this.$ = []; 
break;
case 17: this.$ = $$[$0-3]+$$[$0-2]+$$[$0-1]+$$[$0]; 
break;
case 18: this.$ = $$[$0-1] + $$[$0]; 
break;
case 19: this.$ = $$[$0-1] + $$[$0]; 
break;
case 20: this.$ = ''; 
break;
case 21: this.$ = $$[$0-2]+$$[$0-1]+$$[$0]; 
break;
case 23: this.$ = ''; 
break;
}
},
table: [{1:[2,16],3:1,4:2,5:3,6:[2,16],7:8,8:4,9:[2,16],12:[1,5],13:[1,6],17:[1,7],24:[1,9],25:[1,10]},{1:[3]},{1:[2,1]},{1:[2,3],6:[1,11]},{1:[2,5],6:[2,5],9:[1,12]},{7:13,24:[1,9],25:[1,10]},{14:[1,14]},{7:15,24:[1,9],25:[1,10]},{1:[2,16],6:[2,16],7:8,8:16,9:[2,16],12:[1,5],13:[1,6],17:[1,7],24:[1,9],25:[1,10]},{1:[2,24],6:[2,24],9:[2,24],12:[2,24],13:[2,24],16:[2,24],17:[2,24],19:[2,24],20:[2,24],21:[2,24],22:[2,24],23:[2,24],24:[2,24],25:[2,24]},{1:[2,25],6:[2,25],9:[2,25],12:[2,25],13:[2,25],16:[2,25],17:[2,25],19:[2,25],20:[2,25],21:[2,25],22:[2,25],23:[2,25],24:[2,25],25:[2,25]},{7:17,24:[1,9],25:[1,10]},{7:19,10:18,24:[1,9],25:[1,10]},{1:[2,16],6:[2,16],7:8,8:20,9:[2,16],12:[1,5],13:[1,6],17:[1,7],24:[1,9],25:[1,10]},{7:23,15:21,16:[2,20],20:[1,22],22:[1,24],24:[1,9],25:[1,10]},{7:27,18:25,19:[2,23],23:[1,26],24:[1,9],25:[1,10]},{1:[2,15],6:[2,15],9:[2,15]},{1:[2,16],4:28,5:3,6:[2,16],7:8,8:4,9:[2,16],12:[1,5],13:[1,6],17:[1,7],24:[1,9],25:[1,10]},{1:[2,4],6:[2,4]},{1:[2,7],6:[2,7],7:31,11:29,12:[1,30],24:[1,9],25:[1,10]},{1:[2,12],6:[2,12],9:[2,12]},{16:[1,32]},{7:23,15:33,20:[1,22],21:[2,20],22:[1,24],24:[1,9],25:[1,10]},{7:23,15:34,16:[2,20],20:[1,22],21:[2,20],22:[1,24],24:[1,9],25:[1,10]},{7:23,15:35,16:[2,20],20:[1,22],21:[2,20],22:[1,24],24:[1,9],25:[1,10]},{19:[1,36]},{7:37,24:[1,9],25:[1,10]},{7:27,18:38,19:[2,23],23:[1,26],24:[1,9],25:[1,10]},{1:[2,2]},{1:[2,6],6:[2,6]},{7:39,24:[1,9],25:[1,10]},{1:[2,11],6:[2,11],7:31,11:40,12:[1,30],24:[1,9],25:[1,10]},{7:41,24:[1,9],25:[1,10]},{21:[1,42]},{16:[2,18],21:[2,18]},{16:[2,19],21:[2,19]},{7:43,24:[1,9],25:[1,10]},{7:27,18:44,19:[2,23],23:[1,26],24:[1,9],25:[1,10]},{19:[2,22]},{1:[2,9],6:[2,9],7:31,11:45,12:[1,30],24:[1,9],25:[1,10]},{1:[2,10],6:[2,10]},{1:[2,16],6:[2,16],7:8,8:46,9:[2,16],12:[1,5],13:[1,6],17:[1,7],24:[1,9],25:[1,10]},{7:23,15:47,16:[2,20],20:[1,22],21:[2,20],22:[1,24],24:[1,9],25:[1,10]},{1:[2,16],6:[2,16],7:8,8:48,9:[2,16],12:[1,5],13:[1,6],17:[1,7],24:[1,9],25:[1,10]},{19:[2,21]},{1:[2,8],6:[2,8]},{1:[2,13],6:[2,13],9:[2,13]},{16:[2,17],21:[2,17]},{1:[2,14],6:[2,14],9:[2,14]}],
defaultActions: {2:[2,1],28:[2,2],38:[2,22],44:[2,21]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 25
break;
case 1:return 24
break;
case 2: this.begin('code'); return 17; 
break;
case 3: this.popState(); return 19; 
break;
case 4: return 23; 
break;
case 5: this.begin('packagename'); return 13 
break;
case 6: this.popState(); this.begin('package'); return 14 
break;
case 7: this.popState(); return 16; 
break;
case 8: this.begin('packagecontent'); return 20;  
break;
case 9: this.popState(); return 21; 
break;
case 10: return 22; 
break;
case 11:return 6
break;
case 12:return 9
break;
case 13:return 12
break;
case 14:return 'INVALID'
break;
}
},
rules: [/^(?:(\r\n|\r|\n)*$)/,/^(?:(\r\n|\r|\n))/,/^(?:```([^\r\n])*)/,/^(?:```([^\r\n])*)/,/^(?:([^\r\n])*)/,/^(?:\{\{(((\r\n|\r|\n)*([\t ])*)*))/,/^(?:\w*)/,/^(?:\}\})/,/^(?:(((\r\n|\r|\n)*([\t ])*)*)*\{)/,/^(?:(((\r\n|\r|\n)*([\t ])*)*)\}(((\r\n|\r|\n)*([\t ])*)*))/,/^(?:[^{}]*)/,/^(?:---([^\r\n])*)/,/^(?:\?\?\?([^\r\n])*)/,/^(?:([^\r\n])*)/,/^(?:.)/],
conditions: {"packagecontent":{"rules":[0,1,8,9,10],"inclusive":false},"packagename":{"rules":[0,1,6],"inclusive":false},"package":{"rules":[0,1,7,8],"inclusive":false},"code":{"rules":[0,1,3,4],"inclusive":false},"INITIAL":{"rules":[0,1,2,5,11,12,13,14],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = llmdParser;
exports.Parser = llmdParser.Parser;
exports.parse = function () { return llmdParser.parse.apply(llmdParser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
LlmdParser = llmdParser;