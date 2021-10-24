import React from 'react'

function Time() {

    var showDate = new Date()
    var currentDate = showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear()

    return (
        <div>
            {currentDate}
        </div>
    )
}

export default Time
