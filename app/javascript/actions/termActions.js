 const deleteTerm = (id) => {
    const url = `api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    return fetch(url, {
      method: "GET",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
  }

  export default deleteTerm;
