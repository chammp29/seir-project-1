# SEIR-Project-1: Tower of Hanoi

This project simulates a Tower of Hanoi game in which the user can play this traditional game in various difficulties.

## Features

User can play a typical game of Tower of Hanoi by moving the disks to another column.
All rules and game logic are in place.

## Technologies Used

HTML, CSS (Grid and Flexbox), Javascript

## Bugs Still Unresolved

When a larger disk is dropped _directly_ on top of a smaller disk, the logic to prevent that from happening does not work; logic works as long as the disk is placed _above_ the smaller disk
If a disk is dropped _outside_ one of the columns, the checkWin function fires

## Future Additions

Add a "solve" button that uses the accepted recursion method to solve the game
Media Queries for responsive design

## Questions for Instructor

## Sources of Research

Traversy Media - YouTube Channel - draggable HTML elements

## New Concepts Learned

setAttribute("draggable", false)
insertBefore()
dragend vs. dragdrop
clientWidth
Became very comfortable with the event object and navigating the path, target, and other key:value pairs of the object
childElementCount
previousElementSibling
