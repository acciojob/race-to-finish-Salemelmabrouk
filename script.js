         window.promises = [];
let promises=[
	createPromises(),
	createPromises(),
	createPromises(),
	createPromises(),
 createPromises(),
];


Promise.any(promises)
    .then((time) => {
		document.getElementById("output").innerText=time;
	}).catch(()=>{
		console.error("error occurred",error);
	});
function createPromises() {
	
		const time=Math.random()*(4)+1;
		return new Promise((resolve)=>{ 
		setTimeout(()=>{
			resolve(`Resolved after ${time}`);
			
		},time*6000);
		
	});
	
}