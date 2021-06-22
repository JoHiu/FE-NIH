import React from 'react'
import Fade from 'react-reveal/Fade'

import { InputText } from 'elements/Form'

export default function BookingInformation(props) {
    const { data, ItemDetails, checkout } = props;
    return (
        <Fade>
        <div className = "container text-green" style = {{marginBottom: 30}}>
            <div className = "row justify-content-center align-items-center text-green">
                <div className = "col-5 border-right py-5" style = {{paddingRight: 80}}>
                    <Fade delay = {300}>
                        <div className = "card">
                            <figure className = "img-wrapper" style = {{ height: 270}}>
                                <img 
                                    className = "img-cover"
                                    src = {`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                                    alt = {ItemDetails.title} />
                            </figure>

                            <div className = "row align-items-center">
                                <div className = "col">
                                    <div className = "meta-wrapper">
                                        <h5 class = "font-weight-bold">{ItemDetails.title}</h5>
                                        <span className = "text-yellow">
                                            {ItemDetails.city}, {ItemDetails.country}
                                        </span>
                                    </div>
                                </div>

                                <div className = "col-auto font-weight-bold">
                                    <span>
                                        ${+checkout.duration * ItemDetails.price} USD 
                                        <span className = "text-yellow font-weight-light"> per </span>
                                        {checkout.duration} {ItemDetails.unit}
                                        {+checkout.duration > 1 ? "s" : ""}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className = "col-5 py-5" style = {{ paddingLeft: 80}}>
                    <Fade delay = {600}>
                        <label htmlFor = "firstName">First Name</label>
                        <InputText
                            id = "firstName"
                            name = "firstName"
                            value = {data.firstName}
                            onChange = {props.onChange} />

                        <label htmlFor = "lastName">Last Name</label>
                        <InputText
                            id = "lastName"
                            name = "lastName"
                            value = {data.lastName}
                            onChange = {props.onChange} />

                        <label htmlFor = "email">Email Address</label>
                        <InputText
                            id = "email"
                            name = "email"
                            type = "email"
                            value = {data.email}
                            onChange = {props.onChange} />

                        <label htmlFor = "phone">Phone Number</label>
                        <InputText
                            id = "phone"
                            name = "phone"
                            type = "tel"
                            value = {data.phone}
                            onChange = {props.onChange} />
                    </Fade>
                </div>
            </div>
        </div>
        </Fade>
    )
}
