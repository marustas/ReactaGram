export function formatDate(dateString) {
    const date = new Date(dateString);

    const currentDate = new Date();

    const differenceInMillis = currentDate - date;

    const differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);

    const roundedDifference = Math.round(differenceInDays);

    if (roundedDifference === 0) {
        return "Today";
    } else if (roundedDifference === 1) {
        return "Yesterday";
    } else {
        return `${roundedDifference} days ago`;
    }
}