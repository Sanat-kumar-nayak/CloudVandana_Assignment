public class Employee {
    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println(id + " " + name + " " + salary);
    }

    public static void main(String[] args) {
        Employee e1 = new Employee(101, "Sanat", 10000);
        Employee e2 = new Employee(102, "Biplab", 15000);
        Employee e3 = new Employee(103, "Mahaveer", 20000);

        Employee[] arr = { e1, e2, e3 };

        for (Employee e : arr) {
            e.displayDetails();
        }
    }
}
