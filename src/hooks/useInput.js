function useInput(setInput) {
  return function (key = "") {
    return (e) => {
      setInput((prevState) => {
        return {
          ...prevState,
          [key]: e.target.value,
        };
      });
    };
  };
}

export default useInput;
