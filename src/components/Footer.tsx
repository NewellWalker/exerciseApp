export default function Footer() {
    return (
        <>
            <h2>Have an exercise we are missing? Let us know!</h2>
            <label htmlFor="exerciseInput">What is it? </label>
            <input type="text" id="exerciseInput" />
            <br />
            <label htmlFor="email">How can we reach out make sure get it right? </label>
            <input type="text" id="email" />
        </>
    );
}