function plural(n: number, forms: Array<string>) {
    return n % 10 === 1 && n !== 11 ? forms[0] : n % 10 >= 2 && n % 10 <= 4 && !(n >= 12 && n <= 14) ? forms[1] : forms[2]
}

// Форматирует количество месяцев в строку с годами и месяцами
export function getMonthsToYearsAndMonths(months: number) {
    const years = Math.trunc(months / 12)
    const monthsRest = months % 12

    const result = []
    if (years > 0) result.push(`${years} ${plural(years, ['год', 'года', 'лет'])}`)
    if (monthsRest > 0) result.push(`${monthsRest} мес.`)
    return result.join(', ')
}

// Вычисляет разницу в месяцах между двумя датами
export function getMonthDiff(startDate: Date, endDate: Date) {
    return (startDate.getFullYear() - endDate.getFullYear()) * 12 + (startDate.getMonth() - endDate.getMonth())
}