export interface ArrowProps {
  width?: number;
  height?: number;
  className?: string;
}

export function LeftStraightLineArrow ({ width, height, className }: ArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 77} height={height || 12} viewBox="0 0 77 12" fill="none" className={className || ''}>
      <path d="M0 6L9.80595 11.7702L10.194 0.229759L0 6ZM8.21639 6.99944H13.7164L13.7836 5.00056H8.28361L8.21639 6.99944ZM19.2164 6.99944H24.7164L24.7836 5.00056H19.2836L19.2164 6.99944ZM30.2164 6.99944H35.7164L35.7836 5.00056H30.2836L30.2164 6.99944ZM41.2164 6.99944H43.9664L44.0336 5.00056H41.2836L41.2164 6.99944ZM43.9664 6.99944H46.7091L46.7763 5.00056H44.0336L43.9664 6.99944ZM52.1945 6.99944H57.6798L57.7471 5.00056H52.2617L52.1945 6.99944ZM63.1652 6.99944H68.6506L68.7178 5.00056H63.2325L63.1652 6.99944ZM74.136 6.99944H76.8787L76.9459 5.00056H74.2032L74.136 6.99944Z" fill="white"/>
    </svg>
  )
};

export function TopToLeftCurveLineArrow ({ width, height, className }: ArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 100} height={height || 84} viewBox="0 0 100 84" fill="none" className={className || ''}>
      <path d="M4.72251 83.3829L11.9866 74.5355L0.747869 72.3368L4.72251 83.3829ZM8.4684 60.7286L9.4417 60.919L8.4684 60.7286ZM7.10052 75.078L8.03699 69.4144L6.09039 69.0336L5.15392 74.6971L7.10052 75.078ZM8.97346 63.7508L9.4417 60.919L7.4951 60.5382L7.02686 63.37L8.97346 63.7508ZM9.4417 60.919C9.58004 60.0823 9.7319 59.2522 9.89702 58.4289L7.96296 57.9795C7.79328 58.8256 7.63723 59.6786 7.4951 60.5382L9.4417 60.919ZM11.0562 53.5274C11.5019 51.8965 12.0009 50.2952 12.5508 48.725L10.6912 48.0036C10.1257 49.6183 9.61265 51.2648 9.15442 52.9415L11.0562 53.5274ZM14.3758 44.0512C15.0413 42.5105 15.7576 41.0039 16.5221 39.5329L14.7756 38.5499C13.9893 40.0629 13.2525 41.6125 12.568 43.197L14.3758 44.0512ZM18.9814 35.189C19.855 33.7677 20.7758 32.3848 21.7411 31.042L20.1433 29.817C19.1506 31.1981 18.2036 32.6203 17.305 34.0821L18.9814 35.189ZM24.7847 27.1146C25.8473 25.8411 26.9526 24.6102 28.0977 23.4235L26.6799 21.9828C25.5025 23.2029 24.366 24.4686 23.2732 25.7782L24.7847 27.1146ZM31.6618 19.9871C32.8907 18.885 34.157 17.8294 35.4579 16.822L34.2469 15.1957C32.9096 16.2313 31.6077 17.3165 30.3443 18.4496L31.6618 19.9871ZM39.4675 13.9424C40.8374 13.0317 42.2392 12.1712 43.67 11.3626L42.6889 9.58353C41.2181 10.4147 39.7771 11.2993 38.3689 12.2355L39.4675 13.9424ZM48.0449 9.09523C49.5281 8.39347 51.0375 7.7452 52.57 7.15215L51.8384 5.25502C50.2628 5.86475 48.7111 6.53121 47.1863 7.25262L48.0449 9.09523ZM57.2245 5.54339C58.7921 5.06484 60.3798 4.64264 61.985 4.27846L61.5189 2.3003C59.8683 2.6748 58.2357 3.10894 56.6239 3.60098L57.2245 5.54339ZM66.8268 3.36519C68.4474 3.12071 70.0823 2.93475 71.7288 2.80897L71.5397 0.789061C69.8462 0.918427 68.1648 1.10968 66.4982 1.36112L66.8268 3.36519ZM76.6633 2.61394C78.3027 2.60934 79.9508 2.66453 81.605 2.78109L81.6976 0.760389C79.9962 0.640504 78.3012 0.58374 76.615 0.588474L76.6633 2.61394ZM86.5335 3.30922C88.1599 3.54344 89.7899 3.83779 91.421 4.19379L91.7914 2.21302C90.1145 1.84703 88.4386 1.54437 86.7661 1.30351L86.5335 3.30922ZM96.2394 5.42579C97.0351 5.65936 97.8306 5.90795 98.6254 6.17174L99.1958 4.24583C98.3792 3.9748 97.5618 3.71937 96.7441 3.47934L96.2394 5.42579Z" fill="white"/>
    </svg>
  );
};

