import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): void => {
     v2.config({
      cloud_name: 'dnk4rq8dp',
      api_key: '615849776247477',
      api_secret: 'kQ0lN83lyq-kMDUH2xJlkb3kc18',
    });
  },
};
