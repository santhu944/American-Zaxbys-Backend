import type { Schema, Attribute } from '@strapi/strapi';

export interface FoodFood extends Schema.Component {
  collectionName: 'components_food_foods';
  info: {
    displayName: 'Food';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.String;
    Price: Attribute.String;
    Description: Attribute.String;
    Calories: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'food.food': FoodFood;
    }
  }
}
