import React from 'react'

export default function Started() {
  return (
    <div style={{marginTop:"7vw"}} className='container mb-5'>
        <h2  className='text-center sec-hand  mb-5'>Lets get Started</h2>
       

        <div class="row">
        <div class="col-lg-4 position-relative">
          <div class="content">
            <img src="./img/vector_2.png" alt="" />
            <img className='linedotted' src='./img/line.png'></img>
            <div class="thistitles">Join the whitelist</div>
            <p>Join today to start with your journey</p>
            {/* <a
              href=""
              style={{
                padding: "0.5em",
                filter: "drop-shadow(0px 13px 17px rgba(119, 87, 239, 0.2))",
                border: "2px solid black",
                borderRadius: "56px"
            }}
              >learn more</a
            > */}
            <button className='btn btnstarted'>
                Learn More
            </button>
          </div>
        </div>
     
        <div class="col-lg-4 position-relative">
          <div class="content text-center">
            <img  src="./img/Wallet.png" alt="" />
            <img className='linedotted2' src='./img/line.png'></img>
            <div class="thistitles">Join the whitelist</div>
            <p>Join today to start with your journey</p>
            <button className='btn btnstarted'>
                Learn More
            </button>
          </div>
        </div>
 
        <div class="col-lg-4">
            <div class="content">
              <img src="./img/upload.png" alt="" />
              <div class="thistitles">Join the whitelist</div>
              <p>Join today to start with your journey</p>
              <button className='btn btnstarted'>
                Learn More
            </button>
            </div>
          </div>
      </div>
    </div>
  )
}
