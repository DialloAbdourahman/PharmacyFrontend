import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { Pagination } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

import { useAuthContext } from '../../contexts/AuthContext';
import { useGlobalContext } from '../../contexts/GlobalContext';
import useLogout from '../../hooks/useLogout';
import SystemAdminCreatePharmacy from './SystemAdminCreatePharmacy';
import SystemAdminDeletePharmacy from './SystemAdminDeletePharmacy';
import SystemAdminUpdatePharmacy from './SystemAdminUpdatePharmacy';
import { STOP_LOADING, START_LOADING } from '../../utils/actions';
import ProfileInfo from '../ProfileInfo';
import UpdateProfile from '../UpdateProfile';

const SystemAdminPharmacies = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [createPharmacy, setCreatePharmacy] = useState(false);
  const [deletePharmacy, setDeletePharmacy] = useState({
    show: false,
    pharmacy: {},
  });
  const [updatePharmacy, setUpdatePharmacy] = useState({
    show: false,
    pharmacy: {},
  });
  const [showProfile, setShowProfile] = useState(false);

  const { axiosPrivate } = useAuthContext();
  const { dispatch } = useGlobalContext();
  const { logout } = useLogout();

  const getAllPharmacies = async () => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await axiosPrivate.get(
        `/systemAdmin/allPharmacies?name=${name}&page=${page}`
      );
      setPharmacies(data);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: STOP_LOADING });
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getAllPharmacies();
  }, [name, page]);

  return (
    <Wrapper>
      <header className='dashboard-header'>
        <h1>Pharmacies</h1>
        <div className='search-bar'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='17'
            height='16'
            viewBox='0 0 17 16'
            fill='none'
          >
            <path
              d='M7.43719 0.0198206C3.61183 0.0198206 0.5 3.13165 0.5 6.95702C0.5 10.7824 3.61183 13.8942 7.43719 13.8942C8.60661 13.8942 9.7562 13.6167 10.7274 13.0816C10.8052 13.1752 10.8915 13.2614 10.9851 13.3392L12.9671 15.3213C13.1501 15.5272 13.3733 15.6936 13.623 15.8101C13.8726 15.9267 14.1434 15.991 14.4188 15.9991C14.6942 16.0072 14.9683 15.959 15.2244 15.8573C15.4805 15.7556 15.713 15.6027 15.9079 15.4079C16.1027 15.213 16.2556 14.9805 16.3573 14.7244C16.459 14.4683 16.5072 14.1942 16.4991 13.9188C16.491 13.6434 16.4267 13.3726 16.3101 13.123C16.1936 12.8733 16.0272 12.6501 15.8213 12.4671L13.8392 10.4851C13.7427 10.3885 13.6364 10.3021 13.5221 10.2274C14.0573 9.2562 14.3942 8.12643 14.3942 6.9372C14.3942 3.11183 11.2824 0 7.45702 0L7.43719 0.0198206ZM7.43719 2.00188C10.1923 2.00188 12.3923 4.20196 12.3923 6.95702C12.3923 8.26517 11.9166 9.47423 11.0842 10.3662C11.0644 10.386 11.0445 10.4058 11.0247 10.4256C10.9311 10.5034 10.8448 10.5897 10.767 10.6833C9.89494 11.4761 8.70571 11.932 7.41737 11.932C4.66232 11.932 2.46224 9.73189 2.46224 6.97684C2.46224 4.22178 4.66232 2.0217 7.41737 2.0217L7.43719 2.00188Z'
              fill='#D9D9D9'
            />
          </svg>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Search for a pharmacy'
          />
        </div>
        <div className='buttons'>
          <button className='logout' onClick={logout}>
            <LogoutIcon />
          </button>
          <button className='profile' onClick={() => setShowProfile(true)}>
            <Person2RoundedIcon />
          </button>
        </div>
        {showProfile && <ProfileInfo setShowProfile={setShowProfile} />}
        {/* <button onClick={() => setCreatePharmacy(true)}>Add a pharmacy</button> */}
      </header>
      {pharmacies.length === 0 ? (
        <h1>No pharmacies available</h1>
      ) : (
        <table className='dashboard-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Hourly</th>
              <th>Phone Number</th>
              <th>All Night</th>
              <th>Creator</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pharmacies.map((pharmacy) => {
              return (
                <tr key={pharmacy.id}>
                  <td>{pharmacy.name}</td>
                  <td>{pharmacy.email}</td>
                  <td>{pharmacy.hourly}</td>
                  <td>{pharmacy.phoneNumber}</td>
                  <td>{pharmacy.allNight ? 'True' : 'False'}</td>
                  <td>{pharmacy.systemAdminCreator.name}</td>
                  <td>
                    <button
                      onClick={() =>
                        setUpdatePharmacy({ show: true, pharmacy })
                      }
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        setDeletePharmacy({ show: true, pharmacy })
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {/* {pharmacies.length > 0 && (
        <div className='pagination'>
          <Pagination
            count={11}
            defaultPage={page}
            siblingCount={0}
            onChange={handleChange}
          />
        </div>
      )} */}
      {createPharmacy && (
        <SystemAdminCreatePharmacy
          setCreatePharmacy={setCreatePharmacy}
          getAllPharmacies={getAllPharmacies}
        />
      )}
      {deletePharmacy.show && (
        <SystemAdminDeletePharmacy
          deletePharmacy={deletePharmacy}
          setDeletePharmacy={setDeletePharmacy}
          getAllPharmacies={getAllPharmacies}
        />
      )}
      {updatePharmacy.show && (
        <SystemAdminUpdatePharmacy
          updatePharmacy={updatePharmacy}
          setUpdatePharmacy={setUpdatePharmacy}
          getAllPharmacies={getAllPharmacies}
        />
      )}
    </Wrapper>
  );
};

export default SystemAdminPharmacies;

const Wrapper = styled.section``;
