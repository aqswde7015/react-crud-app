import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Inputform (props) {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu (ví dụ: gửi dữ liệu lên API)
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Thêm nhân viên</h2>
      <Form.Group controlId="formBasicName">
        <Form.Label>Tên</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập tên"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Nhập email"
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicAddress">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập địa chỉ"
          value={props.address}
          onChange={(e) => props.setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label>Số điện thoại</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Nhập số điện thoại"
          value={props.phone}
          onChange={(e) => props.setPhone(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Thêm
      </Button>
    </Form>
  );
};

export default Inputform;