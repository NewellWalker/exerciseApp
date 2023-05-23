// need to add form validation and working submit button
// https://www.bezkoder.com/react-hook-form-typescript/

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from 'yup';

export default function SignUp() {

    const onSubmit = (e:any) => {
        e.preventDefault();
    };

    // sign up form
    return (
        <form 
            onSubmit={onSubmit}
            noValidate
        >
            <label htmlFor="firstName">First name: </label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="What's your first name?"
                required
            />
            <br />
            <div className="goalsChecklist">
                <label htmlFor="goals">What are you goals? To...</label>
                <br />
                <label htmlFor="loseWeight">Lose weight </label>
                <input type="checkbox" name="loseWeight" id="loseWeight" />
                <br />
                <label htmlFor="gainMuscle">Gain muscle</label>
                <input type="checkbox" name="gainMuscle" id="gainMuscle" />
                <br />
                <label htmlFor="betterShape">Get in better shape </label>
                <input type="checkbox" name="betterShape" id="betterShape" />
                <br />
                <label htmlFor="getStronger">Get Stronger </label>
                <input type="checkbox" name="getStronger" id="getStronger" />
                <br />
                <label htmlFor="other">Other: </label>
                <input type="checkbox" name="other" id="other" />
                <input type="text" name="other" id="other" placeholder="What's your goal?" />
                <br />
            </div>
            <label htmlFor="lastName">Last name: </label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="What's your last name?"
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input 
                type="email"
                name="email"
                id="email"
                placeholder="What's your email?"
                required
            />
            <br />
            <label htmlFor="phone">Phone number (with area code): </label>
            <input
                type="text" 
                name="phone" 
                placeholder="What's your phone number? (optional)"
                size={29}
            />
            <br />
            <input type="button" value="Submit" onSubmit={onSubmit} />
        </form>
    );
}