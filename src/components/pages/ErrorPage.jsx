import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
      <div>PAGE ERROR</div>
      <Link to={"/"} ><button>Retourner vers la page d'acceuil</button></Link>
    </div>
  )
}
