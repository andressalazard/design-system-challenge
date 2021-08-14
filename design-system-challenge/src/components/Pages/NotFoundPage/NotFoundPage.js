import styles from './NotFoundPage.module.css'
import scarecrow from '../../../images/Scarecrow.png';

const NotFoundPage = () => {
  return(
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>404 NOT FOUND</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.not_found_image}>
          <img src={scarecrow} alt={'scarecrow'}/>
        </div>
        <div className={styles.not_found_message}>
          <div className={styles.message_heading}>
            <h1>I have bad news for you!</h1>
          </div>
          <div className={styles.message_content}>
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NotFoundPage;