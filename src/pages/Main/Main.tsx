import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Categories from "../../components/Categories/Categories";
import ProductList from "../../components/ProductList/ProductList";

function Main() {
    const dispatch = useAppDispatch()
    const nav = useAppSelector(state => state.navReducer);
    const products = useAppSelector(state => state.productsReduser.products);

    return (
        <div>
            <Categories/>
            <div id="wrapper" className={nav ? "karl-side-menu-open" : ""}>
                <Header/>
                <ProductList

                />
            </div>
        </div>
    );
}

export default Main;