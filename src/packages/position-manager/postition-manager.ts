import { IPositionManager } from './position-manager.interface';
import { NavigatorManager } from './navigator.manager';
import { ICoords } from 'types/coords';

const navigatorPositionManager = new NavigatorManager();

export class PostitionManager implements IPositionManager {
  getPosition(): Promise<ICoords | void> {
    return navigatorPositionManager.getPosition();
  }
}

export const postitionManager = new PostitionManager();
