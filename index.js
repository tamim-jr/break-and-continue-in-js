let allMembers = [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

// for (let i = 0; i < allMembers.length; i++) {
//     if (allMembers[i] > 5){
//         break
//     }
//     console.log(allMembers[i]);
    
// }
for (let i = 0; i < allMembers.length; i++) {
    if (allMembers[i] < 1){
        continue
    }
    console.log(allMembers[i]);
    
}