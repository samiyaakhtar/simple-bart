import Train from "./Train";

export default function Destination(props) {
    return (
        <>{props.schedule.map((destination, index) => {
            return (
                <div key={"destinations" + index}>
                    {destination.name} - {destination.estimate[0].direction}
                    <Train estimates={destination.estimate} key={"destination" + index}/>
                </div>
            )
        })}</>
    );
}
