import { LocalStorageManager } from './localStorage.manager';
import { IStorageManager } from './storage-manager.interface';

export const storageManager: IStorageManager = new LocalStorageManager();
