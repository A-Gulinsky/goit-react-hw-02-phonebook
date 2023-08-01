import PropTypes from 'prop-types'
import { Title } from './Section.styled'

const Section = ({ title, children }) => {
  return (
    <section>
      { title && <Title>{title}</Title> }
      {children}
    </section>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
}