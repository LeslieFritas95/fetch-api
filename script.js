
fetch('https://62860d1af0e8f0bb7c0f4273.mockapi.io/students')
.then(responseCallBack)
.then(resultCallback)
.catch(manageError);


function responseCallBack(response){
  console.log('response',response);
  return response.json();
}

function manageError(error) {
  console.log(error)
}

function resultCallback(result){
  console.log('result', result);
  const array = convertResultInArrayOfStudents(result);
  console.log('array', array);
  displayStudents(result);
}

// function convertResultInArrayOfStudents(result) {
//   const arrayOfStudents = [];
//   for (const obj of result) {
//     const student = new Student(obj.id, obj.name, obj.surname, obj.dob, obj.avatar);
//     arrayOfStudents.push(student);
//   }
//   return arrayOfStudents;
// }

// function convertResultInArrayOfStudents(result) {
//   const arrayOfStudents = [];
//   for (const obj of result) {
//     const student = Student.fromObj(obj);
//     arrayOfStudents.push(student);
//   }
//   return arrayOfStudents;
// }

function convertResultInArrayOfStudents(result) {
  const arrayOfStudents = result.map(obj => student.fromObj(obj));
  return arrayOfStudents;
}

function displayStudents(arrayOfStudents){
  const arrayContainer = document.createElement('div');

  for (let i = 0; i < arrayOfStudents.length; i++) {
    const student = arrayOfStudents[i]
    const studentContainer = document.createElement('div');
    const span = document.createElement('span');
    const node = document.createTextNode(student.name + ' ' + student.surname);

    span.appendChild(node);
    studentContainer.appendChild(span);
    arrayContainer.appendChild(studentContainer);

  }

  document.body.appendChild(arrayContainer);

}






// fetch('./student_data.json').then(responseCallBack, manageError).then(resultCallback, manageError);

// fetch('./student-data.json').then(responseCallBack).then(resultCallback).catch(manageError);

// function responseCallBack(response){
//   console.log('response',response);
//   return response.text();
// }


// function resultCallback(result){
//   console.log('result', result);
// }

// function manageError(error){
//   console.log(error)
// }
// console.log('prima');

// fetch('./student-data.json').then((resp) => resp.json()).then((res) => console.log('risultato',res));

// setTimeout(logDopo, 0);

// setTimeout(logDopo, 10);

// setTimeout(logDopo, 100);

// setTimeout(logDopo, 1000)

// setTimeout(logDopo, 10000)




// function logDopo() {
//   console.log('dopo');
// }

// const ajax = new XMLHttpRequest()

// ajax.onreadystatechange = onreadystatechangeCallback

// ajax.open('get', './student-data.json');

// ajax.send()

// function onreadystatechangeCallback(){
//   if (this.readyState === 4) {
//     if(this.status === 200){
//       console.log(this.responseText)
//       const array = JSON.parse(this.responseText);
//       console.log(array);
//     } else {
//       console.log('server non raggiungibile')
//     }
//   }
// }