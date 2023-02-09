
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString ); // Change this line

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // operador "|" é igual "OR"
// let result = petRegex.test(petString);

    //  usando /i no final ele irá retornar em todos casos que a string tenha maiusculas e minusculas exceto SPACE // 
// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);
// console.log(result)

    // usando o match() vc encontra onde essta a palavra em uma array
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
// console.log(result)

    // É possivel juntar os comandos REGEX como abaixo /gi     => /g To search or extract a pattern more than once, you can use the global search
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result)

    // .un o "." ele é como se fosse um coringa 
// let exampleStr = "Let's have fun, sun, pun, with regular expressions!";
// let unRegex = /.un/; // Change this line
// let result = unRegex.test(exampleStr);
// console.log(result)

    // colocar entre colchetes vc ira encontrar especificamente aquelas letras 
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // example b[aiu]g => bag, big, bug
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result)

    // para encontrar palavras no alfabeto (de-até) alguma palavra usar hifen
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// console.log(result)

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result.length)

    // "^" ele irá ignorar tudo depois desse simbolo
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

    //se usarmos o "+" depois da letra ele encontrara as primeiras ocorrencias seguidas
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result)

    // o astericso ele ignorará ocorrencias seguidas
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);
// console.log(result)

    // "\w é capaz de encontrar todas as correspondencias do alfabeto e numeros [A-Za-z0-9_] até mesmo o "_"(underline)"
    // "\W é o contrario ele encontra os que não são letras e numeros"
// let alphabetRegexV2 = /\w/g;
// let result = quoteSample.match(alphabetRegexV2).length;

    // "\d" é capaz de encontrar numeros [0-9]
    // "\D" é o contrario ele encontra que não sao numeros [0-9]
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = numRegex.test(movieName).length;

// let username = "JackOfAllTrades";
// let userCheck = /\w/g; // Change this line
// let result = username.test(userCheck);
// console.log(result)


// 1. Usernames can only use alpha-numeric characters.
// 2. The only numbers in the username have to be at the end. 
//       There can be zero or more of them at the end. Username cannot start with the number.
// 3. Username letters can be lowercase and uppercase.
// 4. Usernames have to be at least two characters long. 
//       A two-character username can only use alphabet letters as characters.

// let username = "JAC4";
// let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
// let result = userCheck.test(username);

// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input

    // "\s" encontra espaços em branco
    // "\S" ignora os espaços em branco
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);

    // o sinal de "{}" vc esoclhe  numeros de vezes que se repete numeros de 3 entre e 6 e irá retornar um valor
// let ohStr = "Ohhh no";
// let ohRegex = /oh{3,6}\sno/i; // Change this line
// let result = ohRegex.test(ohStr);
// console.log(result)

    // O "{6,}" seis para mais
    // O "{6}"  para numero exato
// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/; // Change this line
// let result = haRegex.test(haStr);
// console.log(result)

    // para dizer se a palavra ´é opcional ou nao colocamos "?" apos a palavra
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);


// Use lookaheads in the pwRegex to match passwords that are greater 
// than 5 characters long, and have two consecutive digits.
// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);

// let myString = "Franklin D. Roosevelt";
// let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line
// let result = myRegex.test(myString); // Change this line


// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);


    //remover espaçços em branco
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line



console.log(result)