"use client";

import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
	{
		title: "Arhan Sales",
		url: "https://arhan-sales.infinityfreeapp.com/",
		github: "https://github.com/ArhanAnsari/Arhan-Sales-Main",
		image: "projects/arhansales.png",
		description: "Professional business website with modern design and contact management.",
		category: "client",
		type: "original",
		technologies: ["HTML", "CSS", "JavaScript", "PHP"]
	},
	{
		title: "3D Car Racing Game",
		url: "https://arhanansari.github.io/carGameThreeJS/",
		github: "https://github.com/ArhanAnsari/carGameThreeJS",
		image: "projects/carGame.jpg",
		description: "Interactive 3D car racing game built with Three.js featuring realistic physics.",
		category: "game",
		type: "original",
		technologies: ["Three.js", "JavaScript", "WebGL", "CSS3"]
	},
	{
		title: "Task Manager Pro",
		url: "https://arhanansari.github.io/Task-Manager-App/",
		github: "https://github.com/ArhanAnsari/Task-Manager-App",
		image: "projects/taskManager.jpg",
		description: "Feature-rich task manager with drag-and-drop, categories, and local storage.",
		category: "productivity",
		type: "original",
		technologies: ["React", "LocalStorage", "CSS3", "JavaScript"]
	},
	{
		title: "CodeWithArhan Platform",
		url: "https://codewitharhan.infinityfreeapp.com/",
		github: "https://github.com/ArhanAnsari/CodeWithArhan-Website",
		image: "projects/CodeWithArhan.png",
		description: "Personal coding blog and tutorial platform with interactive code examples.",
		category: "education",
		type: "original",
		technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"]
	},
	{
		title: "No Internet Spider Game",
		url: "https://no-internet-spiderman-game.vercel.app/",
		github: "https://github.com/ArhanAnsari/No-Internet-Spiderman-Game",
		image: "projects/NoInternetSpidermanGame.jpg",
		description: "Chrome's offline game reimagined with Spider-Man theme and enhanced graphics.",
		category: "game",
		type: "inspired",
		technologies: ["JavaScript", "Canvas API", "CSS3", "HTML5"]
	},
	{
		title: "AI Chat Assistant",
		url: "https://chatgpt-clone-delta-pied.vercel.app/",
		github: "https://github.com/ArhanAnsari/ChatGPT-Clone",
		image: "projects/ChatGPT.jpg",
		description: "AI-powered chat interface with conversation history and modern UI design.",
		category: "ai",
		type: "learning",
		technologies: ["React", "OpenAI API", "Node.js", "Express"]
	},
	{
		title: "Smart ChatBot",
		url: "https://chatbot-dun-omega.vercel.app/",
		github: "https://github.com/ArhanAnsari/JavaScript-ChatBot",
		image: "projects/ChatBot.png",
		description: "Intelligent chatbot with natural language processing and contextual responses.",
		category: "ai",
		type: "original",
		technologies: ["JavaScript", "HTML5", "CSS3", "NLP"]
	},
	{
		title: "LeetCode Clone",
		url: "https://leetcode-clone-chi.vercel.app/",
		github: "https://github.com/ArhanAnsari/LeetCode-Clone",
		image: "projects/leetcode.jpg",
		description: "Full-stack coding platform with problem sets, code editor, and test cases.",
		category: "education",
		type: "inspired",
		technologies: ["React", "Node.js", "MongoDB", "Monaco Editor"]
	},
	{
		title: "Game Hub",
		url: "https://game-hub-iota-orpin.vercel.app/",
		github: "https://github.com/ArhanAnsari/Game-Hub",
		image: "projects/gamehub.jpg",
		description: "Gaming discovery platform with search, filters, and game information.",
		category: "web",
		type: "original",
		technologies: ["React", "TypeScript", "RAWG API", "Chakra UI"]
	},
	{
		title: "Captcha App",
		url: "https://captcha-mu-five.vercel.app/",
		github: "https://github.com/ArhanAnsari/Captcha-App",
		image: "projects/Captcha.jpg",
		description: "Human verification system with customizable CAPTCHA generation and validation.",
		category: "security",
		type: "original",
		technologies: ["JavaScript", "Canvas API", "HTML5", "CSS3"]
	},
	{
		title: "ChatBot using JavaScript",
		url: "https://javascript-chatbot-seven.vercel.app/",
		github: "https://github.com/ArhanAnsari/JavaScript-ChatBot-2",
		image: "projects/js-chatbot.jpg",
		description: "Simple chatbot interface with predefined responses and conversation flow.",
		category: "ai",
		type: "learning",
		technologies: ["JavaScript", "HTML5", "CSS3"]
	},
	{
		title: "Code Editor",
		url: "https://code-editor-gilt-eta.vercel.app/",
		github: "https://github.com/ArhanAnsari/Code-Editor",
		image: "projects/codeeditor.jpg",
		description: "Multi-language code editor with syntax highlighting and live preview.",
		category: "productivity",
		type: "original",
		technologies: ["React", "CodeMirror", "JavaScript", "CSS3"]
	},
	{
		title: "Zoom Clone (Yoom)",
		url: "https://zoom-clone-seven-delta.vercel.app/",
		github: "https://github.com/ArhanAnsari/Zoom-Clone",
		image: "projects/Zoom-Clone(Yoom).jpg",
		description: "Video conferencing platform with real-time communication and screen sharing.",
		category: "web",
		type: "inspired",
		technologies: ["Next.js", "WebRTC", "Socket.io", "Tailwind CSS"]
	},
	{
		title: "WhatsUp",
		url: "https://arhans-whatsup.vercel.app/",
		github: "https://github.com/ArhanAnsari/WhatsApp-Clone",
		image: "projects/WhatsApp-Clone.jpg",
		description: "Real-time messaging app with chat rooms and user authentication.",
		category: "web",
		type: "inspired",
		technologies: ["React", "Firebase", "Material-UI", "JavaScript"]
	},
	{
		title: "InstaSnap",
		url: "https://arhans-instasnap.vercel.app/",
		github: "https://github.com/ArhanAnsari/Instagram-Clone",
		image: "projects/Instagram-Clone.jpg",
		description: "Social media platform with photo sharing, likes, and comments functionality.",
		category: "web",
		type: "inspired",
		technologies: ["React", "Firebase", "Tailwind CSS", "Cloud Storage"]
	},
	{
		title: "YouTube Clone",
		url: "https://youtube-clone-alpha-black.vercel.app/",
		github: "https://github.com/ArhanAnsari/YouTube-Clone",
		image: "projects/Youtube.jpg",
		description: "Video platform with search, video player, and API integration.",
		category: "web",
		type: "inspired",
		technologies: ["React", "YouTube API", "Tailwind CSS", "Axios"]
	},
	{
		title: "Figma Clone",
		url: "https://figma-clone-phi-eight.vercel.app/",
		github: "https://github.com/ArhanAnsari/Figma-Clone",
		image: "projects/figma-clone.jpg",
		description: "Collaborative design tool with live cursor, comments, and drawing on canvas.",
		category: "productivity",
		type: "inspired",
		technologies: ["Next.js", "Fabric.js", "Liveblocks", "Tailwind CSS"]
	},
	{
		title: "Rediscord",
		url: "https://rediscord-eight.vercel.app/",
		github: "https://github.com/ArhanAnsari/Discord-Clone",
		image: "projects/discord-clone.jpg",
		description: "Communication platform UI clone with channels, servers, and messaging.",
		category: "web",
		type: "inspired",
		technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "TypeScript"]
	},
	{
		title: "Cookmom",
		url: "https://recipe-app-phi-two.vercel.app/",
		github: "https://github.com/ArhanAnsari/Recipe-App",
		image: "projects/cookmom.jpg",
		description: "Recipe discovery app with search, favorites, and detailed cooking instructions.",
		category: "web",
		type: "original",
		technologies: ["React", "Recipe API", "CSS3", "JavaScript"]
	},
	{
		title: "Among Us",
		url: "https://among-us-gules.vercel.app/",
		github: "https://github.com/ArhanAnsari/Among-Us",
		image: "projects/AmongUs.png",
		description: "Multiplayer social deduction game with real-time communication.",
		category: "game",
		type: "inspired",
		technologies: ["HTML5", "CSS3", "JavaScript", "Socket.io"]
	},
	{
		title: "Stopwatch",
		url: "https://arhanansari.github.io/stopwatch/",
		github: "https://github.com/ArhanAnsari/stopwatch",
		image: "projects/stopwatch.jpg",
		description: "Simple and elegant stopwatch with lap timer and reset functionality.",
		category: "productivity",
		type: "learning",
		technologies: ["HTML5", "CSS3", "JavaScript"]
	},
	{
		title: "RK Marketing",
		url: "https://rk-marketing.vercel.app/",
		github: "https://github.com/ArhanAnsari/RK-Marketing",
		image: "projects/rk-marketing.jpg",
		description: "E-commerce shopping website for client with product catalog and cart.",
		category: "client",
		type: "client",
		technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
	},
	{
		title: "Dictionary App",
		url: "https://dictionary-app-indol-one.vercel.app/",
		github: "https://github.com/ArhanAnsari/Dictionary-App",
		image: "projects/dictionary.jpg",
		description: "Word lookup application with definitions, synonyms, and pronunciation.",
		category: "productivity",
		type: "learning",
		technologies: ["HTML5", "CSS3", "JavaScript", "Dictionary API"]
	},
	{
		title: "Drawing App",
		url: "https://arhanansari.github.io/drawing-app/",
		github: "https://github.com/ArhanAnsari/drawing-app",
		image: "projects/drawing-app.jpg",
		description: "Canvas-based drawing tool with colors, brush sizes, and save feature.",
		category: "productivity",
		type: "original",
		technologies: ["HTML5", "Canvas API", "JavaScript", "CSS3"]
	},
	{
		title: "Multiplayer Pirate Card Game",
		url: "https://multiplayer-pirate-card-game.vercel.app/#r=RHCFL",
		github: "https://github.com/ArhanAnsari/Multiplayer-Pirate-Card-Game",
		image: "projects/multiplayer-pirate-card-game.jpg",
		description: "Real-time multiplayer card game with 3D graphics and strategic gameplay.",
		category: "game",
		type: "original",
		technologies: ["React", "Three.js", "Playroom", "React Three Fiber"]
	},
	{
		title: "Arhan Guys",
		url: "https://arhan-guys.vercel.app/",
		github: "https://github.com/ArhanAnsari/Arhan-Guys",
		image: "projects/Arhan-Guys.jpg",
		description: "Fall Guys inspired 3D platformer game with physics and obstacles.",
		category: "game",
		type: "inspired",
		technologies: ["React Three Fiber", "Three.js", "Rapier", "JavaScript"]
	},
	{
		title: "Crud Operation",
		url: "https://arhanansari.github.io/Crud/",
		github: "https://github.com/ArhanAnsari/Crud",
		image: "projects/Crud.jpg",
		description: "Basic CRUD application demonstrating create, read, update, delete operations.",
		category: "web",
		type: "learning",
		technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"]
	},
	{
		title: "Emoji Dice Roller",
		url: "https://arhanansari.github.io/Emoji_Dice_Roller/",
		image: "projects/emoji-dice-roller.jpg",
		description: "A simple Emoji Dice Roller using HTML,CSS,JS.",
	},
	{
		title: "Arhan Laptop.in",
		url: "https://arhanansari.github.io/Arhan-Laptop.in/",
		image: "projects/ArhanLaptop.in.jpg",
		description: "A simple shopping website made with HTML,CSS,JS.",
	},
	{
		title: "Quiz App",
		url: "https://arhanansari.github.io/Quiz_App/",
		image: "projects/quizapp.png",
		description: "This project is created with HTML, CSS and JavaScript that allows user to answer given questions.It includes sections for starting the quiz, displaying quiz information. There’s a timer, for each question and its options. If the user doesn’t answer within the time limit, then the next question appears automatically. After selecting an option, it checks if it’s correct or not. At the end,it displays your score with a result message.It also has the option to restart the quiz or quit.",
	},
	{
		title: "Aaiza Cosmetics",
		url: "https://aaizacosmetics.vercel.app/",
		image: "projects/Aaiza-Cosmetics.jpg",
		description: "This is a website of my client. This is a Shopping Website made with HTML,CSS,JS.",
	},
	{
		title: "Father's Day",
		url: "https://fathers-day-tau.vercel.app/",
		image: "projects/Fathers-Day.png",
		description: "This is a professional Father's Day wishing website designed with HTML, CSS, and JavaScript.The clean and modern design ensures a delightful user experience, making it a perfect way to celebrate and honor fathers. The responsive layout ensures compatibility across various devices, while the simple JavaScript functionality adds a touch of interactivity.",
	},
	{
		title: "Password Generator",
		url: "https://arhanansari.github.io/Password-Generator-YT/",
		image: "projects/Password-Generator.jpg",
		description: "A simple and beautiful Password Generator built with HTML,CSS,JS. ",
	},
	{
		title: "Password Validator",
		url: "https://password-validator-yt.vercel.app/",
		image: "projects/Password-Validator.jpg",
		description: "A simple and beautiful Password Validator built with HTML,CSS,JS.",
	},
	{
		title: "Kanban Task Management",
		url: "https://kanban-task-management-project.vercel.app/",
		image: "projects/Karban-Task-Management.jpg",
		description: "This project is a recreation of the famous task management application Karban.It aims to provide a user-friendly and efficient interface for organizing your daily tasks.",
	},
	{
		title: "Colour Flipper",
		url: "https://simple-colour-flipper-app-yt.vercel.app/",
		image: "projects/Colour-Flipper.jpg",
		description: "A simple and beautiful Colour Flipper built with HTML,CSS,JS.",
	},
	{
		title: "Chat to PDF",
		url: "https://arhans-chat-to-pdf.vercel.app/",
		image: "projects/chattopdf.jpg",
		description: "My first AI SaaS app made with using Next.js, Clerk, React Dropzone, Shadcn UI, Pinecone, Langchain, Gemini, OpenAI, Stripe. Chat to PDF let's you PDF and then you can chat with AI if you any problems with PDF.",
	},
	{
		title: "SoundStream",
		url: "https://soundstream.vercel.app/",
		image: "projects/soundstream.jpg",
		description: "This is a Spotify Clone made with Vite, Vue 3, Tailwind CSS, and Pinia.",
	},
	{
		title: "hexta/ui",
		url: "https://ui-hexta.vercel.app/",
		image: "projects/ui-hexta.jpg",
		description: "HextaUI is a user interface library that offers contemporary components, making it effortless to integrate into your projects. With the HextaUI CLI, you can quickly install and utilize these components without any hassle.",
	},
	{
		title: "Language Translator",
		url: "https://language-translator-app-phi.vercel.app/",
		image: "projects/language-translator.jpg",
		description: "Language translator is a program that is used to translate text into multiple languages like Nepali, Hindi, Spanish, etc. In my language translator app, users can easily translate text into different languages, copy translated text, and convert text to speech. It is similar to Google Translate. Made with HTML, CSS, JS and MyMemory API",
	},
	{
		title: "Google Translate",
		url: "https://arhans-google-translate.vercel.app/",
		image: "projects/Google-Translate.jpg",
		description: "A simple Google Translate Clone made with HTML, CSS, JS and Google Translate API. It has a Dark mode feature too.",
	},
	{
		title: "Gemini",
		url: "https://gemini-ai-chatbot-pchm.vercel.app/",
		image: "projects/Gemini.jpg",
		description: "A Gemini Chatbot built with Next.js, Vercel AI SDK and Google Gemini.",
	},
	{
		title: "Carrefour",
		url: "https://arhans-ecommerce.vercel.app/",
		image: "projects/CareeFour.jpg",
		description: "This is a full stack Ecommerce website.",
	},
	{
		title: "Windows 11",
		url: "https://arhans-windows11.vercel.app/",
		image: "projects/Windows11.jpg",
		description: "A Windows 11 Clone app built with React, Tailwind CSS, Framer Motion, React Draggable, React Router DOM.",
	},
	{
		title: "RentUP",
		url: "https://arhans-rentup.vercel.app/",
		image: "projects/RentUP.png",
		description: "A Real Estate Website built with React. ",
	},
	{
		title: "Crousal Maker",
		url: "https://crousalmaker.vercel.app/",
		image: "projects/Crousal Maker.jpg",
		description: "My 2nd SaaS App. Crousal maker is a simple crousal editing platform with in-built crousals templates only you can edit heading , descriptions and Images and download it in both format PDF and JPEG. Built with Nextjs, Typescript, Shadcn UI, js-pdf, Html2canvas and tinyColor2.",
	},
	{
		title: "ArhanBlog",
		url: "https://arhanblog.vercel.app/",
		image: "projects/ArhanBlog.jpg",
		description: "A Markdown blog made with using Next.js, TailwindCSS, Shadcn, Pieces, Remark and Rehype.",
	},
	{
		title: "Mixcnui",
		url: "https://mixcnui.vercel.app/",
		image: "projects/Mixcnui.jpg",
		description: "My 3rd SaaS App. Mixcnui is 20+ free and open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. Built with React, Next.js, TailwindCSS, Framer Motion. ",
	},
	{
		title: "Metaverse",
		url: "https://arhans-metaverse.vercel.app/",
		image: "projects/Metaverse.jpg",
		description: "A Metaverse Website made with Next.js, TailwindCSS & Framer Motion.",
	},
	{
		title: "Evogym",
		url: "https://evogym-brown-mu.vercel.app/",
		image: "projects/Evogym.png",
		description: "A Gym Website made with React.",
	},
	{
		title: "Nike Landing Page",
		url: "https://nike-landing-page-seven-tan.vercel.app/",
		image: "projects/Nike-Landing-Page.png",
		description: "A Nike Landing Page made with TailwindCSS.",
	},
	{
		title: "InspireGem",
		url: "https://inspiregem.vercel.app/",
		image: "projects/InspireGem.png",
		description: "InspireGem is a AI Powered Website made with Next.js, TailwindCSS, Google Gemini, Stripe amnd Google Firebase",
	},
	{
		title: "YC DIRECTORY",
		url: "https://yc-directory-red.vercel.app/",
		image: "projects/YC-DIRECTORY.jpg",
		description: "A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience. It is made with React 19, Next.js 15, Sanity, TailwindCSS, ShadCN, TypeScript",
	},
	{
		title: "StoreIt",
		url: "https://storeit-five.vercel.app/",
		image: "projects/StoreIt.png",
		description: "A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management. It is made with React 19, Next.js 15, Appwrite, TailwindCSS, ShadCN, TypeScript.",
	},
	{
		title: "An Awwwards Winning Website",
		url: "https://award-winning-website-iota.vercel.app/",
		image: "projects/Award-Winning-Website.png",
		description: "Build a visually captivating website inspired by Zentry, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling. Learn how to deliver a luxurious, modern feel, focusing on engaging UI/UX and smooth responsiveness, capturing the essence of what makes an Awwwards winner. It is made with GSAP, React.js, Tailwind CSS",
	},
	{
		title: "Restyled",
		url: "https://restyled-ecru.vercel.app/",
		image: "projects/restyled.png",
		description: "Restyled is a Image Editor & Video Editor also having AI support and is made with Next.js, TailwindCSS and Cloudinary.",
	},
	{
		title: "Immersilearn",
		url: "https://immersilearn.vercel.app/",
		image: "projects/immersilearn.png",
		description: "Immersilearn is a platform for learning and it has a clean and minimalistic design for a smooth user experience. It is made with React 19, Next.js 15, TailwindCSS, TypeScript and Appwrite.",
	},
	{
		title: "CodeFount",
		url: "https://codefount.vercel.app/",
		image: "projects/CodeFount.png",
		description: "A sleek and modern online IDE built with Next.js 15, Convex, Sentry, Lemon Squeezy, Clerk and EmailJS, offering multi-language support, customization, and community-driven collaboration. Perfect for developers seeking a powerful and seamless coding environment. ",
	},
	{
		title: "Happy New Year 2025",
		url: "https://happynewyear2025-olive.vercel.app/",
		image: "projects/happynewyear2025.png",
		description: "A Happy New Year 2025 Website made with HTML, CSS, JS.",
	},
	{
		title: "Happy Republic Day 2025",
		url: "https://happy-republic-day-one.vercel.app/",
		image: "projects/happyrepublicday2025.png",
		description: "A Happy Republic Day 2025 Website made with HTML, CSS, JS.",
	},
	{
		title: "Moodflix",
		url : "https://moodflix-theta.vercel.app/",
		image : "projects/moodflix.png",
		description : "Moodflix is a platform that allows users to discover movies based on their mood. It is made with React 19, Tailwind CSS, and the TMDb API.",
	},
	{
		title: "Synthara",
		url: "https://synthara.is-a.dev/",
		image: "projects/Synthara.png",
		description: "Synthara is an advanced AI-powered application designed to process and generate insights from various types of files. Initially focused on image processing. Made with Next.js, Tailwind CSS, Gemini, Shadcn/ui and Together AI.",
	},
	{
		title: "Clipgen AI",
		url: "https://clipgen-ai.vercel.app/",
		github: "https://github.com/ArhanAnsari/Clipgen-ai",
		image: "projects/Clipgen AI.png",
		description: "This is an AI-powered content analysis platform that helps content creators get insights from their YouTube videos. The platform uses advanced AI to analyze video content, generate transcriptions, create thumbnails, and provide content recommendations. Made with Next.js 15, React 19, TailwindCSS, AI SDK, Gemini, Together AI, Clerk, Convex, Radix UI components and youtubei.js for video data extraction.",
		category: "web",
		type: "original",
		technologies: ["NextJS", "TailwindCSS", "Sentry", "TypeScript", "Clerk", "Convex"]
	},
	{
		title: "Reddish",
		url: "https://arhans-reddish.vercel.app/",
		github: "https://github.com/ArhanAnsari/reddit-clone",
		image: "projects/Reddish.jpg",
		description: "Reddish is a Reddit Clone made with Next.js 15, TailwindCSS, ShadCN, Radix UI, TypeScript, Sanity CMS, Sentry, Clerk, Lucide Icons, Gemini API, Vercel.",
		category: "web",
		type: "original",
		technologies: ["NextJS", "TailwindCSS", "Sentry", "ShadCN", "TypeScript", "Sanity"]
	},
	{
		title: "Clystra Networks Pvt. Ltd.",
		url: "https://www.clystranetworks.com/",
		github: "https://github.com/ArhanAnsari/Clystra",
		image: "projects/Clystra-Networks.png",
		description: "This is a website of my client. This is a Network Infrastructure Provider Company made with Next.js 15, TailwindCSS, ShadCN, TypeScript, Framer Motion, React, Sentry and Resend.",
		category: "client",
		type: "original",
		technologies: ["NextJS", "TailwindCSS", "Sentry", "ShadCN", "TypeScript"] 
	},
];

