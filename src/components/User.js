import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("React OP");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("UseEffect return");
    };
  }, []);

  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <h2>Name: FC</h2>
      <h3>Location: Bhilai</h3>
      <h4>Contact: @jlr</h4>
    </div>
  );
};

export default User;
