import styles from "./Badge.module.css";

export type BadgeProps = {
  // Text indside the badge
  text:string;
//   color tone of the badge
  tone?: 'success'| 'warning' | 'error' | 'neutral';
};


export function Badge({ text, tone = 'neutral' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[tone]}`}>
      {text}
    </span>
  );
}