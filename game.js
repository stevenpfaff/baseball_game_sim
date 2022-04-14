function atBat() {
    let result = Math.floor(Math.random() * 101)
    if (result < 20)
        console.log('Walk')

    else if (result < 40 && result > 20)
        console.log('Strikeout')

    else if (result < 60 && result > 40)
        console.log('Out')

    else if (result < 100 && result > 60)
        console.log('Hit!')

}
atBat()


