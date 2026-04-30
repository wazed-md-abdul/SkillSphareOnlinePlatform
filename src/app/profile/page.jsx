import React from 'react';
import { CiEdit } from "react-icons/ci";
const UserCard = ({ }) => {
  const userData = {
  name: "Alex Rivera",
  plan: "Premium Member",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcRGEoevff2-cjS4l_zi7-bcZaQBks7nNiQwSfTEiUe_zVJJt4--cgQJgixVgajzwJP6kDep57cqNDpuD2jnZ9O8cxHIt__vp392uOukdIAS1_WH8dmExlv9ley-70oKfK_SnzjW4jVUaOuP8xS90T6KO8fBpj9dmyvjFfgR5MvX1nglPjvDEcf1rw3ndxbdxKWg5A6AYZq3hQdv2hTha917MKTTwmAd1y-GtcceCylfZgROh-940ClcM7CklqP4-_KtuKO-3HLgri",
  courses: "12",
  hours: "48"
};
  const user= userData;
  return (
    <div className="bg-white border border-surface-container-high rounded-2xl p-8 flex flex-col items-center max-w-sm container mx-auto mt-6 shadow-2xl">
      {/* Profile Image */}
      <div className="relative mb-6">
        <img 
          alt={user.name} 
          className="w-28 h-28 rounded-full object-cover border-4 border-surface-container-low" 
          src={user.image} 
        />
        <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-white">
          <span className="material-symbols-outlined !text-[12px] fill-icon">person</span>
        </div>
      </div>

      {/* User Identity */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-on-surface mb-1">{user.name}</h2>
        <p className="text-secondary text-sm">{user.plan || "Free Member"}</p>
      </div>

      {/* User Stats */}
      <div className="w-full flex justify-around py-4 border-y border-surface-container-low mb-6">
        <div className="text-center">
          <p className="text-lg font-bold text-on-surface">{user.courses}</p>
          <p className="text-[10px] uppercase tracking-wider text-outline">Courses</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-on-surface">{user.hours}</p>
          <p className="text-[10px] uppercase tracking-wider text-outline">Hours Learnt</p>
        </div>
      </div>

      {/* Call to Action */}
      <button className="bg-on-surface text-tertiary-fixed font-headline px-8 py-4 rounded-full font-bold text-lg shadow-[0px_20px_40px_rgba(25,28,29,0.15)] hover:shadow-none transition-all duration-500 flex items-center gap-3 active:scale-95 cursor-pointer">
       <CiEdit /> Edit Profile 
      </button>
    </div>
  );
};

export default UserCard;
