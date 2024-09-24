import xyzpharma from "../Images/xyzpharma.jpg"
const Home = () => {
  return(
  <>
  <div> 
    <br></br>
  </div>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={xyzpharma} class="d-block w-100" alt="..." 
      style={{maxWidth: "90%" ,height: "500px", marginLeft:"auto", marginRight:"auto"}}></img>
    </div>
  </div>
 
</div>

  
<div> 
    <br></br>
  </div>

{/* ---------------------- */}

<div className="row g-3">
  <div className="col" >
  <div className="card" style={{width: "18rem;", height: "200px"}} >
  <div className="card-body">
    <h5 className="card-title">Mission</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Our Mission</h6>
    <p className="card-text">to be the lead pharmaceutical company of the country as a manufacturer of high quality affordable medicines.</p>
    </div>
  </div>
  </div>
  <div className="col">
  <div className="card" style={{width: "18rem;", height: "200px"}}>
  <div className="card-body">
    <h5 className="card-title">Vision</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Our Vision</h6>
    <p className="card-text">To add value to our society and act as a driven force of our humanity with the help of highest level of innovation and technology.</p> 
  </div>
  </div>
</div>
<div className="col">
  <div className="card" style={{width: "18rem;", height: "200px"}}>
  <div className="card-body">
    <h5 className="card-title">Why Us</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">We are Leading</h6>
    <p className="card-text">We are one of the leading pharmaceutical companies of the country dedicated solely for the people in need.</p>
    <a href="/about" className="card-link">Know More</a>
  </div>
  </div>

  
</div>
</div>
  </>
  );
  }
  export default Home;