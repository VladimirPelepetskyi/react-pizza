import {FC} from 'react'
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        😕
        <br />
        Ничего на найдено
      </h1>
      <p className={styles.description}>К сожаления, данная странице отсутсвует в нашем интернет-магазине</p>
    </div>
  )
}
