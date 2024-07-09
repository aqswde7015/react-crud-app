import React from 'react';
import {Button } from 'react-bootstrap';

function Deleteform (props) {
  

  

  return (
    <div>
      <h1>Xác nhận xóa</h1>
      <p>Bạn có muốn xóa mục này không</p>
      <Button>Hủy</Button>
      <Button onClick={()=> props.delete(props.id)}>Xóa</Button>
    </div>
  );
};

export default Deleteform;