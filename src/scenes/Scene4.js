import React, { useEffect } from 'react'
import {useStore} from '../Store'
import { gsap } from 'gsap'

const Scene4 = () => {
    const next = useStore(state => state.nextScene)
    useEffect(() => {
        const tl = gsap.timeline()
            tl.set("#guy4, #chair-front", {display: "block"})
            tl.to("#scene-4", 1, {opacity: 1})
            tl.to("#arm-int-right", 0.15, {y:-5, repeat: 2, delay: 1})
            tl.to("#window-job-app", 0, {display: "none"})
            tl.to("#guy4", 0, {scaleX: -1, transformOrigin: "75% 50%", delay: .5})
            tl.to("#chair-front", 0, {scaleX: -1, transformOrigin: "50% 50%"})
            tl.to("#arm-int-right", .2, {rotate: 90, transformOrigin: "100% 0%"})
            tl.to("#arm-int-left", .2, {rotate: 70, transformOrigin: "100% 0%"}, "-=.2")
            tl.to("#leg-left-3", .2, {rotate: 20, transformOrigin: "100% 0%"}, "-=.2")
            tl.to("#body-int-upper", .2, {rotate: 15, transformOrigin: "50% 100%"}, "-=.2")
            tl.to("#guy4, #chair-front", 3, {x: -1000}, "-=.15")
            tl.to("#scene-4", .5, {opacity: 0, onComplete: next}, "-=2" )
    }, [next])

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="scene-4"
            width="839"
            height="596"
            fill="none"
            viewBox="0 0 839 596"
            title="Chair sliding"
            role="img"
            alt="The person working at their desk slides out of the room on their chair"
            >
            <g id="scene-4-chair-slide">
                <desc>
                    The person sitting at the computer closes the camera feed application window, spins in their chair, and slides backwards off the screen with their arms raised, and their legs flailing with excitement. Fade out to black.
                </desc>
                <path id="wall" fill="#ECDFCB" d="M0 0h838v596H0V0z"></path>
                <g id="window-trim">
                <path id="Rectangle 591" fill="#fff" d="M98 68h297v312H98z"></path>
                <path
                    id="Rectangle 593"
                    fill="url(#paint0_linear)"
                    d="M98 365h297v18H98z"
                ></path>
                </g>
                <path id="sky" fill="#9DE5FF" d="M117 86h258v279H117z"></path>
                <g id="double-window">
                <g id="Group 3">
                    <path
                    id="Subtract"
                    fill="#874F13"
                    fillRule="evenodd"
                    d="M243.355 86.948h132.171v278.709H243.355V86.948zm8.62 17.24h37.352v57.466h-37.352v-57.466zm37.352 129.298h-37.352v57.465h37.352v-57.465zm-37.352-68.959h37.352v57.466h-37.352v-57.466zm37.352 129.298h-37.352v57.465h37.352v-57.465zm2.874-189.637h37.352v57.466h-37.352v-57.466zm37.352 129.298h-37.352v57.465h37.352v-57.465zm-37.352-68.959h37.352v57.466h-37.352v-57.466zm37.352 129.298h-37.352v57.465h37.352v-57.465zm2.874-189.637h34.479v57.466h-34.479v-57.466zm34.479 129.298h-34.479v57.465h34.479v-57.465zm-34.479-68.959h34.479v57.466h-34.479v-57.466zm34.479 129.298h-34.479v57.465h34.479v-57.465z"
                    clipRule="evenodd"
                    ></path>
                </g>
                <g id="Group 4">
                    <path
                    id="Subtract_2"
                    fill="#874F13"
                    fillRule="evenodd"
                    d="M116.93 86.948h132.171v278.709H116.93V86.948zm8.62 17.24h37.353v57.466H125.55v-57.466zm37.353 129.298H125.55v57.465h37.353v-57.465zm-37.353-68.959h37.353v57.466H125.55v-57.466zm37.353 129.298H125.55v57.465h37.353v-57.465zm2.873-189.637h37.353v57.466h-37.353v-57.466zm37.353 129.298h-37.353v57.465h37.353v-57.465zm-37.353-68.959h37.353v57.466h-37.353v-57.466zm37.353 129.298h-37.353v57.465h37.353v-57.465zm2.873-189.637h34.48v57.466h-34.48v-57.466zm34.48 129.298h-34.48v57.465h34.48v-57.465zm-34.48-68.959h34.48v57.466h-34.48v-57.466zm34.48 129.298h-34.48v57.465h34.48v-57.465z"
                    clipRule="evenodd"
                    ></path>
                </g>
                </g>
                <g id="trim">
                <path
                    id="Rectangle 577"
                    fill="url(#paint1_linear)"
                    d="M0 0h838v3.748H0z"
                    transform="matrix(1 0 0 -1 1 459.245)"
                ></path>
                <path
                    id="Rectangle 578"
                    fill="url(#paint2_linear)"
                    d="M0 0h838v3.748H0z"
                    transform="matrix(1 0 0 -1 1 465.241)"
                ></path>
                <path
                    id="Rectangle 579"
                    fill="url(#paint3_linear)"
                    d="M1 451h838v4.497H1z"
                ></path>
                <path
                    id="Rectangle 580"
                    fill="url(#paint4_linear)"
                    d="M1 456.996h838v4.497H1z"
                ></path>
                </g>
                <g id="trim_2">
                <path
                    id="Rectangle 577_2"
                    fill="url(#paint5_linear)"
                    d="M0 0h838v3.748H0z"
                    transform="matrix(1 0 0 -1 0 9.744)"
                ></path>
                <path
                    id="Rectangle 578_2"
                    fill="url(#paint6_linear)"
                    d="M0 0h838v3.748H0z"
                    transform="matrix(1 0 0 -1 0 15.74)"
                ></path>
                <path
                    id="Rectangle 579_2"
                    fill="url(#paint7_linear)"
                    d="M0 1.499h838v4.497H0z"
                ></path>
                <path
                    id="Rectangle 580_2"
                    fill="url(#paint8_linear)"
                    d="M0 7.495h838v4.497H0z"
                ></path>
                </g>
                <path id="floor" fill="#A68A6A" d="M0 461h838v135H0z"></path>
                <path id="rug" fill="#6D82D8" d="M114 536h644v59H114z"></path>
                <g id="desk">
                <rect
                    id="Rectangle 556"
                    width="383"
                    height="26"
                    x="153"
                    y="392"
                    fill="url(#paint9_linear)"
                    rx="10"
                ></rect>
                <path
                    id="Rectangle 557"
                    fill="#946060"
                    d="M168 418h14v107h-14z"
                ></path>
                <path
                    id="Rectangle 559"
                    fill="#946060"
                    d="M507 418h13v107h-13z"
                ></path>
                <ellipse
                    id="mouse"
                    cx="396.213"
                    cy="400.387"
                    fill="#535353"
                    rx="3.398"
                    ry="5.622"
                    transform="rotate(-17.704 396.213 400.387)"
                ></ellipse>
                <g id="keyboard2">
                    <g id="keyboard">
                    <path
                        id="Rectangle 618"
                        fill="#535353"
                        d="M311.064 396.442L385.446 391l1.197 16.365-74.381 5.441-1.198-16.364z"
                    ></path>
                    </g>
                    <g id="keys" fill="#A39292">
                    <rect
                        id="Rectangle 619"
                        width="3.748"
                        height="2.188"
                        x="314.374"
                        y="400.587"
                        rx="1"
                        transform="rotate(-4.184 314.374 400.587)"
                    ></rect>
                    <rect
                        id="Rectangle 623"
                        width="2.998"
                        height="2.188"
                        x="314.174"
                        y="397.859"
                        rx="1"
                        transform="rotate(-4.184 314.174 397.859)"
                    ></rect>
                    <rect
                        id="Rectangle 620"
                        width="4.497"
                        height="2.188"
                        x="314.573"
                        y="403.314"
                        rx="1"
                        transform="rotate(-4.184 314.573 403.314)"
                    ></rect>
                    <rect
                        id="Rectangle 621"
                        width="5.996"
                        height="2.188"
                        x="314.773"
                        y="406.042"
                        rx="1"
                        transform="rotate(-4.184 314.773 406.042)"
                    ></rect>
                    <rect
                        id="Rectangle 622"
                        width="2.998"
                        height="2.188"
                        x="314.973"
                        y="408.769"
                        rx="1"
                        transform="rotate(-4.184 314.973 408.769)"
                    ></rect>
                    <rect
                        id="Rectangle 624"
                        width="2.998"
                        height="2.188"
                        x="318.71"
                        y="408.496"
                        rx="1"
                        transform="rotate(-4.184 318.71 408.496)"
                    ></rect>
                    <rect
                        id="Rectangle 625"
                        width="2.998"
                        height="2.188"
                        x="322.448"
                        y="408.222"
                        rx="1"
                        transform="rotate(-4.184 322.448 408.222)"
                    ></rect>
                    <rect
                        id="Rectangle 630"
                        width="2.998"
                        height="2.188"
                        x="321.501"
                        y="405.55"
                        rx="1"
                        transform="rotate(-4.184 321.501 405.55)"
                    ></rect>
                    <rect
                        id="Rectangle 646"
                        width="2.998"
                        height="2.188"
                        x="319.806"
                        y="402.932"
                        rx="1"
                        transform="rotate(-4.184 319.806 402.932)"
                    ></rect>
                    <rect
                        id="Rectangle 661"
                        width="2.998"
                        height="2.188"
                        x="318.859"
                        y="400.259"
                        rx="1"
                        transform="rotate(-4.184 318.859 400.259)"
                    ></rect>
                    <rect
                        id="Rectangle 662"
                        width="2.998"
                        height="2.188"
                        x="317.912"
                        y="397.586"
                        rx="1"
                        transform="rotate(-4.184 317.912 397.586)"
                    ></rect>
                    <rect
                        id="Rectangle 663"
                        width="2.998"
                        height="2.188"
                        x="322.597"
                        y="399.985"
                        rx="1"
                        transform="rotate(-4.184 322.597 399.985)"
                    ></rect>
                    <rect
                        id="Rectangle 664"
                        width="2.998"
                        height="2.188"
                        x="326.335"
                        y="399.712"
                        rx="1"
                        transform="rotate(-4.184 326.335 399.712)"
                    ></rect>
                    <rect
                        id="Rectangle 665"
                        width="2.998"
                        height="2.188"
                        x="330.073"
                        y="399.438"
                        rx="1"
                        transform="rotate(-4.184 330.073 399.438)"
                    ></rect>
                    <rect
                        id="Rectangle 666"
                        width="2.998"
                        height="2.188"
                        x="333.81"
                        y="399.165"
                        rx="1"
                        transform="rotate(-4.184 333.81 399.165)"
                    ></rect>
                    <rect
                        id="Rectangle 667"
                        width="2.998"
                        height="2.188"
                        x="337.548"
                        y="398.892"
                        rx="1"
                        transform="rotate(-4.184 337.548 398.892)"
                    ></rect>
                    <rect
                        id="Rectangle 668"
                        width="2.998"
                        height="2.188"
                        x="341.286"
                        y="398.618"
                        rx="1"
                        transform="rotate(-4.184 341.286 398.618)"
                    ></rect>
                    <rect
                        id="Rectangle 669"
                        width="2.998"
                        height="2.188"
                        x="345.024"
                        y="398.345"
                        rx="1"
                        transform="rotate(-4.184 345.024 398.345)"
                    ></rect>
                    <rect
                        id="Rectangle 670"
                        width="2.998"
                        height="2.188"
                        x="348.761"
                        y="398.071"
                        rx="1"
                        transform="rotate(-4.184 348.761 398.071)"
                    ></rect>
                    <rect
                        id="Rectangle 671"
                        width="2.998"
                        height="2.188"
                        x="352.499"
                        y="397.798"
                        rx="1"
                        transform="rotate(-4.184 352.499 397.798)"
                    ></rect>
                    <rect
                        id="Rectangle 672"
                        width="2.998"
                        height="2.188"
                        x="356.237"
                        y="397.524"
                        rx="1"
                        transform="rotate(-4.184 356.237 397.524)"
                    ></rect>
                    <rect
                        id="Rectangle 673"
                        width="2.998"
                        height="2.188"
                        x="359.975"
                        y="397.251"
                        rx="1"
                        transform="rotate(-4.184 359.975 397.251)"
                    ></rect>
                    <rect
                        id="Rectangle 674"
                        width="2.998"
                        height="2.188"
                        x="363.713"
                        y="396.977"
                        rx="1"
                        transform="rotate(-4.184 363.713 396.977)"
                    ></rect>
                    <rect
                        id="Rectangle 675"
                        width="2.998"
                        height="2.188"
                        x="367.45"
                        y="396.704"
                        rx="1"
                        transform="rotate(-4.184 367.45 396.704)"
                    ></rect>
                    <rect
                        id="Rectangle 676"
                        width="2.998"
                        height="2.188"
                        x="371.188"
                        y="396.43"
                        rx="1"
                        transform="rotate(-4.184 371.188 396.43)"
                    ></rect>
                    <rect
                        id="Rectangle 677"
                        width="2.998"
                        height="2.188"
                        x="374.926"
                        y="396.157"
                        rx="1"
                        transform="rotate(-4.184 374.926 396.157)"
                    ></rect>
                    <rect
                        id="Rectangle 678"
                        width="3.748"
                        height="2.188"
                        x="378.664"
                        y="395.884"
                        rx="1"
                        transform="rotate(-4.184 378.664 395.884)"
                    ></rect>
                    <rect
                        id="Rectangle 679"
                        width="2.998"
                        height="2.188"
                        x="321.65"
                        y="397.313"
                        rx="1"
                        transform="rotate(-4.184 321.65 397.313)"
                    ></rect>
                    <rect
                        id="Rectangle 680"
                        width="2.998"
                        height="2.188"
                        x="325.388"
                        y="397.039"
                        rx="1"
                        transform="rotate(-4.184 325.388 397.039)"
                    ></rect>
                    <rect
                        id="Rectangle 681"
                        width="2.998"
                        height="2.188"
                        x="329.125"
                        y="396.766"
                        rx="1"
                        transform="rotate(-4.184 329.125 396.766)"
                    ></rect>
                    <rect
                        id="Rectangle 682"
                        width="2.998"
                        height="2.188"
                        x="332.863"
                        y="396.492"
                        rx="1"
                        transform="rotate(-4.184 332.863 396.492)"
                    ></rect>
                    <rect
                        id="Rectangle 683"
                        width="2.998"
                        height="2.188"
                        x="336.601"
                        y="396.219"
                        rx="1"
                        transform="rotate(-4.184 336.601 396.219)"
                    ></rect>
                    <rect
                        id="Rectangle 684"
                        width="2.998"
                        height="2.188"
                        x="340.339"
                        y="395.945"
                        rx="1"
                        transform="rotate(-4.184 340.339 395.945)"
                    ></rect>
                    <rect
                        id="Rectangle 685"
                        width="2.998"
                        height="2.188"
                        x="344.077"
                        y="395.672"
                        rx="1"
                        transform="rotate(-4.184 344.077 395.672)"
                    ></rect>
                    <rect
                        id="Rectangle 686"
                        width="2.998"
                        height="2.188"
                        x="347.814"
                        y="395.398"
                        rx="1"
                        transform="rotate(-4.184 347.814 395.398)"
                    ></rect>
                    <rect
                        id="Rectangle 687"
                        width="2.998"
                        height="2.188"
                        x="351.552"
                        y="395.125"
                        rx="1"
                        transform="rotate(-4.184 351.552 395.125)"
                    ></rect>
                    <rect
                        id="Rectangle 688"
                        width="2.998"
                        height="2.188"
                        x="355.29"
                        y="394.852"
                        rx="1"
                        transform="rotate(-4.184 355.29 394.852)"
                    ></rect>
                    <rect
                        id="Rectangle 689"
                        width="2.998"
                        height="2.188"
                        x="359.028"
                        y="394.578"
                        rx="1"
                        transform="rotate(-4.184 359.028 394.578)"
                    ></rect>
                    <rect
                        id="Rectangle 690"
                        width="2.998"
                        height="2.188"
                        x="362.766"
                        y="394.305"
                        rx="1"
                        transform="rotate(-4.184 362.766 394.305)"
                    ></rect>
                    <rect
                        id="Rectangle 691"
                        width="2.998"
                        height="2.188"
                        x="366.503"
                        y="394.031"
                        rx="1"
                        transform="rotate(-4.184 366.503 394.031)"
                    ></rect>
                    <rect
                        id="Rectangle 692"
                        width="2.998"
                        height="2.188"
                        x="370.241"
                        y="393.758"
                        rx="1"
                        transform="rotate(-4.184 370.241 393.758)"
                    ></rect>
                    <rect
                        id="Rectangle 693"
                        width="2.998"
                        height="2.188"
                        x="373.979"
                        y="393.484"
                        rx="1"
                        transform="rotate(-4.184 373.979 393.484)"
                    ></rect>
                    <rect
                        id="Rectangle 694"
                        width="4.497"
                        height="2.188"
                        x="377.716"
                        y="393.211"
                        rx="1"
                        transform="rotate(-4.184 377.716 393.211)"
                    ></rect>
                    <rect
                        id="Rectangle 647"
                        width="2.998"
                        height="2.188"
                        x="323.544"
                        y="402.658"
                        rx="1"
                        transform="rotate(-4.184 323.544 402.658)"
                    ></rect>
                    <rect
                        id="Rectangle 648"
                        width="2.998"
                        height="2.188"
                        x="327.282"
                        y="402.385"
                        rx="1"
                        transform="rotate(-4.184 327.282 402.385)"
                    ></rect>
                    <rect
                        id="Rectangle 649"
                        width="2.998"
                        height="2.188"
                        x="331.02"
                        y="402.111"
                        rx="1"
                        transform="rotate(-4.184 331.02 402.111)"
                    ></rect>
                    <rect
                        id="Rectangle 650"
                        width="2.998"
                        height="2.188"
                        x="334.757"
                        y="401.838"
                        rx="1"
                        transform="rotate(-4.184 334.757 401.838)"
                    ></rect>
                    <rect
                        id="Rectangle 651"
                        width="2.998"
                        height="2.188"
                        x="338.495"
                        y="401.564"
                        rx="1"
                        transform="rotate(-4.184 338.495 401.564)"
                    ></rect>
                    <rect
                        id="Rectangle 652"
                        width="2.998"
                        height="2.188"
                        x="342.233"
                        y="401.291"
                        rx="1"
                        transform="rotate(-4.184 342.233 401.291)"
                    ></rect>
                    <rect
                        id="Rectangle 653"
                        width="2.998"
                        height="2.188"
                        x="345.971"
                        y="401.017"
                        rx="1"
                        transform="rotate(-4.184 345.971 401.017)"
                    ></rect>
                    <rect
                        id="Rectangle 654"
                        width="2.998"
                        height="2.188"
                        x="349.708"
                        y="400.744"
                        rx="1"
                        transform="rotate(-4.184 349.708 400.744)"
                    ></rect>
                    <rect
                        id="Rectangle 655"
                        width="2.998"
                        height="2.188"
                        x="353.446"
                        y="400.47"
                        rx="1"
                        transform="rotate(-4.184 353.446 400.47)"
                    ></rect>
                    <rect
                        id="Rectangle 656"
                        width="2.998"
                        height="2.188"
                        x="357.184"
                        y="400.197"
                        rx="1"
                        transform="rotate(-4.184 357.184 400.197)"
                    ></rect>
                    <rect
                        id="Rectangle 657"
                        width="2.998"
                        height="2.188"
                        x="360.922"
                        y="399.924"
                        rx="1"
                        transform="rotate(-4.184 360.922 399.924)"
                    ></rect>
                    <rect
                        id="Rectangle 658"
                        width="2.998"
                        height="2.188"
                        x="364.66"
                        y="399.65"
                        rx="1"
                        transform="rotate(-4.184 364.66 399.65)"
                    ></rect>
                    <rect
                        id="Rectangle 659"
                        width="2.998"
                        height="2.188"
                        x="368.397"
                        y="399.377"
                        rx="1"
                        transform="rotate(-4.184 368.397 399.377)"
                    ></rect>
                    <rect
                        id="Rectangle 660"
                        width="2.998"
                        height="2.188"
                        x="372.135"
                        y="399.103"
                        rx="1"
                        transform="rotate(-4.184 372.135 399.103)"
                    ></rect>
                    <rect
                        id="Rectangle 631"
                        width="2.998"
                        height="2.188"
                        x="325.239"
                        y="405.276"
                        rx="1"
                        transform="rotate(-4.184 325.239 405.276)"
                    ></rect>
                    <rect
                        id="Rectangle 632"
                        width="2.998"
                        height="2.188"
                        x="328.977"
                        y="405.003"
                        rx="1"
                        transform="rotate(-4.184 328.977 405.003)"
                    ></rect>
                    <rect
                        id="Rectangle 633"
                        width="2.998"
                        height="2.188"
                        x="332.714"
                        y="404.729"
                        rx="1"
                        transform="rotate(-4.184 332.714 404.729)"
                    ></rect>
                    <rect
                        id="Rectangle 634"
                        width="2.998"
                        height="2.188"
                        x="336.452"
                        y="404.456"
                        rx="1"
                        transform="rotate(-4.184 336.452 404.456)"
                    ></rect>
                    <rect
                        id="Rectangle 635"
                        width="2.998"
                        height="2.188"
                        x="340.19"
                        y="404.182"
                        rx="1"
                        transform="rotate(-4.184 340.19 404.182)"
                    ></rect>
                    <rect
                        id="Rectangle 636"
                        width="2.998"
                        height="2.188"
                        x="343.928"
                        y="403.909"
                        rx="1"
                        transform="rotate(-4.184 343.928 403.909)"
                    ></rect>
                    <rect
                        id="Rectangle 637"
                        width="2.998"
                        height="2.188"
                        x="347.665"
                        y="403.635"
                        rx="1"
                        transform="rotate(-4.184 347.665 403.635)"
                    ></rect>
                    <rect
                        id="Rectangle 638"
                        width="2.998"
                        height="2.188"
                        x="351.403"
                        y="403.362"
                        rx="1"
                        transform="rotate(-4.184 351.403 403.362)"
                    ></rect>
                    <rect
                        id="Rectangle 639"
                        width="2.998"
                        height="2.188"
                        x="355.141"
                        y="403.089"
                        rx="1"
                        transform="rotate(-4.184 355.141 403.089)"
                    ></rect>
                    <rect
                        id="Rectangle 640"
                        width="2.998"
                        height="2.188"
                        x="358.879"
                        y="402.815"
                        rx="1"
                        transform="rotate(-4.184 358.879 402.815)"
                    ></rect>
                    <rect
                        id="Rectangle 641"
                        width="2.998"
                        height="2.188"
                        x="362.616"
                        y="402.542"
                        rx="1"
                        transform="rotate(-4.184 362.616 402.542)"
                    ></rect>
                    <rect
                        id="Rectangle 642"
                        width="2.998"
                        height="2.188"
                        x="366.354"
                        y="402.268"
                        rx="1"
                        transform="rotate(-4.184 366.354 402.268)"
                    ></rect>
                    <rect
                        id="Rectangle 643"
                        width="2.998"
                        height="2.188"
                        x="370.092"
                        y="401.995"
                        rx="1"
                        transform="rotate(-4.184 370.092 401.995)"
                    ></rect>
                    <rect
                        id="Rectangle 644"
                        width="8.995"
                        height="2.188"
                        x="373.83"
                        y="401.721"
                        rx="1"
                        transform="rotate(-4.184 373.83 401.721)"
                    ></rect>
                    <rect
                        id="Rectangle 645"
                        width="6.746"
                        height="2.188"
                        x="375.873"
                        y="398.83"
                        rx="1"
                        transform="rotate(-4.184 375.873 398.83)"
                    ></rect>
                    <rect
                        id="Rectangle 626"
                        width="2.998"
                        height="2.188"
                        x="326.186"
                        y="407.949"
                        rx="1"
                        transform="rotate(-4.184 326.186 407.949)"
                    ></rect>
                    <rect
                        id="Rectangle 696"
                        width="5.247"
                        height="2.188"
                        x="329.924"
                        y="407.675"
                        rx="1"
                        transform="rotate(-4.184 329.924 407.675)"
                    ></rect>
                    <rect
                        id="Rectangle 628"
                        width="2.998"
                        height="2.188"
                        x="357.583"
                        y="405.652"
                        rx="1"
                        transform="rotate(-4.184 357.583 405.652)"
                    ></rect>
                    <rect
                        id="Rectangle 629"
                        width="2.998"
                        height="2.188"
                        x="361.321"
                        y="405.378"
                        rx="1"
                        transform="rotate(-4.184 361.321 405.378)"
                    ></rect>
                    <rect
                        id="Rectangle 695"
                        width="2.998"
                        height="2.188"
                        x="365.059"
                        y="405.105"
                        rx="1"
                        transform="rotate(-4.184 365.059 405.105)"
                    ></rect>
                    <rect
                        id="Rectangle 701"
                        width="2.998"
                        height="2.188"
                        x="368.797"
                        y="404.832"
                        rx="1"
                        transform="rotate(-4.184 368.797 404.832)"
                    ></rect>
                    <rect
                        id="Rectangle 697"
                        width="2.998"
                        height="1.094"
                        x="372.614"
                        y="405.649"
                        rx="0.547"
                        transform="rotate(-4.184 372.614 405.649)"
                    ></rect>
                    <rect
                        id="Rectangle 698"
                        width="2.998"
                        height="1.094"
                        x="376.352"
                        y="405.376"
                        rx="0.547"
                        transform="rotate(-4.184 376.352 405.376)"
                    ></rect>
                    <rect
                        id="Rectangle 699"
                        width="2.998"
                        height="1.094"
                        x="380.09"
                        y="405.102"
                        rx="0.547"
                        transform="rotate(-4.184 380.09 405.102)"
                    ></rect>
                    <rect
                        id="Rectangle 700"
                        width="2.998"
                        height="1.094"
                        x="376.272"
                        y="404.285"
                        rx="0.547"
                        transform="rotate(-4.184 376.272 404.285)"
                    ></rect>
                    <rect
                        id="Rectangle 627"
                        width="20.988"
                        height="2.188"
                        x="335.904"
                        y="407.238"
                        rx="1"
                        transform="rotate(-4.184 335.904 407.238)"
                    ></rect>
                    </g>
                </g>
                </g>
                <g id="pan-cam">
                <ellipse
                    id="Ellipse 9"
                    fill="#474545"
                    rx="6.654"
                    ry="0.459"
                    transform="matrix(-1 0 0 1 535.364 193.675)"
                ></ellipse>
                <path
                    id="Union"
                    fill="#C7C6C4"
                    d="M535.364 191.84c3.675 0 6.655.274 6.655.611v1.224H528.71v-1.224c0-.337 2.979-.611 6.654-.611z"
                ></path>
                <path
                    id="Rectangle 1"
                    fill="#DBDAD8"
                    d="M545.919 163.614a2 2 0 00-2.061-1.999l-9.182.281v31.665l9.526-1.361a2 2 0 001.717-1.98v-26.606z"
                ></path>
                <path
                    id="Rectangle 3"
                    fill="url(#paint10_linear)"
                    d="M535.25 162.01l-.574.002v31.434l.689-.228-.115-31.208z"
                ></path>
                <path
                    id="Rectangle 2"
                    fill="#F9F7F8"
                    d="M534.676 161.896l-6.301-.596a2 2 0 00-2.189 1.991v27.191a2 2 0 001.68 1.974l6.81 1.105v-31.665z"
                ></path>
                <ellipse
                    id="Ellipse 1"
                    cx="540.298"
                    cy="170.5"
                    fill="#0E0D0D"
                    rx="4.933"
                    ry="5.966"
                ></ellipse>
                <path
                    id="Ellipse 3"
                    fill="#fff"
                    fillOpacity="0.19"
                    d="M544.543 170.5c0 1.339-.448 2.623-1.244 3.57-.796.946-1.875 1.478-3.001 1.478s-2.206-.532-3.002-1.478c-.796-.947-1.243-2.231-1.243-3.57h8.49z"
                ></path>
                <path
                    id="Ellipse 4"
                    fill="#fff"
                    fillOpacity="0.36"
                    d="M536.44 168.784a4.74 4.74 0 011.187-2.084c.551-.551 1.219-.91 1.927-1.034l.498 4.473-3.612-1.355z"
                ></path>
                <path
                    id="Vector 1"
                    fill="#DBDAD8"
                    d="M535.823 160.404l9.637 1.148-10.669.688-7.431-1.018c-.119-.016-.114-.19.006-.199l8.457-.619z"
                ></path>
                <ellipse
                    id="Ellipse 2"
                    fill="#1F1F1F"
                    rx="1.836"
                    ry="2.18"
                    transform="matrix(-1 0 0 1 540.871 170.386)"
                ></ellipse>
                <ellipse
                    id="Ellipse 5"
                    cx="543.636"
                    cy="167.673"
                    fill="#C4C4C4"
                    rx="0.229"
                    ry="0.574"
                    transform="rotate(-27.788 543.636 167.673)"
                ></ellipse>
                <circle
                    id="Ellipse 6"
                    r="0.459"
                    fill="#000"
                    transform="matrix(-1 0 0 1 540.183 191.381)"
                ></circle>
                <circle
                    id="Ellipse 7"
                    r="0.229"
                    fill="#414141"
                    transform="matrix(-1 0 0 1 540.183 190.233)"
                ></circle>
                </g>
                <g id="shelf">
                <path
                    id="Rectangle 560"
                    fill="url(#paint11_linear)"
                    d="M513 193h263v18H513z"
                ></path>
                <path
                    id="Rectangle 561"
                    fill="url(#paint12_linear)"
                    d="M536 211h11v31h-11z"
                ></path>
                <path
                    id="Rectangle 562"
                    fill="url(#paint13_linear)"
                    d="M737 211h11v31h-11z"
                ></path>
                <g id="books">
                    <path
                    id="Rectangle 563"
                    fill="#7370F7"
                    d="M599 142h16v51h-16z"
                    ></path>
                    <path
                    id="Rectangle 564"
                    fill="#7D9F52"
                    d="M615 128h14v65h-14z"
                    ></path>
                    <path
                    id="Rectangle 565"
                    fill="#F99E9E"
                    d="M629 132h16v61h-16z"
                    ></path>
                </g>
                </g>
                <g id="computer">
                <path
                    id="screen-bg"
                    fill="#FCDBDB"
                    d="M269.089 292.059l85.449-2.249v66.336l-85.449 3.373v-67.46z"
                ></path>
                <g id="window-job-app">
                    <path
                    id="Rectangle 614"
                    fill="#CFCFCF"
                    d="M273.444 303.016a2 2 0 011.941-1.999l50.029-1.479a2 2 0 012.059 1.999v48.771a1 1 0 01-.965.999l-52.029 1.805a1 1 0 01-1.035-1v-49.096z"
                    ></path>
                    <path
                    id="Rectangle 615"
                    fill="#F2F2F2"
                    d="M273.776 305.792l53.647-1.362-.016 46.377-53.631 1.682v-46.697z"
                    ></path>
                    <g id="job-application">
                    <path
                        id="Rectangle 616"
                        fill="#EDEBEB"
                        d="M273.776 315.857l53.613-.793v35.447a1 1 0 01-.969.999l-51.797 1.606a1.001 1.001 0 01-1.031-1.005l.184-36.254z"
                    ></path>
                    <path
                        id="SUBMIT YOUR APPLICATION"
                        fill="#404040"
                        d="M278.803 319.464a.15.15 0 00-.061-.126.752.752 0 00-.212-.09 1.573 1.573 0 01-.243-.094c-.163-.085-.245-.201-.248-.349a.347.347 0 01.061-.206.428.428 0 01.184-.144.718.718 0 01.545-.004c.08.035.143.086.187.152a.404.404 0 01.071.227l-.293.005a.191.191 0 00-.064-.15.253.253 0 00-.174-.052.26.26 0 00-.166.049.14.14 0 00-.058.12c.001.046.025.084.071.115.048.03.117.058.208.084.167.048.29.108.367.181a.369.369 0 01.119.275.342.342 0 01-.135.292.611.611 0 01-.374.111.716.716 0 01-.3-.055.477.477 0 01-.209-.161.427.427 0 01-.074-.241l.294-.005c.003.157.098.234.285.231a.269.269 0 00.162-.045.138.138 0 00.057-.12zm1.552-1.075l.015.937a.477.477 0 01-.14.371.564.564 0 01-.396.143.57.57 0 01-.398-.126.47.47 0 01-.155-.36l-.016-.947.293-.004.016.938c.001.093.024.161.069.203a.26.26 0 00.187.06c.165-.002.247-.09.247-.264l-.016-.946.294-.005zm.264 1.418l-.024-1.422.498-.008c.173-.003.304.028.394.093a.338.338 0 01.139.288.325.325 0 01-.051.186.314.314 0 01-.147.118.294.294 0 01.173.108.317.317 0 01.067.202c.002.137-.04.241-.126.313-.086.071-.209.109-.371.113l-.552.009zm.282-.624l.007.384.251-.004a.236.236 0 00.16-.052.169.169 0 00.056-.137c-.002-.13-.07-.195-.205-.195l-.269.004zm-.003-.207l.217-.003c.147-.005.22-.065.218-.181-.001-.064-.02-.11-.059-.137-.037-.028-.096-.042-.177-.04l-.205.003.006.358zm1.357-.618l.382 1.025.346-1.037.385-.006.024 1.422-.294.004-.007-.388.019-.672-.367 1.066-.201.003-.4-1.052.04.67.007.388-.293.005-.024-1.422.383-.006zm1.704 1.394l-.293.005-.023-1.422.292-.004.024 1.421zm1.294-1.206l-.436.007.02 1.185-.293.005-.02-1.185-.429.007-.004-.237 1.158-.019.004.237zm1.104.385l.285-.645.32-.005-.451.914.008.515-.298.005-.008-.516-.482-.898.321-.005.305.635zm1.886.072a.857.857 0 01-.068.369.555.555 0 01-.524.339.56.56 0 01-.535-.318.836.836 0 01-.084-.362l-.001-.071a.864.864 0 01.069-.37.567.567 0 01.525-.34.56.56 0 01.535.323c.052.105.08.227.082.366l.001.064zm-.298-.06c-.002-.149-.031-.262-.086-.338a.26.26 0 00-.23-.113.265.265 0 00-.226.119c-.052.077-.077.19-.075.338l.001.069a.598.598 0 00.086.336.26.26 0 00.232.117.26.26 0 00.225-.119.607.607 0 00.074-.339l-.001-.07zm1.575-.704l.015.936a.48.48 0 01-.14.372.564.564 0 01-.396.142.57.57 0 01-.398-.125.472.472 0 01-.155-.36l-.016-.947.293-.005.015.938c.002.093.025.161.07.203a.26.26 0 00.187.061c.164-.003.247-.091.246-.264l-.015-.946.294-.005zm.781.888l-.233.004.008.521-.293.004-.023-1.421.528-.009c.168-.003.298.033.391.106a.39.39 0 01.142.315.444.444 0 01-.06.244.431.431 0 01-.188.158l.317.576.001.013-.315.005-.275-.516zm-.237-.233l.236-.004a.246.246 0 00.17-.058.204.204 0 00.058-.157.213.213 0 00-.06-.157c-.039-.038-.097-.056-.176-.055l-.235.004.007.427zm2.292.427l-.513.009-.093.294-.312.005.506-1.43.272-.005.555 1.413-.311.005-.104-.291zm-.438-.23l.355-.006-.187-.529-.168.535zm1.271.008l.008.501-.293.005-.023-1.422.554-.009a.657.657 0 01.282.054.439.439 0 01.26.408.414.414 0 01-.138.333c-.094.081-.225.123-.394.126l-.256.004zm-.004-.237l.261-.004c.078-.001.137-.021.176-.058.041-.037.06-.089.059-.157a.232.232 0 00-.064-.168.236.236 0 00-.171-.064l-.269.005.008.446zm1.294.216l.009.501-.293.005-.024-1.422.555-.009a.629.629 0 01.282.054.425.425 0 01.19.164.464.464 0 01.07.244.41.41 0 01-.138.332c-.094.082-.225.124-.394.127l-.257.004zm-.003-.237l.261-.004c.078-.002.136-.021.176-.058.041-.037.06-.09.059-.157a.236.236 0 00-.064-.168.232.232 0 00-.171-.064l-.269.005.008.446zm1.299.481l.622-.01.004.236-.915.015-.024-1.422.293-.005.02 1.186zm1.106.218l-.293.004-.023-1.421.293-.005.023 1.422zm1.381-.497a.506.506 0 01-.164.364.593.593 0 01-.4.139.536.536 0 01-.434-.177c-.106-.121-.161-.289-.165-.503l-.001-.087a.86.86 0 01.066-.362.546.546 0 01.202-.243.584.584 0 01.311-.089.58.58 0 01.399.125.54.54 0 01.18.367l-.293.005c-.009-.091-.035-.157-.08-.198-.045-.041-.112-.06-.202-.059-.097.002-.17.038-.218.109-.047.071-.07.179-.068.327l.001.107c.003.154.028.266.075.336.048.07.122.104.223.103.09-.002.157-.024.201-.065.044-.043.069-.107.074-.194l.293-.005zm.998.165l-.514.008-.093.295-.311.005.506-1.431.271-.004.556 1.413-.312.005-.103-.291zm-.439-.231l.356-.005-.188-.53-.168.535zm1.92-.686l-.436.008.02 1.184-.293.005-.02-1.185-.429.008-.004-.238 1.158-.019.004.237zm.499 1.177l-.293.005-.024-1.422.293-.005.024 1.422zm1.429-.702a.872.872 0 01-.068.369.567.567 0 01-.209.248.593.593 0 01-.315.091.571.571 0 01-.536-.319.843.843 0 01-.083-.362l-.001-.07a.864.864 0 01.069-.37.561.561 0 01.525-.34.583.583 0 01.317.081.557.557 0 01.218.241.866.866 0 01.082.367l.001.064zm-.298-.06c-.003-.149-.031-.262-.086-.338a.26.26 0 00-.23-.113.262.262 0 00-.226.119c-.052.077-.077.19-.075.337l.001.07a.598.598 0 00.086.336.261.261 0 00.232.117.262.262 0 00.225-.119.611.611 0 00.074-.34l-.001-.069zm1.678.716l-.293.005-.586-.926.016.935-.293.005-.024-1.422.293-.005.587.928-.015-.937.292-.005.023 1.422z"
                    ></path>
                    <path
                        id="Resume/CV"
                        fill="#000"
                        d="M278.498 326.947l-.175.003.007.391-.22.003-.018-1.066.396-.007a.45.45 0 01.293.079.29.29 0 01.106.237.323.323 0 01-.044.183.316.316 0 01-.141.118l.239.432v.01l-.236.004-.207-.387zm-.178-.175l.177-.003c.055-.001.098-.015.128-.044a.154.154 0 00.043-.117.162.162 0 00-.045-.118c-.029-.028-.073-.042-.132-.041l-.177.003.006.32zm1.099.564a.392.392 0 01-.286-.102.38.38 0 01-.114-.283v-.02a.463.463 0 01.042-.214.33.33 0 01.128-.147.356.356 0 01.192-.055.329.329 0 01.258.098.423.423 0 01.099.289l.001.087-.505.008a.2.2 0 00.064.124.19.19 0 00.132.044.227.227 0 00.19-.092l.106.115a.336.336 0 01-.127.108.424.424 0 01-.18.04zm-.035-.65a.135.135 0 00-.102.045.217.217 0 00-.048.122l.295-.005-.001-.017c-.002-.047-.015-.083-.04-.108-.025-.025-.059-.037-.104-.037zm.907.401c-.001-.026-.014-.046-.04-.06a.425.425 0 00-.124-.038c-.189-.036-.284-.115-.287-.235a.215.215 0 01.085-.177.348.348 0 01.227-.076.387.387 0 01.243.067.228.228 0 01.094.183l-.212.004a.099.099 0 00-.031-.074c-.019-.02-.05-.029-.092-.029a.131.131 0 00-.082.026.074.074 0 00-.028.062c0 .023.012.042.034.057.022.013.06.025.113.035.053.009.098.02.134.033.113.039.17.109.172.21a.209.209 0 01-.09.177.403.403 0 01-.239.071.42.42 0 01-.178-.032.304.304 0 01-.123-.095.23.23 0 01-.046-.133l.201-.004a.11.11 0 00.043.086.166.166 0 00.104.028.157.157 0 00.091-.024.074.074 0 00.031-.062zm.82.124a.263.263 0 01-.215.099c-.085.002-.151-.021-.197-.069-.045-.048-.069-.12-.071-.214l-.01-.519.212-.004.009.512c.002.083.04.123.115.122.072-.001.121-.027.147-.077l-.01-.561.212-.004.014.792-.199.004-.007-.081zm.55-.721l.008.088a.28.28 0 01.226-.107c.102-.002.173.037.213.117a.274.274 0 01.236-.125c.085-.001.15.023.193.072.043.049.065.124.067.225l.009.506-.213.003-.009-.505c0-.045-.01-.077-.028-.098-.018-.02-.049-.03-.093-.029-.064.001-.107.032-.131.093l.011.544-.212.003-.009-.504c-.001-.046-.01-.079-.029-.099-.018-.02-.049-.03-.092-.029-.06.001-.103.026-.129.077l.009.56-.211.004-.014-.793.198-.003zm1.48.781a.39.39 0 01-.286-.102.38.38 0 01-.114-.283l-.001-.02a.476.476 0 01.043-.214.324.324 0 01.128-.147.356.356 0 01.192-.055.328.328 0 01.257.098.413.413 0 01.099.289l.002.086-.505.009a.2.2 0 00.064.124.19.19 0 00.132.044.227.227 0 00.189-.092l.106.115a.329.329 0 01-.127.108.432.432 0 01-.179.04zm-.036-.65a.135.135 0 00-.102.045.216.216 0 00-.047.122l.294-.005v-.017c-.002-.047-.015-.083-.04-.108a.138.138 0 00-.105-.037zm.55.718l-.157.003.372-1.165.158-.003-.373 1.165zm1.338-.47a.373.373 0 01-.123.273.445.445 0 01-.3.104.405.405 0 01-.325-.132.569.569 0 01-.124-.377l-.001-.065a.645.645 0 01.049-.272.403.403 0 01.152-.182.42.42 0 01.233-.067.433.433 0 01.299.093.41.41 0 01.135.275l-.219.004c-.007-.068-.027-.118-.061-.148-.033-.031-.083-.046-.151-.044-.073.001-.128.028-.163.082a.438.438 0 00-.052.244l.002.081a.484.484 0 00.056.252c.036.052.092.078.167.077.068-.002.118-.018.151-.049.033-.032.051-.08.055-.145l.22-.004zm.54.081l.227-.806.245-.004-.353 1.073-.229.004-.388-1.06.244-.005.254.798z"
                    ></path>
                    <path
                        id="Full name"
                        fill="#000"
                        d="M278.75 332.905l-.422.008.008.436-.22.004-.019-1.066.694-.013.003.178-.474.009.005.275.422-.008.003.177zm.631.344a.265.265 0 01-.215.099c-.085.002-.15-.021-.196-.069-.045-.048-.069-.119-.072-.214l-.01-.519.212-.004.009.512c.002.083.04.123.115.122.072-.002.121-.027.147-.078l-.01-.561.212-.004.015.793-.2.004-.007-.081zm.59.07l-.213.004-.021-1.125.213-.004.021 1.125zm.398-.008l-.212.004-.021-1.125.212-.003.021 1.124zm.729-.806l.008.092a.276.276 0 01.226-.111c.084-.001.147.022.188.071.042.048.065.122.068.22l.009.512-.212.003-.009-.506c-.001-.045-.011-.077-.031-.097-.02-.02-.053-.03-.098-.029a.145.145 0 00-.133.079l.011.558-.212.004-.015-.792.2-.004zm1.119.772a.238.238 0 01-.022-.071.256.256 0 01-.199.09.284.284 0 01-.194-.064.214.214 0 01-.079-.168.223.223 0 01.089-.195.458.458 0 01.269-.074l.097-.001-.001-.046a.123.123 0 00-.03-.087c-.019-.022-.048-.032-.089-.031a.123.123 0 00-.084.027.087.087 0 00-.028.071l-.212.003a.21.21 0 01.04-.128.278.278 0 01.118-.093.426.426 0 01.174-.037.344.344 0 01.234.069.259.259 0 01.09.205l.006.344a.386.386 0 00.035.17v.012l-.214.004zm-.177-.144a.183.183 0 00.086-.022.142.142 0 00.057-.057l-.002-.137-.079.002c-.106.002-.162.039-.168.113v.012c0 .027.01.048.029.065a.105.105 0 00.077.024zm.706-.658l.008.088a.276.276 0 01.226-.107c.102-.002.173.037.212.117a.273.273 0 01.236-.126c.086-.001.151.023.193.072.043.049.066.124.068.225l.009.506-.212.004-.01-.506c-.001-.045-.01-.077-.028-.097-.018-.021-.049-.031-.093-.03-.064.001-.107.032-.131.093l.011.544-.211.004-.01-.504c-.001-.046-.01-.079-.029-.1-.018-.02-.049-.029-.093-.029-.06.002-.103.027-.129.078l.011.56-.212.004-.014-.793.198-.003zm1.48.779a.387.387 0 01-.286-.101.38.38 0 01-.114-.283l-.001-.02a.476.476 0 01.043-.214.335.335 0 01.127-.148.375.375 0 01.193-.055.328.328 0 01.257.098.413.413 0 01.099.289l.002.086-.505.01a.186.186 0 00.196.168.228.228 0 00.189-.093l.107.115a.336.336 0 01-.127.108.424.424 0 01-.18.04zm-.036-.649a.13.13 0 00-.102.044.223.223 0 00-.047.123l.294-.006v-.017c-.002-.047-.015-.083-.04-.107-.025-.026-.06-.038-.105-.037z"
                    ></path>
                    <path
                        id="Email"
                        fill="#000"
                        d="M278.75 338.969l-.422.01.007.285.495-.011.004.176-.715.017-.025-1.066.714-.017.004.178-.494.011.006.255.422-.01.004.172zm.379-.34l.008.089a.283.283 0 01.226-.109c.102-.002.173.037.213.116a.27.27 0 01.235-.126c.086-.002.15.021.194.071.043.049.065.123.068.224l.012.506-.213.005-.012-.505c-.001-.045-.01-.078-.028-.098-.018-.021-.05-.03-.094-.029-.063.001-.107.032-.13.094l.014.544-.212.005-.012-.505c-.001-.046-.01-.079-.029-.099-.019-.02-.05-.029-.093-.028a.138.138 0 00-.129.077l.014.56-.212.005-.019-.792.199-.005zm1.578.756a.24.24 0 01-.023-.07.257.257 0 01-.198.09.283.283 0 01-.195-.063.218.218 0 01-.08-.168.223.223 0 01.089-.195.455.455 0 01.268-.075l.098-.002-.001-.045a.13.13 0 00-.031-.088c-.019-.021-.049-.031-.089-.031a.127.127 0 00-.084.028.086.086 0 00-.028.071l-.212.005a.212.212 0 01.039-.128.281.281 0 01.118-.095.44.44 0 01.174-.037.34.34 0 01.234.068.257.257 0 01.091.204l.008.344a.383.383 0 00.035.17l.001.012-.214.005zm-.178-.143a.188.188 0 00.085-.022.14.14 0 00.058-.058l-.003-.136-.08.002c-.105.002-.161.04-.166.113l-.001.013a.085.085 0 00.03.064.105.105 0 00.077.024zm.746.13l-.212.005-.019-.792.213-.005.018.792zm-.248-.992a.102.102 0 01.03-.079.122.122 0 01.086-.033.12.12 0 01.087.029.1.1 0 01.034.077.1.1 0 01-.031.08.12.12 0 01-.085.033.122.122 0 01-.087-.029.105.105 0 01-.034-.078zm.647.983l-.213.005-.026-1.125.212-.005.027 1.125z"
                    ></path>
                    <path
                        id="Phone"
                        fill="#000"
                        d="M278.328 344.959l.006.376-.219.004-.019-1.066.416-.008c.08-.001.15.012.211.04a.326.326 0 01.195.306.304.304 0 01-.103.249.44.44 0 01-.295.096l-.192.003zm-.004-.178l.197-.003c.058-.001.102-.016.131-.044.031-.028.045-.067.045-.118a.175.175 0 00-.049-.125.17.17 0 00-.128-.048l-.202.004.006.334zm.939-.169a.267.267 0 01.21-.105c.171-.003.26.096.266.295l.009.508-.211.003-.009-.501c-.001-.046-.011-.079-.031-.1-.02-.022-.053-.032-.098-.031-.062.001-.107.026-.134.074l.01.563-.211.004-.02-1.125.211-.004.008.419zm.605.292a.463.463 0 01.041-.211.34.34 0 01.128-.145.38.38 0 01.198-.054.358.358 0 01.263.093.395.395 0 01.118.265l.003.054a.415.415 0 01-.097.295.354.354 0 01-.271.114.358.358 0 01-.276-.105.422.422 0 01-.107-.297v-.009zm.212.012a.296.296 0 00.045.172.14.14 0 00.123.057.14.14 0 00.119-.061c.028-.04.041-.103.04-.19a.301.301 0 00-.046-.17.142.142 0 00-.123-.059.137.137 0 00-.119.063c-.028.041-.041.103-.039.188zm.857-.42l.008.091a.28.28 0 01.226-.11c.084-.001.147.022.189.071.041.048.064.122.066.22l.01.512-.212.003-.009-.506c-.001-.045-.011-.077-.031-.097-.02-.02-.053-.03-.098-.029a.146.146 0 00-.133.078l.01.559-.211.004-.015-.792.2-.004zm1.025.789a.388.388 0 01-.286-.102.38.38 0 01-.115-.283v-.02a.49.49 0 01.042-.214.344.344 0 01.321-.202.328.328 0 01.257.098c.064.067.097.163.099.289l.001.086-.504.009a.2.2 0 00.064.124.19.19 0 00.131.044.227.227 0 00.19-.092l.106.115a.319.319 0 01-.127.107.42.42 0 01-.179.041zm-.036-.65a.138.138 0 00-.102.044.231.231 0 00-.048.123l.295-.005v-.017a.16.16 0 00-.04-.108.138.138 0 00-.105-.037z"
                    ></path>
                    <path
                        id="Rectangle 707"
                        fill="#53A9AC"
                        d="M295.354 348.47a.3.3 0 01.29-.309l11.571-.4a.3.3 0 01.31.29l.087 2.769a.3.3 0 01-.289.31l-11.571.4a.3.3 0 01-.31-.291l-.088-2.769z"
                    ></path>
                    <rect
                        id="Rectangle 704"
                        width="24.718"
                        height="1.998"
                        fill="#FFFBFB"
                        rx="0.3"
                        transform="matrix(.9998 -.01975 .02802 .9996 291.559 331.172)"
                    ></rect>
                    <rect
                        id="Rectangle 705"
                        width="24.718"
                        height="2.322"
                        fill="#FFFBFB"
                        rx="0.3"
                        transform="matrix(.9997 -.02462 .03288 .99946 291.551 337.196)"
                    ></rect>
                    <rect
                        id="Rectangle 706"
                        width="24.718"
                        height="2.106"
                        fill="#FFFBFB"
                        rx="0.3"
                        transform="matrix(.99982 -.019 .02727 .99963 291.559 343.161)"
                    ></rect>
                    <path
                        id="adam-mathieson"
                        fill="#535353"
                        d="M292.802 332.72l-.257.004-.046.148-.155.003.251-.716.136-.002.279.705-.156.003-.052-.145zm-.219-.115l.177-.003-.094-.265-.083.268zm.457-.011a.32.32 0 01.052-.198.178.178 0 01.15-.076.162.162 0 01.129.055l-.005-.269.141-.003.014.75-.127.002-.008-.056a.165.165 0 01-.135.069.182.182 0 01-.151-.071.333.333 0 01-.06-.203zm.141.007c.001.05.011.088.028.114a.086.086 0 00.076.038c.044-.001.074-.02.092-.057l-.004-.209c-.019-.036-.049-.054-.093-.053-.068.001-.101.057-.099.167zm.756.244a.137.137 0 01-.015-.047.172.172 0 01-.133.06.184.184 0 01-.129-.043.143.143 0 01-.053-.112.151.151 0 01.059-.13.309.309 0 01.18-.049l.065-.001-.001-.03a.086.086 0 00-.02-.059c-.013-.014-.033-.021-.06-.02a.08.08 0 00-.055.018c-.014.011-.02.027-.02.047l-.141.003c0-.031.009-.06.027-.086a.19.19 0 01.079-.062.286.286 0 01.116-.025.228.228 0 01.155.046.17.17 0 01.061.137l.004.229c.001.05.009.088.023.113v.009l-.142.002zm-.119-.096a.12.12 0 00.057-.014.092.092 0 00.039-.039l-.002-.091-.053.001c-.07.002-.107.027-.111.076v.008c0 .018.006.032.019.043.013.011.03.017.051.016zm.471-.439l.006.059a.184.184 0 01.15-.071c.068-.002.115.024.142.078a.18.18 0 01.157-.084c.057-.001.1.015.129.048.028.033.043.083.044.15l.007.337-.142.003-.006-.337c-.001-.03-.007-.052-.019-.065-.012-.014-.033-.021-.062-.02-.043.001-.071.021-.087.062l.007.363-.141.002-.006-.336c-.001-.031-.007-.053-.019-.066-.013-.014-.033-.02-.062-.02-.04.001-.069.018-.086.052l.007.373-.141.003-.01-.528.132-.003zm1.18-.204l.192.512.172-.519.193-.004.013.711-.147.003-.004-.194.009-.336-.182.533-.101.002-.201-.526.021.335.003.194-.146.003-.013-.711.191-.003zm.995.692a.161.161 0 01-.016-.047.168.168 0 01-.132.06.184.184 0 01-.129-.043.142.142 0 01-.053-.112.149.149 0 01.059-.13.309.309 0 01.18-.049l.065-.001-.001-.03c-.001-.025-.007-.044-.02-.058-.013-.015-.033-.022-.06-.021a.08.08 0 00-.055.018c-.014.011-.02.027-.02.047l-.141.003a.15.15 0 01.027-.086.185.185 0 01.079-.062.286.286 0 01.116-.025.223.223 0 01.155.047c.039.031.059.077.061.136l.004.229c.001.05.009.088.023.113v.009l-.142.002zm-.119-.096a.12.12 0 00.057-.014.092.092 0 00.039-.039l-.002-.09-.053.001c-.07.001-.107.026-.111.075v.008c0 .018.006.032.019.043a.07.07 0 00.051.016zm.505-.569l.003.13.09-.002.002.104-.091.001.005.264a.075.075 0 00.012.042c.008.008.022.012.044.012a.242.242 0 00.041-.005l.002.107a.31.31 0 01-.085.015c-.099.001-.151-.048-.154-.147l-.006-.285-.077.001-.002-.103.077-.002-.002-.129.141-.003zm.31.182a.175.175 0 01.14-.07c.115-.002.174.063.178.196l.006.338-.141.003-.006-.334c-.001-.031-.007-.053-.021-.067-.013-.014-.035-.021-.065-.021-.041.001-.071.018-.089.05l.007.375-.141.003-.014-.75.141-.003.005.28zm.58.46l-.142.002-.01-.528.142-.002.01.528zm-.163-.662c0-.022.007-.039.02-.053a.086.086 0 01.058-.022c.024 0 .044.006.058.02a.07.07 0 01.023.052.072.072 0 01-.021.053.077.077 0 01-.057.021.08.08 0 01-.058-.019.07.07 0 01-.023-.052zm.523.665a.26.26 0 01-.191-.068.253.253 0 01-.076-.188l-.001-.014a.316.316 0 01.029-.143.22.22 0 01.085-.098.24.24 0 01.128-.037.222.222 0 01.172.066.28.28 0 01.066.192l.001.058-.337.006c.005.034.02.062.043.082a.121.121 0 00.088.03.153.153 0 00.126-.062l.071.077a.223.223 0 01-.085.072.289.289 0 01-.119.027zm-.025-.433c-.027 0-.05.01-.067.029a.146.146 0 00-.032.082l.196-.004v-.011a.102.102 0 00-.027-.072c-.016-.017-.04-.025-.07-.024zm.606.266c-.001-.017-.01-.03-.027-.04a.275.275 0 00-.083-.025c-.126-.024-.189-.076-.191-.157a.144.144 0 01.056-.118.235.235 0 01.152-.05.25.25 0 01.161.044.15.15 0 01.063.122l-.141.003a.069.069 0 00-.02-.05c-.014-.013-.034-.019-.062-.019a.09.09 0 00-.055.018.05.05 0 00-.018.041c0 .016.008.028.022.038a.237.237 0 00.076.023.608.608 0 01.089.022c.075.026.113.073.115.14a.138.138 0 01-.06.118.27.27 0 01-.159.048.297.297 0 01-.119-.022.2.2 0 01-.082-.063.155.155 0 01-.031-.089l.134-.002c.002.025.011.044.029.057a.108.108 0 00.07.018c.027 0 .047-.005.06-.016a.048.048 0 00.021-.041zm.204-.127a.303.303 0 01.028-.14.212.212 0 01.085-.097.254.254 0 01.131-.036.236.236 0 01.176.062.265.265 0 01.079.176l.001.036a.273.273 0 01-.064.197.236.236 0 01-.181.077.237.237 0 01-.183-.07.28.28 0 01-.072-.198v-.007zm.141.008c.001.05.011.088.031.115a.094.094 0 00.081.038.094.094 0 00.08-.041c.018-.026.027-.069.026-.126a.196.196 0 00-.031-.114.091.091 0 00-.082-.039.095.095 0 00-.079.042.222.222 0 00-.026.125zm.571-.28l.006.061a.184.184 0 01.15-.074c.056-.001.098.015.126.047.028.033.043.081.045.147l.006.341-.141.003-.006-.338c-.001-.03-.008-.052-.021-.065-.013-.013-.035-.019-.065-.019a.099.099 0 00-.089.052l.007.373-.141.003-.01-.529.133-.002z"
                    ></path>
                    <path
                        id="SUBMIT APPLICATION"
                        fill="#fff"
                        d="M296.768 349.83a.448.448 0 01-.179-.079.164.164 0 01-.058-.124.172.172 0 01.062-.14.269.269 0 01.173-.061.303.303 0 01.131.024c.039.018.07.043.092.076a.196.196 0 01.035.108l-.094.003c-.002-.043-.016-.077-.045-.1a.168.168 0 00-.116-.034.178.178 0 00-.108.034.103.103 0 00-.036.086.095.095 0 00.039.073.365.365 0 00.127.05c.06.015.107.032.141.051a.212.212 0 01.076.068.175.175 0 01.027.093.166.166 0 01-.063.141.283.283 0 01-.178.057.334.334 0 01-.138-.023.24.24 0 01-.1-.074.195.195 0 01-.038-.11l.094-.003a.125.125 0 00.051.1.205.205 0 00.129.034.184.184 0 00.112-.034.098.098 0 00.037-.084.094.094 0 00-.039-.079.416.416 0 00-.134-.053zm.872-.421l.015.483a.227.227 0 01-.059.166.25.25 0 01-.167.077l-.025.002a.262.262 0 01-.188-.057.229.229 0 01-.076-.171l-.015-.484.093-.003.015.481a.166.166 0 00.046.119c.029.027.07.04.123.039.053-.002.093-.018.12-.047a.16.16 0 00.038-.121l-.015-.481.095-.003zm.17.706l-.022-.711.232-.007a.27.27 0 01.175.042c.04.031.061.078.063.14a.145.145 0 01-.025.089.195.195 0 01-.076.062c.039.009.07.029.093.058.023.03.036.065.037.107a.191.191 0 01-.057.152.255.255 0 01-.174.06l-.246.008zm.083-.336l.008.256.155-.005a.146.146 0 00.102-.037.12.12 0 00.035-.094c-.003-.086-.051-.127-.144-.124l-.156.004zm-.002-.075l.141-.004a.146.146 0 00.097-.034.103.103 0 00.035-.085c-.001-.039-.014-.067-.037-.083-.023-.018-.058-.025-.105-.024l-.138.004.007.226zm.64-.323l.251.573.214-.588.121-.003.023.71-.094.003-.009-.277v-.298l-.216.582-.071.002-.251-.566.019.297.008.276-.094.003-.022-.71.121-.004zm.875.684l-.094.003-.022-.711.093-.003.023.711zm.628-.654l-.228.007.019.634-.093.003-.02-.634-.228.007-.002-.077.55-.017.002.077zm.74.426l-.298.009-.061.188-.096.003.249-.72.082-.002.294.702-.096.003-.074-.183zm-.272-.069l.242-.008-.131-.328-.111.336zm.623-.035l.008.278-.093.003-.023-.711.263-.008a.266.266 0 01.184.054c.045.038.069.09.071.156.002.069-.018.123-.06.161-.042.039-.103.059-.183.062l-.167.005zm-.003-.077l.169-.005c.05-.001.088-.014.114-.039.026-.024.038-.059.037-.103a.136.136 0 00-.044-.101.161.161 0 00-.111-.036l-.173.006.008.278zm.633.057l.009.278-.094.003-.022-.71.262-.008a.26.26 0 01.184.053c.046.039.07.091.072.156a.202.202 0 01-.06.162.275.275 0 01-.183.061l-.168.005zm-.002-.076l.168-.006a.168.168 0 00.114-.038c.026-.025.038-.059.037-.104a.133.133 0 00-.043-.1.155.155 0 00-.111-.036l-.174.005.009.279zm.639.258l.337-.01.003.076-.431.014-.022-.711.094-.003.019.634zm.547.06l-.094.003-.022-.711.094-.003.022.711zm.688-.247a.266.266 0 01-.079.177.27.27 0 01-.184.066.246.246 0 01-.204-.084.363.363 0 01-.084-.239l-.002-.068a.41.41 0 01.03-.176.263.263 0 01.246-.163.26.26 0 01.184.058c.046.04.075.098.085.172l-.095.003c-.01-.056-.029-.097-.057-.121-.028-.025-.066-.036-.115-.035a.171.171 0 00-.139.071.305.305 0 00-.044.19l.002.069a.31.31 0 00.054.183.156.156 0 00.137.064.186.186 0 00.119-.039c.027-.025.044-.066.051-.125l.095-.003zm.521.024l-.297.009-.061.187-.097.003.249-.719.082-.002.294.702-.096.003-.074-.183zm-.271-.069l.241-.008-.131-.328-.11.336zm.945-.401l-.229.007.02.634-.093.003-.02-.634-.228.007-.002-.077.549-.017.003.077zm.225.627l-.093.003-.022-.711.093-.002.022.71zm.708-.355a.427.427 0 01-.029.184.274.274 0 01-.096.122.273.273 0 01-.149.045.27.27 0 01-.15-.036.277.277 0 01-.105-.114.438.438 0 01-.042-.176l-.001-.052a.408.408 0 01.03-.182.271.271 0 01.096-.123.276.276 0 01.148-.047.284.284 0 01.152.037.265.265 0 01.104.117.434.434 0 01.041.18l.001.045zm-.094-.043a.322.322 0 00-.057-.192.166.166 0 00-.144-.063.168.168 0 00-.138.072.305.305 0 00-.046.189l.001.052a.326.326 0 00.057.191.167.167 0 00.145.066.166.166 0 00.138-.07.318.318 0 00.045-.192l-.001-.053zm.791.354l-.094.003-.375-.536.018.547-.095.003-.022-.71.094-.003.376.539-.017-.55.093-.003.022.71z"
                    ></path>
                    <path
                        id="mathieson.ad@gmail.com"
                        fill="#535353"
                        d="M292.194 338.588l.006.059a.189.189 0 01.15-.073c.068-.001.116.025.142.078a.182.182 0 01.157-.085c.057-.001.1.015.129.048.029.032.044.082.046.149l.008.337-.142.004-.008-.337c-.001-.03-.007-.052-.019-.065-.012-.014-.033-.02-.062-.02a.088.088 0 00-.087.063l.009.363-.141.003-.008-.336c-.001-.031-.007-.053-.019-.066-.013-.014-.033-.02-.062-.019-.04.001-.069.018-.086.051l.009.374-.142.003-.012-.528.132-.003zm1.053.504a.172.172 0 01-.016-.047.168.168 0 01-.132.06.192.192 0 01-.13-.042.145.145 0 01-.053-.112.149.149 0 01.059-.13.307.307 0 01.179-.05l.065-.001-.001-.031a.085.085 0 00-.02-.058c-.013-.014-.033-.021-.06-.02a.08.08 0 00-.055.018.054.054 0 00-.019.047l-.141.004a.14.14 0 01.026-.086.19.19 0 01.078-.063.29.29 0 01.116-.025.227.227 0 01.156.046c.039.031.059.077.061.136l.005.229a.26.26 0 00.024.113v.008l-.142.004zm-.119-.096c.02 0 .039-.005.057-.015a.087.087 0 00.038-.038l-.002-.091-.053.001c-.07.002-.107.027-.111.076v.008c0 .018.007.032.019.043.013.012.03.017.052.016zm.502-.572l.003.13.09-.002.003.104-.091.002.007.263c0 .02.004.034.012.042.007.008.022.012.043.012a.23.23 0 00.041-.005l.003.107a.31.31 0 01-.085.015c-.099.002-.151-.047-.155-.146l-.007-.285-.077.002-.002-.104.077-.001-.003-.13.141-.004zm.311.181a.174.174 0 01.139-.071c.115-.003.175.063.179.196l.008.338-.141.003-.008-.334c0-.03-.007-.053-.021-.067-.013-.014-.035-.021-.065-.02-.042.001-.071.018-.089.05l.009.375-.141.004-.018-.75.141-.004.007.28zm.582.457l-.142.003-.012-.528.141-.003.013.528zm-.166-.661a.07.07 0 01.02-.053.083.083 0 01.058-.022.08.08 0 01.058.019.07.07 0 01.022.052.068.068 0 01-.02.053.082.082 0 01-.057.022.085.085 0 01-.058-.019.072.072 0 01-.023-.052zm.526.662a.258.258 0 01-.192-.067.256.256 0 01-.077-.188v-.013a.33.33 0 01.027-.143.224.224 0 01.085-.099.24.24 0 01.128-.037.22.22 0 01.172.064c.043.045.065.109.067.193l.001.057-.336.008c.005.034.02.062.043.082.024.02.053.03.088.029a.15.15 0 00.126-.062l.071.076a.207.207 0 01-.084.073.292.292 0 01-.119.027zm-.027-.433a.09.09 0 00-.067.03.146.146 0 00-.032.082l.197-.005-.001-.011a.102.102 0 00-.027-.072.092.092 0 00-.07-.024zm.607.264a.047.047 0 00-.027-.04.275.275 0 00-.083-.025c-.126-.023-.19-.075-.192-.156a.143.143 0 01.055-.118.232.232 0 01.152-.051.255.255 0 01.162.043.15.15 0 01.063.122l-.141.003a.064.064 0 00-.021-.049c-.013-.013-.033-.019-.061-.019a.088.088 0 00-.055.018.048.048 0 00-.018.041c0 .016.008.028.022.038a.246.246 0 00.076.023.637.637 0 01.09.021c.075.026.113.072.115.14a.14.14 0 01-.059.118.272.272 0 01-.16.049.28.28 0 01-.118-.021.194.194 0 01-.082-.063.156.156 0 01-.032-.089l.134-.003a.076.076 0 00.029.057.11.11 0 00.07.018.103.103 0 00.061-.016.053.053 0 00.02-.041zm.203-.128a.323.323 0 01.027-.141.23.23 0 01.085-.097.257.257 0 01.131-.037.24.24 0 01.256.237l.002.037a.274.274 0 01-.063.196.238.238 0 01-.181.078.236.236 0 01-.184-.069.285.285 0 01-.073-.198v-.006zm.142.007c.001.05.011.088.031.115a.094.094 0 00.082.037.094.094 0 00.079-.041.224.224 0 00.026-.126.2.2 0 00-.032-.114.095.095 0 00-.082-.039.092.092 0 00-.079.043.215.215 0 00-.025.125zm.569-.283l.006.061a.184.184 0 01.15-.074c.056-.002.098.014.126.046.029.032.044.081.046.146l.008.342-.141.003-.008-.338c-.001-.03-.008-.051-.021-.064-.013-.014-.035-.02-.066-.019a.097.097 0 00-.088.053l.009.372-.141.003-.012-.528.132-.003zm.449.449a.07.07 0 01.021-.056.086.086 0 01.057-.022.08.08 0 01.057.02.07.07 0 01.025.054c0 .022-.007.04-.022.055a.077.077 0 01-.057.021.075.075 0 01-.057-.019.065.065 0 01-.024-.053zm.591.055a.137.137 0 01-.015-.047.168.168 0 01-.132.06.18.18 0 01-.13-.042.145.145 0 01-.053-.112.146.146 0 01.059-.13.312.312 0 01.179-.05l.065-.001-.001-.03c-.001-.025-.007-.044-.02-.058-.013-.015-.033-.022-.06-.021a.093.093 0 00-.056.018.062.062 0 00-.019.048l-.141.003c0-.031.008-.059.027-.086a.181.181 0 01.078-.062.286.286 0 01.116-.026.232.232 0 01.156.046.173.173 0 01.061.136l.005.229c.001.05.009.088.024.114v.008l-.143.003zm-.119-.095a.142.142 0 00.058-.015.095.095 0 00.038-.039l-.002-.091-.053.002c-.071.001-.108.027-.111.076v.008c0 .017.007.032.019.043.013.011.03.016.051.016zm.321-.178a.318.318 0 01.051-.198.178.178 0 01.15-.076.16.16 0 01.128.054l-.006-.269.142-.004.017.75-.127.003-.008-.056a.166.166 0 01-.135.069.18.18 0 01-.151-.069.33.33 0 01-.061-.204zm.141.007c.001.05.011.087.029.113a.084.084 0 00.076.038c.044-.001.074-.02.091-.057l-.005-.209c-.018-.036-.049-.054-.093-.053-.068.002-.1.058-.098.168zm1.244-.033a.349.349 0 01-.057.2.181.181 0 01-.15.077.143.143 0 01-.073-.016.116.116 0 01-.047-.051.151.151 0 01-.126.071.123.123 0 01-.112-.057.24.24 0 01-.033-.158.423.423 0 01.037-.144.273.273 0 01.079-.099.185.185 0 01.105-.036.215.215 0 01.12.03l.031.02-.018.283c-.003.026 0 .045.009.059.01.013.024.02.044.019.03-.001.054-.019.074-.054a.303.303 0 00.03-.138c.003-.114-.022-.201-.075-.26-.053-.06-.129-.089-.23-.087a.308.308 0 00-.28.191.517.517 0 00-.043.203c-.002.115.023.203.076.265s.13.092.233.089a.374.374 0 00.161-.037l.02.075a.23.23 0 01-.08.033.438.438 0 01-.322-.032.317.317 0 01-.139-.15.541.541 0 01-.044-.241.564.564 0 01.055-.243.404.404 0 01.363-.232.408.408 0 01.212.047c.06.034.105.083.136.147.031.065.046.14.044.226zm-.489.063a.193.193 0 00.013.098c.012.022.03.033.055.032a.057.057 0 00.044-.022.16.16 0 00.035-.061l.015-.232a.174.174 0 00-.039-.005.1.1 0 00-.087.05.32.32 0 00-.036.14zm.564-.071a.31.31 0 01.053-.197.19.19 0 01.154-.078.166.166 0 01.137.057l.005-.05.128-.003.012.51a.232.232 0 01-.029.122.205.205 0 01-.087.08.303.303 0 01-.133.03.281.281 0 01-.114-.021.2.2 0 01-.085-.058l.061-.087a.164.164 0 00.129.056.125.125 0 00.087-.032.114.114 0 00.029-.086l-.001-.028a.163.163 0 01-.127.058.19.19 0 01-.156-.071.312.312 0 01-.063-.196v-.006zm.141.007a.191.191 0 00.032.112.09.09 0 00.08.039c.043-.001.073-.018.091-.051l-.005-.222c-.02-.032-.051-.047-.093-.046a.093.093 0 00-.079.043.228.228 0 00-.026.125zm.577-.284l.006.059a.182.182 0 01.15-.072c.068-.002.115.024.142.077a.18.18 0 01.157-.084c.057-.002.1.014.129.047.028.032.044.082.045.149l.008.338-.142.003-.007-.337c-.001-.03-.007-.052-.02-.065-.012-.014-.032-.02-.062-.019a.087.087 0 00-.086.062l.009.363-.142.003-.007-.336c-.001-.031-.008-.053-.02-.066-.012-.014-.033-.02-.062-.019-.04.001-.069.018-.086.052l.009.373-.141.003-.012-.528.132-.003zm1.052.504a.144.144 0 01-.015-.047.171.171 0 01-.132.06.19.19 0 01-.13-.042.143.143 0 01-.054-.112.151.151 0 01.059-.13.307.307 0 01.179-.05l.065-.001v-.031a.09.09 0 00-.021-.058c-.012-.014-.032-.021-.059-.02-.024 0-.043.006-.056.018a.061.061 0 00-.019.047l-.141.004a.143.143 0 01.026-.086.201.201 0 01.079-.063.286.286 0 01.116-.025.228.228 0 01.155.046c.04.031.06.077.061.136l.006.229c.001.05.009.088.023.113v.009l-.142.003zm-.119-.096a.11.11 0 00.057-.015.082.082 0 00.038-.038l-.002-.091-.052.001c-.071.002-.108.027-.111.076l-.001.009a.06.06 0 00.02.043.07.07 0 00.051.015zm.498.087l-.142.003-.012-.528.141-.003.013.528zm-.166-.661a.07.07 0 01.02-.053.083.083 0 01.058-.022c.024 0 .043.006.058.019a.07.07 0 01.022.052.068.068 0 01-.02.053.082.082 0 01-.057.022.08.08 0 01-.058-.019.07.07 0 01-.023-.052zm.431.655l-.141.003-.018-.75.142-.003.017.75zm.123-.072a.07.07 0 01.021-.056.085.085 0 01.056-.022.08.08 0 01.058.02.066.066 0 01.024.054.07.07 0 01-.021.055.08.08 0 01-.057.021.079.079 0 01-.058-.019.067.067 0 01-.023-.053zm.502-.047a.089.089 0 00.063-.023.075.075 0 00.024-.058l.132-.003a.177.177 0 01-.027.1.196.196 0 01-.077.071.248.248 0 01-.11.027.229.229 0 01-.18-.068.284.284 0 01-.07-.197v-.01a.282.282 0 01.06-.196.229.229 0 01.176-.077.22.22 0 01.16.053.199.199 0 01.065.148l-.132.004a.1.1 0 00-.027-.066.088.088 0 00-.065-.025.087.087 0 00-.074.038c-.016.024-.024.063-.022.117v.015c.001.054.01.093.028.116.017.024.042.035.076.034zm.276-.171a.317.317 0 01.027-.141.212.212 0 01.085-.097.245.245 0 01.131-.037.241.241 0 01.176.061.264.264 0 01.08.176l.002.036a.282.282 0 01-.064.197.232.232 0 01-.18.077.238.238 0 01-.184-.068.28.28 0 01-.073-.198v-.006zm.141.007c.001.05.012.088.031.114.02.026.047.039.082.038a.095.095 0 00.079-.041c.019-.027.028-.069.026-.127a.19.19 0 00-.031-.113.093.093 0 00-.082-.039.092.092 0 00-.079.042c-.019.028-.027.069-.026.126zm.572-.283l.006.059a.189.189 0 01.15-.073c.068-.001.116.024.142.077a.185.185 0 01.157-.084c.057-.001.1.015.129.047.029.033.044.083.046.15l.008.337-.142.003-.008-.336c-.001-.03-.007-.052-.019-.065-.012-.014-.033-.021-.062-.02a.088.088 0 00-.087.063l.009.362-.141.004-.008-.337c-.001-.03-.007-.052-.019-.066-.013-.013-.033-.019-.062-.019-.04.001-.069.018-.086.052l.009.374-.141.003-.013-.528.132-.003z"
                    ></path>
                    <path
                        id="860-460-0459"
                        fill="#535353"
                        d="M292.841 344.333a.167.167 0 01-.024.092.193.193 0 01-.07.066.21.21 0 01.083.067c.02.029.031.063.032.102a.19.19 0 01-.062.151.265.265 0 01-.174.058.265.265 0 01-.177-.052.19.19 0 01-.068-.149.18.18 0 01.029-.103.202.202 0 01.08-.07.183.183 0 01-.072-.063.155.155 0 01-.027-.091.185.185 0 01.058-.146.243.243 0 01.163-.057.24.24 0 01.165.051.181.181 0 01.064.144zm-.121.319a.103.103 0 00-.028-.074.095.095 0 00-.073-.026c-.03 0-.054.01-.071.029a.102.102 0 00-.026.075c.001.03.01.054.028.072a.093.093 0 00.074.027.098.098 0 00.071-.028.1.1 0 00.025-.075zm-.02-.31a.101.101 0 00-.023-.066.082.082 0 00-.063-.024.08.08 0 00-.061.026.1.1 0 00-.021.067.104.104 0 00.024.068.074.074 0 00.062.025c.027 0 .047-.009.061-.027.015-.017.021-.04.021-.069zm.631-.214l.002.116h-.014a.247.247 0 00-.153.053.2.2 0 00-.067.136.189.189 0 01.142-.061.183.183 0 01.148.064.268.268 0 01.058.174.265.265 0 01-.028.126.216.216 0 01-.083.089.255.255 0 01-.124.033.226.226 0 01-.183-.075.299.299 0 01-.072-.207l-.001-.051a.443.443 0 01.04-.204.317.317 0 01.123-.14.376.376 0 01.189-.053h.023zm-.131.358a.112.112 0 00-.062.02.102.102 0 00-.04.047l.001.043c0 .047.01.084.029.11a.093.093 0 00.079.039.09.09 0 00.073-.037.15.15 0 00.026-.094c0-.039-.01-.07-.03-.093a.09.09 0 00-.076-.035zm.808.054a.357.357 0 01-.057.227c-.039.053-.099.08-.177.081a.214.214 0 01-.179-.073.352.352 0 01-.067-.219l-.002-.131c-.002-.099.017-.175.057-.227a.216.216 0 01.177-.08c.078-.001.137.023.179.073a.35.35 0 01.067.219l.002.13zm-.143-.141a.254.254 0 00-.027-.128c-.016-.026-.042-.039-.076-.039a.082.082 0 00-.073.04.247.247 0 00-.023.12l.003.173c.001.058.01.101.026.129.017.028.042.041.077.041.035-.001.059-.015.074-.042a.271.271 0 00.022-.125l-.003-.169zm.52.181l-.275.005-.002-.114.275-.005.002.114zm.525-.029l.08-.002.002.114-.08.001.002.154-.141.003-.002-.154-.292.005-.008-.089.288-.473.143-.003.008.444zm-.299.005l.157-.003-.004-.251-.009.017-.144.237zm.83-.465l.002.116h-.014a.247.247 0 00-.153.052.202.202 0 00-.067.136.191.191 0 01.142-.06.18.18 0 01.148.064.263.263 0 01.058.173.249.249 0 01-.028.126.21.21 0 01-.083.089.245.245 0 01-.124.034.233.233 0 01-.183-.075.299.299 0 01-.072-.207l-.001-.051a.447.447 0 01.04-.205.314.314 0 01.123-.139.366.366 0 01.189-.053h.023zm-.131.358a.11.11 0 00-.102.067l.001.043c0 .047.01.084.029.11a.09.09 0 00.079.038c.03 0 .055-.013.073-.037a.147.147 0 00.026-.094.14.14 0 00-.03-.093.09.09 0 00-.076-.034zm.808.054a.354.354 0 01-.057.226c-.039.053-.098.08-.177.082-.077.001-.137-.023-.179-.074a.35.35 0 01-.067-.218l-.002-.131c-.002-.099.017-.175.057-.227a.22.22 0 01.177-.081.216.216 0 01.179.074.35.35 0 01.067.218l.002.131zm-.143-.141a.251.251 0 00-.027-.128c-.016-.027-.042-.04-.076-.039a.08.08 0 00-.073.04.242.242 0 00-.023.12l.003.172c.001.058.01.101.026.129a.08.08 0 00.077.041c.035-.001.059-.015.074-.042a.267.267 0 00.022-.124l-.003-.169zm.52.181l-.275.004-.002-.113.275-.005.002.114zm.585-.057a.354.354 0 01-.057.226c-.04.053-.099.08-.177.082-.078.001-.137-.023-.179-.074a.35.35 0 01-.067-.218l-.002-.131c-.002-.099.017-.175.057-.227.04-.053.099-.079.177-.081.077-.001.137.023.179.074a.35.35 0 01.067.218l.002.131zm-.143-.141a.262.262 0 00-.027-.128.08.08 0 00-.076-.039c-.033 0-.058.013-.073.039a.249.249 0 00-.023.121l.003.172c.001.058.01.101.026.129.016.028.042.042.077.041.034-.001.059-.015.074-.042a.267.267 0 00.022-.124l-.003-.169zm.657.158l.08-.001.002.113-.08.002.002.154-.141.002-.002-.154-.292.005-.008-.088.288-.474.143-.002.008.443zm-.299.005l.158-.002-.005-.251-.009.016-.144.237zm.475-.09l.035-.362.398-.007.002.117-.283.005-.015.154a.215.215 0 01.107-.029.205.205 0 01.16.06c.039.041.06.1.061.175a.254.254 0 01-.027.124.206.206 0 01-.082.086.254.254 0 01-.127.032.269.269 0 01-.12-.024.198.198 0 01-.124-.179l.139-.003c.004.03.014.053.032.069a.097.097 0 00.07.023.087.087 0 00.074-.035.171.171 0 00.024-.098c-.001-.041-.011-.071-.032-.092-.02-.022-.048-.032-.085-.031a.12.12 0 00-.081.028l-.013.013-.113-.026zm.884.05a.18.18 0 01-.128.056.19.19 0 01-.152-.062.255.255 0 01-.059-.174.264.264 0 01.028-.128.218.218 0 01.083-.092.235.235 0 01.123-.035.219.219 0 01.125.033.234.234 0 01.087.099.377.377 0 01.034.151l.001.052a.412.412 0 01-.084.281.332.332 0 01-.248.112l-.035.002-.002-.118.031-.001c.123-.008.188-.067.196-.176zm-.095-.052a.1.1 0 00.058-.019.115.115 0 00.037-.043l-.001-.058a.193.193 0 00-.029-.111.084.084 0 00-.074-.038c-.028 0-.051.014-.069.04a.167.167 0 00-.026.098c.001.038.01.07.028.095a.092.092 0 00.076.036z"
                    ></path>
                    <g id="resume">
                        <path
                        id="analyzing-resume"
                        fill="#6B6A6A"
                        d="M308.871 326.66l-.257.004-.046.148-.156.002.252-.715.136-.003.279.707-.156.002-.052-.145zm-.219-.115l.177-.003-.094-.265-.083.268zm.581-.273l.005.06a.186.186 0 01.151-.073c.056-.001.098.015.126.047.028.033.043.081.044.147l.006.341-.141.003-.006-.338c0-.03-.007-.052-.02-.065-.014-.013-.035-.02-.066-.019a.096.096 0 00-.088.052l.006.373-.141.002-.009-.528.133-.002zm.746.515a.144.144 0 01-.015-.047.174.174 0 01-.132.059.19.19 0 01-.13-.042.148.148 0 01-.053-.113.15.15 0 01.06-.13.308.308 0 01.179-.048l.065-.001v-.031a.088.088 0 00-.02-.058c-.013-.014-.033-.021-.06-.021a.082.082 0 00-.056.018.06.06 0 00-.019.047l-.141.003a.137.137 0 01.027-.086.185.185 0 01.079-.062.286.286 0 01.116-.025.228.228 0 01.155.047.17.17 0 01.06.137l.004.229c.001.05.009.088.023.113v.008l-.142.003zm-.119-.096a.128.128 0 00.058-.015.093.093 0 00.038-.038l-.001-.091-.053.001c-.071.001-.108.026-.112.075v.008a.06.06 0 00.019.044c.013.011.03.016.051.016zm.498.089l-.142.003-.013-.75.142-.003.013.75zm.31-.205l.092-.33.151-.003-.201.614-.012.028c-.03.07-.081.105-.154.106a.198.198 0 01-.063-.008l-.002-.107h.022c.027 0 .046-.004.059-.013a.074.074 0 00.031-.041l.016-.044-.195-.526.152-.003.104.327zm.468.078l.259-.005.002.114-.439.008-.001-.086.242-.333-.241.005-.002-.115.424-.007.001.083-.245.336zm.498.105l-.142.002-.009-.528.142-.002.009.528zm-.162-.662c0-.022.007-.039.02-.053a.084.084 0 01.058-.022c.024 0 .044.007.058.02a.07.07 0 01.023.052.07.07 0 01-.022.053.076.076 0 01-.056.021.08.08 0 01-.058-.019.07.07 0 01-.023-.052zm.399.129l.006.061a.183.183 0 01.15-.073c.056-.001.098.015.126.047.028.032.043.081.045.147l.006.341-.142.002-.005-.337c-.001-.03-.008-.052-.021-.065-.013-.013-.035-.02-.065-.019-.04 0-.07.018-.089.052l.007.372-.141.003-.01-.528.133-.003zm.415.253a.302.302 0 01.054-.196.185.185 0 01.155-.077.164.164 0 01.136.057l.005-.05.128-.002.009.51a.221.221 0 01-.03.122.197.197 0 01-.087.079.303.303 0 01-.133.029.281.281 0 01-.114-.021.2.2 0 01-.084-.058l.061-.087a.165.165 0 00.129.057.126.126 0 00.087-.032c.02-.02.03-.049.029-.086v-.028a.16.16 0 01-.127.057.184.184 0 01-.156-.071.31.31 0 01-.062-.197v-.006zm.141.008a.191.191 0 00.031.112c.02.027.046.04.08.04.043-.001.073-.018.091-.05l-.004-.222c-.019-.032-.05-.048-.092-.047a.09.09 0 00-.079.043.214.214 0 00-.027.124zm.972-.019l-.117.002.005.26-.147.003-.012-.711.264-.005c.084-.001.149.016.195.053.047.036.07.089.072.157 0 .049-.009.09-.03.122a.212.212 0 01-.094.079l.159.288v.007l-.157.003-.138-.258zm-.119-.117l.118-.002c.037-.001.066-.01.085-.029a.1.1 0 00.029-.078c0-.034-.01-.06-.03-.079-.019-.019-.048-.028-.088-.027l-.117.002.003.213zm.733.376a.262.262 0 01-.191-.068.257.257 0 01-.076-.189v-.013a.33.33 0 01.028-.143.229.229 0 01.214-.134.214.214 0 01.171.065c.043.045.065.109.066.193l.001.057-.336.006a.123.123 0 00.13.112.152.152 0 00.127-.061l.07.076a.205.205 0 01-.084.072.293.293 0 01-.12.027zm-.024-.433a.09.09 0 00-.068.029.154.154 0 00-.031.082l.196-.004v-.011a.102.102 0 00-.027-.072c-.016-.017-.04-.025-.07-.024zm.605.267c0-.017-.009-.031-.026-.04a.275.275 0 00-.083-.025c-.126-.025-.19-.077-.191-.157a.144.144 0 01.056-.118.23.23 0 01.152-.05.244.244 0 01.161.044.15.15 0 01.063.122l-.141.003a.067.067 0 00-.02-.05c-.014-.013-.034-.019-.062-.019-.024.001-.042.006-.055.017a.052.052 0 00-.019.042.045.045 0 00.023.037.25.25 0 00.076.024.502.502 0 01.089.022c.075.026.113.072.114.14a.138.138 0 01-.06.118.268.268 0 01-.159.047.284.284 0 01-.119-.021.2.2 0 01-.081-.064.147.147 0 01-.031-.088l.134-.003a.072.072 0 00.028.057.11.11 0 00.07.019.103.103 0 00.061-.016c.014-.011.021-.024.02-.041zm.547.083a.177.177 0 01-.144.066c-.056.001-.1-.015-.13-.047-.031-.032-.047-.079-.048-.142l-.006-.346.141-.003.006.342c.001.055.026.082.076.081.048-.001.081-.018.098-.052l-.007-.374.142-.002.009.528-.132.002-.005-.053zm.367-.481l.005.059a.185.185 0 01.151-.072c.068-.001.115.025.141.078a.183.183 0 01.158-.083c.057-.001.1.015.128.048.029.033.044.083.045.15l.006.337-.142.003-.006-.337c0-.03-.006-.052-.018-.065-.012-.014-.033-.021-.063-.02-.042 0-.071.021-.086.062l.006.362-.141.003-.006-.336c0-.031-.007-.053-.019-.067-.012-.013-.033-.019-.062-.019a.093.093 0 00-.086.051l.007.374-.141.002-.01-.528.133-.002zm.986.521a.267.267 0 01-.191-.068.259.259 0 01-.076-.189v-.014a.325.325 0 01.028-.142.223.223 0 01.086-.098.24.24 0 01.128-.037.218.218 0 01.171.066c.043.044.065.109.066.192l.001.058-.336.006a.13.13 0 00.042.082c.024.02.053.03.088.03a.153.153 0 00.127-.062l.07.077a.212.212 0 01-.084.072.293.293 0 01-.12.027zm-.024-.434a.09.09 0 00-.067.03.143.143 0 00-.032.082l.196-.004v-.011a.102.102 0 00-.027-.072c-.016-.017-.04-.025-.07-.025zm.328.349a.072.072 0 01.021-.055.086.086 0 01.057-.022c.023 0 .042.006.058.02a.071.071 0 01.023.054.067.067 0 01-.021.055.086.086 0 01-.057.022.087.087 0 01-.058-.02.071.071 0 01-.023-.054zm.291-.005a.072.072 0 01.021-.055.081.081 0 01.057-.022c.023 0 .042.006.058.02a.071.071 0 01.023.054.068.068 0 01-.021.055.08.08 0 01-.057.021.081.081 0 01-.058-.019.071.071 0 01-.023-.054zm.291-.005a.072.072 0 01.021-.055.081.081 0 01.057-.022c.023 0 .042.006.058.02a.071.071 0 01.023.054.068.068 0 01-.021.055.08.08 0 01-.057.021.081.081 0 01-.058-.019.071.071 0 01-.023-.054z"
                        ></path>
                        <path
                        id="Rectangle 703"
                        fill="#C4C4C4"
                        d="M291.575 325.822a.3.3 0 01.293-.305l12.096-.253a.3.3 0 01.306.295l.022 1.298a.3.3 0 01-.294.305l-12.095.253a.3.3 0 01-.306-.295l-.022-1.298z"
                        ></path>
                        <path
                        id="loader"
                        fill="#3FA4DC"
                        fillRule="evenodd"
                        d="M305.406 325.271a.758.758 0 00-.308.492l.374.063a.378.378 0 11.748.125l.374.063a.754.754 0 00-.623-.874.758.758 0 00-.565.131z"
                        clipRule="evenodd"
                        ></path>
                        <path
                        id="complete"
                        fill="#6FF51D"
                        d="M306.218 325.46l.108.144-.429.612-.001-.001-.001.001-.315-.418.103-.147.208.276.327-.467z"
                        ></path>
                        <path
                        id="Success"
                        fill="#6C6C6C"
                        d="M308.409 326.628c-.001-.028-.011-.049-.031-.063a.343.343 0 00-.106-.045.73.73 0 01-.121-.047c-.082-.042-.123-.1-.124-.174a.169.169 0 01.03-.103.204.204 0 01.092-.072.347.347 0 01.136-.028.319.319 0 01.137.025c.04.018.071.043.093.076a.195.195 0 01.035.114l-.146.002a.097.097 0 00-.032-.075c-.021-.018-.05-.026-.087-.026a.132.132 0 00-.083.025.07.07 0 00-.029.06c0 .023.012.042.036.057a.36.36 0 00.104.043.427.427 0 01.183.09.184.184 0 01.06.137.175.175 0 01-.067.147.311.311 0 01-.188.055.363.363 0 01-.149-.027.21.21 0 01-.142-.201l.147-.003c.001.079.049.117.142.115a.14.14 0 00.082-.022.072.072 0 00.028-.06zm.556.123a.177.177 0 01-.144.066c-.056.001-.1-.015-.13-.047s-.046-.079-.048-.142l-.006-.346.141-.002.006.341c.001.055.026.082.076.081.048-.001.081-.018.098-.052l-.006-.374.141-.002.009.528-.132.003-.005-.054zm.462-.058a.093.093 0 00.063-.023.075.075 0 00.024-.058l.133-.002a.18.18 0 01-.028.099.198.198 0 01-.078.071.235.235 0 01-.11.026.229.229 0 01-.18-.068.293.293 0 01-.069-.198v-.01a.283.283 0 01.062-.196.225.225 0 01.177-.075.215.215 0 01.159.053.2.2 0 01.064.149l-.132.002a.09.09 0 00-.027-.065.082.082 0 00-.065-.025.085.085 0 00-.074.037c-.016.024-.024.063-.023.117l.001.015c0 .054.009.093.026.116.017.024.043.035.077.035zm.521-.01a.093.093 0 00.063-.022.08.08 0 00.025-.058l.132-.002a.189.189 0 01-.105.17.251.251 0 01-.11.026.23.23 0 01-.18-.068.284.284 0 01-.069-.199v-.009a.283.283 0 01.061-.196.232.232 0 01.177-.076.224.224 0 01.16.054.2.2 0 01.063.149l-.132.002a.098.098 0 00-.026-.066.084.084 0 00-.065-.024.084.084 0 00-.074.037c-.017.024-.024.063-.023.117v.014c.001.055.01.094.027.117.017.024.042.035.076.034zm.547.105a.267.267 0 01-.191-.068.259.259 0 01-.076-.189v-.014a.325.325 0 01.028-.142.217.217 0 01.086-.098.24.24 0 01.128-.037.218.218 0 01.171.066c.043.044.065.109.066.192l.001.058-.336.006a.13.13 0 00.042.082c.024.02.053.03.088.03a.153.153 0 00.127-.062l.07.077a.22.22 0 01-.084.072.293.293 0 01-.12.027zm-.024-.434a.094.094 0 00-.068.03.15.15 0 00-.031.082l.196-.004v-.011a.102.102 0 00-.027-.072c-.016-.017-.04-.025-.07-.025zm.605.268c0-.018-.009-.031-.026-.04a.28.28 0 00-.083-.026c-.126-.024-.19-.076-.191-.157a.146.146 0 01.056-.118.235.235 0 01.152-.05.25.25 0 01.161.045.149.149 0 01.063.122l-.141.002a.065.065 0 00-.02-.049c-.014-.013-.034-.02-.062-.019a.082.082 0 00-.055.017.052.052 0 00-.019.041.046.046 0 00.023.038c.015.009.04.017.076.023a.771.771 0 01.089.022c.075.026.113.073.114.14a.138.138 0 01-.06.119.27.27 0 01-.159.047.284.284 0 01-.119-.021.208.208 0 01-.081-.064.148.148 0 01-.031-.089l.134-.002a.072.072 0 00.028.057.116.116 0 00.07.019.111.111 0 00.061-.016.05.05 0 00.02-.041zm.515-.009a.044.044 0 00-.027-.04.262.262 0 00-.082-.026c-.126-.024-.19-.076-.192-.157 0-.046.018-.086.056-.118a.24.24 0 01.152-.05.255.255 0 01.162.045.149.149 0 01.063.122l-.142.002a.065.065 0 00-.02-.049c-.013-.013-.034-.02-.061-.019a.082.082 0 00-.055.017.052.052 0 00-.019.041c0 .016.008.028.023.038a.23.23 0 00.075.023.793.793 0 01.09.022c.075.026.113.073.114.14a.138.138 0 01-.06.119.27.27 0 01-.159.047.281.281 0 01-.119-.021.212.212 0 01-.082-.064.155.155 0 01-.031-.089l.134-.002a.076.076 0 00.029.057.116.116 0 00.07.019c.027-.001.047-.006.06-.016a.05.05 0 00.021-.041zm.37-.079l-.117.002-.025-.492.15-.003-.008.493zm-.057.078a.08.08 0 01.058.02.074.074 0 01.023.053c0 .022-.007.04-.021.054a.078.078 0 01-.057.022.08.08 0 01-.058-.02.072.072 0 01-.022-.053c0-.021.006-.039.021-.053a.078.078 0 01.056-.023z"
                        ></path>
                        <path
                        id="resume-name"
                        fill="#535353"
                        d="M292.5 326.946l-.256.005-.047.147-.155.003.252-.716.136-.002.278.706-.156.003-.052-.146zm-.219-.115l.178-.003-.094-.264-.084.267zm.458-.011a.313.313 0 01.051-.197.18.18 0 01.151-.076.16.16 0 01.128.055l-.004-.269.141-.003.013.75-.127.002-.008-.056a.165.165 0 01-.135.069.182.182 0 01-.151-.071.33.33 0 01-.059-.204zm.141.008c.001.05.01.087.028.113.017.027.043.039.076.039.043-.001.074-.02.091-.057l-.004-.209c-.018-.036-.049-.054-.092-.053-.068.001-.101.057-.099.167zm.755.245a.144.144 0 01-.015-.047.175.175 0 01-.133.059.188.188 0 01-.129-.042.145.145 0 01-.053-.113.15.15 0 01.06-.13.308.308 0 01.179-.048l.065-.002v-.03a.089.089 0 00-.021-.058c-.012-.014-.032-.021-.059-.021a.082.082 0 00-.056.018.06.06 0 00-.019.047l-.141.003a.137.137 0 01.027-.086.179.179 0 01.079-.062.285.285 0 01.115-.025.23.23 0 01.156.047.17.17 0 01.06.137l.004.229c.001.05.009.088.023.113v.008l-.142.003zm-.119-.096a.142.142 0 00.058-.015.093.093 0 00.038-.038l-.002-.091-.052.001c-.071.001-.108.026-.112.075v.008a.06.06 0 00.019.044c.013.011.03.016.051.016zm.472-.439l.005.059a.187.187 0 01.151-.071c.068-.001.115.025.141.078a.182.182 0 01.158-.083c.057-.001.1.015.128.048.029.032.044.082.045.149l.006.338-.142.002-.006-.337c0-.03-.006-.051-.018-.065-.012-.014-.033-.02-.063-.02-.042.001-.071.022-.087.062l.007.363-.141.002-.006-.336c0-.031-.007-.053-.019-.066-.012-.013-.033-.02-.062-.019a.09.09 0 00-.086.051l.007.373-.141.003-.01-.528.133-.003zm1.136.619l-.445.008-.002-.11.445-.008.002.11zm.241-.825l.192.512.172-.519.193-.003.012.711-.147.002-.003-.194.009-.336-.183.533-.101.002-.2-.526.02.335.004.194-.147.003-.012-.711.191-.003zm.994.693a.137.137 0 01-.015-.047.171.171 0 01-.132.06.196.196 0 01-.13-.043.147.147 0 01-.053-.113.148.148 0 01.06-.129.308.308 0 01.179-.049l.065-.001v-.03a.091.091 0 00-.02-.059c-.013-.014-.033-.021-.06-.021a.093.093 0 00-.056.018.062.062 0 00-.019.048l-.141.002a.14.14 0 01.027-.085.186.186 0 01.079-.063.304.304 0 01.116-.024.228.228 0 01.155.046.172.172 0 01.06.137l.004.229c.002.05.009.088.023.113v.009l-.142.002zm-.119-.096c.021 0 .04-.005.058-.015a.087.087 0 00.038-.038l-.001-.091-.053.001c-.071.001-.108.027-.112.075v.009c0 .017.007.032.019.043.013.011.03.016.051.016zm.506-.569l.003.13.09-.002.002.104-.091.001.005.264c0 .02.004.034.012.042s.022.012.043.012a.25.25 0 00.042-.004l.001.107a.303.303 0 01-.085.014c-.099.002-.15-.048-.154-.147l-.005-.285-.077.001-.002-.103.077-.002-.002-.129.141-.003zm.31.182a.178.178 0 01.14-.07c.115-.002.174.064.178.197l.006.338-.141.003-.006-.335c-.001-.03-.008-.052-.021-.066-.013-.015-.035-.022-.065-.021-.042.001-.071.017-.089.049l.006.376-.141.002-.013-.75.141-.002.005.279zm.579.461l-.142.002-.009-.528.142-.002.009.528zm-.161-.662a.067.067 0 01.02-.053.082.082 0 01.057-.022c.024 0 .044.006.058.02a.07.07 0 01.023.052.072.072 0 01-.021.053.077.077 0 01-.057.021.08.08 0 01-.058-.019.067.067 0 01-.022-.052zm.521.665a.258.258 0 01-.191-.068.255.255 0 01-.076-.188v-.014a.33.33 0 01.028-.143.229.229 0 01.214-.134.218.218 0 01.171.065c.043.045.065.109.066.193l.001.058-.336.005a.133.133 0 00.042.083c.024.02.053.03.088.029a.152.152 0 00.127-.061l.07.077a.203.203 0 01-.084.071.265.265 0 01-.12.027zm-.024-.433a.09.09 0 00-.068.03.15.15 0 00-.031.081l.196-.003v-.011c-.001-.032-.01-.056-.027-.072-.016-.017-.04-.025-.07-.025zm.605.267c0-.017-.009-.03-.026-.04a.275.275 0 00-.083-.025c-.126-.024-.19-.077-.191-.157a.144.144 0 01.056-.118.235.235 0 01.152-.05.256.256 0 01.161.044.15.15 0 01.063.122l-.141.003a.069.069 0 00-.02-.05c-.014-.013-.034-.019-.062-.019a.095.095 0 00-.055.017.052.052 0 00-.019.042.048.048 0 00.023.038c.015.009.04.017.076.023a.608.608 0 01.089.022c.075.026.113.073.114.14a.137.137 0 01-.06.118.268.268 0 01-.159.048.3.3 0 01-.119-.022.198.198 0 01-.081-.063.15.15 0 01-.031-.089l.134-.002a.072.072 0 00.028.057.11.11 0 00.07.018c.027 0 .047-.005.061-.016a.045.045 0 00.02-.041zm.205-.126a.317.317 0 01.027-.141.225.225 0 01.086-.097.254.254 0 01.131-.036c.072-.001.13.02.176.063a.263.263 0 01.079.176l.001.036a.277.277 0 01-.064.197.239.239 0 01-.181.076.239.239 0 01-.184-.07.28.28 0 01-.071-.198v-.006zm.141.008c.001.05.011.088.03.114.02.026.047.039.082.038a.092.092 0 00.079-.04c.019-.027.028-.069.027-.127a.19.19 0 00-.031-.113.093.093 0 00-.082-.039.089.089 0 00-.079.042.22.22 0 00-.026.125zm.571-.28l.006.061a.187.187 0 01.15-.074c.056-.001.098.015.126.048.028.032.043.081.045.146l.006.342-.141.002-.006-.338c-.001-.03-.008-.051-.021-.064-.013-.014-.035-.02-.065-.02a.098.098 0 00-.089.053l.007.372-.141.002-.01-.528.133-.002zm.833.624l-.445.008-.002-.11.445-.008.002.11zm.321-.376l-.117.002.005.26-.146.003-.013-.711.264-.005a.303.303 0 01.196.053.197.197 0 01.071.157c0 .049-.009.09-.03.123a.217.217 0 01-.094.078l.159.288v.007l-.157.003-.138-.258zm-.119-.117l.119-.002c.036 0 .065-.01.084-.029a.098.098 0 00.029-.078c0-.034-.01-.06-.03-.079-.019-.019-.048-.028-.088-.027l-.117.002.003.213zm.733.376a.258.258 0 01-.191-.068.255.255 0 01-.076-.188v-.014a.33.33 0 01.028-.143.229.229 0 01.214-.134.218.218 0 01.172.065.277.277 0 01.065.193l.001.057-.336.006a.133.133 0 00.042.083c.024.02.053.03.088.029a.152.152 0 00.127-.061l.071.076a.207.207 0 01-.085.072.293.293 0 01-.12.027zm-.024-.433c-.028 0-.05.01-.067.029a.15.15 0 00-.032.082l.196-.003v-.012c-.001-.031-.01-.055-.027-.071a.089.089 0 00-.07-.025zm.605.267c0-.017-.009-.03-.026-.04a.275.275 0 00-.083-.025c-.126-.024-.19-.077-.191-.157a.144.144 0 01.056-.118.232.232 0 01.152-.05.25.25 0 01.161.044.15.15 0 01.063.122l-.141.003a.067.067 0 00-.02-.05c-.014-.013-.034-.019-.062-.019a.09.09 0 00-.055.017.051.051 0 00-.018.042c0 .015.007.028.022.037.015.01.041.017.076.024a.502.502 0 01.089.022c.075.026.113.073.114.14a.137.137 0 01-.06.118.259.259 0 01-.159.047.276.276 0 01-.118-.021.194.194 0 01-.082-.063.157.157 0 01-.031-.089l.134-.003c.002.025.011.044.029.057a.1.1 0 00.069.019.101.101 0 00.061-.016c.014-.011.021-.024.02-.041zm.547.083a.177.177 0 01-.144.066c-.056.001-.1-.015-.13-.047-.031-.032-.047-.079-.048-.142l-.006-.346.141-.002.006.341c.001.055.026.082.076.081.048-.001.081-.018.098-.052l-.006-.374.141-.002.009.528-.132.003-.005-.054zm.367-.481l.005.059a.185.185 0 01.151-.072c.068-.001.115.025.141.078a.183.183 0 01.158-.083c.057-.001.1.015.129.048.028.033.043.083.044.15l.006.337-.142.003-.005-.337c-.001-.03-.007-.052-.019-.065-.012-.014-.033-.021-.063-.02-.042 0-.071.021-.086.062l.006.363-.141.002-.005-.336c-.001-.031-.007-.053-.02-.066-.012-.014-.033-.02-.062-.02a.093.093 0 00-.086.051l.007.374-.141.002-.009-.528.132-.002zm.986.521a.263.263 0 01-.19-.068.256.256 0 01-.077-.189v-.014a.311.311 0 01.029-.142.22.22 0 01.085-.098.24.24 0 01.128-.037.222.222 0 01.172.066.274.274 0 01.065.192l.001.058-.336.006a.127.127 0 00.043.082c.023.021.052.03.087.03a.155.155 0 00.127-.061l.071.076a.223.223 0 01-.085.072.293.293 0 01-.12.027zm-.023-.433a.088.088 0 00-.068.029.143.143 0 00-.032.082l.196-.004v-.011a.102.102 0 00-.027-.072c-.016-.017-.04-.025-.069-.024z"
                        ></path>
                        <path
                        id="attach-resume"
                        fill="#535353"
                        d="M293.541 326.909l-.276.005-.055.166-.128.003.256-.716.111-.002.281.706-.128.002-.061-.164zm-.243-.095l.206-.004-.108-.293-.098.297zm.958-.363l-.222.003.011.612-.123.002-.01-.611-.22.003-.002-.099.564-.01.002.1zm.615-.011l-.222.004.011.611-.123.002-.01-.611-.22.004-.002-.1.564-.01.002.1zm.441.438l-.276.005-.054.166-.129.003.256-.716.111-.002.282.706-.129.002-.061-.164zm-.243-.095l.206-.004-.108-.293-.098.297zm1.041.015a.257.257 0 01-.081.179.284.284 0 01-.193.067.28.28 0 01-.151-.037.27.27 0 01-.101-.113.404.404 0 01-.04-.172l-.001-.066a.416.416 0 01.032-.178.264.264 0 01.1-.12.283.283 0 01.154-.044.268.268 0 01.19.06.266.266 0 01.087.179l-.123.003c-.007-.051-.022-.088-.047-.11-.024-.022-.059-.033-.105-.032a.144.144 0 00-.123.061.291.291 0 00-.041.173l.001.063a.31.31 0 00.044.175.14.14 0 00.122.059c.048-.001.085-.013.109-.035.024-.022.039-.059.044-.11l.123-.002zm.68.22l-.124.002-.005-.316-.318.006.006.315-.124.003-.012-.711.123-.002.005.295.318-.005-.005-.296.123-.002.013.711zm.651-.286l-.137.003.004.274-.123.002-.012-.711.249-.004a.288.288 0 01.191.051c.046.036.069.089.07.159a.197.197 0 01-.127.195l.165.294v.006l-.132.003-.148-.272zm-.139-.096l.127-.003a.134.134 0 00.097-.033.112.112 0 00.034-.087c-.001-.038-.012-.067-.035-.087-.021-.021-.054-.031-.097-.031l-.13.002.004.239zm.917.039l-.292.005.004.219.341-.006.002.099-.465.008-.013-.711.462-.008.002.1-.338.005.003.197.292-.005.002.097zm.524.125c-.001-.031-.012-.055-.035-.071a.398.398 0 00-.119-.05.54.54 0 01-.138-.055c-.066-.039-.099-.092-.1-.157a.174.174 0 01.067-.143.283.283 0 01.181-.059.313.313 0 01.133.025.22.22 0 01.093.077c.023.033.034.07.035.111l-.123.002a.11.11 0 00-.037-.086c-.023-.021-.057-.031-.1-.03a.161.161 0 00-.094.027.091.091 0 00-.032.073.08.08 0 00.038.065.42.42 0 00.12.049c.055.015.1.033.134.053a.215.215 0 01.075.071.194.194 0 01.025.095.17.17 0 01-.066.143.29.29 0 01-.183.055.353.353 0 01-.143-.025.253.253 0 01-.102-.078.201.201 0 01-.038-.116l.124-.002c.001.04.014.071.042.093a.177.177 0 00.115.031c.043-.001.075-.01.096-.028a.085.085 0 00.032-.07zm.742-.541l.008.475a.227.227 0 01-.069.181.278.278 0 01-.192.07.279.279 0 01-.195-.062.238.238 0 01-.075-.18l-.008-.474.123-.002.008.475c.001.048.014.084.038.108.025.025.061.037.107.036.095-.002.142-.053.14-.153l-.008-.471.123-.003zm.293-.005l.214.542.195-.549.16-.003.012.711-.123.002-.004-.234.007-.314-.2.552-.089.001-.219-.543.018.312.004.235-.123.002-.013-.711.161-.003zm1.138.374l-.292.005.004.219.341-.006.002.099-.465.008-.013-.711.462-.008.001.099-.337.006.003.197.292-.006.002.098zm.178.375l-.093.002.266-.777.093-.001-.266.776zm.911-.308a.257.257 0 01-.081.179.287.287 0 01-.194.067.288.288 0 01-.15-.037.267.267 0 01-.102-.113.419.419 0 01-.039-.172l-.002-.067a.411.411 0 01.033-.177.264.264 0 01.1-.12.28.28 0 01.153-.044.27.27 0 01.191.06.27.27 0 01.087.179l-.123.002c-.007-.051-.023-.087-.047-.109-.024-.022-.06-.033-.106-.032a.144.144 0 00-.123.061.297.297 0 00-.041.173l.001.063a.319.319 0 00.044.175.14.14 0 00.123.058c.048 0 .084-.012.108-.034.024-.022.039-.059.045-.11l.123-.002zm.362.07l.171-.559.136-.002-.243.715-.12.002-.267-.706.135-.003.188.553z"
                        ></path>
                    </g>
                    <path
                        id="app-header"
                        fill="#404040"
                        d="M278.452 312.618l-.129.143.011.371-.145.005-.031-1.098.144-.004.016.543.469-.557.175-.005-.416.497.481.599-.173.005-.402-.499zm.855.486l-.144.004-.031-1.097.144-.004.031 1.097zm.652-.463l-.256.007.013.445-.145.004-.032-1.098.362-.01a.425.425 0 01.286.076c.068.054.104.135.107.243a.293.293 0 01-.051.18.327.327 0 01-.149.118l.27.459v.009l-.155.004-.25-.437zm-.26-.111l.222-.006a.247.247 0 00.168-.061.186.186 0 00.06-.151c-.002-.068-.024-.119-.065-.154s-.1-.052-.176-.05l-.221.006.012.416zm1.082.021l-.129.143.01.371-.144.004-.031-1.097.144-.004.015.542.47-.556.174-.005-.416.497.482.599-.173.005-.402-.499zm.842.368l.518-.015.003.119-.662.019-.032-1.098.145-.004.028.979zm1.296-.206l-.458.014-.095.289-.148.004.385-1.109.126-.004.45 1.086-.148.004-.112-.284zm-.418-.107l.371-.01-.2-.508-.171.518zm1.665.358l-.145.004-.575-.83.025.846-.145.004-.032-1.097.145-.004.576.833-.024-.849.143-.004.032 1.097zm.255-.007l-.031-1.098.308-.009a.503.503 0 01.254.056.434.434 0 01.174.176.592.592 0 01.069.266l.002.07a.584.584 0 01-.053.274.418.418 0 01-.165.185.532.532 0 01-.255.071l-.303.009zm.116-.983l.025.86.152-.004a.325.325 0 00.255-.111.425.425 0 00.085-.299l-.002-.065a.428.428 0 00-.096-.287.31.31 0 00-.251-.099l-.168.005zm.796 1.175l-.08-.052a.364.364 0 00.068-.205l-.004-.126.136-.004.003.109a.36.36 0 01-.033.154.343.343 0 01-.09.124zm.929-.591l.025.144.027-.132.194-.772.121-.003.233.76.034.131.019-.148.148-.756.145-.004-.233 1.105-.132.004-.248-.793-.019-.083-.015.084-.211.806-.131.004-.296-1.09.145-.004.194.747zm1.7.01l-.458.013-.094.29-.149.004.386-1.11.126-.003.449 1.085-.147.005-.113-.284zm-.418-.107l.372-.011-.201-.508-.171.519zm1.215.465l-.119.004.422-1.205.118-.004-.421 1.205zm1.314-.622a.682.682 0 01-.274-.123.256.256 0 01-.09-.191.268.268 0 01.097-.217.417.417 0 01.266-.093.456.456 0 01.202.038c.06.028.106.067.14.117a.3.3 0 01.053.167l-.144.004a.2.2 0 00-.068-.154.256.256 0 00-.179-.053.27.27 0 00-.166.053.156.156 0 00-.055.132.142.142 0 00.059.112c.039.03.104.056.196.079a.866.866 0 01.215.079.277.277 0 01.159.249.258.258 0 01-.097.217.443.443 0 01-.275.088.513.513 0 01-.211-.037.352.352 0 01-.154-.115.29.29 0 01-.058-.169l.145-.005a.192.192 0 00.077.156c.05.037.116.054.198.052a.287.287 0 00.173-.052.151.151 0 00.057-.129.145.145 0 00-.06-.123.629.629 0 00-.206-.082zm1.43-.065a.676.676 0 01-.046.283.412.412 0 01-.148.188.416.416 0 01-.229.07.41.41 0 01-.391-.234.656.656 0 01-.064-.272l-.003-.079a.675.675 0 01.047-.281.415.415 0 01.149-.19.422.422 0 01.228-.072.41.41 0 01.393.238.687.687 0 01.062.28l.002.069zm-.145-.067a.495.495 0 00-.087-.297.256.256 0 00-.221-.098.254.254 0 00-.213.111.483.483 0 00-.072.291l.003.081a.493.493 0 00.087.296c.055.07.129.104.221.101a.26.26 0 00.214-.108.494.494 0 00.07-.295l-.002-.082zm.964.072l-.458.013.014.485-.144.004-.032-1.098.677-.019.003.119-.532.015.01.376.459-.013.003.118zm1.003-.523l-.351.01.028.979-.144.004-.028-.979-.35.01-.003-.119.844-.024.004.119zm.428.621l.025.144.027-.132.194-.772.121-.003.233.76.034.131.019-.148.148-.756.145-.004-.233 1.105-.132.004-.248-.793-.019-.083-.015.084-.211.806-.131.004-.296-1.09.144-.004.195.747zm1.7.01l-.458.013-.094.29-.149.004.386-1.11.126-.003.449 1.085-.148.005-.112-.284zm-.418-.107l.372-.011-.201-.508-.171.519zm1.213-.073l-.256.007.012.444-.144.004-.032-1.097.362-.011a.43.43 0 01.286.076c.068.055.103.136.107.243a.294.294 0 01-.051.181.331.331 0 01-.15.118l.27.458.001.009-.155.005-.25-.437zm-.26-.111l.222-.007a.248.248 0 00.168-.06.188.188 0 00.06-.152.2.2 0 00-.065-.154.255.255 0 00-.176-.05l-.221.006.012.417zm1.422.014l-.473.013.011.389.55-.015.003.118-.694.02-.031-1.098.686-.02.004.12-.543.015.01.353.474-.014.003.119zm.66.583l-.119.003.422-1.205.119-.003-.422 1.205zm1.595-.626l-.459.014.014.484-.144.004-.031-1.097.676-.02.004.119-.533.016.011.375.458-.013.004.118zm.998-.642l.021.747a.344.344 0 01-.09.256.387.387 0 01-.258.119l-.038.002a.405.405 0 01-.289-.089.345.345 0 01-.115-.264l-.022-.748.143-.004.021.743c.002.08.026.141.071.184.044.042.107.062.188.06.081-.002.143-.026.185-.071a.253.253 0 00.06-.187l-.022-.744.145-.004zm.4.969l.518-.015.003.118-.662.019-.032-1.097.145-.005.028.98zm.827-.024l.518-.015.003.118-.662.019-.032-1.097.145-.004.028.979zm1.763-.912l-.351.01.028.979-.143.004-.028-.979-.351.011-.003-.12.845-.024.003.119zm.345.97l-.144.004-.032-1.098.144-.004.032 1.098zm.419-1.111l.383.885.331-.906.187-.005.031 1.098-.144.004-.012-.428v-.461l-.333.899-.11.003-.384-.876.028.458.012.428-.144.004-.031-1.098.186-.005zm1.79.539l-.474.014.011.389.55-.016.004.118-.694.02-.032-1.097.687-.02.003.119-.542.016.01.352.473-.013.004.118zm-27.333-3.135l.248-.009.048 1.332a.554.554 0 01-.147.428.596.596 0 01-.424.168c-.186.007-.333-.036-.44-.128a.52.52 0 01-.17-.396l.247-.009a.35.35 0 00.096.249c.062.058.148.085.26.081a.327.327 0 00.243-.105.378.378 0 00.087-.275l-.048-1.336zm1.553 1.689c-.089.113-.223.173-.402.179-.148.005-.263-.034-.344-.117-.081-.084-.124-.211-.131-.381l-.032-.909.238-.009.032.903c.007.212.097.315.268.309.182-.007.3-.079.356-.217l-.037-1.017.238-.009.05 1.398-.226.009-.01-.139zm.774-1.289l.014.176a.509.509 0 01.409-.217c.294-.01.449.151.463.485l.033.923-.238.009-.033-.925c-.004-.101-.03-.175-.077-.221-.047-.047-.117-.069-.212-.065a.343.343 0 00-.201.069.42.42 0 00-.131.168l.036.996-.238.008-.05-1.398.225-.008zm1.536 1.345l-.238.009-.049-1.398.237-.009.05 1.398zm-.32-1.759a.15.15 0 01.031-.1c.023-.027.058-.042.104-.044.047-.001.082.011.107.037a.145.145 0 01.04.097.14.14 0 01-.033.098.137.137 0 01-.104.042c-.046.002-.082-.01-.107-.035a.138.138 0 01-.038-.095zm.614 1.036a.834.834 0 01.066-.372.607.607 0 01.215-.262.615.615 0 01.325-.101.586.586 0 01.466.182c.122.127.187.301.195.519v.017a.842.842 0 01-.065.37.6.6 0 01-.213.26.607.607 0 01-.329.102.586.586 0 01-.466-.181c-.121-.128-.186-.3-.194-.517v-.017zm.24.02a.607.607 0 00.12.369.344.344 0 00.293.131.342.342 0 00.283-.152c.068-.099.099-.233.093-.405a.599.599 0 00-.123-.368.343.343 0 00-.293-.133.338.338 0 00-.279.151c-.069.096-.1.232-.094.407zm1.981-.572a.754.754 0 00-.118-.004c-.156.005-.259.076-.31.211l.035.992-.238.009-.05-1.398.232-.008.009.161a.37.37 0 01.326-.199.242.242 0 01.106.014l.008.222zm1.955.284l-.786.028.03.831-.247.008-.067-1.881 1.16-.041.007.204-.913.032.023.644.786-.028.007.203zm1.012-.39a.87.87 0 00-.117-.005c-.156.006-.259.077-.31.212l.035.992-.238.009-.05-1.398.232-.008.009.161a.37.37 0 01.325-.199.245.245 0 01.107.014l.007.222zm.148.467a.849.849 0 01.067-.372.604.604 0 01.215-.261.606.606 0 01.324-.101.584.584 0 01.467.181c.122.128.187.301.194.52l.001.016a.84.84 0 01-.065.37.59.59 0 01-.542.362.583.583 0 01-.466-.181c-.122-.128-.186-.3-.194-.517l-.001-.017zm.241.02a.6.6 0 00.12.37.343.343 0 00.293.13.342.342 0 00.283-.152c.067-.098.098-.233.092-.405a.592.592 0 00-.122-.368.346.346 0 00-.294-.133.343.343 0 00-.279.151c-.068.097-.1.232-.093.407zm1.525-.77l.014.176a.504.504 0 01.409-.217c.294-.01.449.151.463.484l.033.924-.238.009-.033-.926c-.004-.1-.03-.174-.077-.221-.046-.046-.117-.068-.212-.064a.33.33 0 00-.201.069.413.413 0 00-.131.168l.036.996-.238.008-.05-1.398.225-.008zm1.539-.394l.012.339.26-.01.006.185-.26.009.031.867c.002.056.015.098.039.126.025.027.065.039.12.037a.587.587 0 00.113-.02l.007.194a.707.707 0 01-.182.033c-.106.003-.188-.026-.244-.089a.421.421 0 01-.091-.272l-.03-.867-.254.009-.006-.185.253-.009-.012-.338.238-.009zm2.318.785l-.811.029.024.667.942-.034.007.203-1.189.043-.067-1.881 1.177-.042.007.204-.93.033.022.605.811-.029.007.202zm.608-.55l.014.175a.505.505 0 01.409-.216c.294-.011.448.15.463.484l.033.923-.238.009-.033-.925c-.004-.101-.03-.175-.077-.221-.047-.047-.117-.068-.213-.065a.348.348 0 00-.201.069c-.056.044-.1.1-.13.168l.035.996-.238.009-.049-1.398.225-.008zm1.194.645c-.007-.214.037-.388.134-.522a.477.477 0 01.39-.211.482.482 0 01.393.154l-.026-.728.238-.009.071 1.985-.219.008-.017-.15a.482.482 0 01-.391.19.477.477 0 01-.402-.185c-.106-.129-.162-.3-.17-.514l-.001-.018zm.239.019a.626.626 0 00.111.368c.069.088.16.129.275.125a.345.345 0 00.323-.216l-.023-.642a.35.35 0 00-.335-.186.318.318 0 00-.267.145c-.062.093-.09.228-.084.406zm3.049-.296l-.811.029.023.667.943-.034.007.203-1.189.043-.067-1.881 1.176-.042.008.204-.93.033.021.605.812-.029.007.202zm.607-.55l.014.175a.507.507 0 01.41-.216c.294-.011.448.15.463.484l.032.924-.237.008-.033-.925c-.005-.101-.031-.174-.078-.221-.046-.047-.117-.068-.212-.065a.348.348 0 00-.201.069c-.057.044-.1.1-.13.168l.035.996-.238.009-.05-1.398.225-.008zm1.196.645c-.007-.218.037-.393.132-.525a.484.484 0 01.392-.208.48.48 0 01.404.167l.006-.155.217-.008.049 1.364a.57.57 0 01-.146.434.584.584 0 01-.424.171.697.697 0 01-.296-.054.508.508 0 01-.227-.169l.119-.148a.465.465 0 00.381.177.36.36 0 00.266-.108.376.376 0 00.088-.28l-.004-.12a.49.49 0 01-.384.179.476.476 0 01-.403-.183c-.105-.129-.162-.306-.17-.534zm.241.019a.63.63 0 00.109.368.313.313 0 00.275.125.348.348 0 00.323-.217l-.022-.638a.355.355 0 00-.336-.189.317.317 0 00-.266.145c-.062.093-.09.228-.083.406zm1.579.628l-.238.008-.05-1.398.238-.008.05 1.398zm-.321-1.76a.14.14 0 01.032-.099c.023-.028.057-.043.104-.044.046-.002.082.01.107.036a.144.144 0 01.039.097.135.135 0 01-.033.098c-.023.027-.057.041-.104.043-.046.001-.081-.01-.106-.035a.144.144 0 01-.039-.096zm.878.34l.014.175a.505.505 0 01.409-.216c.294-.011.448.151.463.484l.033.924-.238.008-.033-.925c-.004-.1-.03-.174-.077-.221-.047-.046-.117-.068-.213-.065a.342.342 0 00-.201.07.423.423 0 00-.13.167l.035.996-.238.009-.049-1.398.225-.008zm1.856 1.359a.61.61 0 01-.467-.169.697.697 0 01-.195-.494l-.002-.044a.852.852 0 01.065-.374.623.623 0 01.212-.263.552.552 0 01.306-.104.519.519 0 01.428.164c.104.116.161.286.169.509l.003.099-.942.034a.505.505 0 00.131.331c.08.081.179.12.298.116a.406.406 0 00.211-.06.542.542 0 00.149-.142l.149.108c-.11.185-.282.281-.515.289zm-.074-1.252a.314.314 0 00-.238.115.507.507 0 00-.111.299l.697-.025v-.018a.46.46 0 00-.108-.279.297.297 0 00-.24-.092zm1.47 1.202a.607.607 0 01-.467-.169.704.704 0 01-.195-.494l-.001-.044a.831.831 0 01.065-.373c.049-.112.12-.2.212-.264a.551.551 0 01.305-.104.518.518 0 01.428.164c.105.116.161.286.169.509l.004.1-.943.033a.5.5 0 00.132.331c.08.081.179.12.297.116a.41.41 0 00.212-.06.539.539 0 00.148-.142l.149.109c-.11.184-.281.28-.515.288zm-.074-1.252a.319.319 0 00-.238.115.513.513 0 00-.11.299l.697-.025-.001-.018a.453.453 0 00-.108-.279.297.297 0 00-.24-.092zm1.523-.01a.631.631 0 00-.117-.005c-.156.005-.26.076-.311.211l.036.993-.238.008-.05-1.398.231-.008.01.161a.37.37 0 01.325-.199.24.24 0 01.106.014l.008.223z"
                    ></path>
                    <g id="wyze-logo-job-app">
                        <path
                        fill="url(#paint14_linear)"
                        d="M316.063 308.206l-.349.009 1.16 1.685.032 1.274.35-.008-.033-1.275 1.144-1.743-.384.01-.941 1.452-.979-1.404z"
                        ></path>
                        <path
                        fill="url(#paint15_linear)"
                        d="M312.327 308.301l.384-.01 1.302 2.492 1.177-2.555.349-.008-1.387 3.09-.126.004-.125.003-.566-1.087-.51 1.114-.107.003-.174.004-1.544-3.017.419-.01 1.252 2.526.462-1.01-.806-1.539z"
                        ></path>
                        <path
                        fill="url(#paint16_linear)"
                        d="M321.367 310.73l.009.332-2.759.069.227-.338 1.807-2.37-1.996.05-.008-.332 2.723-.069-.236.338-1.851 2.372 2.084-.052z"
                        ></path>
                        <path
                        fill="url(#paint17_linear)"
                        d="M324.233 308l.009.332-2.724.069-.008-.332 2.723-.069z"
                        ></path>
                        <path
                        fill="url(#paint18_linear)"
                        d="M324.275 309.66l-.008-.332-2.724.069.009.331 2.723-.068z"
                        ></path>
                        <path
                        fill="url(#paint19_linear)"
                        d="M324.3 310.656l.009.331-2.724.069-.008-.332 2.723-.068z"
                        ></path>
                    </g>
                    </g>
                    <g id="apple-menu">
                    <circle
                        id="Ellipse 27"
                        cx="276.295"
                        cy="303.212"
                        r="0.75"
                        fill="#FE5E5E"
                        transform="rotate(-1.866 276.295 303.212)"
                    ></circle>
                    <circle
                        id="Ellipse 28"
                        cx="279.292"
                        cy="303.115"
                        r="0.75"
                        fill="#FFF494"
                        transform="rotate(-1.866 279.292 303.115)"
                    ></circle>
                    <circle
                        id="Ellipse 29"
                        cx="282.288"
                        cy="303.017"
                        r="0.75"
                        fill="#5DFD63"
                        transform="rotate(-1.866 282.288 303.017)"
                    ></circle>
                    </g>
                </g>
                <g id="computer-frame">
                    <g id="Rectangle 574">
                    <path
                        fill="url(#paint20_linear)"
                        d="M298.667 363h22.666v29.324h-22.666V363z"
                    ></path>
                    <path
                        fill="url(#paint21_linear)"
                        d="M321.333 392.324h-22.666v-6.283L287 394h46l-11.667-7.959v6.283z"
                    ></path>
                    </g>
                    <path
                    id="Subtract_3"
                    fill="#403E3E"
                    fillRule="evenodd"
                    d="M264.979 287.449a5 5 0 00-4.884 4.999v68.601a4.999 4.999 0 005.211 4.995l87.442-3.699a5 5 0 004.789-4.996V290.43a5 5 0 00-5.116-4.999l-87.442 2.018zm89.559 2.361l-85.449 2.249v67.46l85.449-3.373V289.81z"
                    clipRule="evenodd"
                    ></path>
                </g>
                </g>
                <g id="chair-front">
                <path
                    id="Vector 8"
                    fill="#57595A"
                    d="M428.868 480.803v55.985h-8.519v-55.985h8.519z"
                ></path>
                <path
                    id="Union_2"
                    fill="#000"
                    fillRule="evenodd"
                    d="M498.542 441.639a1.999 1.999 0 00-1.281-2.521l-.721-.235a1.999 1.999 0 00-2.521 1.281l-5.551 17.026a2 2 0 001.282 2.521l.721.235c.421.137.854.127 1.245-.002a58.01 58.01 0 00-.351 2.428c-.222 1.791-.36 3.496-.489 5.089-.034.431-.069.853-.104 1.267-.165 1.954-.348 3.711-.701 5.271-.352 1.557-.868 2.894-1.684 4.014-.812 1.115-1.939 2.041-3.554 2.751-1.073.471-2.359.847-3.906 1.116.032-.142.049-.29.049-.441v-.758a2 2 0 00-2-2h-17.907a2 2 0 00-2 2v.758a2 2 0 002 2h17.907c.471 0 .905-.163 1.247-.437 2.008-.283 3.656-.727 5.013-1.323 1.761-.774 3.034-1.806 3.96-3.077.922-1.267 1.48-2.744 1.85-4.382.37-1.635.558-3.453.723-5.407l.105-1.282c.129-1.591.264-3.268.484-5.036.147-1.189.332-2.415.576-3.676.022-.05.041-.102.058-.155l3.16-9.694c.223-.465.458-.932.706-1.403l-.212-.112 1.896-5.816z"
                    clipRule="evenodd"
                ></path>
                <g id="Union_3" fill="#262A2E">
                    <path d="M483.342 461.827c-9.993-1.679-6.285-28.684-.713-61.827 1.474-8.769 2.218-17.209 2.889-24.817 1.864-21.149 3.162-35.873 18.002-33.378 14.84 2.495 11.252 16.834 6.098 37.43-1.854 7.409-3.911 15.628-5.385 24.397-5.572 33.144-10.898 59.875-20.891 58.195z"></path>
                    <path d="M360.713 472.284c0 12.825 15.202 12.302 39.818 11.455 6.919-.238 14.583-.502 22.861-.502 20.69 0 62.679 0 62.679-10.953 0-13.851-16.154-12.99-39.069-11.768-7.287.389-15.258.814-23.61.814-7.423 0-14.544-.252-21.152-.485-24.209-.856-41.527-1.469-41.527 11.439zm57.202 62.776l1.217 18.256h10.954l1.825-18.256c2.982.092 6.425.223 9.118.391 7.85 8.094 7.407 17.145 6.704 20.3 3.043-1.826 5.477-1.826 8.52 0 0-7.808-3.564-15.502-7.253-19.663 3.798.376 7.261.832 10.415 1.352 2.746 1.718 2.923 4.923 2.923 6.14 1.217-1.217 3.651-1.826 6.085 0-.047-1.236-.92-3.587-1.37-4.626 18.307 4.32 23.366 12.896 22.669 16.797 2.434-2.435 6.694-2.435 9.737 0 1.149-15.704-27.472-24.218-50.176-26.455a198.312 198.312 0 00-11.286-.789c-1.934-.08-3.769-.125-5.477-.14h-14.605c-4.801.043-10.61.322-16.763.929-22.705 2.237-51.393 10.633-51.393 27.063 3.651-2.434 5.477-3.043 9.737 0 0-7.302 5.579-13.085 23.886-17.405-.45 1.039-1.323 3.39-1.371 4.626 1.826-1.217 3.652-1.826 6.086 0 0-1.217.177-4.422 2.923-6.14 3.116-.514 6.535-.965 10.279-1.339-3.369 5.863-5.9 14.781-5.9 19.65 3.043-1.826 5.477-1.826 9.128 0 0 0-2.434-10.954 3.091-20.183a265.95 265.95 0 0110.297-.508zm76.675 29.819a3.652 3.652 0 11.001-7.303 3.652 3.652 0 01-.001 7.303z"></path>
                    <path
                    fillRule="evenodd"
                    d="M494.59 567.313a6.086 6.086 0 11.002-12.172 6.086 6.086 0 01-.002 12.172zm-4.868-6.086a4.869 4.869 0 109.738 0 4.869 4.869 0 00-9.738 0z"
                    clipRule="evenodd"
                    ></path>
                    <path d="M448.342 561.227a3.651 3.651 0 107.302.002 3.651 3.651 0 00-7.302-.002z"></path>
                    <path
                    fillRule="evenodd"
                    d="M445.908 561.227a6.085 6.085 0 1012.17.001 6.085 6.085 0 00-12.17-.001zm6.085 4.869a4.868 4.868 0 110-9.736 4.868 4.868 0 010 9.736z"
                    clipRule="evenodd"
                    ></path>
                    <path d="M399.659 564.879a3.651 3.651 0 110-7.302 3.651 3.651 0 010 7.302z"></path>
                    <path
                    fillRule="evenodd"
                    d="M399.659 567.313a6.085 6.085 0 110-12.17 6.085 6.085 0 010 12.17zm-4.868-6.086a4.868 4.868 0 109.736.002 4.868 4.868 0 00-9.736-.002z"
                    clipRule="evenodd"
                    ></path>
                    <path d="M382.133 547.84a2.921 2.921 0 105.843 0 2.921 2.921 0 00-5.843 0z"></path>
                    <path
                    fillRule="evenodd"
                    d="M380.186 547.84a4.868 4.868 0 109.736 0 4.868 4.868 0 00-9.736 0zm4.868 3.894a3.894 3.894 0 11-.001-7.789 3.894 3.894 0 01.001 7.789z"
                    clipRule="evenodd"
                    ></path>
                    <path d="M465.381 550.761a2.921 2.921 0 110-5.843 2.921 2.921 0 010 5.843z"></path>
                    <path
                    fillRule="evenodd"
                    d="M465.381 552.708a4.869 4.869 0 110-9.738 4.869 4.869 0 010 9.738zm-3.895-4.868a3.894 3.894 0 107.789 0 3.894 3.894 0 00-7.789 0z"
                    clipRule="evenodd"
                    ></path>
                    <path d="M350.976 561.227a3.652 3.652 0 107.303 0 3.652 3.652 0 00-7.303 0z"></path>
                    <path
                    fillRule="evenodd"
                    d="M348.542 561.227a6.086 6.086 0 1012.172 0 6.086 6.086 0 00-12.172 0zm6.085 4.869a4.869 4.869 0 11.002-9.738 4.869 4.869 0 01-.002 9.738z"
                    clipRule="evenodd"
                    ></path>
                </g>
                </g>
                <g id="guy4">
                <g id="leg-right-4">
                    <g id="Rectangle 69" fill="#DDAA6F">
                    <path d="M321.781 488.986s-1.317-7.334-4.691-17.413c-3.284-9.808-8.289-21.234-13.798-23.915-5.738-2.792-7.28 3.287-7.28 3.287l10.441 44.208a.826.826 0 00.365.526c.954.602 4.154 2.224 7.732-.354 5.975-4.306 7.231-6.339 7.231-6.339z"></path>
                    <path d="M321.781 488.986s-1.317-7.334-4.691-17.413l3 .449 3.884 16.446-2.193.518z"></path>
                    </g>
                </g>
                <path
                    id="Rectangle 66"
                    fill="#22189F"
                    d="M449.598 460.636l-6.819-27.327-124.088 37.845 4.65 18.632 126.257-29.15z"
                ></path>
                <g id="leg-left-3">
                    <g id="Rectangle 67" fill="#CAA172">
                    <path d="M327.164 505.849s-2.314-7.083-7.042-16.602c-4.602-9.263-11.132-19.892-16.957-21.789-6.068-1.976-6.759 4.258-6.759 4.258l16.424 42.351a.83.83 0 00.434.47c1.028.465 4.42 1.631 7.61-1.415 5.326-5.086 6.29-7.273 6.29-7.273z"></path>
                    <path d="M327.164 505.849s-2.314-7.083-7.042-16.602l3.033.032 6.11 15.756-2.101.814z"></path>
                    </g>
                    <path
                    id="Rectangle 63"
                    fill="#160C8E"
                    d="M449.425 459.049l-10.649-26.074-117.416 55.168 7.261 17.778 120.804-46.872z"
                    ></path>
                </g>
                <g id="body-int-upper">
                    <g id="arm-int-right">
                    <path
                        id="Rectangle 71"
                        fill="#F0E262"
                        d="M417.371 370.166L411 355.628l24.422-15.046c15.245-7.248 19.299 15.551 8.734 17.89l-26.785 11.694z"
                    ></path>
                    <path
                        id="Rectangle 70"
                        fill="#E99C7D"
                        d="M426.675 370.166l-4.772-14.538-51.284 33.804 2.472 12.064 53.584-31.33zm0 0l-4.772-14.538 18.291-15.046c11.418-7.248 14.455 15.551 6.542 17.889l-20.061 11.695z"
                    ></path>
                    <path
                        id="Ellipse 9_2"
                        fill="#E99C7D"
                        d="M360.973 391.692c-3.256 3.529-4.155 6.632-1.204 11.486 2.952 4.855 9.671 3.279 12.927-.25 3.256-3.53 3.61-7.468.658-12.323s-2.293 2.485-12.381 1.087z"
                    ></path>
                    </g>
                    <g id="body-head-int">
                    <ellipse
                        id="Ellipse 7_2"
                        fill="#E99C7D"
                        rx="39.628"
                        ry="35.526"
                        transform="matrix(-1 0 0 1 434.515 286.532)"
                    ></ellipse>
                    <path
                        id="Rectangle 58"
                        fill="#E99C7D"
                        d="M0 0h23.903v18.045H0z"
                        transform="matrix(-1 0 0 1 447.915 310.78)"
                    ></path>
                    <path
                        id="Vector 12"
                        fill="#300B0B"
                        d="M444.414 293.562c-.976 6.696-1.195 16.922 12.632 22.361 4.683-1.595 7.55-3.456 9.149-6.071 16.632-27.197 7.231-51.373-8.046-53.605-24.539-23.531-51.618-7.541-59.316 6.293-7.698 13.833 27.904 18.562 41.932 16.812 10.359-1.292 2.189 11.147 3.649 14.21z"
                    ></path>
                    <path
                        id="Rectangle 54"
                        fill="#F0E262"
                        d="M458.054 336.107c0-14.262-43.937-14.18-43.937 0v102.115s5.258 7.121 20.249 7.87c18.749.938 19.64-7.87 19.64-7.87s4.048-79.607 4.048-102.115z"
                    ></path>
                    </g>
                    <g id="arm-int-left">
                    <g id="Rectangle 56" fill="#E99C7D">
                        <path d="M412.382 372.883l-6.629-14.422-67.862 35.016 3.514 12.003 70.977-32.597z"></path>
                        <path d="M412.382 372.883l-6.629-14.422 24.151-15.477c15.113-7.518 19.572 15.206 9.05 17.731l-26.572 12.168z"></path>
                    </g>
                    <path
                        id="Rectangle 64"
                        fill="#F0E262"
                        d="M412.381 372.883l-6.628-14.422 24.15-15.477c15.114-7.518 19.573 15.206 9.051 17.731l-26.573 12.168z"
                    ></path>
                    <path
                        id="Ellipse 8"
                        fill="#E99C7D"
                        d="M325.053 395.965c-4.284 3.606-5.429 6.729-1.402 11.513s12.967 3.049 17.251-.557c4.285-3.606 4.687-7.552.661-12.336-4.027-4.784-3.017 2.539-16.51 1.38z"
                    ></path>
                    </g>
                </g>
                <path
                    id="pelvis"
                    fill="#160C8E"
                    d="M454.117 436.914l-39.995.008s-1.126-1.951 3.94 17.551c3.224 12.411 21.967 8.861 26.473 8.86 11.181-.002 9.582-26.419 9.582-26.419z"
                ></path>
                </g>
            </g>
            <defs>
                    <linearGradient
                    id="paint0_linear"
                    x1="246.5"
                    x2="246.5"
                    y1="374"
                    y2="444.5"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint1_linear"
                    x1="419"
                    x2="419"
                    y1="1.874"
                    y2="16.553"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="0.87"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint2_linear"
                    x1="419"
                    x2="419"
                    y1="1.874"
                    y2="16.553"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="0.87"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint3_linear"
                    x1="420"
                    x2="420"
                    y1="453.249"
                    y2="470.863"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="0.87"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint4_linear"
                    x1="420"
                    x2="420"
                    y1="459.245"
                    y2="476.86"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="0.87"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint5_linear"
                    x1="419"
                    x2="419"
                    y1="1.874"
                    y2="16.553"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="0.87"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint6_linear"
                    x1="419"
                    x2="419"
                    y1="1.874"
                    y2="16.553"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="0.87"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint7_linear"
                    x1="419"
                    x2="419"
                    y1="3.748"
                    y2="21.362"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="0.87"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint8_linear"
                    x1="419"
                    x2="419"
                    y1="9.744"
                    y2="27.359"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="0.87"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint9_linear"
                    x1="344.5"
                    x2="344.5"
                    y1="392"
                    y2="418"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#C58585"></stop>
                    <stop offset="1" stopColor="#6C4444"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint10_linear"
                    x1="535.365"
                    x2="534.676"
                    y1="177.614"
                    y2="177.614"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#DBDAD8"></stop>
                    <stop offset="1" stopColor="#F9F7F8"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint11_linear"
                    x1="644.5"
                    x2="644.5"
                    y1="202"
                    y2="272.5"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint12_linear"
                    x1="541.5"
                    x2="541.5"
                    y1="211"
                    y2="242"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#DFDFDF"></stop>
                    <stop offset="0.281" stopColor="#fff"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint13_linear"
                    x1="742.5"
                    x2="742.5"
                    y1="211"
                    y2="242"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#DFDFDF"></stop>
                    <stop offset="0.281" stopColor="#fff"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint14_linear"
                    x1="317.769"
                    x2="317.844"
                    y1="308.246"
                    y2="311.217"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#88E19B"></stop>
                    <stop offset="1" stopColor="#0CB9B6"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint15_linear"
                    x1="317.769"
                    x2="317.844"
                    y1="308.246"
                    y2="311.217"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#88E19B"></stop>
                    <stop offset="1" stopColor="#0CB9B6"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint16_linear"
                    x1="317.769"
                    x2="317.844"
                    y1="308.246"
                    y2="311.217"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#88E19B"></stop>
                    <stop offset="1" stopColor="#0CB9B6"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint17_linear"
                    x1="317.769"
                    x2="317.844"
                    y1="308.246"
                    y2="311.217"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#88E19B"></stop>
                    <stop offset="1" stopColor="#0CB9B6"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint18_linear"
                    x1="317.769"
                    x2="317.844"
                    y1="308.246"
                    y2="311.217"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#88E19B"></stop>
                    <stop offset="1" stopColor="#0CB9B6"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint19_linear"
                    x1="317.769"
                    x2="317.844"
                    y1="308.246"
                    y2="311.217"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#88E19B"></stop>
                    <stop offset="1" stopColor="#0CB9B6"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint20_linear"
                    x1="287"
                    x2="338.656"
                    y1="386.439"
                    y2="386.815"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#847F7F"></stop>
                    <stop offset="1" stopColor="#3D3A3A"></stop>
                    </linearGradient>
                    <linearGradient
                    id="paint21_linear"
                    x1="287"
                    x2="338.656"
                    y1="386.439"
                    y2="386.815"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#847F7F"></stop>
                    <stop offset="1" stopColor="#3D3A3A"></stop>
                    </linearGradient>
                </defs>
        </svg>
    )
}

export default Scene4
