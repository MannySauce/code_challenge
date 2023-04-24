import { capitalizeFirstChar } from '../../utils/stringModifier';

describe('capitalizeFirstChar', () => {
    it('Debería regresar la primera letra de la palabra en mayusculas', () => {
        const result = capitalizeFirstChar('hola');
        expect(result).toBe('Hola');
    });

    it('Debería no ser afectada por una palabra con mayuscula al principio', () => {
        const result = capitalizeFirstChar('Mundo');
        expect(result).toBe('Mundo');
    });

    it('Debería no ser afectada por una palabra toda mayuscula', () => {
        const result = capitalizeFirstChar('HOLA');
        expect(result).toBe('HOLA');
    });

    it('Debería regresar string vacio, si recibe un string vacio', () => {
        const result = capitalizeFirstChar('');
        expect(result).toBe('');
    });
});