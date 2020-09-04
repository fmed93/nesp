/**
 * The elements should be in the DOM!
 */

let form = document.getElementById('job-offer');
let id = document.getElementById('job');

form.onsubmit = () => {
    let company = document.getElementById('Company')
    let contact = document.getElementById('Contact')
    if (company.value.length == 0) {
        console.log('Field COMPANY is empty!')
        /*if(company.classList.contains('borderBlack')) {
            company.classList.replace('borderBlack', 'borderRed')
        } else {
            company.classList.add('borderRed')
        }
        return false;*/
    } else if (contact.value.length == 0) {
        console.log('Field CONTACT is empty!')
        /*if(contact.classList.contains('borderBlack')) {
            contact.classList.replace('borderBlack', 'borderRed')
        } else {
            contact.classList.add('borderRed')
        }
        return false;*/
    }
    // return true;
};

// let table = document.getElementById('IT');

document.getElementById('IT').onmouseover = () => {
    document.getElementById('hard_skills').classList.add('borderRed')
}

document.getElementById('IT').onmouseout = () => {
    document.getElementById('hard_skills').classList.remove('borderRed')
}