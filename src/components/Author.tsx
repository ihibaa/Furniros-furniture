"use client";

import React from "react";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

type AuthorProps = {
  name: string;
  bio: string;
  image: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
};

const Author: React.FC<AuthorProps> = ({
  name,
  bio,
  image,
  twitter,
  linkedin,
  github,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
      <div className="w-32 h-32">
        <Image
          src={image}
          alt={`Picture of ${name}`}
          width={128}
          height={128}
          className="rounded-full object-cover"
        />
      </div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-center text-gray-600">{bio}</p>
      <div className="flex space-x-4 mt-2">
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Author;