export function BottomToRightCurveLineArrow ({ width, height, className }: ArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 100} height={height || 84} viewBox="0 0 100 84" fill="none" className={className || ''}>
      <path d="M95.5994 0.988176L88.2888 9.79716L99.5157 12.0551L95.5994 0.988176ZM91.734 23.6224L90.7617 23.4269L91.734 23.6224ZM93.1776 9.28047L92.2112 14.939L94.1558 15.3301L95.1221 9.67156L93.1776 9.28047ZM91.2449 20.5976L90.7617 23.4269L92.7063 23.818L93.1894 20.9887L91.2449 20.5976ZM90.7617 23.4269C90.6189 24.2628 90.4627 25.0921 90.2932 25.9146L92.2249 26.3742C92.399 25.5289 92.5596 24.6768 92.7063 23.818L90.7617 23.4269ZM89.1082 30.8099C88.6539 32.4384 88.1464 34.037 87.5883 35.6043L89.444 36.3355C90.018 34.7238 90.5398 33.0801 91.0069 31.4058L89.1082 30.8099ZM85.7387 40.2684C85.065 41.8055 84.3407 43.3084 83.5685 44.7754L85.3098 45.7675C86.1041 44.2587 86.849 42.713 87.5419 41.1321L85.7387 40.2684ZM81.0863 49.1061C80.2052 50.5228 79.2771 51.9008 78.3048 53.2386L79.8961 54.472C80.8961 53.0962 81.8506 51.6789 82.7568 50.2219L81.0863 49.1061ZM75.2405 57.1498C74.1711 58.4177 73.0594 59.6428 71.9081 60.8234L73.3183 62.2716C74.5021 61.0577 75.6452 59.798 76.7449 58.4942L75.2405 57.1498ZM68.3259 64.241C67.0912 65.3365 65.8193 66.3855 64.5131 67.3859L65.7155 69.0186C67.0583 67.9901 68.3658 66.9118 69.6352 65.7854L68.3259 64.241ZM60.4883 70.2443C59.1136 71.1478 57.7073 72.0009 56.2723 72.8019L57.244 74.5861C58.7192 73.7627 60.1648 72.8857 61.578 71.957L60.4883 70.2443ZM51.8855 75.0462C50.3986 75.7401 48.8859 76.3804 47.3502 76.9653L48.0718 78.8663C49.6506 78.2649 51.2058 77.6066 52.7344 76.8933L51.8855 75.0462ZM42.6873 78.5495C41.1172 79.0198 39.5272 79.4336 37.9202 79.7893L38.3758 81.7699C40.0283 81.4041 41.6632 80.9786 43.2776 80.4951L42.6873 78.5495ZM33.0736 80.677C31.4518 80.9129 29.8159 81.0902 28.1687 81.2073L28.3471 83.2282C30.0413 83.1078 31.7237 82.9254 33.3917 82.6828L33.0736 80.677ZM23.2333 81.3763C21.5939 81.3723 19.9461 81.3084 18.2925 81.1831L18.1893 83.2033C19.89 83.3321 21.5847 83.3978 23.2709 83.402L23.2333 81.3763ZM13.3669 80.6289C11.7417 80.3861 10.1133 80.0832 8.48412 79.7186L8.10324 81.6974C9.77817 82.0722 11.4525 82.3837 13.1237 82.6334L13.3669 80.6289ZM3.67227 78.4612C2.87782 78.2234 2.08371 77.9706 1.29022 77.7026L0.709682 79.6255C1.52491 79.9008 2.34088 80.1606 3.15732 80.4049L3.67227 78.4612Z" fill="white"/>
    </svg>
  );
}

