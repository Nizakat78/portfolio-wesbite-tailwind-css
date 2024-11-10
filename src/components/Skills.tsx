import React from 'react'

const Skills = () => {
  return (
    <div  id ="Skills" className='container pt-32'>
    <div className="grid md:grid-cols-2 gap-20 items-center">
    <div>
    <h2 className="text-4xl md:text-5xl" data-aos="zoom-in"> Technologies I work with </h2>
    <p   className='text-gray-500 pt-2' data-aos="zoom-in">
    I specialize in blockchain technology and web development, focusing on token creation and smart contracts. With experience in launching presale tokens, I ensure secure transactions and compliance. Proficient in Solidity, TypeScript, and Twailwind CSS, I develop decentralized applications (dApps) that enhance user experience. Passionate about blockchain innovation, I aim to create practical solutions that drive the industry forward.
    </p>
    </div>    
    <div>
        <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
            <div className='space-y-2'>
                <h2 data-aos="zoom-in-left">Typescript</h2>
                <h2 data-aos="zoom-in-left">Solidity</h2>
                <h2 data-aos="zoom-in-left">Next.js</h2>
            </div>
            <div className='space-y-2'>
                <h2 data-aos="zoom-out-left">Twailwind CSS</h2>
                <h2 data-aos="zoom-out-left">HTML</h2>
                <h2 data-aos="zoom-out-left">React</h2>
            </div>


        </div>
    </div>
    </div>
      
    </div>
  )
  }

export default Skills
