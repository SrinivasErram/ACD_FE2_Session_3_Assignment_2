// 1.===============================================================================

// Create map instance object using new Map() and set value using set(). Add values here(Key can be string, object and function.)

let objmaprockartists = new Map();
objmaprockartists.set(1,'FleetWoodMac');
objmaprockartists.set(2,'MumFord&Sons');
objmaprockartists.set(3,'WolfMother');

//2.==================================================================================

 //Create Set() instance and then add values using add() method    Note: Check new property before adding, if it’s there or not using has()    method.

let objsetRaprockartists = new Set();

if(!objsetRaprockartists.has("RHCP")){
	objsetRaprockartists.add("RHCP");
}

if(!objsetRaprockartists.has("RATM")){
	objsetRaprockartists.add("RATM");
}

if(!objsetRaprockartists.has("LimpBizkit")){
	objsetRaprockartists.add("LimpBizkit");
}


//3.===================================================================================
// /Add multiple values using Set(), then iterate them using for loop. 

let arrartsts = ["SOAD","ICP","POD"];

arrartsts.forEach((str)=>{
if(!objsetRaprockartists.has(str)){
	objsetRaprockartists.add(str);
}
});

objsetRaprockartists.forEach((ele)=>{
console.log(ele);
});

//4.===================================================================================

// Create an array(stringArray) of strings  then set this array to Set instance using:   var mySet = new Set(stringArray); 
//  Now check if all values are there or not using set’s has() method. Print all values of array in one time(using spread operator) 

let allartists = [];
objmaprockartists.forEach((value,key,map)=>{
	allartists.push(value);
	});

objsetRaprockartists.forEach((ele)=>{
   allartists.push(ele);
});

let allartistsset = new Set(allartists);

allartists.forEach((ele)=>{

if(!allartistsset.has(ele)){
  console.log(`one artist is missing in SET ${ele}`);
}
else{
	 console.log(` ${ele}  artist is present in SET`);
}});



let printarr = (...args)=>{
	console.log(args);
}

printarr(...allartistsset);

//=======================================================================================