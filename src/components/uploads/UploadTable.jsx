import React, { useState } from 'react'
import '../../assets/css/responsive.css'
import '../../assets/css/style.css'
import { MantineProvider, MultiSelect } from '@mantine/core';
import Select from "react-select";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const tags = [
    { label: 'TAG 1', value: '1' },
    { label: 'TAG 2', value: '2' },
    { label: 'TAG 3', value: '3' },
    { label: 'TAG 4', value: '4' },
    { label: 'TAG 5', value: '5' },
  ];
const UploadTable = () => {
    const [selectedValues, setSelectedValues] = useState([]);
    const data = useSelector((state) => state.uploaded.file)
      const handleChange = (selectedOptions) => {
        setSelectedValues([...selectedValues, ...selectedOptions]);
      };
      const handleClear = (valueToClear) => {
        setSelectedValues(selectedValues.filter(option => option.value !== valueToClear));
      };
  return (
    <>
    {data?.length >0 &&
    <>
    <h4 className='mb-3'>Uploads</h4>
    <div className='upload-table'>
      <table class="table no-border-table">
  <thead>
    <tr className='p-2'>
      <th scope="col" className="col-lg-1">Sl. no</th>
      <th scope="col" className="col-lg-3">Link</th>
      <th scope="col"className="col-lg-2">Prefix</th>
      <th scope="col"className="col-lg-2">Add Tags</th>
      <th scope="col"className="col-lg-4">Selected Tags</th>
    </tr>
  </thead>
  <tbody>
    
    <tr  className='p-2 table-content'>
        
      <td>1</td>
      <td><Link>{data[0]?.path}</Link></td>
      <td>{data[0]?.path}</td>
      <td>
      <Select
placeholder="Select tags"
                          
                              value={null}
                              onChange={handleChange}
                              options={tags}
                              isMulti
                            />
        </td> 
      <td><div className="selected-values" style={{display:"flex"}}>
        {selectedValues?.length > 0 ? (
          selectedValues.map((option, index) => (
            <span key={index} className="selected-value">
            {option.label}
            <button className="clear-button" onClick={() => handleClear(option.value)}>×</button>
          </span>

          ))
        ) : (
          <span></span>
        )}
      </div></td> 
    </tr>
    
  </tbody>
</table>

    </div></>
    }
   
    </>
  )
}

export default UploadTable
