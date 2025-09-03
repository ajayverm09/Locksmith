import React from 'react'
import HeroSection from '../Components/HomeHero'
import ServicesSection from '../Components/HomeServices'
import WelcomeSection from '../Components/HomeWelcome'
import ClientsSection from '../Components/HomeClients'
import TeamSection from '../Components/HomeTeam'
import CallBanner from '../Components/HomeCall'
import PricingTable from '../Components/HomePricing'
import NewsSection from '../Components/HomeNews'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection/>
      <ServicesSection/>
      <WelcomeSection/>
      <ClientsSection/>
      <TeamSection/>
      <CallBanner/>
      <PricingTable/>
      <NewsSection/>
    </div>
  )
}

export default Home
