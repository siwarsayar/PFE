import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeEmail,changePassword ,loginSuccess} from '../store/slices/authSlice';
import Input from '../component/Input';
import Button from '../component/Button';


const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    dispatch(changeEmail(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(changePassword(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginSuccess());
    navigate('/welcome'); 
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <h2 className="text-2xl mb-4 font-bold text-center text-gray-800">Connexion</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            E-mail:
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={handleEmailChange}
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Mot de passe:
          </label>
          <Input
           type="password"
           id="password"
           name="password"
           onChange={handlePasswordChange}
           placeholder="Entrez votre mot de passe"
           required/>
        </div>
        <Button type="submit"> Se Connecter </Button>
      </form>
    </div>
  );
};

export default LoginPage;
