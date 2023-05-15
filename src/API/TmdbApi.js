
const key = 'a77f4daa954a4f141b5cf30a7771232a';

import React from 'react'

export async function fetchFilm(query) {
    //Example API Request
    //https://api.themoviedb.org/3/movie/550?api_key=a77f4daa954a4f141b5cf30a7771232a
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=1`;
    const data = (await fetch(url)).json();

    return data;
}

