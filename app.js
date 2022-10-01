const _ =require("loadash");
const list=[1,[2,[3,[4]]]];
const newlist=_.flattenDeep(list);
console.log(newlist);