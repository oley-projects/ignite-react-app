// Base URL
const baseURL = "https://api.rawg.io/api/"
const API_KEY = process.env.REACT_APP_RAWG_API;

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
const popularGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGameURL = () => `${baseURL}${popularGames}`;
export const upcomingGameURL = () => `${baseURL}${upcomingGames}`;
export const newGameURL = () => `${baseURL}${newGames}`;
