import React from 'react';
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
declare const FormGenerator: (data: FormGeneratorProps) => React.JSX.Element;
export default FormGenerator;
