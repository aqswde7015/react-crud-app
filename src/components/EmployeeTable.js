// src/components/EmployeeTable.js
import React from 'react';
import Deleteform from './Inputform';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';





const EmployeeTable = (props) => {
      
      
      console.log(props.data);
      
     
        
    return (
    
    <table className="table">
    <thead>
      <tr>
        <th>Mã phòng</th>
        <th>Tên phòng</th>
        <th>Số lượng phạm nhân</th>
        <th>Thao tác</th>
      </tr>
    </thead>
      <tbody>
        {props.data.map((employee) => (
         
            <tr>
            <td>{employee.id}</td>
            <td>{ employee.ten}</td>
            <td>{employee.soluong}</td>
            <td>
              <button className="btn btn-sm btn-primary" >
                Sửa
              </button>
              <Popup trigger=
                {<button className="btn btn-sm btn-danger ml-2" >
                Xóa
              </button>}>
                  <Deleteform delete = {props.delete} id = {employee.id}> </Deleteform>
                
            </Popup>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
