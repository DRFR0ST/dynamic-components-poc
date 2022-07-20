import { useTheme } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import LinkTile from '../components/LinkTile'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
 const theme = useTheme();
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> in CodeSandbox!
        </h1>
        <p>Showcasing dynamic components</p>

        <div className={styles.grid}>
          
          <LinkTile 
            title="Documentation" 
            description="Find in-depth information about Next.js features and API." 
            url="https://nextjs.org/docs" />
            
          <LinkTile 
            title="Learn" 
            description="Learn about Next.js in an interactive course with quizzes!" 
            url="https://nextjs.org/learn"
            
            // Include/override child components.
            props={{
                title: { color: "secondary", style: { fontSize: "2rem" } },
                description: { style: { fontSize: "0.8rem" } },
                icon: { children: "test" }
            }} 
            // Override root component style.
            sx={{ 
                borderRadius: "4px",
                borderWidth: "4px",
                transition: "all 255ms ease !important",
                "&:hover, &:active, &:focus": { color: theme.palette.secondary.main, borderColor: theme.palette.secondary.light } 
            }} />
        </div>
      </main>
    </div>
  )
}

export default Home
