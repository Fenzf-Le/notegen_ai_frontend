# Notegen AI — Intelligent Note-Taking Application

A React-based frontend project for an AI-powered note-taking and smart learning platform. This project demonstrates a modern web application UI with multiple features for note management, learning assistance, and user administration.

## ⚠️ Important Notice

**Backend Support Discontinued:** The backend API is no longer actively maintained and supported.

**Limited Frontend Functionality:** This frontend can only demonstrate available pages and UI components. Full end-to-end functionality is not guaranteed due to backend limitations.

## Technologies

- **Framework:** React 18
- **Build Tool:** Vite
- **JavaScript:** Primary language
- **Key Libraries:**
  - React Router DOM (routing)
  - Material-UI (MUI) & Emotion (styling)
  - Firebase (authentication)
  - Axios (HTTP requests)
  - React Quill (rich text editing)
  - Slate (advanced text editor)
  - Framer Motion (animations)
  - Recharts (data visualization)
  - EmailJS (email service)
  - Typo-js (spell checking)

## Requirements

- **Node.js:** >= 14 (>=18 recommended for best compatibility)
- **npm** or **yarn**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- **Firebase credentials** (for authentication features)

## Setup & Run

### 1. Clone the Repository
```bash
git clone https://github.com/Fenzf-Le/notegen_ai_frontend.git
cd notegen_ai_frontend
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with your Firebase and API configuration:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGE_SENDER_ID=your_firebase_message_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

### 4. Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### 5. Build for Production

Create an optimized production build:
```bash
npm run build
# or
yarn build
```

Output will be in the `dist/` directory.

### 6. Preview Production Build

Preview the production build locally:
```bash
npm run preview
# or
yarn preview
```

## Project Structure

```text
/notegen_ai_frontend
├── public/
│   └── dictionaries/          # Spell check dictionaries
├── src/
│   ├── assets/                # Images, icons, fonts, and logos
│   ├── auth/
│   │   └── Firebase.jsx       # Firebase authentication setup
│   ├── components/
│   │   ├── libs/              # Reusable components
│   │   │   ├── AdminSidebar/
│   │   │   ├── Sidebar/
│   │   │   ├── ThemeSwitch/
│   │   │   ├── DBoardModals/
│   │   │   └── FolderList/
│   │   └── pages/             # Page components
│   │       ├── MainPage/
│   │       ├── Dashboard/
│   │       ├── NoteCanvas/
│   │       ├── NoteGallery/
│   │       ├── SmartLearning/
│   │       ├── AdminDashboard/
│   │       ├── AdminPage/
│   │       ├── AdminUserManagement/
│   │       ├── AdminSubscription/
│   │       ├── SignIn/
│   │       ├── SignUp/
│   │       ├── CheckOut/
│   │       ├── Subscription/
│   │       ├── HelpCenter/
│   │       ├── Information/
│   │       ├── StartPage/
│   │       ├── Trash/
│   │       └── NotFound/
│   ├── router/
│   │   ├── Pathname.js        # Route path definitions
│   │   └── routerConfig.jsx   # Router configuration
│   ├── server/
│   │   └── api.js             # API call configuration
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles
│   ├── App.css                # App-level styles
│   └── font.css               # Font definitions
├── eslint.config.js           # ESLint configuration
├── vite.config.js             # Vite configuration
├── package.json
├── vercel.json                # Vercel deployment config
└── README.md
```

## Available Pages & Features

### User-Facing Pages
- **Sign In / Sign Up** — Authentication
- **Start Page** — Onboarding flow
- **Dashboard** — User's main workspace
- **Note Canvas** — Rich text note editor & AI summarizer
- **Note Gallery** — Browse and manage notes
- **Smart Learning** — AI-powered learning features
- **Subscription** — Subscription management
- **Checkout** — Payment processing
- **Help Center** — Support & Issue report
- **Information** — Personal profile information
- **Trash** — Deleted notes recovery

### Admin-Only Pages
- **Admin Dashboard** — Admin overview and statistics
- **Admin User Management** — Manage users
- **Admin Subscription** — Manage subscriptions

### Components
- **Sidebar** — Navigation sidebar for regular users
- **Admin Sidebar** — Navigation sidebar for administrators
- **Theme Switch** — Dark/light mode toggle
- **GrabNoteNow Modals** — Modal dialogs for create untitled note
- **Folder List** — Mock api data of Folders/Notes

## Linting

Run ESLint to check code quality:
```bash
npm run lint
# or
yarn lint
```

## Known Limitations

⚠️ **Backend API Not Supported**
- API endpoints can not be functional or available
- Real-time data synchronization may not work
- Some features require backend integration that is no longer maintained

⚠️ **Demonstration Only**
- This frontend serves as a UI/UX demonstration
- Pages are primarily for showcasing layout and navigation
- Full feature functionality depends on a working backend

## Deployment

### Vercel (Recommended)
The project includes `vercel.json` configuration for easy Vercel deployment:
1. Push your code to GitHub
2. Import the repository on Vercel
3. Vercel will auto-detect Vite and configure build settings
4. Deploy with environment variables configured

### Other Platforms
- **Netlify:** Configure build command as `npm run build`
- **GitHub Pages:** Add routing configuration and deploy from `dist/` folder
- **Docker:** Create a Dockerfile with Node base image and run the build/preview scripts

## Contributing

While this is not an active assignment project, contributions and improvements are welcome. Please ensure code follows the ESLint configuration and maintains the project structure.

## License

MIT © Notegen AI Team

---

**Last Updated:** January 2026  
**Version:** 1.2.0
