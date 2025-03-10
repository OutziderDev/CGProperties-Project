import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralListaItem extends Struct.ComponentSchema {
  collectionName: 'components_general_lista_items';
  info: {
    displayName: 'ListaItem';
  };
  attributes: {
    DescripcionLista: Schema.Attribute.String;
  };
}

export interface GeneralServicios extends Struct.ComponentSchema {
  collectionName: 'components_general_servicios';
  info: {
    description: '';
    displayName: 'Servicios';
  };
  attributes: {
    DescripcionServicio: Schema.Attribute.String;
  };
}

export interface GeneralValores extends Struct.ComponentSchema {
  collectionName: 'components_general_valores';
  info: {
    description: '';
    displayName: 'Valores';
  };
  attributes: {
    DescripcionValor: Schema.Attribute.Text;
    TituloValor: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.lista-item': GeneralListaItem;
      'general.servicios': GeneralServicios;
      'general.valores': GeneralValores;
    }
  }
}
