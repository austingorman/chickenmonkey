
    for (let i = 0; i <= 100; i++) {
        // Take the current number, divide by 5, and check if the remainder is 0
        if ([i] % 5 === 0 && [i] % 7 === 0) {
            console.log('ChickenMonkey') 
            } else if ([i] % 7 === 0) {
                console.log('Monkey')
            } else if ([i] % 5 === 0) {
                console.log('Chicken')    
            } else {
                console.log([i])
            }
        }

