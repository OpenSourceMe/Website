/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: util functions for blog
  NOTES:

******** */
export const createBlogObject = md => {
  // split at first paragraph break
  const halves = md.split(/(\n\n)(.+)?/);
  const details = JSON.parse(halves[0]);
  halves.shift();
  const rest = halves.join('\n\n');

  return {
    content: rest,
    ...details,
  };
}