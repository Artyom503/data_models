import { Controller, ControllerList } from "./controller.js";


console.log(" Simple models of controller ");

const coontroller1 = new Controller({
    id: 1, 
    IPv4: "192.168.1.111",
    Name: "Main controller",
    Port: "5432",
    Pinging: true,
    Bat_low: false,
    On_bat: false,
    Recently_reset: false,
    Connect_controllers: true,
    Connect_readers: true,
    Last_update: 2020-08-10,
    Multiple_emergency_state: false,
    Update_freq: 240,
    Min_volt: 60,
    Max_volt: 100,
    Bat_threshold: 5,
    Active: true,
    Extras: "Most important" 
});
const coontroller2 = new Controller({
    id: 2, 
    IPv4: "192.168.1.121",
    Name: "Not Main controller",
    Port: "5432",
    Pinging: true,
    Bat_low: false,
    On_bat: false,
    Recently_reset: false,
    Connect_controllers: true,
    Connect_readers: true,
    Last_update: 2020-09-10,
    Multiple_emergency_state: false,
    Update_freq: 240,
    Min_volt: 60,
    Max_volt: 100,
    Bat_threshold: 5,
    Active: true,
    Extras: "Not the Most important" 
});


console.log(coontroller1);
console.log(coontroller2);


const controllers = new ControllerList([
    {
        id: 2, 
        IPv4: "192.168.1.121",
        Name: "Not Main controller",
        Port: "5432",
        Pinging: true,
        Bat_low: false,
        On_bat: false,
        Recently_reset: false,
        Connect_controllers: true,
        Connect_readers: true,
        Last_update: 2020-09-10,
        Multiple_emergency_state: false,
        Update_freq: 240,
        Min_volt: 60,
        Max_volt: 100,
        Bat_threshold: 5,
        Active: true,
        Extras: "Not the Most important" 
    },
    {
        id: 1, 
        IPv4: "192.168.1.111",
        Name: "Main controller",
        Port: "5432",
        Pinging: true,
        Bat_low: false,
        On_bat: false,
        Recently_reset: false,
        Connect_controllers: true,
        Connect_readers: true,
        Last_update: 2020-08-10,
        Multiple_emergency_state: false,
        Update_freq: 240,
        Min_volt: 60,
        Max_volt: 100,
        Bat_threshold: 5,
        Active: true,
        Extras: "Most important" 
    }
])

console.log(controllers);