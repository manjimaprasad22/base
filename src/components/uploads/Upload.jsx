import React, { useCallback, useRef, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { useDropzone } from 'react-dropzone';
import '../../assets/css/style.css'
 import uploadicon from '../../assets/images/Icon.svg'
 import excel from '../../assets/images/Frame 7682.png'
import { useDispatch, useSelector } from 'react-redux';
import { fileData } from '../../redux/uploadfile';


const Upload = () => {
  const dispatch = useDispatch()
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const data = useSelector((state) => state.uploaded.file)
  const onDrop = useCallback((acceptedFiles) => {
    // Filter out non-CSV files
    const csvFiles = acceptedFiles.filter(file => file.type === 'text/csv');
    if (csvFiles.length > 0) {
      setFiles(csvFiles);
      dispatch(fileData(csvFiles))
      setErrorMessage("");
    } else {
      setFiles([]);
      setErrorMessage(" Please select only CSV files.");
    }
  }, []);
  
  // dispatch(fileData())
  console.log(data,"aaaa");
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    accept: '.csv'
  });

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex-container">
      <div className="dropzone-container col-lg-5" {...getRootProps()}>
        <input {...getInputProps()} ref={fileInputRef} />
        <img src={excel} alt="" style={{marginTop:"70px"}}/>
        {
          isDragActive ?
            <p>Drop the files here...</p> :
            <p>Drop your CSV file here or browse</p>
        }
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
      <button type="button" className="upload-button col-lg-5" onClick={handleUploadButtonClick}>
        Upload
      </button>
    </div>
  );
};

export default Upload
