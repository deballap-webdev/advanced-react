import { useEffect, useRef } from "react";

function App() {
  const effectRan = useRef(false);
  useEffect(() => {
    console.log("effect ran");

    if (effectRan.current === false) {
      const fetchUsers = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const json = await response.json();
        console.log(json);
      };
      fetchUsers();
      return () => {
        console.log("unmounted");
        effectRan.current = true;
      };
    }
  }, []);
  return <p>Hello!</p>;
}

export default App;
