function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter ++ ; // found out that counter was not being incremented properly.
    }} return counter ;
    }
   console.log( countOccurrences ( "ini mini miny moe" , "n" ));