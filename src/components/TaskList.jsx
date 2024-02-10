
import Table from "react-bootstrap/Table";
import TaskComp from "./TaskComp";
function TaskList() {
  return (
    <Table hover className="m-4"  >
      <thead>
        <tr>
          <th>Todo</th>
          <th>InProgress</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><TaskComp/></td>
          <td><TaskComp/></td>
          <td><TaskComp/></td>
          
          
        </tr>
        <tr>
          <td><TaskComp/></td>
          <td><TaskComp/></td>
          <td><TaskComp/></td>
          
          
        </tr>
       
      </tbody>
    </Table>
  );
}

export default TaskList;
