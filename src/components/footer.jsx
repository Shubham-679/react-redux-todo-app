import React from 'react'
import FilterLink from './filterLink';
import { VisibilityFilters } from '../actions'

const Footer = (props) => {
  console.log("filter",props);
  return(
  <div className="container mt-3 col-6">
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>)
}

export default Footer