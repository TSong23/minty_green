import { connect } from 'react-redux';
import ListItemGraph from './listitem_graph';

const mstp = (state, ownProps) => {
  let stock = state.entities.stocks[ownProps.stock.ticker];
  let intraday;
  if (stock && stock.intraday){
    intraday = stock.intraday
  }
  return {
    stock: state.entities.stocks
  }
};


export default connect(
  mstp,
  null
)(ListItemGraph);