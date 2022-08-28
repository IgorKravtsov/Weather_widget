import { NavigatorManager } from './navigator.manager';
import { IPositionManager } from './position-manager.interface';

export const positionManager: IPositionManager = new NavigatorManager();
