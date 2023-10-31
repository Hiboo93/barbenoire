import React, { useState } from 'react'

export default function LoginPage() {
    //state
    const [userFirstName, setUserFirstName] = useState("")

    //comportements
    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Bonjour")
        setUserFirstName("")
    }

    const handleChange = (event) => {
      setUserFirstName(event.target.value)
    }


    //affichage
  return (
    <div>
    <h1>Bienvenue chez BARBE NOIRE !</h1>
      <form action='submit'onSubmit={handleSubmit} >
          <h2>Connectez-vous:</h2>
          <input value={userFirstName} onChange={handleChange} type="text" placeholder='Entre votre prénom...' required />
          <button>Accédez à votre espace</button>
      </form>
        <div>
          <img src="logo" alt="logo" />
        </div>
    </div>
  )
}
