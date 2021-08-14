import styles from './HomePage.module.css';


const HomePage = () => {
  return(
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Design Challenge project</h1>
      </div>
      <div className={styles.content}>
        <h1>Description</h1>
        <div className={styles.project_description}>
          <p>React project that shows reusable web components (Button / Input) and presented in different ways.  This project is a challenge formulated on the DevChallenges website and was developed following the challenge guidelines. To see the details of the challenge, please visit the following links:
          </p>
          <ul>
            <li>
            <a href={'https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY'}>Button Challenge</a>
            </li>
            <li>
            <a href={'https://devchallenges.io/challenges/TSqutYM4c5WtluM7QzGp'}>Input Challenge</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
          <p>This project was created by: <a href={'https://github.com/andressalazard'}>andressalazard</a></p>
        </div>
    </div>
  )
}

export default HomePage;