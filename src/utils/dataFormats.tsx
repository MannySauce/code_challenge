export function extractMonth(tempDate: string | Date): string {
    let date: string | Date = "";
    if (tempDate instanceof Date) {
        date = new Date(tempDate);
    }
    return date.toLocaleString('es-MX', { month: 'long' });
};

export function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const dayOfMonth = date.getDate();
    const month = extractMonth(date);
    const year = date.getFullYear();
    const formatedStr = `${dayOfMonth} de ${month}, ${year}`
    return formatedStr;
};

export function formatNumberWithCommas(points: number) {
    return points.toLocaleString(undefined, { useGrouping: true });
};