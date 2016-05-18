import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NotFound from '../components/core/NotFound';
import RegularPost from '../components/core/Pieces/types/Regular';
import SongPost from '../components/core/Pieces/types/Song';

const styles = {
  body: {
    maxWidth: '80%',
  },
};

const RenderPiece = props => {
  /** Find right content from query param */
  const potentialNames = props.pieces.map(p => p.title.replace(/\s+/g, '-').toLowerCase());
  const index = potentialNames.indexOf(props.params.pieceName);
  if (index === -1) {
    return <NotFound />;
  }
  const details = props.pieces[index];
  /** Switch component according to type */
  let content;
  switch (details.type) {
    case 'song':
      content = <SongPost {...details} />;
      break;

    default:
      content = <RegularPost {...details} />;
  }

  return (
    <div className="container" style={styles.body}>
      {content}
    </div>
  );
};
RenderPiece.propTypes = {
  pieces: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string,
  })),
  params: PropTypes.shape({
    pieceName: PropTypes.string.isRequired,
  }),
};

export default connect(
  state => ({
    pieces: state.home.content,
  })
)(RenderPiece);
