import {Link, useParams, useNavigate} from 'react-router-dom';
import award from "../Images/award.jpg"




const About = () => {
return(
<>


    <div> 
    <br></br>
  </div>
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src={award} class="d-block w-100" alt="..." 
      style={{maxWidth: "100%" ,height: "350px", marginLeft:"auto", marginRight:"auto"}}></img>
    </div>
    </div>
    </div>
    <div> 
    <br></br>
  </div>

<div className="card" style={{width:"100%"}}>
  <div className="card-header">
   <h2>Contact Us</h2> 
  </div>
  <div className="row g-2" >
    <div className="col">
  <div className="">
  <h5 className="card-title">Head Office</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">XYZ Pharma,</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary">Embassy Tower</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary">M.G. Road, Benguluru - 500060</h6>
    <br></br>
    <h6 className="card-subtitle mb-2 text-body-secondary">Phone: +91 9158583344</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary">Fax: +91 9123456780</h6>
    <br></br>
    <h6 className="card-subtitle mb-2 text-body-secondary">Contact@xyzpharma.com</h6>
    <p className="card-text"></p>
  </div>
  </div>
  <br></br>
  <div className="col">
  <div className="">
  <h5 className="card-title">Buisness Hours</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">We Operate 24X7</h6>
    <p className="card-text">From 8.00 AM to 8.00 PM</p>
  </div>
  </div>
  </div>
  </div>
</>
);
}
export default About;