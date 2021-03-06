import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions';
import Link from './link';


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})
console.log(mapStateToProps);
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)