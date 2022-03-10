export type CabinType =
  // Multi-manufacturer
  | 'Sleeper'
  | 'Normal Roof'
  | 'High Roof'
  // DAF
  | 'XF'
  | 'XG'
  | 'XG+'
  | 'Space'
  | 'Space Aero'
  | 'Space Cab Plus'
  | 'Super Space'
  // Iveco
  | 'Active Space'
  | 'Active Super'
  | 'Active Space Super'
  | 'Hi-Way'
  // MAN
  | 'XL'
  | 'XLX'
  | 'XXL'
  // Mercedes-Benz
  | 'Low Roof Sleeper'
  | 'High Roof Sleeper'
  | 'MegaSpace'
  | 'StreamSpace'
  | 'BigSpace'
  | 'GigaSpace'
  // Renault
  | 'Excellence'
  | 'High Sleeper'
  // Scania
  | 'Normal'
  | 'Highline'
  | 'Topline'
  // Volvo
  | 'Globetrotter'
  | 'Globetrotter XL'
  
export type ChassisType =
  // Multi-manufacturer
  | '4x2'
  | '4x2 Extra Tank'
  | '6x2'
  | '6x2/4'
  | '6x2 Lifting Rear'
  | '6x2/4 Lifting Middle'
  | '6x4'
  | '8x4/4 Lifting Middle'
  // DAF
  | 'FT'
  | 'FT (Long)'
  | 'FTS'
  | 'FTN'
  // MAN
  | '6x2-2 Lifting Rear'
  | '6x2/2 Lifting Middle'
  | '6x2/4 Lifting Middle'
  // Scania
  | '6x2 Long'
  | '6x2 Long Lifting Rear'
  | '6x4 Long'

export { CityName } from './cityNames';

export type Color =
  | 'Sunny Yellow'
  | 'Custom Dark Blue'
  | 'Magic Bordo'
  | 'Jamaica Blue'
  | 'T High Sleeper'
  | 'Shadow Gray'
  | 'Amber Glory Metallic'
  | 'Deep Aquamarine'

export type CountryName =
  | 'austria'
  | 'belgium'
  | 'bulgaria'
  | 'czech'
  | 'denmark'
  | 'estonia'
  | 'finland'
  | 'france'
  | 'germany'
  | 'hungary'
  | 'italy'
  | 'latvia'
  | 'lithuania'
  | 'luxembourg'
  | 'netherlands'
  | 'norway'
  | 'poland'
  | 'portugal'
  | 'romania'
  | 'russia'
  | 'slovakia'
  | 'spain'
  | 'sweden'
  | 'switzerland'
  | 'turkey'
  | 'uk';

export type BaseInteriorType =
  // Multi-manufacturer
  | 'Standard'
  | 'Exclusive'
  // DAF
  | 'Hexagon'
  | 'Argenta'
  | 'Natura'
  | 'Standard Line'
  | 'Exclusive Line'
  // MAN + Renault T
  | 'Standard 2019'
  | 'Exclusive 2019'
  // Iveco
  | 'New'
  // Mercedes-Benz
  | 'Elegance'
  | 'Trust Edition'
  | 'Standard StreamSpace'
  | 'Exclusive StreamSpace'
  // Renault
  | 'Privilege'
  | 'Excellence'
  | 'Route 66 Edition'
  | 'Standard 2013'
  | 'Exclusive Evolution'
  | 'Exclusive Black 2019'
  // Scania
  | 'Standard Dark'
  | 'Standard Light'
  | 'Exclusive Dark'
  | 'Exclusive Light'
  | 'Exclusive Wood'
  | 'Exclusive V8'
  
export type InteriorType = BaseInteriorType | `${BaseInteriorType} UK`

export type Manufacturer =
  | 'DAF'
  | 'Iveco'
  | 'MAN'
  | 'Mercedes-Benz'
  | 'Renault'
  | 'Scania'
  | 'Volvo';

export type Model =
  // MAN
  | 'TGX'
  | 'TGX Euro 6'
  // Volvo
  | 'FH'
  | 'FH Classic'
  // Iveco
  | 'Stralis'
  // Mercedes-Benz
  | 'Actros'
  | 'New Actros'
  // DAF
  | 'XF'
  | 'XF105'
  | '2021'
  // Renault
  | 'Premium'
  | 'Magnum'
  | 'T'
  // Scania
  | 'Streamline'
  | 'R'
  | 'R 2009'
  | 'S'

export type WheelType =
  | '385/55 Michelin X Line Energy F'
  | '315/70 Michelin X Line Energy D 2'