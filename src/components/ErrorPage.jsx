import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()
  return (
    <div>
        <h1 >Portafolio</h1>
        <p>Ocurrio un error</p>
        <p>{error.statusText || error.message }</p>
    </div>
  )
}

export default ErrorPage;