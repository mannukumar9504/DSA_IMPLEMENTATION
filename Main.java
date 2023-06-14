import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
    public int lengthOfLongestSubstring(String s) {
        int[] chars = new int[128];
 
        int left = 0;
        int right = 0;
 
        int res = 0;
        while (right < s.length()) {
            char r = s.charAt(right);
            chars[r]++;  ///checking for duplicate counter
            System.out.println(chars[r]);
            while (chars[r] > 1) {
                char l = s.charAt(left);
                chars[l]--;
                left++;
            }
 
            res = Math.max(res, right - left + 1);
 
            right++;

        }
        for(int i = 0; i < 8 ;i++) {
            System.out.println(chars[i]);
        }
        return res;
    }

    public static void main(String args[]) {
        // Your code goes from here
        Main ob = new Main();
        String s = "pwabwkew";
        System.out.println(ob.lengthOfLongestSubstring(s));
    }
}