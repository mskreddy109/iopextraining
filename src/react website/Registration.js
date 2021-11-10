import React from 'react';
import ReactDOM from 'react-dom';
import Storing from '../../Storing';
import Validate from './Validate';
export default function Registration({ submitForm }){
    const { handleChange, handleSubmit, values, errors } = Storing(
        submitForm,
        Validate
      );
    return(<div className='reg-main'>
 
        <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>Sign Up For Exciting Stuff...!</h1>
        <div className='reg-inputs'>
        <label className='reg-label'>
            UserName:
            <input className='reg-input'
            type ='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            />{errors.username && <p>{errors.username}</p>}

        
        </label></div>
        <div className='reg-inputs'>
        <label className='reg-label'> 
            Email:
            <input className='reg-input'
            type ='email'
            name='email'
            placeholder='Enter your mail'
            value={values.email}
            onChange={handleChange}
            />{errors.email && <p>{errors.email}</p>}
          
        </label></div>
        <div className='reg-inputs'>
        <label className='reg-label'>
            Password:
            <input className='reg-input'
            type ='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            />{errors.password && <p>{errors.password}</p>}
           
        </label>
        </div>
        <div className='reg-inputs'>
        <label className='reg-label'>
            Confirm Password:
            <input className='reg-input'
            type ='password'
            name='password2'
            placeholder='confirm password'
            value={values.password2}
            onChange={handleChange}
            />{errors.password2 && <p>{errors.password2}</p>}
           
        </label>
        </div>
        <button className='reg-input-btn' type='submit'>
          Sign up
        </button>
        <span className='reg-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span> </form>
    </div>);
}
