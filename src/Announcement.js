import React from 'react';

function Announcement({ clubName, clubData, handleBackAn }) {
  const announcment = React.useRef();
  const Field = React.forwardRef(({ label, type }, ref) => {
    return (
      <div>
        <label class = "text-2xl">{label}</label>
        <input class = "border-2 border-black mt-1 ml-1" ref={ref} type={type} />
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
          
          <input class = "bg-green-500 hover:bg-green-600 text-black text-xl font-bold py-1 px-3 rounded border-2 border-black mt-4" type='submit' value='Submit' />
          
          <button class = "bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-bold py-1 px-3 rounded border-2 border-black ml-4 mt-4" onClick={handleBackAn}>Back</button>
        </form>
      </div>
    </>
  );
}

export default Announcement;
