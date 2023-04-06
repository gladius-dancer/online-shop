import React from 'react';
import Header from "../../components/Header/Header";
import {useAppSelector} from "../../hooks/redux";
import Categories from "../../components/Categories/Categories";

function Main() {
    const nav = useAppSelector(state => state.navReduser);
    return (
        <div>
            <Categories/>
            <div id="wrapper" className={nav ? "karl-side-menu-open" : ""}>
                <Header/>
            </div>
        </div>
    );
}

export default Main;