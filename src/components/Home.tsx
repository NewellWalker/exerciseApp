import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    

    return (
        <> 
            <div className="header-home">
                <h1>Company name / generic header</h1>
                <h2>Let us help you find the right exerises for you!</h2>
                <img src="src\assets\AF.jfif" alt="" />
                <p>
                    We have a comprehive catalog of exercises ranging from compund movements to steady
                    cardio and everything in between! You can search by exercise name, muscle group, or workout type (e.g. cardio, resistance training/weight lifting).
                    Once you find the movement you want, add it to your custom workout sheet. 
                </p>
                <br />
                {/* this will be an interactive "pop up as they scroll" feature once they scroll down far enough */}
                <h2>Not sure where to start?</h2>
                <p>
                    Head over to the "Learn" section to learn about anything related to exercising! There are blog posts from our favorite authors, exercise science papers, 
                    and anything else that will help you enjoy becoming healthier!
                </p>
                <img src="src\assets\turf.jfif" alt="" />
                <h2>Still a little unsure?</h2>
                <p>
                    We offer full coaching from our staff of certified coaches with experience coaching everyone from Olympic athletes to grandparents!
                    <br /> 
                    <Link to="/sign-up"><button>Sign up!</button></Link>
                </p>
            </div>
        </>
    );
}