// 1. Let's Form a Sentance
var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);

// 2. Index Accessing -1 by 1
var word = "wow JavaScript is so cool";
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord =
  word[4] +
  word[5] +
  word[6] +
  word[7] +
  word[8] +
  word[9] +
  word[10] +
  word[11] +
  word[12] +
  word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);

// 3. Breaking Sentence (Again) using Substring
var word3 = "wow JavaScript is so cool";
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 14);
var thirdWord3 = word.substring(15, 17);
var fourthWord3 = word.substring(18, 20);
var fifthWord3 = word.substring(21, 25);

console.log("First Word: " + exampleFirstWord3);
console.log("Second Word: " + secondWord3);
console.log("Third Word: " + thirdWord3);
console.log("Fourth Word: " + fourthWord3);
console.log("Fifth Word: " + fifthWord3);

// 4. Breaking Sentence (yet Again) and Count Each Length
var word4 = "wow JavaScript is so cool";
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4, 14);
var thirdWord4 = word.substring(15, 17);
var fourthWord4 = word.substring(18, 20);
var fifthWord4 = word.substring(21, 25);

var FirstWord4Length = exampleFirstWord4.length;
var secondWord4Length = secondWord.length;
var thirdWord4Length = thirdWord.length;
var fourthWord4Length = fourthWord4.length;
var fifthWord4Length = fifthWord4.length;

console.log(
  "First Word: " + exampleFirstWord4 + ", with lenght:" + FirstWord4Length
);
console.log(
  "Second Word: " + secondWord4 + ", with lenght:" + secondWord4Length
);
console.log("Third Word: " + thirdWord4 + ", with lenght:" + thirdWord4Length);

console.log(
  "Fourth Word: " + fourthWord4 + ", with lenght:" + fourthWord4Length
);
console.log("Fifth Word: " + fifthWord4 + ", with lenght:" + fifthWord4Length);
