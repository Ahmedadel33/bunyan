import { useFormStatus } from "../../../context/FormStatusContext"; 
import { useLocation } from "react-router-dom"; 

export default function FormDashboard(){
  const { setPageTyping } = useFormStatus();
  const location = useLocation();

  let currentPage = "users";
  if (location.pathname.includes("Projects")) {
    currentPage = "projects";
  } else if (location.pathname.includes("Developer")) {
    currentPage = "developer";
  }

  const handleInputChange = (e) => {
    if (e.target.value.trim() !== "") {
      setPageTyping(currentPage, true); 
    } else {
      setPageTyping(currentPage, false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageTyping(currentPage, false); 
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};