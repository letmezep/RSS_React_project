import React, { useState, useEffect } from "react";
import getListFromApi from "../../services/api/getApiList"

function ResultList() {
    const [data, setData] = useState<string>('');

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
            {data && (
                <div>
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <p><strong>{key}:</strong> {value}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default ResultList;