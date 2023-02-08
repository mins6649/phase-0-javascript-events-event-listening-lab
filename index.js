function addingEventListener() {
    const button = document.getElementById('button');
  
    button.addEventListener("click", () => {
        alert("I was clicked!")
    });
}
// const input = document.getElementById('button');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });

addingEventListener();