export function LongBottomToRightCurveLineArrow ({ width, height, className }: ArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 406} height={ height || 140 } viewBox="0 0 406 140" fill="none" className={className || ''}>
      <path d="M406 0L395.641 4.64644L404.935 11.6181L406 0ZM105.746 133.495L105.905 132.499L105.746 133.495ZM401.021 5.33927L398.238 9.3013L399.848 10.5088L402.631 6.5468L401.021 5.33927ZM395.455 13.2633L394.064 15.2443L395.673 16.4519L397.065 14.4709L395.455 13.2633ZM394.064 15.2443C393.581 15.931 393.097 16.615 392.609 17.2965L394.209 18.5177C394.7 17.8317 395.188 17.1431 395.673 16.4519L394.064 15.2443ZM389.655 21.354C388.658 22.6986 387.651 24.0328 386.635 25.3564L388.195 26.6313C389.218 25.2988 390.232 23.9558 391.235 22.6022L389.655 21.354ZM383.546 29.3074C382.505 30.6154 381.455 31.9127 380.394 33.1992L381.913 34.5265C382.98 33.2314 384.038 31.9254 385.086 30.6086L383.546 29.3074ZM377.175 37.0387C376.091 38.3087 374.998 39.5677 373.895 40.8157L375.37 42.1939C376.48 40.9376 377.581 39.6701 378.672 38.3917L377.175 37.0387ZM370.548 44.539C369.422 45.7694 368.288 46.9888 367.144 48.1969L368.574 49.6245C369.725 48.4083 370.868 47.1808 372.001 45.9421L370.548 44.539ZM363.673 51.7993C362.507 52.9889 361.332 54.1672 360.148 55.3341L361.531 56.8096C362.723 55.6349 363.906 54.4487 365.08 53.2511L363.673 51.7993ZM356.557 58.8114C355.352 59.9589 354.138 61.0949 352.915 62.2193L354.249 63.7409C355.48 62.609 356.703 61.4654 357.917 60.3101L356.557 58.8114ZM349.21 65.567C347.966 66.6713 346.714 67.7638 345.453 68.8445L346.738 70.4105C348.007 69.3225 349.267 68.2227 350.519 67.111L349.21 65.567ZM341.638 72.0585C340.357 73.1182 339.068 74.1659 337.772 75.2016L339.005 76.8102C340.31 75.7676 341.608 74.7128 342.897 73.646L341.638 72.0585ZM333.85 78.2785C332.535 79.2923 331.211 80.2941 329.88 81.2836L331.06 82.933C332.4 81.9368 333.733 80.9284 335.057 79.9077L333.85 78.2785ZM325.856 84.22C324.507 85.1868 323.15 86.1414 321.786 87.0836L322.912 88.7718C324.285 87.8233 325.651 86.8623 327.01 85.889L325.856 84.22ZM317.666 89.8763C316.284 90.7951 314.896 91.7014 313.5 92.5951L314.57 94.3202C315.975 93.4205 317.373 92.5081 318.764 91.5831L317.666 89.8763ZM309.287 95.241C307.875 96.1107 306.456 96.9678 305.031 97.8121L306.045 99.572C307.48 98.7221 308.908 97.8593 310.329 96.9838L309.287 95.241ZM300.731 100.308C299.29 101.128 297.843 101.935 296.389 102.729L297.345 104.521C298.809 103.722 300.265 102.91 301.716 102.085L300.731 100.308ZM292.006 105.073C290.538 105.841 289.064 106.597 287.584 107.339L288.481 109.163C289.971 108.415 291.455 107.655 292.933 106.881L292.006 105.073ZM283.123 109.528C281.63 110.245 280.131 110.949 278.626 111.639L279.463 113.491C280.978 112.796 282.488 112.088 283.991 111.367L283.123 109.528ZM274.092 113.671C272.575 114.335 271.053 114.985 269.525 115.623L270.301 117.502C271.84 116.86 273.373 116.205 274.9 115.537L274.092 113.671ZM264.924 117.495C263.385 118.106 261.841 118.703 260.291 119.286L261.007 121.19C262.566 120.602 264.121 120.001 265.67 119.386L264.924 117.495ZM255.629 120.997C254.069 121.553 252.505 122.096 250.936 122.625L251.589 124.551C253.168 124.018 254.743 123.472 256.312 122.912L255.629 120.997ZM246.216 124.172C244.639 124.674 243.057 125.162 241.47 125.636L242.059 127.582C243.657 127.105 245.249 126.613 246.837 126.108L246.216 124.172ZM236.698 127.017C235.104 127.464 233.506 127.896 231.903 128.315L232.429 130.279C234.042 129.857 235.651 129.422 237.256 128.972L236.698 127.017ZM227.085 129.529C225.476 129.919 223.863 130.296 222.247 130.659L222.707 132.638C224.335 132.273 225.959 131.894 227.578 131.501L227.085 129.529ZM217.388 131.704C215.766 132.038 214.14 132.358 212.512 132.664L212.907 134.657C214.547 134.349 216.183 134.027 217.816 133.691L217.388 131.704ZM207.617 133.54C205.984 133.817 204.348 134.081 202.709 134.33L203.039 136.334C204.689 136.083 206.336 135.818 207.98 135.539L207.617 133.54ZM197.784 135.035C196.142 135.255 194.497 135.461 192.85 135.653L193.114 137.666C194.773 137.473 196.428 137.265 198.081 137.043L197.784 135.035ZM187.901 136.186C186.252 136.349 184.6 136.497 182.946 136.632L183.144 138.651C184.809 138.516 186.472 138.366 188.132 138.202L187.901 136.186ZM177.978 136.992C176.323 137.097 174.667 137.189 173.008 137.265L173.139 139.289C174.809 139.212 176.477 139.12 178.142 139.014L177.978 136.992ZM168.026 137.452C166.369 137.5 164.709 137.534 163.048 137.553L163.112 139.578C164.784 139.559 166.455 139.525 168.124 139.477L168.026 137.452ZM158.059 137.566C156.399 137.556 154.738 137.532 153.076 137.493L153.074 139.519C154.747 139.558 156.419 139.582 158.09 139.592L158.059 137.566ZM148.086 137.334C146.427 137.266 144.767 137.184 143.105 137.088L143.036 139.11C144.709 139.207 146.38 139.29 148.05 139.358L148.086 137.334ZM138.12 136.755C136.463 136.63 134.805 136.491 133.146 136.337L133.01 138.354C134.68 138.509 136.349 138.649 138.017 138.775L138.12 136.755ZM128.172 135.831C126.518 135.649 124.864 135.452 123.21 135.241L123.007 137.251C124.673 137.464 126.338 137.662 128.002 137.845L128.172 135.831ZM118.252 134.564C116.604 134.325 114.956 134.071 113.308 133.802L113.039 135.803C114.699 136.073 116.358 136.329 118.017 136.57L118.252 134.564ZM108.373 132.955C107.55 132.807 106.728 132.655 105.905 132.499L105.587 134.491C106.415 134.648 107.243 134.801 108.071 134.95L108.373 132.955ZM105.905 132.499L103.524 132.048L103.207 134.04L105.587 134.491L105.905 132.499ZM98.7633 131.147L94.0021 130.246L93.6844 132.237L98.4456 133.139L98.7633 131.147ZM89.2409 129.344L84.4797 128.443L84.162 130.435L88.9232 131.336L89.2409 129.344ZM79.7185 127.541L74.9573 126.64L74.6396 128.632L79.4008 129.533L79.7185 127.541ZM70.1961 125.739L65.4349 124.837L65.1173 126.829L69.8785 127.73L70.1961 125.739ZM60.6737 123.936L55.9126 123.034L55.5949 125.026L60.3561 125.928L60.6737 123.936ZM51.1514 122.133L46.3902 121.232L46.0725 123.223L50.8337 124.125L51.1514 122.133ZM41.629 120.33L36.8678 119.429L36.5501 121.421L41.3113 122.322L41.629 120.33ZM32.1066 118.527L27.3454 117.626L27.0277 119.618L31.7889 120.519L32.1066 118.527ZM22.5842 116.725L17.823 115.823L17.5054 117.815L22.2665 118.716L22.5842 116.725ZM13.0618 114.922L8.30068 114.02L7.983 116.012L12.7442 116.914L13.0618 114.922ZM3.53947 113.119L1.15886 112.668L0.841183 114.66L3.2218 115.111L3.53947 113.119Z" fill="white"/>
    </svg>
  );
}

