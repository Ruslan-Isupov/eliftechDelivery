// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css'



export const RegisterForm = () => {

    return (
        <form className ={css.registerForm}  autoComplete="off">
      <label >
        Name
        <input  className={css.registerInput} type="text" name="name" />
      </label>
      <label >
        Email
        <input className={css.registerInput} type="email" name="email" />
      </label>
      <label >
        Phone
        <input className={css.registerInput} type="number" name="password" />
        </label>
        <label >
        Address
        <input className={css.registerInput} type="text" name="password" />
      </label>
      <button className={css.registerButton} type="submit">Register</button>
    </form>
    )
}