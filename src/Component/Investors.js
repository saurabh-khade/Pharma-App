import { Link, useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/investors.css";
import { useState, useEffect } from "react";
import axios from "axios";
import data from "./../db.json";
import { computeHeadingLevel } from "@testing-library/react";

const Investors = () => {
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [year, setYear] = useState(0);
  const [quarter, setQuarter] = useState(0);

  useEffect(() => {
     axios.get("http://localhost:4000/table").then(res => {
      setResult(res.data)
     }).catch(error => {
      console.log("Error 69");
     })
    }, []);
    console.log(result)

    const handleYear =(event) =>{
      setYear(event.target.value)
      var years = result.filter(a => a.year ==event.target.value)
      
      years.map(a => setData(a.data))
      
    }
    console.log(data)

    const handleQuarter = (event) => {
      setQuarter(event.target.value);
      console.log(quarter)
      
    }

    const handleSearch = () => {
      var quarters = data.filter(a => a.quarter == quarter)
      quarters.map(b => setRows(b.rows))
     console.log(rows) 

    }

  return (
    <div className="justify-content-center d-flex w-100 vh-100 bg-dark text-white">
      <div className="w-50 mt-5">
        <h3>See Investors</h3>
        <select className="form-control" name="year" onChange={handleYear}>
          <option>--Choose Year --</option>
          {result.map(years => 
          <option>{years.year}</option>
          )}
        </select>
        <br />


        <select className="form-control" name="quarter" onChange={handleQuarter}>
          <option>--Choose Quarter--</option>
          {data.map(quarters => 
            <option>{quarters.quarter}</option>
          )}
        </select>
        <br />


        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Investors;
