import React, { useEffect, useState } from "react";
import axios from "axios";

function LoginPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(" http://localhost:3000/api/users")
      .then(res => setData(res.data))
      .catch(err => setError(err));
  }, []);
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return <div>LoginPage</div>;
}

export default LoginPage;
