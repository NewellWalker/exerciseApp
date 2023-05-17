export default function Footer() {

    const onSubmit = (e:any) => {
        e.preventDefault();
    }

    return (
        <>
            <h3>footer break</h3>
            <h2>Have an exercise we are missing? Let us know!</h2>
            <form
                action="post"
                onSubmit={onSubmit}
                noValidate
            >
                <label htmlFor="exerciseInput">Exercise </label>
                <input 
                    type="text"
                    id="exerciseInput"
                    placeholder="What's the name and description"
                    size={25}
                    required
                />
                <br />
                <label htmlFor="email">How can we reach out make sure get it right? </label>
                <input
                    type="text"
                    id="email"
                    placeholder="Email address"
                />
                <input type="button" value="Submit" />
            </form>
        </>
    );
}