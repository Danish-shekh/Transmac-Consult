// Global Reach Interactive Map
document.addEventListener('DOMContentLoaded', function() {
    initializeGlobalMap();
});

function initializeGlobalMap() {
    const mapData = {
        offices: [
            { name: 'Singapore', type: 'headquarters', lat: 1.3521, lng: 103.8198, coords: [1520, 480] },
            { name: 'Malaysia', type: 'office', lat: 3.1390, lng: 101.6869, coords: [1480, 465] }
        ],
        partnerships: [
            { name: 'China', lat: 35.8617, lng: 104.1954, coords: [1450, 320] },
            { name: 'Thailand', lat: 15.8700, lng: 100.9925, coords: [1440, 440] },
            { name: 'India', lat: 20.5937, lng: 78.9629, coords: [1280, 430] },
            { name: 'Australia', lat: -25.2744, lng: 133.7751, coords: [1620, 700] }
        ],
        projectReach: [
            { name: 'Brazil', lat: -14.2350, lng: -51.9253, coords: [350, 640] }
        ]
    };

    createInteractiveMarkers(mapData);
    animateConnections();
    setupLegendInteractivity();
}

function createInteractiveMarkers(data) {
    const map = document.querySelector('.global-map-container');
    if (!map) return;

    // Create markers for offices
    data.offices.forEach(location => {
        createMarker(location, 'office', map);
    });

    // Create markers for partnerships
    data.partnerships.forEach(location => {
        createMarker(location, 'partnership', map);
    });

    // Create markers for project reach
    data.projectReach.forEach(location => {
        createMarker(location, 'project', map);
    });
}

function createMarker(location, type, container) {
    const marker = document.createElement('div');
    marker.className = `map-marker map-marker-${type}`;
    marker.style.left = `${(location.coords[0] / 2000) * 100}%`;
    marker.style.top = `${(location.coords[1] / 1000) * 100}%`;
    
    // Create pulse animation
    const pulse = document.createElement('div');
    pulse.className = 'marker-pulse';
    marker.appendChild(pulse);

    // Create pin
    const pin = document.createElement('div');
    pin.className = 'marker-pin';
    marker.appendChild(pin);

    // Create label
    const label = document.createElement('div');
    label.className = 'marker-label';
    label.textContent = location.name;
    marker.appendChild(label);

    // Add tooltip
    marker.setAttribute('data-tooltip', location.name);
    marker.setAttribute('data-type', type);

    container.appendChild(marker);

    // Add hover effect
    marker.addEventListener('mouseenter', function() {
        this.classList.add('active');
        highlightLegendItem(type);
    });

    marker.addEventListener('mouseleave', function() {
        this.classList.remove('active');
        unhighlightLegendItem(type);
    });
}

function animateConnections() {
    // Add animated connection lines between headquarters and regional offices
    const connections = document.querySelectorAll('.connection-line');
    connections.forEach((line, index) => {
        setTimeout(() => {
            line.style.strokeDashoffset = '0';
        }, index * 300);
    });
}

function setupLegendInteractivity() {
    const legendItems = document.querySelectorAll('.map-legend-item');
    
    legendItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const type = this.getAttribute('data-type');
            highlightMarkersByType(type);
        });

        item.addEventListener('mouseleave', function() {
            unhighlightAllMarkers();
        });

        item.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            toggleMarkersByType(type);
            this.classList.toggle('active');
        });
    });
}

function highlightMarkersByType(type) {
    const markers = document.querySelectorAll(`.map-marker-${type}`);
    markers.forEach(marker => marker.classList.add('highlighted'));
}

function unhighlightAllMarkers() {
    const markers = document.querySelectorAll('.map-marker');
    markers.forEach(marker => marker.classList.remove('highlighted'));
}

function toggleMarkersByType(type) {
    const markers = document.querySelectorAll(`.map-marker-${type}`);
    markers.forEach(marker => {
        marker.style.display = marker.style.display === 'none' ? 'block' : 'none';
    });
}

function highlightLegendItem(type) {
    const item = document.querySelector(`.map-legend-item[data-type="${type}"]`);
    if (item) item.classList.add('highlighted');
}

function unhighlightLegendItem(type) {
    const item = document.querySelector(`.map-legend-item[data-type="${type}"]`);
    if (item) item.classList.remove('highlighted');
}
