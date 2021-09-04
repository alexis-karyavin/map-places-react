import './UserPanel.scss';

import React from 'react';
import { Button } from 'react-bootstrap';

const UserPanel = (props: any) => {

  const clickBtnClose = () => {
    props.onCloseUserPanel(false);
  }

  let className = 'container-user-panel ';
  if (props.collapse) {
    className += 'show';
  }


  return (
    <div className={className}>
      <Button onClick={clickBtnClose}>Закрыть</Button>
    </div>
  );
};

export default UserPanel;