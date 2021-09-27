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
    const randomIndex = Math.floor(Math.random() * (a.length - 0)) + 0;
    return a[randomIndex]
}

