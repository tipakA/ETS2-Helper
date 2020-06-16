import { type } from "os";

export interface Truck {
  manufacturer: Manufacturer;
  model: Model;
  cabinType: CabinType;
  plate: Plate;
  id: TruckID;
  inGameID: number;
  chassis: ChassisType;
  interior: InteriorType;
  color: Color;
  wheelbase: number;
  fuelTank: number;
  engine: Engine;
  transmission: TruckTransmission;
  wheels: TruckWheels;
};

export interface Transmission {
  manufacturers: Manufacturer[];
  for: Model[];
  model: TransmissionModel;
  retarder: boolean;
  gearCount: 6 | 12 | 14;
  gearRatio: [ number, number ];
};

export interface TruckTransmission extends Transmission {
  differential: number;
}

export interface Engine {
  manufacturers: Manufacturer[];
  for: Model[];
  model: EngineModel;
  power(hp: number): EnginePowers;
  torque: {
    nm: [ number, number? ];
    at: [ number, number ];
  };
};

export interface EnginePowers {
  hp: number;
  kw: number;
};

export interface Garage {
  level: 1 | 2 | null;
};

export interface TruckWheels {
  front: WheelType;
  rear: WheelType;
  rear2?: WheelType;
  rear3?: WheelType;
}

export type Manufacturer =
  | 'DAF'
  | 'Iveco'
  | 'MAN'
  | 'Mercedes-Benz'
  | 'Renault'
  | 'Scania'
  | 'Volvo';

export type Model =
  | 'TGX'
  | 'FH';

export type CabinType =
  | 'XL';

export type Color =
  | 'Sunny Yellow';

export type ChassisType =
  | 'XL';

export type InteriorType =
  | 'XL';

export type WheelType =
  | '385/55 Michelin X Line Energy F'
  | '315/70 Michelin X Line Energy D 2';

export type Plate = string;

export type TruckID = string;

export type TransmissionModel = string;

export type EngineModel = string;