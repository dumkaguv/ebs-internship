import { Flex } from "antd";
import classes from "./socialicons.module.scss";

const SocialIcons = () => {
  const socialLinks = [
    {
      img: "facebook.svg",
      alt: "Facebook",
      link: "https://www.facebook.com/?locale=ro_RO",
    },
    {
      img: "github.svg",
      alt: "Github",
      link: "https://github.com/",
    },
    {
      img: "google.svg",
      alt: "Google",
      link: "https://www.google.co.uk/",
    },
    {
      img: "twitter.svg",
      alt: "Twitter",
      link: "https://x.com/",
    },
    {
      img: "microsoft.svg",
      alt: "Microsoft",
      link: "https://www.microsoft.com/ro-md/",
    },
  ];

  return (
    <Flex
      style={{ marginTop: 20 }}
      justify="flex-start"
      gap={20}
    >
      {socialLinks.map((item) => (
        <a
          key={item.alt}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialIcons}
        >
          <img
            height={40}
            width={40}
            src={`/icons/${item.img}`}
            alt={item.alt}
          />
        </a>
      ))}
    </Flex>
  );
};

export default SocialIcons;
