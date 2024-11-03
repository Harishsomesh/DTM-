import Pagination from "./pagnination";
import { useState } from "react";
import x1 from "../images/x5.jpeg";
import x2 from "../images/x2.jpeg";
import x4 from "../images/x4.jpeg";
import x5 from "../images/x6.jpeg";
import x6 from "../images/x7.jpeg";
import x7 from "../images/x8.jpeg";
import x8 from "../images/x9.jpeg";
import "./Home.css"
import Contact from "../componets/Contact";
import Bottom from "../componets/Bottom";




function Home() { 
    
    const [currentPage, setCurrentPage] = useState(1);
    const [image,setImage]=useState();
    const totalPages = 10; 
    const images=[x1,x2,x7,x4,x5,x6,x7,x8,x4,x1];
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
      setImage(images[currentPage-1])
      
    };
    
  
    return (
      <div className="App">
        <h1 style={{color:"white"}}>
         Tourbuddy!!!
        </h1>
        <img src={image} alt="hello"></img>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <h1>about us </h1>
          <p>
            <h2>Discover the World with</h2>
            At TourBuddy, we believe that travel is not just about reaching a destination;
            it's about the journey, the experiences, and the memories that come along the way.
            Founded in May 2023, our vision is to transform the way people explore the world. 
            We recognize that each traveler has unique preferences and aspirations, and our mission
            is to empower you with the tools and insights needed to make your adventures truly unforgettable.

            Traveling opens up a realm of possibilities—new cultures to experience, landscapes to explore, 
            and connections to be made. However, planning a trip can often feel overwhelming. With countless
            destinations, activities, and logistical details to consider, it's easy to get lost in the details. 
            That’s where TourBuddy comes in. We provide a comprehensive platform that simplifies travel planning, 
            making it accessible and enjoyable for everyone, whether you're a solo traveler, a family on vacation, 
            or a couple seeking a romantic getaway.

            Our team is comprised of passionate explorers who understand the joys and challenges of travel.
             We’ve experienced the thrill of discovering hidden gems off the beaten path, tasted culinary delights 
             that define a region, and navigated bustling cities and serene landscapes. We know firsthand the 
             questions and concerns that arise during travel planning, and we’re dedicated to addressing them.
              TourBuddy is designed to be your go-to resource, providing reliable information and inspiration to h
              elp you embark on your next adventure with confidence.

            <h2>Who We Are</h2>
            TourBuddy is a dynamic team of travel enthusiasts, tech experts, and cultural aficionados, each bringing a wealth of knowledge and experience to the table. Our founders share a common passion: a love for travel and a desire to help others explore the world more meaningfully. This collective enthusiasm drives our commitment to creating a platform that not only serves practical needs but also inspires wanderlust.

Our diverse backgrounds enrich our understanding of the travel industry. We have team members who have worked in hospitality, tourism, and travel journalism, ensuring that our content is not only accurate but also engaging and informative. We understand the nuances of different cultures, the significance of local customs, and the importance of sustainability in travel. With this comprehensive perspective, we craft experiences that are both respectful of local communities and beneficial to travelers.

At TourBuddy, we prioritize collaboration and innovation. Our tech team is dedicated to developing a user-friendly app that incorporates the latest advancements in technology, ensuring that you have the best tools at your fingertips. We continuously gather feedback from our users to improve our platform, making it as effective and enjoyable as possible.

We also value community engagement. Through our app, we aim to create a vibrant network of travelers who share their experiences and insights. We believe that travel is best experienced when it’s shared, and our platform encourages interaction among users. From sharing itineraries to posting travel tips and recommendations, our community is a treasure trove of knowledge waiting to be explored.
            <h2>What We Offer</h2>
            Personalized Recommendations: Our intelligent 
            algorithms analyze your preferences and interests to
            suggest the best destinations, attractions, and activities 
            tailored just for you.

            <li>      
                    Comprehensive Guides: Access detailed guides that cover everything from local culture and cuisine to must-see landmarks and hidden gems.
            </li>
            <li>   
            User-Friendly Interface: Our app is designed to be intuitive and easy to navigate, ensuring you can find what you need quickly and efficiently. 
            </li>
            <li>
            Community Insights: Connect with fellow travelers, share experiences, and get tips from those who have been there before.

            </li>
          </p>




          <div className="per-mid">
              <h1>Technology We use</h1>

              <div className="mid">

            


<div className="description">
  <h1>TripIt </h1>
  <p>

  This app organizes travel itineraries in one place, 
  allowing users to forward confirmation emails for flights, 
  hotels, and activities. It provides a comprehensive view of travel 
  plans and can send alerts for flight changes

  stands out as an organization powerhouse for travelers. By allowing users to forward confirmation emails for flights, hotels, car rentals, and activities, it automatically compiles a comprehensive itinerary. This eliminates the hassle of sifting through multiple emails and documents. Additionally, TripIt provides real-time alerts for flight changes, delays, and cancellations, ensuring travelers are always informed and can adjust their plans accordingly. The app can sync with personal calendars, making it easy to see travel plans alongside other commitments. For group travel, TripIt offers itinerary sharing, allowing friends or family to stay on the same page, which simplifies collaborative planning.
    
  </p>
</div>


<div className="description">

  <h1>Google Maps </h1>
  <p>
  A staple for travelers, Google Maps not only offers 
  navigation but also features local business information,
   reviews, and popular attractions. It helps users discover 
   new places and find the best routes.
   For group travel, TripIt offers itinerary sharing, allowing 
       friends or family to stay on the same page, which simplifies collaborative planning.
       Google Maps serves as a crucial navigation tool that goes far
        beyond basic directions. It provides users with accurate driving,
         walking, and public transit navigation, along with estimated travel
          times. Its robust local business listings help travelers discover restaurants,
           hotels, and attractions. 
           The Street View feature allows users to explore a location virtually, offering a preview 
           of what to expect before arrival. Furthermore, the "Discover" feature personalizes recommendations 
           for nearby attractions and activities based on user preferences, enriching the travel experience by
            making it easier to explore new places.



    
  </p>
</div>



<div className="description">
  <h1>Airbnb  </h1>
  <p>

  has transformed the travel landscape by expanding from a 
  platform for unique accommodations to a comprehensive travel experience provider.
   Users can choose from a diverse range of lodging options, including traditional homes, 
   luxury villas, and quirky stays like treehouses or castles. Beyond just finding a place to stay, 
   Airbnb allows travelers to book local experiences hosted by residents, such as guided tours, cooking
    classes, or adventure activities. This feature enables deeper engagement with the local culture, providing 
    insights and experiences that traditional tourism often overlooks. With its flexible search options and 
    detailed community reviews, Airbnb helps travelers make informed decisions that cater to their personal 
    preferences and budget.
  </p>
</div>


</div>
              

          </div>
       

        <div className="mid-1">
          <h1>HOW WE OPERATE</h1>
          <p>
            At TourBuddy, our operations are designed to create a seamless and enriching travel 
            experience for our users. We focus on a user-centric approach, integrating technology 
            with personalized service to ensure that every traveler feels supported and empowered in 
            their journey. Here’s a detailed overview of how we operate
          </p>

        </div>

        <Contact/>
        <Bottom/>
      </div>
    
);
}
export default Home;