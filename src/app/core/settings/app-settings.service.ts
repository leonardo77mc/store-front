import { Injectable } from "@angular/core";
import { EndPoint } from "./end-point";

@Injectable()
/**
 * Clase app setting de los servicios.
 * @author Leonardo Castillo - jcastillo@smartsoftint.com
 * @copyright Smartsoft 2021
 */
export class AppSetting {

  /**
   * Propiedad publica para manejar los servicios de investigaciones.
   * @author Leonardo Castillo - jcastillo@smartsoftint.com
   * @copyright Smartsoft 2021
   */
  public investigationsType = {
    url: {
      /** End point de tipos de investigación */
      types: EndPoint.uri('sentinel-investigations/investigationType/list'),
      /** End point de estados de investigación */
      states: EndPoint.uri('sentinel-investigations/states/list'),
      /** End point para actualizar la configuración de colores */
      update: EndPoint.uri('sentinel-investigations/investigationType/update-config-color'),
      /** End point para traer los tipos de roles funcionales */
      roles: EndPoint.uri('sentinel-investigations/roles/list'),
      /** End point para traer los select de atributos por typo de investigación */
      select_attributes: EndPoint.uri('sentinel-investigations/investigationType/get-workflow-attribute'),
      /** End point para guardar la definición del workflow */
      save_definition: EndPoint.uri('sentinel-investigations/investigationType/update-workflow-definition'),
      /** End point para obtener la solicitud de aprobación en curso */
      get_approval_request: EndPoint.uri('sentinel-investigations/investigationType/get-approval-request'),
      /*+ End point para insertar o actualizar la solicitu de aprovación */
      insert_approval_request: EndPoint.uri('sentinel-investigations/investigationType/insert-approval-request'),
      /* End ponit de los historicos */
      get_historical_def: EndPoint.uri('sentinel-investigations/investigationType/get-workflow-history')
    }
  }
}
