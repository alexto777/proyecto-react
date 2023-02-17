import { useState } from "react";

export const Hooks = () => {

  // useState

  const [ contador, setContador] = useState(0);

  return (
    <div>
      <h4>{contador}</h4>
      <button onClick={ ()=> setContador(contador + 1)}>Aumentar</button>
      <button onClick={ ()=> setContador(contador -1)}>Disminuir</button>
      <button onClick={ ()=> setContador(contador == 0)}>Resetear</button>
    </div>
  )
}
