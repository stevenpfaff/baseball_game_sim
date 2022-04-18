function jace() {
    for (var i = 0; i < 20; i++) {
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
function samuel() {
    for (var i = 0; i < 20; i++) {
        var result = 0;
        var loopEnd = Math.floor(Math.random() * 100 + 1);
        for (var j = 0; j < loopEnd; j++) {
            result++;
        }
        if (result < 10)
            console.log('Walk')
        else if (result < 35 && result > 10)
            console.log('Strikeout')
        else if (result < 60 && result > 35)
            console.log('Out')
        else if (result < 100 && result > 60)
            console.log('Hit')
    }
}
function gavin() {
    for (var i = 0; i < 20; i++) {
        var result = 0;
        var loopEnd = Math.floor(Math.random() * 100 + 1);
        for (var j = 0; j < loopEnd; j++) {
            result++;
        }
        if (result < 15)
            console.log('Walk')
        else if (result < 40 && result > 15)
            console.log('Strikeout')
        else if (result < 60 && result > 40)
            console.log('Out')
        else if (result < 100 && result > 60)
            console.log('Hit')
    }
}
//jace()
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