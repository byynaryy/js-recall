var selectElementsStartingWithA = function(array) {
    var selectTheElements = function(elem) {
        return elem.charAt(0) == 'a';
    }
    return array.filter(selectTheElements);
}


var selectElementsStartingWithVowel = function(array) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var selectTheElements = function(elem) {
        return vowels.indexOf(elem.charAt(0)) > -1;
    }
    return array.filter(selectTheElements);
}

var removeNullElements = function(array) {
    var removeNullItem = function(item) {
        if(item == null) return array.slice(array.indexOf(item), 1);
    }
    return array.filter(removeNullItem)
}

var removeNullAndFalseElements = function(array) {
    return 'Write your method here';
}

var reverseWordsInArray = function(array) {
    return 'Write your method here';
}

var everyPossiblePair = function(array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
    return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
    return 'Write your method here';
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
