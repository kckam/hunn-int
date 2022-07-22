import { useConfig } from "@ysq-intl/react-redux-ysqstore";

function usePriceFormat() {
  const { config } = useConfig();

  return function (number = 0) {
    return new Intl.NumberFormat(config.iso_language_code, {
      style: "currency",
      currency: config.currency,
      minimumFractionDigits: config.currency_decimal,
      maximumFractionDigits: config.currency_decimal,
    }).format(number);
  };
}

export default usePriceFormat;
