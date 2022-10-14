import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int t = Integer.parseInt(br.readLine());
		StringTokenizer st;
		StringBuilder sb; 
		for (int i=1; i<=t; i++) {
			sb = new StringBuilder();
			st = new StringTokenizer(br.readLine());
			sb.append("Case #"+i+": "+((Integer.parseInt(st.nextToken())+(Integer.parseInt(st.nextToken())))));
			System.out.println(sb);
		}
		
	}	
}