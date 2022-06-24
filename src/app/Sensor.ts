export interface Sensor {
    id?: number;
    name: string;
    //type: sensorType;
    transform: string;
  }

  export enum sensorType
  {
    aType,
    bType
  }