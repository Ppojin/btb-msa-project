import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/customer">회원/인증</Link>
            <Link to="/exam">시험 조회</Link>
        </div>
    );
};
export default Navbar;