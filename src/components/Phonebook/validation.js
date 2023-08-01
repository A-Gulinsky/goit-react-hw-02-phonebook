export const validateName = value => {
  let errorMessage;
  
  const pattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  if (!pattern.test(value)) {
    errorMessage = 'Invalid name';
  
  }
  return errorMessage;
};
 
export const validatePhone = value => {
  let errorMessage;
  
  const pattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
  if (!pattern.test(value)) {
    errorMessage = 'Invalid phone number';
  }

  return errorMessage;
};