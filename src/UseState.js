import react from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = react.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  react.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true,
          });
        } else {
          setState({
            ...state,
            loading: false,
            error: false,
          });
          alert("Código correcto"); // Acción si esta correcto el codigo
        }
      }, 3000);
    }
  }, [state.loading]);
  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>

        <p>Por favor, escribe el código de seguridad</p>

        {state.error && !state.loading && <p>Error: el código es incorrecto</p>}
        {state.loading && <p>Cargando ...</p>}

        <input
          value={state.value}
          placeholder="Código de seguridad"
          onChange={(event) => {
            setState({
              ...state,
              value: event.target.value,
              error: false,
            });
          }}
        />
        <button
          onClick={() => {
            setState({
              ...state,
              loading: true,
              error: false,
            });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>¿Esta seguro?</p>
        <button
          onClick={() => {
            setState({ ...state, deleted: true });
          }}
        >
          Si, eliminar{" "}
        </button>
        <button
          onClick={() => {
            setState({ ...state, confirmed: false, value: "" });
          }}
        >
          No, volver atras
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con exito</p>
        <button
          onClick={() => {
            setState({ ...state, confirmed: false, deleted: false, value: "" });
          }}
        >
          Resetear
        </button>
      </>
    );
  }
}

export { UseState };
