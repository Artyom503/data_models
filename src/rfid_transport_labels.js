import { Model, List } from "./base.js";


export class RFID_Transport_labels extends Model {
  get defaults() {
    return {
      id: "", 
      Digital_code: "",
      Vehicle_name: "",
      Extras: ""     

    };
  }
 
}
export class RFID_Transport_labelsList extends List {
    get model() {
      return RFID_Transport_labels;
    }
}