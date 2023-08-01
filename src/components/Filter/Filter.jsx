import PropTypes from 'prop-types'

import { Label,P,Input } from './Filter.styled'

const Filter = ({value,onChange}) => {

  return (
    <Label>
      <P>Search by filter</P>
      <Input type="text" value={value} onChange={onChange}/>
    </Label>
  )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Filter