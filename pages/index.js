import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>


        <h3 align="center"><em>Introduce yourself</em></h3>

    
      <p align="justify">Hi my name is Lawrence Manuel M. Baluyut, 20 years old, currently studying BS Information Technology at the University of the Assumption. My hobbies are video games, working out, cooking, fashion and reading.My music taste is basically almost anything of the category of music, as long as it pleases my ears i'll be listening to it. My favorite food is Curry Katsu. Other things i can tell you about myself, is that i am kind, hard working, responsible and my willingness to my dedication to be a future IT Professional.</p>


<br></br>

<h3 align="center"><em>Why did you take up IT?</em></h3>
<p align="justify">I took up Information Technology because I am interested in technology and I wanted to know how do to contruct and build applications and systems just like the ones that I currently use in the internet, another reason also is that technology is the future as it continues to make our lives easier everyday.</p>

<br></br>

<h3 align="center"><em>What career do you see yourself exploring after graduation?</em></h3>
<p align="justify">I could visialize myself in the future that i'm working at Princess Cruises as an IT Speacialist. The reason why i could see myself working in one is because i get to experience what it is like to be an IT in a cruise ship.</p>

<br></br>

<h3 align="center"><em>What do you expect to learn in this subject?</em></h3>
<p align="justify">I expect to learn about how to design a system and how components should interact with each other, for example like on how to properly code and design a website in the most sufficient and pleasing way. I also expect on how i would properly code using NextJS. </p>
    
<br></br>

<h3 align="center"><em>What topics you want to be discussed in this subject?</em></h3>
<p align="justify">The topics i expect to learn in this subject are about System integration and architecture, like NextJS, HTML, JavaScript, CSS. Essentially how to build a proper fully functional website which i am curious to learn. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}