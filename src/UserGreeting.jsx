
import propTypes from 'prop-types';
function UserGreeting(props){
    const WelcomeMessage=<h2 className="Welcome-Message">
        welcome{props.username}
    </h2>
    return (props.isLoggedIn ? WelcomeMessage:loginPrompt);
}
UserGreeting.propTypes={
    isLoggdIn:propTypes.bool,
    username:propTypes.string,
}
export default UserGreeting 