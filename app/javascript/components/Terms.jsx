import React from "react";
import { Link } from "react-router-dom";
import TermsIndex from "./TermsIndex";

// class Terms extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       terms: [],
//       deleted: "nothing"
//     };
//   }

  // handleDelete(id) {

  //   const url = `api/v1/destroy/${id}`;
  //   const token = document.querySelector('meta[name="csrf-token"]').content;
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "X-CSRF-Token": token,
  //       "Content-Type": "application/json"
  //       }
  //     })
  //       .then(response => {
  //         if (response.ok) {
  //           response.json().then(function(parsedJson){
  //             return parsedJson
  //           })
  //           .then(parsedJSON => this.setState({ deleted: parsedJSON["message"] }))
  //         } else {
  //         throw new Error("Network response was not ok.");
  //         }
  //       })
  //       .then(() => this.props.history.push("/terms"))
  //       .catch(error => console.log(error.message));
  // }

  // componentDidMount() {
  //   const url = "/api/v1/terms/index";
  //   console.log(this.state.deleted)
  //     fetch(url)
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         throw new Error("Network response was not ok.");
  //       })
  //       .then(response => this.setState({ terms: response }))
  //       .catch(() => this.props.history.push("/"));
  // }

  // render() {
  //   const { terms } = this.state;
  //   const allTerms = terms.map((term, index) => (
  //     <div key={index}>
  //       <div className="translation-card">
  //         <div>
  //           <div className="card-text">
  //             <p className="blue">English: </p> <p className="pink">{term.phrase}</p>
  //           </div>
  //           <div className="card-text">
  //             <p className="blue">Pig-latin: </p> <p className="pink">{term.translation}</p>
  //           </div>
  //         </div>
  //         <div className="card-options">
  //           <i className='far fa-trash-alt' onClick={ () => this.handleDelete(term.id) }></i>
  //         </div>
  //       </div>

  //     </div>
  //   ));
  //   const noTerm = (
  //     <div>
  //     <p>
  //     No terms yet
  //     </p>
  //     </div>
  //   );

  export default () => (
    <div className="page-background">
      <div className="container">
        <div className="title-header">
          <h1 className="title">All Translations</h1>
          <div className="top-link">
            <Link to="/">
              New translation
            </Link>
            <i className="fas fa-arrow-circle-right"></i>
          </div>
        </div>
        <div className="translations-body">
        <TermsIndex />
        </div>
      </div>
    </div>
  );
// export default Terms;
