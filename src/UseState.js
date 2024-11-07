import react from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = react.useState({
    value: "",
    error: false,
    loading: false,
  });

  react.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          setState({
            ...state,
            loading: false,
            error: true,
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
}

export { UseState };
