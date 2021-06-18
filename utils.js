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
    }

    // Next we'll create a function that would play the audio
    play = () => {
        // if you press the button twice every single time it will reset
        // audio and repeat it again.
        this.audio.currentTime = 0

        // this would play the audio file
        this.audio.play()

        
    }

}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        //Initialize the button with color and key code 
        //also initialize it with element 
        this.color = color
        this.keyCode = keyCode
         //also initialize it with element 
         this.element = document.getElementById(keyCode)
         //console.log(this.element)

         // calling the function
         this.setButtonColorInHTML();

         // call this function right away when its created
        this.setATransitionEndListener();

    }

    // Solution 1: remove style on keyup
    // Solution 2: Wait a certain amount of time to remove style
    // Solution 3: React on transitioned event
    setATransitionEndListener = () => {
        this.element.addEventListener('transitionend', () => {
            //console.log("transition ended");

            //if the transition ended for both of them we want to deselect the bottom
            this.deselect(); // this will remove the box shadow & background color


        })
    }  
        


    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        //initializing the button color
        this.element.style.borderColor = this.color
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        //setting the box color 
        this.element.style.backgroundColor = this.color

        //setting box shadow
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`
    }

    // we want some type of function that remove that background shadow color

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        // no background color
        this.element.style.backgroundColor = "transparent"
        this.elementstyle.boxShadow = "none"
    }
}