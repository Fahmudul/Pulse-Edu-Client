import { FormDataType } from "@/types/global";
import { ArrowLeft, ExternalLink, Github, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectDetailsCard = ({ project }: { project: FormDataType }) => {
  return (
    <div style={{ backgroundColor: "#131f22" }} className="min-h-screen p-6">
      <div
        style={{ backgroundColor: "#1a292c" }}
        className="max-w-4xl mx-auto rounded-lg p-6"
      >
        {/* Back Button */}
        <button
          style={{ color: "#fee5b5" }}
          className=" mb-6 hover:opacity-80 transition-opacity"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </button>

        {/* Project Title */}
        <h1 style={{ color: "#fee5b5" }} className="text-3xl font-bold mb-6">
          {project.title}
        </h1>

        {/* Project Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.image as string}
            alt={project.title}
            className="w-full h-auto object-cover"
            width={800}
            height={400}
          />
        </div>

        {/* Links Section */}
        <div className="flex gap-4 mb-8">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#fee5b5", color: "#131f22" }}
            className="flex items-center gap-2 px-4 py-2 rounded font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#131f22",
              color: "#fee5b5",
              borderColor: "#fee5b5",
            }}
            className="flex items-center gap-2 px-4 py-2 rounded font-medium border hover:opacity-80 transition-opacity"
          >
            <Github size={20} />
            View Code
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h2 style={{ color: "#fee5b5" }} className="text-xl font-bold mb-3">
            Tech Stack & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                style={{
                  backgroundColor: "#131f22",
                  color: "#fee5b5",
                  borderColor: "#fee5b5",
                }}
                className="px-3 py-1 rounded border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Type */}
        <div className="mb-8">
          <h2 style={{ color: "#fee5b5" }} className="text-xl font-bold mb-3">
            Project Type
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.projectTypes.map((type: string) => (
              <span
                key={type}
                style={{
                  backgroundColor: "#131f22",
                  color: "#fee5b5",
                  borderColor: "#fee5b5",
                }}
                className="px-3 py-1 rounded border"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <h2 style={{ color: "#fee5b5" }} className="text-xl font-bold mb-3">
            Project Description
          </h2>
          <p style={{ color: "#fee5b5" }} className="leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
