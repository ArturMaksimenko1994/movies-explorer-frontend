import React from 'react';
import './UserLinkAccount.css';
import { Link } from 'react-router-dom';

const UserLinkAccount = ({ text, to, linkText }) => (
  <p className="user-link">
    {`${text} `}
    <Link to={to} className="user-link__link">
      {linkText}
    </Link>
  </p>
);

export default UserLinkAccount;