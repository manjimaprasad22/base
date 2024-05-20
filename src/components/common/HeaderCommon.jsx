import React from 'react'
import notification from '../../assets/images/Vector.png'
import profile from '../../assets/images/Mask Group.png'
import '../../assets/css/style.css'
import logo from '../../assets/images/Subtract.png'
import dash from '../../assets/images/Category.svg'
import ticket from '../../assets/images/Ticket.svg'
import notificaton from '../../assets/images/Notification.svg'
import settings from '../../assets/images/Setting.svg'
import doc from '../../assets/images/Document.svg'
import calendar from '../../assets/images/Calendar.svg'
import chart from '../../assets/images/Chart.svg'
import '../../assets/css/style.css'
const HeaderCommon = ({title}) => {
  return (
    <div className='row col-lg-12 mt-5 header'>
      <div className="col-11 d-flex">
        <div className='menubar'>
        <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  <i class="fas fa-bars" style={{fontSize:"23px"}}></i>

</button>


        </div>
        <h3>{title}</h3></div>
      <div className="col-1 header-right" style={{display:"flex"}}>
        <img src={notification} alt="" style={{width:"25px", height:"25px"}} />
        <img src={profile} alt="" style={{width:"25px", height:"25px"}}/>
      </div>
    </div>
  )
}

export default HeaderCommon
