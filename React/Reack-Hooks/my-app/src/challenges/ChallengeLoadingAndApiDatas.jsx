import React, { useState } from 'react';

export default function ChallengeLoadingAndApiDatas() {
    const [loading, setLoading] = useState(false);

    function NotebookApi() {
        fetch("/https://ranekapi.origamid.dev/json/api/produto/notebook", {
            method: "GET"
        }).then(response => {
            console.log(response.body);
        })
    }

    return (
        <>
            <button onClick={NotebookApi}>Notebook</button>
            <button>Smartphone</button>
            <button>Tablet</button>
        </>
    )
}