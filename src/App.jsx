import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import QualityFeatures from './components/QualityFeatures'
import CoreFeatures from './components/CoreFeatures'
import WhatsTheFunction from './components/WhatsTheFunction'
import PricingPlan from './components/PricingPlan'
import FreeTutorial from './components/FreeTutorial'
import FrequentQuestion from './components/FrequentQuestion'
import StartLearning from './components/StartLearning'
import Footer from './components/Footer'
import PopularDesigningCourse from './components/PopularDesigningCourse'

export default function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Header />
      <Banner />
      <QualityFeatures />
      <CoreFeatures />
      <PopularDesigningCourse />
      <WhatsTheFunction />
      <PricingPlan />
      <FreeTutorial />
      <FrequentQuestion />
      <StartLearning />
      <Footer/>
    </div>
  )
}
