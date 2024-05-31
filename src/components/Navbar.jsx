import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [dayTime, setDayTime] = useState('00:00:00');
  const [nightTime, setNightTime] = useState('00:00:00');

  // Helper function to format time
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour12: false });
  };

  // Helper function to get the in-game time
  const getInGameTime = (startTime) => {
    const now = new Date().getTime();
    const elapsed = now - startTime;
    const inGameElapsed = elapsed * 7; // Time in-game moves 7 times faster
    const inGameTime = new Date(startTime + inGameElapsed);
    return inGameTime;
  };

  useEffect(() => {
    let startTime = localStorage.getItem('startTime');
    if (!startTime) {
      startTime = new Date().getTime();
      localStorage.setItem('startTime', startTime);
    } else {
      startTime = parseInt(startTime);
    }

    const updateTimes = () => {
      const inGameTime = getInGameTime(startTime);
      const dayTime = new Date(inGameTime);
      const nightTime = new Date(inGameTime.getTime() + 12 * 60 * 60 * 1000); // 12 hours ahead
      setDayTime(formatTime(dayTime));
      setNightTime(formatTime(nightTime));
    };

    updateTimes(); // Initial call
    const interval = setInterval(updateTimes, 0); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-black p-4 max-w-screen-2xl w-fill-available">
      <div className="border-t border-b border-gray-700">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center">
            <div className="text-left flex flex-col justify-center">
              <h1 className="text-white text-2xl font-medium">Arena Breakout Market</h1>
              <p className="text-white font-normal">Flea market price monitoring and tools</p>
            </div>
            <div className="flex flex-col justify-center ml-8">
              <div className="flex flex-row gap-2 text-left">
                <span className="text-white w-16 font-medium">{dayTime}</span>
                <span className="text-white w-16 font-medium">{nightTime}</span>
              </div>
              <span className="text-white text-left">Raid Time</span>
            </div>
          </div>
          <ul className="flex space-x-4">
            <li className="relative group">
              <a href="/" className="text-white">Home</a>
              <ul className="absolute left-0 hidden mt-2 space-y-2 bg-gray-800 text-white p-2 rounded group-hover:block">
                <li><a href="/" className="block px-4 py-2">Submenu 1</a></li>
                <li><a href="/" className="block px-4 py-2">Submenu 2</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="/items" className="text-white">Items</a>
              <ul className="absolute left-0 hidden mt-2 space-y-2 bg-gray-800 text-white p-2 rounded group-hover:block">
                <li><a href="/items" className="block px-4 py-2">Submenu 1</a></li>
                <li><a href="/items" className="block px-4 py-2">Submenu 2</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
