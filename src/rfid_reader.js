import { Model, List } from "./base.js";


export class RFID_reader extends Model {
  get defaults() {
    return {
      id: "", 
      controller_id: "",
      IPv4: "",
      Main: false     

    };
  }  
}
export class RFID_readerList extends List {
    get model() {
      return RFID_reader;
    }
}
