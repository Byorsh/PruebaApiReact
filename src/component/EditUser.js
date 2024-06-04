import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function EditUser(){
    //const navigate = useNavigate();
 
    const [setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() =>{
        getUser();
    }, []);
 
    function getUser(){
        axios.get(`http://localhost/php_api/${id}`).then(function(response){
            console.log(response.data);
            //setUsers(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return(
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <h1>Create user</h1>
            <form>
                <div className="mb-3">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                  <label>Mobile</label>
                  <input type="text" className="form-control" name="mobile" />
                </div>    
                <button type="submit" name="add" className="btn btn-primary">Save</button>
            </form>
            </div>
            <div className="col-2"></div>
        </div>
    )
}