/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%x code
%x package

RN                    \r\n
EOL 									\r\n|\r|\n        /* end of line character */
NEOL									[^\r\n]	          /* not end of line character */
TB                    [^ \t\r\n]        /* textblock character */
WS                    [\t ]							/* whitespace character */


%%

/*%token block*/


<*>{EOL}*<<EOF>>           return 'EOF'
<*>{EOL}                   return 'EOL'

<INITIAL>'```'{NEOL}*      { this.begin('code'); return 'BEGIN_CODE'; }
<code>'```'{NEOL}*         { this.popState(); return 'END_CODE'; }
<code>{NEOL}*              { return 'CODELINE'; }

<INITIAL>'{{'              { this.begin('package'); return 'BEGIN_BRACE' }
<package>'}}'              { this.popState(); return 'END_BRACE' }
<package>{NEOL}*           return 'PACKAGELINE';

'---'{NEOL}*               return 'SLIDE_SEPERATOR'
'???'{NEOL}*               return 'NOTES_SEPERATOR'
{NEOL}*                    return 'LINE'
.                          return 'INVALID'



/lex


%start MDARKDOWN

%% /* language grammar */

MDARKDOWN : SLIDES { return $1; };

SLIDES 
    : SLIDE SLIDE_SEPERATOR EOS SLIDES
      { 
        var slide = [{ 
          from: @1.first_line, 
          to: @1.last_line, 
          md: $1.md, 
          notes: $1.notes
        }];
        $$ = slide.concat( $4 );
      }
    | SLIDE
      { 
        $$ = [{ 
          from: @1.first_line, 
          to: @1.last_line, 
          md: $1.md, 
          notes: $1.notes
          }];
      }
    ;

SLIDE
    : MD NOTES_SEPERATOR OPT_NOTES
      { $$ = { md: $1, notes: $3 }; }
    | MD
      { $$ = { md: $1, notes: [] }; }
    ;

OPT_NOTES
    : EOS NOTES 
      { $$ = $2; }
    | EOS
      { $$ = []; }
    ;

// TODO: fucking extract sentences
NOTES
    : LINE EOS NOTES
      { $$ = [$1].concat($3); }
    | LINE EOS
      { $$ = [$1]; }
    | EOS NOTES
      { $$ = $2; }
    | EOS
      { $$ = []; }
    ;

MD 
    : LINE EOS MD
      { $$ = $1+($3!=''?$2+$3:''); }
    | BEGIN_BRACE EOS PACKAGELINES END_BRACE EOS MD
      { $$ = $6; }
    | BEGIN_CODE EOS CODELINES END_CODE EOS MD
      { $$ = $1+$2+$3+$4+($6!=''? $5+$6: ''); }
    | EOS MD
      { $$ = $1+$2; }
    |
      { $$ = ''; }
    ;

PACKAGELINES 
    : PACKAGELINE EOS PACKAGELINES
      { $$ = $1+$2+$3; }
    | EOS PACKAGELINES
    |
      { $$ = ''; }
    ;

CODELINES
    : CODELINE EOS CODELINES
      { $$ = $1+$2+$3; } 
    | EOS CODELINES
    | 
      { $$ = ''; }
    ;


EOS : EOL | EOF;

%%
