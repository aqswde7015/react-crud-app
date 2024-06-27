// src/App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from './components/EmployeeTable';
import employeesData from './data'; // Đường dẫn đến tệp data.js
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Inputform from './components/Inputform';


function App() {
  // Lấy dữ liệu từ data.js
  const [post,setPosts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  
  const saing = ()=>{
    const temp = {
    id:post.length,
    name: name,
    phone: phone,
    email: email,
    address: address

  }
  const arr = [...post, temp];
  setPosts(arr);

  }
  

  
  
  
  

  
  useEffect(() => {
    
    setPosts(employeesData);
    
    
  },[]);
  // useEffect(()=>{
  //   setPosts(post);

  // },[post])
    
  return (
    <div className="container mt-4">
      <h1>Manage Employees</h1>
      <Popup trigger=
                {<button> Them </button>}>
      <Inputform name={name} setName={setName} phone={phone} setPhone={setPhone} address={address} setAddress={setAddress} email= {email} setEmail= {setEmail} saing = {saing}/>
                
            </Popup>
        
      
        <EmployeeTable data = {post} setdata = {setPosts}/>
      
      
    </div>
  );
}

export default App;
