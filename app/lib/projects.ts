import A2 from './images/A2.jpg';
import BF from './images/BF.jpg';
import CT from './images/CT.jpg';
import MS from './images/MS.jpg';

export const projImg = {
    A2,
    BF,
    CT,
    MS
}


export const projects = [
    {
        title: 'MuSync: Music Streaming Platform',
        PA: 'Built a real-time music streaming platform with interactive features, increasing user engagement by 40% through democratic song selection.',
        PB: 'Integrated YouTube API for seamless video playback and implemented Next-Auth to prevent 95% of unauthorized access attempts.',
        img: MS,
        github: 'https://github.com/brawler079/Musi',
        TS: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'YouTube API', 'Next-Auth']
    },
    {
        title: 'Area 204: Real-time Chat Application',
        PA: 'Developed a real-time chat application handling 150+ concurrent users with low-latency messaging using Socket.io.',
        PB: 'Optimized MongoDB queries, reducing message retrieval time by 50% for improved user experience.',
        img: A2,
        github: 'https://github.com/brawler079/Area-204',
        TS: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js']
    },
    {
        title: 'Bone Fracture Detection',
        PA: 'Created a deep learning model achieving 92% accuracy in X-ray fracture detection with advanced preprocessing techniques.',
        PB: 'Designed a responsive frontend enabling real-time result visualization and treatment suggestions.',
        img: BF,
        github: 'https://github.com/brawler079/FractureScan-AI',
        TS: ['Next.js', 'Tailwind CSS', 'Python', 'FastAPI']
    },
    {
        title: 'Collabify: Task Management App',
        PA: 'Built a task management system with real-time updates using WebSockets for efficient team collaboration.',
        PB: 'Implemented secure role-based access control to manage user permissions and data access.',
        img: CT,
        github: 'https://github.com/brawler079/Collaborative-Task-Management-System',
        TS: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js']
    }
]