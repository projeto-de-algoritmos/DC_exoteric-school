function exoteric_select (a, k) {
    const median = oracle(a)
    const right = []
    const left = []
    a.forEach(element => {
        if (element < median)
            left.push(element)
        else if (element > median)
            right.push(element)
    })
    console.log(11)
    if (left.length === k - 1)
        return median
    if (left.length > k - 1)
        return exoteric_select(left, k)
    else
        return exoteric_select(right, k - left.length - 1)
}


function oracle (a) {
    if (a.length < 25) {
        const randomIndex = Math.floor(Math.random() * (a.length - 0)) + 0;
        return a[randomIndex]
    } else {
        const groups = []
        for (let i = 0; i < 5; i++) {
            groups[i] = []
        }
        for (let i = 0; i < 25; i+= 5) {
            groups[1].push(a[i])
            groups[2].push(a[i+1])
            groups[3].push(a[i+2])
            groups[4].push(a[i+3])
            groups[5].push(a[i+4])
        }

        for (let i = 0; i < 5; i++) {
            groups[i].sort(function(a, b) {
                return a - b;
            });
        }

        const medians = []

        for (let i = 0; i < 5; i++) {
            medians.push(groups[i][2])
        }

        medians.sort(function(a, b) {
            return a - b;
        });

        console.log('mediana das medianas = ', median[2])
        return median[2]
    }
}

