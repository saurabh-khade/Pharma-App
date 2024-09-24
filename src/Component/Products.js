import {Link, useParams, useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './Cart';



const Products = () => {
return(
<>
  <div> <br></br></div>
  <div className="input-group" >
  <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn-outline" data-mdb-ripple-init>search</button>
</div>

<h3 className="text-center text-success my -5"> Medicines</h3>

<div className="container">
  <div className="row">
    <div className="col-md-3">
      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Paracetamol</h5>
          <p className="card-text">
            Paracetamol is a tablet used for treating fever.
          </p>
          <a href="/#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Vigra</h5>
          <p className="card-text">
            A vigra tab used for erectile dysfunction.
          </p>
          <a href="/#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Unwanted72</h5>
          <p className="card-text">
            This tablet is used for unwanted pregancy.
          </p>
          <a href="/#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">HaldiCough</h5>
          <p className="card-text">
            Haldicough, A syrup to treat cough.
          </p>
          <a href="/#" className="btn btn-primary">
            Book Now
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</>
);
}
export default Products;