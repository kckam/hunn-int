import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../../components/styles";

function Index({ status }) {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const DATA = {
    success: {
      icon: "/images/icons/smile.svg",
      title: "THANK YOU FOR YOUR PURCHASE",
      subtitle:
        "Your payment has been made and the order will be reflected in Order History soon.",
      nav: {
        label: "CONTINUE BROWSING",
        link: "/shop",
      },
    },

    failed: {
      icon: "/images/icons/frown.svg",
      title: "YOUR PURCHASE IS UNSUCCESSFUL",
      subtitle:
        "Your payment has been declined and the order has failed to proceed.",
      nav: {
        label: "BACK TO HOME",
        link: "/",
      },
    },
  };

  if (!status || !Object.keys(DATA).includes(status)) {
    return <Navigate to="/" />;
  }

  let selected = DATA[status];

  return (
    <Styled>
      <div className="payment-container">
        <img
          src={selected.icon}
          width="62"
          height="62"
          alt={`payment ${status}`}
          className="payment__icon"
        />
        <h1 className="payment__title">{selected.title}</h1>
        <p className="payment__subtitle">{selected.subtitle}</p>
        <Button
          width="360px"
          className="payment__btn"
          onClick={() => {
            navigate(selected.nav.link);
          }}
        >
          {selected.nav.label}
        </Button>
      </div>
    </Styled>
  );
}

export default Index;
