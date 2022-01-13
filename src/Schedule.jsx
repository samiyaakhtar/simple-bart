import Destination from "./Destination";

export default function Schedule(props) {
    return (
        <>{props.schedules.map((schedule, index) => {
            return (
                <Destination schedule={schedule} key={"schedule" + index} />
            );
        })}</>
    );
}