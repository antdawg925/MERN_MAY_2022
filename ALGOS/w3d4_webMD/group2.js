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
        treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
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
    let output = [];
    let count = 0;
    for (let i = 0; i < meds.length; i++) {
        // console.log(meds[i].treatableSymptoms)
        for (let j = 0; j < meds[i].treatableSymptoms.length; j++) {
            if (meds[i].treatableSymptoms[j] === ailments[j]) {
                // console.log(meds[i].treatableSymptoms);
                output.push(meds[i].name);
                
            }
        }
            
        }
        let mostFrequent = 1;
        let m =0
        let item;
        for (let k=0; k<output.length; k++) {
            for (let h=k; h<output.length; h++){
                if (output[k] === output[h])
                    m++;
                    if (mostFrequent<m){
                        mostFrequent=m;
                        item = output[k];
                    }

                } m=0;
            
        
        } return item;

    }


// console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
// console.log(webMD(["existential dread"], medications));
