const { extractMonth, formatNumberWithCommas } = require('../../utils/dataFormats');

describe('extractMonth', () => {
    test('Extrae el mes y lo traduce', () => {
        const result = extractMonth('2022-01-31');
        expect(result).toBe('Enero');
    });
});

describe('formatNumberWithCommas', () => {
    test('formatea un numero dado con commas', () => {
        const result = formatNumberWithCommas(1234567.89);
        expect(result).toBe('1,234,567.89');
    });
});