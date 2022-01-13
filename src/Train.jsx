export default function Train(props) {
    return (
        <>{props.estimates.map((estimate, index) => {
            return (
                <div 
                    style={{color: estimate.color}} key={index + estimate.minutes + estimate.delay}>
                        {estimate.minutes} mins, {estimate.cars} car train, {estimate.delay == "0" ? "on time" : "delayed by " + estimate.delay + " mins"} 
                </div>
            )
            })}
        </>
    );
    
}