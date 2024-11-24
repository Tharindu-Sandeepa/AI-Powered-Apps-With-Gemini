import React, { useState } from "react";
import { gemini } from "./AI";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await gemini({ question });
      setAnswer(response);
    } catch (err) {
      setError("Failed to get a response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Gemini AI Question</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          style={styles.textarea}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question here..."
          required
        />
        <button type="submit" style={styles.button}>
          {loading ? "Loading..." : "Ask Gemini"}
        </button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      {answer && (
        <div style={styles.answerContainer}>
          <h2>Answer:</h2>
          <p style={styles.answer}>{answer}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    marginTop:"100px",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonDisabled: {
    backgroundColor: "#CCC",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  answerContainer: {
    marginTop: "20px",
    textAlign: "left",
  },
  answer: {
    fontSize: "18px",
  },
};

export default App;