/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
 var canAttendMeetings = function(intervals) {
    //     Before anything SORT the arrays so they're in order
    //     Make sure the interval[i][1] is less than interval[i][0] of next array
        
        if(intervals === undefined || intervals.length == 0)
                    {
                        return true;
                    }
            
        intervals.sort(function(a, b) {
        return a[0]-b[1];
    });
        console.log(intervals);
             
        for(i=0;i<intervals.length;i++)
            {
                // console.log(intervals[i], intervals[i][1]);           
                if(intervals[i+1] != null && (intervals[i][1] > intervals[i+1][0]))
                    {
                        return false;
                    }           
            }
            return true;
    };