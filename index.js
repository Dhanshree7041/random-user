// let fname,phone,email,bdt,pwd,loc
// fetch("https://randomuser.me/api").then((res)=>{
//     return res.json();

// }).then((data)=>{
//     fname= data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last
// 	email= data.results[0].email
// 	phone= data.results[0].phone
// 	bdt= data.results[0].dob.date.split('T')[0]
// 	loc= data.results[0].location
// 	pwd=data.results[0].login.password
// 	document.querySelector('img').src=data.results[0].picture.thumbnail
// 	console.log(data);
// })

// function display(info){
//     document.querySelector('.input').innerHTML=info
// }

let phone,email,dob,loc,img;

fetch('https://randomuser.me/api').then((res)=>res.json()).then((data)=>{
	phone = data.results[0].cell;
	email = data.results[0].email;
	dob = data.results[0].dob.date.split('T')[0];
	fname = data.results[0].name.title+' '+data.results[0].name.first+' '+data.results[0].name.last;
	loc = data.results[0].location.street.number+' '+data.results[0].location.street.name+' '+data.results[0].location.city+' '+data.results[0].location.postcode+' '+data.results[0].location.state;
	img = data.results[0].picture.thumbnail;
	document.querySelector('img').src = img;
	document.querySelector('.demo').innerHTML = fname;
})

function display(info){
	document.querySelector('.demo').innerHTML = info;
}