// 'use client';

// import React from 'react';

// interface EventItemProps {
//   id: number;
//   title: string;
//   dateRange: string; // Example: 'Wednesday, 13 September 12:00 PM - 2:00 PM'
//   month: string;
//   day: string;
//   imageSrc: string;
// }

// const eventsData: EventItemProps[] = [
//   {
//     id: 40,
//     title: 'Certified artificial intelligence (AI) expert',
//     dateRange: 'Wednesday, 13 September 12:00 PM - 2:00 PM',
//     month: 'Sep',
//     day: '13',
//     imageSrc: 'https://lmsstyle.com/theme/new-learning/pluginfile.php/2/calendar/event_description/40/pexels-google-deepmind-17483873.jpg',
//   },
//   {
//     id: 39,
//     title: 'International conference on image processing',
//     dateRange: 'Wednesday, 20 September 9:00 AM - Thursday, 21 September 4:00 PM',
//     month: 'Sep',
//     day: '20',
//     imageSrc: 'https://lmsstyle.com/theme/new-learning/pluginfile.php/2/calendar/event_description/39/pexels-matheus-bertelli-13434026.jpg',
//   },
//   {
//     id: 36,
//     title: 'Improve your skills with the right SAP training',
//     dateRange: 'Friday, 22 September 10:00 AM - 11:30 AM',
//     month: 'Sep',
//     day: '22',
//     imageSrc: '',
//   },
//   {
//     id: 37,
//     title: 'Conference on interdisciplinary research studies',
//     dateRange: 'Thursday, 19 October 11:00 AM - Friday, 20 October 1:00 PM',
//     month: 'Oct',
//     day: '19',
//     imageSrc: '',
//   },
//   {
//     id: 38,
//     title: 'Developing effective business conversation skills',
//     dateRange: 'Tuesday, 31 October 8:00 AM - 10:00 AM',
//     month: 'Oct',
//     day: '31',
//     imageSrc: '',
//   },
// ];

// const Events: React.FC = () => {
//   return (
//     <div className="bg-gray-100 py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-gray-800 mb-8">Upcoming Events</h2>
//         <div className="overflow-x-scroll hide-scrollbar">
//           <div className="flex space-x-8">
//             {eventsData.map((event) => (
//               <div
//                 key={event.id}
//                 className="min-w-[350px] bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 relative"
//               >
//                 {/* Image Block */}
//                 {event.imageSrc ? (
//                   <img
//                     src={event.imageSrc}
//                     alt={event.title}
//                     className="w-full h-48 object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
//                     <span className="text-gray-600 text-sm">No Image Available</span>
//                   </div>
//                 )}

//                 {/* Event Date Box */}
//                 <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-2 rounded-br-lg">
//                   <span className="block text-lg leading-none font-bold">{event.month}</span>
//                   <span className="block text-3xl font-extrabold leading-none">{event.day}</span>
//                 </div>

//                 {/* Event Content */}
//                 <div className="p-4">
//                   <h4 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h4>
//                   <p className="text-gray-600 text-sm">
//                     <i className="ri-calendar-event-line mr-2"></i>
//                     {event.dateRange}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;



'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface EventItemProps {
  id: number;
  title: string;
  dateRange: string;
  fullDate: string; // e.g., 'Wednesday, 20 September 2023'
  month: string;
  day: string;
  imageSrc: string;
  description: string;
  location: string;
}

const eventsData: EventItemProps[] = [
  {
    id: 40,
    title: 'Certified artificial intelligence (AI) expert',
    dateRange: 'Wednesday, 13 September 12:00 PM - 2:00 PM',
    fullDate: 'Wednesday, 13 September 2023',
    month: 'Sep',
    day: '13',
    imageSrc: 'https://lmsstyle.com/theme/new-learning/pluginfile.php/2/calendar/event_description/40/pexels-google-deepmind-17483873.jpg',
    description: 'Aliquam est nunc, condimentum vitae molestie ut, laoreet nec tortor. Fusce ac purus sodales...',
    location: 'Media Institute',
  },
  {
    id: 39,
    title: 'International conference on image processing',
    dateRange: 'Wednesday, 20 September 9:00 AM - Thursday, 21 September 4:00 PM',
    fullDate: 'Wednesday, 20 September 2023',
    month: 'Sep',
    day: '20',
    imageSrc: 'https://lmsstyle.com/theme/new-learning/pluginfile.php/2/calendar/event_description/39/pexels-matheus-bertelli-13434026.jpg',
    description: 'Proin fringilla feugiat tortor sed faucibus. Vestibulum imperdiet...',
    location: 'Tech Conference Hall',
  },
  // More events can be added similarly...
];

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItemProps | null>(null);

  const openModal = (event: EventItemProps) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Upcoming Events</h2>
          <Link href="/events">
            <button className="bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-200">
              View All Events
            </button>
          </Link>
        </div>

        <div className="overflow-x-scroll hide-scrollbar">
          <div className="flex space-x-8">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="min-w-[350px] bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 relative cursor-pointer"
                onClick={() => openModal(event)}
              >
                {event.imageSrc ? (
                  <img
                    src={event.imageSrc}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">No Image Available</span>
                  </div>
                )}

                <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-2 rounded-br-lg">
                  <span className="block text-lg font-bold">{event.month}</span>
                  <span className="block text-3xl font-extrabold">{event.day}</span>
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm">
                    <i className="ri-calendar-event-line mr-2"></i>
                    {event.dateRange}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-md relative bg-white p-6 rounded-lg w-11/12 sm:w-3/4 md:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="close-container absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-semibold"
              aria-label="Close"
            >
              ×
            </button>

            <div className="event-modal-content flex flex-col h-full">
              {/* Event Image */}
              <div
                className="event-image isimage h-72 bg-cover bg-center rounded-t-lg"
                style={{
                  backgroundImage: `url('${selectedEvent.imageSrc}')`,
                }}
              ></div>

              <div className="event-content p-4 flex flex-col flex-1 overflow-y-auto">
                <h4 className="event-title text-2xl font-bold text-gray-800 mb-4">{selectedEvent.title}</h4>

                <div className="event-desc mb-4">
                  <p className="text-left text-gray-600">{selectedEvent.description}</p>
                </div>

                {/* Event Details */}
                <div className="event-details mt-6 space-y-4">
                  <div className="event-detail detail-date flex items-center text-gray-600">
                    <i className="ri-calendar-check-fill text-red-600 mr-2"></i>
                    <span className="dtime">{selectedEvent.fullDate}</span>
                  </div>

                  <div className="event-detail detail-time flex items-center text-gray-600">
                    <i className="ri-time-fill text-red-600 mr-2"></i>
                    <div>
                      <span className="dtime">{selectedEvent.dateRange}</span>
                    </div>
                  </div>

                  <div className="event-detail detail-location flex items-center text-gray-600">
                    <i className="ri-map-pin-2-fill text-red-600 mr-2"></i>
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Close button (to close modal) */}
            <button
              onClick={closeModal}
              className="themereset themekeynavonly text-lg font-semibold px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 w-full mt-6"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
