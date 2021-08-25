import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Spinner.scss'

const Spinner = () => {
  return (
    <div className="container-spinner">
      <FontAwesomeIcon icon={["fas", "circle-notch"]} size="3x" />
    </div>
  )
}

export default Spinner;
