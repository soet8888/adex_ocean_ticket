import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { AccountIcon } from "../assets/icons/svg_icons";
import { Link } from 'react-router-dom';
import paths from '../routes/paths';
import { connect } from "react-redux";
import { actionCreators } from "../store/actions/user_actions";

const Header = (props) => {
    const [open, setModel] = useState(false);
    const { user } = props;
    return (
        <div className="relative w-full md:px-8 px-4 md:py-5 py-3 flex flex-row justify-between items-center  border-b-[1px] border-base-300">
            <div className={`w-12 z-10 mx-3`} >
                <Link to={paths.home}> <img className="h-9" src={logo} /></Link>
            </div>
            <div className={`text-2xl m-auto`}>
                Adex Ocean Vision 2022
            </div>
            {user && <div className="text-secondary flex flex-row hover">
                <div className="font-semibold pt-1 mr-2">{user?.firstName + '' + user?.lastName}</div>
                <button onClick={() => setModel(!open)} data-dropdown-toggle="dropdown" className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4  focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                    <AccountIcon />
                </button>
                <div className={`${open ? 'block' : 'hidden'} text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
                    <ul class="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <div className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Tickets</div>
                        </li>
                        <li>
                            <div onClick={() => props.logout()} className=" block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</div>
                        </li>
                    </ul>
                </div>
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.App.User,
});
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actionCreators.setUser(null)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

