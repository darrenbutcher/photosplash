import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form } from 'semantic-ui-react'

const SearchForm = styled(Form)`
`

const Search = (props) => {
  const handleSearchSubmit = (e, onSubmit) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <SearchForm onSubmit={(e) => handleSearchSubmit(e, props.onSubmit)}>
      <Form.Group>
        <Form.Input
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          type="text"
        />
       <Form.Button>{props.buttonText}</Form.Button>
      </Form.Group>
    </SearchForm>
  )
}

Search.defaultProps = {
  buttonText: 'Search'
}

Search.propTypes = {
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Search
