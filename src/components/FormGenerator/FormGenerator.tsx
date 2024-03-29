import React from 'react';

type FieldTypes = 'input' | 'radio' | 'checkbox' | 'select'

interface FormFeilds {
  name: string,
  label?: string,
  type?: FieldTypes
}

interface Section {
  name: string,
  label?: string,
  formFeilds?: FormFeilds[]
}

interface FormGeneratorProps {
  name: string,
  label?: string,
  Section?: Section[]
}

const FormGenerator = (data: FormGeneratorProps) => {
  return (
    <>
      <div>{data.name}</div>
      <div>{data.label}</div>
      {/* <div>{data.Section}</div> */}
    </>
  )
}

export default FormGenerator