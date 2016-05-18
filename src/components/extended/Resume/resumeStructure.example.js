export default {
  header: {
    name: '',
    profession: '',
  },
  details: {
    location: '',
    website: '',
    phoneNo: '',
    email: '',
    /* other details also accepted */
  },
  skills: {
    /* any key with value [String] accepted */
    'frameworks+': [],
  },
  sections: [
    /* any object with 'title' and 'content' accepted
       content as markdown will be appropriately transformed */
    {
      title: '',
      content: '',
    },
  ],
};
