import react from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [value, setValue] = react.useState("");
  const [error, setError] = react.useState(false);
  const [loading, setLoading] = react.useState(false);

  console.log(value);

  react.useEffect(() => {
    console.log("Empezando el efecto");
    if (!!loading) {
      setTimeout(() => {
        console.log("Empezando la validacion");

        if (value !== SECURITY_CODE) {
          setError(true);
        }
        setLoading(false);

        console.log("Terminando la validacion");
      }, 3000);
    }

    console.log("terminado el efecto");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor, escribe el codigo de seguridad </p>

      {error && !loading && <p>Error: el codigo es incorrecto</p>}
      {loading && <p>Cargando ...</p>}

      <input
        value={value}
        placeholder="Codigo de seguridad "
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setLoading(true);
          // setError(false); UNA FORMA DE HACER LA VALIDACION
        }}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };
