import { useEffect, useState } from "react";
import Schedule from "./Schedule";

const BART_URL="/bart";

export default function Bart() {
    const getSchedule = () => {
        return fetch(BART_URL).then((response) => {
            return response.json();
        });
    }
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const newSchedule = await getSchedule();
            if (newSchedule != schedule) {
                setSchedule(newSchedule);
            }
        }, 3000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const schedules = [];
    for (let i = 0; i < schedule.length; i++) {
        let destinations = [];
        for (let j = 0; j < schedule[i].etd.length; j++) {
            const destination = {};
            destination.name = schedule[i].etd[j].destination;
            destination.estimate = [];

            // get estimates inside of etd
            for (let k = 0; k < schedule[i].etd[j].estimate.length; k++) {
                destination.estimate.push({
                    minutes: schedule[i].etd[j].estimate[k].minutes,
                    direction: schedule[i].etd[j].estimate[k].direction,
                    cars: schedule[i].etd[j].estimate[k].length,
                    delay: schedule[i].etd[j].estimate[k].delay,
                    color: schedule[i].etd[j].estimate[k].hexcolor
                });
            }

            destinations.push(destination);
        }

        schedules.push(destinations);
    }

    console.log(schedules);

    return (
        <Schedule schedules={schedules} />
    );
}