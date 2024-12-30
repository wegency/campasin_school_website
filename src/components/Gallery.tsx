// 'use client';

// import React, { useState } from 'react';

// interface MediaModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   mediaType: 'image' | 'video';
//   mediaSource: string;
//   mediaTitle: string;
// }

// const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose, mediaType, mediaSource, mediaTitle }) => {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2" onClick={(e) => e.stopPropagation()}>
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-semibold"
//         >
//           X
//         </button>
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">{mediaTitle}</h2>

//         {mediaType === 'image' ? (
//           <img
//             src={mediaSource}
//             alt={mediaTitle}
//             className="object-cover w-full h-96 rounded-lg shadow-lg"
//           />
//         ) : (
//           <video controls className="object-cover w-full h-96 rounded-lg shadow-lg">
//             <source src={mediaSource} />
//           </video>
//         )}
//       </div>
//     </div>
//   );
// };

// const Gallery: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState<{ mediaType: 'image' | 'video'; mediaSource: string; mediaTitle: string } | null>(null);

//   const openModal = (mediaType: 'image' | 'video', source: string, title: string) => {
//     setModalData({ mediaType, mediaSource: source, mediaTitle: title });
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalData(null);
//   };

//   return (
//     <section className="bg-gray-100 py-16 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-semibold text-gray-800 mb-8">Gallery</h2>
//         <p className="text-lg text-gray-700 mb-12">
//           Explore some of the wonderful events, facilities, and activities at our school.
//         </p>

//         {/* Images Section */}
//         <div className="text-left mb-12">
//           <h3 className="text-3xl font-semibold text-gray-800 mb-4">Images</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => openModal('image', '/assets/campasin.png', 'Event 1')}>
//               <img
//                 src="/assets/campasin.png"  // Replace with actual image source
//                 alt="Event 1"
//                 className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
//             </div>

//             <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => openModal('image', '/assets/campasin.png', 'Event 2')}>
//               <img
//                 src="/assets/campasin.png"  // Replace with actual image source
//                 alt="Event 2"
//                 className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
//             </div>

//             {/* More images can be added here */}
//           </div>
//         </div>


//         {/* Videos Section */}
//         <div className="text-left">
//           <h3 className="text-3xl font-semibold text-gray-800 mb-4">Videos</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             <div
//               className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
//               onClick={() =>
//                 openModal('video', 'https://www.youtube.com/embed/XFUbgp7f-Bo', 'Sample Video 1')
//               } // YouTube embed link
//             >
//               <div className="aspect-w-16 aspect-h-9">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src="https://www.youtube.com/embed/XFUbgp7f-Bo" // Embed your actual YouTube video here
//                   title="Sample Video 1"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
//             </div>

//             <div
//               className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
//               onClick={() =>
//                 openModal('video', 'https://www.youtube.com/embed/2Vv-BfVoq4g', 'Sample Video 2')
//               } // Another YouTube embed link
//             >
//               <div className="aspect-w-16 aspect-h-9">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src="https://www.youtube.com/embed/2Vv-BfVoq4g" // Embed your actual YouTube video here
//                   title="Sample Video 2"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
//             </div>

//             {/* Add more videos as needed */}
//           </div>
//         </div>

//       </div>

//       {/* Modal Component */}
//       {modalData && (
//         <MediaModal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           mediaType={modalData.mediaType}
//           mediaSource={modalData.mediaSource}
//           mediaTitle={modalData.mediaTitle}
//         />
//       )}
//     </section>
//   );
// };

// export default Gallery;




'use client';

import React, { useState } from 'react';

// Modal Component
interface MediaModalProps {
    isOpen: boolean;
    onClose: () => void;
    mediaType: 'image' | 'video';
    mediaSource: string;
    mediaTitle: string;
}

const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose, mediaType, mediaSource, mediaTitle }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70" onClick={onClose}>
            <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 p-2 rounded-full transition"
                    aria-label="Close"
                >
                    &#x2715;
                </button>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">{mediaTitle}</h2>
                {mediaType === 'image' ? (
                    <img src={mediaSource} alt={mediaTitle} className="w-full max-h-[90vh] object-contain" />
                ) : (
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                        <iframe
                            src={mediaSource}
                            title={mediaTitle}
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

// Main Gallery Component
const Gallery: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<{ mediaType: 'image' | 'video'; mediaSource: string; mediaTitle: string } | null>(null);

    const openModal = (mediaType: 'image' | 'video', source: string, title: string) => {
        setModalData({ mediaType, mediaSource: source, mediaTitle: title });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null);
    };

    return (
        <section className="bg-gray-100 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">Gallery</h2>
                <p className="text-lg text-gray-700 mb-12">Explore events, activities, and school highlights.</p>

                {/* Images Section */}
                <h3 className="text-3xl font-semibold text-gray-700 mb-6 text-left">Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {['/assets/campasin.png', '/assets/campasin.png', '/assets/campasin.png'].map((src, index) => (
                        <div
                            key={index}
                            onClick={() => openModal('image', src, `Image ${index + 1}`)}
                            className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg group"
                        >
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-64 object-cover transition-transform transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition"></div>
                        </div>
                    ))}
                </div>

                {/* Videos Section */}
                <h3 className="text-3xl font-semibold text-gray-700 mb-6 text-left">Videos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'School Event 1', link: 'https://www.youtube.com/embed/XFUbgp7f-Bo' },
                        { title: 'School Event 2', link: 'https://www.youtube.com/embed/2Vv-BfVoq4g' }
                    ].map((video, index) => (
                        <div
                            key={index}
                            onClick={() => openModal('video', video.link, video.title)}
                            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                        >
                            <img
                                src={`https://img.youtube.com/vi/${video.link.split('/embed/')[1]}/mqdefault.jpg`} // Static YouTube Thumbnail
                                alt={video.title}
                                className="w-full h-64 object-cover transition-transform transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:opacity-70 flex items-center justify-center">
                                <div className="text-white bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold">Play Video</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Media Modal */}
            {modalData && (
                <MediaModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    mediaType={modalData.mediaType}
                    mediaSource={modalData.mediaSource}
                    mediaTitle={modalData.mediaTitle}
                />
            )}
        </section>
    );
};

export default Gallery;
