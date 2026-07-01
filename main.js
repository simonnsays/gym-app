import Routine from "./scripts/Routine.js"
import Workout from "./scripts/Workout.js"
import { select } from "./util/util.js"
import { el } from "./util/util.js"
import { workouts } from "./data/workouts.js"


const userData = {
    name: 'John Darel',
    age: '24',
    routines: []
}

const init = () => {
    const newRoutine = confirm('Create New Routine?')

    if(newRoutine) {
        const routineName = prompt('Name your routine:')
        const routineDesc = prompt('Description')
        const newRoutine = new Routine(routineName, routineDesc)

        userData.routines.push(newRoutine)
        console.log('Routines:')
        console.log(userData.routines)

        setTimeout(() => {
            addWorkouts(newRoutine)
        }, 1000)
    } else {
        console.log('no')
        //display routines
    }
}

const addWorkouts = (routine) => {
    let addingWorkouts = confirm('Do You want to add workouts to this routine?') 

    while(addingWorkouts) {
        const chosenWorkout = workouts[Number(prompt(`choose your workout. 1 - Inclined Dumbell Press, 2 - Lat Pulldown, 3 - Barbell Squat`)) - 1]
        const newWorkout = new Workout(chosenWorkout.name, chosenWorkout.stats)
        routine.addWorkout(newWorkout)

        console.clear()
        console.log(routine)
        addingWorkouts = confirm('Do You want to add more workouts to this routine?') 
    }
}

const displayRoutines = () => {
    const body = select('body')

    const container = el('div')

    const header = el('h3', {text: 'Routines'})
    const ulist = el('ul')

    userData.routines.forEach(routine => ulist.appendChild(createRoutineBtn(routine)))
}

// init()