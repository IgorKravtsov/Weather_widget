import { ICoords } from 'types/coords';

export interface IPositionManager {
  getPosition: () => Promise<ICoords | void>;
}
