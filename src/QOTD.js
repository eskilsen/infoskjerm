import React, { useState, useEffect } from 'react';

const APIurl = "https://quotes.rest/qod?language=en"

const QOTD = () => {

    const [quote, setQuote] = useState('');

    const getQuote = () => {
        fetch(APIurl)
        .then((response) => response.json())
        .then((json) => setQuote(json.contents.quotes[0].quote))
        .catch((err) => console.log(err));
    }
    useEffect (( ) => {
        getQuote();
    }, []);


return(
    quote ? (
    <div className = "QOTD">
        <br/>
        <br/>
        <code>{quote}</code>
    </div>
    ) : <></>
)
}

export default QOTD;