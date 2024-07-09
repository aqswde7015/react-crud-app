// src/App.js
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from './components/EmployeeTable';
import employeesData from './data'; // Đường dẫn đến tệp data.js

function App() {
  // Lấy dữ liệu từ data.js
  const [post,setPosts] = useState([]);
  
  const handleDelete = (id) => {
    // Xóa phong với ID tương ứng
    const updatedEmployees = post.filter((employee) => employee.id !== id);
    
    setPosts(updatedEmployees);
    alert("Xóa thanh công! Dữ liệu phòng đã được xóa khỏi hệ thống ");
  };
  
  
  

  
  
   

  
  useEffect(() => {
    
    setPosts(employeesData);
    
    
  },[]);
    
  return (
    <div className="container mt-4">
      
      <h1>Manage Employees</h1>
      <Button>Thêm phòng giam</Button>
        
        <EmployeeTable data = {post} delete = {handleDelete}/>
    </div>
  );
}

export default App;
