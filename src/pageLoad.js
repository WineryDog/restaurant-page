import createRestaurantContent from './restaurant.js';
import loadHomeContent from './homeTab.js';

function initLoad() {
    createRestaurantContent();
    loadHomeContent();
}

export default initLoad;