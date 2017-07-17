var selectElementsStartingWithA = function(array) {
    var selectTheElement = function(elem) {
        return elem.charAt(0) == 'a';
    }
    return array.filter(selectTheElement);
}


var selectElementsStartingWithVowel = function(array) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var selectTheElement = function(elem) {
        return vowels.indexOf(elem.charAt(0)) > -1;
    }
    return array.filter(selectTheElement);
}

var removeNullElements = function(array) {
    var removeTheElement = function(elem) {
        return elem != null;
    }
    return array.filter(removeTheElement)
}

var removeNullAndFalseElements = function(array) {
    var removeTheElement = function(elem) {
        return elem != null &&  elem !== false;
    }
    return array.filter(removeTheElement)
}

var reverseWordsInArray = function(array) {
    var reverseWord = function(word) {
        return word.split('').reverse().join('');
    }
    return array.map(reverseWord);
}

var everyPossiblePair = function(array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
    return array.slice(3);
}

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
    var  compareLastLetter = function(a, b) {
        if(a.slice(-1) < b.slice(-1)) {
            return -1;
        }if(a.slice(-1) > b.slice(-1)) {
            return 1;
        }return 0;
    }
    return array.sort(compareLastLetter);
}

var getFirstHalf = function(string) {
    return string.slice(0, Math.round(string.length / 2));
}

var makeNegative = function(number) {
    return number < 0? number: -number;
}

var numberOfPalindromes = function(array) {
    var isPalindrome = function(word) {
        var wrd = word.split('').reverse().join('');
        if(wrd == word) {return 1};
    }
    return 
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
