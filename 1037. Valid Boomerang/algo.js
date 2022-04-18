/**
 * @param {number[][]} points
 * @return {boolean}
 */
 var isBoomerang = function(points) {

    return (points[2][1] - points[1][1]) * (points[0][0] - points[1][0]) != (points[2][0] - points[1][0]) * (points[0][1] - points[1][1]);
        
        
        // console.log(points[i + 2][1], points[i][0], points[i + 1][0]);
        // for(i = 0; i < points.length - 1; i++)
        //     {
        //         // console.log(points[i+1].toString(), points[i].toString())
        //         if(points[i+1].toString() === points[i].toString())
        //             {
        //                 return false;
        //             }
        //     }
        
        
        // console.log(points[2][1], points[1][1], points[0][1]);
        // console.log(points[2][1] - points[1][1] == points[0][1]);
        
    //     if(points[2][1] - points[1][1] == points[0][1])
    //         {
    //             return false;
    //         }
    //     return true;
        
        
        // console.log(points[2][1], points[1][1], points[0][1]);
        // console.log(points[2][1] - points[1][1] === points[0][1]);
        // console.log(points[2][1] - points[1][1] === points[0][1]);
        // if(points[2][1] - points[1][1] === points[0][1])
        //     {
        //         return false;
        //     }
        // return true;
        
        
        // console.log(points);
        // points.sort();
        // for(i = 0; i < points.length; i++)
        //     {
        //         if(points[i+1][1] - points[i][1] ===  )
        //     }
        // for(i = 0; i < points.length - 1; i++)
        //     {
        //         console.log(points[i + 2][1], points[i][0], points[i + 1][0])
        //         if(points[i + 2][1] - points[i][0] === )
        
                // if(points[i + 2][1] - points[i][0] )
            // }
    //     if 3rd array[1] - 2nd array[1] === 1st array[1]
        
        
        // for(i = 0; i < points.length -1; i++)
        //     {
        //         if(points[i] === points[i+1])
        //         // console.log(points[i][1], points[i + 1][0])
        //         if(points[i][1] > points[i + 1][0])
        //             {
        //                 return false
        //             }
        //     }
        // return true;
    };