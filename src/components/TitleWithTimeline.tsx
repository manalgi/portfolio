import { css } from '@pigment-css/react';

const span = css({
  color: 'gray',
});

export const TitleWithTimeline = ({
  jobTitle,
  time,
}: {
  jobTitle: string;
  time: string;
}) => {
  return (
    <>
      <strong>{jobTitle}</strong>
      <span className={span}>{time}</span>
    </>
  );
};
