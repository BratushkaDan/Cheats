/*
interface User {
  /!*readonly *!/
  id: string | number;
  name?: string;
  isPrivileged: () => boolean
}

// const user = {} as User;
// const user2 = <User>{}

interface SuperUser extends User {
  privilegies: {
    prime: number;
    password: string;
  };
}

interface Styles {
  [property: string]: string;
}
const css: Styles = {
  border: "5px",
  "margin-top": "5px"
};
*/
// enums
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Green"] = 0] = "Green";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Red"] = 2] = "Red";
})(TrafficLight || (TrafficLight = {}));
var trafficLight = TrafficLight.Red;
