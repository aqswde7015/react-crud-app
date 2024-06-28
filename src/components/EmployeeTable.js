// src/components/EmployeeTable.js
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';



const EmployeeTable = (props) => {
      props.setdata(props.data);
      const handleDelete = (id) => {
        // Xóa nhân viên với ID tương ứng
        const updatedEmployees = props.data.filter((employee) => employee.id !== id);
        
        props.setdata(updatedEmployees);
      };
      const handleEdit = (id)=>{
        const temp = {
          id:id,
          name:"Phu",
          phone:"01234",
          address:"hdsjhf",
          email:"pdscnjk"
        }
        props.setdata((employees)=>
                employees.map((employee)=>
                      employee.id === id ? temp:employee))
      }
      console.log(props.data);
        
    return (
    
    <table className="table">
    <thead>
      <tr>
        <th><input type='checkbox'/></th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
      <tbody>
        {props.data.map((employee) => (
         
            <tr>
            <td><input type='checkbox'></input></td>
            <td>{ employee.name}</td>
            <td>{ employee.email}</td>
            <td>{ employee.address}</td>
            <td>{ employee.phone}</td>
            <td>
              <button onClick={() => handleEdit(employee.id)} className="btn btn-sm btn-primary" >
                <FaEdit /> Edit
              </button>
              <button onClick={() => handleDelete(employee.id)} className="btn btn-sm btn-danger ml-2" >
                <FaTrash /> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
