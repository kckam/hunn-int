import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../../components/styles";

function Index({ status }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const DATA = {
    "payment-success": {
      icon: "/images/icons/smile.svg",
      title: "THANK YOU FOR YOUR PURCHASE",
      subtitle:
        "Your payment has been made and the order will be reflected in Order History soon.",
      nav: {
        label: "CONTINUE BROWSING",
        link: "/shop",
      },
    },

    "payment-failed": {
      icon: "/images/icons/frown.svg",
      title: "YOUR PURCHASE IS UNSUCCESSFUL",
      subtitle:
        "Your payment has been declined and the order has failed to proceed.",
      nav: {
        label: "BACK TO HOME",
        link: "/",
      },
    },

    "warranty-success": {
      icon: null,
      title: "THANK YOU FOR REGISTERING YOUR HUNN WARRANTY",
      subtitle: (
        <>
          A confirmation email will be sent to you within 2-3 working days. If
          you need further help, please{" "}
          <Link to="/#contact-us">contact us</Link>.
        </>
      ),
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
      <div className="result-container">
        {selected.icon && (
          <img
            src={selected.icon}
            width="62"
            height="62"
            alt={`result ${status}`}
            className="result__icon"
          />
        )}

        <h1 className="result__title">{selected.title}</h1>
        <p className="result__subtitle">{selected.subtitle}</p>
        <Button
          width="360px"
          className="result__btn"
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
