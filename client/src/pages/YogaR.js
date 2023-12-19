import React from "react";
import {Typography} from "@mui/material";

const YogaR = ()=>{
    // const id = localStorage.getItem("userId");
    return(
        <>
            <Typography variant="h5" sx = {{fontFamily: 'Pacifico, cursive', margin:'30px 200px 30px 200px' }}>
                {/* {id} */}
                "Welcome to YogaFlow! Your Path to Wellness and Tranquility!
                Discover the transformative power of yoga at YogaFlow, where we invite you to embark on a journey towards holistic well-being. Immerse yourself in the numerous advantages that yoga has to offer, and experience a profound sense of balance and vitality in your life."
            </Typography>    

            <Typography variant="h5" sx={{fontFamily: 'Roboto, san-serif', margin:'30px 50px 10px 50px' }}>Why Yoga?</Typography>

            <Typography sx={{fontFamily: 'Roboto, san-serif', margin:'0px 50px 20px 50px', fontSize: '18px'}}>Yoga is more than just a physical practice; it's a lifestyle that promotes harmony of the mind, body, and spirit. Here at YogaFlow, we believe in harnessing the timeless benefits of yoga to enhance your overall health and foster a deeper connection with your inner self.</Typography>

            <Typography variant="h5" sx={{fontFamily: 'Roboto, san-serif', margin:'30px 50px 10px 50px' }}>Registration Requirements:</Typography>
            <Typography sx={{fontFamily: 'Roboto, san-serif', margin:'0px 50px 20px 50px', fontSize: '18px'}}>
                <ul>
                    <li>Participants must be between the ages of 18 and 65.</li>
                    <li>No prior yoga experience is necessary. Our classes are designed for all skill levels.</li>
                    <li>Embrace the opportunity to foster a healthier, more balanced life worth just 500.</li>
                </ul>    
            </Typography>   
        </>
    )
}

export default YogaR;
