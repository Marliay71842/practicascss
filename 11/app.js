

var sexplay= document.querySelector("#sexoenlaplaya");
var fra= document.querySelector("#frase");
var aut= document.querySelector("#autor");
const verUsers= async ()=>{

    const respuesta= await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    const json=await respuesta.json();
    console.log(json)

   sexplay.innerHTML=`
<p> ${json[0].quote}</p>
<p>${json[0].author}</p>
`;
}