# Valentine's Day Special Project

This is a full-stack web application created as a Valentine's Day gift. The project is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for styling and Framer Motion for animations.

## Features
- **Cinematic Loading Screen**: A visually appealing loading screen with animations.
- **Photo Memory Gallery**: Displays uploaded photos with titles and notes.
- **Love Letter Section**: A dedicated section for a heartfelt love letter.
- **Timeline**: A timeline showcasing memorable events.
- **Surprise Section**: A special surprise section for the recipient.
- **Image Upload**: Users can upload photos with titles and notes, which are stored in an AWS S3 bucket.
- **Real-Time Updates**: The photo gallery updates in real-time as new photos are uploaded.

## Technologies Used
- **Frontend**:
  - React.js (with Vite for development)
  - Tailwind CSS for styling
  - Framer Motion for animations
- **Backend**:
  - Node.js with Express.js
  - MongoDB with Mongoose for database management
  - AWS S3 for image storage
  - Multer and AWS SDK for file uploads

## Hosting
- **Frontend**: Hosted on [Vercel](https://vercel.com/)
- **Backend**: Hosted on [Render](https://render.com/)

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)
- AWS S3 bucket for image storage

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/711GHOST/Valentines-Day.git
   cd Valentines-Day/server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add the following variables:
   ```env
   MONGODB_URI=<your_mongodb_connection_string>
   AWS_ACCESS_KEY_ID=<your_aws_access_key_id>
   AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key>
   AWS_REGION=<your_aws_region>
   AWS_BUCKET_NAME=<your_s3_bucket_name>
   PORT=4000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the API base URL in `client/src/api.js` to point to your backend URL (e.g., Render URL):
   ```javascript
   const API_BASE_URL = 'https://your-backend-url';
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Deployment

#### Backend (Render)
1. Log in to [Render](https://render.com/).
2. Create a new Web Service and connect your GitHub repository.
3. Set the root directory to `server`.
4. Add the following environment variables in the Render dashboard:
   - `MONGODB_URI`
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `AWS_BUCKET_NAME`
5. Set the build command to:
   ```bash
   npm install
   ```
6. Set the start command to:
   ```bash
   npm start
   ```
7. Deploy the service.

#### Frontend (Vercel)
1. Log in to [Vercel](https://vercel.com/).
2. Import your GitHub repository and select the `client` directory as the root.
3. Set the build command to:
   ```bash
   npm run build
   ```
4. Set the output directory to:
   ```bash
   dist
   ```
5. Deploy the service.

### Testing
- Use Postman to test the `/api/photos` endpoint for uploading images.
- Verify that the images are uploaded to the S3 bucket and the URLs are saved in MongoDB.
- Check the frontend to ensure the uploaded images are displayed correctly in the gallery.

## Project Structure
```
Valentines-Day/
├── client/         # Frontend code (React.js)
├── server/         # Backend code (Node.js, Express.js)
├── .env.example    # Example environment variables
└── README.md       # Project documentation
```

## License
This project is licensed under the MIT License.
