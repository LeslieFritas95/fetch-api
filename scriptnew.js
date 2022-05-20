
const responseCallBack = (response) => {
    return  response.json();
}

const deleteCallback = (json) => {
  console.log(json)
  initApp();
}

const deleteTeacher = (id)=>{
  const deleteUrl = 'https://62877c5ae9494df61b3a03c2.mockapi.io/teachers/' + id;
  const fetchConf = {
    method: 'delete'
  }
  fetch(deleteUrl, fetchConf)
  .then(responseCallBack)
  .then(deleteCallback);
}


function cardTeacher(teacher){
  
  const container = document.createElement('div');
  container.classList.add('teacher-card');
    
  const image = document.createElement('img');
  image.src = teacher.avatar;
  image.classList.add('avatar-image');
  container.appendChild(image);

 
  const createTextSpan = document.createElement('span');
  createTextSpan.classList.add('text');
  createTextSpan.innerHTML= '<b>Name: </b>'+teacher.name+'<br>'+'<b>Surname: </b>'+ teacher.surname +'<br>'+'<b>gender: </b>' + teacher.gender;

  container.appendChild(createTextSpan);

  const containerButton = document.createElement('div');
  containerButton.classList.add('button1')
  const button = document.createElement('button');
  const buttonText = document.createTextNode('Elimina');
  button.onclick = () => deleteTeacher(teacher.id) 
  button.appendChild(buttonText);
  containerButton.appendChild(button);
  container.appendChild(containerButton);
  return container
}

  //4)
function displayTeachers(arrayOfTeachers){
    document.body.innerHTML = '';
  
    for (let i = 0; i < arrayOfTeachers.length; i++) {
      const teacher = arrayOfTeachers[i]
     
      const card = cardTeacher(teacher)

      document.body.appendChild(card)
  }
 
}
 
  

const convertResultInArrayOfTeachers = (result) => result.map(obj => Teachers.fromObj(obj));


const resultCallback = (result) => displayTeachers(convertResultInArrayOfTeachers(result));


const catchError = (error) => console.log(error);

//1) 
const initApp = () => fetch('https://62877c5ae9494df61b3a03c2.mockapi.io/teachers')
                      .then(responseCallBack)
                      .then(resultCallback)
                      .catch(catchError);

initApp();





