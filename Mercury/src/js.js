    let regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let error =document.getElementById('error');
    let message_error=document.getElementById('message_error');

    let avatar = document.getElementById("avatar");
    let name = document.getElementById("name");
    let button = document.getElementById("button");
    let loginOnSite = document.querySelectorAll('.loginOnSite');
    let loginSuccessful = document.querySelectorAll('.loginSuccessful');
    const pause ='Load...';
// Функция валидации
function submit() {
    error.value=pause;
    if (email.value === ''||password.value==='') {
        message_error.style.display = 'block';
        error.value = 'You did not write email/password';
    }
    else if(!regular.test(email.value)){
        message_error.style.display = 'block';
        error.value = 'Incorrect email';
        }
    login(email.value,password.value);
//  Валидация END
//  Проверка на кнопку
    if (button.value === 'Logout') {
        document.location.href = 'index.html'
    }
// Проверка на кнопку END
}
// Функция валидации END

// Функция отправки и обработки запроса 
function login(email, password){
    let xhr = new XMLHttpRequest();
    const url = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    let data = JSON.stringify({ "email": email, "password": password });
    xhr.send(data);
    xhr.onreadystatechange = function() {   //Вызывает функцию при смене состояния.
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let jsonResponse = JSON.parse(xhr.responseText);
            for (let i=0; i < loginOnSite.length; i++) {
                loginOnSite[i].style.display = ('none');
            }
            for (let i=0; i < loginSuccessful.length; i++) {
                loginSuccessful[i].style.display = ('inline');
            }          
            avatar.src = jsonResponse["photoUrl"];
            avatar.style.width = '128px'; avatar.style.height = '128px'; avatar.style.borderRadius ='100px';
            name.value = jsonResponse["name"];
            button.value = 'Logout';
            console.log(jsonResponse["name"]);
            console.log(jsonResponse["photoUrl"]);
        }
        else if(error.value ===pause){
            message_error.style.display = 'block';
            error.value = 'Invalid email or/and password';
        }
    }
        
}
// Функция отправки и обработки запроса END

    
    
