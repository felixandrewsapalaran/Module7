/**
 * done: Create a keydown listener to track what keys are hit
 * done: Create a Beat class to represent the beat object in utils.js
 * done: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * done: Button pt1: Initialize color and element values
 * done: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * done: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * done: Button pt4: Call the select() function upon key press ;)
 * TODO: Button pt5: Add transition for button selection
 * TODO: Button pt6: Remove the button style upon transition end | Use deselect function
 * TODO: Complete all button instances with the following colors
 * TODO: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
    // Note the numbers on the left are called `Keyboard Key codes`
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        // adding button object
        //arg1= color and arg2= keycode
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
    }
}

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
    console.log(event); // this log the pressed button from keyboard
    const keyCode = event.keyCode // capturing the Keycode based on user input
    // check if this keyCode user typed in is inside this our object `beats`
    if(keyCode in beats) {
        let keyPress = beats[keyCode] // we want to get this object based on the keycode
        keyPress.beat.play() // using the play function from Beat class
        //calling the select function for the button
        keyPress.button.select();
    }

}

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */

//trigger event will be called inside this listener 
// because this triggering the press of the key.
document.addEventListener('keydown', triggerBeat)

