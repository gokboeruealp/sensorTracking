import { SensorComponent } from "./components/sensor/sensor.component";

export interface Sensor {
    id?: number;
    name: string;
    transform: string;
    sensorComp: SensorComponent;
    node: any;
  }