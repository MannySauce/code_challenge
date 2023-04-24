export function extractMonth(tempDate: string): string {
    let date = new Date(tempDate);
    return date.toLocaleString('es-MX', { month: 'long' });
};

export function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const dayOfMonth = date.getUTCDate();
    const month = extractMonth(dateStr);
    const year = date.getUTCFullYear();
    const formatedStr = `${dayOfMonth} de ${month}, ${year}`
    return formatedStr;
};

export function formatNumberWithCommas(points: number) {
    return points.toLocaleString(undefined, { useGrouping: true });
};