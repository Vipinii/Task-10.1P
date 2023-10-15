import React from 'react'
import './Footer.css'


function Footer() {

    return(
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row"> 
                        <div class="col-md-3 item">
                            <h2>For Dev</h2>
                            <ul>
                <li><a style={{ fontWeight: "bold", fontSize: "19px" }} >Home</a></li>
                <li><a style={{ fontWeight: "bold", fontSize: "19px" }} >Questions</a></li>
                <li><a style={{ fontWeight: "bold", fontSize: "19px" }}>Articles</a></li>
                <li><a style={{ fontWeight: "bold", fontSize: "19px" }} >Tutorials</a></li>
              </ul>
                        </div>
                        <div class="col-md-3 item">
                            <h2>For Clients</h2>
                            <ul>
                <li><a style={{ fontWeight: "bold", fontSize: "19px" }}>FAQs</a></li>
                <li><a style={{ fontWeight: "bold", fontSize: "19px" }} >Help</a></li>
                <li><a style={{ fontWeight: "bold", fontSize: "19px" }} >Contact Us</a></li>
              </ul>
                        </div>
                        <div class="col-md-4 item">
                            <h2>Stay Connected</h2>
                            <ul>
                            <div class="col item social">
                                <a ><i class="f"><img src = "https://th.bing.com/th?id=ODLS.811c55ff-001a-4532-baae-450eeda18ae8&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" alt="logo" width={25} height={25} /></i></a>
                                <a ><i class="f"><img src = "https://th.bing.com/th?id=ODLS.7d3063c3-cd17-4792-8d4f-4e98c892a389&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" alt="logo" width={25} height={25} /></i></a>
                                <a ><i class="f"><img src = "https://th.bing.com/th?id=ODLS.622ceebf-d807-45da-bb82-707dd9e5c357&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" alt="logo" width={25} height={25} /></i></a>
                            </div>
                            </ul>
                        </div>
                        </div>
                </div>
                        <div className='dev12'>
                            <h3>DEV@Deakin 2022</h3>
                            <ul>
                <li><a style={{ fontWeight: "bold", fontSize: "19px" }} >Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Code of Conduct</a></li>
              
              </ul>                           
                        </div>
                        
                        
                 
            </footer>
        </div>

    )
}

export default Footer