import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Home() {
  const { userFirstName } = useParams()

  return (
    <div>
      <div>Bonjour {userFirstName}</div>
      <Link to={"/"} ><button>Déconnexion</button></Link>
    </div>
  )
}
