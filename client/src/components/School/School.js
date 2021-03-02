import { Link } from "react-router-dom";

function School(props) {
  return (
      <div className="school-card card">
          <img className="card-img-top" src="..." alt="Card img"/>
          <div className="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.description}</p>
            <Link to={"/update/" + props.index} className="btn btn-dark">Update School</Link>
          </div>
      </div>
  );
}

export default School;