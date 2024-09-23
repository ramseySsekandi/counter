let counter = 0;

const count = document.querySelector('#count')

function changeCount(num){
    counter += num
    count.textContent = counter;
}