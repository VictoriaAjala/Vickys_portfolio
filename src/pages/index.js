import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import ProfilePic from "../../public/images/profile/v3.png";
import AnimatedText from '@/components/AnimatedText';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={ProfilePic} alt="CodeBucks" className="w-full h-auto" />
            </div>
            <div className='1/2'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl' />
              <p>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
