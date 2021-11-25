// Base URL
const baseURL = "https://api.rawg.io/api/"

// Getting the date
const getCurrentMonth = () => {
    const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
    return month;
}
const getCurrentDay = () => {
    const day = ("0" + new Date().getDate()).slice(-2);
    return day;
}
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


// Popular Games
const popularGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGameURL = () => `${baseURL}${popularGames}`
