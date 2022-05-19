function webMD(ailments, meds) { 
    let scores = [] //this array will keep track of how many symptoms each med matches
    let highscore = 0 //this will track the highest amount of matches
    let output = [] //we will push our highest matching meds here

    for ( let i = 0; i < meds.length; i++){ //go through our meds
        let med = meds[i] //this med
        let oneScore = 0; //initialize a score for this med
        for (let symptom of med.treatableSymptoms){ //loop through symptoms this med treats
            if (ailments.includes(symptom)){ //if the symptom is one of our ailments
                oneScore++ //increase the score
            }
        }
        scores[i] = oneScore //store the score for this index in its corresponding index in scores arr 
        highscore = Math.max(oneScore,highscore) //check/update highscore
    }

    for (let i = 0; i < scores.length; i++){ //loop through our scores
        if (scores[i] == highscore){
            output.push(meds[i].name) // push the names of the meds that we scored the highest
        }
    }
    return output //all done!
}
