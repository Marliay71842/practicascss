const consumirAPI= async ()=>{

const respuesta= await fetch("https://jsonplaceholder.typicode.com/todos/1")
const json=await respuesta.json();
console.log("USER ID:"+ json.userId);
console.log("ID:"+ json.id);
console.log("USER ID:"+ json.title);
console.log("USER ID:"+ json.completed);
let div=document.createElement("div");
div.className="cajita";
div.innerHTML=`<p>  user ID: </span>${json.userId}</p>
<p>ID: </span>${json.id}</p>
<p>  Titulo :</span>${json.title}</p>
<p>  Completado:</span> ${json.completed}</p>
`;
document.body.appendChild(div);
}