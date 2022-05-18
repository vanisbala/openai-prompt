import React, { useState, useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { PrContext } from "./PrContext";

function PromptResponseList() {
  const { promptResponses } = useContext(PrContext);

  return (
    <div className="row  d-flex justify-content-center">
      <ListGroup className="w-50 col-md-6 ">
        {promptResponses
          .slice(1)
          .reverse()
          .map((promptResponse) => {
            const { prompt, response } = promptResponse;
            return (
              <ListGroup.Item key={promptResponses.indexOf(promptResponse)}>
                <Card>
                  <Card.Header className="fw-bold text-capitalize fs-6">
                    {prompt}
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="fs-6">{response}</p>
                    </blockquote>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </div>
  );
}

export default PromptResponseList;
