import React from 'react';
import useForm from '../hooks/useForm';
import styled from 'styled-components';

const StyledEarningsForm = styled.div`

`;

const EarningsForm = () => {
  const submitForm = (inputs) => {
    console.log(inputs)
    // alert(`EarningsForm Submitted!
    //        Pay Type: ${inputs.payType}
    //        Pay Amount: ${inputs.payAmount}
    //        Hours per Week: ${inputs.hoursPerWeek}`);
}
  const {inputs, handleInputChange, handleSubmit} = useForm(submitForm);

  return (
    <StyledEarningsForm>

      <form className="init-form" onSubmit={handleSubmit}>

        <h5>Pay Type</h5>
        <div className="switch-wrapper pay-type-wrapper" onChange={handleInputChange}>
          <label htmlFor="yearly-radio" id="yearly-label" className="radio-label">yearly</label>
          <input type="radio" id="yearly-radio" name="payType" value="yearly" required/>
          <label htmlFor="hourly-radio" id="hourly-label" className="radio-label">hourly</label>
          <input type="radio" id="hourly-radio" name="payType" value="hourly" required/>
        </div>
        <h5>Pay Amount</h5>
        <input type="number"
               id="pay-amount"
               className="hourly-input yearly-input"
               placeholder="$ / yr" name="payAmount"
               onChange={handleInputChange}
               value={inputs.payAmount}
               min="1"
               required/>
        {('hourly' === inputs.payType) &&
        <h5>Hours per week</h5> &&
        <input type="number"
               id="hrs-per-wk"
               className="yearly-input"
               placeholder="hrs / wk"
               name="hoursPerWeek"
               onChange={handleInputChange}
               value={inputs.hoursPerWeek}
               min="1"
               required/>}

        <button type="submit">Make it rain!</button>

      </form>

    </StyledEarningsForm>
  )
};

export default EarningsForm;
