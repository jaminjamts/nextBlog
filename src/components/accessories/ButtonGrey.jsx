export const ButtonGrey = ({ title, link }) => {
  return (
    <a className="text-[var(--text-gray)]  text-base" href={link}>
      {title}
    </a>
  );
};
