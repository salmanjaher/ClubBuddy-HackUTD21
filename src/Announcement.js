import React from 'react';

function Announcement({clubName}) {
    const announcemnt = React.useRef();
    const Field = React.forwardRef(({ label, type }, ref) => {
        return (
          <div>
            <label>{label}</label>
            <input ref={ref} type={type} />
          </div>
        );
      });
  return (
    <>
      <h1 className='text-bold text-5xl text-center'>
        {clubName}
      </h1>
      <div>
          <form 
            onSubmit = {(e) => {
                return console.log(announcement), e.oreventDefault();
                }}>
            <Field ref = {announcement} label = "Announcement:" type = "text"/>
            <br/>
            <input type="submit" value="Submit" />
          </form>
      </div>
    </>
  );
}

export default Announcement;