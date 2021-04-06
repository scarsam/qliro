import styles from "./InfoBlock.module.scss";

interface IInfoBlock {
  icon: string;
  title: string;
}

const InfoBlock: React.FC<IInfoBlock> = ({ icon, title, children }) => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.icon}>
        <img src={icon} alt={title} />
        <p>
          <strong>{title}</strong>
        </p>
      </div>
      <div className={styles.infoBlockContent}>{children}</div>
    </div>
  );
};

export default InfoBlock;
