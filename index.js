const express = require('express');
const app = express();
const port = 3000;

const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      country: 'India',
      role: 'Batsman',
      runs: 12000,
      wickets: 4,
    },
    {
      id: 2,
      name: 'James Anderson',
      country: 'England',
      role: 'Bowler',
      runs: 1243,
      wickets: 600,
    },
    {
      id: 3,
      name: 'Kane Williamson',
      country: 'New Zealand',
      role: 'Batsman',
      runs: 7000,
      wickets: 29,
    },
    {
      id: 4,
      name: 'Pat Cummins',
      country: 'Australia',
      role: 'Bowler',
      runs: 750,
      wickets: 250,
    },
    {
      id: 5,
      name: 'Ben Stokes',
      country: 'England',
      role: 'All-rounder',
      runs: 4500,
      wickets: 150,
    },
  ];

app.get('/players', (req, res) => {
    res.send(players);
});

app.get('/players/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const player = players.find(player => player.id === id);
    res.send(player);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});