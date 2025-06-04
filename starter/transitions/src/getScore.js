export default async function getScore(game) {
  try {
    const response = await fetch(`/score?game=${game}`);
    const score = await response.json();
    return score;
  } catch (err) {
    throw new Error("Failed to fetch score", err.message);
  }
}
