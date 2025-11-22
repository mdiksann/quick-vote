import React from 'react';

const VotingResultBar = ({ optionText, voteCount, percentage, color = 'bg-indigo-500' }) => {
    return (
        <div className="mb-4 bg-gray-50 p-3 rounded-lg border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-800">{optionText}</span>
                <span className="font-bold text-lg text-indigo-600">{percentage}%</span>
            </div>
            {/* Progress Bar */}
            <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-2 text-xs flex rounded-full bg-gray-200">
                    <div 
                        style={{ width: `${percentage}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color} transition-all duration-700 ease-out`}
                    ></div>
                </div>
            </div>
            <p className="text-sm text-gray-500">{voteCount} votes</p>
        </div>
    );
};

export default VotingResultBar;