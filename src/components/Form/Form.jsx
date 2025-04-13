import React from 'react';

const Form = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();  //use for don't load the page.
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name'/>
                <br />
                <input type="text" name='email' placeholder='Email' />
                 <br />
                 <input type="text" name='phone' placeholder='phone' />
                 <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;