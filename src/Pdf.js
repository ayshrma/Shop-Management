import React from 'react';
import  { useState,useRef } from 'react';
import { useReactToPrint } from "react-to-print";


export default function Pdf() {const conponentPDF = useRef();

  const [rowData, setRowData] = useState([
    {
      sNo: 1,
      id: 'g98fgd-fver8vf-dv8yv8',
      product: 'Cotton',
      quantity: 'Quintal',
    },
    {
      sNo: 2,
      id: 'g98fgd-fver8vf-dv8yv9',
      product: 'Cottonso',
      quantity: 'Quintal',
    },
    {
      sNo: 2,
      id: 'g98fgd-fver8vf-dv8yv9',
      product: 'Cottonso',
      quantity: 'Quintal',
    }, {
      sNo: 2,
      id: 'g98fgd-fver8vf-dv8yv9',
      product: 'Cottonso',
      quantity: 'Quintal',
    }, {
      sNo: 2,
      id: 'g98fgd-fver8vf-dv8yv9',
      product: 'Cottonso',
      quantity: 'Quintal',
    }, 
    {
      sNo: 2,
      id: 'g98fgd-fver8vf-dv8yv7',
      product: 'Cottonso',
      quantity: 'Quintal',
    },
    {
      sNo: 2,
      id: 'g98fgd-fver8vf-dv8yv6',
      product: 'Cottonso',
      quantity: 'Quintal',
    },
    {
      sNo: 412,
      id: 'g98fgd-fver8vf-dv8yv6',
      product: 'Cottonso',
      quantity: 'Quintal',
    },
    {
      sNo: 42,
      id: 'g98fgd-fver8vf-dv8yv6',
      product: 'Cottonso',
      quantity: 'Quintal',
    } , {
      sNo: 42,
      id: 'g98fgd-fver8vf-dv8yv6',
      product: 'Cottonso',
      quantity: 'Quintal',
    }    
    
  ]);

  const AddProduct = () => {
    console.log('Go to add product page');
  };
      function add (){
        console.log("hello Params");
      }
      add()

      //create a class structure
      
  
const generatePDF= useReactToPrint({
  content: ()=>conponentPDF.current,
  documentTitle:"Product List",
  onAfterPrint:()=>alert("Data saved in PDF")
} )
  return (
    <div>
      <div ref={conponentPDF} style={{width:'100%'}}>
  <div class="maiin">
  <div class="image">
    <img className='logo' src="../R.png" alt=""/>
  </div>

    <div class="title">
      <h1>ASUHOTOSH AGRAWAL </h1>
      <h3 className='discription'>Cotton & cotton seed broker</h3>
    </div>

    <div class="address">
      <h3>Ph No. : 0240-2482478</h3>
      <h3>Cell No. :9423102478</h3>
      <h3>Email ID. :ashu88909@gmail.com</h3>
    </div>
   </div>

   <div class="add">
      <h3 className='ad'>Plot No. 11, Sector C-3, N-1, CIDCO, Aurangabad - 431003 (MS) India</h3>
    </div>

      <h1>Products</h1>
      <h2> Output of pdf Download</h2>
    <button onClick={AddProduct} id="addproduct">
      + Add product
    </button>
    
    <table id="table">
      <thead id='head'>
        <tr>
          <th>sNo</th>
          <th>id</th>
          <th>product</th>
          <th>quantity</th>  
        </tr>
      </thead>
      <tbody id='body'>
        {rowData.map((curUser) => (
          <tr key={curUser.id}>
            <td>{curUser.sNo}</td>
            <td>{curUser.id}</td>
            <td>{curUser.product}</td>
            <td>{curUser.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className="pdfButton">
          <button className="button" onClick={ generatePDF}>Download Pdf</button>                       
     </div> 
    </div>
  )
}
