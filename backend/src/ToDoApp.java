import java.util.ArrayList;
import java.util.List;

public class ToDoApp {
    private List<String> tasks;

    public ToDoApp() {
        tasks = new ArrayList<>();
    }

    public void addTask(String task) {
        if (task != null && !task.trim().isEmpty()) {
            tasks.add(task);
            System.out.println("Task added: " + task);
        } else {
            System.out.println("Task cannot be empty.");
        }
    }

    public void deleteTask(int index) {
        if (index >= 0 && index < tasks.size()) {
            String removedTask = tasks.remove(index);
            System.out.println("Task removed: " + removedTask);
        } else {
            System.out.println("Invalid task index.");
        }
    }

    public void listTasks() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks available.");
        } else {
            System.out.println("Tasks:");
            for (int i = 0; i < tasks.size(); i++) {
                System.out.println((i + 1) + ". " + tasks.get(i));
            }
        }
    }

    public static void main(String[] args) {
        ToDoApp app = new ToDoApp();

        app.addTask("Buy groceries");
        app.addTask("Complete homework");
        app.listTasks();

        app.deleteTask(1);
        app.listTasks();
    }
}