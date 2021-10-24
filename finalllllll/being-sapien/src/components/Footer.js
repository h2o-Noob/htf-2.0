import React from 'react'
import "./footer.css"

function Footer() {
    return (
    <>
        <div className="footer" style={{
            backgroundColor: "rgb(158, 158, 157)",
            marginTop: "10vh",
            display: 'flex'
        }}>
            <div className="left mx-2 my-2" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '33%'
            }}>
            <h5 className="my-2">Connect with author on</h5>
            <form method="get" action="https://github.com/h2o-Noob" target="blank" className="text-center ">
                <button className="btn btn-light mx-3 my-1" type="submit"><i class="fab fa-github"></i> Github</button>
            </form>
            <form method="get" action="https://www.linkedin.com/in/arindam-raina-97638a203/" target="blank" className="text-center ">
                <button className="btn btn-light mx-3 my-3" type="submit"><i class="fab fa-linkedin"></i> Linkedin</button>
            </form>
            <form method="get" action="https://www.facebook.com/profile.php?id=100008492199078" target="blank" className="text-center ">
                <button className="btn btn-light mx-3 my-2" type="submit"><i class="fab fa-facebook"></i> Facebook</button>
            </form>
            </div>
            <div className="center" style={{
                display: 'flex',
                justifyContent: 'center',
                width: '33%',
                flexDirection: 'column'
            }}>  
                <form method="get" action="/author" className="text-center ">
                    <button className="btn btn-light mx-5 my-4" type="submit">contact author</button>
                </form>
                <h4 className="text-center bg-dark text-light" style={{
                    borderRadius: '5px',
                    padding: "10px"
                }}>disclaimer<br/>This is a dummy website, All provided data regarding animals may or may not be true.</h4>
            </div>
            <div className="right" style={{
                width: '33%',
                marginLeft: '5vw'
            }}>
                <h3 className="text-center my-3">Technologies used</h3>
                <h5 className="text-left mx-5"><i class="fab fa-react"></i>React.js and <i class="fab fa-bootstrap"></i>Bootsrap for frontend</h5>
                <h5 className="text-left mx-5">Sawo Labs for authentication</h5>
                <h5 className="text-left mx-5"><i class="fas fa-fire"></i>Firebase for database management</h5>
                <h5 className="text-left mx-5"><i class="fab fa-font-awesome"></i>Fontawesome for icons</h5>
            </div>
        </div>
        <div className="blackBar" style={{backgroundColor: 'black', textAlign: 'center'}}>
            <span className="text-center text-light"><i class="fas fa-copyright mx-2"></i>Copyright Arindam Raina</span>
        </div>
    </>
    )
}

export default Footer
