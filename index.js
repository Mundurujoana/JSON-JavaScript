// JSON Data
// JSON data consists of key/value pairs similar to JavaScript object properties.
//  The key and values are written in double quotes separated by a colon :

//JSON Data
// "name": "joana"

// JSON Object
// The JSON object is written inside curly braces { }. 
// JSON objects can contain multiple key/value pairs. For example,
// {"name": "joana", "age": "30"}

// JSON Array
// JSON array is written inside square brackets [ ]. For example,
// ['rice', 'beans','potas']

// {
//     {"name": "joana", "age": "30"}
//     {'fullName':'sarah', 'age':'45'}
// }

//JSON Object
const data = {
    'studentName':"Martha",
    'age' : '30',
    'hobby' : {
        "reading" : true,
        "gaming" : false,
        "sport" : "football"
    },
    'class':[
        "JavaScript", "HTML", "CSS"
    ]
};


//// accessing JSON object
console.log(data.studentName);
console.log(data["age"]);
console.log(data.hobby);
console.log(data.hobby.reading);
console.log(data.class);
console.log(data.class[1]);


// Converting JSON to JavaScript Object
const obj = JSON.stringify(data);
// accessing the data
console.log(obj);