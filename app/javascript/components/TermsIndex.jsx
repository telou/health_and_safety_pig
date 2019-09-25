import React from "react";
import { Link } from "react-router-dom";

class TermsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: [],
      deleted: "nothing"
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {

    const url = `api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "GET",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ deleted: `deleted ${id}` },
          ))
        // .then(() => this.props.history.push("/terms"))
        .catch(error => console.log(error.message));
  }

  componentDidMount() {
    const url = "/api/v1/terms/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ terms: response }))
        // .catch(() => this.props.history.push("/"));
  }

   render() {
    const { terms } = this.state;
    const allTerms = terms.map((term, index) => (
      <div key={index}>
        <div className="translation-card">
          <div>
            <div className="card-text">
              <p className="blue">English: </p> <p className="pink">{term.phrase}</p>
            </div>
            <div className="card-text">
              <p className="blue">Pig-latin: </p> <p className="pink">{term.translation}</p>
            </div>
          </div>
          <div className="card-options">
            <i className='far fa-trash-alt' onClick={ () => this.handleDelete(term.id) }></i>
          </div>
        </div>

      </div>
    ));
    const noTerm = (

      <p>
      No terms yet
      </p>

    );
    return (
      <div>
      {terms.length > 0 ? allTerms : noTerm}
      </div>
    );
  }
}

export default TermsIndex;
