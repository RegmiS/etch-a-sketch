const main_container = document.querySelector(".container");

for(let i=0; i<32; i++){
    const new_div = document.createElement('div');
    new_div.textContent = `Test${i}`;
    new_div.classList.add("item");
    main_container.appendChild(new_div);
}