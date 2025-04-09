import "react";

import "./Controller.css"

export default function Controller(props){
return (<>
  <div className="cercle">
        <div className="VerticalBox">
            <button className={"up"} onClick={props.buttonAction}>
            <svg width="110" height="110" viewBox="0 0 68 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.9584 34.358L0.041687 34.358L34 0.480164L67.9584 34.358Z" fill="#1D1B20"/>
            </svg>

            </button>
            <div className="middle">
                <button className={"left"} onClick={props.buttonAction} >
                <svg width="110" height="110" viewBox="0 0 35 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.5833 0.609116L34.5833 68.3648L0.624977 34.487L34.5833 0.609116Z" fill="#1D1B20"/>
                </svg>
                </button>
                
                <button className={"middle-button"} onClick={props.buttonAction}>
                <svg width="116" height="115" viewBox="0 0 116 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_112_18)">
                <ellipse cx="58" cy="53.487" rx="53.5" ry="53.3732" fill="#312A2A"/>
                </g>
                <defs>
                <filter id="filter0_d_112_18" x="0.5" y="0.113739" width="115" height="114.746" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_112_18"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_112_18" result="shape"/>
                </filter>
                </defs>
                </svg>

                    
                </button>
                <button className={"right"} onClick={props.buttonAction}>
                <svg width="110" height="110" viewBox="0 0 35 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.416687 68.3649V0.609131L34.375 34.487L0.416687 68.3649Z" fill="#1D1B20"/>
                </svg>
                </button>
            </div>
            <button className={"down"} onClick={props.buttonAction}>
                <div>
                <svg width="110" height="110" viewBox="0 0 68 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0416412 0.641968L67.9583 0.641968L34 34.5198L0.0416412 0.641968Z" fill="#1D1B20"/>
                </svg>

                </div>
            </button>
        </div>
    </div>
</>
);

}