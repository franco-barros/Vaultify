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

  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      loading: false,
      error: true,
    });
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
      error: false,
    });
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: true,
      error: false,
    });
  };

  const onDelete = () => {
    setState({ ...state, deleted: true });
  };

  const onReset = () => {
    setState({ ...state, confirmed: false, value: "", deleted: false });
  };

  react.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
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
            onWrite(event.target.value);
          }}
        />
        <button
          onClick={() => {
            onCheck();
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
            onDelete();
          }}
        >
          Si, eliminar{" "}
        </button>
        <button
          onClick={() => {
            onReset();
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
            onReset();
          }}
        >
          Resetear
        </button>
      </>
    );
  }
}

export { UseState };
