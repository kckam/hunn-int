import { StyledShop } from "./style";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import usePriceFormat from "../../hooks/usePriceFormat";
import { useConfig, useProducts } from "@ysq-intl/react-redux-ysqstore";

function Home() {
  const { t } = useTranslation();
  const { products } = useProducts();
  const { config } = useConfig();
  const priceFormat = usePriceFormat();

  return (
    <StyledShop>
      <Hero
        title={t("page.shop.title")}
        subtitle={t("page.shop.subtitle")}
        bg="shop"
      />
      <ul className={`shop-items container ${true ? "" : "limit"}`}>
        {products.map((product) => (
          <li className="shop-item" key={`product-${product.id}`}>
            <Link to={`/product/${product.id}`}>
              <img
                src={
                  product.details[config.default_language]?.galleries?.[0]
                    ?._file.src ||
                  "https://cdn.ysqhub.com/staging/hunn/no-image.svg"
                }
                alt={
                  product.details[config.default_language]?.galleries?.[0]
                    ?._file.alt
                }
                width="360"
                height="360"
                className="shop-item__image"
              />
              <div className="shop-item__desc">
                <h3 className="shop-item__name">
                  {product.details[config.default_language]?.name}
                </h3>
                <div className="shop-item__color">
                  {product.details[config.default_language]?.color}
                </div>
                <div className="shop-item__price">
                  {product.list_price !== product.sale_price && (
                    <span className="shop-item__list-price">
                      {priceFormat(product.list_price)}
                    </span>
                  )}

                  <span className="shop-item__sale-price">
                    {priceFormat(product.sale_price)}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </StyledShop>
  );
}

export default Home;
