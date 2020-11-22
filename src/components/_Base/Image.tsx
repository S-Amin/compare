import React, { useState } from "react";

interface IImage {
  src: string;
  alt: string;
  onError?: () => void;
}
const Image: React.FC<IImage> = ({ src, alt, onError }) => {
  const [broken, setBroken] = useState(false);
  const errorHandle = (e: any) => {
    console.log({ e });

    if (onError) onError();
    else setBroken(true);
  };
  if (!broken) return <img src={src} alt={alt} onError={errorHandle} />;
  else
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 469.333 469.333"
        xmlSpace="preserve"
        style={{ width: "50%", height: "50%" }}
      >
        <g>
          <g>
            <g>
              <path
                d="M160,64c-29.406,0-53.333,23.927-53.333,53.333s23.927,53.333,53.333,53.333s53.333-23.927,53.333-53.333
       S189.406,64,160,64z M160,149.333c-17.646,0-32-14.354-32-32c0-17.646,14.354-32,32-32c17.646,0,32,14.354,32,32
       C192,134.979,177.646,149.333,160,149.333z"
              />
              <path
                d="M469.333,238.219V117.333c0-2.833-1.125-5.542-3.125-7.542L359.542,3.125c-2-2-4.708-3.125-7.542-3.125H42.667
       C19.135,0,0,19.135,0,42.667v96c0,1.656,0.385,3.292,1.125,4.771l19.438,38.885L0.448,249.385C0.156,250.375,0,251.406,0,252.448
       v174.219c0,23.531,19.135,42.667,42.667,42.667h61.865c2.219,0,4.385-0.698,6.198-1.99l39.917-28.51l69.156,29.635
       c1.333,0.573,2.76,0.865,4.198,0.865c0.698,0,1.396-0.073,2.094-0.208l101.063-20.208l17.302,17.292c2,2,4.708,3.125,7.542,3.125
       h74.667c23.531,0,42.667-19.135,42.667-42.667v-32c0-1.656-0.385-3.292-1.125-4.771l-40.052-80.094l39.656-66.094
       C468.813,242.052,469.333,240.156,469.333,238.219z M362.667,36.417l70.25,70.25H384c-11.76,0-21.333-9.573-21.333-21.333V36.417
       z M448,397.188v29.479c0,11.76-9.573,21.333-21.333,21.333h-70.25l-6.008-6.008l15.633-5.211c5.583-1.854,8.604-7.896,6.74-13.49
       c-1.865-5.583-7.875-8.604-13.49-6.74L327.948,427l-102.792,20.563l-57.267-24.544c3.715-4.19,3.664-10.548-0.348-14.56
       c-4.167-4.167-10.917-4.167-15.083,0l-10.052,10.052L101.115,448H42.667c-11.76,0-21.333-9.573-21.333-21.333V384h420.073
       L448,397.188z M430.74,362.667H21.333v-38.25l96-96l67.125,67.125c4.167,4.167,10.917,4.167,15.083,0s4.167-10.917,0-15.083
       l-19.125-19.125L288,153.75l130.568,130.568l-11.714,19.526c-0.064,0.105-0.042,0.236-0.102,0.342
       c-0.081,0.143-0.22,0.228-0.294,0.376l-10.667,21.333c-2.635,5.271-0.5,11.677,4.771,14.313c1.531,0.76,3.156,1.125,4.76,1.125
       c3.917,0,7.677-2.156,9.552-5.896l1.125-2.25L430.74,362.667z M448,235.26l-18.12,30.203L295.542,131.125
       c-4.167-4.167-10.917-4.167-15.083,0L165.333,246.25l-40.458-40.458c-4.167-4.167-10.917-4.167-15.083,0L21.333,294.25v-40.24
       l20.62-68.729l20.922-41.844c2.635-5.271,0.5-11.677-4.771-14.313c-5.271-2.625-11.677-0.5-14.313,4.771L32,157.479
       l-10.667-21.333V42.667c0-11.76,9.573-21.333,21.333-21.333h298.667v64C341.333,108.865,360.469,128,384,128h64V235.26z"
              />
            </g>
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    );
};

export default Image;
