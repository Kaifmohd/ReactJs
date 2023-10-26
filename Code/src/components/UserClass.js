import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: "Dummy Name",
                location: "Default",
            }
        };
        console.log(this.props.name + " Constructor");
    }

    async componentDidMount(){
       console.log(this.props.name +" Child Component Did Mount");
        //Api Calls
        const data = await fetch("https://api.github.com/users/Kaifmohd");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }
    componentDidUpdate(){
        console.log("Component DiD Update");
    }

    render(){
        //const {name,location} = this.props;

        console.log(this.props.name+" Render");
        const  {login,type} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {login}</h2>
                <h3>Location: {type}</h3>
                <h4>Contact: @kaifmohd75</h4>
            </div>
        );
    }
}


/******
 * Constructor(dummy)
 * Render(dummy)
 * <HTML Dummy data loaded for few milisec>
 * Component DiD mount 
 *  APi Call
*   this.setState is being set and updated
*       setState is called. the process of reconciliation starts
*       --------Update Cycle starts------
*        render(API data)  
*       <HTML new APi Data)
*       componentDidUpdate is called.
*
*/


export default UserClass;