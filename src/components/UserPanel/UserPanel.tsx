import './UserPanel.scss';

import React from 'react';
import { Button } from 'react-bootstrap';

const UserPanel = (props: any) => {

  const clickBtnClose = () => {
    props.onCloseUserPanel(false);
  }

  return (
    <div className="container-user-panel">
      <Button onClick={clickBtnClose}>Закрыть</Button>
    </div>
  );
};

export default UserPanel;