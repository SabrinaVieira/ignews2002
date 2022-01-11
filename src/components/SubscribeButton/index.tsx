import styles from "./style.module.scss";

interface ISubscribeButton {
  priceId: string;
}

export function SubscribeButton({priceId}:ISubscribeButton) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
}
