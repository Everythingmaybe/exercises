function findDistance(targetX, targetY) {
    let layerNumber = 0;
    let prevSet = new Set();
    let currentSet = new Set(['0-0']);

    while(!currentSet.has(`${targetX}-${targetY}`)) {
        console.log(currentSet);
        let nextLayer = new Set();
        for (let xy of currentSet) {
            for (let [nextX, nextY] of moves(...xy.split('-').map(n => Number(n)))) {
                const xyString = `${nextX}-${nextY}`;
                if (!prevSet.has(xyString)) {
                    nextLayer.add(xyString)
                }
            }
        }
        prevSet = currentSet;
        currentSet = nextLayer;
        layerNumber++;
    }

    return layerNumber;
}

function moves(x, y) {
    return [
        [x-2, y+1], [x-2, y-1],
        [x+2, y+1], [x+2, y-1],
        [x-1, y+2], [x-1, y-2],
        [x+1, y+2], [x+1, y-2],
    ]
}

console.log(findDistance(-2, -2));
