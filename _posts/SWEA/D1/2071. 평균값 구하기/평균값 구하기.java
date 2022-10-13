import java.util.*;
public class Solution {
    static Scanner sc = new Scanner(System.in);
    public static void main(String args[]) {
        int T = sc.nextInt();
        for(int tc=1; tc<=T; tc++) {
            int sum = 0;
            for(int i=0; i<10; i++) sum += sc.nextInt();
            System.out.format( "#%d %.0f\n", tc, sum/10.0);            
        }
    }
}