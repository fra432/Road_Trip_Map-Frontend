import FooterStyled from "./FooterStyled";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <div className="footer">
        <div className="footer__contacts">
          <a
            href="https://github.com/fra432"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <AiOutlineGithub color="white" size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/francesco-fabrissin/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin color="white" size={50} />
          </a>
          <a
            href="mailto:francescofabrissin@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <AiOutlineMail color="white" size={50} />
          </a>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
