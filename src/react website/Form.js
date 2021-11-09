import React, { useState } from 'react';

import Registration from './Registration';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      
        {!isSubmitted ? (
          <Registration submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
     
    </>
  );
};
export default Form;

