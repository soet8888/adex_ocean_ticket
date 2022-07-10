import React from "react";



//icon-park:close-small
export const CloseIcon = (props) => {
  return (
    <svg className={`w-6 h-6 ${props.className}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <g fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14l20 20M14 34l20-20" />
      </g>
    </svg>
  );
};



//hero icon
export const ChevronRightIcon = (props) => {
  return (
    <svg className={"h-10 w-10"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <path fill="currentColor" d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z" />
    </svg>
  );
};

export const HomeIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
      <path
        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5z"
        fill="currentColor"
      />
    </svg>
  );
};
export const ChevronLeftIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z" fill="currentColor" />
    </svg>
  );
};

export const AccountIcon = (props) => {
  return (
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <path fill="currentColor" d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z" />
    </svg>
  );
};

export const LoginIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 h-8 " aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
      <path d="M14 10L8 5v3H1v4h7v3l6-5zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8v14z" fill="currentColor" />
    </svg>
  );
};
//hero icon
export const ChevronDownIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
};

// twemoji:stuffed-flatbread
export const BarkeryIcon = (props) => {
  return (
    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
      <path fill="#EDB97F" d="M33.208 6.458C29.875 2.25 4.542 4.708 1.041 14.125C.167 24 7.385 35.277 20 34c13.167-1.333 18.083-12.416 13.208-27.542z" />
      <path fill="#FFD983" d="M4 12c2.736-2.348 13-8 25-6c8 .75-.708 7.542-9.708 9.542C11.422 17.291-1 16.292 4 12z" />
      <path
        fill="#77B255"
        d="M29.656 8.625c1.438-1.5 1.188-6.062.531-6.812c-.968-.813-1.937 1.645-4.812 2.395c-.708-1.375-1.481-1.852-1.5-1.865c-.833-.593-2.625-.509-3.125 1.907c-1.719-1.5-5.323-1.636-5.542-.833c-1.333 4.896-3.166 5.541-5.166 7.583c-3.009 3.072 2.708 3.688 8.521 1.875s11.093-4.25 11.093-4.25z"
      />
      <path fill="#77B255" d="M12.25 10.542c-.5-3.5-6.848-4.161-8.25-3.082C2 9 3.167 13.833 5.25 14.5c3.639 1.164 7-3.958 7-3.958z" />
      <path
        fill="#662113"
        d="M5.25 14.5c-1.336-.528.625-3.5 2.75-4.083s3.125.5 3.542 1.083c.042-.583.875-1.583 1.583-1.792c.708-.208 1.542.167 1.958 1.042c0-.917.042-3.875 3.333-4.833c.875-.292 3.375-.375 3.917 1c.833-.708 3.584-1.333 4.25.375c.291-.5 2.625-1.375 3.541.292c.667.917-.362 1.802-2.041 2.917c-5.458 3.624-17.666 6.041-22.833 3.999z"
      />
      <circle fill="#C1694F" cx="7.833" cy="12.458" r="1.25" />
      <circle fill="#C1694F" cx="23.834" cy="10.458" r="1.25" />
      <path fill="#C1694F" d="M21.751 8.792a1.584 1.584 0 1 1-3.168 0a1.584 1.584 0 0 1 3.168 0zM12 13.917a.708.708 0 1 1-1.416 0a.708.708 0 0 1 1.416 0z" />
      <path fill="#DD2E44" d="M16.75 10.062c.297-.604 3.341 2.123 2.562 3.875c-.75.375-3.375.844-6.125 1.125c1.23-.874 2.896-3.645 3.563-5z" />
      <path fill="#EA596E" d="M15.938 11.562c.487-.975 2.312 1.688 1.688 2.781c-.969.281-3.719.688-4.594.781c.624-.812 2.406-2.562 2.906-3.562z" />
      <path fill="#77B255" d="M21.562 13.406c.75-.219 4.469-1.25 6.969-3.188c.062-1.281-.969-2.906-2.656-.156c-1.125-.687-3.906.626-4.313 3.344z" />
      <circle fill="#E5A157" cx="26" cy="23" r="2" />
      <circle fill="#E5A157" cx="23" cy="28" r="1" />
      <circle fill="#E5A157" cx="15.5" cy="24.5" r="1.5" />
    </svg>
  );
};

//eva:plus-outline
export const PlusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" />
    </svg>
  );
};

//eva:minus-outline
export const MinusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
    </svg>
  );
};


export const LogoutIcon = (props) => {
  const { className } = props;
  return (
    <svg className={`w-10 h-10 ${props.className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 717 672">
      <path
        d="M0 151v391c0 36 15 68 39 93c24 24 55 37 91 37h196v-81H130c-27 0-48-22-48-49V151c0-27 21-48 48-48h196V21H130c-36 0-67 14-91 38c-24 25-39 56-39 92zm215 118v156c0 18 16 33 34 33h181v123c0 11 6 20 16 25c4 1 8 1 10 1c7 0 13-2 18-7l235-235c11-9 10-27 0-37L474 94c-14-15-44-6-44 18v124H249c-18 0-34 15-34 33z"
        fill="currentColor"
      />
    </svg>
  );
};


export const ContactIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-10 h-10" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <g fill="none">
        <path
          d="M1 4.75C1 3.784 1.784 3 2.75 3h10.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25v-6.5zM2.75 4a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H2.75zM9.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM5.261 7.714a1.357 1.357 0 1 0 0-2.714a1.357 1.357 0 0 0 0 2.714zm-1.403.678A.858.858 0 0 0 3 9.25a1.67 1.67 0 0 0 1.265 1.62l.053.014c.62.155 1.267.155 1.886 0l.054-.013a1.67 1.67 0 0 0 1.265-1.62a.858.858 0 0 0-.858-.859H3.858z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
export const CheckIcon = () => {
  return (
    <svg className="w-6 h-6 text-dark-gold fill-current" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="none">
        <path d="M8 12.5l3 3l5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  );
};

//ant-design:caret-left-filled
export const LeftIcon = () => {
  return (
    <svg
      className="w-5 h-5 fill-current mr-1"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" fill="currentColor" />
    </svg>
  );
};
export const ArrowBackIcon = () => {
  return (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <path fill="currentColor" d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z" />
    </svg>
  );
};
export const AwardIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="12" cy="9" r="6" />
        <path d="m12.002 15.003l3.4 5.89L17 17.66l3.598.232l-3.4-5.889m-10.396 0l-3.4 5.89L7 17.66l1.598 3.232l3.4-5.889" />
      </g>
    </svg>
  );
};
//ant-design:caret-right-filled
export const RightIcon = () => {
  return (
    <svg
      className="w-5 h-5 fill-current ml-1"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" fill="currentColor" />
    </svg>
  );
};
