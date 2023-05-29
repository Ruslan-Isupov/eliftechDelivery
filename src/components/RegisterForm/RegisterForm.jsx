import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';
import { addOrder } from '../../redux/submitOrder/submitOrderOperations'
import css from './RegisterForm.module.css'



export const RegisterForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = e => {
     console.log(4)
  const form = e.currentTarget;
    e.preventDefault();
   
    dispatch(
      addOrder({
        name: form.elements.name.value,
        email: form.elements.email.value,
        adress: form.elements.adress.value,
        phone : form.elements.phone.value
      })
      );
    form.reset()
 };
    return (
        <form className ={css.registerForm} onSubmit={handleSubmit}  autoComplete="off" id="form1">
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
        <input className={css.registerInput} type="number" name="phone" />
        </label>
        <label >
        Address
        <input className={css.registerInput} type="text" name="adress" />
      </label>
  </form>
      
    )
}