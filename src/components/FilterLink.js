import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const FilterLink = ( { filter, children } ) => (
    <NavLink
      exact
      to={filter === "all" ? "/" : `/${ filter }`}
      activeStyle={{
          textDecoration: "none",
          color: "black",
      }}
    >
        {children}
    </NavLink>
);
FilterLink.propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export default FilterLink;