export function LongTopToLeftBezierCurveLineArrow ({ width, height, className }: ArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 266} height={height || 232} viewBox="0 0 266 232" fill="none" className={className || ''}>
      <path d="M1 232L10.7631 226.184L0.787628 220.306L1 232ZM113.979 137.424L114.229 136.45L113.979 137.424ZM204.812 79.613L205.786 79.4696L204.812 79.613ZM134.818 143.491L135.068 142.517L134.818 143.491ZM200.594 53.3368L199.62 53.4801L200.594 53.3368ZM5.45364 225.928L7.8468 221.54L6.119 220.522L3.72584 224.91L5.45364 225.928ZM10.24 217.153L12.6331 212.766L10.9053 211.747L8.51216 216.135L10.24 217.153ZM15.0263 208.378L17.4194 203.991L15.6916 202.972L13.2985 207.36L15.0263 208.378ZM19.8126 199.603L22.2057 195.216L20.478 194.198L18.0848 198.585L19.8126 199.603ZM24.5989 190.828L26.9921 186.441L25.2643 185.423L22.8711 189.81L24.5989 190.828ZM29.3852 182.053L31.7784 177.666L30.0506 176.648L27.6574 181.035L29.3852 182.053ZM34.1715 173.278L35.3681 171.085L33.6403 170.066L32.4437 172.26L34.1715 173.278ZM35.3681 171.085C35.781 170.328 36.206 169.582 36.6429 168.846L34.951 167.765C34.5018 168.521 34.0648 169.288 33.6403 170.066L35.3681 171.085ZM39.4289 164.527C40.4141 163.117 41.4454 161.754 42.5199 160.438L40.9951 159.117C39.8899 160.471 38.8292 161.874 37.8161 163.323L39.4289 164.527ZM45.9003 156.6C47.0776 155.361 48.2963 154.171 49.5533 153.034L48.2293 151.502C46.9364 152.672 45.6829 153.895 44.472 155.17L45.9003 156.6ZM53.4586 149.758C54.8024 148.715 56.182 147.726 57.594 146.792L56.499 145.083C55.0468 146.043 53.628 147.061 52.2459 148.134L53.4586 149.758ZM61.937 144.15C63.4177 143.324 64.9278 142.555 66.4641 141.845L65.6207 139.995C64.0409 140.726 62.488 141.516 60.9653 142.365L61.937 144.15ZM71.1508 139.89C72.7361 139.298 74.3442 138.766 75.9717 138.295L75.398 136.345C73.7242 136.829 72.0706 137.376 70.4403 137.985L71.1508 139.89ZM80.901 137.07C82.5566 136.724 84.2283 136.441 85.9126 136.221L85.6214 134.212C83.8891 134.438 82.1699 134.729 80.4673 135.085L80.901 137.07ZM90.9798 135.754C92.6697 135.662 94.3689 135.634 96.0743 135.671L96.073 133.646C94.3189 133.608 92.5712 133.637 90.833 133.731L90.9798 135.754ZM101.168 135.974C102.855 136.138 104.545 136.366 106.235 136.66L106.524 134.663C104.786 134.361 103.048 134.126 101.312 133.957L101.168 135.974ZM111.25 137.726C112.077 137.934 112.903 138.158 113.729 138.398L114.229 136.45C113.381 136.203 112.531 135.973 111.68 135.759L111.25 137.726ZM113.729 138.398L116.334 139.157L116.834 137.209L114.229 136.45L113.729 138.398ZM121.543 140.673L126.753 142.19L127.254 140.242L122.044 138.726L121.543 140.673ZM131.963 143.707L134.568 144.465L135.068 142.517L132.463 141.759L131.963 143.707ZM134.568 144.465C135.414 144.711 136.259 144.937 137.102 145.143L137.52 143.173C136.704 142.974 135.887 142.756 135.068 142.517L134.568 144.465ZM142.218 146.152C143.958 146.414 145.688 146.592 147.405 146.69L147.471 144.667C145.814 144.573 144.143 144.401 142.463 144.148L142.218 146.152ZM152.6 146.741C154.344 146.676 156.069 146.529 157.772 146.302L157.477 144.293C155.833 144.512 154.168 144.654 152.486 144.717L152.6 146.741ZM162.871 145.374C164.561 144.983 166.224 144.513 167.855 143.968L167.207 142.041C165.632 142.567 164.028 143.021 162.397 143.398L162.871 145.374ZM172.682 142.098C174.264 141.398 175.81 140.626 177.315 139.784L176.341 138.001C174.888 138.814 173.395 139.56 171.868 140.236L172.682 142.098ZM181.716 137.048C183.142 136.068 184.522 135.022 185.853 133.915L184.589 132.33C183.304 133.4 181.97 134.411 180.593 135.358L181.716 137.048ZM189.693 130.41C190.92 129.183 192.093 127.899 193.207 126.561L191.695 125.226C190.618 126.518 189.485 127.759 188.3 128.944L189.693 130.41ZM196.365 122.398C197.354 120.964 198.28 119.481 199.14 117.952L197.425 116.911C196.595 118.387 195.7 119.82 194.745 121.205L196.365 122.398ZM201.506 113.257C202.221 111.661 202.867 110.024 203.44 108.35L201.576 107.643C201.023 109.258 200.399 110.838 199.709 112.379L201.506 113.257ZM204.922 103.272C205.336 101.566 205.676 99.8287 205.938 98.0634L203.987 97.7161C203.734 99.4196 203.406 101.096 203.006 102.742L204.922 103.272ZM206.481 92.7752C206.582 91.0184 206.606 89.2389 206.551 87.4402L204.577 87.4607C204.631 89.1981 204.608 90.9163 204.51 92.6122L206.481 92.7752ZM206.155 82.1241C206.052 81.2429 205.929 80.3579 205.786 79.4696L203.838 79.7563C203.976 80.6156 204.095 81.4715 204.195 82.3235L206.155 82.1241ZM205.786 79.4696L205.435 77.28L203.487 77.5667L203.838 79.7563L205.786 79.4696ZM204.732 72.9006L204.029 68.5212L202.081 68.8079L202.784 73.1873L204.732 72.9006ZM203.326 64.1418L202.623 59.7625L200.675 60.0492L201.378 64.4285L203.326 64.1418ZM201.92 55.3831L201.568 53.1934L199.62 53.4801L199.972 55.6698L201.92 55.3831ZM201.568 53.1934C201.436 52.3683 201.326 51.5485 201.237 50.7345L199.275 50.9156C199.367 51.7651 199.482 52.62 199.62 53.4801L201.568 53.1934ZM200.961 45.8131C200.957 44.1463 201.044 42.5086 201.216 40.9035L199.254 40.6382C199.073 42.3185 198.982 44.032 198.987 45.7748L200.961 45.8131ZM202.013 36.0708C202.372 34.4658 202.819 32.9003 203.348 31.3787L201.486 30.6621C200.933 32.256 200.464 33.8959 200.088 35.5772L202.013 36.0708ZM205.205 26.8828C205.91 25.4184 206.696 24.0046 207.554 22.646L205.89 21.5187C204.992 22.9403 204.17 24.4202 203.431 25.9535L205.205 26.8828ZM210.36 18.7154C211.369 17.4595 212.445 16.2649 213.582 15.1367L212.194 13.666C211.005 14.8452 209.88 16.0939 208.826 17.4072L210.36 18.7154ZM217.175 11.95C218.43 10.9571 219.739 10.0358 221.095 9.19112L220.043 7.45366C218.627 8.33616 217.26 9.2987 215.949 10.3362L217.175 11.95ZM225.292 6.89347C226.731 6.20878 228.209 5.60525 229.72 5.08769L229.058 3.16505C227.478 3.70626 225.933 4.33721 224.43 5.0528L225.292 6.89347ZM234.324 3.80186C235.876 3.464 237.453 3.21499 239.048 3.05942L238.819 1.043C237.149 1.20588 235.498 1.46656 233.874 1.82008L234.324 3.80186ZM243.837 2.87682C245.423 2.91014 247.02 3.03676 248.623 3.26103L248.848 1.25424C247.169 1.0193 245.496 0.886671 243.835 0.851759L243.837 2.87682ZM253.348 4.20689C254.885 4.60858 256.421 5.10356 257.952 5.69583L258.613 3.80248C257.012 3.18322 255.405 2.66526 253.796 2.24475L253.348 4.20689ZM262.38 7.69413C263.098 8.06548 263.813 8.45949 264.525 8.87666L265.475 7.12311C264.733 6.68827 263.988 6.27731 263.239 5.8898L262.38 7.69413Z" fill="white"/>
    </svg>
  )
};

