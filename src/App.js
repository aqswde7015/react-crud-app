// src/App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from './components/EmployeeTable';
import employeesData from './data'; // Đường dẫn đến tệp data.js
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import Inputform from './components/Inputform';


function App() {
  // Lấy dữ liệu từ data.js
  const [post,setPosts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  
  
  
  

  
  useEffect(() => {
    
    setPosts(employeesData);
    
    
  },[]);
  // useEffect(()=>{
  //   setPosts(post);

  // },[post])
    
  return (
    <div className="container mt-4">
      <h1>Manage Employees</h1>
      
      <Inputform name={name} setName={setName} phone={phone} setPhone={setPhone} address={address} setAddress={setAddress} email= {email} setEmail= {setEmail}/>
        
{/*       
        <EmployeeTable data = {post} setdata = {setPosts}/> */}
      
      
    </div>
  );
}

export default App;
