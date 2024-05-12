type FieldTypes = 'input' | 'radio' | 'checkbox' | 'select';
interface FormField {
    name: string;
    label?: string;
    type?: FieldTypes;
}
interface Section {
    name: string;
    label?: string;
    formFields?: FormField[];
}
export interface FormGeneratorProps {
    name: string;
    label?: string;
    sections?: Section[];
}
export {};
