function randomResult() {
    let randomHit = Math.floor(Math.random() * 101);
    if (randomHit < 40) {
        console.log('Hit!')
    }
    else if (randomHit > 40) {
        console.log('Out')
    }
}
randomResult()



