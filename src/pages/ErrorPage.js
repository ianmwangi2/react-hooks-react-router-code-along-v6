import React from 'react'
import NavBar from '../components/NavBar';
import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
  console.error(error);
  return (
    <div>
<header>
        <NavBar />
      </header>
      <main>
        <h1>Something went wrong!</h1>
      </main>

    </div>
  )
}

export default ErrorPage