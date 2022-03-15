/* eslint-disable sort-keys, no-inline-comments */
import { TransmissionModel } from '../util/interfaces';
import { Manufacturer, Model } from '../util/types';

export interface TransmissionData {
  manufacturers: Manufacturer[];
  for: Model[];
  model: TransmissionModel;
  retarder?: true;
  gearCount?: 6 | 12 | 16;
  subgears?: 2;
  gearRatio: [ number, number ];
  torqueMod?: number;
}

/*
  Note: Gear count and subgears are resolved from the model number. If model number does not contain a gear count,
    the gearbox is either an Allison 4500 / Scania GA867 which have 6 gears and have static gear count assigned in resolver,
    or an Opticruise, in which case it is *assumed* to be 12 gears.
    If that's not the case, provide a gearCount field.
  Note: Same goes for retarder. So far every transmission clearly includes an " R" or "R" at the end of the model number.
    If that's not the case, provide a retarder field.
*/

export const transmissionsData: Array<TransmissionData> = [
  { model: 'ZF 12AS2330TD', manufacturers: ['DAF', 'Iveco', 'MAN'], for: ['XF105', 'XF', 'Stralis', 'TGX'], gearRatio: [15.86, 1] },
  { model: 'ZF 12AS2530TO', manufacturers: ['DAF', 'Iveco'], for: ['XF105', 'XF', 'Stralis'], gearRatio: [12.33, 0.78] },
  { model: 'ZF 12AS3140TO', manufacturers: ['MAN'], for: ['TGX'], gearRatio: [12.29, 0.78] },
  { model: 'ZF 16AS2630TO', manufacturers: ['DAF', 'Iveco', 'MAN', 'Renault'], for: ['XF105', 'XF', 'Stralis', 'TGX', 'TGX Euro 6', 'Premium', 'Magnum'], gearRatio: [14.12, 0.83] },
  { model: 'ZF 12AS2331TD R', manufacturers: ['DAF', 'Iveco', 'MAN'], for: ['XF105', 'XF', 'Stralis', 'TGX'], gearRatio: [15.86, 1] },
  { model: 'ZF 12AS2531TO R', manufacturers: ['DAF', 'Iveco'], for: ['XF105', 'XF', 'Stralis'], gearRatio: [12.33, 0.78] },
  { model: 'ZF 12AS3140TO R', manufacturers: ['MAN'], for: ['TGX'], gearRatio: [12.29, 0.78] },
  { model: 'ZF 16AS2631TO R', manufacturers: ['DAF', 'Iveco', 'MAN', 'Renault'], for: ['XF105', 'XF', 'Stralis', 'TGX', 'TGX Euro 6', 'Premium', 'Magnum'], gearRatio: [14.12, 0.83] },
  { model: 'ZF 12TX2420TD', manufacturers: ['DAF'], for: ['XF', '2021'], gearRatio: [16.69, 1] },
  { model: 'ZF 12TX2610TO', manufacturers: ['DAF'], for: ['XF', '2021'], gearRatio: [12.92, 0.77] },
  { model: 'ZF 16TX2640TO', manufacturers: ['DAF'], for: ['XF', '2021'], gearRatio: [14.68, 0.82] },
  { model: 'ZF 12TX2421TD R', manufacturers: ['DAF', 'MAN'], for: ['XF', '2021'], gearRatio: [16.69, 1] },
  { model: 'ZF 12TX2611TO R', manufacturers: ['DAF'], for: ['XF', '2021'], gearRatio: [12.92, 0.77] },
  { model: 'ZF 16TX2641TO R', manufacturers: ['DAF'], for: ['XF', '2021'], gearRatio: [14.68, 0.82] },
  { model: 'TipMatic 12AS2330 DD', manufacturers: ['MAN'], for: ['TGX Euro 6'], gearRatio: [15.86, 1] },
  { model: 'TipMatic 12AS3140 OD', manufacturers: ['MAN'], for: ['TGX Euro 6'], gearRatio: [12.29, 0.78] },
  { model: 'TipMatic 12AS2331 DD R', manufacturers: ['MAN'], for: ['TGX Euro 6'], gearRatio: [15.86, 1] },
  { model: 'TipMatic 12AS3141 OD R', manufacturers: ['MAN'], for: ['TGX Euro 6'], gearRatio: [12.29, 0.78] },

  { model: 'PowerShift G281-12', manufacturers: ['Mercedes-Benz'], for: ['Actros', 'New Actros'], gearRatio: [14.93, 1] },
  { model: 'PowerShift G330-12', manufacturers: ['Mercedes-Benz'], for: ['Actros', 'New Actros'], gearRatio: [11.64, 0.77] },
  { model: 'PowerShift G280-16', manufacturers: ['Mercedes-Benz'], for: ['Actros', 'New Actros'], gearRatio: [11.72, 0.69] },
  { model: 'PowerShift G281-12 R', manufacturers: ['Mercedes-Benz'], for: ['Actros', 'New Actros'], gearRatio: [14.93, 1] },
  { model: 'PowerShift G330-12 R', manufacturers: ['Mercedes-Benz'], for: ['Actros', 'New Actros'], gearRatio: [11.64, 0.77] },
  { model: 'PowerShift G280-16 R', manufacturers: ['Mercedes-Benz'], for: ['Actros', 'New Actros'], gearRatio: [11.72, 0.69] },

  { model: 'Optidriver AT2412D', manufacturers: ['Renault'], for: ['Premium', 'Magnum'], gearRatio: [14.94, 1] },
  { model: 'Optidriver ATO2612D', manufacturers: ['Renault'], for: ['Premium', 'Magnum'], gearRatio: [11.73, 0.78] },
  { model: 'Optidriver AT2412D R', manufacturers: ['Renault'], for: ['Premium', 'Magnum'], gearRatio: [14.94, 1] },
  { model: 'Optidriver ATO2612D R', manufacturers: ['Renault'], for: ['Premium', 'Magnum'], gearRatio: [11.73, 0.78] },
  { model: 'Optidriver AT2612F', manufacturers: ['Renault'], for: ['T'], gearRatio: [14.94, 1] },
  { model: 'Optidriver ATO2612F', manufacturers: ['Renault'], for: ['T'], gearRatio: [11.73, 0.79] },
  { model: 'Optidriver AT2612F R', manufacturers: ['Renault'], for: ['T'], gearRatio: [14.94, 1] },
  { model: 'Optidriver ATO2612F R', manufacturers: ['Renault'], for: ['T'], gearRatio: [11.73, 0.79] },
  { model: 'Optidriver Xtended ATO2614F', manufacturers: ['Renault'], for: ['T'], subgears: 2, gearRatio: [32.04, 0.79] },
  { model: 'Optidriver Xtended ATO2614F R', manufacturers: ['Renault'], for: ['T'], subgears: 2, gearRatio: [32.04, 0.79] },

  { model: 'Opticruise GRS 905', manufacturers: ['Scania'], for: ['Streamline', 'R', 'R 2009', 'S'], gearRatio: [11.32, 1] },
  { model: 'Opticruise GRSO 905', manufacturers: ['Scania'], for: ['Streamline', 'R', 'R 2009', 'S'], gearRatio: [9.16, 0.80] },
  { model: 'Scania GA867', manufacturers: ['Scania'], for: ['Streamline', 'R', 'R 2009', 'S'], gearRatio: [4.70, 0.67], torqueMod: 2.42 },
  { model: 'Opticruise GRSO 925', manufacturers: ['Scania'], for: ['Streamline', 'R', 'R 2009', 'S'], subgears: 2, gearRatio: [13.26, 0.80] },
  { model: 'Opticruise GRS 905R', manufacturers: ['Scania'], for: ['Streamline', 'R', 'R 2009', 'S'], gearRatio: [11.32, 1] },
  { model: 'Opticruise GRSO 905R', manufacturers: ['Scania'], for: ['Streamline', 'R', 'R 2009', 'S'], gearRatio: [9.16, 0.80] },
  { model: 'Scania GA867 R', manufacturers: ['Scania'], for: ['Streamline', 'R', 'R 2009', 'S'], gearRatio: [4.70, 0.67], torqueMod: 2.42 },
  { model: 'Opticruise GRSO 925R', manufacturers: ['Scania'], for: ['Streamline', 'R', 'R 2009', 'S'], subgears: 2, gearRatio: [13.26, 0.80] },

  { model: 'I-Shift AT2812D', manufacturers: ['Volvo'], for: ['FH', 'FH Classic'], gearRatio: [14.94, 1] },
  { model: 'I-Shift ATO3512D', manufacturers: ['Volvo'], for: ['FH', 'FH Classic'], gearRatio: [11.73, 0.78] },
  { model: 'I-Shift ATO3512F + ASO-ULC', manufacturers: ['Volvo'], for: ['FH', 'FH Classic'], subgears: 2, gearRatio: [32.04, 0.78] },
  { model: 'I-Shift AT2812D R', manufacturers: ['Volvo'], for: ['FH', 'FH Classic'], gearRatio: [14.94, 1] },
  { model: 'I-Shift ATO3512D R', manufacturers: ['Volvo'], for: ['FH', 'FH Classic'], gearRatio: [11.73, 0.78] },
  { model: 'I-Shift ATO3512F R + ASO-ULC', manufacturers: ['Volvo'], for: ['FH', 'FH Classic'], subgears: 2, gearRatio: [32.04, 0.78] },

  { model: 'Allison 4500', manufacturers: ['DAF', 'Iveco', 'MAN', 'Mercedes-Benz', 'Renault', 'Volvo'], for: [
      'XF105', 'XF', 'Stralis', 'TGX', 'TGX Euro 6', 'Actros', 'New Actros', 'Premium', 'Magnum', 'T', 'FH'
    ], gearRatio: [4.70, 0.67], torqueMod: 2.42
  },
  { model: 'Allison 4500 R', manufacturers: ['DAF', 'Iveco', 'MAN', 'Mercedes-Benz', 'Renault', 'Volvo'], for: [
      'XF105', 'XF', 'Stralis', 'TGX', 'TGX Euro 6', 'Actros', 'New Actros', 'Premium', 'Magnum', 'T', 'FH'
    ], gearRatio: [4.70, 0.67], torqueMod: 2.42
  },
];
