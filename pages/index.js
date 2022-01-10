// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
// import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
// import getLatestRepos from "@lib/getLatestRepos";
// import userData from "@constants/data";


import { Parallax } from 'react-parallax';

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Grégoire Renaldo - Full stack Web Developer"
      description="Portfolio mettant en avant les derniers projets sur lesquels j'ai travaillé"
    >
    {/* <Parallax  bgImage="algochurn.png" bgImageAlt="the cat" strength={500}> */}
      <Hero />
      <FavouriteProjects />
      {/* </Parallax> */}
      {/* <LatestCode repositories={repositories} /> */}
    </ContainerBlock>
  );
}

// export const getServerSideProps = async () => {
//   console.log(process.env.GITHUB_AUTH_TOKEN);
//   let token = process.env.GITHUB_AUTH_TOKEN;

//   const repositories = await getLatestRepos(userData, token);
//   // console.log("REPOSITORIES", repositories);

//   return {
//     props: {
//       repositories,
//     },
//   };
// };
