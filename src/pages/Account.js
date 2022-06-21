const Account = (props) => {
    return (
        <div className="account-info">
            <h1>Account</h1>
            <h3>Name: {props.user.displayName}</h3>
            <h3>Email: {props.user.email}</h3>
            <input type="button" value="your orders"/>
        </div>
    )
};

export default Account;