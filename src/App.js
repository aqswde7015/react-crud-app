// src/App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from './components/EmployeeTable';
import employeesData from './data'; // Đường dẫn đến tệp data.js
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Inputform from './components/Inputform';
import Footer from './components/Footer';


function App() {
  // Lấy dữ liệu từ data.js
  const [post,setPosts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  function Validate(){
    var phone_check=/^0+\d{10}$/;// điều kiện check sđt thoại có độ dài 10 kí tự vad bắt đầu = số 0
    var email_check =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    /**
     * ^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$    (check dia chi email hop le)
     * ^.{1,30}$ (toi thieu la 30 ki tu)
     * ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$ (Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số)
     * 
    */

    if(name==='' || phone==='' || email==='' || address==='' ){
        alert("Không được để trống");
        return false;
    }
    else if(!email.match(email_check)){
        alert("Số điện thoại phải dài hơn 10 kí tự và bắt đầu bằng 0 va dia chi email khong hop le");
        return false
    }
    return true;
  }
  
  const saing = ()=>{
    if(Validate()){
    
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
  }
  

  
  
  
  

  
  useEffect(() => {
    
    setPosts(employeesData);
    
    
  },[]);
    
  return (
    <div className="container mt-4">
      <div className="container home">
        <div className="nav-bar d-flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex">
                        <div className="col-md-6 nav-content d-flex justify-content-between">
                            <h3 className="fs-2 ">MANAGE TLU</h3>
                            <p className="prap1 mt-2 ">TRANG CHỦ</p>
                            <p className="prap2 fw-bold mt-2">QUẢN LÝ NHÂN VIÊN</p>
                        </div>

                        <div className="col-md-6 nav-search d-flex justify-content-end gap-2">
                            <input type="text" name="search" id="search-input" placeholder="Nhập nội dung tìm kiếm"/>
                            <button class=" find btn btn-primary ">Tìm</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
      <h1>Manage Employees</h1>
      <Popup trigger=
                {<button> Them </button>} modal nested>
      <Inputform name={name} setName={setName} phone={phone} setPhone={setPhone} address={address} setAddress={setAddress} email= {email} setEmail= {setEmail} saing = {saing}/>
                
            </Popup>
        
      
        <EmployeeTable data = {post} setdata = {setPosts}/>
      
      
    <Footer data = {post}/>
    </div>
  );
}

export default App;
