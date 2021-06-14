import styles from './scss/Navigation-module.scss'

const Navigation = () => {
    return(
        <>
            <ul className={styles.navigation_ul}>
                <li className={styles.navigation_li}><strong>Hacker News</strong></li>
                <li><a href="www.google.com">new</a></li>
                |
                <li><a href="www.google.com">past</a></li>
                |
                <li><a href="www.google.com">comments</a></li>
                |
                <li><a href="www.google.com">ask</a></li>
                |
                <li><a href="www.google.com">show</a></li>
                |
                <li><a href="www.google.com">jobs</a></li>
                |
                <li><a href="www.google.com">submit</a></li>
                
                <li><a href="www.google.com">login</a></li>
                
            </ul>
        </>
    )
}

export default Navigation