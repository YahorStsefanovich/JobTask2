
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
    "Beatae dolore eos hic id incidunt labore laborum maxime molestiae" +
    "mollitia, natus nemo neque nesciunt nostrum officiis quibusdam," +
    " rem repellendus sint temporibus!";

window.onload = init;

function init() {
    for (let i =0; i < 9; i++){
        document.getElementById("container").appendChild(createCard(text));
    }
}

function createCard(text) {
    let div = document.createElement("div");
    div.className = "card";

    let h2 = document.createElement("h2");
    h2.innerText = text;

    let shadow = document.createElement("div");
    shadow.className = "shadow";

    let img = document.createElement("img");
    img.src = "../resources/images/temp.jpg";

    div.appendChild(h2);
    div.appendChild(shadow);
    div.appendChild(img);
    div.appendChild(createInnerDiv(text));

    return div;
}

function createInnerDiv(text) {
    let div = document.createElement("div");

    let p = document.createElement("p");
    p.innerText = text;

    let btn = createButton("Try");

    div.appendChild(p);
    div.appendChild(btn);

    return div;
}

function createButton(text) {
    let btn = document.createElement("button");
    btn.innerText = text;
    return btn;
}

