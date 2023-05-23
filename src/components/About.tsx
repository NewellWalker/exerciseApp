// will need to change all the copy

export default function About() {
    return (
        <div>
            <div
                className="missionStatement"
            >
                <h2>What we do</h2>
                <h3>
                    Help find the wokrout that works for you  
                </h3>
                <p>
                    Through the muscle groups, learn, and workout generator section,
                    you have everything you need to be your own personal trainer. I 
                    will change this later....
                </p>
                <h3>
                    How do we make working out more accessable 
                    and meaningful?
                </h3>
                <p>
                    Everyone should be able to step into the gym feeling
                    confident in what they are about to do. Knowing how
                    to perform an exercise is only part of the battle.
                    Real conviction comes from knowing WHY and HOW 
                    their workout benefits their body. We aim to provide
                    easy to understand articles.
                </p>
            </div>
            <div
                className="staff"
                style={{
                display: "flex",
                padding: "5px"
            }}
            >
                <img
                    src="src\assets\Picture.png"
                    style={{
                        height: "500px",
                        paddingRight: "5px",
                        borderRadius: "20%"
                    }}
                />
                <div
                    style={{
                        textAlign: "left"
                    }}
                >
                    <h3>Walker Newell</h3>
                    <p
                        style={{
                            fontSize: "14px"
                        }}
                    >
                        Walker graduated from the Air Force Academy where
                        he compete on the track and field team as a decathlete.
                        He also held the track teams Olympic weight lifting
                        clean record. He received his Certified Strength and 
                        Conditioning Specialist certificate in 2022. While 
                        being a personal trainer, Walker has helped coach 
                        Olypmians, high level colliegate athletes, weekend 
                        athletes, and people who just want to live up to 
                        their potential (read: what their dog thinks of them).
                        If you have any questions please feel free to reach out!
                    </p>
                </div>
            </div>
            <div
                className="offerings"
                style={{
                    display: "inline-flex"
                }}
            >
                <div
                style={{
                    margin: "5px",
                    padding: "5px"
                }}
                >
                    <h2>Abosolute no obligation.</h2>
                    <p>
                        We offer the articles, comprehensive exercise list, and 
                        workout generator 100% free.
                    </p>
                </div>
                <div
                style={{
                    margin: "5px",
                    padding: "5px"
                }}
                >
                    <h2>Personal Training</h2>
                    <p>
                        If you don't quite feel comfortable, we offer personal training
                        for all levels of fitness. 
                    </p>
                </div>
            </div>
        </div>
    );
}