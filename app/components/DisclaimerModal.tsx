import React from "react";

interface DisclaimerModalProps {
  show: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white dark:bg-zinc-900 p-6 max-w-xl rounded-2xl shadow-lg text-sm text-gray-700 dark:text-gray-300">
        <h2 className="text-lg font-semibold mb-3">What This Is (and Isn’t)</h2>
        <div className="space-y-3">
          <p>This is not a crystal-clear showcase.  
             It’s not curated to impress or polished to perfection.</p>

          <p>This is a raw and authentic digital space — a living archive of everything I’ve thought, wanted to do, and tried to build.</p>

          <p>Some projects are unfinished. Some never got past the idea phase.  
             The bookshelf contains books I’ve only partly read — sometimes just a chapter.</p>

          <p>You're walking through the mind of a thinker.  
             Occasionally an achiever.  
             But always — and proudly — a beginner.</p>

          <p>So don’t expect everything to be orderly.  
             Expect it to be <em>real</em>.</p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-1 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
