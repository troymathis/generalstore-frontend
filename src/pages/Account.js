const Account = (props) => {
    const getFirebaseToken = async () => {
        const token = await props.user.getIdToken();
        console.log(token)
    }

    getFirebaseToken();

    const generateAcctDisplay = () => {
        return  <div className="account-info">
                    <h1>Account</h1>
                    <h3>Name: {props.user.displayName}</h3>
                    <h3>Email: {props.user.email}</h3>
                    <input type="button" value="your orders"/>
                </div>
    } 



    return props.user ? generateAcctDisplay() : <p>please login to see account page</p>

        
};

export default Account;