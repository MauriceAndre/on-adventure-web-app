import cover1 from './cover1.png';
import cover2 from './cover2.jpg';
import cover3 from './cover3.jpg';
import cover4 from './cover4.jpg';
import cover5 from './cover5.jpg';

const trips = [
    {
        _id: "0",
        name: "Tenerife Trip",
        startDate: new Date("12.30.2020"),
        labels: ["Car", "Beach", "Sun"],
        participants: ["Maurice", "Nick", "Tomas", "Linus"],
        seats: 4,
        color: "var(--primary)"
    },
    {
        _id: "1",
        name: "Switzerland Trip",
        startDate: new Date(),
        endDate: new Date(),
        labels: ["Road Trip", "Hike", "Mountains"],
        participants: ["Maurice", "Nick", "Tomas"],
        seats: 4,
        coverImg: cover1,
        color: "#44435e"
    },
    {
        _id: "2",
        name: "Rockies Trip",
        startDate: new Date("01.01.2021"),
        endDate: new Date("01.01.2021"),
        labels: ["Road Trip", "Mountains", "Nature"],
        participants: ["Maurice", "Nick", "Tomas"],
        seats: 10,
        coverImg: cover2,
        color: "#63788a"
    },
    {
        _id: "3",
        name: "Vancouver Island Trip",
        startDate: new Date("01.17.2021"),
        endDate: new Date("01.01.2021"),
        labels: ["Road Trip", "Island", "Mountains", "Nature"],
        participants: ["Maurice", "Nick", "Tomas"],
        seats: 5,
        coverImg: cover3,
        color: "#62736f"
    },
    {
        _id: "4",
        name: "Norway Trip",
        startDate: new Date("02.01.2021"),
        endDate: new Date("01.01.2021"),
        labels: ["Road Trip", "Forrest", "Nature"],
        participants: ["Maurice", "Nick", "Tomas"],
        seats: 10,
        coverImg: cover4,
        color: "#6a7081"
    },
    {
        _id: "5",
        name: "Sweden Trip",
        startDate: new Date("01.01.2030"),
        endDate: new Date("01.01.2021"),
        labels: ["Road Trip", "Sweden", "Nature", "Culture"],
        participants: ["Maurice", "Nick", "Tomas"],
        seats: 20,
        coverImg: cover5,
        color: "#7f7e8a"
    },
];


async function getAllTrips() {
    return trips;
}

const exportObj = {
    getAllTrips
};
export default exportObj;
