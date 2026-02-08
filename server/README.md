# Adding Photos to Photo Memories

To add photos to the Photo Memories section, follow these steps:

1. **Ensure the Backend is Running**
   Make sure the Express server is running locally.

2. **Use the API to Add Photos**
   Send a POST request to the `/api/photos` endpoint with the following JSON payload:

   ```json
   {
     "imageURL": "<URL of the photo>",
     "title": "<Title of the memory>",
     "note": "<Short note about the memory>"
   }
   ```

   Example using `curl`:
   ```bash
   curl -X POST http://localhost:4000/api/photos \
   -H "Content-Type: application/json" \
   -d '{"imageURL": "https://example.com/photo.jpg", "title": "Beach Day", "note": "A sunny day at the beach."}'
   ```

3. **Verify the Photo**
   Refresh the frontend to see the new photo in the Photo Memories section.

4. **Optional: Seed Photos**
   Use the seed script to populate the database with sample photos:
   ```bash
   npm run seed
   ```