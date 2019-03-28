import React from 'react'

const BusinessCard = ({cityCode, email, job, location, name, phone, web})=>(
        <article className="businessCard col col6">
          <h1 className="title-main">Request your business card</h1>
          <div className="businessCard-cards">
            <div className="businessCard-cardBack" />
            <div className="businessCard-cardFront">
              <div>
                <p className="businessCard-cardFront-title">{name}</p>
                <p className="businessCard-cardFront-subtitle">{job}</p>
              </div>
              <div className="businessCard-cardFront-bottom">
                <p className="businessCard-icon-phone">{`${cityCode} ${phone}`}</p>
                <p className="businessCard-icon-email">{email}</p>
                <p className="businessCard-icon-website">{web}</p>
                <p className="businessCard-icon-address">{location}</p>
              </div>
            </div>
          </div>
        </article>
)

export default BusinessCard