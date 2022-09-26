import { Model, List } from "./base.js";


export class Traffic_lights extends Model {
  get defaults() {
    return {
      id: "", 
      controller_id: "",
      Manual_state: false,
      Green_light: false,
      Emeregncy_state: false,
      Latitude: "",
      Longtitude: "",
      Height: "",
      Output_name: "",
      Horizon_floor: ""    

    };
  }
  get coordinates() {
    return [this.latitude, this.longtitude].join(" ");
  } 
}
export class Traffic_lightsList extends List {
    get model() {
      return Traffic_lights;
    }
}