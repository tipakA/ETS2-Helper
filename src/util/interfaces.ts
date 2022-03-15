import { WheelType } from './types';

export interface TruckWheels {
  front: WheelType;
  rear: WheelType;
  rear2?: WheelType;
  rear3?: WheelType;
}

export type Plate = string;

type Hex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export type TruckID = `TD-${'LTR' | 'HTR'}-${Hex}${Hex}`;

export type TransmissionModel = string;

export type EngineModel = string;
