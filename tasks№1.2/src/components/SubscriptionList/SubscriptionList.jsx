import { useState } from "react"
import styles from "./SubscriptionList.module.css"
const SubscriptionList = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [newSubscription, setNewSubscription] = useState('');


  const addSubscription = () => {
    if (newSubscription.trim()) {
      setSubscriptions([...subscriptions, newSubscription]);
      setNewSubscription('');
    }
  };
  const removeSubscription = (indexToRemove) => {
    setSubscriptions(subscriptions.filter((item, index) => index !== indexToRemove));
  };

  return (
    <div className={styles.card}>
      <input
        type="text"
        value={newSubscription}
        onChange={(e) => setNewSubscription(e.target.value)}
        placeholder="Добавить подписку"
      />
      <button onClick={addSubscription}>Добавить</button>

      <ul>
        {subscriptions.map((subscription, index) => (
          <li key={index}>
            {subscription}{' '}
            <button onClick={() => removeSubscription(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
