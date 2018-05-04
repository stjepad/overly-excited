// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
// Each time the for loop executes, you're going to add one more word to this string
// Concatenate the new word onto buildMeUp. Add space between words by also concatenating the space variable from above

// function is called addExcitement. The arguement is theWordArray. 

function addExcitement (theWordArray) {
// buildMeUp is left blank, because it will be filled with the information created below in the for and if loops
    let buildMeUp = ""
// in order to cycle through wha the function will call, we need a for loop. i is the counter aka what will be the individual words.
// theWordArray is the arguement of the function and also the actual array being called within sentence. .length means the 
// for will look through the entire length of theWordArray.
    for (let i = 0; i < theWordArray.length; i++) {
// in order to add an exclamation mark evert three words do the following:
// we need an if statement (if every three words pass... add exlamation point)
// the i counter starts at zero, therefore we put parenthasis around it and add one, so now it starts at 1 (ohterwise we start every three words starting at 0).
// if we start at the (i+1) and the remainder aka what is left over of a divided number is 0, then (that is what the line below means)
        if ((i + 1 )%3==0 )  
// then, buildMeUp += the individual world of the array add "! ". Basically add a "! " after every word that has a remainder of 0, which ends up being every third word.
        {buildMeUp += theWordArray[i] + "! "} 
// otherwise, just leave the words in the normal sequence
        else {
        buildMeUp += `${theWordArray[i]} `}
        // Print buildMeUp to the console
        console.log(buildMeUp)
        
        
    } 
}

// Invoke the function and pass in the array
addExcitement(sentence)


// If the current value of the counter variable can be evenly divided by 3 
// - using the JavaScript remainder operator - 
// then add a single exclamation point (!) to the output.