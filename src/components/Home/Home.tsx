// import { Link } from "react-router-dom";
import MuscleGroups from '../MuscleGroups';
import './Home.module.css';
import Select from 'react-select';


export default function Home() {

    let upperLower = [
        {value: 'upperTop', label: 'Upper Body'},
        {value: 'lowerTop', label: 'Lower Body'}
    ]

    let muscleGroupList = [
        {value: 'upper', label: 'Neck'},
        {value: 'upper', label: 'Traps'},
        {value: 'upper', label: 'Chest'},
        {value: 'upper', label: 'Shoulders'},
        {value: 'upper', label: 'Ticeps'},
        {value: 'upper', label: 'Biceps'},
        {value: 'upper', label: 'Forearms'},
        {value: 'upper', label: 'Lats'},
        {value: 'upper', label: 'Lower Back'},
        {value: 'upper', label: 'Abs'},
        {value: 'upper', label: 'Pelvis'}
        {value: 'lower', label: 'Glutes'},
        {value: 'lower', label: 'Adductors'},
        {value: 'lower', label: 'Abductors'},
        {value: 'lower', label: 'Quads'},
        {value: 'lower', label: 'Hamstrings'},
        {value: 'lower', label: 'Calves'},
        {value:'lower', label: 'Tibualous'}
    ];

    // const filterOptions = (
    //     if ()
    // )

    // ACTION META :: onSelectResetsInput = false
    

    return (
        <> 
            <h2>This will be the main content where I select: </h2>
            <ul>
                <li>Muscle group(s)</li>
                <br />
                <li>Number of large compounds</li>
                <br />
                <li>Which accessories and seconday muscle groups</li>
                <br />
                <li>Abs / cardio and what for each if yes</li>
            </ul>
            <div className='muscleSelection'>
                <Select 
                    options={upperLower}
                />
                <Select options={muscleGroupList} />
            </div>
        </>
    );
}