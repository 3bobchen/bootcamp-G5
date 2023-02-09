import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum GarmentType {
  DRESS = "DRESS",
  PANTS = "PANTS",
  SHORTS = "SHORTS",
  SKIRTS = "SKIRTS",
  TSHIRT = "TSHIRT",
  SHIRT = "SHIRT"
}



type EagerGarment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Garment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: GarmentType | keyof typeof GarmentType | null;
  readonly colour?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGarment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Garment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: GarmentType | keyof typeof GarmentType | null;
  readonly colour?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Garment = LazyLoading extends LazyLoadingDisabled ? EagerGarment : LazyGarment

export declare const Garment: (new (init: ModelInit<Garment>) => Garment) & {
  copyOf(source: Garment, mutator: (draft: MutableModel<Garment>) => MutableModel<Garment> | void): Garment;
}