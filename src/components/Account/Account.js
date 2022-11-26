import React from 'react';
import './Account.css';
import SVG from 'react-inlinesvg';

import AccountImg from '../../images/Account/account.svg';

const Account = () => (
    <div className="account">
        <SVG className="account__img" src={AccountImg} />
    </div>

);

export default Account;
