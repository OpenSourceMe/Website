import React from 'react';

const styles = {
  details: {
    padding: '5px',
    margin: '10px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '5px',
    textAlign: 'right',
  },
  location: {
    fontWeight: 'bold',
  },
};

const formatDetail = (key, value) => {
  switch (key) {
    case 'location':
      return <span style={styles.location}>{value}</span>;
    case 'email':
      return <a href={`mailto:${value}`}>{value}</a>;
    case 'website': {
      const link = value.match(/^https?:\/\//) ? value : `http://${value}`;
      return <a href={link}>{value}</a>;
    }
    default:
      return value;
  }
};

const Details = (props) => {
  const detailsList = Object.keys(props)
    .map(key => (
      <li key={key}>
        {formatDetail(key, props[key])}
      </li>
    ));

  return (
    <div style={styles.details} >
      <ul style={styles.list}>
        {detailsList}
      </ul>
    </div>
  );
};

export default Details;
