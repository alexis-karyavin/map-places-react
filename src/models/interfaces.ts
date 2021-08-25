
export interface Feature {
  type: string;
  properties: {
    description: string;
    title: string;
  };
  geometry: {
    type: string;
    coordinates: Array<number>;
  };
}