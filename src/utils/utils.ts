// Убираем лишний / в конце path, если он там есть
export function trimRightSlash(path: string): string {
    const lastChar = path.slice(-1)
    return lastChar === '/' ? path.slice(0, -1) : path
}