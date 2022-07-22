import { useEffect } from "react";
import { useADLs } from "@ysq-intl/react-redux-ysqstore";
import usePrevious from "./usePrevious";

function useAddressForm(input = {}, setInput = () => {}) {
  const { getADL1s, getADL2s, getZipcode, adls } = useADLs();
  const prevInput = usePrevious(input);

  useEffect(() => {
    getADL1s.action();
  }, []);

  useEffect(() => {
    if (input && Object.keys(input).length > 0) {
      getAdls();
    }
  }, [input]);

  function getAdls() {
    if ((!prevInput || prevInput.adl1 !== input.adl1) && input.adl1) {
      getADL2s.action({ adl1: input.adl1 });
      if (prevInput?.adl1) {
        setInput((prevInput) => ({ ...prevInput, adl2: "", zipcode: "" }));
      }
    }
    if ((!prevInput || prevInput.adl2 !== input.adl2) && input.adl2) {
      getZipcode.action({
        adl1: input.adl1,
        adl2: input.adl2,
      });
      if (prevInput?.adl2) {
        setInput((prevInput) => ({ ...prevInput, zipcode: "" }));
      }
    }
  }

  return { adls };
}

export default useAddressForm;
