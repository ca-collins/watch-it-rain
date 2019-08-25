import {useState} from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({
    payType: '',
    payAmount: '',
    hoursPerWeek: ''
  });

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    callback(inputs);
  }

  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
    if (e.target.name === 'payType') {
      clearForm()
    }
  }

  const clearForm = () => {
    inputs.hoursPerWeek = ''
    inputs.payAmount = ''
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useForm;
