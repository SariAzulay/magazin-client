import "./chooseOption.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

export default function ChooseOption(props) {

    const history= useHistory();

    function goTo(){
        if(props.title=="My Magazins")
            history.push("/admin/mymagazins");
            else
            history.push("/admin/createpost");
    }

  return (
    <>
      <Card style={{ width: "18rem" }} id="card" onClick={goTo}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