export function TopToRightBezierCurveLineArrow ({ width, height, className }: ArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 137} height={height || 113} viewBox="0 0 137 113" fill="none">
      <path d="M131.904 0.577532L125.059 9.77522L136.373 11.4325L131.904 0.577532ZM1.54772 102.949L0.563784 103.007L1.54772 102.949ZM129.046 24.6933L130.025 24.8368L129.046 24.6933ZM129.853 9.47741L129.138 15.5063L131.097 15.7934L131.812 9.76445L129.853 9.47741ZM128.423 21.5353L128.066 24.5497L130.025 24.8368L130.383 21.8223L128.423 21.5353ZM128.066 24.5497C127.972 25.3376 127.86 26.1165 127.73 26.886L129.675 27.2747C129.811 26.4714 129.928 25.6586 130.025 24.8368L128.066 24.5497ZM126.709 31.4744C126.287 32.9975 125.791 34.4777 125.225 35.9123L127.057 36.7063C127.649 35.2062 128.168 33.6588 128.609 32.0671L126.709 31.4744ZM123.287 40.1518C122.562 41.5365 121.769 42.8697 120.913 44.1482L122.548 45.3195C123.443 43.9825 124.272 42.5882 125.031 41.14L123.287 40.1518ZM118.133 47.8529C117.139 49.0384 116.086 50.1642 114.98 51.227L116.345 52.7195C117.501 51.6089 118.602 50.4323 119.641 49.1929L118.133 47.8529ZM111.491 54.2361C110.276 55.1758 109.013 56.0481 107.708 56.8498L108.749 58.5936C110.111 57.7564 111.431 56.8452 112.7 55.8635L111.491 54.2361ZM103.672 59.0409C102.291 59.6977 100.874 60.2803 99.4283 60.7856L100.1 62.7046C101.611 62.1768 103.091 61.5682 104.534 60.8823L103.672 59.0409ZM95.0215 62.063C93.5347 62.408 92.0253 62.6735 90.4993 62.8561L90.7694 64.8683C92.3646 64.6773 93.9422 64.3999 95.496 64.0393L95.0215 62.063ZM85.9109 63.1523C84.3846 63.1671 82.848 63.0989 81.3067 62.9446L81.1569 64.9607C82.7689 65.1221 84.3759 65.1934 85.9719 65.1779L85.9109 63.1523ZM76.7434 62.2349C75.2491 61.9186 73.7554 61.5189 72.2675 61.0329L71.7057 62.962C73.2606 63.4699 74.8221 63.8878 76.3846 64.2185L76.7434 62.2349ZM67.924 59.357C67.2181 59.0415 66.5145 58.7056 65.8139 58.3488L64.9671 60.1596C65.6979 60.5317 66.432 60.8823 67.169 61.2115L67.924 59.357ZM65.8139 58.3488C65.0043 57.9365 64.1916 57.5507 63.3765 57.1909L62.6297 59.0491C63.4109 59.394 64.1903 59.7639 64.9671 60.1596L65.8139 58.3488ZM58.3451 55.3043C56.6143 54.7671 54.88 54.3415 53.1491 54.0228L52.8411 56.0165C54.496 56.3211 56.1548 56.7282 57.811 57.2422L58.3451 55.3043ZM47.8529 53.3759C46.064 53.2671 44.2867 53.2695 42.5286 53.3778L42.689 55.3999C44.3697 55.2963 46.0686 55.2941 47.7783 55.398L47.8529 53.3759ZM37.2581 54.0267C35.5123 54.3504 33.7945 54.7788 32.1131 55.3063L32.727 57.2446C34.3362 56.7398 35.9795 56.33 37.6494 56.0203L37.2581 54.0267ZM27.1609 57.1916C25.5478 57.9183 23.9797 58.74 22.4647 59.6511L23.4897 61.4045C24.9406 60.5319 26.4423 59.7451 27.9867 59.0492L27.1609 57.1916ZM18.0836 62.6496C16.6832 63.7339 15.3441 64.9019 14.0746 66.1481L15.4549 67.6263C16.6704 66.4331 17.9528 65.3146 19.2939 64.2761L18.0836 62.6496ZM10.492 70.1042C9.37805 71.4899 8.34071 72.9471 7.3881 74.4703L9.05603 75.5901C9.96716 74.1333 10.9596 72.7392 12.0256 71.4131L10.492 70.1042ZM4.81138 79.1922C4.0503 80.8081 3.37843 82.4819 2.80341 84.2085L4.67277 84.9003C5.22236 83.25 5.86457 81.65 6.59215 80.1052L4.81138 79.1922ZM1.39689 89.443C1.03482 91.1941 0.768914 92.9887 0.605835 94.8221L2.57167 95.0491C2.72772 93.2947 2.98209 91.5782 3.32825 89.904L1.39689 89.443ZM0.427878 100.274C0.448342 101.178 0.493406 102.089 0.563784 103.007L2.53165 102.892C2.46413 102.01 2.42091 101.137 2.40131 100.271L0.427878 100.274ZM0.563784 103.007L0.746638 105.393L2.7145 105.278L2.53165 102.892L0.563784 103.007ZM1.11234 110.165L1.2952 112.551L3.26306 112.435L3.08021 110.049L1.11234 110.165Z" fill="white"/>
    </svg>
  );
};

