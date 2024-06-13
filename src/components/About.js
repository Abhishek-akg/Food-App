import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../Utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste react web series</h2>
        <UserClass name={"Akshay Saini (class)"} location={"Ghaziabad"} />
      </div>
    );
  }
}
export default About;
