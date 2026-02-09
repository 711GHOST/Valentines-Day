import axios from 'axios';

const client = axios.create({ baseURL: 'https://valentines-day-yufb.onrender.com' });

export async function fetchPhotos() {
  const res = await client.get('/api/photos');
  if (res.data.success) {
    return res.data.data || [];
  } else {
    console.error('Error fetching photos:', res.data.message);
    return [];
  }
}

export async function fetchLetter() {
  const res = await client.get('/api/letter');
  if (res.data.success) {
    return res.data.data || null;
  } else {
    console.error('Error fetching letter:', res.data.message);
    return null;
  }
}

export async function fetchTimeline() {
  const res = await client.get('/api/timeline');
  if (res.data.success) {
    return res.data.data || [];
  } else {
    console.error('Error fetching timeline:', res.data.message);
    return [];
  }
}

export async function uploadPhoto(data) {
  try {
    const res = await client.post('/api/photos', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error uploading photo:', error.response?.data || error.message);
    throw error;
  }
}
