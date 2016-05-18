import React from 'react';
import Frag from './Frag';
/**
 * Create a post fragment.
 * @param  {  Object} post        Post props.
 * @param  {number} index       Index of post in lineup.
 * @param  {function()} onFragClick Handler for onClick.
 * @return {ReactComponent}             Frag component
 */
const createFrag = (post, index, onFragClick) => (
  <Frag key={index} onClickHandler={onFragClick} title={post.title} date={post.date} />
);

export default createFrag;
