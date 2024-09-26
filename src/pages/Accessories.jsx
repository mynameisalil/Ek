import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Mouse from '../../public/Mouse.png';

const products = [
    {
        id: 1,
        name: 'Gaming Mouse',
        specs: [
            'Sensor: Optical',
            'DPI: 16,000',
            'Tombol: 6 programmable',
            'Konektivitas: Wired',
        ],
        price: 'Rp 500.000',
    },
    {
        id: 2,
        name: 'Wireless Mouse',
        specs: [
            'Sensor: Laser',
            'DPI: 10,000',
            'Tombol: 5',
            'Konektivitas: Wireless',
        ],
        price: 'Rp 700.000',
    },
    {
        id: 3,
        name: 'Ergonomic Mouse',
        specs: [
            'Sensor: Optical',
            'DPI: 8,000',
            'Tombol: 7',
            'Konektivitas: Wired/Wireless',
        ],
        price: 'Rp 900.000',
    },
    {
        id: 4,
        name: 'RGB Gaming Mouse',
        specs: [
            'Sensor: Optical',
            'DPI: 12,000',
            'Tombol: 8 programmable',
            'Konektivitas: Wired',
        ],
        price: 'Rp 600.000',
    },
    {
        id: 5,
        name: 'Mouse Pad',
        specs: [
            'Material: Fabric',
            'Ukuran: 30 x 40 cm',
            'Fitur: Anti-slip',
        ],
        price: 'Rp 100.000',
    },
    {
        id: 6,
        name: 'Gaming Keyboard',
        specs: [
            'Tipe: Mechanical',
            'Switch: Red',
            'Backlight: RGB',
            'Konektivitas: Wired',
        ],
        price: 'Rp 1.200.000',
    },
    {
        id: 7,
        name: 'Headset Gaming',
        specs: [
            'Driver: 50mm',
            'Konektivitas: Wired',
            'Fitur: Noise Cancelling',
        ],
        price: 'Rp 800.000',
    },
    {
        id: 8,
        name: 'Webcam HD',
        specs: [
            'Resolusi: 1080p',
            'Konektivitas: USB',
            'Fitur: Auto Focus',
        ],
        price: 'Rp 400.000',
    },
    {
        id: 9,
        name: 'Speaker Bluetooth',
        specs: [
            'Daya: 10W',
            'Konektivitas: Bluetooth',
            'Baterai: 8 jam',
        ],
        price: 'Rp 600.000',
    },
];

const Accessories = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <div className="flex-grow p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map(product => (
                    <div key={product.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-white text-2xl font-bold mb-4">{product.name}</h2>
                        <img src={Mouse} alt={product.name} className="mx-auto mb-4 w-full h-auto rounded" />
                        <ul className="text-gray-300 mb-4">
                            {product.specs.map((spec, index) => (
                                <li key={index}>• {spec}</li>
                            ))}
                        </ul>
                        <p className="text-yellow-400 text-xl font-bold">{product.price}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 transition-transform duration-300 hover:scale-105">
                            Pesan Sekarang
                        </button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Accessories;
