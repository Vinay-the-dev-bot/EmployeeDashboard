import Login from "./Login";

function HOME() {
  return <>{false ? <p>Home</p> : <Login />}</>;
}

export default HOME;
