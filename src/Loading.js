import React from "react";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }

  render() {
    return <p>Cargando...</p>;
  }
}

export { Loading };
