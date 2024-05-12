import React from 'react';
import { useFormik } from 'formik';
import { FormGeneratorProps } from 'components/Types/FormGenerator';

const FormGenerator: React.FC<FormGeneratorProps> = (data) => {
  return (
    <>
      <div>{data.name}</div>
      <div>{data.label}</div>
      {/* <div>{data.Section}</div> */}
    </>
  )
}

export default FormGenerator;
