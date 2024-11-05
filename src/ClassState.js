import react from "react";

class ClassState extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el codigo de seguridad </p>

        {this.state.error && <p>Error: el codigo es incorrecto</p>}

        <input placeholder="Codigo de seguridad " />
        <button
          onClick={() =>
            this.setState((prevState) => ({ error: !prevState.error }))
          }
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
