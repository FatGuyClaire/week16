import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Placeholder from "react-bootstrap/Placeholder";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Song from "./song";
import SongAdd from "./song-add";

const SongList = () => {
  // As data needed to be fetched, I used the state hooks for loading state and the songs
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  // to ensure this code only launches once, I utilized useEffect to fetch the songs from the API
  useEffect(() => {
    setIsLoading(true);
    fetch("http://fatguyconsulting.com/claire/api", {
      method: "get",
      headers: {
        authorization: "KoolKatzDJ",
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setSongs(json))
      .finally(() => setIsLoading(false));
  }, []);
  // I created a function to add the song to the API then update the songs state
  const addSong = ({ title, artist }) => {
    return fetch("http://fatguyconsulting.com/claire/api", {
      method: "post",
      headers: {
        authorization: "KoolKatzDJ",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        artist: artist,
        title: title,
      }),
    })
      .then((response) => response.json())
      .then((element) => {
        setSongs([...songs, element]);
      });
  };
  // I created a function to remove the song from the API then update the songs state
  const removeSong = (id) => {
    return fetch("http://fatguyconsulting.com/claire/api/" + id, {
      method: "delete",
      headers: {
        authorization: "KoolKatzDJ",
        "content-type": "application/json",
      },
    }).then((response) => {
      setSongs(songs.filter((song) => song.id !== id));
    });
  };
  // I created a function to update the song on the API then update the songs state
  const editSong = ({ id, title, artist }) => {
    return fetch("http://fatguyconsulting.com/claire/api/" + id, {
      method: "put",
      headers: {
        authorization: "KoolKatzDJ",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        artist: artist,
        title: title,
      }),
    })
      .then((response) => response.json())
      .then((element) => {
        setSongs(songs.map((song) => (song.id === id ? element : song)));
      });
  };
  return (
    <Container>
      <h1 className="text-center">Available Songs</h1>
      <Row>
        <Col>
          <Table hover={true} variant="dark">
            <thead>
              <tr>
                <th>Artist</th>
                <th>Song</th>
                <th>
                  Action
                  <span className="float-end">
                    {/* I crated a component that handles gathering song data to be added */}
                    <SongAdd add={addSong} />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody id="songList">
              {/* I designed Placeholders to show while data is being fetched from the API */}
              {isLoading ? (
                <tr>
                  <td>
                    <Placeholder as="p" animation="glow" bg="light" />
                  </td>
                  <td>
                    <Placeholder as="p" animation="glow" bg="light" />
                  </td>
                  <td>
                    <Placeholder as="p" animation="glow" bg="light" />
                  </td>
                </tr>
              ) : (
                
                // Once the songs have been loaded, I utilize the map function to iterate the songs
                // with their edit and remove functions, to the Song components
                songs.map((song, i) => (
                  <Song
                    key={`song-${i}`}
                    {...song}
                    edit={editSong}
                    remove={removeSong}
                  />
                ))
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default SongList;
