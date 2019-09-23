import React from "react";
import { Link } from "react-router-dom";

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: []
    };
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
        .catch(() => this.props.history.push("/"));
  }

  render() {
    const { terms } = this.state;
    const allTerms = terms.map((term, index) => (
      <div>
      <p>
      All terms
      </p>
      </div>
    ));
    const noRecipe = (
      <div>
      <p>
      No terms yet
      </p>
      </div>
    );

    return (
      <Link to="/" className="btn btn-link">
        Home
      </Link>
      );
  }
}
export default Terms;
