import { useLocation, useNavigate } from 'react-router';

export function Error() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <h1>Something went wrong!</h1>
      <button
        type="button"
        onClick={() => {
          navigate(location.pathname, { replace: true });
        }}
      >
        Try again
      </button>
    </>
  );
}
