import React from 'react'

export default function Tokenomics() {
  return (
    <div className='container'>
        <h2 style={{color:"#FF3392"}} className='text-center sec-hand mt-5 mb-5'>Tokenomics</h2>
        <div className="row">
            <div className="col-md-6">
                <img className='social-m-img' src='./img/pie.png'></img>
            </div>
            <div className="col-md-6">
                <div className="card cardstylingstats">
                    <div className="card-body">
                        <h1 className='ms-4 stats'> <img src="./img/moutainimg.png"></img> Stats</h1>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                <img className='img-fluid' src='./img/Rectangle_small.png'></img>
                <img className='img-fluid ms-5 ' src='./img/Rectangle_small.png'></img>
                </div>
                <div className='mt-3'>
                <img className='img-fluid' src='./img/Rectangle_small.png'></img>
                <img className='img-fluid ms-5' src='./img/Rectangle_small.png'></img>
                </div>
              
            </div>
           
        </div>
    </div>
  )
}
