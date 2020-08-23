import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const GuestGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();
  //LOGIN-REDIRECT
  if (isAuthenticated) {
    return <Redirect to="/exams" />;
  }

  return (
    <>
      {children}
    </>
  );
};

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default GuestGuard;
