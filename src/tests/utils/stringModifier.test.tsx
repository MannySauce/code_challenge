import { capitalizeFirstChar } from '../../utils/stringModifier';

describe('capitalizeFirstChar', () => {
    it('debera regresar la primera letra de la palabra en mayusculas', () => {
        const result = capitalizeFirstChar('hola');
        expect(result).toBe('Hola');
    });

    it('debera no ser afectada por una palabra con mayuscula al principio', () => {
        const result = capitalizeFirstChar('Mundo');
        expect(result).toBe('Mundo');
    });

    it('debera no ser afectada por una palabra toda mayuscula', () => {
        const result = capitalizeFirstChar('HOLA');
        expect(result).toBe('HOLA');
    });

    it('debera regresar string vacio, si recibe un string vacio', () => {
        const result = capitalizeFirstChar('');
        expect(result).toBe('');
    });
});