export function BottomToRightBezierCurveLineArrow ({ width, height, className }: ArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 115} height={height || 206} viewBox="0 0 115 206" fill="none" className={className || ''}>
      <path d="M108 206L114.016 196.201L102.625 195.571L108 206ZM109.803 149.093L110.789 149.147L109.803 149.093ZM7.34029 15.7233L8.21444 16.2127L7.34029 15.7233ZM13.8745 0.896944L12.9485 2.68907L14.6968 3.66784L15.6228 1.87572L13.8745 0.896944ZM11.0964 6.27331L9.24427 9.85755L10.9926 10.8363L12.8447 7.25208L11.0964 6.27331ZM7.39217 13.4418L6.46612 15.2339L8.21444 16.2127L9.1405 14.4206L7.39217 13.4418ZM6.46612 15.2339C6.07399 15.9928 5.7019 16.7553 5.34958 17.5209L7.13784 18.4178C7.47744 17.6799 7.83619 16.9447 8.21444 16.2127L6.46612 15.2339ZM3.4435 22.2246C2.87215 23.8482 2.38478 25.481 1.97869 27.1184L3.89233 27.6574C4.28289 26.0826 4.75181 24.5115 5.30181 22.9485L3.4435 22.2246ZM0.987121 32.1371C0.734707 33.8421 0.567014 35.5469 0.480942 37.2464L2.45225 37.3948C2.53499 35.7611 2.69618 34.1224 2.93885 32.4832L0.987121 32.1371ZM0.467543 42.3915C0.545539 44.115 0.705789 45.8275 0.944919 47.5236L2.89843 47.2758C2.66843 45.6446 2.51436 43.998 2.43937 42.341L0.467543 42.3915ZM1.90442 52.5942C2.30399 54.2723 2.78095 55.9281 3.33182 57.556L5.19508 56.9283C4.66485 55.3614 4.20587 53.768 3.82143 52.1534L1.90442 52.5942ZM5.20951 62.3656C5.90867 63.9397 6.67898 65.48 7.51696 66.981L9.22455 66.0026C8.4176 64.5572 7.67587 63.074 7.0027 61.5584L5.20951 62.3656ZM10.2321 71.3628C11.202 72.7795 12.2361 74.1512 13.331 75.4723L14.8232 74.1793C13.769 72.9073 12.7732 71.5865 11.8392 70.2223L10.2321 71.3628ZM16.7882 79.2723C17.9949 80.4809 19.2584 81.6339 20.5751 82.7257L21.7956 81.1608C20.5287 80.1103 19.3128 79.0008 18.1513 77.8375L16.7882 79.2723ZM24.6611 85.7976C26.0633 86.7503 27.5141 87.6378 29.0102 88.4547L29.9081 86.6709C28.4696 85.8855 27.0746 85.0321 25.7261 84.1159L24.6611 85.7976ZM33.5832 90.668C35.1291 91.3243 36.7149 91.9082 38.3376 92.4145L38.8745 90.4775C37.3146 89.9907 35.7901 89.4295 34.3042 88.7986L33.5832 90.668ZM43.2214 93.6774C44.8506 94.0138 46.5107 94.2737 48.1992 94.4528L48.3603 92.4379C46.735 92.2655 45.1376 92.0153 43.5707 91.6918L43.2214 93.6774ZM53.199 94.7419C54.031 94.7505 54.8688 94.7395 55.712 94.7087L55.5994 92.6843C54.7861 92.714 53.9783 92.7245 53.1763 92.7163L53.199 94.7419ZM55.712 94.7087C56.4891 94.6802 57.2626 94.67 58.0323 94.6776L58.0089 92.652C57.2095 92.6441 56.4062 92.6547 55.5994 92.6843L55.712 94.7087ZM62.6671 94.9406C64.2202 95.1021 65.7537 95.3361 67.2645 95.6392L67.603 93.6514C66.0324 93.3363 64.4384 93.0931 62.8243 92.9252L62.6671 94.9406ZM71.787 96.7708C73.286 97.2219 74.7576 97.7421 76.1984 98.3278L76.891 96.4466C75.3933 95.8377 73.8633 95.2969 72.3047 94.8279L71.787 96.7708ZM80.4586 100.295C81.8531 101.02 83.212 101.807 84.5317 102.655L85.5529 100.944C84.1814 100.063 82.7691 99.2447 81.3196 98.4919L80.4586 100.295ZM88.3842 105.385C89.6292 106.355 90.8306 107.381 91.9845 108.46L93.297 106.977C92.098 105.855 90.8498 104.789 89.5562 103.781L88.3842 105.385ZM95.3029 111.855C96.3582 113.036 97.3622 114.266 98.3111 115.541L99.8702 114.333C98.8842 113.009 97.841 111.731 96.7447 110.504L95.3029 111.855ZM100.983 119.486C101.813 120.838 102.585 122.23 103.295 123.659L105.05 122.769C104.312 121.284 103.509 119.837 102.647 118.433L100.983 119.486ZM105.226 128.025C105.801 129.501 106.312 131.01 106.756 132.547L108.648 132.01C108.186 130.412 107.654 128.843 107.056 127.308L105.226 128.025ZM107.873 137.185C108.173 138.734 108.406 140.308 108.568 141.901L110.532 141.733C110.363 140.077 110.121 138.442 109.809 136.831L107.873 137.185ZM108.839 146.657C108.849 147.446 108.841 148.24 108.816 149.038L110.789 149.147C110.815 148.319 110.823 147.495 110.813 146.674L108.839 146.657ZM108.816 149.038L108.741 151.409L110.714 151.518L110.789 149.147L108.816 149.038ZM108.591 156.151L108.44 160.894L110.413 161.003L110.564 156.261L108.591 156.151ZM108.29 165.636L108.14 170.378L110.113 170.487L110.263 165.745L108.29 165.636ZM107.99 175.121L107.84 179.863L109.813 179.972L109.963 175.23L107.99 175.121ZM107.689 184.605L107.539 189.347L109.512 189.457L109.662 184.714L107.689 184.605ZM107.389 194.09L107.239 198.832L109.212 198.941L109.362 194.199L107.389 194.09Z" fill="white"/>
    </svg>
  );
}