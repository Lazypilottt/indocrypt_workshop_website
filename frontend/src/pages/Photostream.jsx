import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

// Import accepted photos (optimized)
import KVD_5264 from '../../assets/accepted_optimized/KVD_5264.JPG';
import KVD_5265 from '../../assets/accepted_optimized/KVD_5265.JPG';
import KVD_5274 from '../../assets/accepted_optimized/KVD_5274.JPG';
import KVD_5275 from '../../assets/accepted_optimized/KVD_5275.JPG';
import KVD_5276 from '../../assets/accepted_optimized/KVD_5276.JPG';
import KVD_5277 from '../../assets/accepted_optimized/KVD_5277.JPG';
import KVD_5278 from '../../assets/accepted_optimized/KVD_5278.JPG';
import KVD_5279 from '../../assets/accepted_optimized/KVD_5279.JPG';
import KVD_5280 from '../../assets/accepted_optimized/KVD_5280.JPG';
import KVD_5282 from '../../assets/accepted_optimized/KVD_5282.JPG';
import KVD_5284 from '../../assets/accepted_optimized/KVD_5284.JPG';
import KVD_5285 from '../../assets/accepted_optimized/KVD_5285.JPG';
import KVD_5286 from '../../assets/accepted_optimized/KVD_5286.JPG';
import KVD_5287 from '../../assets/accepted_optimized/KVD_5287.JPG';
import KVD_5288 from '../../assets/accepted_optimized/KVD_5288.JPG';
import KVD_5289 from '../../assets/accepted_optimized/KVD_5289.JPG';
import KVD_5290 from '../../assets/accepted_optimized/KVD_5290.JPG';
import KVD_5291 from '../../assets/accepted_optimized/KVD_5291.JPG';
import KVD_5293 from '../../assets/accepted_optimized/KVD_5293.JPG';
import KVD_5295 from '../../assets/accepted_optimized/KVD_5295.JPG';
import KVD_5296 from '../../assets/accepted_optimized/KVD_5296.JPG';
import KVD_5297 from '../../assets/accepted_optimized/KVD_5297.JPG';
import KVD_5298 from '../../assets/accepted_optimized/KVD_5298.JPG';
import KVD_5299 from '../../assets/accepted_optimized/KVD_5299.JPG';
import KVD_5300 from '../../assets/accepted_optimized/KVD_5300.JPG';
import KVD_5304 from '../../assets/accepted_optimized/KVD_5304.JPG';
import KVD_5310 from '../../assets/accepted_optimized/KVD_5310.JPG';
import KVD_5312 from '../../assets/accepted_optimized/KVD_5312.JPG';
import KVD_5313 from '../../assets/accepted_optimized/KVD_5313.JPG';
import KVD_5315 from '../../assets/accepted_optimized/KVD_5315.JPG';
import KVD_5317 from '../../assets/accepted_optimized/KVD_5317.JPG';
import KVD_5324 from '../../assets/accepted_optimized/KVD_5324.JPG';
import KVD_5325 from '../../assets/accepted_optimized/KVD_5325.JPG';
import KVD_5326 from '../../assets/accepted_optimized/KVD_5326.JPG';
import KVD_5327 from '../../assets/accepted_optimized/KVD_5327.JPG';
import KVD_5330 from '../../assets/accepted_optimized/KVD_5330.JPG';
import KVD_5332 from '../../assets/accepted_optimized/KVD_5332.JPG';
import KVD_5333 from '../../assets/accepted_optimized/KVD_5333.JPG';
import KVD_5334 from '../../assets/accepted_optimized/KVD_5334.JPG';
import KVD_5340 from '../../assets/accepted_optimized/KVD_5340.JPG';
import KVD_5344 from '../../assets/accepted_optimized/KVD_5344.JPG';
import KVD_5346 from '../../assets/accepted_optimized/KVD_5346.JPG';
import KVD_5347 from '../../assets/accepted_optimized/KVD_5347.JPG';
import KVD_5352 from '../../assets/accepted_optimized/KVD_5352.JPG';
import KVD_5355 from '../../assets/accepted_optimized/KVD_5355.JPG';
import KVD_5360 from '../../assets/accepted_optimized/KVD_5360.JPG';
import KVD_5362 from '../../assets/accepted_optimized/KVD_5362.JPG';
import KVD_5365 from '../../assets/accepted_optimized/KVD_5365.JPG';
import KVD_5367 from '../../assets/accepted_optimized/KVD_5367.JPG';
import KVD_5368 from '../../assets/accepted_optimized/KVD_5368.JPG';
import KVD_5370 from '../../assets/accepted_optimized/KVD_5370.JPG';
import KVD_5375 from '../../assets/accepted_optimized/KVD_5375.JPG';
import KVD_5376 from '../../assets/accepted_optimized/KVD_5376.JPG';
import KVD_5377 from '../../assets/accepted_optimized/KVD_5377.JPG';
import KVD_5378 from '../../assets/accepted_optimized/KVD_5378.JPG';
import KVD_5383 from '../../assets/accepted_optimized/KVD_5383.JPG';
import KVD_5386 from '../../assets/accepted_optimized/KVD_5386.JPG';
import KVD_5387 from '../../assets/accepted_optimized/KVD_5387.JPG';
import KVD_5390 from '../../assets/accepted_optimized/KVD_5390.JPG';
import KVD_5392 from '../../assets/accepted_optimized/KVD_5392.JPG';
import KVD_5393 from '../../assets/accepted_optimized/KVD_5393.JPG';
import KVD_5394 from '../../assets/accepted_optimized/KVD_5394.JPG';
import KVD_5401 from '../../assets/accepted_optimized/KVD_5401.JPG';
import KVD_5402 from '../../assets/accepted_optimized/KVD_5402.JPG';
import KVD_5403 from '../../assets/accepted_optimized/KVD_5403.JPG';
import KVD_5405 from '../../assets/accepted_optimized/KVD_5405.JPG';
import KVD_5406 from '../../assets/accepted_optimized/KVD_5406.JPG';
import KVD_5407 from '../../assets/accepted_optimized/KVD_5407.JPG';
import KVD_5410 from '../../assets/accepted_optimized/KVD_5410.JPG';
import KVD_5411 from '../../assets/accepted_optimized/KVD_5411.JPG';
import KVD_5415 from '../../assets/accepted_optimized/KVD_5415.JPG';
import KVD_5416 from '../../assets/accepted_optimized/KVD_5416.JPG';
import KVD_5417 from '../../assets/accepted_optimized/KVD_5417.JPG';
import KVD_5421 from '../../assets/accepted_optimized/KVD_5421.JPG';
import KVD_5422 from '../../assets/accepted_optimized/KVD_5422.JPG';
import KVD_5424 from '../../assets/accepted_optimized/KVD_5424.JPG';
import KVD_5425 from '../../assets/accepted_optimized/KVD_5425.JPG';
import KVD_5430 from '../../assets/accepted_optimized/KVD_5430.JPG';
import KVD_5435 from '../../assets/accepted_optimized/KVD_5435.JPG';
import KVD_5440 from '../../assets/accepted_optimized/KVD_5440.JPG';
import KVD_5441 from '../../assets/accepted_optimized/KVD_5441.JPG';

