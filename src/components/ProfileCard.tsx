import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileCardProps {
  name: string;
  title: string;
  handle?: string;
  status?: string;
  contactText?: string;
  avatarUrl?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status = 'Offline',
  contactText = 'Contact Me',
  avatarUrl = '/default-avatar.png',
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
  socials,
}) => {
  const motionConfig = enableTilt
    ? {
        whileHover: { scale: 1.05, rotateY: 3, rotateX: -3 },
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }
    : {};

  return (
    <motion.div
      {...motionConfig}
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center text-white max-w-sm mx-auto"
    >
      {/* Avatar */}
      <div className="relative ">
        <img
          src={avatarUrl}
          alt={name}
          className="w-64 h-64 rounded-full border-4 border-white/10 object-cover shadow-lg"
        />
        {/* <span
          className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-slate-900 ${
            status === 'Online' ? 'bg-green-500' : 'bg-gray-500'
          }`}
          title={status}
        /> */}
      </div>

      {/* Name & Title */}
      {showUserInfo && (
        <>
          <h2 className="text-2xl text-white font-semibold">{name}</h2>
          <p className="text-slate-400 text-sm">{title}</p>
          {/* {handle && <p className="text-slate-500 mt-1">@{handle}</p>} */}
        </>
      )}

      {/* Socials */}
      <div className="flex justify-center gap-4 mt-6">
        {socials?.github && (
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-300 hover:bg-slate-700 transition"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {socials?.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-300 hover:bg-slate-700 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {socials?.twitter && (
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-300 hover:bg-slate-700 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
        {socials?.email && (
          <a
            href={`mailto:${socials.email}`}
            className="p-2 rounded-full bg-slate-300 hover:bg-slate-700 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Contact Button */}
      {/* <Button
        onClick={onContactClick}
        className="mt-8 bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-xl px-6 py-3"
      >
        {contactText}
      </Button> */}
    </motion.div>
  );
};

export default ProfileCard;

