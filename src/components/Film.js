import React, { useState } from "react";
import { film_list } from "../json/filmList"
import Films from "../pages/FilmPage";
import PaginationTemplate from "../shared/PaginationTemplate";

function Film() {

    const [currentFilms, setCurrentFilms] = useState(null);
    const pull_data = (data) => {
        setCurrentFilms(data);
    }
    return (
        <>
            <PaginationTemplate list={film_list} number="4" items={pull_data} quote="Every frame tells a story." />
            {currentFilms != null && <Films items={currentFilms} />}
        </>

    );
}

export default Film;
