import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Profile = (props) => {
    const { users }  = props;
    const { userID } = useParams();
    const [ searchParams ] = useSearchParams();
    

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        filterCurrentUser();
        console.log('Message: ', searchParams.get('message'));
        console.log('Day: ', searchParams.get('day'));
    }, []);

    const filterCurrentUser = () => {
        const current = users.find((user) => user.id === parseInt(userID));
        setCurrentUser(current);
    }

    return (
        <div>
            <h2>Profile</h2>

            <h2>Current User: {currentUser ? currentUser.name : ' - '}</h2>
        </div>
    )
}

export default Profile;