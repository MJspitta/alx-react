export function getFullYear() {
    const year = new Date().getFullYear();
    return year;
}

export function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}
