import Link from 'next/link';
import * as React from 'react';

import { IconContext } from 'react-icons';
import { RiMapPin3Fill, RiMapPin3Line } from 'react-icons/ri';

import { Marker } from 'react-map-gl';

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Company(props) {
  const { companyData } = props;

  return (
    <dov className='companyArea'>
      {companyData?.map((company, index) => (
        <button className='companyName' key={`company-${index}`}>
          <Link href={company.url}>
            <a rel='noopener noreferrer' target='_blank'>
              {company.ICAO}
            </a>
          </Link>
        </button>
      ))}
      <style jsx>
        {`
          .companyArea {
            display: flex;
            justify-content: start;
            gap: 2em;
            flex-wrap: wrap;
          }
          button {
            font-family: 'Ubuntu', sans-serif;
            font-size: 12px;
            outline: none;
            border: none;
            color: #414b5a;
            color: #414b5a;
            padding: 12px;
            border-radius: 16px;
            background: #edfafd;
            box-shadow: 13px 13px 21px #e1eef0, -13px -13px 21px #f9ffff;
            width: 60px;
            height: 58px;
            &:hover {
              background-color: #c1e1ff;
              cursor: pointer;
            }
            &:active {
              background: #edfafd;
              box-shadow: inset 13px 13px 21px #e1eef0, inset -13px -13px 21px #f9ffff;
            }
          }
        `}
      </style>
    </dov>
  );
}

export default React.memo(Company);
