import { Flex } from "antd";
import { useSocialIconsStyles } from "./SocialIconsStyles";

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
] as const;

export const SocialIcons = () => {
  const { styles } = useSocialIconsStyles();

  return (
    <Flex
      justify="flex-start"
      gap={20}
    >
      {socialLinks.map((item) => (
        <a
          key={item.alt}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcons}
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
