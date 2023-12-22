import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../contexts/GlobalContext';
import {
  HIDE_UPDATE_PROFILE,
  START_LOADING,
  STOP_LOADING,
} from '../utils/actions';
import { useAuthContext } from '../contexts/AuthContext';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { dispatch, showUpdateProfile } = useGlobalContext();
  const { user, axiosPrivate, refreshToken } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name &&
      !email &&
      !password &&
      !oldPassword &&
      !address &&
      !phoneNumber
    ) {
      alert('nothing to update');
      return;
    }

    if (password && !oldPassword) {
      alert('to update the password, you need to enter the old password');
      return;
    }

    if (!password && oldPassword) {
      alert('cannot input the old password alone and leave out the password');
      return;
    }

    const updateData = { name, email, address, phoneNumber };

    if (oldPassword && password) {
      updateData.oldPassword = oldPassword;
      updateData.password = password;
    }

    if (
      name === user.name &&
      email === user.email &&
      address === user.address &&
      phoneNumber === user.phoneNumber &&
      !password &&
      !oldPassword
    ) {
      alert('Sorry but you did not perform any update.');
      return;
    }

    try {
      dispatch({ type: START_LOADING });
      const { data } = await axiosPrivate.put(`/${user.title}`, updateData);
      alert(data.message);
      dispatch({ type: HIDE_UPDATE_PROFILE });
      refreshToken(user.title);

      if (password && oldPassword) {
        setPassword('');
        setOldPassword('');
      }
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch({ type: STOP_LOADING });
    }
  };

  useEffect(() => {
    if (user.email) {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
      setPhoneNumber(user.phoneNumber);
    }
  }, [user]);

  return (
    <Wrapper showUpdateProfile={showUpdateProfile}>
      <div className='inside'>
        <div className='top'>
          <h2>Update your account</h2>
          <button
            className='close'
            onClick={() => {
              dispatch({ type: HIDE_UPDATE_PROFILE });
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21'
              height='21'
              viewBox='0 0 21 21'
              fill='none'
            >
              <path
                d='M10.5 0C4.69875 0 0 4.69875 0 10.5C0 16.3013 4.69875 21 10.5 21C16.3013 21 21 16.3013 21 10.5C21 4.69875 16.3013 0 10.5 0ZM5.6175 5.6175C6.13941 5.09559 6.98559 5.09559 7.5075 5.6175L8.53125 6.64125C9.61856 7.72856 11.3814 7.72856 12.4688 6.64125L13.4925 5.6175C14.0144 5.09559 14.8606 5.09559 15.3825 5.6175C15.9044 6.13941 15.9044 6.98559 15.3825 7.5075L14.3587 8.53125C13.2714 9.61856 13.2714 11.3814 14.3587 12.4688L15.3825 13.4925C15.9044 14.0144 15.9044 14.8606 15.3825 15.3825C14.8606 15.9044 14.0144 15.9044 13.4925 15.3825L12.4688 14.3587C11.3814 13.2714 9.61856 13.2714 8.53125 14.3587L7.5075 15.3825C6.98559 15.9044 6.13941 15.9044 5.6175 15.3825C5.09559 14.8606 5.09559 14.0144 5.6175 13.4925L6.64125 12.4688C7.72856 11.3814 7.72856 9.61856 6.64125 8.53125L5.6175 7.5075C5.09559 6.98559 5.09559 6.13941 5.6175 5.6175Z'
                fill='#097394'
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='item'>
            <p>Name</p>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='item'>
            <p>Email</p>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='item'>
            <p>New Password</p>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='item'>
            <p>Old Password</p>
            <input
              type='password'
              name='oldPassword'
              id='oldPassword'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className='item'>
            <p>Address</p>
            <input
              type='text'
              name='address'
              id='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='item'>
            <p>PhoneNumber</p>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button type='submit' className='update'>
            <span>Update</span>{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='6'
              viewBox='0 0 18 6'
              fill='none'
            >
              <path
                d='M11.25 0L18 3.036L11.25 6V3.6H0V2.4H11.25V0Z'
                fill='#FFF'
              />
            </svg>
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default UpdateProfile;

const Wrapper = styled.article`
  ${(props) => (props.showUpdateProfile ? 'display: flex;' : 'display: none;')};
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1100000000;

  .inside {
    background: white;
    margin-top: 10%;
    width: 30%;
    border-radius: 9px;
    background: var(--white, #fff);
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 7px solid var(--MainColor1, #097394);
    border-bottom: 1px solid var(--MainColor1, #097394);
    border-right: 1px solid var(--MainColor1, #097394);
    border-radius: 9px 9px 0px 0px;
    padding: 15px 10px;
    width: 100%;
    color: var(--SearchTextColor, #b8b6b6);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .top button {
    margin-top: -20px;
    background: transparent;
    border: none;
  }

  form {
    margin: 20px 70px;
  }

  .item {
    margin-bottom: 15px;
  }

  .item p {
    margin-bottom: 5px;
    font-size: 18px;
  }

  .item input {
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    outline: none;
    border: 1px solid var(--SearchTextColor, #b8b6b6);
    font-size: 17px;
  }

  .update {
    width: 35%;
    text-align: center;
    padding: 10px 0;
    background-color: var(--SecondMainColor, #ff9100);
    font-size: 19px;
    color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
  }

  .update svg {
    margin-left: 5px;
  }
`;
