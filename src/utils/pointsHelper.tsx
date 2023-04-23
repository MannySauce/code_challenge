import { Purchase } from "../types/purchaseTypes";
export function getPoints(data: Purchase[]) {
    let result = 0;
    for (let x = 0; x < data.length; x++) {
        if (data[x].is_redemption) {
            result -= data[x].points
        }
        else {
            result += data[x].points
        }
    };
    return result;
};