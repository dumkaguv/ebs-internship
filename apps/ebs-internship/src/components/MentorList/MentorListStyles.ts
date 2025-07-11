import { createStyles } from "antd-style";

export const useMentorListStyles = createStyles(({ css }) => {
  return {
    mentorBio: css`
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
  };
});
