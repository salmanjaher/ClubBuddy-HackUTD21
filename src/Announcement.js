import React from 'react';

function Announcement({ clubName, clubData, handleBackAn }) {
  const announcment = React.useRef();
  const Field = React.forwardRef(({ label, type }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} type={type} />
      </div>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let club = clubData.find((clubs) => clubs['name'] === clubName);
    club.hasUpcomingEvents = true;
    club.announcments = announcment.current.value;
  };
  return (
    <>
      <h1 className='text-bold text-5xl text-center'>{clubName}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <Field ref={announcment} label='Announcement:' type='text' />
          <br />
          <input type='submit' value='Submit' />
          <br />
          <button onClick={handleBackAn}>Back</button>
        </form>
      </div>
    </>
  );
}

export default Announcement;
