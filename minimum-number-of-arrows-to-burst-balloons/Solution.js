var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0])
    console.log(points)
    let arrowsNum = 0
    for (let i = 0; i < points.length; i++) {
        let end = points[i][1]
        let cnt = 0
        for (let j = i + 1; j < points.length; j++) {
            if (points[j][0] <= end) cnt++
            else break
        }
        i += cnt
        arrowsNum++
    }
    return arrowsNum
}

console.log(
    findMinArrowShots([
        [3, 9],
        [7, 12],
        [3, 8],
        [6, 8],
        [9, 10],
        [2, 9],
        [0, 9],
        [3, 9],
        [0, 6],
        [2, 8],
    ])
)