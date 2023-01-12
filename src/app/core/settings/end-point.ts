import { environment } from '../../../environments/environment';

/**
 * End point de servicios
 * @author Leonardo Castillo - jcastillo@smartsoftint.com
 * @copyright Smartsoft 2021
 */
export class EndPoint {
  static uri(url: string): string {
    return environment.url_api + url;
  }
}
