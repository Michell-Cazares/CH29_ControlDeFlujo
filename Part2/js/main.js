/* Part 2
Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.

The yearDayNumber will be an int ranging from 0 to 365.

janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

Hint: use the remainder operator (%), dividing your yearDayNumber by 7. */


function getDayNumber(janFirstDayNumber, yearDayNumber) {
    if ((janFirstDayNumber >= 0 && janFirstDayNumber <= 6) && (yearDayNumber >= 0 && yearDayNumber <= 365)) {
        if (janFirstDayNumber == 0) {
            switch ((yearDayNumber - 1) % 7) {
                case 0:
                    console.log("Domingo.");
                    break;
                case 1:
                    console.log("Lunes.");
                    break;
                case 2:
                    console.log("Martes.");
                    break;
                case 3:
                    console.log("Miércoles.");
                    break;
                case 4:
                    console.log("Jueves.");
                    break;
                case 5:
                    console.log("Viernes.");
                    break;
                case 6:
                    console.log("Sábado.");
                    break;

            }
        } else if (janFirstDayNumber > 0) {
            switch (((yearDayNumber - 1) + janFirstDayNumber) % 7) {
                case 0:
                    console.log("Domingo. ");
                    break;
                case 1:
                    console.log("Lunes. ");
                    break;
                case 2:
                    console.log("Martes. ");
                    break;
                case 3:
                    console.log("Miércoles. ");
                    break;
                case 4:
                    console.log("Jueves. ");
                    break;
                case 5:
                    console.log("Viernes. ");
                    break;
                case 6:
                    console.log("Sábado. ");
                    break;
            }
        }
    } else {
        console.log("Los datos ingresados no son válidos");
    }
}

getDayNumber(3, 60);