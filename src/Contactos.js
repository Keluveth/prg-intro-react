import React from 'react'

export default function Contactos() {
  return (
    <form>
            <h1>Contactos</h1>
            <label for ="email">Correo electronico</label>
            <br />
            <input id="email" type="email" required />
            <br /><br />

            <label for ="mensaje">Mensaje</label>
            <br />
            <texarea id="mensaje"  />
            <br /><br />
            <button type='button'>Enviar</button>

    </form>
  )

}
