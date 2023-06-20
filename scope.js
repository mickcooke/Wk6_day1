// var name = 'Randolph';
// var secretsFunction = function (){
//     var pinCode = [0,0,0,0];
//     console.log('name inside secretsFunction:', name);
// }

// secretsFunction()
// console.log('name outside secretsFunction:', name);

var filterNamesByFirstLetter = function(names, letter){
    var filteredNames = [];
    for (var name of names){
        if (name[0] === letter){
            filteredNames.push(name)
        }
    }
    console.log('name after loop:', name);
    return filteredNames;
}

var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
var filteredStudents = filterNamesByFirstLetter(students, 'A');
console.log('filteredStudents:', filteredStudents);
