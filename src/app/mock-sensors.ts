import { Sensor, sensorType } from './Sensor';

export const SENSORS: Sensor[] = [
  {
    id: 0,
    name: "A Type Sensor",
    type: sensorType.aType,
    transform: "translate3d(250px, 30px, 0px)",
  },
  {
    id: 1,
    name: "B Type Sensor",
    type: sensorType.bType,
    transform: "translate3d(100px, 7px, 0px)",
  }
];