
function reverseWord(word) {
    return word.split('').reverse().join('');
}


function reverseWordsInSentence(sentence) {
    const wordsArray = sentence.split(' ');
    const reversedWordsArray = wordsArray.map(word => reverseWord(word));
    return reversedWordsArray.join(' ');
}


const userInput = prompt("Enter a sentence:");


if (userInput !== null) {
    
    const reversedSentence = reverseWordsInSentence(userInput);

   
    alert("Reversed Sentence: " + reversedSentence);
} else {
    alert("No input provided.");
}
/*Enter a sentence: hello hi
hello hi
Reversed Sentence: olleh ih*/