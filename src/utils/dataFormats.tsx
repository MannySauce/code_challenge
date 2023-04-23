export function extractMonth(dateString: string): string { // Asumiendo que siempre recibira un string de fecha valida a través del endpoint
    const date = new Date(dateString);
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    return month;
}

export function formatNumberWithCommas(points: number) {
    return points.toLocaleString(undefined, { useGrouping: true });
}