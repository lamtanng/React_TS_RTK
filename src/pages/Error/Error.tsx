import { UNSAFE_ErrorResponseImpl, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError() as UNSAFE_ErrorResponseImpl;
  console.log(error);
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.data}</i>
      </p>
    </div>
  );
}

export default Error;
