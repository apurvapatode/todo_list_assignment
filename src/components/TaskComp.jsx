import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function TaskComp() {
  return (
    <>
      <Card border="secondary" style={{ width: "15rem" }}>
        <Card.Body>
          <div >
            <h6> Shopping </h6>
            <div >
              <Button
                variant="outline-success"
                style={{ padding: "0px 8px" }}
              >
                Update
              </Button>
              <Button
                variant="outline-danger"
                style={{ padding: "0px 8px", marginLeft: 5 }}
              >
                Delete
              </Button>
            </div>
          </div>

        </Card.Body>
      </Card>
    </>
  );
}

export default TaskComp;
