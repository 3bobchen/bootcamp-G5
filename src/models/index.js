// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GarmentType = {
  "DRESS": "DRESS",
  "PANTS": "PANTS",
  "SHORTS": "SHORTS",
  "SKIRTS": "SKIRTS",
  "TSHIRT": "TSHIRT",
  "SHIRT": "SHIRT"
};

const { Garment } = initSchema(schema);

export {
  Garment,
  GarmentType
};