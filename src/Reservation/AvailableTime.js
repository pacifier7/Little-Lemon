
function AvailableTime(props){
    return(
        <select required>
            {
                props.Times&&props.Times.availableTimes.map( Time =>{
                   return <option key={Time}>
                       {Time}
                    </option>
                }
            )
}
        </select>
    )
}

export default AvailableTime;