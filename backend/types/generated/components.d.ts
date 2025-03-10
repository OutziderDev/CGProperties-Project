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

export interface ListaLista extends Struct.ComponentSchema {
  collectionName: 'components_lista_listas';
  info: {
    description: '';
    displayName: 'Lista';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.lista-item': GeneralListaItem;
      'lista.lista': ListaLista;
    }
  }
}
