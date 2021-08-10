import axios from "axios";

const baseDomain = 'https://api.twitch.tv';
const baseURL = `${baseDomain}/helix`;
const token = '8w29lr1ln3w867fbs3uey0enfmj83k';
const clientId = 'hcf4cuknq3kliu26w1fynbw0mrlgfh';

export default axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Client-Id': clientId
    }
})