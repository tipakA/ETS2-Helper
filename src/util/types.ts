export type CabinType =
  | 'XL'
  | 'Hi-Way'
  | 'GigaSpace'
  | 'Space'
  | 'High Sleeper'
  | 'Globetrotter XL'
  | 'Sleeper'
  
export type ChassisType =
  | '4x2'
  | '4x2 Extra Tank'

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