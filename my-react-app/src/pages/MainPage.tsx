import React from "react"; 
import SearchField from "../components/SearchField/SearchField";
import ResultList from "../components/ResultsList/ResultList";
import getListFromApi from "../services/api/getApiList";

function MainPage() {
    return (
        <>
            <SearchField />
            <ResultList />
        </>
    );
}

export default MainPage;