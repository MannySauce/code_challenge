import { Purchase } from "../types/purchaseTypes";

export function getPoints(data: Purchase[]) {

    return data.reduce((acc, purchase) => {
        if (purchase.is_redemption) {
            return acc - purchase.points;
        }
        else {
            return acc + purchase.points;
        }
    }, 0)
};