const Project = (props) => {
	const { project, highlighted } = props;

	const background = useRef();
	const bgOpacity = useMotionValue(0.4);

	useEffect(() => {
		animate(bgOpacity, highlighted ? 0.7 : 0.4);
	}, [highlighted]);

	useFrame(() => {
		background.current.material.opacity = bgOpacity.get();
	});

	return (
		<group {...props}>
			<mesh
				position-z={-0.001}
				onClick={() =>
					window.open(project.url, "_blank")
				}
				ref={background}
			>
				<planeGeometry args={[2.2, 2]} />
				<meshBasicMaterial
					color="black"
					transparent
					opacity={0.4}
				/>
			</mesh>
			<Image
				scale={[2, 1.2, 1]}
				url={project.image}
				toneMapped={false}
				position-y={0.3}
			/>
			<Text
				maxWidth={2}
				anchorX={"left"}
				anchorY={"top"}
				fontSize={0.2}
				position={[-1, -0.4, 0]}
			>
				{project.title.toUpperCase()}
			</Text>
			<Text
				maxWidth={2}
				anchorX="left"
				anchorY="top"
				fontSize={0.1}
				position={[-1, -0.6, 0]}
			>
				{project.description}
			</Text>
		</group>
	);
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
	const { viewport } = useThree();
	const [currentProject] = useAtom(currentProjectAtom);

	return (
		<group position-y={-viewport.height * 2 + 1}>
			{projects.map((project, index) => (
				<motion.group
					key={"project_" + index}
					position={[index * 2.5, 0, -3]}
					animate={{
						x:
							0 +
							(index -
								currentProject) *
								2.5,
						y:
							currentProject === index
								? 0
								: -0.1,
						z:
							currentProject === index
								? -2
								: -3,
						rotateX:
							currentProject === index
								? 0
								: -Math.PI / 3,
						rotateZ:
							currentProject === index
								? 0
								: -0.1 *
									Math.PI,
					}}
				>
					<Project
						project={project}
						highlighted={
							index === currentProject
						}
					/>
				</motion.group>
			))}
		</group>
	);
};
