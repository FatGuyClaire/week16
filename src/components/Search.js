import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Table,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import Results from "./Results";

// I created the Search function to allow for searching songs by either artist name or song title.
// I have included a JavaScrip browser alert for Invalid Search.
function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const query = {};
    for (const input of event.target) {
      if (input.id && input.value) {
        query[input.id] = input.value;
      }
    }
    if (Object.keys(query).length === 0) {
      return alert("Invalid search.");
    }
    setIsLoading(true);
    fetch(
      "http://fatguyconsulting.com/claire/api?" +
        new URLSearchParams(query).toString(),
      {
        method: "get",
        headers: {
          authorization: "KoolKatzDJ",
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setSearchResults(json))
      .finally(() => {
        setIsLoading(false);
        document.getElementById("title").value = "";
        document.getElementById("artist").value = "";
      });
  };
  return (
    <Row>
      <Col>
        <h1>Song Search</h1>
        <Table variant="dark">
          <thead>
            <tr>
              <th>
                <Form onSubmit={handleFormSubmit}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Search By Song Title"
                      aria-label="Song Title"
                      aria-describedby="basic-addon2"
                      id="title"
                    />
                    <Button
                      variant="outline-primary"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        //I included spinners on the submit buttons to demonstrate that the search results are loading.
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "Search Title"
                      )}
                    </Button>
                  </InputGroup>
                </Form>
                <Form onSubmit={handleFormSubmit}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Search By Artist"
                      aria-label="Artist"
                      aria-describedby="basic-addon2"
                      id="artist"
                    />
                    <Button
                      variant="outline-primary"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "Search Artist"
                      )}
                    </Button>
                  </InputGroup>
                </Form>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* I also added a spinner to replace any previous search results while new search results are loading */}
            {isLoading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : searchResults.length === 0 ? (
              isLoading === false ? (
                <tr>
                  <td>No Results</td>
                </tr>
              ) : null
            ) : (
              searchResults.map((result) => (
                <Results key={result.id} {...result} />
              ))
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Search;
