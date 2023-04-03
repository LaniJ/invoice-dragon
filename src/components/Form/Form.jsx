import { useState } from "react";

const Form = ({ email, businessName, onBizMod, onEmailMod, onPreviewToggle }) => {
  // const [businessName, setBusinessName] = useState('');
  // const [email, setEmail] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    onEmailMod(e.target.value);
  }

  const handleChangeB = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    onBizMod(e.target.value);
    // setBusinessName(e.target.value);
  }
  const toggleViews = () => {
    onPreviewToggle();
  }

  const handleSubmit = event => {
    event.preventDefault();
    // setSubmitted(true);
  }

  return (  
    <div>
      <button onClick={toggleViews}>Preview</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Business Name
            <input 
              type="text" 
              value={businessName} 
              name="name" 
              id="name" 
              onChange={handleChangeB}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email"> Email
            <input
              type="email" 
              value={email} 
              name="email" 
              id="email" 
              onChange={handleChange}
            />
          </label>
        </div>
        <button>Create Invoice</button>
      </form>
    </div>
  );
}
 
export default Form;