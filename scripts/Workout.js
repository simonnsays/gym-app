class Workout {
    constructor(name, stats) {
        this.name = name

        if (stats.includes('reps')) {
            this.reps = 0
        }

        if (stats.includes('weight')) {
            this.weight = 0
        }
        
        this.weightUnit = 'kg'
    }

    editReps(amount) {
        if (!this.stats.reps)
        this.stats.reps = amount 
    }
}

export default Workout