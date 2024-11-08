import react from "react";

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
  const [state, dispatch] = react.useReducer(reducer, initialState);

  react.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          dispatch({
            type: actionTypes.confirm,
          });
        } else {
          dispatch({
            type: actionTypes.error,
          });
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
            dispatch({
              type: actionTypes.write,
              payload: event.target.value,
            });
            // onWrite(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({
              type: actionTypes.check,
            });
            // onCheck();
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
            dispatch({
              type: actionTypes.deleted,
            });
            // onDelete();
          }}
        >
          Si, eliminar{" "}
        </button>
        <button
          onClick={() => {
            dispatch({
              type: actionTypes.reset,
            });
            // onReset();
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
            dispatch({
              type: actionTypes.reset,
            });
            // onReset();
          }}
        >
          Resetear
        </button>
      </>
    );
  }
}

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const actionTypes = {
  confirm: "CONFIRM",
  error: "ERROR",
  check: "CHECK",
  deleted: "DELETED",
  reset: "RESET",
  write: "WRITE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  [actionTypes.error]: {
    ...state,
    loading: false,
    error: true,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
    error: false,
  },
  [actionTypes.deleted]: { ...state, deleted: true },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    value: "",
    deleted: false,
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };

// const reducer = (state, action) => {
// PRIMERA FORMA DE HACERLO
// }
// const reducer = (state, action) => {
//   if (action.type === "ERROR")
//     return {
//       ...state,
//       error: true,
//       loading: false,
//     };
//   else if (action.type === "CHECK") {
//     return {
//       ...state,
//       loading: true,
//     };
//   } else {
//     return {
//       ...initialState,
//     };
//   }
// };

// MAS UTILIZADA 2
// const reducerSwitch = (state, action) => {
//   switch (action.type) {
//     case "ERROR":
//       return {
//         ...state,
//         error: true,
//         loading: false,
//       };

//     case "CHECK":
//       return {
//         ...state,
//         loading: true,
//       };

//     default:
//       return state;
//   }
// };

// TERCERA FORMA: BASTANTE MAS UTIL
