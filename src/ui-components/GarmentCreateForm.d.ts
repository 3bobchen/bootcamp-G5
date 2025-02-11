/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GarmentCreateFormInputValues = {
    type?: string;
    colour?: string;
};
export declare type GarmentCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    colour?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GarmentCreateFormOverridesProps = {
    GarmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    colour?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GarmentCreateFormProps = React.PropsWithChildren<{
    overrides?: GarmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GarmentCreateFormInputValues) => GarmentCreateFormInputValues;
    onSuccess?: (fields: GarmentCreateFormInputValues) => void;
    onError?: (fields: GarmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GarmentCreateFormInputValues) => GarmentCreateFormInputValues;
    onValidate?: GarmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function GarmentCreateForm(props: GarmentCreateFormProps): React.ReactElement;
