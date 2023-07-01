import './register.css'

function LoginPage() {

    return (
        <div className='register-box'>
            <div className='register'>
                <h1 style={{ textAlign: 'center' }}>Login Page</h1>
                <input className='input' type="email" placeholder='Enter Email' />
                <input className='input' type="password" placeholder='Enter password' /> 

                   {<h3 className='error'></h3>}
                   {<div className='action-btn'>
                        <button style={{ textAlign: 'center' }} className='signUp-btn'>Log in</button>
                    </div>}
            </div>
        </div>
    )
}

export default LoginPage
    