import { extractMonth, formatNumberWithCommas, formatDate } from '../../utils/dataFormats';

describe('formatDate function', () => {
    it('Debería formatear un string de fecha al lenguaje español', () => {
        const dateStr = '2022-05-15';
        const expected = '15 de mayo, 2022';
        expect(formatDate(dateStr)).toEqual(expected);
    });
});

describe('extractMonth', () => {
    it('Debería extraer el mes traducirlo a lenguaje español', () => {
        const result = extractMonth('2022-01-31');
        expect(result).toBe('enero');
    });
});

describe('formatNumberWithCommas', () => {
    it('Debería formatear un numero dado con commas', () => {
        const result = formatNumberWithCommas(1234567.89);
        expect(result).toBe('1,234,567.89');
    });
});