import React from 'react';



 const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
          if(fieldName === 'email') {
            return (
                <p key={i}>{'Email-ul'} {formErrors[fieldName]}</p>
              ) 
          } else if(fieldName === 'password') {
            return (
                <p key={i}>{'Parola'} {formErrors[fieldName]}</p>
              ) 
          } else  if(fieldName === 'confirmPassword') {
            return (
                <p key={i}>{'Parolele'} {formErrors[fieldName]}</p>
              ) 
          }
               
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors;