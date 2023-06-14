// import { Link } from "react-router-dom";
// import MuscleGroups from '../MuscleGroups';
import './Home.module.css';
import Select from 'react-select';


export default function Home() {

    let upperLower = [
        {value: 'upper', label: 'Upper Body'},
        {value: 'lower', label: 'Lower Body'},
        {value: 'full', label: 'Full Body'}
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
        {value: 'upper', label: 'Pelvis'},
        {value: 'lower', label: 'Glutes'},
        {value: 'lower', label: 'Adductors'},
        {value: 'lower', label: 'Abductors'},
        {value: 'lower', label: 'Quads'},
        {value: 'lower', label: 'Hamstrings'},
        {value: 'lower', label: 'Calves'},
        {value:'lower', label: 'Tibualous'}
    ];

    let upperList = [
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
    ];

    let lowerList = [
        {value: 'lower', label: 'Glutes'},
        {value: 'lower', label: 'Adductors'},
        {value: 'lower', label: 'Abductors'},
        {value: 'lower', label: 'Quads'},
        {value: 'lower', label: 'Hamstrings'},
        {value: 'lower', label: 'Calves'},
        {value:'lower', label: 'Tibualous'}
    ];

    // let bodySection = props.selectProps

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
                    className='bodySectionSelector'
                    options={upperLower}
                    // onChange={bodySection = value}
                />
                <Select 
                    options={muscleGroupList} 
                    isMulti
                />
            </div>
        </>
    );
}