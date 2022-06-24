import { useState, useEffect } from "react";

const Account = (props) => {
    const [user, setUser] = useState(null);

    const refreshData = async () => {
        const URL = "https://project3-be.herokuapp.com/users/"
        const response = await fetch(URL);
        const data = await response.json();
        return(data)
    };
    const getUser = async () => {
        let data = await refreshData();
        setUser(data.find(p => p._id === props.match.params.UID))
      }
    
    useEffect(() => {getUser()}, []);

    const generateAcctDisplay = () => {
        return  <div className="account-info">
                    <h1>Account</h1>
                    <h3>Name: {props.user._id}</h3>
                    <h3>Email: {props.user.email}</h3>
                    <input type="button" value="your cart"/>
                </div>
    }


    // const getFirebaseToken = async () => {
    //     const token = await props.user.getIdToken();
    //     console.log(token)
    // }

    // const generateAcctDisplay = () => {
    //     return  <div className="account-info">
    //                 <h1>Account</h1>
    //                 <h3>Name: {props.user.displayName}</h3>
    //                 <h3>Email: {props.user.email}</h3>
    //                 <input type="button" value="your orders"/>
    //             </div>
    // } 

    return props.user ? generateAcctDisplay() : <p>please login to see account page</p>
        
};

export default Account;