import React from "react";
import { Link } from "react-router-dom";


class NewTerm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: "",
      translation: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/terms/create";
    const { phrase, translation } = this.state;

    if (phrase.length == 0)
      return;

    const body = {
      phrase: phrase.replace(/\n/g, "<br> <br>")
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
      fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/term/${response.id}`))
      .catch(error => console.log(error.message));
    }

    render() {
      return (
        <div className="phrase-input">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="termPhrase">Health and Safety Term</label>
              <input
                type="text"
                name="phrase"
                id="termPhrase"
                className="form-control"
                required
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Translate
            </button>
          </form>
        </div>
      );
  }

}

export default NewTerm;
