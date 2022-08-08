import React from 'react';

const Map = () => {
    return (
        <div>
        <section className="map-area">
            <div id="map">
                <iframe
                    src="https://www.google.com/maps/place/Cornerstone+Baptist+Church+gwarinpa/@9.10822,7.4145234,15z/data=!4m5!3m4!1s0x0:0x3c1922e22fbd2f97!8m2!3d9.10822!4d7.4145234" className="map" allowFullScreen="">

                </iframe>

            </div>
        </section>

        <style jsx>{`
           .map {
                width: 100%;
                height: 100%
           } 
        `}</style>
        </div>
    );
};

export default Map;
