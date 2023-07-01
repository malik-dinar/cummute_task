import './register.css'



function RegisterPage() {

    return (
        <div className='register-box'>
            <div className='register'>
                <h1 style={{ textAlign: 'center' }}>Register Page</h1>

                <input className='input'  type="text" placeholder='Enter First name' />
                <input className='input'  type="text" placeholder='Enter Last name' />
                <input className='input' type="email" placeholder='Enter Email' />
                <input className='input' type="password" placeholder='Enter password' /> 

                   {<h3 className='error'></h3>}
                   {<div className='action-btn'>
                        <button style={{ textAlign: 'center' }} className='signUp-btn'>Register</button>
                    </div>}
            </div>
        </div>
    )
}

export default RegisterPage
    