const toISO = dateVal => (
  Date.parse(
    dateVal
      .split(/\./)
      .reverse()
      .join('-')
  )
);

const sortByDate = pieces => (
  pieces.sort((a, b) => {
    /* ISO date format */
    const d1 = toISO(a.date);
    const d2 = toISO(b.date);

    if (d1 < d2) return 1;
    if (d1 > d2) return -1;
    return 0;
  })
);

export default sortByDate;
