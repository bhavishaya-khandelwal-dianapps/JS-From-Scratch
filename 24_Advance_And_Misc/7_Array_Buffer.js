//todo --- Array Buffer :- 
//? An ArrayBuffer in JavaScript is a low-level object that represents a fixed-size raw binary data buffer. 
//* An ArrayBuffer is like a storage container in memory, where you can store binary data.
//? An ArrayBuffer is a way to store raw binary data in JavaScript.


const arrayBuffer = new ArrayBuffer(16);
console.log(arrayBuffer.byteLength);

let view = new Uint16Array(arrayBuffer);
console.log(Uint16Array.BYTES_PER_ELEMENT);

console.log(view.length);
console.log(view.byteLength);

view[0] = 12322;
console.log();
for(let value of view) {
    console.log(value);
}

console.log();