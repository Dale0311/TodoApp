function currentDate() {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const formattedDate = new Date().toLocaleDateString(undefined, options);
    return formattedDate;
}
export default currentDate;