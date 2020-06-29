import React, {useState, useEffect} from 'react';


const APIurl = "https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1";

const Reddit = () => {

    const [joke, setJoke] = useState({});
    const getJoke = () => {
        fetch(APIurl)
        .then((response) => response.json())
        .then((json) => setJoke(json.data.children[0].data))
        .catch((error) => console.log(error));
    };
    //getJoke();
    useEffect( () => {
        getJoke();
    }, []);
    
    //console.log(joke);

    return joke ? (

    <div className="reddit">
        <p> {joke.title} </p>
        <p> {joke.selftext} </p>

    </div>

    ) : (

    <></>
    );
};

export default Reddit;