/**
 * The elements should be in the DOM!
 */

let target = document.getElementById('target');

document.getElementById('backAdd').onclick = () => {
    target.classList.add('back');
};

document.getElementById('backAdd').onmouseover = () => {
    console.log("About to add background");
};

document.getElementById('backRemove').onclick = () => {
    target.classList.remove('back');
};

document.getElementById('backRemove').onmouseover = () => {
    console.log("About to remove background");
};

document.getElementById('foreToggle').onclick = () => {
    target.classList.toggle('fore');
};

document.getElementById('borderReplace').onclick = () => {
    console.log(target.classList.item(0), target.classList.item(1), target.classList.item(2));
    
    if(target.classList.contains('borderA')) {
        target.classList.replace('borderA', 'borderB');        
    } else if(target.classList.contains('borderB')) {
        target.classList.replace('borderB', 'borderC');        
    } else {
        target.classList.replace('borderC', 'borderA');        
    }
};
