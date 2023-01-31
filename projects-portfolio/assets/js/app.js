const boxContainer = document.querySelector(".boxContainer");


for (let i = 0; i < 365; i++) {

    const list = [
        0,1,2,3,41, 323,324,325,326
    ];


    const el = document.createElement("div");
    el.classList = list.includes(i) ? "box active" : "box";
    boxContainer.appendChild(el)
}