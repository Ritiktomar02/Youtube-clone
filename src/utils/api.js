import axios from "axios";


const BASE_URL = "https://youtube138.p.rapidapi.com/";

//console.log("api",process.env)

const options = {
    
    headers: {
        'x-rapidapi-key': '81011d527cmshaadea89688ab377p112694jsn98ea3b51f4fc',
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}${url}`, options);
        return data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;
    }
};
