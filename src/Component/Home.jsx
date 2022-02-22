import React from 'react'
import Header from './Header'
import "../Css/globle.css"
import platform from '../Data/platform'
import ReactPlayer from 'react-player'
import Nftcollection from "../Data/Nftcollection"
import Tokenomics from './Tokenomics'
import Team from './Team'
import Started from './Started'
import Footer from './Footer'
import Nftcollectionus from './Nftcollectionus'
import Faq from './Faq'
import Roadmap from './Roadmap'


export default function Home() {
  return (
    <div className='home'>
        <Header/>
        <section className='container pt-5'>
        <div className="row">
        <div className="col-md-6">
          <h3 className='headingText'>Unveiling Largest<br></br> Women Metaverse<br></br> Platform</h3>
          <p className='head-sub'>India’s first-ever all women professional <br></br> networking application.</p>

<button className='btn-ex'> Explore <i class="fa-solid fa-arrow-right-long ms-3"></i></button>
<p className='numberauction pt-5'><span className='num ps-3'>36K+</span> Auctions <span className='num ps-3'>36K+</span> Auctions <span className='num ps-3'>36K+</span> Auctions</p>
        </div>
        <div className="col-md-6 overflow-hidden">
        <ReactPlayer playing={true} loop={true} controls={false} muted={true} url='./video/globe1.mp4' />

        </div>
      </div>

        </section>

        <section className='container mt-4'>
          <div className="card c-dec">
            <div className="card-body">
              <p className='text-center j-token'>Join the whitelist now & get 100 SHRL Tokens!</p>

            </div>
          </div>

        </section>
      

      <section className='container'>
        <h2 className='text-center sec-hand mt-5'>First Ever <span className='b-clr'> All-Women Based </span><br></br> web 3.0 Platform</h2>


        <div class="row row-cols-1 row-cols-md-4 justify-content-center mt-3  g-4">
          {
          platform.map((item)=>{
            return(

              <div class="col text-center">
              <div class="card mx-auto carditemStyling">
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                  <h5 class="card-title text-center cardheading">{item.title}</h5>
                  <p class="card-text sub-h">{item.content}</p>
                </div>
              </div>
             </div>
            )
            
          })

          }
 
  
  
 
</div>

      </section>

      

      <section className='container mt-5'>
        <div className="row">
          <div className="col-md-6">
          <h2 className='sec-hand mt-5'>About <span className='b-clr'> <br></br>SheReal</span></h2>
      <p className='abouText'>SheReal is India’s first-ever professional networking community for women enthusiasts from diversified backgrounds who are looking forward to building long-term relations and channelise their passion and interest. Unlike other platforms, SheReal is a women-centric platform focused towards making women leaders through holistic growth.</p>

          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 text-center">
              
                <img  className='aboutimg' src='./img/image1.png'></img>
              </div>
              <div className="col-md-6 ">
              
              <img  className='aboutimg2' src='./img/image1.png'></img>
              <img  className='aboutimg3' src='./img/image1.png'></img>
            </div>
           
            </div>

          </div>
        </div>
    

      </section>

      <section className='position-relative nftcollection'>
      
        {/* <img className='imgrectengle'  src='./img/rec.png'></img> */}
        <p className='sectiontextnft'>Top NFT Collection</p>
<div className='container'>


        <div class="row row-cols-1 p-5 row-cols-md-4 g-4">
           {
           Nftcollection.map((item, index)=>{
            if (index < 4) {
                  
              return (
                <div class="col">
    <div class="card cardSedignNft">
      <img src={item.img} class="card-img-top mx-auto dev-img" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center deviltext">{item.title}</h5>
        <hr></hr>
        <div className='text-center'>
        <p> <img src='./img/Avatar.png'></img><span className='ms-2 art'>EmilArt</span><i class="fa-solid fa-circle-check ms-1 check"></i><span className='ms-1 eth'>1.00 ETH</span> </p>
          </div>
       
      </div>
    </div>
  </div>
              )
            }

          })}
          





</div>
</div>
    
      </section>

      <Nftcollectionus/>

      <section>
      <p className=' textconnentus text-center'>All NFT Collection</p>
<div className='container'>
      <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
        {Nftcollection.map((item)=>{
          return(

            <div class="col">
            <div class="card cardstylingcollection">
              <img src={item.img} class="card-img-top cardstylingimg mx-auto" alt="..."/>
              <div class="card-body">
                <h5 class="card-title text-center">{item.title}</h5>
               
              </div>
              {/* <div className='text-center'>
              <p><img src='./img/avatar.png'></img> <span>EmilArt</span> <i class="fa-solid fa-circle-check"></i> <span>1.00 ETH</span> <i class="fa-thin fa-heart"></i></p>
            </div> */}
              <hr></hr>
        <div className='text-center'>
        <p> <img src='./img/Avatar.png'></img><span className='ms-2 art'>EmilArt</span><i class="fa-solid fa-circle-check ms-1 check"></i><span className='ms-1 eth'>1.00 ETH</span> </p>
          </div>
          </div>
          </div>
          )
        })}



  
     
  </div>
  <div className="row">
  <div className="col-md-8">
    <img className='img-fluid mt-5' src='./img/Vector_4.png'></img>
  </div>
<div className="col-md-4">
<button className='btn btnexplore mt-4'>Explore our collection <i class="fa-solid fa-arrow-right-long"></i></button>
</div>
</div>


        
        </div>

      </section>

      <Started/>

      <section style={{marginTop:"7vw"}} className='container'>
      <div class="row mt-5" >
          <div class="col-lg-6 mt-3">
            <h3 class="socialmedia">Social Media</h3>
            <p className='socialmediacontent'>
              We aim to build an all women professional community to connect
              aspiring women with established females. We strive to connect
              women and empower them to share, care and learn from each other’s
              experience and skill sets. Our platform invites all businesswomen,
              mentors, entrepreneurs, aspiring leaders and any & every woman who
              aims to create her own identity and financial worth.
            </p>
            <img src="./img/Vector_50.png" alt="Vector"/>
          </div>
          <div class="col-lg-6 text-center">
            <img src="./img/NFT_frame_01.png" className='mx-auto social-m-img' alt="" />
          </div>
        </div>
      </section>
      <section className='container'>
      <div class="row mt-3" >
      <div class="col-lg-6 text-center">
            <img src="./img/NFT_Investment_1.png" className='mx-auto social-m-img' alt="" />
          </div>
          <div class="col-lg-6 mt-5">
            <h3 class="socialmedia">NFTs</h3>
            <p className='socialmediacontent'>
            SheReal is set to become the first ever only women platform to hold exclusive women NFTs. The SheReal NFTs are here to raise the financial worth of women and show how well she can portray any role in the male dominant world. SheReal will also create an ecosystem where NFT buyers can grow and nurture their NFTs into the metaverse. There are huge bonuses and powerful utilities attached to every single NFT on SheReal.

            </p>
            <img src="./img/Vector_50.png " alt="Vector"/>
          </div>
        
        </div>
      </section>
      <section className='container'>
      <div class="row mt-3" >
          <div class="col-lg-6 mt-5">
            <h3 class="socialmedia">Metaverse </h3>
            <p className='socialmediacontent'>
            The SheReal metaverse is an online 3D universe that allows users to play games & socialize in virtual reality.  Our aim is to create a space where we can host events, workshops, training, tournaments and also create women centric associations so that everyone can interact. 
            </p>
            <img src="./img/Vector_50.png" alt="Vector"/>
          </div>
          <div class="col-lg-6 text-center">
            <img src="./img/Metaverse_Boy_2a.png" className='mx-auto social-m-img' alt="" />
          </div>
        </div>
      </section>
      <section className='container'>
      <div class="row mt-5" 
      >
        <div class="col-lg-6 text-center">
            <img src="./img/image_3.png" className='mx-auto social-m-img' alt="" />
          </div>
          <div class="col-lg-6 mt-3">
            <h3 class="socialmedia">Tokens</h3>
            <p className='socialmediacontent'>
            Tokens are a type of currency that represents an asset or specific use and reside on their own blockchain. SheReal Tokens will be called SHRL Tokens can be used for investment purposes, to store value, or to make purchases.

            </p>
            <img src="./img/Vector_50.png " alt="Vector"/>
          </div>
          
        </div>
      </section>

      <Tokenomics/>
      <Roadmap/>
      <Team/>

      <section style={{marginTop:"7vw"}} className='mb-5'>
      <h2 className='text-center sec-hand mt-5'>Popular Artist</h2>
      <div className='container mt-5'>

   
      <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card carddesignartist">
      <img src="./img/Rectangle_763.png" class="card-img-top" alt="..."/>
      <img src="./img/Rectangle_764.png" className='card-img-top cardpositonartist'></img>
      <img src="./img/Ellipse_img.png" className='card-img-top cardavatar'></img>
      <img src="./img/Vector_49.png" className='card-img-top cardsectionfooter'></img>
      <div className='textcontent'>
        <p className='temon'>Temon Holic</p>
        <p className='code'>0cvd6-53</p>
      </div>
 
    </div>
  </div>
  <div class="col">
    <div class="card carddesignartist">
      <img src="./img/Rectangle_763.png" class="card-img-top" alt="..."/>
      <img src="./img/Rectangle_764.png" className='card-img-top cardpositonartist'></img>
      <img src="./img/Ellipse_img.png" className='card-img-top cardavatar'></img>
      <img src="./img/Vector_49.png" className='card-img-top cardsectionfooter'></img>
      <div className='textcontent'>
        <p className='temon'>Temon Holic</p>
        <p className='code'>0cvd6-53</p>
      </div>
 
    </div>
  </div>
  <div class="col">
    <div class="card carddesignartist">
      <img src="./img/Rectangle_763.png" class="card-img-top" alt="..."/>
      <img src="./img/Rectangle_764.png" className='card-img-top cardpositonartist'></img>
      <img src="./img/Ellipse_img.png" className='card-img-top cardavatar'></img>
      <img src="./img/Vector_49.png" className='card-img-top cardsectionfooter'></img>
      <div className='textcontent'>
        <p className='temon'>Temon Holic</p>
        <p className='code'>0cvd6-53</p>
      </div>
 
    </div>
  </div>
  <div class="col">
    <div class="card carddesignartist">
      <img src="./img/Rectangle_763.png" class="card-img-top" alt="..."/>
      <img src="./img/Rectangle_764.png" className='card-img-top cardpositonartist'></img>
      <img src="./img/Ellipse_img.png" className='card-img-top cardavatar'></img>
      <img src="./img/Vector_49.png" className='card-img-top cardsectionfooter'></img>
      <div className='textcontent'>
        <p className='temon'>Temon Holic</p>
        <p className='code'>0cvd6-53</p>
      </div>
 
    </div>
  </div>
  
 
 
  
</div>
</div>
      </section>
      {/* <Faq/> */}

      <section>
      {/* <p className='sectiontextnft'>Roadmap</p> */}
      {/* <img src='./img/Frame_2098.png'></img> */}

      </section>

      <section className='connect'>
        <div className="container p-5 ">
        <div className="row">
          <div className="col-md-5">
            <p className=' textconnentus'>Connect with us <br></br>
on Twitter</p>

<button className='btn btnfollow mx-auto  mt-4'>Follow</button>


          </div>
          <div className="col-md-7 position-relative d-flex">
            <img style={{width:"24vw"}} className='' src='./img/image_14.png'></img>
            <img style={{width:"24vw"}} className='mt-5' src='./img/image_15.png'></img>
          </div>
        </div>
        </div>
      </section>
      
      <section>
      <p className=' textconnentus text-center'>Join the community</p>
<div className='text-center'>


      <img className='mx-auto' src='./img/Vector_56.png'></img>
      </div>
<div className='container mt-5 text-center'>
      {/* <div className="row justify-content-center">
        <div className="col">
          <img className='icons' src='./img/tweet.png'></img>
        </div>
        <div className="col">
          <img className='icons' src='./img/youtube.png'></img>
        </div>
        <div className="col">
          <img className='icons' src='./img/tele.png'></img>
        </div>
        <div className="col">
          <img className='icons' src='./img/insta.png'></img>
        </div>
        <div className="col">
          <img className='icons' src='./img/fb.png'></img>
        </div>
        <div className="col">
          <img className='icons' src='./img/discord.png'></img>
        </div>
      </div> */}
      <div>
      <img className='icons' src='./img/tweet.png'></img>
      <img className='icons ms-5' src='./img/youtube.png'></img>
      <img className='icons ms-5' src='./img/tele.png'></img>
      <img className='icons ms-5' src='./img/insta.png'></img>
      <img className='icons ms-5' src='./img/fb.png'></img>
      <img className='icons ms-5' src='./img/discord.png'></img>
      </div>
      </div>

      </section>

    

   
      <Footer/>
    </div>
  )
}
