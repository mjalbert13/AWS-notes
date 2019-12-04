import React,{ useState } from 'react';
import { Auth } from 'aws-amplify'; 

export default function Login (props) {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const {  email, password} = formData;

    const onChange = e=> setFormData({ ...formData,[e.target.name]: e.target.value })

    function validateForm() {
        return email.length > 0 && password.length > 0;
      }
    
      async function handleSubmit(event) {
        event.preventDefault();
      
        try {
          await Auth.signIn(email, password);
          props.userHasAuthenticated(true);
        } catch (e) {
          alert(e.message);
        }
      }
    return (
        <div>
            <h1>Login</h1>
            <form className='form' onSubmit={handleSubmit}> 
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='joe@gmail.com'
                        name='email'
                        value={email}
                        onChange={e=> onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input 
                        type='password'
                        name='password'
                        value={password}
                        onChange={e=> onChange(e)}
                    />
                </div>
                <button type='submit' disabled={!validateForm()} className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}
