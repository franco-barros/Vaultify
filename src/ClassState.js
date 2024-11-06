import react from "react";
import { Loading } from "./Loading.js";

class ClassState extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
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

        this.setState({ loading: false });

        console.log("Terminando la validacion");
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el codigo de seguridad </p>

        {this.state.error && <p>Error: el codigo es incorrecto</p>}
        {this.state.loading && <Loading />}

        <input placeholder="Codigo de seguridad " />
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
