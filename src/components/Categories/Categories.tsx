import React from "react";
import cn from "classnames";
import "./Categories.scss";
import { Link } from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {change} from "../../store/reducers/NavSlice";

function Categories() {

  const dispatch = useAppDispatch();

  const loadFilteredProduct = (id: number)=>{
  }

  return (
    <div className="catagories-side-menu">
      <div id="sideMenuClose" onClick={() => dispatch(change())}>
        <i className="ti-close"></i>
      </div>
      <div className="nav-side-menu">
        <div className="menu-list">
          <h6>Categories</h6>
          <ul id="menu-content" className={cn("menu-content collapse out", "menu")}>
            {/*{categories?.map((item: any) => (*/}
            {/*  <li key={item.id} data-toggle="collapse" data-target="#women" className="collapsed">*/}
            {/*    <Link to="/shop" onClick={() => loadFilteredProduct(item.id)}>{item.name}</Link>*/}
            {/*  </li>*/}
            {/*))}*/}
            <ul>
              <li>fgdfg</li>
              <li>fgdfg</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;