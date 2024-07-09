import React from 'react'
import Button from './Button.jsx'
import './Section2.css'
const Section2 = () => {
  return (
    <div className="section2">
        <div className="main">
            <h1>Think Health. Think Massage</h1>
            <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appountement with us, please call us at 987-654-3210 today!</p>
            <div className="buttons">
                <Button title="LEARN MORE ABOUT US"/>
                <Button title="CONTACT US TODAY"/>
            </div>
        </div>
    </div>
  )
}

export default Section2