import React, { useEffect, useState } from 'react'

const Datatable = () => {
    const [formData,SetFormData] =useState({name:"",gender:"",age:""});
    const [data,setData]=useState([]);
    const [editId,setEditId]=useState(false);

    useEffect(()=>{
        if(!editId) return;

        let selectedItem=document.querySelectorAll(`[id='${editId}]`);
        selectedItem[0].focus();
    },[editId]);

    const handleInputChange =(e)=> {
        SetFormData({...formData,[e.target.name]: e.target.value})
    };

    const handleAddClick=()=> {
        if(formData.name && formData.gender && formData.age) {
            const newItem= {
                id:Date.now(),
                name:formData.name,
                gender:formData.gender,
                age:formData.age,
            };
            setData([...data,newItem]);
            SetFormData({name:"",gender:"",age:""});
        }
    };

    const handleDelete =(id) => {
        const updatedlist=data.filter((item)=> item.id !==id);
        setData(updatedlist);
    }


  return (
    <div className='container'>
           <div className='add-container'>
            <div className='info-container'>
            <input type='text'
             placeholder='Name'
              name='name'
               value={formData.name}
                onChange={handleInputChange} 
                />
                <input type='text'
             placeholder='gender'
              name='gender'
               value={formData.gender}
                onChange={handleInputChange} 
                />
                <input type='text'
             placeholder='Age'
              name='age'
               value={formData.age}
                onChange={handleInputChange} 
                />
                </div> 
            <button className='add' onClick={handleAddClick}>ADD</button>
            </div>
<div className='search-table-container'>
<input type='text'
             placeholder='Search by name'
              name='age'
               value={""}
                onChange={()=>{}} 
                className='serach-input'
                />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=> (
                    <tr key={item.id}>
                        <td id={item.id} contentEditable={editId===item.id}>{item.name}</td>
                        <td id={item.id}  contentEditable={editId===item.id} >{item.gender}</td>
                        <td id={item.id}  contentEditable={editId===item.id}>{item.age}</td>
                        
                    <td className='actions'>
                        <button className='edit' onClick={()=> setEditId(item.id)}>Edit</button>
                        <button className='delete' onClick={()=> handleDelete(item.id)}>Delete</button>   
                    </td>
                   </tr>
                    ))}
                  
                </tbody>
            </table>
            <div className='pagination'>

            </div>
           </div>
    </div>
  )
}

export default Datatable