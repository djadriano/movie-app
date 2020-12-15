export const formatDate = (date) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };

  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};
