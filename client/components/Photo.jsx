import React from 'react';

const photo = ({ photo }) => {
  return (
    <div className="photo">
      <img src={photo.url} />
    </div>
  );
};

// const photo = ({ photo, index }) => {
//   const { url } = photo;
//   if (index === 0) {
//     return (
//       <div className="firstcolumn">
//         <div className="photo">
//           <img id="first" src={url} />
//         </div>
//       </div>
//     );
//   } if (index === 1 || index === 2) {
//     return (
//       <div className="secondcolumn">
//         <div className="photo">
//           <img src={url} />
//         </div>
//       </div>
//     );
//   } if (index === 3 || index === 4) {
//     return (
//       <div className="thirdcolumn">
//         <div className="photo">
//           <img src={url} />
//         </div>
//       </div>
//     );
//   }
// };

export default photo;
