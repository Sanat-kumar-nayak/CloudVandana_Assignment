import java.util.Arrays;
import java.util.Scanner;

public class Anagram {

    static boolean areAnagrams(String s1, String s2) {

        char[] s1Array = s1.toCharArray();
        char[] s2Array = s2.toCharArray();
        Arrays.sort(s1Array);
        Arrays.sort(s2Array);

        return Arrays.equals(s1Array, s2Array);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First String");
        String str1 = sc.nextLine();

        System.out.println("Enter Second String");
        String str2 = sc.nextLine();

        System.out.println(areAnagrams(str1, str2));
        sc.close();

    }
}