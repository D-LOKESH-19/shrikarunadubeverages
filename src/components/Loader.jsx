// const Loader = ({ height = 48 }) => {
//   const icons = ['🍍', '🍃', '🫐', '🍋', '🍃', '🥭', '🍊', '🍏','🍍', '🍃', '🫐', '🍋', '🍃', '🥭', '🍊', '🍏'];

//   return (
//     <div
//       className="relative w-full/2 overflow-hidden flex items-center"
//       style={{ height }}
//     >
//       <div className="snake-track">
//         {[...icons, ...icons].map((icon, index) => (
//           <span
//             key={index}
//             className="snake-item"
//             style={{
//               animationDelay: `${-index * 0.15}s`, // 👈 NEGATIVE delay = continuous wave
//             }}
//           >
//             {icon}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Loader;





import React from 'react';

function Loader({ height = 48 }) {
  const icons = ['🍍', '🍃', '🫐', '🍋', '🥭', '🍊', '🍏','🍍', '🍃', '🫐', '🍋', '🥭', '🍊', '🍏','🍍', '🍃', '🫐', '🍋', '🥭', '🍊', '🍏','🍍', '🍃', '🫐', '🍋', '🥭', '🍊', '🍏'];

  return (
    <div
      className="relative w-auto overflow-hidden flex items-center justify-center"
      style={{ height: `${height}px`, width: '700px' }} // fixed width
    >
      <div className="snake-track">
        {[...icons, ...icons].map((icon, index) => (
          <span
            key={index}
            className="snake-item"
            style={{
              animationDelay: `${-index * 0.1}s`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Loader;
