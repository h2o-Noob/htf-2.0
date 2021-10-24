import React from 'react'
import './content.css'

function Content1() {
    return (
        <>
            <div className="Content1">
                <div className="Content1__right">
                    <em><h2>&nbsp;"With great power<br/>&nbsp; &nbsp; &nbsp; &nbsp;Comes great responsibility"</h2></em>
                    <div className='Content1__right__txt'>
                        One of the most brilliant quotes ever said, It highly applies to us sapiens.
                        We have the greatest power in the whole animal kingdom and also a great responsibility
                        to conserve it and protect it because we owe it to other fellow animilia sibbilings<br/>
                        <h4>Let's all take this responsibility and be a sapien before a human.</h4>
                    </div>
                </div>
                <div className="Content1__left">
                    <em><h1>Our moto</h1></em>
                </div>
            </div>
            <div className="Content2">
                <div className="Content2__right">
                    <em><h1>About us</h1></em>
                </div>
                <div className="Content2__left">
                    <ul className="Content2__left__list">
                        <li><h3>Who are we?</h3><span>Being sapien is a non profit organization 
                        for support and betterment of stray animals which are overlooked 
                        by huge organizations such as WWF and PETA</span></li>
                        <li><h3>Why we exist?</h3><span>Sole purpose of our organization is to make sure
                        stray animals are getting all the potential help they can get by us sapiens. Massive
                        organizations tend to aid only the endangered speices and stray animals are often neglected
                        so we as an organization and our fellow sapiens are just playing our part</span></li>
                        <li><h3>How can you help?</h3><span>All you have to do is upload location of a stray animal
                        you tend to see often, Or you can search for any reported animal nearby your locality
                        and provide aid to become one of our fellow sapien.</span></li>
                    </ul>
                </div>
            </div>
            <div className="responsive">     
                <div className="card my-4" style={{width: "18rem;", boxShadow:"0px 2px 7px 2px", backgroundColor: 'rgba(3, 138, 3)'}}>
                    <div className="card-body container">
                        <h5 className="card-title" style={{color: 'white', fontStyle: 'italic', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>"With great power<br/>&nbsp; &nbsp; &nbsp; &nbsp;Comes great responsibility"</h5>
                        <h6 className="card-subtitle mb-2" style={{color: 'black', fontWeight: '600'}}>Our moto</h6>
                        <p className="card-text" style={{color: 'white', fontWeight: '400'}}> One of the most brilliant quotes ever said, It highly applies to us sapiens.
                            We have the greatest power in the whole animal kingdom and also a great responsibility
                            to conserve it and protect it because we owe it to other fellow animilia sibbilings<br/>
                            <h4 className="my-3">Let's all take this responsibility and be a sapien before a human.</h4></p>
                    </div>
                </div>
                
                <h2><span className="badge container" style={{backgroundColor: 'rgba(3, 138, 3)', color: 'white', fontWeight: '400', margin: 'auto'}}>About us</span></h2>
                
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{backgroundColor: 'white', color: 'rgb(4,204, 4)'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Who are we?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor: 'rgba(3, 138, 3)', color: 'white'}}>
                                Being sapien is a non profit organization 
                                for support and betterment of stray animals which are overlooked 
                                by huge organizations such as WWF and PETA                        
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button  style={{backgroundColor: 'white', color: 'rgb(4,204, 4)'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why we exist?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor: 'rgba(3, 138, 3)', color: 'white'}}>
                                Sole purpose of our organization is to make sure
                                stray animals are getting all the potential help they can get by us sapiens. Massive
                                organizations tend to aid only the endangered speices and stray animals are often neglected
                                so we as an organization and our fellow sapiens are just playing our part
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button  style={{backgroundColor: 'white', color: 'rgb(4,204, 4)'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How can you help?&nbsp;&nbsp;
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor: 'rgba(3, 138, 3)', color: 'white'}}>
                                All you have to do is upload location of a stray animal
                                you tend to see often, Or you can search for any reported animal nearby your locality
                                and provide aid to become one of our fellow sapien.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}

export default Content1
