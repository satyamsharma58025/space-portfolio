import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link: string;
  category?: string;
  techStack?: readonly string[];
  github?: string;
  className?: string;
}

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  category,
  techStack,
  github,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group">
      <div className="relative">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
        {category && (
          <span className="absolute top-4 right-4 px-3 py-1 text-sm rounded-full bg-[#2A0E61]/80 text-white backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      <div className="relative p-6">
        <h1 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h1>
        <p className="mt-3 text-gray-300">{description}</p>
        
        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-[#2A0E61]/30 text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-6 flex items-center gap-4">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Live Demo</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Source Code</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12C2 16.421 4.865 20.165 8.838 21.639C9.338 21.732 9.5 21.425 9.5 21.151V19.403C6.73 20.076 6.141 18.143 6.141 18.143C5.691 16.949 5.066 16.643 5.066 16.643C4.214 16.011 5.134 16.024 5.134 16.024C6.084 16.094 6.609 17.067 6.609 17.067C7.5 18.647 8.934 18.189 9.541 17.926C9.634 17.24 9.894 16.782 10.184 16.522C7.978 16.259 5.662 15.367 5.662 11.544C5.662 10.415 6.037 9.491 6.629 8.768C6.525 8.507 6.195 7.463 6.729 6.102C6.729 6.102 7.564 5.826 9.498 7.101C10.295 6.873 11.152 6.759 12.002 6.755C12.852 6.759 13.709 6.873 14.508 7.101C16.441 5.826 17.275 6.102 17.275 6.102C17.81 7.463 17.48 8.507 17.376 8.768C17.969 9.491 18.342 10.415 18.342 11.544C18.342 15.377 16.023 16.256 13.81 16.513C14.171 16.833 14.498 17.463 14.498 18.432V21.151C14.498 21.427 14.658 21.737 15.166 21.639C19.137 20.163 22 16.421 22 12C22 6.477 17.523 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
