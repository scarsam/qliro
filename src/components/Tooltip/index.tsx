import styles from "./Tooltip.module.scss";

const Tooltip: React.VFC<{ label: string }> = ({ label }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.icon}>i</span>
      <button>{label}</button>
    </div>
  );
};

export default Tooltip;
