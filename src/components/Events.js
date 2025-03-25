import React from "react";

const events = [
    {
        id: 1,
        name: "Tech Fest 2025",
        image: "https://media.licdn.com/dms/image/v2/D5612AQHEnk_8Dy79mQ/article-cover_image-shrink_423_752/B56ZWWgmDHHsAU-/0/1741986882073?e=1748476800&v=beta&t=te0xDqXEv4Dy-OEyE09PsqrI9iKwhNY3o3eWSFRewSI",
        description: "A grand event showcasing innovative tech projects and workshops.",
        date: "April 15, 2025",
    },
    {
        id: 2,
        name: "Cultural Night",
        image: "https://img.freepik.com/free-vector/premium-diwali-greeting-card-banner-with-golden-lantern-diya_1017-39761.jpg?ga=GA1.1.1342141806.1742905048&semt=ais_hybrid",
        description: "An evening filled with music, dance, and cultural performances.",
        date: "May 10, 2025",
    },
    {
        id: 3,
        name: "Sports Meet",
        image: "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg",
        description: "A thrilling sports event with multiple competitions and prizes.",
        date: "June 5, 2025",
    },
    {
        id: 1,
        name: "Tech Fest 2025",
        image: "https://img.freepik.com/premium-photo/beautiful-architecture-st-john-s-college-cambridge_1339-82687.jpg?ga=GA1.1.165383333.1742906729&semt=ais_hybrid",
        description: "A grand event showcasing innovative tech projects and workshops.",
        date: "April 15, 2025",
    },
    {
        id: 2,
        name: "Cultural Night",
        image: "https://img.freepik.com/premium-photo/beautiful-architecture-st-john-s-college-cambridge_1339-82687.jpg?ga=GA1.1.165383333.1742906729&semt=ais_hybrid",
        description: "An evening filled with music, dance, and cultural performances.",
        date: "May 10, 2025",
    },
    {
        id: 3,
        name: "Sports Meet",
        image: "https://img.freepik.com/premium-photo/beautiful-architecture-st-john-s-college-cambridge_1339-82687.jpg?ga=GA1.1.165383333.1742906729&semt=ais_hybrid",
        description: "A thrilling sports event with multiple competitions and prizes.",
        date: "June 5, 2025",
    },
];

const Events = () => {
    return (
        <div className="container mx-auto p-6 max-w-6xl mb-14 pt-16" id="events">
            <h2 className="text-3xl font-bold text-center mb-6"> Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((event) => (
                <div
                    key={event.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-64 mx-auto cursor-pointer"
                >
                    <img src={event.image} alt={event.name} className="w-full h-40 object-cover" />
                    <div className="p-3">
                    <h3 className="text-lg font-semibold">{event.name}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{event.description}</p>
                    <p className="text-blue-500 font-semibold mt-1 text-sm">{event.date}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
