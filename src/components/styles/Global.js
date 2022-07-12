import { createGlobalStyle, css } from "styled-components";
import breakpoints from "../../config/breakpoint";

const { lg, xl, xxl, xxxl } = breakpoints;

const GlobalStyles = createGlobalStyle`

body, input, button,ol li, textarea {
	font-family: 'Montserrat', sans-serif;
}



strong, b {
	font-weight: bold;
}

img {
	max-width: 100%;
	height: auto;
	vertical-align: middle;
}

.container {
  /* @media only screen and (${xl.down}) {
    padding: 0 28px;
  } */

  @media only screen and (${lg.up}) {
		max-width: calc(992px - 72px);
	}

  @media only screen and (${xl.up}) {
		max-width: calc(1200px - 72px);
	}

	@media only screen and (${xxl.up}) {
		max-width: calc(1400px - 72px);
	}

	@media only screen and (${xxxl.up}) {
		max-width: calc(1680px - 72px);
	}
  
  padding: 0 14px;
  margin: auto;
  width: 100%;
}



.inner-container {
	/* @media only screen and (${xxxl.up}) { */
		max-width: calc(1680px - 500px);
	/* } */
  padding: 0 14px;
	margin: auto;
    width: 100%;
}

.account-container {
  width: 100%;
  max-width: 450px;
}

.error-msg {
	color: #FF1A46;
	font-size: 14px;
	line-height:20px ;
}

.consent-group {
	label {
          display: flex;
          align-items:flex-start ;

          &.center {
            align-items:center;
          }

          input {
            position: absolute;
            left: -9999px;
            opacity: 0;

            &:checked ~ .consent__marker .consent__marker-tick {
              opacity: 1;
            }
          }

          .consent__marker {
            flex: 0 0 16px;
            margin-right: 12px;
            width: 16px;
            height: 16px;
            border: 1px solid #707070;
            display: flex;
            justify-content: center;
            align-items: center;

            .consent__marker-tick {
              opacity: 0;
              transition: opacity 0.15s ease-in;
            }
          }

          p {
            font-size: 14px;
            line-height: 20px;
            &::first-line {
              line-height: 14px ;
            }

            a {
              color: #29bcb9;
              text-decoration: underline;
            }
          }
        }
}

input, select, textarea {
  padding-left: 16px;
}

.required {
  color: #FF0000;
}
`;

export default GlobalStyles;