export default function Photostream() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const photos = [
        { id: 1, src: KVD_5264 },
        { id: 2, src: KVD_5265 },
        { id: 3, src: KVD_5274 },
        { id: 4, src: KVD_5275 },
        { id: 5, src: KVD_5276 },
        { id: 6, src: KVD_5277 },
        { id: 7, src: KVD_5278 },
        { id: 8, src: KVD_5279 },
        { id: 9, src: KVD_5280 },
        { id: 10, src: KVD_5282 },
        { id: 11, src: KVD_5284 },
        { id: 12, src: KVD_5285 },
        { id: 13, src: KVD_5286 },
        { id: 14, src: KVD_5287 },
        { id: 15, src: KVD_5288 },
        { id: 16, src: KVD_5289 },
        { id: 17, src: KVD_5290 },
        { id: 18, src: KVD_5291 },
        { id: 19, src: KVD_5293 },
        { id: 20, src: KVD_5295 },
        { id: 21, src: KVD_5296 },
        { id: 22, src: KVD_5297 },
        { id: 23, src: KVD_5298 },
        { id: 24, src: KVD_5299 },
        { id: 25, src: KVD_5300 },
        { id: 26, src: KVD_5304 },
        { id: 27, src: KVD_5310 },
        { id: 28, src: KVD_5312 },
        { id: 29, src: KVD_5313 },
        { id: 30, src: KVD_5315 },
        { id: 31, src: KVD_5317 },
        { id: 32, src: KVD_5324 },
        { id: 33, src: KVD_5325 },
        { id: 34, src: KVD_5326 },
        { id: 35, src: KVD_5327 },
        { id: 36, src: KVD_5330 },
        { id: 37, src: KVD_5332 },
        { id: 38, src: KVD_5333 },
        { id: 39, src: KVD_5334 },
        { id: 40, src: KVD_5340 },
        { id: 41, src: KVD_5344 },
        { id: 42, src: KVD_5346 },
        { id: 43, src: KVD_5347 },
        { id: 44, src: KVD_5352 },
        { id: 45, src: KVD_5355 },
        { id: 46, src: KVD_5360 },
        { id: 47, src: KVD_5362 },
        { id: 48, src: KVD_5365 },
        { id: 49, src: KVD_5367 },
        { id: 50, src: KVD_5368 },
        { id: 51, src: KVD_5370 },
        { id: 52, src: KVD_5375 },
        { id: 53, src: KVD_5376 },
        { id: 54, src: KVD_5377 },
        { id: 55, src: KVD_5378 },
        { id: 56, src: KVD_5383 },
        { id: 57, src: KVD_5386 },
        { id: 58, src: KVD_5387 },
        { id: 59, src: KVD_5390 },
        { id: 60, src: KVD_5392 },
        { id: 61, src: KVD_5393 },
        { id: 62, src: KVD_5394 },
        { id: 63, src: KVD_5401 },
        { id: 64, src: KVD_5402 },
        { id: 65, src: KVD_5403 },
        { id: 66, src: KVD_5405 },
        { id: 67, src: KVD_5406 },
        { id: 68, src: KVD_5407 },
        { id: 69, src: KVD_5410 },
        { id: 70, src: KVD_5411 },
        { id: 71, src: KVD_5415 },
        { id: 72, src: KVD_5416 },
        { id: 73, src: KVD_5417 },
        { id: 74, src: KVD_5421 },
        { id: 75, src: KVD_5422 },
        { id: 76, src: KVD_5424 },
        { id: 77, src: KVD_5425 },
        { id: 78, src: KVD_5430 },
        { id: 79, src: KVD_5435 },
        { id: 80, src: KVD_5440 },
        { id: 81, src: KVD_5441 },
    ];

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedPhoto) return;

            if (e.key === 'ArrowRight') {
                const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
                const nextIndex = (currentIndex + 1) % photos.length;
                setSelectedPhoto(photos[nextIndex]);
            } else if (e.key === 'ArrowLeft') {
                const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
                const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
                setSelectedPhoto(photos[prevIndex]);
            } else if (e.key === 'Escape') {
                setSelectedPhoto(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPhoto, photos]);

    return (
        <div className="min-h-screen flex flex-col pt-[40px]">
            <main className="flex-grow px-4 md:px-8 pb-12">
                <div className="max-w-6xl mx-auto mt-16">
                    <h1
                        className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
                        data-aos="fade-down"
                        style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}
                    >
                        Photostream
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {photos.map((photo) => (
                            <div
                                key={photo.id}
                                className="group relative cursor-pointer"
                                data-aos="fade-up"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <GlowingBox className="overflow-hidden !p-0 h-64 transition-transform duration-300 group-hover:scale-105 border-none">
                                    <img
                                        src={photo.src}
                                        alt={`Workshop Photo ${photo.id}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-300">
                                            View Full Image
                                        </span>
                                    </div>
                                </GlowingBox>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-purple-400 transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            &times;
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-6xl transition-colors hidden md:block"
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
                                const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
                                setSelectedPhoto(photos[prevIndex]);
                            }}
                        >
                            &#8249;
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-6xl transition-colors hidden md:block"
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
                                const nextIndex = (currentIndex + 1) % photos.length;
                                setSelectedPhoto(photos[nextIndex]);
                            }}
                        >
                            &#8250;
                        </button>

                        <img
                            src={selectedPhoto.src}
                            alt={`Workshop Photo ${selectedPhoto.id}`}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
