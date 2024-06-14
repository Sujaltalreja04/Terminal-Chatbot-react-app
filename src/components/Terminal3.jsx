import React, { useState, useEffect, useRef } from 'react';
import TerminalControls from './_comp/TerminalControls';
import TerminalHistory from './_comp/TerminalHistory';
import TerminalInput from './_comp/TerminalInput';

const USER = {
  name: 'Joseph Mugo',
  email: 'test@gmail.com',
  location: 'Nairobi, Kenya',
  bio: 'Software Engineer',
  about: 'I am a software engineer with a passion for building things. I have experience in building web applications using React, Node.js, and Express. I also have experience in building mobile applications using React Native. I am currently looking for new opportunities to work on exciting projects.',
  projects: [
    {
      name: 'Task Manager',
      description: 'A web application that allows users to create, update, and delete tasks. Built using React, Node.js, and Express.',
      url: '#',
      technologies: ['React', 'Node.js', 'Express'],
      github: 'https://github.com/josephmugo/task-manager'
    },
    {
      name: 'E-commerce Website',
      description: 'An online store built with React and Node.js, featuring product browsing, cart functionality, and payment integration.',
      url: '#',
      technologies: ['React', 'Node.js'],
      github: 'https://github.com/josephmugo/e-commerce-website'
    },
    {
      name: 'Portfolio Website',
      description: 'My personal portfolio website showcasing my projects, skills, and experience. Built with React and styled-components.',
      url: '#',
      technologies: ['React', 'styled-components'],
      github: 'https://github.com/josephmugo/portfolio-website'
    },
    {
      name: 'Social Media App',
      description: 'A social media platform where users can share posts, connect with friends, and engage in discussions. Built with React, Node.js, and MongoDB.',
      url: '#',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/josephmugo/social-media-app'
    }
  ],
  skills: {
    languages: ['JavaScript', 'Python', 'Java', 'C++'],
    frameworks: ['React', 'Node.js', 'Express', 'React Native'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'VS Code', 'Postman']
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/josephmugo',
    github: 'https://github.com/josephmugo',
    twitter: 'https://twitter.com/josephmugo'
  },
  education: [
    {
      institution: 'University of Nairobi',
      degree: 'Bachelor of Science in Computer Science',
      graduated: '2018'
    },
    {
      institution: 'Codecademy',
      degree: 'Full Stack Web Development Course',
      graduated: '2017'
    }
  ],
  certifications: [
    {
      title: 'React Developer Certification',
      issuer: 'Udemy',
      year: '2020'
    },
    {
      title: 'Node.js Certification',
      issuer: 'Coursera',
      year: '2019'
    }
  ],
  experience: [
    {
      company: 'Tech Solutions Ltd',
      position: 'Full Stack Developer',
      period: '2019 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and Express. Collaborated with cross-functional teams to deliver high-quality software solutions.'
    },
    {
      company: 'Software Co.',
      position: 'Software Engineering Intern',
      period: 'Summer 2018',
      description: 'Assisted in developing features for a large-scale web application. Gained hands-on experience with modern web development technologies.'
    }
  ],
  languages: ['English', 'Swahili'],
  hobbies: ['Reading', 'Hiking', 'Photography'],
  interests: ['Artificial Intelligence', 'Blockchain', 'IoT']
};



