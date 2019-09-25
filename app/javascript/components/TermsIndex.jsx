import React from "react";
import { Link } from "react-router-dom";
import deleteTerm from "../actions/termActions"

class TermsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(index) {

    this.onDelete(this.state.terms[index].id)

  }

  onDelete(id) {
    deleteTerm(id)
      .then((data) => {
        let newTerms = this.state.terms.filter((term) => {
          return id !== term.id;
        });

        this.setState(state => {
          state.terms = newTerms;
          return state;
        });
      })
      .catch((err) => {
        console.error('err', err);
      });
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
            <button onClick={() => this.handleDelete(index)} className="btn phrase-submit">
              Delete
            </button>
            <i className='far fa-trash-alt' onClick={() => this.handleDelete(index)}></i>
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
