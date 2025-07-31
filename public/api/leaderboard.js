const SUPABASE_URL = 'https://zwixilhhgrwhftnhgifh.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvYnBsZ21oenBxZmJsZmZwYmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MzYxMzIsImV4cCI6MjA2OTUxMjEzMn0.xBRWz0JsTTOMjLdRWwLkMc1SCh3w6l6IMKg5Tf-1-pQ'

async function saveScore(name, score) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/scores`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({ name, score })
  });
  return res.json();
}

async function getTopScores(limit = 10) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/scores?select=name,score&order=score.desc&limit=${limit}`, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });
  return res.json();
}
