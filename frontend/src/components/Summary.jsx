// src/components/Summary.jsx
import React, { useState, useEffect } from 'react';
import api from '../api';

const Summary = ({ todos }) => {
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [slackMessage, setSlackMessage] = useState('');

  const handleSummarize = async () => {
    try {
      if (!Array.isArray(todos) || todos.length === 0) {
        setError('No todos to summarize.');
        return;
      }

      const cleanTodos = todos
        .filter(t => t && typeof t.title === 'string' && t.title.trim() !== '')
        .map(t => ({
          title: t.title,
          completed: t.completed,
        }));

      const res = await api.post('/summarize', { todos: cleanTodos });

      setSummary(res.data.summary);
      setError('');
      setSlackMessage('Summary successfully sent to Slack ✅');

      // Auto-dismiss after 5 seconds
      setTimeout(() => setSlackMessage(''), 5000);

    } catch (err) {
      console.error('Error summarizing:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to summarize todos.');
      setSlackMessage('Failed to send summary to Slack ❌');

      // Auto-dismiss after 5 seconds
      setTimeout(() => setSlackMessage(''), 5000);
    }
  };

  return (
    <div>
      <button onClick={handleSummarize}>Summarize Todos</button>

      {error && (
        <div style={{ color: 'red', marginTop: '1em' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {slackMessage && (
        <div style={{ color: 'green', marginTop: '1em' }}>
          {slackMessage}
        </div>
      )}

      {summary && (
        <div style={{ marginTop: '1em' }}>
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Summary;
