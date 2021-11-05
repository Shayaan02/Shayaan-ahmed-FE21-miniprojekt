const body = document.querySelector("body");
for (let i = 0; i < 5; i++) {
    const h1 = document.createElement('h1');
    h1.innerText = `Rad ${i + 1}`;
    document.body.appendChild(h1);
    h1.style.textAlign = 'center';
    const size = 10 + (10 * i);
    h1.style.fontSize = `${size}px`;
    // const allH1 = document.querySelectorAll('h1');
    h1.style.color = ('#00a6ff');
    let hue = (840 / 5) + i * i;
    console.log(hue);
    h1.style.backgroundColor = `hsl(${hue}, 100%, 64%)`;
}


const wrapper = document.createElement('div');
body.appendChild(wrapper);
wrapper.style.display = "flex";
wrapper.style.border = "1px solid black";
wrapper.style.justifyContent = 'space-evenly';


const div = document.createElement('div')
wrapper.appendChild(div);

for (let i = 0; i < 10; i++) {
    let p = document.createElement('p')
    div.appendChild(p);
    p.innerText = i;
    p.style.textAlign = 'center';
    p.style.margin = `${i * 10}px 1rem 1 rem 1rem`;
    p.style.width = '3rem';
    div.style.border = 'solid 5px purple';
    p.style.margin = '0px';

    if(i==4){
        p.style.backgroundColor = 'purple';
    }
    else if (i%2 == 0) {
        p.style.backgroundColor = 'black';
        p.style.color = 'white';
    }
    else if (i%2 == 1) {
        p.style.backgroundColor = 'white';

    }


}

const div2 = document.createElement('div')
wrapper.appendChild(div2);

for (let i = 9; i > -1; i--) {
    let p = document.createElement('p')
    div2.appendChild(p);
    p.innerText = i;
    p.style.textAlign = 'center';
    p.style.margin = `${i * 10}px 1rem 1 rem 1rem`;
    p.style.width = '3rem';
    div2.style.border = 'solid 5px purple';
    p.style.margin = '0px';


    if (i == 8) {
        p.style.backgroundColor = 'purple';
    }
    else if (i%2 == 0) {
        p.style.backgroundColor = 'black';
        p.style.color = 'white';
    }
    else if (i%2 == 1) {
        p.style.backgroundColor = 'white';

     }


}

const div3 = document.createElement('div')
wrapper.appendChild(div3);
let numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for (let i = 0; i < 10; i++) {
    let p = document.createElement('p')
    div3.appendChild(p);
    p.innerText = numbers[i];
    p.style.textAlign = 'center';
    p.style.width = '3rem';
    div3.style.border = 'solid 5px purple';
    p.style.margin = '0px';

    if (p.innerText=='fyra'){
        p.style.backgroundColor = 'purple';
    }
    else if (i%2 == 0) {
    p.style.backgroundColor = 'black';
    p.style.color = 'white'
    }
}
