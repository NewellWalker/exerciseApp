

// https://stackoverflow.com/questions/45670705/iterate-over-interface-properties-in-typescript

// top level muscle object
// export const MuscleObj = {
//     // chest, back, etc.
//     muscleGroup: "",

//     // upper pec, lower pec, etc.
//     subGroup: "",

//     movements: ,
//     // stretch, contraction
//     muscleAction: "",
//     // image: ;
//   }

// type MuscleObj = typeof MuscleObj;
// const card: MuscleObj<Object> = Object.keys(MuscleObj.map(key))
// interface for secondary movers for muscle interface

// interface for tertiary tags (plyo, explosion, etc. ) for muscle interface

// form validation template
// type UserSubmitForm = {
//     firstName: string,
//     goalsChecklist: boolean, // will set to false by default and if no boxes are checked, true if any are checked
//     lastName: string,
//     email: string,
//     phone?: Number
// }