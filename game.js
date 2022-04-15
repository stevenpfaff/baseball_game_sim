function hudson() {
    for (var i = 0; i < 75; i++) {
        var result = 0;
        var loopEnd = Math.floor(Math.random() * 100 + 1);
        for (var j = 0; j < loopEnd; j++) {
            result++;
        }
        if (result < 40)
            console.log('Walk')

        else if (result < 70 && result > 40)
            console.log('Strikeout')

        else if (result < 80 && result > 70)
            console.log('Out')

        else if (result < 90 && result > 80)
            console.log('Single!')

        else if (result < 95 && result > 90)
            console.log('Double!!')

        else if (result < 99 && result > 95)
            console.log('Triple!!!')

        else if (result < 100 && result > 99)
            console.log('Homerun!!!!!!')
    }
}
hudson()

// function pitcher() {
//     let result = Math.floor(Math.random() * 101)
//     if (result < 40)
//         console.log('Walk')

//     else if (result < 70 && result > 40)
//         console.log('Strikeout')

//     else if (result < 100 && result > 90)
//         console.log('Out')

//     else if (result < 90 && result > 70)
//         console.log('Hit!')

// }
// //pitcher()
