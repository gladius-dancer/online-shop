import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Categories from "../../components/Categories/Categories";

function Main() {
    const dispatch = useAppDispatch()
    const nav = useAppSelector(state => state.navReducer);


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