import axios from 'axios';

const client = axios.create({ baseURL: 'https://valentines-day-yufb.onrender.com' });

export async function fetchPhotos() {
  const res = await client.get('/api/photos');
  return res.data.data || [];
}

export async function fetchLetter() {
  const res = await client.get('/api/letter');
  return res.data.data || null;
}

export async function fetchTimeline() {
  const res = await client.get('/api/timeline');
  return res.data.data || [];
}

export async function uploadPhoto(data) {
  const res = await client.post('/api/photos', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
}

export async function addTimelineEvent(data) {
  const res = await client.post('/api/timeline', data);
  return res.data.data;
}
