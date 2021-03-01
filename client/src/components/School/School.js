function School() {
  return (
      <div className="school-card card">
          <img className="card-img-top" src="..." alt="Card image" />
          <div className="card-body">
            <h5 class="card-title">School Name</h5>
            <p class="card-text">School Description</p>
            <a href="/update-school" className="btn btn-dark">Update School</a>
          </div>
      </div>
  );
}

export default School;