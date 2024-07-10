import React, { useState, useEffect } from "react";
import getListFromApi from "../../services/api/getApiList";
import { Character, Data } from "../../services/interfaces";
import './ResultList.css';

function ResultList() {
    const [data, setData] = useState<Data>({ results: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await getListFromApi();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="main-field__container">
            {data.results && (
                <div className="list-item__container">
                    {data.results.map((item: Character, index: number) => (
                        <div className="list-item" key={index}>
                            <h4>{item.name}</h4>
                            <p>Height: {item.height} Mass: {item.mass} Hair Color: {item.hair_color}</p>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </>
    );
}

export default ResultList;