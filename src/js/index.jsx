import { Container } from "react-bootstrap";
import { TodoList } from "@/components/TodoList";
import { TaskInput } from "@/components/TaskInput";

export default function Home() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}
