import React, {useState} from 'react'
import './Home.scss'
import Quiz from './Quiz'
import Test from './Test'
import Three from './Three'

const Home = () => {
    const [activeTab, setActiveTab]  =useState('quiz')

    const handleActiveTabHandler=(value)=> {
        setActiveTab(value)
    }
    return (
        <div className='container'>
            <div className='sidebar'>
                <div className='nameContainer'>
                    <span>Name here</span>
                </div>
                <div className='tabContent'>
                    <button onClick={()=> handleActiveTabHandler('quiz')}>Quiz</button>
                    <button onClick={()=> handleActiveTabHandler('test')}>Test</button>
                    <button onClick={()=> handleActiveTabHandler('three')}>Three</button>
                </div>
            </div>
            <div className='content' >
                {activeTab === 'quiz' && <Quiz />}
                {activeTab === 'test' && <Test />}
                {activeTab === 'three' && <Three />}

            </div>
        </div>
    )
}

export default Home