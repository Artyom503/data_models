import { Model, List } from "./base.js";


export class Controller extends Model {
  get defaults() {
    return {
      id: "", 
      IPv4: "",
      Name: "",
      Port: "",
      Pinging: false,
      Bat_low: false,
      On_bat: false,
      Recently_reset: false,
      Connect_controllers: false,
      Connect_readers: false,
      Last_update: "",
      Multiple_emergency_state: false,
      Update_freq: "",
      Min_volt: "",
      Max_volt: "",
      Bat_threshold: "",
      Active: false,
      Extras: ""     

    };
    
  }
  

  

 
}

export class ControllerList extends List {
    get model() {
      return Controller;
    }
}