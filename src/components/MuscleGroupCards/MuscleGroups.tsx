// import MuscleGroupCard from './MuscleGroupCards/MuscleGroupCard'

export default function MuscleGroups() {
    // seachbar with integrated drop down menu 
    // landing page lists all things broken up into muscle groups
    // good picture of muscle groups next to h2 tags?
    // gifs or videos? very least images
    // use less scientific terms to be more accessable
    // break it up with multiple tags 
        // types of movement (ex. lengthening hamstring vs contraction, presses vs raises for shoulders)
        // primary movers
        // secondary movers
        // any others that I consider with exercise selection?
    // how do i make the "tags" at the bottom visible and clickable
    // make similar tags the same color in CSS
    
    return (
        <div>
            <MuscleGroupCard />
            <h1>Resistance Movements</h1>
            <p>seconday movers but not that term unless it's intuitive?</p>
            <div
                className="resistanceMovement"
            >
                <h2>Neck</h2>
                <h2>Traps</h2>
                <h2>Chest</h2>
                {/* do I need to list "chest for each?" */}
                    <h3>Upper chest</h3>
                        <h3>Incline fly</h3>
                        <h3>Incline barbell bench press</h3>
                        <h3>Incline dumbell bench press</h3>
                    <h3>Lower chest</h3>
                    <h3>Inner chest</h3>
                <h2>Shoulders</h2>
                    <h3>Front delt</h3>
                    <h3>Side delt</h3>
                    <h3>Rear delt</h3>
                <h2>Triceps</h2>
                    <h3>long thin bit on the side</h3>
                    <h3>meaty part on back of arm</h3>
                    <h3>part on inner arm?</h3>
                <h2>Biceps</h2>
                    <h3>Long head (what is it?)</h3>
                    <h3>Short head (what is it?)</h3>
                    <h3>Biceps brachia (spelled right?) (helps make your arm look thicker)</h3>
                <h2>Forearms</h2>
                <h2>Lats</h2>
                    <h3>Width</h3>
                    <h3>Thickness</h3>
                <h2>Lower back</h2>
                <h2>Abs</h2>
                    <h3>"six pack abs" (what are they?)</h3>
                    <h3>Lower abs (Adonis muscles)</h3>
                    <h3>Obliques (side abs)</h3>
                 {/* there is a better way to say that */}
                <h2>Psoas (connects upper body to lower)</h2> 
                <h2>Hip flexors</h2>
                <h2>Glutes</h2>
                    <h3>what are the parts of the glutes</h3>
                <h2>Adductors</h2>
                <h2>Abductors</h2>
                <h2>Quads</h2>
                    <h3>Side quad (what is it?)</h3>
                    <h3>Tear drop</h3>
                    <h3>Middle part</h3>
                <h2>Hamstrings</h2>
                    <h3>Belly?</h3>
                    <h3>Are there any others</h3>
                <h2>Calves</h2>
                    <h3>Any others?</h3>
                <h2>Tibialous?</h2>
            </div>
        </div>
    );
}