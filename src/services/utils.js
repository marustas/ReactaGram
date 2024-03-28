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

export function formatTags(inputString) {
    const separatedArray = inputString.split(',').map(item => item.trim());
    return separatedArray;
}

export const createPostObject = (caption, tags, location, username, image, userID, action) => {
    if (action === 'create') {
        if (!caption || !tags || !location || !username || !image || !userID) return null;

        return {
            caption: caption,
            tags: tags,
            location: location,
            creator: username,
            likes: [],
            postImage: image,
            mediaUrl: "",
            creatorID: userID,
            creatorUrl: '',
            saved: []
        }
    }

    if (action === 'update') {
        return {
            caption: caption,
            tags: tags,
            location: location,
            postImage: image,
            mediaUrl: "",
        }
    }

}