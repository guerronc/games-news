import React from "react";

export const LogoHeader = (props) => {
  return (
    <svg width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1.363 .023)">
          <path
            d="M68 31.286C68 26.158 63.892 22 58.825 22H9.175C4.108 22 0 26.158 0 31.286v11c0 .05.007.1.007.152 0 .051-.007.1-.007.152v14.902c0 5.129 4.108 9.286 9.175 9.286H10.3c5.067 0 9.175-4.157 9.175-9.286v-9.015h29.05v9.237c0 5.129 4.108 9.286 9.175 9.286h1.125C63.892 67 68 62.843 68 57.714V42.81c0-.089-.01-.174-.013-.263.002-.088.013-.173.013-.263V31.286h0z"
            stroke="#001E7E"
            strokeWidth={2}
          />
          <path
            d="M15.822 35.033h-1.144v-1.067c0-1.638-1.423-2.966-3.178-2.966s-3.178 1.328-3.178 2.966v1.067H7.178C5.423 35.033 4 36.362 4 38c0 1.637 1.423 2.966 3.178 2.966h1.144v1.068C8.322 43.672 9.745 45 11.5 45s3.178-1.328 3.178-2.966v-1.068h1.144C17.577 40.966 19 39.637 19 38c0-1.638-1.423-2.967-3.178-2.967z"
            stroke="#001E7E"
            strokeWidth={2}
          />
          <circle stroke="#001E7E" strokeWidth={2} cx={56} cy={32} r={2} />
          <circle stroke="#001E7E" strokeWidth={2} cx={56} cy={43} r={2} />
          <circle stroke="#001E7E" strokeWidth={2} cx={62} cy={37} r={2} />
          <circle stroke="#001E7E" strokeWidth={2} cx={51} cy={37} r={2} />
          <path
            d="M35 16.066V.934c0-1.245-2-1.245-2 0v15.132c0 1.245 2 1.245 2 0z"
            fill="#012179"
            fillRule="nonzero"
          />
          <path
            d="M38.99 16h-7.98c-.55 0-1.01.4-1.01.88v5.24c0 .48.46.88 1.01.88h7.98c.55 0 1.01-.4 1.01-.88v-5.24c0-1.135-2.021-1.135-2.021 0v5.24l1.01-.878h-7.978l1.01.879v-5.242l-1.01.88h7.978c1.303 0 1.303-1.759 0-1.759zM31 38c0 .552-.423 1-.944 1h-2.112c-.521 0-.944-.448-.944-1s.423-1 .944-1h2.112c.521 0 .944.448.944 1zm9 0c0 .552-.423 1-.944 1h-2.112c-.521 0-.944-.448-.944-1s.423-1 .944-1h2.112c.521 0 .944.448.944 1z"
            fill="#012179"
            fillRule="nonzero"
          />
        </g>
        <text
          fontFamily="Lato-Black, Lato"
          fontSize={30}
          fontWeight={700}
          fill="#012179"
          transform="translate(1)"
        >
          <tspan x={167.363} y={58.023}>
            {"Games"}
          </tspan>
        </text>
        <text
          fontFamily="ABeeZee-Regular, ABeeZee"
          fontSize={35}
          fill="#8840DA"
        >
          <tspan x={75} y={57}>
            {"News"}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export const LogoFooter = (props) => {
  return (
    <svg width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <text
          fontFamily="ABeeZee-Regular, ABeeZee"
          fontSize={35}
          fill="#8840DA"
        >
          <tspan x={75} y={57}>
            {"Platzi"}
          </tspan>
        </text>
        <g transform="translate(1)">
          <path
            d="M68 31.286C68 26.158 63.892 22 58.825 22H9.175C4.108 22 0 26.158 0 31.286v11c0 .05.007.1.007.152 0 .051-.007.1-.007.152v14.902c0 5.129 4.108 9.286 9.175 9.286H10.3c5.067 0 9.175-4.157 9.175-9.286v-9.015h29.05v9.237c0 5.129 4.108 9.286 9.175 9.286h1.125C63.892 67 68 62.843 68 57.714V42.81c0-.089-.01-.174-.013-.263.002-.088.013-.173.013-.263V31.286h0z"
            stroke="#CCC"
            strokeWidth={2}
          />
          <path
            d="M15.822 35.033h-1.144v-1.067c0-1.638-1.423-2.966-3.178-2.966s-3.178 1.328-3.178 2.966v1.067H7.178C5.423 35.033 4 36.362 4 38c0 1.637 1.423 2.966 3.178 2.966h1.144v1.068C8.322 43.672 9.745 45 11.5 45s3.178-1.328 3.178-2.966v-1.068h1.144C17.577 40.966 19 39.637 19 38c0-1.638-1.423-2.967-3.178-2.967z"
            stroke="#CCC"
            strokeWidth={2}
          />
          <circle stroke="#CCC" strokeWidth={2} cx={56} cy={32} r={2} />
          <circle stroke="#CCC" strokeWidth={2} cx={56} cy={43} r={2} />
          <circle stroke="#CCC" strokeWidth={2} cx={62} cy={37} r={2} />
          <circle stroke="#CCC" strokeWidth={2} cx={51} cy={37} r={2} />
          <path
            d="M35 16.066V.934c0-1.245-2-1.245-2 0v15.132c0 1.245 2 1.245 2 0z"
            fill="#CCC"
            fillRule="nonzero"
          />
          <path
            d="M38.99 16h-7.98c-.55 0-1.01.4-1.01.88v5.24c0 .48.46.88 1.01.88h7.98c.55 0 1.01-.4 1.01-.88v-5.24c0-1.135-2.021-1.135-2.021 0v5.24l1.01-.878h-7.978l1.01.879v-5.242l-1.01.88h7.978c1.303 0 1.303-1.759 0-1.759zM31 39c0 .552-.423 1-.944 1h-2.112c-.521 0-.944-.448-.944-1s.423-1 .944-1h2.112c.521 0 .944.448.944 1zm9 0c0 .552-.423 1-.944 1h-2.112c-.521 0-.944-.448-.944-1s.423-1 .944-1h2.112c.521 0 .944.448.944 1z"
            fill="#CCC"
            fillRule="nonzero"
          />
        </g>
        <text
          transform="translate(167 28)"
          fill="#CCC"
          fontFamily="Lato-Black, Lato"
          fontSize={30}
          fontWeight={700}
        >
          <tspan x={0.363} y={30.023}>
            {"Games"}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

