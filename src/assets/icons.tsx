import React from "react";

export const icons = {
  loader: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <circle cx="60" cy="50" r="4" fill="#3d9970">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            values="95;35"
            keyTimes="0;1"
            begin="-0.67s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="1s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="-0.67s"
          ></animate>
        </circle>
        <circle cx="60" cy="50" r="4" fill="#3d9970">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            values="95;35"
            keyTimes="0;1"
            begin="-0.33s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="1s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="-0.33s"
          ></animate>
        </circle>
        <circle cx="60" cy="50" r="4" fill="#3d9970">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            values="95;35"
            keyTimes="0;1"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="1s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="0s"
          ></animate>
        </circle>
      </g>
      <g transform="translate(-15 0)">
        <path
          d="M50 50L20 50A30 30 0 0 0 80 50Z"
          fill="#f8b26a"
          transform="rotate(90 50 50)"
        ></path>
        <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;45 50 50;0 50 50"
            keyTimes="0;0.5;1"
          ></animateTransform>
        </path>
        <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#f8b26a">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;-45 50 50;0 50 50"
            keyTimes="0;0.5;1"
          ></animateTransform>
        </path>
      </g>
    </svg>
  ),
  logo: (
    <svg
      className="svg_icon svg_logo"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M4 21.832c4.587.38 2.944-4.493 7.188-4.538l1.838 1.534c.458 5.538-6.315 6.773-9.026 3.004zm14.065-7.115c1.427-2.239 5.847-9.749 5.847-9.749.352-.623-.43-1.273-.976-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.039 3.995-2.81zm-11.999 3.876c.666-1.134 1.748-2.977 4.447-3.262.434-2.087.607-3.3 2.547-5.112 1.373-1.282 4.938-4.409 7.021-6.229-1-2.208-4.141-4.023-8.178-3.99-6.624.055-11.956 5.465-11.903 12.092.023 2.911 1.081 5.571 2.82 7.635 1.618.429 2.376.348 3.246-1.134zm6.952-15.835c1.102-.006 2.005.881 2.016 1.983.004 1.103-.882 2.009-1.986 2.016-1.105.009-2.008-.88-2.014-1.984-.013-1.106.876-2.006 1.984-2.015zm-5.997 2.001c1.102-.01 2.008.877 2.012 1.983.012 1.106-.88 2.005-1.98 2.016-1.106.007-2.009-.881-2.016-1.988-.009-1.103.877-2.004 1.984-2.011zm-2.003 5.998c1.106-.007 2.01.882 2.016 1.985.01 1.104-.88 2.008-1.986 2.015-1.105.008-2.005-.88-2.011-1.985-.011-1.105.879-2.004 1.981-2.015zm10.031 8.532c.021 2.239-.882 3.718-1.682 4.587l-.046.044c5.255-.591 9.062-4.304 6.266-7.889-1.373 2.047-2.534 2.442-4.538 3.258z" />
    </svg>
  ),
  brush: (
    <svg
      className="svg_icon svg_brush"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.4761 0.227766C23.6579 0.0649669 23.8848 -0.0151916 24.114 0.00238078C24.3432 0.0199532 24.5589 0.134044 24.7206 0.323176C24.8818 0.507435 24.98 0.752993 24.9972 1.01459C25.0145 1.27619 24.9496 1.5362 24.8145 1.74669C23.2654 4.16629 18.2595 11.8468 14.2363 16.5085C13.0675 17.8633 11.8987 18.8804 11.023 19.554C10.1867 20.2009 9.10189 20.0005 8.39075 19.1781C7.70595 18.3843 7.51828 17.1802 8.04176 16.2337C8.61133 15.1995 9.5019 13.8046 10.7448 12.4612C14.8947 7.97696 21.4053 2.08063 23.4761 0.227766Z" />
      <path d="M9.95628 21.1836C9.95628 22.1958 9.60941 23.1665 8.99198 23.8822C8.37455 24.5979 7.53714 25 6.66396 25C5.0178 25 3.37165 25 0.902409 24.0459C-1.56683 23.0918 1.72549 22.1377 2.54857 21.1836C3.37165 20.2295 4.84496 17.3672 6.66396 17.3672C7.53714 17.3672 8.37455 17.7693 8.99198 18.485C9.60941 19.2007 9.95628 20.1714 9.95628 21.1836Z" />
    </svg>
  ),
  circle: (
    <svg
      className="svg_icon svg_circle"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 23.4375C15.4008 23.4375 18.1828 22.2852 20.234 20.234C22.2852 18.1828 23.4375 15.4008 23.4375 12.5C23.4375 9.59919 22.2852 6.8172 20.234 4.76602C18.1828 2.71484 15.4008 1.5625 12.5 1.5625C9.59919 1.5625 6.8172 2.71484 4.76602 4.76602C2.71484 6.8172 1.5625 9.59919 1.5625 12.5C1.5625 15.4008 2.71484 18.1828 4.76602 20.234C6.8172 22.2852 9.59919 23.4375 12.5 23.4375ZM12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66117C18.9946 1.31696 15.8152 0 12.5 0C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25Z"
      />
    </svg>
  ),
  eraser: (
    <svg
      className="svg_icon svg_eraser"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25 7.89269C24.9992 7.60318 24.9436 7.31669 24.8364 7.04977C24.7292 6.78284 24.5725 6.54075 24.3754 6.33748L18.9545 0.622084C18.5535 0.222743 18.021 0 17.4673 0C16.9136 0 16.381 0.222743 15.9801 0.622084L0.617192 16.6641C0.224855 17.0777 0.00470951 17.6367 0.00470951 18.2193C0.00470951 18.8019 0.224855 19.3609 0.617192 19.7745L4.11214 23.4448H0.743605C0.546389 23.4448 0.35725 23.5267 0.217797 23.6725C0.0783438 23.8184 0 24.0162 0 24.2224C0 24.4286 0.0783438 24.6264 0.217797 24.7722C0.35725 24.9181 0.546389 25 0.743605 25H19.3337C19.5309 25 19.7201 24.9181 19.8595 24.7722C19.999 24.6264 20.0773 24.4286 20.0773 24.2224C20.0773 24.0162 19.999 23.8184 19.8595 23.6725C19.7201 23.5267 19.5309 23.4448 19.3337 23.4448H10.9607L24.3456 9.4479C24.5482 9.24723 24.7103 9.00631 24.8227 8.73926C24.9351 8.47222 24.9953 8.18441 25 7.89269ZM8.85634 23.4448H6.21654L1.67311 18.6936C1.61488 18.6329 1.56868 18.5608 1.53715 18.4814C1.50562 18.402 1.48939 18.3169 1.48939 18.2309C1.48939 18.145 1.50562 18.0599 1.53715 17.9805C1.56868 17.9011 1.61488 17.829 1.67311 17.7683L5.77038 13.4759L12.0836 20.07L8.85634 23.4448ZM23.3269 8.3126L13.1321 18.9736L6.82629 12.3717L17.0137 1.71851C17.1327 1.59922 17.2912 1.53262 17.4561 1.53262C17.621 1.53262 17.7795 1.59922 17.8986 1.71851L23.3269 7.38725C23.4448 7.51135 23.5116 7.67885 23.5128 7.85381C23.5128 7.93942 23.4964 8.02416 23.4645 8.10298C23.4325 8.1818 23.3857 8.25309 23.3269 8.3126Z" />
    </svg>
  ),
  line: (
    <svg
      className="svg_icon svg_line"
      width="22"
      height="19"
      viewBox="0 0 22 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.1274 0.158655L0.193206 15.7068C0.0869428 15.7941 0.0951929 15.9814 0.21154 16.1231L1.69232 17.9263C1.80866 18.068 1.9908 18.1126 2.09706 18.0253L21.0313 2.47713C21.1375 2.38987 21.1293 2.20255 21.0129 2.06087L19.5322 0.257609C19.4158 0.115924 19.2337 0.0713948 19.1274 0.158655Z" />
    </svg>
  ),
  rect: (
    <svg
      className="svg_icon svg_rect"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 3.125C0 2.2962 0.32924 1.50134 0.915291 0.915291C1.50134 0.32924 2.2962 0 3.125 0L21.875 0C22.7038 0 23.4987 0.32924 24.0847 0.915291C24.6708 1.50134 25 2.2962 25 3.125V21.875C25 22.7038 24.6708 23.4987 24.0847 24.0847C23.4987 24.6708 22.7038 25 21.875 25H3.125C2.2962 25 1.50134 24.6708 0.915291 24.0847C0.32924 23.4987 0 22.7038 0 21.875V3.125Z" />
    </svg>
  ),
  undo: (
    <svg
      className="svg_icon svg_undo"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.8125 9.61538H17.1875C19.7719 9.61538 21.875 12.2038 21.875 15.3846C21.875 18.5654 19.7719 21.1538 17.1875 21.1538H12.5V25H17.1875C21.4953 25 25 20.6865 25 15.3846C25 10.0827 21.4953 5.76923 17.1875 5.76923H7.8125V0L0 7.69231L7.8125 15.3846V9.61538Z" />
    </svg>
  ),
  redo: (
    <svg
      className="svg_icon svg_redo"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.8125 25H12.5V21.1538H7.8125C5.22813 21.1538 3.125 18.5654 3.125 15.3846C3.125 12.2038 5.22813 9.61538 7.8125 9.61538H17.1875V15.3846L25 7.69231L17.1875 0V5.76923H7.8125C3.50469 5.76923 0 10.0827 0 15.3846C0 20.6865 3.50469 25 7.8125 25Z" />
    </svg>
  ),
  save: (
    <svg
      className="svg_icon svg_save"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.4156 5.66562L19.3344 0.584375C19.1 0.35 18.8125 0.178125 18.5 0.0843749V0H1C0.446875 0 0 0.446875 0 1V24C0 24.5531 0.446875 25 1 25H24C24.5531 25 25 24.5531 25 24V7.07812C25 6.54688 24.7906 6.04062 24.4156 5.66562ZM8.5 2.25H16.5V5.5H8.5V2.25ZM22.75 22.75H2.25V2.25H6.5V6.5C6.5 7.05312 6.94688 7.5 7.5 7.5H17.5C18.0531 7.5 18.5 7.05312 18.5 6.5V2.93125L22.75 7.18125V22.75ZM12.5 10.3125C10.0156 10.3125 8 12.3281 8 14.8125C8 17.2969 10.0156 19.3125 12.5 19.3125C14.9844 19.3125 17 17.2969 17 14.8125C17 12.3281 14.9844 10.3125 12.5 10.3125ZM12.5 17.3125C11.1187 17.3125 10 16.1938 10 14.8125C10 13.4312 11.1187 12.3125 12.5 12.3125C13.8813 12.3125 15 13.4312 15 14.8125C15 16.1938 13.8813 17.3125 12.5 17.3125Z" />
    </svg>
  ),
  colorpick: (
    <svg
      className="svg_icon svg_colorpick"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 22c0 1.105-.896 2-2 2s-2-.895-2-2 .896-2 2-2 2 .895 2 2zm-12-8c0 1.104.895 2 2 2s2-.896 2-2-.895-2-2-2-2 .896-2 2zm4 4c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-12c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm12 12c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-.244-8.679l1.034 1.023-5.52 5.469c-1.017 1.005-1.626.132-2.941 1.023-.177.118-.362.164-.538.155-.437-.027-.806-.406-.776-.886.006-.159.064-.328.171-.499.79-1.257.021-1.914 1.013-2.892l5.491-5.439 1.031 1.024-2.915 2.879 2.188-.128 1.762-1.729zm1.025-5.293c-.036.849-.333 1.218-.719 1.195-.215-.014-.425-.149-.618-.32-.279-.247-.705-.23-.973.036-.289.293-.283.768.01 1.055l3.609 3.569c.292.287.761.286 1.047-.006.265-.27.276-.697.025-.979-.191-.212-.34-.443-.324-.684.021-.35.393-.616 1.185-.659 2.664-.146 3.977-1.699 3.977-3.545 0-2.124-1.666-3.69-3.688-3.69-1.869 0-3.416 1.32-3.531 4.028z" />
    </svg>
  ),
};
