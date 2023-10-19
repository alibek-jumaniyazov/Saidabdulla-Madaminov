import React from 'react'
import video1 from './images/video.mp4'
import img from './images/004.png'
import poster1 from './images/add.jpg'
import { Link } from 'react-router-dom'

export default function LandingHomeSotuvPage() {


  return (
    <div className='LandingHomePage'>
      {/* Mobila Version */}
      <div className="header">
        <div className="animated-text">
          <img src={img} alt="" width={"120px"} />
          <div className="line">Yo’qdan bor qiling !</div>
          <img src={img} alt="" width={"120px"} />
          <div className="line">Yo’qdan bor qiling !</div>
          <img src={img} alt="" width={"120px"} />

        </div>
      </div>
      <div className="main">
        <div className="mainHeaderInfo">
          <p>27 - OKTABR</p>
          <span>Dars Boshlanadi</span>
        </div>
        <div className="mainTextDiv">
           <h5 className="mainText">
           Biznesingiz sotuvida sezon kutishni bas qiling.
          51 kun ichida sezon yaratishni o’rganing !
        </h5>
        </div>
       
        <div className="mainBigInfo">
          <div className="imgButton">
            {/* <img src={img1} alt="" /> */}
            <div id="video-wrapper">
              <video controls width="100%"  height="220" poster={poster1} >
                <source src={video1} type='video/mp4' />
              </video>
            </div>
            <Link to={'register'}>  <button>Ro'yxatdan o'tish</button></Link>
          </div>
          <p>Jami 15 ta joy, 6 ta joy qoldi!</p>
        </div>
        <div className="mainInfos">
          <p>Ushbu imkoniyatlarga egalik qilish hisi sizni uxlatmayotgan bo’lsa, kursda o’qing yoki o’qiting !</p>
          <ol>
            <div className="MinInfosLi">
              <li>Reklamaga ko’p byujet sarflab, kelgan mijozlarni ushlab qola olmayotgan yurib turgan bizneslar uchun.</li>
            </div>
            <div className="MinInfosLi">
              <li>Xodimlari o’zidek ma’sulyat sezmay, o’zidek sota olmay, faqat kunlik oylikni bilib asabdan bosh ko'tarolmay qolganlar uchun.</li>
            </div>
            <div className="MinInfosLi">
              <li>Bir martalik sotib oluvchilarni yoki adashib murojat qilganlarni umrlik mijozga aylantirishni xoxlovchilar uchun.</li>
            </div>
            <div className="MinInfosLi">
              <li>Sotuv bo’limni yaratib uni biznes egasisiz boshqaruvni qo’liga oluvchi gladiorlarni izlayotganlar uchun.</li>
            </div>
            <div className="MinInfosLi">
              <li>Internet orqali, Qo’ng’iroqlar orqali, Uchrashuvlar orqali sotuvlarni tizimli bo’lishini istaganlar uchun.</li>
            </div>
            <div className="MinInfosLi">
              <li>Eshikdan kirgan har bir mijozni pulga aylantirib qimmat sota oladigan sotuv mashinasiga ega bo’lishim shart deganlar uchun.</li>
            </div>
            <div className="MinInfosLi">
              <li>Bozorda konkurentlari qo’rqadigan eng kuchli o’yinchiga aylanishni narx sindirishsalar ham shu narxni o’zida sota olishni istaganlar uchun.</li>
            </div>
          </ol>
        </div>
      </div>
      <div className="footer">
        <div className="footerOne">
          <p className="footerName">Ta'lim Rivoj</p>
          <span className="academyInfo">Ro’yxatdan o’tish 27.10.2023 yilgacha davom etadi.
            Manzil: Darital Savdo Majmuasi Hyundai Avto Salon yonida </span>
          <p className="phoneNumber">+998 90 077 00 67</p>
          <span className="infoData">Barcha huquqlar himoyalangan, 2023.</span>
        </div>
      </div>
    </div>
  )
}
