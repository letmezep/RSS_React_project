import React, { useState, useEffect } from "react";
import getListFromApi from "../../services/api/getApiList";
import { Character, Data } from "../../services/interfaces";

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
            <h3>
                Main Field
            </h3>
            {data.results && (
                <div>
                    {data.results.map((item: Character, index: number) => (
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <p>Height: {item.height} Mass: {item.mass} Hair Color: {item.hair_color}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default ResultList;