import { Purchase } from '../../types/purchaseTypes';
import { getPoints } from '../../utils/pointsHelper';
// type TestType = Partial<Purchase>[]

describe('getPoints', () => {
    it('Debería devolver 0 para un arreglo vacío.', () => {
        const result = getPoints([]);
        expect(result).toBe(0);
    });

    it('Debería calcular correctamente los puntos para un conjunto de compras.', () => {
        const data = [
            { points: 100, is_redemption: false },
            { points: 50, is_redemption: true },
            { points: 200, is_redemption: false },
            { points: 75, is_redemption: false },
        ];
        const expected = 325;
        const result = getPoints(data as Purchase[]);
        expect(result).toBe(expected);
    });

    it('Debería manejar correctamente solamente las compras de redención.', () => {
        const data = [
            { points: 50, is_redemption: true },
            { points: 75, is_redemption: true },
            { points: 100, is_redemption: true },
        ];
        const expected = -225;
        const result = getPoints(data as Purchase[]);
        expect(result).toBe(expected);
    });

    it('Debería manejar correctamente solamente las compras que no son de redención.', () => {
        const data = [
            { points: 100, is_redemption: false },
            { points: 200, is_redemption: false },
            { points: 75, is_redemption: false },
        ];
        const expected = 375;
        const result = getPoints(data as Purchase[]);
        expect(result).toBe(expected);
    });
});