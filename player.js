/** Player Factory */
const Player = (name, markerType) => {
    const getName = () => name;
    const marker = markerType;
    const getMarker = () => marker;
    
    return { getName, getMarker };
};