/* Exercise #1
We'll build the industry plant calendar from the opening exercise.

Part 1
First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

function businessHours(dayNumber, hourNumber)

Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18). */

function businessHours(dayNumber, hourNumber) {
    if ((dayNumber >= 1 && dayNumber <= 5) && (hourNumber >= 9 && hourNumber <= 18)) {
        return true;
    } else {
        return false;
    }
}//businessHours

businessHours(5, 12);

