import React from 'react';
import "./Description.css";
import Bottom from '../componets/Bottom';
import Contact from '../componets/Contact';

function Description() {
    return (
        <div>
            <div>
                <h1>About</h1>
                <p>
                Embark on an unforgettable 5-day adventure that promises a perfect blend of exploration, culture, and relaxation. On Day 1, arrive at your destination and check into your hotel, taking a moment to unwind after your journey. In the afternoon, join a guided city tour that showcases the area’s key landmarks, vibrant neighborhoods, and rich history. Enjoy a welcome dinner at a local restaurant, where you can savor traditional dishes that highlight the region's unique culinary heritage, setting the tone for your exciting trip ahead.

On Day 2, immerse yourself in nature with a visit to a nearby national park or nature reserve. Spend the day hiking through lush trails, where you’ll encounter diverse wildlife and breathtaking scenery. Pack a picnic lunch to enjoy in a picturesque spot, allowing you to fully appreciate the tranquility of your surroundings. After a day filled with adventure, return to your hotel in the evening, where you can relax, perhaps indulging in a soothing spa treatment or enjoying a casual dinner at a nearby eatery.

Day 3 is dedicated to cultural immersion. Start with visits to local museums and art galleries that tell the story of the region’s heritage. Engage in a hands-on workshop, such as a cooking class or artisan craft session, to gain a deeper understanding of the local way of life. In the evening, attend a cultural performance featuring traditional music or dance, providing an authentic taste of the local culture and leaving you with lasting memories of your experience.

For thrill-seekers, Day 4 offers exhilarating activities tailored to your interests, whether it's zip-lining through treetops, surfing on stunning beaches, or snorkeling in vibrant coral reefs. Spend the day soaking up the excitement and taking in breathtaking views from your adventures. As the sun sets, enjoy a beachfront dinner where you can unwind and reflect on the day’s exhilarating experiences while listening to the soothing sounds of the waves.

On your final day, take a leisurely approach to savor your last moments at this remarkable destination. Enjoy breakfast at a charming local café, where you can soak in the atmosphere and perhaps chat with locals. If time permits, explore local markets for unique souvenirs or visit any remaining attractions on your list. Finally, check out of your hotel and head to the airport, cherishing the unforgettable memories you’ve created throughout your journey, enriched by the beauty and culture of your destination.
                </p>

                 <div className='doc'>
                 <b>
                    <h2><b>REQUIRED DOCUMENTS </b></h2>
                    <ul> aadhar card </ul>
                    <ul> pan card </ul>
                    <ul> boarding pass </ul>
                </b>
                 </div>
                <div className='pricing'>


                <><h1>price</h1></>


                <div className='pricing-sub'>
                        
                        <div>
                            <h1>premium </h1>
                            
                            <p>
                            <li>  The standard chunk of Lorem Ipsum </li>
                            <li>  de Finibus Bonorum et Malorum </li>
                            <li>  Lorem ipsum dolor sit amet </li>
                            </p>
                            
                        </div>
    
    
                        <div>
                            <h1>affordable </h1>
                            <p>
                            <li>  The standard chunk of Lorem Ipsum </li>
                            <li>  de Finibus Bonorum et Malorum </li>
                            <li>  Lorem ipsum dolor sit amet </li>
                            </p>
                        </div>
    
                        <div>
                            <h1>cost effictive </h1>
                            <p>
                            <li>  The standard chunk of Lorem Ipsum </li>
                            <li>  de Finibus Bonorum et Malorum </li>
                            <li>  Lorem ipsum dolor sit amet </li>
                            </p>
                        </div>
    
                     </div>
                </div>
                
                
                    

                
            </div>

            <Contact/>
            <Bottom/>
        </div>
    );
}

export default Description