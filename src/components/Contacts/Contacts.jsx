import PropTypes from 'prop-types'

import { Ul,Li,Name,Number,Button } from './Contacts.styled'

const Contacts = ({contacts, onDeleteContact}) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (

        <Li key={id}>
          <Name>{name} :</Name>
          <Number>{number}</Number>
          <Button type="button" onClick={() => onDeleteContact(id)}>delete</Button>
        </Li>
        
      ))}
    </Ul>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired,
}

export default Contacts