import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component{

    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    render(){
        console.log(" Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is React Web</h2>
                <div>
                <UserContext.Consumer>
                    {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                </div>
                <UserClass name={"Mohammed Kaif (Class)"} location={"Mumbai Class"}/>
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is React Web</h2>

//             <UserClass name={"Mohammed Kaif (Class)"} location={"Mumbai Class"}/>
//         </div>
//     )
// }
export default About;