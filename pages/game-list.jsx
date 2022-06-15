import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { ref, onValue } from "firebase/database";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import Link  from "next/link";
import { useRouter } from "next/router";

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const router = useRouter

  useEffect(() => {
    onValue(
      ref(db, "games"),
      (snapshot) => {
        const newGames = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          //   console.log(childKey, childData);
          newGames.push({
            key: childKey,
            name: childData.name,
            game_url: childData.game_url,
            description: childData.description,
          });
        });
        setGameList(newGames);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  return (
    <Container>
      <Link
        className="btn btn-primary btn-lg mb-2"
        role="button"
        href="/game-form"
      >
        Tambah
      </Link>
      <Row>
        {gameList &&
          gameList.map((game) => {
            return (
              <Col key={game.key} sm="6">
                <Card body>
                  <CardTitle tag="h5">{game.name}</CardTitle>
                  <CardText>{game.description}</CardText>
                  <Button
                    // role="button"
                    // className="btn btn-secondary"
                    // href={router.game.game_url ? game.game_url : "/games"}
                  >
                      {router.game.game_url ? game.game_url : "/games"}
                      More..
                  </Button>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default GameList;