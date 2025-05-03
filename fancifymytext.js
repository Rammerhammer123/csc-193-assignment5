function makeBigger() {

    alert("Hello, world!");

    document.getElementById("text").style.fontSize = "24pt";

}

function changeStyle() {

    const textBox = document.getElementById("text");
    const fancy = document.getElementById("fancy");

    if (fancy.checked) {
        alert("Fancy style selected!");
        textBox.style.fontWeight = "bold"; //makes bold (had to change txt to arial or bold is hard to notice)
        textBox.style.color = "blue"; //makes txt blue
        textBox.style.textDecoration = "underline"; //underlines txt
    } else {
        alert("Boring style selected!");
        textBox.style.fontWeight = "normal";
        textBox.style.color = "black";
        textBox.style.textDecoration = "none";
    }
}

function mooify() {

    const textBox = document.getElementById("text");
    let text = textBox.value.toUpperCase();

    let sentences = text.split(".");  //splits the periods into sentences
    for (let i = 0; i < sentences.length - 1; i++) { 
        let words = sentences[i].trim().split(" ");
        if (words.length > 0) { //when reaches the end of the sentence add -Moo
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textBox.value = sentences.join(". "); 

}