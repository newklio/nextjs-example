import type { NextPage } from 'next'
import styles from '../../styles/main.module.scss';
const Result: NextPage = () => {
  return  (
		<>
    <div className={styles.topBar}>
			<h1>This is Result Page</h1>
    </div>
			<div className={styles.mainPage}>
				<div className={styles.loginBox}>
					<div>
						<h3>Username</h3>
						<input type="test" name="username" id="uname" />
						<h3>Password</h3>
						<input type="password" name="pass" id="pass" />
						<br />
						<button>Submit</button>
					</div>
				</div>
			</div>
		</>

	)
}

export default Result
