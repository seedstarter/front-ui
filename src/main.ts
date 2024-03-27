import './scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { postToNest } from "./apiService";


const button: HTMLInputElement | null = document.querySelector('.submit');
const form: HTMLFormElement | null = document.querySelector("#userinfo");

function checkData() {

    let usernameInput: HTMLInputElement | null = document.querySelector("#username");
    let notificationInput: HTMLInputElement | null = document.querySelector("#notifications");
    
    if(usernameInput?.value) {
        let formData = {
            username: usernameInput.value,
            settings: {
                receiveNotifications: notificationInput?.checked
            }
        }
        
        postToNest(formData).then((data) => {
                if (usernameInput) {
                    usernameInput.value = '';
                }
                if (notificationInput) {
                    notificationInput.checked = false;
                }
                if(button?.disabled) {
                    button.disabled = false;
                }
                
        }) 
    }
}

if(form) {
    form.addEventListener("submit", (event) => { 
        event.preventDefault();
        button?.disabled;
        console.log('got clicked');
        checkData();   
    });
}
