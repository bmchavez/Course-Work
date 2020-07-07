let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;             // Must start with
re = /world$/i;         // Must end with
re = /^hello$/i;        // Must begin and end with
re = /h.llo/i;          // Matches any ONE character
re = /h*llo/i;          // Matches any character 0 or more times
re = /gre?a?y/i;        // Optional character ('e' & 'a' are optional - ' '  also works)
re = /gre?a?y\?/i;      // Escape character (? is a literal)

// Brackets [] - Character Sets
re = /gr[ae]y/i;        // Must be an 'a' or an 'e'
re = /[GF]ray/;         // Must be a 'G' or an 'F'
re = /[^GF]ray/;        // Will Match anything EXCEPT a 'G' or an 'F'
re = /[A-Z]ray/;        // Matches any uppercase letter
re = /[a-z]ray/;        // Matches any lowercase letter
re = /[A-Za-z]ray/;     // Matches any letter
re = /[0-9]ray/;        // Matches any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;        // Must occur exactly {n} times
re = /Hel{2,4}o/i;      // Must occur exactly {n} times (2 to 4 times)
re = /Hel{2,}o/i;       // Must occur at least {n} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;   // Must only contain '3x' 3 times

// *******************************************************************************************
// 9.86 - SHORTHAND CHARACTER CLASSES

re = /\w/;              // Word character - alphanumeric or '_'
re = /\w+/;             // '+' one or more
re = /\W/;              // NON-word characters - anything but alphanumeric and '_'
re = /\d/;              // Matches any digit
re = /\d+/;             // Matches any digit 0 or more times
re = /\D/;              // NON-diget characters
re = /\s/;              // Match whitespace character
re = /\S/;              // NON-whitespace character
re = /hell\b/i;         // Word Boundary - must be the full word 'hell'

// Assertions
re = /x(?=y)/;           // Match 'x' only if it is followed by 'y'
re = /x(?!y)/;          // Match 'x' only if NOT followed by 'y'

// String to match
const str = 'xdy'

// Log Results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str)