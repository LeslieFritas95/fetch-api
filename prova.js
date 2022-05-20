
const responseCallBack = (response) => {
    return  response.json();
}



const deleteCallback = (json) => {
    console.log(json)
    initApp();
  }

//4)
function displayTeachers(arrayOfTeachers){
    const container = document.createElement('div');
  
    for (let i = 0; i < arrayOfTeachers.length; i++) {
      const teacher = arrayOfTeachers[i]
      container.classList.add('teacher-card');
    
      const image = document.createElement('img');
      image.src = teacher.avatar;
      image.classList.add('avatar-image');
      container.appendChild(image);
    
      const createTextSpan = document.createElement('span');
      const createText = document.createTextNode('nome: ' + teacher.name + '  ' + teacher.surname);
      createTextSpan.appendChild(createText);
      container.appendChild(createTextSpan);

      const button = document.createElement('button');
      const buttonText = document.createTextNode('Elimina');
      button.onclick = () => deleteTeacher(id) 
      button.appendChild(buttonText);
      container.appendChild(button);

   
  }
  document.body.appendChild(container)
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





