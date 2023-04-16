const Register = () => {
    return (
        <div>
            <h2>Register</h2>
            <div className="form-wrapper">
                <form>
                    <div className="input-group flex-nowrap input-wrapper">
                        <span className="input-group-text" id="addon-wrapping">Email</span>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper">
                        <span className="input-group-text" id="addon-wrapping">Name</span>
                        <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper">
                        <span className="input-group-text" id="addon-wrapping">Mobile</span>
                        <input type="text" className="form-control" placeholder="Mobile Number" aria-label="MobileNumber" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper">
                        <span className="input-group-text" id="addon-wrapping">Password</span>
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
                    </div>
                    <div className='button-wrapper'>
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;