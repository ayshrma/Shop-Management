import React, { useEffect, useState } from 'react';
import './Billing.css';
import data from "./item.json";
import html2pdf from 'html2pdf.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Billing() {
  const [search, setSearch] = useState("");  // Search query
  const [searchData, setSearchData] = useState([]);  // Search results
  const [selectedItem, setSelectedItem] = useState(-1);  // Selected item index
  const [tableData, setTableData] = useState([]);  // Data for the table
  const [hasBorder, setHasBorder] = useState(false);  // Border state
  const [quantityMap, setQuantityMap] = useState({});  // Map for item quantities

  // Handle search input change
  const handleChange = e => {
    setSearch(e.target.value);
  };

  // Clear search and reset state
  const handleClose = () => {
    setSearch("");
    setSearchData([]);
    setSelectedItem(-1);
  };

  // Filter search results based on the search query
  useEffect(() => {
    if (search !== "") {
      const filteredData = data.filter(item =>
        item.item.toLowerCase().includes(search.toLowerCase())
      );
      setSearchData(filteredData);
    } else {
      setSearchData([]);
    }
  }, [search]);

  // Generate PDF from HTML content
  const generatePDF = () => {
    const element = document.getElementById('pdf-content');
    if (element) {
      html2pdf().from(element).save('invoice.pdf');
    }
  };

  // Handle keyboard navigation and selection
  const handleKeyDown = e => {
    if (searchData.length === 0) return;

    if (e.key === "ArrowUp" && selectedItem > 0) {
      setSelectedItem(prev => prev - 1);
    } else if (e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
      setSelectedItem(prev => prev + 1);
    } else if (e.key === "Enter" && selectedItem >= 0) {
      // Add selected item to table
      const selectedItemData = searchData[selectedItem];
      setTableData(prevData => [
        ...prevData,
        {
          serial: prevData.length + 1,
          item: selectedItemData.item,
          quantity: 1, // Default quantity
          rate: selectedItemData.price,
          value: selectedItemData.price // Assuming price is the value here
        }
      ]);
      setQuantityMap(prev => ({
        ...prev,
        [selectedItemData.item]: 1 // Set initial quantity for new item
      }));
      setSearch(""); // Clear search input after adding
      setSearchData([]); // Clear search results
      setSelectedItem(-1); // Reset selected item
    }
  };

  // Handle quantity change for a specific item
  const handleQuantityChange = (item, value) => {
    setQuantityMap(prev => ({
      ...prev,
      [item]: value
    }));
  };

  // Get current date and time
  const currentdate = new Date();
  const time = currentdate.toLocaleString();

  return (
    <div>
      <h1 className='billingHeading'>BUSINESS AND ACCOUNT MANAGEMENT SOFTWARE</h1>
      <div className="subDetails">
        <h2 className='billingSubHeading'>SHARMA GROUP LTD</h2>
        <h3 className='billingContact'>
          Phone No: 99955945 <br /> Email: ayushsharma5986.com
        </h3>
      </div>

      <div className="searchInput">
        <input 
          type="text" 
          className='mainInput' 
          placeholder='Search Items' 
          value={search} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown} 
        />
        <button onClick={handleClose}>X</button>
      </div>

      <List 
        sx={{
          marginTop: '4vh',
          border: hasBorder ? '4px solid black' : 'none',
          borderRadius: '4px',
          marginLeft: '80vh',
          width: '100%',
          maxWidth: 490,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {searchData.map((item, index) => (
          <ListItem
            button
            key={index}
            selected={selectedItem === index}
            onClick={() => window.open(item.link)}
          >
            <ListItemText primary={item.item} secondary={`Price: ${item.price}`} />
          </ListItem>
        ))}
      </List>

      <div className="billForm">
        <div id="pdf-content">
          <h2 className='billHead'>SS Mart LTD, IIT INDORE</h2>
          <h2 className='billHead'>INVOICE</h2>

          <div className='billDate'>
            <label className='billLabel'>Bill To:</label>
            <input type="text" className='billInput' placeholder="Bill Number" value="567856789987655678" readOnly />
            <label htmlFor="date" className='dateLabel'>Bill Date</label>
            <input type="text" id='date' className='dateInput' value={time} placeholder='Date' readOnly />
          </div>

          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th className='serial'>S.No</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td className='serial'>{row.serial}</td>
                    <td>{row.item}</td>
                    <td>
                      <input 
                        type="number" 
                        value={quantityMap[row.item] || 1} 
                        min="1" 
                        onChange={(e) => handleQuantityChange(row.item, e.target.value)} 
                      />
                    </td>
                    <td>{row.rate}</td>
                    <td>{(quantityMap[row.item] || 1) * row.rate}</td>
                  </tr>
                ))}
                <tr>
                  <td className='serial'>Total</td>
                  <td colSpan="3">Total</td>
                  <td>
                    {tableData.reduce((acc, row) => acc + (quantityMap[row.item] || 1) * row.rate, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="billingbottom">
              <button onClick={generatePDF} className='button'>Print Bill</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
