const readFile = async (file: File) => {
  return new Promise((res) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      res(event.target?.result);
    };
  });
};

export default readFile;
