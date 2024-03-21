// making a array of countries and ptint its original order
let countriesToVisit: string[] = ["china", "brazil", "denmark", "argentina"];
console.log("Original Order", countriesToVisit);
// print thr array in alphabetical order without modifying the actual array list
console.log ("Alphabetical Order:", [...countriesToVisit].sort());
//  show that the array is still in its original order
console.log("still in Original Order", countriesToVisit);
// print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());
//  show that the array is still in its original order
console.log("still in Original Order", countriesToVisit);
// we changed the original array order
console.log("Original Array Reversed:", countriesToVisit.reverse());
// print the array to show that its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in alphabetical order
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// we changed again the original array order
console.log("Original Array Reversed again:", countriesToVisit.reverse());



