function humanizeDate(date) {
    const delta = new Date() - date;
    console.log(new Date().getTimezoneOffset());
    // console.log(date);
    // console.log(delta);
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;

    let fuzzyDate = '';
    if (delta < 30) {
        fuzzyDate = 'just now';
    } else if (delta < minute) {
        fuzzyDate = delta + ' seconds ago';
    } else if (delta < 2 * minute) {
        fuzzyDate = 'a minute ago';
    } else if (delta < hour) {
        fuzzyDate = Math.floor(delta / minute) + ' minutes ago';
    } else if (Math.floor(delta / hour) === 1) {
        fuzzyDate = '1 hour ago';
    } else if (delta < day) {
        fuzzyDate = Math.floor(delta / hour) + ' hours ago';
    } else if (delta < day * 2) {
        fuzzyDate = 'yesterday';
    } else if (delta < week) {
        fuzzyDate = Math.floor(delta / day) + ' days ago';
    } else if (delta < week * 2) {
        fuzzyDate = 'last week';
    } else {
        fuzzyDate = Math.floor(delta / week) + ' weeks ago';
    }
    return fuzzyDate;
}

const utils = {
    humanizeDate
};

export default utils;