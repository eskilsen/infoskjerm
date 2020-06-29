import React from 'react';
import { DateTime } from 'luxon';
const Clock = () => {

    const dateTime = DateTime.local().setLocale("nb-NO");


    console.log(dateTime);
    return (

    <div className ="clock">
        <p>Nå er klokken <b>{dateTime.toLocaleString(DateTime.TIME_24_SIMPLE)}</b></p>
        <u><p>
            {dateTime.toLocaleString({
                weekday: "long",
                day: "numeric",
                month: "long",
            })}
            </p></u>
            
        

    </div>
    )
} 

export default Clock;