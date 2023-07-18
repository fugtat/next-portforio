// app/page.js

import Link from 'next/link'
import Image from 'next/image'
import heroPic from '../public/images/index-hero.jpg'
import profilePic from '../public/images/profile.jpg'

export const metadata = {
  title: "ウッホウホウホハウス",
  description: "海苔巻きの一大生産地である纒向遺跡では、海苔巻きを今日も剥いています。"
}


const Index = () => {
  return (
    <>
    <div className="hero">
      <Image src={heroPic} alt="hero" />
      <div className="textContainer">
        <h1>I'm 蕎麦締頭 味楽</h1>
        <h3>春風とともに野の花の希望を刈り取る男</h3>
      </div>
    </div>
    <div className="container">
      <div className="profile">
        <div>
          <h2>緊張には弱い</h2>
          <p>栃の木の　瓢の爪の　針仕事　<br />高菜をつまみながら　踊らむ</p>
        </div>
        <div>
          <Image src={profilePic} alt="hero" />
        </div>
      </div>
      <div className='skills'>
        <h2>実績</h2>
        <div className='skillsContainer'>
          <div><img src="/images/javascript.svg" alt="javascript" /><span>JavaScript/10years</span></div>
          <div><img src="/images/react.svg" alt="react" /><span>react/1years</span></div>
          <div><img src="/images/gatsby.svg" alt="gatsby" /><span>Edokiriko/100years</span></div>
          <div><img src="/images/next.svg" alt="next" /><span>nmext/10years</span></div>
        </div>
      </div>
      <div className="ctaButton">
        <Link href="/contact">Make It Happen!</Link>
      </div>
    </div>
    </>
  )
}

export default Index