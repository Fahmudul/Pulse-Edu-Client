import React, { useState } from "react";

const TutorFilterMenu = () => {
  const [filters, setFilters] = useState({
    subject: "",
    minRating: 0,
    maxHourlyRate: 100,
    availability: [],
    location: "",
  });
  const [isExpanded, setIsExpanded] = useState(true);

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Computer Science",
    "Foreign Languages",
  ];

  const availabilityOptions = [
    "Weekday Mornings",
    "Weekday Afternoons",
    "Weekday Evenings",
    "Weekend Mornings",
    "Weekend Afternoons",
    "Weekend Evenings",
  ];

  const locations = ["Online", "In-Person", "Hybrid"];

  const handleSubjectChange = (e) => {
    setFilters({ ...filters, subject: e.target.value });
  };

  const handleRatingChange = (e) => {
    setFilters({ ...filters, minRating: parseInt(e.target.value) });
  };

  const handleHourlyRateChange = (e) => {
    setFilters({ ...filters, maxHourlyRate: parseInt(e.target.value) });
  };

  const handleAvailabilityChange = (option) => {
    const newAvailability = filters.availability.includes(option)
      ? filters.availability.filter((item) => item !== option)
      : [...filters.availability, option];

    setFilters({ ...filters, availability: newAvailability });
  };

  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const resetFilters = () => {
    setFilters({
      subject: "",
      minRating: 0,
      maxHourlyRate: 100,
      availability: [],
      location: "",
    });
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filter Tutors</h2>
        <button
          onClick={toggleExpanded}
          className="text-white focus:outline-none"
        >
          {isExpanded ? "▲" : "▼"}
        </button>
      </div>

      {isExpanded && (
        <div className="p-4">
          {/* Subject Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              value={filters.subject}
              onChange={handleSubjectChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">All Subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Minimum Rating: {filters.minRating}+ ★
            </label>
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              value={filters.minRating}
              onChange={handleRatingChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Any</span>
              <span>★</span>
              <span>★★</span>
              <span>★★★</span>
              <span>★★★★</span>
              <span>★★★★★</span>
            </div>
          </div>

          {/* Hourly Rate Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Hourly Rate: ${filters.maxHourlyRate}
            </label>
            <input
              type="range"
              min="0"
              max="200"
              step="10"
              value={filters.maxHourlyRate}
              onChange={handleHourlyRateChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>$50</span>
              <span>$100</span>
              <span>$150</span>
              <span>$200</span>
            </div>
          </div>

          {/* Availability Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availabilityOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    id={option}
                    checked={filters.availability.includes(option as never)}
                    onChange={() => handleAvailabilityChange(option)}
                    className="mr-2"
                  />
                  <label htmlFor={option} className="text-sm text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="flex gap-4">
              {locations.map((location) => (
                <div key={location} className="flex items-center">
                  <input
                    type="radio"
                    id={location}
                    name="location"
                    value={location}
                    checked={filters.location === location}
                    onChange={handleLocationChange}
                    className="mr-2"
                  />
                  <label htmlFor={location} className="text-sm text-gray-700">
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-sm text-gray-700 hover:text-gray-500"
            >
              Reset Filters
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorFilterMenu;
