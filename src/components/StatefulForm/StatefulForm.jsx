import React, { useState } from 'react';

const StatefulForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 8){
            setError('password must be 8 characters or longer..')
        }else{
            setError('')
        }
        console.log(name,  email,  password)
    }

    const handleNameChange = e =>{   //name
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmailChange = e =>{  //email
        setEmail(e.target.value)
    }
    const handlePassChange =e =>{  //password
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input 
                onChange={handleNameChange}
                type="text" name='name' placeholder='Name'/>
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name='email' placeholder='Email' />
                 <br />
                 <input
                 onChange={handlePassChange}
                 type="password" name='password' placeholder='password' />
                 <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="submit" />
            </form>
            {
                error? <p>{error}</p> : ''
                // error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;