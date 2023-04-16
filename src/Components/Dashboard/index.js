import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = (props) => {
    const { users } = props;

    return (
        <div>
            <h2>Dashboard</h2>

            <div className="wrapper">
                {
                    users.length ? users.map((user, index) => (
                        <div key={index} className="user-wrapper">
                            <h2>{user.name}</h2>
                            <h3>{user.city}</h3>
                            <Link to={`/profile/${user.id}?message=happyWeekend&day=sunday`}>
                                <button className='btn btn-success'>Go to profile</button>
                            </Link>
                        </div>
                    )) : 
                    <div>
                        <h2>No users available!</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default Dashboard;