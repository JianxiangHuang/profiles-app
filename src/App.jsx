import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';
import { useState } from 'react';

export default function App() {
    const [people, setPeople] = useState(profiles);
    const [name, setName] = useState('');
    const [error, setError] = useState('');


  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>

<form
  className="mb-4 d-flex gap-2 justify-content-center"
  onSubmit={handleSubmit}
>
  <input
    type="text"
    className={`form-control w-auto ${error ? 'is-invalid' : ''}`}
    placeholder="Enter name"
    value={name}
    onChange={e => setName(e.target.value)}
  />
  <button type="submit" className="btn btn-primary">Add</button>
  {error && <div className="invalid-feedback d-block">{error}</div>}
</form>



      <Row xs={1} md={2} lg={3}>
        {people.map(p => (
          <Col key={p.id}>
            <ProfileCard name={p.name} likes={p.likes} onLike={() => handleLike(p.id)}
/>
          </Col>
        ))}
      </Row>
    </Container>
  );

  function handleLike(id) {
    setPeople(ps =>
      ps.map(p =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  }

function handleSubmit(e) {
  e.preventDefault();

  const trimmed = name.trim();


  if (!trimmed) {
    setError('Name is required.');
    return;
  }


  const exists = people.some(
    p => p.name.toLowerCase() === trimmed.toLowerCase()
  );
  if (exists) {
    setError('This name already exists.');
    return;
  }

 
  const newProfile = {
    id: Date.now(),
    name: trimmed,
    likes: 0,
  };

  setPeople(prev => [...prev, newProfile]);
  setName('');
  setError('');
}











}