const COMMANDS = [
  {
    id: 1,
    command: 'about',
    usage: "Type 'about' to learn more about me.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">About Me</h2>
        <p class="mt-4 text-secondary-text">
          ${USER.about}
        </p>
      </div>
    `
  },
  {
    id: 2,
    command: 'projects',
    usage: "Type 'projects' to view my projects.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">My Projects</h2>
        ${USER.projects.map((project) => `
          <div class="mt-6">
            <h3 class="text-xl font-bold">${project.name}</h3>
            <p class="mt-2 text-secondary-text">${project.description}</p>
            <div class="mt-2">
              <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">
                ${project.technologies.join('</span><span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">')}
              </span>
            </div>
            <div class="mt-2">
              <a href="${project.github}" class="text-primary-color hover:underline">
                <i class="fa-solid fa-up-right-from-square mr-1"></i>
                GitHub
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `
  },
  {
    id: 3,
    command: 'skills',
    usage: "Type 'skills' to see my expertise.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">My Skills</h2>
        <div class="mt-4">
          <h3 class="text-xl font-bold">
            <i class="fa-solid fa-code mr-2 text-primary-color"></i>
            Languages
          </h3>
          <div class="mt-2 flex flex-wrap">
            ${USER.skills.languages.map((language) => `
              <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">${language}</span>
            `).join('')}
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-bold">
            <i class="fa-solid fa-code-branch mr-2 text-primary-color"></i>
            Frameworks
          </h3>
          <div class="mt-2 flex flex-wrap">
            ${USER.skills.frameworks.map((framework) => `
              <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">${framework}</span>
            `).join('')}
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-bold">
            <i class="fa-solid fa-database mr-2 text-primary-color"></i>
            Databases
          </h3>
          <div class="mt-2 flex flex-wrap">
            ${USER.skills.databases.map((database) => `
              <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">${database}</span>
            `).join('')}
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-bold">
            <i class="fa-solid fa-tools mr-2 text-primary-color"></i>
            Tools
          </h3>
          <div class="mt-2 flex flex-wrap">
            ${USER.skills.tools.map((tool) => `
              <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">${tool}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `
  },
  {
    id: 4,
    command: 'social',
    usage: "Type 'social' to see my social links.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">Social Links</h2>
        <div class="mt-4 flex items-center">
          <i class="fa-brands fa-linkedin text-primary-color mr-2"></i>
          <a href="${USER.social.linkedin}" class="text-primary-color hover:underline">LinkedIn</a>
        </div>
        <div class="mt-2 flex items-center">
          <i class="fa-brands fa-github text-primary-color mr-2"></i>
          <a href="${USER.social.github}" class="text-primary-color hover:underline">GitHub</a>
        </div>
        <div class="mt-2 flex items-center">
          <i class="fa-brands fa-twitter text-primary-color mr-2"></i>
          <a href="${USER.social.twitter}" class="text-primary-color hover:underline">Twitter</a>
        </div>
      </div>
    `
  },
  {
    id: 5,
    command: 'education',
    usage: "Type 'education' to see my educational background.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">Education</h2>
        ${USER.education.map((edu) => `
          <div class="mt-6">
            <h3 class="text-xl font-bold">${edu.institution}</h3>
            <p class="mt-2 text-secondary-text">${edu.degree}</p>
            <p class="mt-2 text-secondary-text">Graduated: ${edu.graduated}</p>
          </div>
        `).join('')}
      </div>
    `
  },
  {
    id: 6,
    command: 'certifications',
    usage: "Type 'certifications' to see my certifications.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">Certifications</h2>
        ${USER.certifications.map((cert) => `
          <div class="mt-6">
            <h3 class="text-xl font-bold">${cert.title}</h3>
            <p class="mt-2 text-secondary-text">Issuer: ${cert.issuer}</p>
            <p class="mt-2 text-secondary-text">Year: ${cert.year}</p>
          </div>
        `).join('')}
      </div>
    `
  },
  {
    id: 7,
    command: 'experience',
    usage: "Type 'experience' to see my work experience.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">Work Experience</h2>
        ${USER.experience.map((exp) => `
          <div class="mt-6">
            <h3 class="text-xl font-bold">${exp.position}</h3>
            <p class="mt-2 text-secondary-text">${exp.company} | ${exp.period}</p>
            <p class="mt-2 text-secondary-text">${exp.description}</p>
          </div>
        `).join('')}
      </div>
    `
  },
  {
    id: 8,
    command: 'languages',
    usage: "Type 'languages' to see the languages I speak.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">Languages</h2>
        <div class="mt-4">
          ${USER.languages.map((lang) => `
            <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${lang}</span>
          `).join('')}
        </div>
      </div>
    `
  },
  {
    id: 9,
    command: 'hobbies',
    usage: "Type 'hobbies' to see my hobbies.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">Hobbies</h2>
        <div class="mt-4">
          ${USER.hobbies.map((hobby) => `
            <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${hobby}</span>
          `).join('')}
        </div>
      </div>
    `
  },
  {
    id: 10,
    command: 'interests',
    usage: "Type 'interests' to see my interests.",
    description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold">Interests</h2>
        <div class="mt-4">
          ${USER.interests.map((interest) => `
            <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${interest}</span>
          `).join('')}
        </div>
      </div>
    `
  },
  {
    id: 11,
    command: 'welcome',
    usage: "Type 'welcome' to see the greeting.",
    description: `
      <div class="text-primary-text">
        <h1 class="text-3xl font-bold">Welcome to my Terminal Portfolio!</h1>
        <p class="mt-4 text-secondary-text">
          Greetings, fellow tech enthusiast! I'm excited to share my journey with you through this interactive terminal interface. 
        </p>
        <p class="mt-2 text-secondary-text">
          Feel free to explore the available commands and discover more about my background, skills, projects, and social connections. 
        </p>
        <p class="mt-2 text-secondary-text">
          Let's embark on an adventure together and uncover the stories behind my work. Type <span class="bg-primary-color px-2 py-1 rounded-md text-white text-sm">help</span> to see the list of available commands.
        </p>
      </div>
    `
  }
];



const Terminal = () => {
  const [terminalHistory, setTerminalHistory] = useState([{
    command: 'welcome',
    output: [
      `
        <div class="text-primary-text">
          <h1 class="text-3xl font-bold">Welcome to my Terminal Portfolio!</h1>
          <p class="mt-4 text-secondary-text">
            Greetings, fellow tech enthusiast! I'm excited to share my journey with you through this interactive terminal interface. 
          </p>
          <p class="mt-2 text-secondary-text">
            Feel free to explore the available commands and discover more about my background, skills, projects, and social connections. 
          </p>
          <p class="mt-2 text-secondary-text">
            Let's embark on an adventure together and uncover the stories behind my work. Type <span class="bg-primary-color px-2 py-1 rounded-md text-white text-sm">help</span> to see the list of available commands.
          </p>
        </div>
      `
    ]
  }]);
  const terminalRef = useRef(null);

  // on terminal load, focus on input or click on terminal

  useEffect(() => {
    setFocusOnInput(true);
    terminalRef.current.addEventListener('click', () => {
      setFocusOnInput((p) => !p);
    });

    return () => {
      terminalRef.current.removeEventListener('click', () => {
        setFocusOnInput((p) => !p);
      });
    }

  }, []);


  const [focusOnInput, setFocusOnInput] = useState(false);

  const scrollToBottom = () => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  };

  const handleCommandSubmit = (command) => {
    let output = [];

    switch (command.trim().toLowerCase()) {
      case 'clear':
        setTerminalHistory([]);
        return;
      case 'help':
        output = `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Available Commands</h2>
            ${COMMANDS.map((cmd) => `
              <div class="flex items-start mb-4">
                <div class="bg-primary-color text-primary-bg px-2 py-1 rounded-md mr-4">
                  ${cmd.command}
                </div>
                <p class="text-secondary-text">${cmd.usage}</p>
              </div>
            `).join('')}
          </div>
        `;
        break;
      case 'exit':
        window.close();
        break;
      case 'about':
      case 'projects':
      case 'skills':
      case 'social':
      case 'education':
      case 'certifications':
      case 'experience':
      case 'languages':
      case 'hobbies':
      case 'interests':
      case 'welcome':
        output = COMMANDS.find((item) => item.command === command).description;
        break;
      default:
        // Invalid command then we will sort the commands and check if the command is similar to any of the commands
        const sortedCommands = COMMANDS.map((cmd) => cmd.command);
        const userCommand = command.trim().toLowerCase().split("").sort().join("");
        let high = 0;
        let highIndex = 0;

        for (let i = 0; i < sortedCommands.length; i++) {
          const cmd = sortedCommands[i].split("").sort().join("");
          let count = 0;
          for (let j = 0; j < userCommand.length; j++) {
            if (cmd.includes(userCommand[j])) {
              count++;
            }
          }
          if (count > high) {
            high = count;
            highIndex = i;
          }
        }
        output = `
          <div class="text-primary-text">
            <p>Command not found. Did you mean <span class="bg-primary-color px-2 py-1 rounded-md text-white text-sm">${COMMANDS[highIndex].command}</span>?</p>
          </div>
        `;
        break;
    }

    if (!Array.isArray(output)) {
      output = [output];
    }


    setTerminalHistory([...terminalHistory, { command, output }]);
  };
  useEffect(() => {
    scrollToBottom();
  }, [terminalHistory]);

  return (
    <div
      ref={terminalRef}
      className="terminal bg-primary-bg text-primary-text p-0 pt-0 rounded-lg shadow-lg md:w-3/4 w-11/12 md:mt-0 mt-4 overflow-y-auto flex flex-col relative border-2 border-primary-color border-opacity-50 h-[80vh] max-h-[90vh]"
    >
      <TerminalControls
        onClose={(e) => {
          e.target.closest('.terminal').classList.add('hidden');
          setTimeout(() => {
            // Remove the terminal from the DOM
            e.target.closest('.terminal').remove();
          }, 700);
        }
        }
        onMinimize={(e) => {
          e.target.closest('.terminal').classList.add('hidden');
        }
        }
        onMaximize={(e) => {
          e.target.closest('.terminal').classList.add('hidden');
        }
        }
      />
      <div className="flex flex-col p-4 flex-1">
        <TerminalHistory history={terminalHistory} />
        <TerminalInput focusOnInput={focusOnInput} scrollToBottom={scrollToBottom} onSubmit={handleCommandSubmit} />
      </div>
    </div>
  );

}

export default Terminal;
