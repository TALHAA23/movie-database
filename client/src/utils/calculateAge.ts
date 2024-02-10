const calculateAge = (birthData: Date) => {
  const now = new Date();
  const age = now.getFullYear() - birthData.getFullYear();
  return age;
};

export default calculateAge;
