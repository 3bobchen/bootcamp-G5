/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Garment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GarmentUpdateFormInputValues = {
    type?: string;
    colour?: string;
};
export declare type GarmentUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    colour?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GarmentUpdateFormOverridesProps = {
    GarmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    colour?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GarmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: GarmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    garment?: Garment;
    onSubmit?: (fields: GarmentUpdateFormInputValues) => GarmentUpdateFormInputValues;
    onSuccess?: (fields: GarmentUpdateFormInputValues) => void;
    onError?: (fields: GarmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GarmentUpdateFormInputValues) => GarmentUpdateFormInputValues;
    onValidate?: GarmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GarmentUpdateForm(props: GarmentUpdateFormProps): React.ReactElement;
