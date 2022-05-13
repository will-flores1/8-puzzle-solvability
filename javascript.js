// JavaScript program to check if a given
// instance of 8 puzzle is solvable or not
 
// A utility function to count inversions
// in given array 'arr[]'
function getInversionCount(arr)
{
    let inversionCount = 0 ;
    for(let i = 0; i < 2; i++){
        for(let j = i + 1; j < 3; j++){
         
            // Value 0 is used for empty space
            if (arr[j][i] > 0 && arr[j][i] > arr[i][j])
                inversionCount += 1;
        }
     }
    return inversionCount;
}
// This function returns true
// if given 8 puzzle is solvable.
function isSolvable(puzzle)
{
    // Count inversions in given 8 puzzle
    let invCount = getInversionCount(puzzle);
    // return true if inversion count is even.
    return (invCount % 2 == 0);
}
 

// Enter puzzle values here
// Value 0 is used for empty space
puzzle = [[4, 5, 6],[8, 1, 0],[3, 2, 7]] ;
if(isSolvable(puzzle))
    console.log("Solvable");
else
    console.log("Not Solvable");