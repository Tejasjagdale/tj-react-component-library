/// <reference types="react" />
import * as React from 'react';
import React__default from 'react';

type FieldTypes = 'input' | 'radio' | 'checkbox' | 'select';
interface FormFeilds {
    name: string;
    label?: string;
    type?: FieldTypes;
}
interface Section {
    name: string;
    label?: string;
    formFeilds?: FormFeilds[];
}
interface FormGeneratorProps {
    name: string;
    label?: string;
    Section?: Section[];
}
declare const FormGenerator: (data: FormGeneratorProps) => React__default.JSX.Element;

declare const useFullScreen: () => {
    fullScreenRef: React.RefObject<HTMLDivElement>;
    toggleFullScreen: () => void;
};

export { FormGenerator, useFullScreen };
