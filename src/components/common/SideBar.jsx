import React from 'react'
import logo from '../../assets/images/Subtract.png'
import dash from '../../assets/images/Category.svg'
import ticket from '../../assets/images/Ticket.svg'
import notification from '../../assets/images/Notification.svg'
import settings from '../../assets/images/Setting.svg'
import doc from '../../assets/images/Document.svg'
import calendar from '../../assets/images/Calendar.svg'
import chart from '../../assets/images/Chart.svg'
import '../../assets/css/style.css'
const SideBar = () => {
  return (
    <>
    <div className='sidebar'>
    
      <div className='sidebar-logo'><img src={logo} alt="" style={{marginRight:"10px" ,height:"50px", width:"50px"}}/> Base</div>
      <div className='row col-lg-12'>
        <ul className='list-none sidebar-items'>
            <li className='p-2 '><img src={dash} alt="" className='m-2 icon-sidebar'/>Dashboard</li>
            <li className='p-2 active'><img src={chart} alt="" className='m-2 icon-sidebar'/>Upload</li>
            <li className='p-2 '><img src={ticket} alt="" className='m-2 icon-sidebar'/>Invoice</li>
            <li className='p-2 '><img src={doc} alt="" className='m-2 icon-sidebar'/>Schedule</li>
            <li className='p-2 '><img src={calendar} alt="" className='m-2 icon-sidebar'/>Calendar</li>
            <li className='p-2 '><img src={notification} alt="" className='m-2 icon-sidebar'/>Notification</li>
            <li className='p-2 '><img src={settings} alt="" className='m-2 icon-sidebar'/>Settings</li>
        </ul>
      </div>
    </div>
    <div class="offcanvas offcanvas-start col-12" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel" style={{width:"73%"}}>
  <div class="offcanvas-header">

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div className='row col-lg-12'>
        <ul className='list-none sidebar-items'>
            <li className='p-2 '><img src={dash} alt="" className='m-2 icon-sidebar'/>Dashboard</li>
            <li className='p-2 '><img src={chart} alt="" className='m-2 icon-sidebar'/>Upload</li>
            <li className='p-2 '><img src={ticket} alt="" className='m-2 icon-sidebar'/>Invoice</li>
            <li className='p-2 '><img src={doc} alt="" className='m-2 icon-sidebar'/>Schedule</li>
            <li className='p-2 '><img src={calendar} alt="" className='m-2 icon-sidebar'/>Calendar</li>
            <li className='p-2 '><img src={notification} alt="" className='m-2 icon-sidebar'/>Notification</li>
            <li className='p-2 '><img src={settings} alt="" className='m-2 icon-sidebar'/>Settings</li>
        </ul>
      </div>
  </div>
</div>
    </>
  )
}

export default SideBar
