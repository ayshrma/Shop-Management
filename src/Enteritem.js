import React, { useState } from 'react';
import './Enteritem.css'
export default function EnterItem() {
  // State for the form data
  const [formData, setFormData] = useState({
    item: '',
    price: '',
    quantity: '',
    category: ''
  });

  // State for the list of products
  const [productList, setProductList] = useState([]);

  // Handle changes to input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setProductList([...productList, formData]);
    setFormData({ item: '', price: '', quantity: '', category: '' }); // Clear form fields
  };

  return (
    <div>
      <h1 className='addProdctHeading'>Add Product Here+</h1>
      <form onSubmit={handleSubmit}>
        <div className='firstInputDiv'>
          <label>
            Item:
            <input
              type="text"
              name="item"
              value={formData.item}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='secondIputDiv'> 
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='thirdInputDiv'>
          <label>
            Quantity:
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='fourthIputDiv'>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className='enterItemButton' type="submit">Submit</button>
      </form>

            <h1 className='inventoryHeading'>INVENTORY </h1>

      <div className="">
        <table className='addedItemTable'>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th> 
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr key={index}>
                <td>{product.item}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
