import { useState, useEffect } from 'react';

export const useError = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  //component will unmount in 5 seg
  useEffect(()=> {
    setTimeout(() => {
        setError(false);
    }, 5000);
  }, [error]);

  const handleError = (err) => {
    console.log(err)
    setError(true);
    switch(err){
      case 'Campo vazio':
        setErrorMessage('Preencha todos os campos');
      break;
      case 'auth/user-not-found':
        setErrorMessage('Este usuário não existe');
      break;
      case 'auth/email-already-in-use':
        setErrorMessage('Este E-mail está em uso por outro usuário');
       break;
      case 'auth/invalid-email':
        setErrorMessage('E-mail está com formato inválido');
       break;
      case 'auth/wrong-password':
        setErrorMessage('Sua senha está incorreta.');
      break;
      case 'auth/too-many-requests':
        setErrorMessage('Você digitou a senha errada muitas vezes');
      break;
      case 'auth/weak-password':
        setErrorMessage('Senha muito fraca');
      break;
      case 'auth/network-request-failed':
        setErrorMessage('Verifique sua conexão com a internet.');
      break;
      default:
        setErrorMessage('outro erro');
      break;
    }
  };

  return { error, errorMessage, handleError };
};