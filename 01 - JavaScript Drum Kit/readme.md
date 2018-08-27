# JS Drum kit

## To Do

1. Each button should display the sound when clicked on
2. Each button should be triggered by the keypress of its letter
3. Each button should briefly change class to '.playing' for a half second and then change back

## Brainstorm

Step 1:
we'll want to get an array of all the elements with the 'key' class

we'll want to iterate over that element array and add an event listener to each one

the event listener should listen for click events and should play the audio file that has a data key that matches the data key of the 'key' element we're currently on

we want to iterate over the keys as part of our keypress listener

if the keypress's keycode matches the dataset.key value, then trigger the sound and highlighting
