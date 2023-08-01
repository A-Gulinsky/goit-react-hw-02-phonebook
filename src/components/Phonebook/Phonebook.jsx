import { Component } from "react";

// formik/yup
import { Formik } from "formik";
import { schema } from "./yupSchema";
// validate
import { validateName, validatePhone } from './validation'
// emotion 
import { FormikForm,P,Input,Error,Button } from "./Phonebook.styled";

class Phonebook extends Component {

  state = {
    name: '',
    number: ''
  }

  handleSubmit = (values,{resetForm}) => {
    const { name, number } = values
    
    this.props.onSubmit(name, number)
    resetForm()    
  }

  render() {
    const initialValues = {
      name: '',
      number: ''
    }

    return (
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={this.handleSubmit}>
        
        <FormikForm autoComplete="off">
          
          <label>
            <P>Name</P>
            <Input type="text"
              name="name"
              validate={validateName}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <Error name="name" component="div"></Error>
          </label>
          
          <label>
            <P>Phone</P>
            <Input
              type="tel"
              name="number"
              validate={validatePhone}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <Error name="number" component="div"></Error>  
          </label>

          <Button type="submit">Add contact</Button>

        </FormikForm>
      
      </Formik>
    )
  }

}

export default Phonebook