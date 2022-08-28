import { IPositionManager } from './position-manager.interface';
import { ICoords } from 'types/coords';

export class NavigatorManager implements IPositionManager {
  async getPosition(): Promise<ICoords | void> {
    if ('geolocation' in navigator) {
      try {
        const { coords } = await this.getCoords();
        return { lat: coords.latitude, lon: coords.longitude };
      } catch (e: any) {
        // console.error('===e===', e);
        throw Error(e);
      }
    }
  }

  private async getCoords() {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (data) => resolve(data),
        (err) => reject(err)
      );
    });
  }
}
