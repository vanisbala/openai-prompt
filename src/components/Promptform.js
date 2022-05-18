import React, { useState, useContext, useEffect } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { PrContext } from "./PrContext";
import {} from "openai";
import axios from "axios";
import "./styles.css";

function Promptform() {
  const { promptResponses, setPromptResponses, promptClue, setPromptClue } =
    useContext(PrContext);
  const [promptLable, setPromptLable] = useState(
    `You can choose a prompt from the Navigation bar.
     Below is your chosen prompt. Just enter the related word to get the answer from AI`
  );
  const [promptExample, setPromptExample] = useState(
    "You can enter like 'Rabbit' for animal, 'Niagra' for palce, 'Moon' for poem, 'comb' for product, 'Iron man' for Movie"
  );
  const [prompt, setPrompt] = useState("");
  const [promptResponse, setPromptResponse] = useState({
    prompt: "",
    response: "",
  });

  function checkEmptyField(field) {
    if (!field) {
      alert("Enter a product name ");
      return true;
    }
    return false;
  }

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    setPromptResponse({
      ...promptResponse,
      prompt: `${promptClue} : ${prompt}`,
    });
  }, [prompt]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkEmptyField(prompt)) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        };
        const url =
          "https://api.openai.com/v1/engines/text-curie-001/completions";
        const data = {
          prompt: `${promptResponse.prompt}`,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        };
        const res = await axios.post(url, data, config);
        promptResponse.response = res.data.choices[0].text;
        console.log("Single response:", JSON.stringify({ promptResponse }));
        setPromptResponses([...promptResponses, promptResponse]);
        setPrompt("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="prompt-form row d-flex justify-content-center">
      <Form className="w-50 col-md-6 " onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-left">{promptLable}</Form.Label>
          <InputGroup className="text-center">
            <Form.Control
              as="textarea"
              rows={3}
              name="prompt"
              value={prompt}
              onChange={handleChange}
              placeholder={promptClue}
            />
          </InputGroup>
          <Form.Text className="text-muted text-md-left">
            {promptExample}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="dark">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Promptform;
