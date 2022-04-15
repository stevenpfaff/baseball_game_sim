function jace() {
    for (var i = 0; i < 15; i++) {
        var result = 0;
        var loopEnd = Math.floor(Math.random() * 100 + 1);
        for (var j = 0; j < loopEnd; j++) {
            result++;
        }
        if (result < 50)
            console.log('Walk')
        else if (result < 60 && result > 50)
            console.log('Strikeout')
        else if (result < 70 && result > 60)
            console.log('Out')
        else if (result < 100 && result > 70)
            console.log('Hit')
    }
}
jace()
//samuel()
//gavin()
//cooper()
//chase()
//mike()
//brantley()
//jaxson()
//hannah()
//brinton()
//hudson()