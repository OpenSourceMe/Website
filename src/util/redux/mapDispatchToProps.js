import { Map } from 'immutable';
import { bindActionCreators } from 'redux';

/**
 * maps passed actions to props and bind dispatch
 * @param {array} actions - actions
 * @return {function} function to be passed to connect
 */
export function mapDispatchToProps(actions = []) {
  return (dispatch) => {
    let creators = Array.isArray(actions) ? actions : [actions];

    creators = new Map()
      .merge(...creators)
      .filter(value => typeof value === 'function') // only pass functions
      .toObject();  // convert immutable object to standard JS object

    creators = bindActionCreators(creators, dispatch);

    return {
      actions: creators,
      dispatch,
    };
  };
}
