//piglatin function
//input string sentence
//first letter of each word add to end of each word and ay

function pigLatin(sentance) {
  //endings['way','nay']
  //str.split(' ')
  //[i]
  var splitSpaces = sentance.split(' ');
  console.log(splitSpaces);
  //Hello World
  //["Hello", "world"]
  for (let i = 0; i < splitSpaces.length; i++) {
    //word in the sentance individually
    var firstLetter = splitSpaces[i].charAt(0);
    //check first char is vowel
    //random word from endings array
    splitSpaces[i] = splitSpaces[i] + firstLetter + 'ay';
    splitSpaces[i] = splitSpaces[i].substring(1);
  }

  console.log(splitSpaces.join(' '));
}
pigLatin('Hello World');
pigLatin('');
