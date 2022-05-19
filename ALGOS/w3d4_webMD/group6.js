/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null
function webMD(ailments, meds) {
    let symFreqObj = {};
    for(let med of meds){
        for(let ailment of ailments){
            if(med.treatableSymptoms.includes(ailment)){
                if(symFreqObj.hasOwnProperty(med.name)){
                    symFreqObj[med.name] += 1;
                } else {
                    symFreqObj[med.name] = 1;
                }
            }
        }
    }
    let results = [];
    let maxSym = 0;
    for(let name in symFreqObj){
        if(symFreqObj[name] > maxSym){
            results = [];
            results.push(name);
            maxSym = symFreqObj[name]
        } else if (symFreqObj[name] == maxSym){
            results.push(name);
        }
    }
    return results
}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));

