import react from "react";
import { Loading } from "./Loading.js";

const SECURITY_CODE = "paradigma";

class ClassState extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  // componentWillMount() {
  //   console.log("");
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  componentDidUpdate() {
    console.log("Actualizacion");

    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Empezando la validacion");

        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
        console.log("Terminando la validacion");
      }, 3000);
    }
  }

  render() {
    // const {error, loading, value} = this.state; FORMA DE DIFERENTE DE LLAMAR A LAS VARIABLES
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el codigo de seguridad </p>

        {this.state.error && !this.state.loading && (
          <p>Error: el codigo es incorrecto</p>
        )}
        {this.state.loading && <Loading />}

        <input
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          placeholder="Codigo de seguridad "
        />
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
