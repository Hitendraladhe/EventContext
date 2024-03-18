import React, { useState } from 'react';
import { useFormData } from '../../context';
import { useNavigate } from 'react-router-dom';
import './index.css';

const AddEvent = () => {
  const [event, setEvent] = useState({});
  const { addData } = useFormData();
  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const onBack = () => {
    navigate('/');
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    addData(event);
    navigate('/');
  };

  return (
    <>
      <div className='formContainer'>
        <form className='form' onSubmit={onSubmitForm}>
          <button className='back' onClick={onBack}>
            Back
          </button>
          <h4>Add Blog</h4>
          <div className='row'>
            <div>
              <label className='label' htmlFor='event_name'>
                Event Name
              </label>
              <input className='input' onChange={onChangeHandle} id='event_name' name='event_name' />
              <label className='label' htmlFor='data'>
                Data
              </label>
              <input className='input' onChange={onChangeHandle} id='data' name='data' />
              <label className='label' htmlFor='time'>
                Time
              </label>
              <input className='input' onChange={onChangeHandle} id='time' name='time' />
              <label className='label' htmlFor='location'>
                Location
              </label>
              <input className='input' onChange={onChangeHandle} id='location' name='location' />
            </div>
            <div>
              <label className='label' htmlFor='img'>
                Image
              </label>
              <input className='input' onChange={onChangeHandle} id='img' name='img' />
              <label className='label' htmlFor='is_liked'>
                Is Liked
              </label>
              <input className='input' onChange={onChangeHandle} id='is_liked' name='is_liked' />
              <label className='label' htmlFor='UserId'>
                User Id
              </label>
              <input className='input' onChange={onChangeHandle} id='UserId' name='UserId' />
              <button type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEvent;
