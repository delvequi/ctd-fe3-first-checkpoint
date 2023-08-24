import styles from './form.module.css';

export function Form({ form, toggleColorAddedStatus }) {
  return (
    <div className={styles.card}>
      <input type="checkbox" onClick={toggleColorAddedStatus} />
      <li>
        {form.isAdded ?
          (
            <del>
              {form.amount} {form.name}
            </del>
          ) :
          (
            `${form.amount} ${form.name}`
          )
        }
      </li>
    </div>
  )
}