class Solution {
    public int climbStairs(int n) {
        int[] ways = new int[n + 1];
        
        ways[0] = 1;
        ways[1] = 1;
        for (int i = 2; i < ways.length; i++)
            ways[i] = ways[i-2] + ways[i-1];
        return ways[ways.length - 1];
        // dp = ways[n-2] + ways[n-1]
        // [n-2] + [n-1] = next
    }
}