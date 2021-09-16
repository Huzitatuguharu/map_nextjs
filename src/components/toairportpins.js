import * as React from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';
import { supabase } from '../lib/createSupabaseClient';

export const ToAirportPins = (props) => {
    const { toAirportData, routeData, onClick } = props;
    console.log(toAirportData);
    console.log(routeData);

  if (toAirportData) {
    return toAirportData.map((city, index) => (
      <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
        <IconContext.Provider value={{ color: '#819DF1', size: '24px' }}>
          <RiMapPin3Fill onClick={() => onClick(city)}></RiMapPin3Fill>
          <style jsx>{``}</style>
        </IconContext.Provider>
      </Marker>
    ));
  }
};

export default React.memo(ToAirportPins);
