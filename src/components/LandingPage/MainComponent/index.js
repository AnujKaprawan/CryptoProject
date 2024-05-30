import React from 'react';
import './styles.css';
import Button from '../../Common/Button';
import iphone from '../../../assets/iphone.png';
import gradient from '../../../assets/gradient.png';

import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";


function MainComponent(){
    return <div className='flex-info'> 
        <div className='left-component'>
            <h1 className='track-crypto-heading'>Track Crypto</h1>
            <h1 className='real-time-heading'>Real Time.</h1>
            <p className='info-text'>
                Track crypto through a public api in real time. Visit the Dashbord to do so!
            </p>
            <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <a href="/dashboard">
            <Button text={"Dashboard"} />
          </a>
          <RWebShare
            data={{
              text: "CryptoDashboard made by Anuj Kaprawan using React JS.",
              url: "https://crypto-project.netlify.app",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <Button text={"Share App"} outlined={true} />
          </RWebShare>
        </motion.div>
        </div>
        <div className='phone-container'>
            <motion.img src={iphone} 
            className='iphone'
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
                type:'smooth',
                repeatType: 'mirror',
                duration: 2,
                repeat: Infinity,
            }}
            />
            <img src={gradient} className='gradient'/>
        </div>
    </div>;
}

export default MainComponent;