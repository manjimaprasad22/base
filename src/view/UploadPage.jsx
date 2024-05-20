import React from 'react'
import Upload from '../components/uploads/Upload'
import SideBar from '../components/common/SideBar'
import HeaderCommon from '../components/common/HeaderCommon'
import UploadTable from '../components/uploads/UploadTable'

export const UploadPage = () => {
  return (
    <div className='row col-lg-12 login-full'>
        <div className="col-lg-2">

        <SideBar/>
        </div>
        <div className="col-lg-10">
        <HeaderCommon title={"Upload CSV"}/>
         <Upload/>
         <UploadTable/>
        </div>
        </div>
  )
}
