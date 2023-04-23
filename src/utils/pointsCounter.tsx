interface points {
    is_redemption: boolean,
    points: number
};

export function pointsCounter(points: points[]) {
    let result = 0;
    for (let pts of points) {
        pts
        if (pts.is_redemption)
            result -= pts.points
        else
            result += pts.points
    }
    return result;
}