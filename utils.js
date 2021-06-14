/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    // In order to initialize something we have to use a constructor
    // this accepts a string that is the audio link
    constructor(audioSrc) {

        // here we'll create a new object
        this.audio = new Audio(audioSrc)

        // testing the program 
        console.log(this.audio)
    }

    // Next we'll create a function that would play the audio
    play = () => {
        // if you press the button twice every single time it will reset
        // audio and repeat it again.
        this.audio.currentTime = 0;

        // this would play the audio file
        this.audio.play()
    }

}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
    }
}