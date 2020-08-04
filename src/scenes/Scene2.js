import React, { useEffect } from 'react'
import {useStore} from '../Store'

import { gsap } from 'gsap'

const Scene2 = () => {
    const next = useStore(state => state.nextScene)
    useEffect(() => {
        const rArm = gsap.fromTo("#arm-int-right", .18, {rotate: 0, x:-2}, {rotate: -3, x:3, ease:"none", repeat:-1, yoyo: true, transformOrigin: "100% 0%"});
            rArm.progress(0.5).pause();
            rArm.play();

        const lArm = gsap.fromTo("#arm-int-left", .2, {rotate: 0}, {rotate: 3, ease:"none", repeat:-1, yoyo: true, transformOrigin: "100% 0%"});
            lArm.progress(0.5).pause();
            lArm.play();

        const stopTyping = () => {
            rArm.pause()
            lArm.pause()
        }

        const tl = gsap.timeline()
            tl.set("#chair-front", {display: "block"})
            tl.to("#scene-2", 1, {opacity: 1})

            // zoom in on product
            tl.to("#scene-2", 1, {attr:{viewBox: "483 155 100 50"}}, "+=1")
            // if (window.innerWidth < 501) {
            //     // console.log("<501")
            //     tl.to("#scene-2", 1, {attr:{viewBox: "510 140 50 50"}}, "+=1")
            //         .set("#card", {x: 0, y: 0, width: window.innerWidth})
                
            // } else if (window.innerWidth < 1000) {
            //     tl.to("#scene-2", 1, {attr:{viewBox: "483 155 100 50"}}, "+=1")
            //         .set("#card", {x: "10%", y: "10%"})

            // } else {
            //     // console.log('>1200')
            //     tl.to("#scene-2", 1, {attr:{viewBox: "483 155 100 50"}}, "+=1")
            //         .set("#card", {x: "40%", y: "40%"})
            // }    

            // tl.to("#card", {display: "block"})
            // tl.to("#card", .3, {opacity: 0, delay: 4})

            tl.to("#scene-2", {attr:{viewBox: "200 200 400 300"}, duration: 2})
            if (window.innerWidth <501) {
                // console.log("<501")
                tl.to("#scene-2", {attr:{viewBox: "260 300 100 40"}, duration: 2, onComplete: stopTyping})
            } else {
                tl.to("#scene-2", {attr:{viewBox: "260 275 150 100"}, duration: 2, onComplete: stopTyping})
            }

            // // Filling out application
            tl.to("#cursor", {x:-50, y:-13, duration: 1.5})
            tl.to("#loader", {display: "block"})
            tl.to("#analyzing-resume", {display: "block"})
            tl.to("#loader", {rotate: 360, transformOrigin: "50% 50%", repeat: -1, duration: 1, ease: "none"}, "-=1")
            tl.to("#loader", {display: "none"})
            tl.to("#complete", {display: "block", scale: 2, transformOrigin: "50% 50%"})
            tl.to("#analyzing-resume", {display: "none"})
            tl.to("#Success", {display: "block"})
            tl.to("#attach-resume", {display: "none"})
            tl.to("#resume-name", {display: "block"})
            tl.to("#adam-mathieson", {display: "block"})
            tl.to("#email", {display: "block"}, "-=0.5")
            tl.to("#phone", {display: "block"}, "-=0.5")
            
            // Alert msg
            tl.to("#guy-back, #wyze-logo", {display: "block"})
            tl.to("#msg-box", {stroke: "none"})
            tl.to("#alert-msg", {display: "block", delay: .3})
            tl.fromTo("#alert-msg", {opacity: 0, x: 5}, {opacity: 1, x:0})
            tl.to("#cursor", {x: 5, y: -43, duration: 1, delay: 1})
            tl.to("#msg-box", {stroke: "#4DFF16"})

            // Cam feed
            tl.to("#cam-feed", {display: "block"})
            tl.to("#alert-msg", {opacity: 0, x: 5, delay: .05})
            tl.fromTo("#cursor", {x: 5, y: -43}, {x: -2, y: -15, duration: .6, delay: 1})
            tl.to("#locked", {display: "none"})
            tl.to("#Locked", {display: "none"})
            tl.to("#Unlocked", {display: "block"})
            tl.to("#scene-2", .5, {opacity: 0, onComplete: next})

    }, [next])

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="scene-2"
            width="838"
            height="596"
            fill="none"
            viewBox="0 0 839 596"
            >
            <g id="scene-2-interior">
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
                    transform="matrix(1 0 0 -1 1 465.242)"
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
                    d="M0 7.496h838v4.497H0z"
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
                        y="394.851"
                        rx="1"
                        transform="rotate(-4.184 355.29 394.851)"
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
                        x="380.089"
                        y="405.102"
                        rx="0.547"
                        transform="rotate(-4.184 380.089 405.102)"
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
                    d="M535.364 191.84c3.675 0 6.655.274 6.655.612v1.223H528.71v-1.223c0-.338 2.979-.612 6.654-.612z"
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
                    d="M536.44 168.784a4.74 4.74 0 011.187-2.084c.551-.551 1.219-.91 1.927-1.034l.499 4.473-3.613-1.355z"
                ></path>
                <path
                    id="Vector 1"
                    fill="#DBDAD8"
                    d="M535.823 160.404l9.638 1.148-10.67.688-7.431-1.018c-.119-.016-.114-.19.006-.199l8.457-.619z"
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
                    cx="543.637"
                    cy="167.673"
                    fill="#C4C4C4"
                    rx="0.229"
                    ry="0.574"
                    transform="rotate(-27.788 543.637 167.673)"
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
                        d="M273.776 315.857l53.613-.793v35.447a1 1 0 01-.969.999l-51.797 1.605a1 1 0 01-1.031-1.004l.184-36.254z"
                    ></path>
                    <path
                        id="SUBMIT YOUR APPLICATION"
                        fill="#404040"
                        d="M278.803 319.464a.15.15 0 00-.061-.126.724.724 0 00-.212-.09 1.573 1.573 0 01-.243-.094c-.163-.085-.245-.201-.248-.349a.347.347 0 01.061-.206.428.428 0 01.184-.144.7.7 0 01.273-.056.638.638 0 01.272.052.416.416 0 01.258.379l-.293.005a.191.191 0 00-.064-.15.253.253 0 00-.174-.052.267.267 0 00-.166.048.144.144 0 00-.058.121c.001.046.025.084.071.115.048.03.117.058.208.084.167.048.29.108.367.181a.369.369 0 01.119.275.342.342 0 01-.135.292.611.611 0 01-.374.111.716.716 0 01-.3-.055.477.477 0 01-.209-.161.427.427 0 01-.074-.241l.294-.005c.003.157.098.234.285.231a.276.276 0 00.162-.045.138.138 0 00.057-.12zm1.552-1.075l.015.937a.477.477 0 01-.14.371.564.564 0 01-.396.143.57.57 0 01-.398-.126.47.47 0 01-.155-.36l-.016-.947.293-.005.016.939c.001.093.024.161.069.203a.26.26 0 00.187.06c.165-.002.247-.09.247-.264l-.016-.946.294-.005zm.264 1.418l-.024-1.422.498-.008c.173-.003.304.028.394.093a.338.338 0 01.139.288.325.325 0 01-.051.186.314.314 0 01-.147.118.294.294 0 01.173.108.317.317 0 01.067.202c.002.137-.04.241-.126.312-.086.072-.209.11-.371.114l-.552.009zm.282-.624l.007.384.251-.004a.236.236 0 00.16-.052.169.169 0 00.056-.137c-.002-.13-.07-.195-.205-.195l-.269.004zm-.003-.207l.217-.003c.147-.005.22-.066.218-.181-.001-.064-.02-.11-.059-.137-.037-.028-.096-.042-.177-.04l-.205.003.006.358zm1.357-.618l.382 1.025.346-1.037.385-.006.024 1.421-.294.005-.007-.388.019-.672-.367 1.066-.201.003-.4-1.052.04.67.007.388-.293.005-.024-1.422.383-.006zm1.704 1.394l-.293.005-.023-1.422.292-.005.024 1.422zm1.294-1.206l-.436.007.02 1.185-.293.005-.02-1.185-.429.007-.004-.237 1.158-.019.004.237zm1.104.385l.285-.645.32-.005-.451.914.008.515-.298.005-.008-.516-.482-.898.321-.005.305.635zm1.886.072a.857.857 0 01-.068.369.555.555 0 01-.524.339.56.56 0 01-.535-.318.836.836 0 01-.084-.362l-.001-.071a.864.864 0 01.069-.37.567.567 0 01.525-.34.56.56 0 01.535.323c.052.105.08.227.082.366l.001.064zm-.298-.06c-.002-.149-.031-.262-.086-.338a.26.26 0 00-.23-.113.265.265 0 00-.226.119c-.052.077-.077.19-.075.338l.001.069a.598.598 0 00.086.336.26.26 0 00.232.117.26.26 0 00.225-.119.607.607 0 00.074-.339l-.001-.07zm1.575-.704l.015.936a.48.48 0 01-.14.372.564.564 0 01-.396.142.57.57 0 01-.398-.125.472.472 0 01-.155-.36l-.016-.947.293-.005.015.938c.002.093.025.161.07.203a.256.256 0 00.187.06c.164-.002.247-.09.246-.263l-.015-.947.294-.004zm.781.888l-.233.004.008.521-.293.004-.023-1.421.528-.009c.168-.003.298.033.391.106a.39.39 0 01.142.315.444.444 0 01-.06.244.431.431 0 01-.188.158l.317.575.001.014-.315.005-.275-.516zm-.237-.233l.236-.004a.241.241 0 00.17-.059.2.2 0 00.058-.156.213.213 0 00-.06-.157c-.039-.038-.097-.056-.176-.055l-.235.004.007.427zm2.292.427l-.513.009-.093.294-.312.005.506-1.43.272-.005.555 1.413-.311.005-.104-.291zm-.438-.23l.355-.006-.187-.529-.168.535zm1.271.008l.008.501-.293.005-.023-1.422.554-.009a.629.629 0 01.282.054.439.439 0 01.26.408.414.414 0 01-.138.333c-.094.081-.225.123-.394.126l-.256.004zm-.004-.237l.261-.004c.078-.002.137-.021.176-.058.041-.037.06-.089.059-.157a.232.232 0 00-.064-.168.236.236 0 00-.171-.064l-.269.005.008.446zm1.294.216l.009.501-.293.005-.024-1.422.555-.009a.629.629 0 01.282.054.425.425 0 01.19.164.464.464 0 01.07.244.41.41 0 01-.138.332c-.094.082-.225.124-.394.127l-.257.004zm-.003-.237l.261-.004c.078-.002.136-.021.176-.058.041-.037.06-.09.059-.157a.236.236 0 00-.064-.168.228.228 0 00-.171-.064l-.269.005.008.446zm1.299.481l.622-.01.004.236-.915.015-.024-1.422.293-.005.02 1.186zm1.106.218l-.293.004-.023-1.421.293-.005.023 1.422zm1.381-.497a.506.506 0 01-.164.364.593.593 0 01-.4.139.536.536 0 01-.434-.177c-.106-.121-.161-.289-.165-.503l-.001-.087a.86.86 0 01.066-.362.546.546 0 01.202-.243.584.584 0 01.311-.089.58.58 0 01.399.125.539.539 0 01.18.367l-.293.005c-.009-.091-.035-.157-.08-.198-.045-.041-.112-.06-.202-.059-.097.002-.17.038-.218.109-.047.071-.07.179-.068.327l.001.107c.003.154.028.266.075.336.048.07.122.104.223.103.09-.002.157-.024.201-.065.044-.043.069-.107.074-.194l.293-.005zm.998.165l-.514.008-.093.295-.311.005.506-1.431.271-.004.556 1.413-.312.005-.103-.291zm-.439-.231l.356-.005-.188-.53-.168.535zm1.92-.686l-.436.008.02 1.184-.293.005-.02-1.185-.429.007-.004-.237 1.158-.019.004.237zm.499 1.177l-.293.005-.024-1.422.293-.005.024 1.422zm1.429-.702a.872.872 0 01-.068.369.567.567 0 01-.209.248.593.593 0 01-.315.091.571.571 0 01-.536-.319.843.843 0 01-.083-.362l-.001-.07a.864.864 0 01.069-.37.561.561 0 01.525-.34.583.583 0 01.317.081.557.557 0 01.218.241.866.866 0 01.082.367l.001.064zm-.298-.06c-.003-.149-.031-.262-.086-.338a.26.26 0 00-.23-.113.262.262 0 00-.226.119c-.052.077-.077.19-.075.337l.001.07a.598.598 0 00.086.336.261.261 0 00.232.117.262.262 0 00.225-.119.611.611 0 00.074-.34l-.001-.069zm1.678.716l-.293.005-.586-.926.016.935-.293.005-.024-1.422.293-.005.587.928-.015-.937.292-.005.023 1.422z"
                    ></path>
                    <path
                        id="Resume/CV"
                        fill="#000"
                        d="M278.498 326.947l-.175.003.007.391-.22.003-.018-1.066.396-.007a.45.45 0 01.293.079.29.29 0 01.106.237.323.323 0 01-.044.183.316.316 0 01-.141.118l.238.432.001.01-.236.004-.207-.387zm-.178-.175l.177-.003c.055-.001.098-.015.128-.044a.154.154 0 00.043-.117.162.162 0 00-.045-.118c-.029-.028-.073-.042-.132-.041l-.177.003.006.32zm1.099.564a.392.392 0 01-.286-.102.38.38 0 01-.114-.283v-.02a.463.463 0 01.042-.214.33.33 0 01.128-.147.356.356 0 01.192-.055.33.33 0 01.258.098.418.418 0 01.098.289l.002.087-.505.008a.2.2 0 00.064.124.19.19 0 00.132.044.227.227 0 00.19-.092l.106.115a.336.336 0 01-.127.108.424.424 0 01-.18.04zm-.035-.65a.135.135 0 00-.102.045.217.217 0 00-.048.122l.294-.005v-.017c-.002-.047-.015-.083-.04-.108a.14.14 0 00-.104-.037zm.907.401c-.001-.026-.014-.046-.04-.06a.425.425 0 00-.124-.038c-.189-.036-.285-.115-.287-.235a.217.217 0 01.084-.177.353.353 0 01.228-.076.387.387 0 01.243.067.228.228 0 01.094.183l-.212.004a.103.103 0 00-.031-.074c-.019-.02-.05-.029-.092-.029a.131.131 0 00-.082.026.074.074 0 00-.028.062c0 .023.012.042.034.057.022.013.06.025.113.035.053.009.098.02.134.033.113.039.17.109.171.21a.205.205 0 01-.089.177.403.403 0 01-.239.071.42.42 0 01-.178-.032.304.304 0 01-.123-.095.23.23 0 01-.046-.133l.201-.004a.11.11 0 00.043.086.166.166 0 00.104.028.157.157 0 00.091-.024.074.074 0 00.031-.062zm.82.124a.264.264 0 01-.216.099c-.085.002-.15-.021-.196-.069-.045-.048-.069-.12-.071-.214l-.01-.519.212-.004.009.512c.001.083.04.123.115.122.072-.001.121-.027.147-.077l-.01-.561.212-.004.014.792-.199.004-.007-.081zm.55-.721l.008.088a.28.28 0 01.226-.107c.102-.002.173.037.213.117a.272.272 0 01.235-.125c.086-.001.151.023.194.072.043.049.065.124.067.225l.008.506-.212.003-.009-.505c-.001-.045-.01-.077-.028-.098-.018-.02-.049-.03-.093-.029-.064.001-.107.032-.131.093l.011.544-.212.003-.009-.504c-.001-.046-.01-.079-.029-.099-.018-.02-.049-.03-.092-.029-.061.001-.104.026-.13.077l.01.56-.211.004-.014-.793.198-.003zm1.48.781a.39.39 0 01-.286-.102.38.38 0 01-.114-.283l-.001-.02a.476.476 0 01.043-.214.327.327 0 01.127-.147.36.36 0 01.193-.055.328.328 0 01.257.098.413.413 0 01.099.289l.002.086-.505.009a.2.2 0 00.064.124.19.19 0 00.132.044.227.227 0 00.189-.092l.106.115a.329.329 0 01-.127.108.435.435 0 01-.179.04zm-.036-.65a.135.135 0 00-.102.045.216.216 0 00-.047.122l.294-.005v-.017c-.002-.047-.015-.083-.04-.108a.138.138 0 00-.105-.037zm.55.718l-.157.003.372-1.165.158-.003-.373 1.165zm1.338-.47a.373.373 0 01-.123.273.445.445 0 01-.3.104.404.404 0 01-.325-.132.569.569 0 01-.124-.377l-.001-.065a.645.645 0 01.049-.272.403.403 0 01.152-.182.42.42 0 01.233-.067.433.433 0 01.299.093.41.41 0 01.135.275l-.22.004c-.006-.068-.026-.118-.06-.148-.033-.031-.084-.046-.151-.044-.073.001-.128.028-.163.082-.036.052-.053.134-.052.244l.002.081a.484.484 0 00.056.252c.036.052.092.078.167.077.068-.002.118-.018.151-.049.033-.032.051-.08.055-.145l.22-.004zm.54.081l.227-.806.245-.004-.353 1.073-.229.004-.388-1.06.243-.005.255.798z"
                    ></path>
                    <path
                        id="Full name"
                        fill="#000"
                        d="M278.75 332.905l-.422.008.008.436-.22.004-.019-1.066.694-.013.003.178-.474.009.005.275.422-.008.003.177zm.631.344a.265.265 0 01-.215.099c-.085.002-.15-.021-.196-.069-.045-.048-.069-.119-.072-.214l-.01-.519.212-.004.009.512c.002.083.04.123.115.122.072-.002.121-.027.147-.078l-.01-.561.212-.004.015.793-.2.003-.007-.08zm.59.07l-.213.004-.021-1.125.213-.004.021 1.125zm.398-.008l-.212.004-.021-1.125.212-.004.021 1.125zm.729-.806l.008.092a.276.276 0 01.226-.111c.084-.001.147.022.188.071.042.048.065.122.068.22l.009.512-.212.003-.009-.506c-.001-.045-.011-.077-.031-.097-.02-.02-.053-.03-.098-.029a.145.145 0 00-.133.079l.011.558-.212.004-.015-.792.2-.004zm1.119.772a.238.238 0 01-.022-.071.26.26 0 01-.199.09.284.284 0 01-.194-.064.214.214 0 01-.079-.168.226.226 0 01.089-.196.466.466 0 01.269-.073l.097-.001-.001-.046a.123.123 0 00-.03-.087c-.019-.022-.048-.032-.089-.032a.128.128 0 00-.084.028.087.087 0 00-.028.071l-.212.003a.21.21 0 01.04-.128.287.287 0 01.118-.094.443.443 0 01.174-.036.344.344 0 01.234.069.259.259 0 01.09.205l.006.344a.386.386 0 00.035.17v.012l-.214.004zm-.177-.144a.183.183 0 00.086-.022.142.142 0 00.057-.057l-.002-.137-.079.002c-.106.002-.162.039-.168.113v.012c0 .027.01.048.029.065a.105.105 0 00.077.024zm.706-.658l.008.088a.276.276 0 01.226-.107c.102-.002.173.037.212.117a.273.273 0 01.236-.126c.086-.001.151.023.193.072.043.049.066.124.068.225l.009.506-.212.004-.01-.506c-.001-.045-.01-.077-.028-.097-.018-.021-.049-.031-.093-.03-.064.001-.107.032-.131.093l.011.544-.211.004-.01-.504c-.001-.046-.01-.079-.029-.1-.018-.02-.049-.029-.093-.029-.06.002-.103.027-.129.078l.011.56-.212.004-.014-.793.198-.003zm1.48.779a.387.387 0 01-.286-.101.38.38 0 01-.114-.283l-.001-.021a.475.475 0 01.043-.213.335.335 0 01.127-.148.375.375 0 01.193-.055.328.328 0 01.257.098.413.413 0 01.099.289l.002.086-.505.01a.186.186 0 00.196.168.228.228 0 00.189-.093l.107.115a.336.336 0 01-.127.108.424.424 0 01-.18.04zm-.036-.649a.13.13 0 00-.102.044.223.223 0 00-.047.122l.294-.005v-.017c-.002-.047-.015-.083-.04-.107-.025-.026-.06-.038-.105-.037z"
                    ></path>
                    <path
                        id="Email"
                        fill="#000"
                        d="M278.75 338.969l-.422.01.007.285.495-.011.004.176-.715.017-.025-1.066.714-.017.004.178-.494.011.006.254.422-.009.004.172zm.379-.34l.008.089a.283.283 0 01.226-.109c.102-.002.173.037.213.116a.27.27 0 01.235-.126c.086-.002.15.021.194.071.043.049.065.123.068.224l.012.506-.213.005-.012-.506c-.001-.044-.01-.077-.028-.097-.018-.021-.05-.03-.094-.029-.063.001-.107.032-.13.094l.014.544-.212.005-.012-.505c-.001-.046-.01-.079-.029-.099-.019-.02-.05-.03-.093-.029a.14.14 0 00-.129.078l.014.56-.212.005-.019-.792.199-.005zm1.578.756a.24.24 0 01-.023-.07.257.257 0 01-.198.09.283.283 0 01-.195-.063.218.218 0 01-.08-.168.223.223 0 01.089-.195.455.455 0 01.268-.075l.098-.002-.001-.046a.13.13 0 00-.031-.087c-.019-.021-.049-.032-.089-.031a.127.127 0 00-.084.028.086.086 0 00-.028.071l-.212.005a.212.212 0 01.039-.128.281.281 0 01.118-.095.458.458 0 01.174-.038.346.346 0 01.234.069.257.257 0 01.091.204l.008.344a.383.383 0 00.035.17l.001.012-.214.005zm-.178-.143a.188.188 0 00.085-.022.14.14 0 00.058-.058l-.003-.136-.08.001c-.105.003-.161.041-.166.114l-.001.013a.085.085 0 00.03.064.105.105 0 00.077.024zm.746.13l-.212.005-.019-.792.213-.005.018.792zm-.248-.992a.102.102 0 01.03-.079.122.122 0 01.086-.033.12.12 0 01.087.029.1.1 0 01.034.077.1.1 0 01-.031.08.12.12 0 01-.085.033.122.122 0 01-.087-.029.105.105 0 01-.034-.078zm.647.983l-.213.005-.026-1.125.212-.005.027 1.125z"
                    ></path>
                    <path
                        id="Phone"
                        fill="#000"
                        d="M278.328 344.959l.006.376-.219.004-.019-1.067.416-.007c.08-.001.15.012.211.04a.32.32 0 01.143.123.34.34 0 01.052.183.304.304 0 01-.103.249.446.446 0 01-.295.096l-.192.003zm-.004-.178l.197-.003c.058-.001.102-.016.131-.044.031-.028.045-.067.045-.118a.18.18 0 00-.049-.126.174.174 0 00-.128-.047l-.202.004.006.334zm.939-.169a.267.267 0 01.21-.105c.171-.003.26.096.266.295l.009.508-.211.003-.009-.501c-.001-.046-.011-.079-.031-.1-.02-.022-.053-.032-.098-.031-.062.001-.107.026-.134.074l.01.563-.211.004-.02-1.125.211-.004.008.419zm.605.292a.463.463 0 01.041-.211.34.34 0 01.128-.145.38.38 0 01.198-.054.358.358 0 01.263.093.395.395 0 01.118.265l.003.054a.415.415 0 01-.097.295.354.354 0 01-.271.114.358.358 0 01-.276-.105.422.422 0 01-.107-.297v-.009zm.212.012a.296.296 0 00.045.172.14.14 0 00.123.057.14.14 0 00.119-.061c.028-.04.041-.103.04-.19a.301.301 0 00-.046-.17.142.142 0 00-.123-.059.137.137 0 00-.119.063c-.028.041-.041.103-.039.188zm.857-.42l.008.091a.28.28 0 01.226-.11c.084-.001.147.022.189.071.041.048.064.122.066.22l.01.512-.212.003-.009-.506c-.001-.045-.011-.078-.031-.097-.02-.02-.053-.03-.098-.029a.146.146 0 00-.133.078l.01.559-.211.004-.015-.793.2-.003zm1.025.789a.388.388 0 01-.286-.102.38.38 0 01-.115-.283v-.02a.49.49 0 01.042-.214.344.344 0 01.321-.202.324.324 0 01.257.098c.064.067.097.163.099.289l.001.086-.504.009a.2.2 0 00.064.124.19.19 0 00.131.044.227.227 0 00.19-.092l.106.115a.319.319 0 01-.127.107.42.42 0 01-.179.041zm-.036-.65a.138.138 0 00-.102.044.231.231 0 00-.048.123l.295-.005v-.017a.16.16 0 00-.04-.108.138.138 0 00-.105-.037z"
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
                        d="M292.802 332.72l-.257.004-.046.148-.155.003.251-.716.136-.003.279.706-.156.003-.052-.145zm-.219-.115l.177-.003-.094-.265-.083.268zm.457-.011a.32.32 0 01.052-.198.178.178 0 01.15-.076.162.162 0 01.129.055l-.005-.269.141-.003.014.75-.127.002-.008-.056a.165.165 0 01-.135.069.182.182 0 01-.151-.071.333.333 0 01-.06-.203zm.141.007c.001.05.011.088.028.114a.086.086 0 00.076.038c.044-.001.074-.02.092-.057l-.004-.209c-.019-.036-.049-.054-.093-.053-.068.001-.101.057-.099.167zm.756.244a.137.137 0 01-.015-.047.172.172 0 01-.133.06.188.188 0 01-.129-.043.143.143 0 01-.053-.112.151.151 0 01.059-.13.309.309 0 01.18-.049l.065-.001-.001-.03a.086.086 0 00-.02-.059c-.013-.014-.033-.021-.06-.021a.085.085 0 00-.055.019c-.014.011-.02.027-.02.047l-.141.002c0-.03.009-.059.027-.085a.201.201 0 01.079-.063.304.304 0 01.116-.024.228.228 0 01.155.046.17.17 0 01.061.137l.004.229c.001.05.009.088.023.113v.009l-.142.002zm-.119-.096a.11.11 0 00.057-.015.085.085 0 00.039-.038l-.002-.091-.053.001c-.07.002-.107.027-.111.076v.008c0 .018.006.032.019.043.013.011.03.017.051.016zm.471-.439l.006.059a.184.184 0 01.15-.071c.068-.002.115.024.142.078a.18.18 0 01.157-.084c.057-.001.1.015.129.048.028.033.043.083.044.15l.007.337-.142.003-.006-.337c-.001-.03-.007-.052-.019-.065-.012-.014-.033-.021-.062-.02-.043.001-.071.021-.087.062l.007.363-.141.002-.006-.336c-.001-.031-.007-.053-.019-.066-.013-.014-.033-.02-.062-.02-.04.001-.069.018-.086.052l.007.373-.141.003-.01-.528.132-.003zm1.18-.204l.192.512.172-.519.193-.004.013.711-.147.003-.004-.194.009-.336-.182.533-.101.002-.201-.526.021.335.003.194-.146.003-.013-.711.191-.003zm.995.692a.161.161 0 01-.016-.047.168.168 0 01-.132.06.184.184 0 01-.129-.043.142.142 0 01-.053-.112.149.149 0 01.059-.13.309.309 0 01.18-.049l.065-.001-.001-.03c-.001-.025-.007-.044-.02-.058-.013-.015-.033-.022-.06-.021a.08.08 0 00-.055.018c-.014.011-.02.027-.02.047l-.141.003a.15.15 0 01.027-.086.185.185 0 01.079-.062.286.286 0 01.116-.025.228.228 0 01.155.046.175.175 0 01.061.137l.004.229c.001.05.009.088.023.113v.009l-.142.002zm-.119-.096a.12.12 0 00.057-.014.092.092 0 00.039-.039l-.002-.09-.053.001c-.07.001-.107.026-.111.075v.008c0 .018.006.032.019.043a.07.07 0 00.051.016zm.505-.569l.003.13.09-.002.002.104-.091.001.005.264a.075.075 0 00.012.042c.008.008.022.012.044.012a.242.242 0 00.041-.005l.002.107a.31.31 0 01-.085.015c-.099.001-.151-.048-.154-.148l-.006-.284-.077.001-.002-.103.077-.002-.002-.129.141-.003zm.31.182a.175.175 0 01.14-.07c.115-.002.174.063.178.196l.006.338-.141.003-.006-.334c-.001-.031-.007-.053-.021-.067-.013-.014-.035-.021-.065-.021-.041.001-.071.018-.089.05l.007.375-.141.003-.014-.75.141-.003.005.28zm.58.46l-.142.002-.01-.528.142-.003.01.529zm-.163-.662c0-.022.007-.039.02-.053a.086.086 0 01.058-.022c.024 0 .044.006.058.02.015.013.022.03.023.052a.072.072 0 01-.021.053.077.077 0 01-.057.021.08.08 0 01-.058-.019.072.072 0 01-.023-.052zm.523.665a.26.26 0 01-.191-.068.254.254 0 01-.076-.189l-.001-.013a.316.316 0 01.029-.143.22.22 0 01.085-.098.24.24 0 01.128-.037.222.222 0 01.172.066.28.28 0 01.066.192l.001.058-.337.006c.005.034.02.062.043.082a.121.121 0 00.088.03.153.153 0 00.126-.062l.071.077a.223.223 0 01-.085.072.289.289 0 01-.119.027zm-.025-.433c-.027 0-.05.01-.067.029a.146.146 0 00-.032.082l.196-.004v-.011a.102.102 0 00-.027-.072c-.016-.017-.04-.025-.07-.024zm.606.266c-.001-.017-.01-.03-.027-.04a.275.275 0 00-.083-.025c-.126-.024-.189-.076-.191-.157a.144.144 0 01.056-.118.235.235 0 01.152-.05.25.25 0 01.161.044.15.15 0 01.063.122l-.141.003a.069.069 0 00-.02-.05c-.014-.013-.034-.019-.062-.019a.09.09 0 00-.055.018.05.05 0 00-.018.041c0 .016.008.028.022.038a.237.237 0 00.076.023.608.608 0 01.089.022c.075.026.113.072.115.14a.138.138 0 01-.06.118.27.27 0 01-.159.048.297.297 0 01-.119-.022.2.2 0 01-.082-.063.155.155 0 01-.031-.089l.134-.002c.002.025.011.044.029.057a.108.108 0 00.07.018c.027 0 .047-.005.06-.016a.05.05 0 00.021-.041zm.204-.127a.303.303 0 01.028-.14.212.212 0 01.085-.097.254.254 0 01.131-.036.236.236 0 01.176.062.265.265 0 01.079.176l.001.036a.273.273 0 01-.064.197.236.236 0 01-.181.077.237.237 0 01-.183-.07.28.28 0 01-.072-.198v-.007zm.141.008c.001.05.011.088.031.115a.094.094 0 00.081.038.094.094 0 00.08-.041c.018-.026.027-.069.026-.126a.196.196 0 00-.031-.114.091.091 0 00-.082-.039.095.095 0 00-.079.042.222.222 0 00-.026.125zm.571-.28l.006.061a.184.184 0 01.15-.074c.056-.001.098.015.126.047.028.033.043.081.045.147l.006.341-.141.003-.006-.338c-.001-.03-.008-.052-.021-.065-.013-.013-.035-.02-.065-.019a.099.099 0 00-.089.052l.007.373-.141.003-.01-.529.133-.002z"
                    ></path>
                    <path
                        id="submit-application"
                        fill="#fff"
                        d="M296.768 349.83a.448.448 0 01-.179-.079.164.164 0 01-.058-.124.17.17 0 01.062-.14.269.269 0 01.173-.061.303.303 0 01.131.024c.039.018.07.043.092.076a.196.196 0 01.035.108l-.094.002c-.002-.042-.016-.076-.045-.099a.168.168 0 00-.116-.034.178.178 0 00-.108.034.103.103 0 00-.036.086.095.095 0 00.039.073.365.365 0 00.127.05c.06.015.107.032.141.051a.203.203 0 01.076.068.175.175 0 01.027.093.166.166 0 01-.063.141.283.283 0 01-.178.057.334.334 0 01-.138-.023.234.234 0 01-.1-.075.189.189 0 01-.038-.109l.094-.003a.125.125 0 00.051.1.199.199 0 00.129.033c.049-.001.087-.012.112-.033a.098.098 0 00.037-.084.094.094 0 00-.039-.079.416.416 0 00-.134-.053zm.872-.421l.015.483a.227.227 0 01-.059.166.25.25 0 01-.167.077l-.025.002a.266.266 0 01-.188-.057.229.229 0 01-.076-.171l-.015-.484.093-.003.015.481a.168.168 0 00.046.119c.029.027.07.04.123.038.053-.001.093-.017.12-.046a.16.16 0 00.038-.121l-.015-.481.095-.003zm.17.706l-.022-.711.232-.007a.27.27 0 01.175.042c.04.031.061.077.063.14a.145.145 0 01-.025.089.195.195 0 01-.076.062c.039.009.07.029.093.058.023.03.036.065.037.107a.191.191 0 01-.057.152.255.255 0 01-.174.06l-.246.008zm.083-.336l.008.256.155-.005a.146.146 0 00.102-.037.12.12 0 00.035-.094c-.003-.086-.051-.127-.144-.124l-.156.004zm-.002-.075l.141-.004a.146.146 0 00.097-.034.103.103 0 00.035-.085c-.001-.039-.014-.067-.037-.083-.023-.018-.058-.025-.105-.024l-.138.004.007.226zm.64-.323l.251.572.214-.587.121-.003.023.71-.094.003-.009-.277v-.299l-.216.583-.071.002-.251-.566.019.297.008.276-.094.003-.022-.71.121-.004zm.875.684l-.094.003-.022-.711.093-.003.023.711zm.628-.654l-.228.007.019.634-.093.003-.02-.634-.228.007-.002-.077.55-.017.002.077zm.74.426l-.298.009-.061.187-.096.003.249-.719.082-.002.294.702-.096.003-.074-.183zm-.272-.069l.242-.008-.131-.328-.111.336zm.623-.035l.008.278-.093.003-.023-.711.263-.008a.266.266 0 01.184.054c.045.038.069.09.071.156.002.069-.018.123-.06.161-.042.039-.103.059-.183.062l-.167.005zm-.003-.077l.169-.005c.05-.002.088-.014.114-.039.026-.024.038-.059.037-.103a.136.136 0 00-.044-.101.161.161 0 00-.111-.036l-.173.006.008.278zm.633.057l.009.278-.094.003-.022-.71.262-.008a.26.26 0 01.184.053c.046.039.07.091.072.156a.202.202 0 01-.06.162.275.275 0 01-.183.061l-.168.005zm-.002-.076l.168-.006a.168.168 0 00.114-.038c.026-.025.038-.06.037-.104a.133.133 0 00-.043-.1.155.155 0 00-.111-.036l-.174.005.009.279zm.639.258l.337-.01.003.076-.431.014-.022-.711.094-.003.019.634zm.547.06l-.094.003-.022-.711.094-.003.022.711zm.688-.247a.266.266 0 01-.079.177.27.27 0 01-.184.066.246.246 0 01-.204-.084.363.363 0 01-.084-.239l-.002-.068a.41.41 0 01.03-.176.263.263 0 01.246-.163.26.26 0 01.184.058c.046.04.075.098.085.172l-.095.003c-.01-.056-.029-.097-.057-.121-.028-.025-.066-.036-.115-.035a.169.169 0 00-.139.071.305.305 0 00-.044.19l.002.069a.31.31 0 00.054.183.158.158 0 00.137.064.186.186 0 00.119-.039c.027-.025.044-.067.051-.125l.095-.003zm.521.023l-.297.01-.061.187-.097.003.249-.719.082-.002.294.702-.096.003-.074-.184zm-.271-.068l.241-.008-.131-.328-.11.336zm.945-.401l-.229.007.02.634-.093.003-.02-.634-.228.007-.002-.077.549-.017.003.077zm.225.627l-.093.003-.022-.711.093-.003.022.711zm.708-.355a.427.427 0 01-.029.184.274.274 0 01-.096.122.273.273 0 01-.149.045.27.27 0 01-.15-.036.277.277 0 01-.105-.114.443.443 0 01-.042-.177l-.001-.051a.408.408 0 01.03-.182.271.271 0 01.096-.123.276.276 0 01.148-.047.275.275 0 01.152.037.268.268 0 01.104.116.442.442 0 01.041.181l.001.045zm-.094-.043a.322.322 0 00-.057-.192.166.166 0 00-.144-.063.168.168 0 00-.138.072.305.305 0 00-.046.189l.001.052a.326.326 0 00.057.191.167.167 0 00.145.066.169.169 0 00.138-.07.318.318 0 00.045-.192l-.001-.053zm.791.354l-.094.003-.375-.536.018.547-.095.003-.022-.71.094-.003.376.539-.017-.55.093-.003.022.71z"
                    ></path>
                    <path
                        id="email"
                        fill="#535353"
                        d="M292.194 338.588l.006.059a.187.187 0 01.15-.073c.068-.001.116.025.142.078a.182.182 0 01.157-.085c.057-.001.1.015.129.048.029.032.044.082.046.149l.008.337-.142.004-.008-.337c-.001-.03-.007-.052-.019-.065-.012-.014-.033-.02-.062-.02a.088.088 0 00-.087.063l.009.363-.141.003-.008-.336c-.001-.031-.007-.053-.02-.066-.012-.014-.033-.02-.062-.019-.04.001-.068.018-.085.051l.009.374-.142.003-.012-.528.132-.003zm1.052.504a.217.217 0 01-.015-.047.168.168 0 01-.132.06.192.192 0 01-.13-.042.145.145 0 01-.053-.112.149.149 0 01.059-.13.307.307 0 01.179-.05l.065-.001-.001-.031a.085.085 0 00-.02-.058c-.013-.014-.033-.021-.06-.02a.082.082 0 00-.056.018.056.056 0 00-.018.047l-.142.004c0-.031.009-.06.027-.086a.19.19 0 01.078-.063.29.29 0 01.116-.025.227.227 0 01.156.046c.039.031.059.077.061.136l.005.229a.26.26 0 00.024.113v.008l-.143.004zm-.118-.096c.02 0 .039-.005.057-.015a.087.087 0 00.038-.038l-.002-.091-.053.001c-.071.002-.108.027-.111.076v.008c0 .018.007.032.019.043.013.012.03.017.052.016zm.502-.572l.003.13.09-.002.003.104-.091.002.007.263c0 .02.004.034.012.042.007.008.022.012.043.012a.23.23 0 00.041-.005l.003.107a.31.31 0 01-.085.015c-.099.002-.151-.047-.155-.146l-.007-.285-.077.002-.002-.104.077-.001-.003-.13.141-.004zm.311.181a.174.174 0 01.139-.071c.115-.003.175.063.179.196l.008.338-.141.003-.008-.334c0-.03-.007-.053-.021-.067-.013-.014-.035-.021-.065-.02-.042.001-.071.018-.089.05l.009.375-.141.004-.018-.75.141-.004.007.28zm.581.457l-.141.003-.012-.528.141-.003.012.528zm-.165-.661a.07.07 0 01.02-.053.082.082 0 01.057-.022.08.08 0 01.059.019.07.07 0 01.022.052.065.065 0 01-.021.053.08.08 0 01-.056.022.085.085 0 01-.058-.019.072.072 0 01-.023-.052zm.525.662a.258.258 0 01-.191-.067.256.256 0 01-.077-.188v-.013a.33.33 0 01.027-.143.224.224 0 01.085-.099.24.24 0 01.128-.037.22.22 0 01.172.064c.043.045.065.109.067.193l.001.057-.336.008c.005.034.02.062.043.082.024.02.053.03.088.029a.153.153 0 00.126-.062l.071.076a.207.207 0 01-.084.073.293.293 0 01-.12.027zm-.026-.433a.09.09 0 00-.067.03.146.146 0 00-.032.082l.196-.005v-.011a.102.102 0 00-.027-.072.093.093 0 00-.07-.024zm.607.264a.047.047 0 00-.027-.04.275.275 0 00-.083-.025c-.126-.023-.19-.075-.192-.156a.143.143 0 01.055-.118.232.232 0 01.152-.051.255.255 0 01.162.043.15.15 0 01.063.122l-.141.003a.064.064 0 00-.021-.049c-.013-.013-.033-.019-.061-.019a.088.088 0 00-.055.018.048.048 0 00-.018.041c0 .016.008.028.022.038a.246.246 0 00.076.023.637.637 0 01.09.021c.075.026.113.072.115.14a.138.138 0 01-.06.118.266.266 0 01-.159.049.28.28 0 01-.118-.021.194.194 0 01-.082-.063.15.15 0 01-.032-.089l.134-.003a.076.076 0 00.029.057.11.11 0 00.07.018.103.103 0 00.061-.016.053.053 0 00.02-.041zm.203-.128a.323.323 0 01.027-.141.223.223 0 01.085-.097.254.254 0 01.131-.037.24.24 0 01.176.062.262.262 0 01.08.175l.002.037a.274.274 0 01-.063.196.24.24 0 01-.181.078.236.236 0 01-.184-.069.285.285 0 01-.073-.198v-.006zm.142.007c.001.05.011.088.031.115a.094.094 0 00.082.037.094.094 0 00.079-.041.224.224 0 00.026-.126.2.2 0 00-.032-.114.095.095 0 00-.082-.039.092.092 0 00-.079.043.215.215 0 00-.025.125zm.569-.283l.006.061a.184.184 0 01.15-.074c.056-.002.098.014.126.046a.229.229 0 01.046.146l.008.342-.141.003-.008-.338c-.001-.03-.008-.051-.021-.064-.014-.014-.035-.02-.066-.019a.097.097 0 00-.088.053l.009.372-.141.003-.012-.528.132-.003zm.449.449a.07.07 0 01.021-.056.086.086 0 01.057-.022.08.08 0 01.057.02.07.07 0 01.025.054c0 .022-.007.04-.022.055a.077.077 0 01-.057.021.075.075 0 01-.057-.019.065.065 0 01-.024-.053zm.591.055a.137.137 0 01-.015-.047.168.168 0 01-.132.06.18.18 0 01-.13-.042.145.145 0 01-.053-.112.146.146 0 01.059-.13.312.312 0 01.179-.05l.065-.001-.001-.03c-.001-.025-.007-.044-.02-.058-.013-.015-.033-.022-.06-.021a.093.093 0 00-.056.018.062.062 0 00-.019.048l-.141.003a.137.137 0 01.027-.086.181.181 0 01.078-.062.286.286 0 01.116-.026.232.232 0 01.156.046.173.173 0 01.061.136l.005.229c.001.05.009.088.024.114v.008l-.143.003zm-.119-.095a.142.142 0 00.058-.015.095.095 0 00.038-.039l-.002-.091-.053.002c-.071.001-.108.027-.111.076v.008c0 .017.006.032.019.043.013.011.03.016.051.016zm.321-.178a.324.324 0 01.05-.198.18.18 0 01.151-.076.16.16 0 01.128.054l-.006-.269.142-.004.017.75-.127.003-.008-.056a.166.166 0 01-.135.069.18.18 0 01-.151-.069.33.33 0 01-.061-.204zm.141.007c.001.05.011.087.029.113a.084.084 0 00.076.038c.043-.001.074-.02.091-.057l-.005-.209c-.019-.036-.049-.054-.093-.053-.068.002-.1.058-.098.168zm1.244-.033a.349.349 0 01-.057.2.181.181 0 01-.15.077.143.143 0 01-.073-.016.116.116 0 01-.047-.051.151.151 0 01-.126.071.123.123 0 01-.112-.057.24.24 0 01-.033-.158.423.423 0 01.037-.144.273.273 0 01.079-.099.185.185 0 01.105-.036.215.215 0 01.12.03l.031.02-.018.283c-.003.026 0 .045.009.059.01.013.024.02.044.019.03-.001.054-.019.074-.054a.303.303 0 00.03-.138c.002-.114-.022-.201-.075-.26-.053-.06-.129-.089-.23-.087a.308.308 0 00-.28.191.517.517 0 00-.043.203c-.002.115.023.203.076.265s.13.092.233.089a.374.374 0 00.161-.037l.02.075a.23.23 0 01-.08.033.438.438 0 01-.322-.032.317.317 0 01-.139-.15.54.54 0 01-.045-.241.579.579 0 01.056-.243.404.404 0 01.363-.232.408.408 0 01.212.047c.06.034.105.083.136.147.031.065.045.14.044.226zm-.489.063a.183.183 0 00.013.098c.012.022.03.033.055.032.015 0 .03-.007.044-.022a.16.16 0 00.035-.061l.015-.232a.174.174 0 00-.039-.005.1.1 0 00-.087.05.32.32 0 00-.036.14zm.564-.071a.31.31 0 01.053-.197.19.19 0 01.154-.078.166.166 0 01.137.057l.005-.05.128-.003.012.51a.232.232 0 01-.029.122.205.205 0 01-.087.08.307.307 0 01-.247.009.2.2 0 01-.085-.058l.061-.087a.164.164 0 00.129.056.125.125 0 00.087-.032.114.114 0 00.029-.086l-.001-.028a.163.163 0 01-.127.058.19.19 0 01-.156-.071.312.312 0 01-.063-.196v-.006zm.141.007a.191.191 0 00.032.112.09.09 0 00.08.039c.043-.001.073-.018.091-.051l-.005-.222c-.02-.032-.051-.047-.093-.046a.093.093 0 00-.079.043.228.228 0 00-.026.125zm.577-.284l.006.059a.182.182 0 01.15-.072c.068-.002.115.024.142.077a.179.179 0 01.156-.084c.058-.002.101.014.13.047.028.032.043.082.045.149l.008.338-.142.003-.007-.337c-.001-.03-.008-.052-.02-.065-.012-.014-.032-.02-.062-.019-.042.001-.071.021-.087.062l.009.363-.141.003-.007-.336c-.001-.031-.008-.053-.02-.066-.012-.014-.033-.02-.062-.019-.04.001-.069.018-.086.052l.009.373-.141.003-.013-.528.133-.003zm1.052.504a.144.144 0 01-.015-.047.171.171 0 01-.132.06.19.19 0 01-.13-.042.143.143 0 01-.054-.112.151.151 0 01.059-.13.307.307 0 01.179-.05l.065-.001v-.031a.09.09 0 00-.021-.058c-.013-.014-.032-.021-.059-.02-.024 0-.043.006-.056.018a.061.061 0 00-.019.047l-.141.004a.143.143 0 01.026-.086.194.194 0 01.079-.063.285.285 0 01.115-.025.229.229 0 01.156.046c.04.031.06.077.061.136l.006.229c.001.05.009.088.023.113v.009l-.142.003zm-.119-.096a.11.11 0 00.057-.015.082.082 0 00.038-.038l-.002-.091-.052.001c-.071.002-.108.027-.112.076v.009a.06.06 0 00.02.043c.012.011.029.016.051.015zm.498.087l-.142.003-.012-.528.141-.003.013.528zm-.166-.661a.07.07 0 01.02-.053.083.083 0 01.058-.022c.024 0 .043.006.058.019a.07.07 0 01.022.052.068.068 0 01-.02.053.082.082 0 01-.057.022.08.08 0 01-.058-.019.07.07 0 01-.023-.052zm.431.655l-.141.003-.018-.75.142-.003.017.75zm.123-.072a.07.07 0 01.021-.056.085.085 0 01.056-.022.08.08 0 01.058.02.066.066 0 01.024.054.07.07 0 01-.021.055.08.08 0 01-.057.021.079.079 0 01-.058-.019.067.067 0 01-.023-.053zm.502-.047a.089.089 0 00.063-.023.075.075 0 00.024-.058l.132-.003a.177.177 0 01-.027.1.196.196 0 01-.077.071.248.248 0 01-.11.027.229.229 0 01-.18-.068.284.284 0 01-.07-.197v-.01a.282.282 0 01.06-.196.229.229 0 01.176-.077.222.222 0 01.16.053.199.199 0 01.065.148l-.132.004a.1.1 0 00-.027-.066.088.088 0 00-.065-.025.087.087 0 00-.074.038c-.016.024-.024.063-.022.117v.015c.001.054.01.093.028.116.017.024.042.035.076.034zm.276-.171a.317.317 0 01.027-.141.212.212 0 01.085-.097.245.245 0 01.131-.037.241.241 0 01.176.061.264.264 0 01.08.176l.002.036a.282.282 0 01-.064.197.232.232 0 01-.18.077.238.238 0 01-.184-.068.28.28 0 01-.073-.198v-.006zm.141.007c.001.05.012.088.031.114.02.026.047.039.082.038a.095.095 0 00.079-.041c.019-.027.028-.069.026-.127a.19.19 0 00-.031-.113.093.093 0 00-.082-.039.092.092 0 00-.079.042c-.019.028-.027.069-.026.126zm.572-.283l.006.059a.189.189 0 01.15-.073c.068-.001.116.024.142.077a.184.184 0 01.157-.084c.057-.001.1.015.129.047.029.033.044.083.046.15l.008.337-.142.003-.008-.336c-.001-.03-.007-.052-.019-.065-.012-.014-.033-.021-.062-.02a.088.088 0 00-.087.063l.009.362-.141.004-.008-.337c-.001-.03-.007-.052-.019-.066-.013-.013-.034-.019-.062-.019-.041.001-.069.018-.086.052l.009.374-.142.003-.012-.528.132-.003z"
                    ></path>
                    <path
                        id="phone"
                        fill="#535353"
                        d="M292.841 344.333a.175.175 0 01-.024.092.197.197 0 01-.071.066.207.207 0 01.084.067c.02.029.031.063.032.102a.19.19 0 01-.062.151.265.265 0 01-.174.058.265.265 0 01-.177-.052.19.19 0 01-.068-.149.18.18 0 01.029-.103.202.202 0 01.08-.07.177.177 0 01-.072-.063.155.155 0 01-.027-.091.185.185 0 01.058-.146.243.243 0 01.163-.057.24.24 0 01.165.051.181.181 0 01.064.144zm-.121.319a.103.103 0 00-.028-.074.095.095 0 00-.073-.026c-.03 0-.054.01-.071.029a.102.102 0 00-.026.075c.001.03.01.054.028.072a.092.092 0 00.074.027.098.098 0 00.071-.028.1.1 0 00.025-.075zm-.02-.31a.101.101 0 00-.023-.066.082.082 0 00-.063-.024.08.08 0 00-.061.026.1.1 0 00-.021.067.104.104 0 00.024.068.074.074 0 00.062.025c.027 0 .047-.009.061-.027a.105.105 0 00.021-.069zm.631-.214l.002.116h-.014a.245.245 0 00-.153.053.2.2 0 00-.067.136.189.189 0 01.142-.061.183.183 0 01.148.064.268.268 0 01.058.174.265.265 0 01-.028.126.216.216 0 01-.083.089.258.258 0 01-.124.033.226.226 0 01-.183-.075.299.299 0 01-.072-.207l-.001-.051a.456.456 0 01.039-.204.33.33 0 01.123-.14.383.383 0 01.19-.053h.023zm-.131.358a.112.112 0 00-.062.02.102.102 0 00-.04.047l.001.043c0 .047.01.084.029.11a.093.093 0 00.079.039.09.09 0 00.073-.037.15.15 0 00.026-.094c0-.039-.01-.07-.03-.093a.092.092 0 00-.076-.035zm.808.054a.357.357 0 01-.057.227c-.039.053-.099.08-.177.081a.214.214 0 01-.179-.073.352.352 0 01-.067-.219l-.002-.131c-.002-.099.017-.175.057-.227a.216.216 0 01.177-.08c.077-.001.137.023.179.073a.35.35 0 01.067.219l.002.13zm-.143-.141a.254.254 0 00-.027-.128c-.016-.026-.042-.039-.076-.039a.082.082 0 00-.073.04.247.247 0 00-.023.12l.003.173c.001.058.01.101.026.129.017.028.042.041.077.041.034-.001.059-.015.074-.042a.271.271 0 00.022-.125l-.003-.169zm.52.181l-.275.005-.002-.114.275-.005.002.114zm.525-.029l.08-.002.002.114-.08.001.002.154-.141.003-.003-.154-.291.005-.008-.089.288-.473.143-.003.008.444zm-.299.005l.157-.003-.004-.251-.009.017-.144.237zm.83-.465l.002.116h-.014a.245.245 0 00-.153.052.202.202 0 00-.067.136.191.191 0 01.142-.06.18.18 0 01.148.064.263.263 0 01.058.173.26.26 0 01-.028.126.21.21 0 01-.083.089.248.248 0 01-.124.034.233.233 0 01-.183-.075.299.299 0 01-.072-.207l-.001-.051a.46.46 0 01.039-.205.327.327 0 01.123-.139.373.373 0 01.19-.053h.023zm-.131.358a.11.11 0 00-.102.067l.001.043c0 .047.01.084.029.11a.09.09 0 00.079.038c.03 0 .055-.013.073-.037a.147.147 0 00.026-.094.14.14 0 00-.03-.093.09.09 0 00-.076-.034zm.808.054a.354.354 0 01-.057.226c-.039.053-.099.08-.177.082-.077.001-.137-.023-.179-.074a.35.35 0 01-.067-.218l-.002-.131c-.002-.099.017-.175.057-.227a.22.22 0 01.177-.081.216.216 0 01.179.074.35.35 0 01.067.218l.002.131zm-.143-.141a.251.251 0 00-.027-.128c-.016-.027-.042-.04-.076-.039a.08.08 0 00-.073.04.242.242 0 00-.023.12l.003.172c.001.058.01.101.026.129a.08.08 0 00.077.041c.034-.001.059-.015.074-.042a.267.267 0 00.022-.124l-.003-.169zm.52.181l-.275.004-.002-.113.275-.005.002.114zm.585-.057a.354.354 0 01-.057.226c-.04.053-.099.08-.177.082-.078.001-.137-.023-.179-.074a.343.343 0 01-.067-.218l-.003-.131c-.001-.099.018-.175.058-.227.04-.053.099-.079.177-.081.077-.001.137.023.179.074a.35.35 0 01.067.218l.002.131zm-.144-.141a.264.264 0 00-.026-.128.08.08 0 00-.076-.039c-.033 0-.058.013-.073.039a.249.249 0 00-.023.121l.003.172c.001.058.01.101.026.129.016.028.042.042.077.041.034-.001.059-.015.074-.042a.256.256 0 00.021-.124l-.003-.169zm.658.158l.08-.001.002.113-.08.002.002.154-.141.002-.002-.154-.292.005-.008-.088.288-.474.143-.002.008.443zm-.299.005l.158-.002-.005-.251-.009.016-.144.237zm.475-.09l.034-.362.399-.007.002.117-.283.005-.015.154a.215.215 0 01.107-.029.205.205 0 01.16.06c.039.041.06.1.061.175a.254.254 0 01-.027.124.206.206 0 01-.082.086.254.254 0 01-.127.032.269.269 0 01-.12-.024.198.198 0 01-.124-.179l.139-.003c.004.03.014.053.032.069a.097.097 0 00.07.023.087.087 0 00.074-.035.171.171 0 00.024-.098c-.001-.041-.012-.071-.032-.092-.02-.022-.048-.032-.085-.031a.12.12 0 00-.081.028l-.013.013-.113-.026zm.884.05a.182.182 0 01-.128.056.19.19 0 01-.152-.062.255.255 0 01-.059-.174.264.264 0 01.028-.128.218.218 0 01.083-.092.233.233 0 01.123-.035.219.219 0 01.125.033.234.234 0 01.087.099.377.377 0 01.034.151l.001.052a.412.412 0 01-.084.281.334.334 0 01-.248.112l-.035.002-.002-.118.031-.001c.123-.008.188-.067.196-.176zm-.095-.052a.1.1 0 00.058-.019.115.115 0 00.037-.043l-.001-.058a.193.193 0 00-.029-.111.085.085 0 00-.074-.038c-.028 0-.051.014-.069.04a.16.16 0 00-.026.098c.001.038.01.07.028.095a.092.092 0 00.076.036z"
                    ></path>
                    <g id="resume">
                        <path
                        id="analyzing-resume"
                        fill="#6B6A6A"
                        d="M308.871 326.66l-.257.004-.046.148-.156.002.252-.715.136-.003.279.707-.156.002-.052-.145zm-.219-.115l.177-.003-.094-.265-.083.268zm.581-.274l.005.061a.186.186 0 01.151-.073c.056-.001.098.015.126.047.028.033.043.081.044.147l.006.341-.141.003-.006-.338c0-.03-.007-.052-.02-.065-.014-.013-.035-.02-.066-.019a.096.096 0 00-.088.052l.006.373-.141.002-.009-.528.133-.003zm.746.516a.144.144 0 01-.015-.047.174.174 0 01-.132.059.19.19 0 01-.13-.042.148.148 0 01-.053-.113.15.15 0 01.06-.13.3.3 0 01.179-.048l.065-.002v-.03a.088.088 0 00-.02-.058c-.013-.014-.033-.021-.06-.021a.082.082 0 00-.056.018.06.06 0 00-.019.047l-.141.003a.137.137 0 01.027-.086.185.185 0 01.079-.062.286.286 0 01.116-.025.228.228 0 01.155.047.17.17 0 01.06.137l.004.229c.001.05.009.088.023.113v.008l-.142.003zm-.119-.096a.142.142 0 00.058-.015.093.093 0 00.038-.038l-.001-.091-.053.001c-.071.001-.108.026-.112.075v.008a.06.06 0 00.019.044c.013.011.03.016.051.016zm.498.089l-.142.003-.013-.75.142-.003.013.75zm.31-.205l.092-.33.151-.003-.201.614-.012.028c-.03.07-.081.105-.154.106a.198.198 0 01-.063-.008l-.002-.107h.022a.112.112 0 00.059-.013.074.074 0 00.031-.041l.016-.044-.195-.526.152-.003.104.327zm.468.078l.259-.005.002.114-.439.008-.001-.086.242-.333-.241.005-.002-.115.424-.007.001.083-.245.336zm.498.105l-.142.002-.009-.528.142-.002.009.528zm-.162-.662c0-.022.007-.039.02-.053a.084.084 0 01.058-.022c.024 0 .044.007.058.02a.07.07 0 01.023.052.07.07 0 01-.022.053.076.076 0 01-.056.021.08.08 0 01-.058-.019.072.072 0 01-.023-.052zm.399.129l.006.061a.183.183 0 01.15-.073c.056-.001.098.015.126.047.028.032.043.081.045.147l.006.341-.142.002-.005-.337c-.001-.03-.008-.052-.021-.065-.013-.013-.035-.02-.065-.019-.04 0-.07.018-.089.052l.007.372-.141.003-.01-.528.133-.003zm.415.253a.302.302 0 01.054-.196.185.185 0 01.155-.077.164.164 0 01.136.057l.005-.05.128-.002.009.51a.221.221 0 01-.03.122.197.197 0 01-.087.079.303.303 0 01-.133.029.281.281 0 01-.114-.021.2.2 0 01-.084-.058l.061-.087a.168.168 0 00.129.057.126.126 0 00.087-.032c.02-.02.03-.049.029-.086v-.028a.164.164 0 01-.127.057.184.184 0 01-.156-.071.31.31 0 01-.062-.197v-.006zm.141.008a.191.191 0 00.031.112c.02.027.046.04.08.04.043-.001.073-.018.091-.05l-.004-.223c-.019-.031-.05-.047-.092-.046a.09.09 0 00-.079.043.214.214 0 00-.027.124zm.972-.019l-.117.002.005.26-.147.003-.012-.711.264-.005c.084-.001.149.016.195.053.047.036.07.089.072.157a.221.221 0 01-.03.122.212.212 0 01-.094.079l.159.288v.007l-.157.003-.138-.258zm-.119-.117l.118-.002c.037-.001.066-.01.085-.029.02-.02.03-.046.029-.078 0-.034-.01-.06-.03-.079-.019-.019-.048-.028-.088-.027l-.117.002.003.213zm.733.376a.262.262 0 01-.191-.068.259.259 0 01-.076-.189v-.013a.33.33 0 01.028-.143.229.229 0 01.214-.134.214.214 0 01.171.065c.043.045.065.109.066.193l.001.057-.336.006a.123.123 0 00.13.112.152.152 0 00.127-.061l.07.076a.205.205 0 01-.084.072.293.293 0 01-.12.027zm-.024-.433a.09.09 0 00-.068.029.154.154 0 00-.031.082l.196-.004v-.011a.102.102 0 00-.027-.072c-.016-.017-.04-.025-.07-.024zm.605.267c0-.017-.009-.031-.026-.04a.275.275 0 00-.083-.025c-.126-.025-.19-.077-.191-.157a.143.143 0 01.056-.118.23.23 0 01.152-.05.244.244 0 01.161.044.15.15 0 01.063.122l-.141.003a.067.067 0 00-.02-.05c-.014-.013-.034-.019-.062-.019-.024.001-.042.006-.055.017a.052.052 0 00-.019.042.045.045 0 00.023.037.25.25 0 00.076.024.502.502 0 01.089.022c.075.026.113.072.114.14a.138.138 0 01-.06.118.268.268 0 01-.159.047.284.284 0 01-.119-.021.2.2 0 01-.081-.064.147.147 0 01-.031-.088l.134-.003a.072.072 0 00.028.057.11.11 0 00.07.019.103.103 0 00.061-.016c.014-.011.021-.024.02-.041zm.547.083a.177.177 0 01-.144.066c-.056.001-.1-.015-.13-.047-.031-.032-.047-.079-.048-.142l-.006-.346.141-.003.006.342c.001.055.026.082.076.081.048-.001.081-.018.098-.052l-.007-.374.142-.002.009.528-.132.002-.005-.053zm.367-.481l.005.059a.185.185 0 01.151-.072c.068-.001.115.025.141.078a.183.183 0 01.158-.083c.057-.001.1.015.128.048.029.033.044.083.045.15l.006.337-.142.002-.006-.336c0-.03-.006-.052-.018-.066-.012-.013-.033-.02-.063-.019-.042 0-.071.021-.086.062l.006.362-.141.003-.006-.337c0-.03-.007-.052-.019-.066-.012-.013-.033-.02-.062-.019a.093.093 0 00-.086.051l.007.374-.141.002-.01-.528.133-.002zm.986.521a.267.267 0 01-.191-.068.259.259 0 01-.076-.189v-.014a.325.325 0 01.028-.142.223.223 0 01.086-.098.24.24 0 01.128-.037.221.221 0 01.171.065c.043.045.065.11.066.193l.001.058-.336.006a.13.13 0 00.042.082c.024.02.053.03.088.03a.153.153 0 00.127-.062l.07.077a.212.212 0 01-.084.072.293.293 0 01-.12.027zm-.024-.434a.09.09 0 00-.067.03.143.143 0 00-.032.081l.196-.003v-.011a.102.102 0 00-.027-.072c-.016-.017-.04-.025-.07-.025zm.328.349a.072.072 0 01.021-.055.086.086 0 01.057-.022c.023 0 .042.006.058.02a.071.071 0 01.023.054.067.067 0 01-.021.055.08.08 0 01-.057.021.081.081 0 01-.058-.019.071.071 0 01-.023-.054zm.291-.005a.072.072 0 01.021-.055.081.081 0 01.057-.022c.023 0 .042.006.058.02a.071.071 0 01.023.054.068.068 0 01-.021.055.08.08 0 01-.057.021.081.081 0 01-.058-.019.071.071 0 01-.023-.054zm.291-.005a.072.072 0 01.021-.055.081.081 0 01.057-.022c.023 0 .042.006.058.02a.071.071 0 01.023.054.068.068 0 01-.021.055.08.08 0 01-.057.021.081.081 0 01-.058-.019.071.071 0 01-.023-.054z"
                        ></path>
                        <path
                        id="Rectangle 703"
                        fill="#C4C4C4"
                        d="M291.575 325.822a.299.299 0 01.293-.305l12.095-.253a.3.3 0 01.307.295l.022 1.298a.3.3 0 01-.294.305l-12.095.253a.3.3 0 01-.306-.295l-.022-1.298z"
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
                        d="M308.409 326.628c-.001-.028-.011-.049-.031-.063a.343.343 0 00-.106-.045.73.73 0 01-.121-.047c-.082-.042-.123-.1-.124-.174a.169.169 0 01.03-.103.213.213 0 01.092-.073.366.366 0 01.272-.002c.04.018.072.043.094.076a.195.195 0 01.035.114l-.146.002a.097.097 0 00-.032-.075c-.021-.018-.05-.026-.087-.026a.132.132 0 00-.083.025.07.07 0 00-.029.06c0 .023.012.042.036.057.023.016.058.03.103.043a.432.432 0 01.184.09.184.184 0 01.06.137.17.17 0 01-.068.146.3.3 0 01-.187.056.363.363 0 01-.149-.027.21.21 0 01-.142-.201l.147-.003c.001.079.049.117.142.115a.14.14 0 00.082-.022.072.072 0 00.028-.06zm.556.123a.177.177 0 01-.144.066c-.056.001-.1-.015-.13-.047-.031-.032-.047-.079-.048-.142l-.006-.346.141-.003.006.342c.001.055.026.082.076.081.048-.001.081-.018.098-.052l-.006-.374.141-.002.009.528-.132.003-.005-.054zm.462-.058a.093.093 0 00.063-.023.075.075 0 00.024-.058l.132-.002a.172.172 0 01-.027.099.198.198 0 01-.078.071.238.238 0 01-.11.026.229.229 0 01-.18-.068.293.293 0 01-.069-.198v-.01a.283.283 0 01.062-.196.229.229 0 01.177-.076.22.22 0 01.159.054.2.2 0 01.064.149l-.132.002a.095.095 0 00-.027-.065.083.083 0 00-.065-.025.085.085 0 00-.074.037c-.016.024-.024.063-.023.117v.014c.001.055.01.094.027.117.017.024.043.035.077.035zm.521-.01a.093.093 0 00.063-.022.08.08 0 00.025-.058l.132-.002a.18.18 0 01-.028.099.186.186 0 01-.078.071.243.243 0 01-.109.026.227.227 0 01-.18-.069.28.28 0 01-.069-.198v-.009a.281.281 0 01.061-.196.23.23 0 01.177-.076.224.224 0 01.16.054.2.2 0 01.063.149l-.132.002a.095.095 0 00-.027-.066.08.08 0 00-.064-.024.087.087 0 00-.075.037c-.016.024-.023.063-.022.117v.014c.001.055.01.094.027.117.017.024.042.035.076.034zm.547.105a.265.265 0 01-.191-.068.259.259 0 01-.076-.189v-.014a.311.311 0 01.028-.142.221.221 0 01.085-.098.246.246 0 01.129-.037.221.221 0 01.171.065c.043.045.065.11.066.193l.001.058-.336.006a.13.13 0 00.042.082c.024.02.053.03.088.03a.153.153 0 00.127-.062l.07.077a.22.22 0 01-.084.072.293.293 0 01-.12.027zm-.024-.434a.094.094 0 00-.068.03.143.143 0 00-.031.082l.196-.004v-.011c-.002-.031-.01-.055-.027-.072a.094.094 0 00-.07-.025zm.605.268c0-.018-.009-.031-.026-.04a.28.28 0 00-.083-.026c-.126-.024-.19-.076-.191-.157a.144.144 0 01.056-.118.235.235 0 01.152-.05.25.25 0 01.161.045.149.149 0 01.063.122l-.141.002a.062.062 0 00-.021-.049c-.013-.013-.033-.02-.061-.019a.082.082 0 00-.055.017.052.052 0 00-.019.041.046.046 0 00.023.038c.015.009.04.017.076.023a.771.771 0 01.089.022c.075.026.113.073.114.14a.138.138 0 01-.06.119.27.27 0 01-.159.047.284.284 0 01-.119-.021.208.208 0 01-.081-.064.148.148 0 01-.031-.089l.134-.002a.072.072 0 00.028.057.116.116 0 00.07.019.111.111 0 00.061-.016.05.05 0 00.02-.041zm.515-.009a.044.044 0 00-.027-.04.262.262 0 00-.082-.026c-.126-.024-.19-.076-.192-.157 0-.047.018-.086.056-.118a.24.24 0 01.152-.05.255.255 0 01.162.045.149.149 0 01.063.122l-.142.002a.065.065 0 00-.02-.049c-.013-.013-.034-.02-.061-.019a.082.082 0 00-.055.017.052.052 0 00-.019.041c0 .016.008.028.023.038a.23.23 0 00.075.023.771.771 0 01.089.022c.075.026.114.073.115.14a.138.138 0 01-.06.119.271.271 0 01-.16.047.28.28 0 01-.118-.021.205.205 0 01-.082-.064.155.155 0 01-.031-.089l.134-.002c.002.025.011.044.029.057a.114.114 0 00.07.019c.027-.001.047-.006.06-.016a.05.05 0 00.021-.041zm.37-.079l-.117.002-.025-.492.15-.003-.008.493zm-.057.078a.08.08 0 01.058.02.074.074 0 01.023.053c0 .022-.007.04-.021.054a.08.08 0 01-.057.022.08.08 0 01-.058-.02.072.072 0 01-.022-.053c0-.021.006-.039.02-.053a.078.078 0 01.057-.023z"
                        ></path>
                        <path
                        id="resume-name"
                        fill="#535353"
                        d="M292.5 326.946l-.256.005-.047.147-.155.003.252-.716.135-.002.279.706-.156.003-.052-.146zm-.219-.115l.178-.003-.094-.264-.084.267zm.457-.011a.32.32 0 01.052-.197.18.18 0 01.151-.076.16.16 0 01.128.055l-.005-.269.142-.003.013.75-.127.002-.008-.056a.166.166 0 01-.135.069.182.182 0 01-.151-.071.337.337 0 01-.06-.204zm.142.008c.001.05.01.087.028.113a.083.083 0 00.075.039c.044-.001.074-.02.092-.057l-.004-.209c-.018-.036-.049-.054-.092-.053-.068.001-.101.057-.099.167zm.755.245a.144.144 0 01-.015-.047.175.175 0 01-.133.059.184.184 0 01-.129-.043.142.142 0 01-.053-.112.15.15 0 01.06-.13.3.3 0 01.179-.048l.065-.002-.001-.03a.083.083 0 00-.02-.058c-.012-.014-.032-.021-.059-.021-.024 0-.043.006-.056.018a.057.057 0 00-.019.047l-.141.003a.137.137 0 01.027-.086.179.179 0 01.079-.062.281.281 0 01.115-.025.233.233 0 01.156.047.17.17 0 01.06.137l.004.229c.001.05.009.088.023.113v.008l-.142.003zm-.119-.096a.142.142 0 00.058-.015.093.093 0 00.038-.038l-.002-.091-.052.001c-.071.001-.108.026-.112.075v.008a.06.06 0 00.019.044c.013.011.03.016.051.016zm.472-.439l.005.059a.187.187 0 01.151-.071c.068-.001.115.025.141.078a.18.18 0 01.157-.083c.058-.001.101.015.129.048.029.032.044.082.045.149l.006.338-.142.002-.006-.337a.103.103 0 00-.018-.065c-.012-.014-.033-.02-.063-.02-.042.001-.071.022-.087.062l.007.363-.141.002-.006-.336c0-.031-.007-.053-.019-.066-.012-.014-.033-.02-.062-.019-.04 0-.069.017-.086.051l.007.373-.141.003-.01-.528.133-.003zm1.136.619l-.445.008-.002-.11.445-.008.002.11zm.241-.826l.192.513.172-.519.193-.003.012.711-.147.002-.003-.194.008-.336-.182.533-.101.002-.2-.526.02.335.004.194-.147.003-.012-.711.191-.004zm.994.694a.137.137 0 01-.015-.047.167.167 0 01-.132.059.19.19 0 01-.13-.042.145.145 0 01-.053-.113.15.15 0 01.06-.13.315.315 0 01.179-.048l.065-.001v-.03a.097.097 0 00-.02-.059c-.013-.014-.033-.021-.06-.021a.093.093 0 00-.056.018.062.062 0 00-.019.048l-.141.002a.133.133 0 01.027-.085.18.18 0 01.079-.063.286.286 0 01.116-.024.228.228 0 01.155.046.172.172 0 01.06.137l.004.229c.001.05.009.088.023.113v.009l-.142.002zm-.119-.096c.021 0 .04-.005.058-.015a.087.087 0 00.038-.038l-.001-.091-.053.001c-.071.001-.108.027-.112.075v.009c0 .017.007.032.019.043.013.011.03.016.051.016zm.506-.569l.002.13.091-.002.002.104-.091.001.005.264c0 .02.004.034.012.042.007.008.022.012.043.012a.237.237 0 00.041-.004l.002.107a.303.303 0 01-.085.014c-.099.001-.15-.048-.154-.147l-.005-.285-.077.001-.002-.103.077-.002-.002-.129.141-.003zm.31.182a.178.178 0 01.14-.07c.114-.002.174.064.178.197l.006.338-.141.003-.006-.335c-.001-.03-.008-.052-.021-.066-.013-.015-.035-.022-.065-.021-.042.001-.071.017-.089.049l.006.376-.141.002-.013-.75.141-.002.005.279zm.579.461l-.142.002-.009-.528.142-.002.009.528zm-.162-.662a.07.07 0 01.021-.053.082.082 0 01.057-.022c.024 0 .044.006.058.02a.07.07 0 01.023.052.072.072 0 01-.021.053.079.079 0 01-.057.021.08.08 0 01-.058-.019.072.072 0 01-.023-.052zm.522.665a.257.257 0 01-.191-.068.255.255 0 01-.076-.188v-.014a.315.315 0 01.028-.143.226.226 0 01.214-.134.218.218 0 01.171.065c.043.045.065.109.066.193l.001.057-.336.006a.133.133 0 00.042.083c.024.02.053.03.088.029a.152.152 0 00.127-.061l.07.076a.204.204 0 01-.084.072.265.265 0 01-.12.027zm-.024-.433a.09.09 0 00-.068.03.143.143 0 00-.031.081l.196-.003v-.011c-.002-.032-.01-.056-.027-.072a.094.094 0 00-.07-.025zm.605.267c0-.017-.009-.03-.026-.04a.284.284 0 00-.083-.025c-.126-.024-.19-.077-.191-.157a.144.144 0 01.056-.118.235.235 0 01.152-.05.25.25 0 01.161.044.15.15 0 01.063.122l-.141.003a.07.07 0 00-.021-.05c-.013-.013-.033-.019-.061-.019-.024.001-.042.006-.055.017a.052.052 0 00-.019.042.045.045 0 00.023.037c.015.01.04.018.076.024a.608.608 0 01.089.022c.075.026.113.073.114.14a.137.137 0 01-.06.118.27.27 0 01-.159.048.3.3 0 01-.119-.022.198.198 0 01-.081-.063.15.15 0 01-.031-.089l.134-.003a.072.072 0 00.028.058.11.11 0 00.07.018c.027 0 .047-.005.061-.016a.047.047 0 00.02-.041zm.204-.126c0-.053.009-.1.028-.141a.225.225 0 01.086-.097.254.254 0 01.131-.036c.071-.001.13.02.176.063a.258.258 0 01.078.176l.002.036a.282.282 0 01-.064.197.239.239 0 01-.181.076.239.239 0 01-.184-.07.28.28 0 01-.071-.198l-.001-.006zm.142.007a.2.2 0 00.03.115.093.093 0 00.082.038c.034 0 .06-.014.079-.04.019-.027.028-.069.027-.127a.19.19 0 00-.031-.113.093.093 0 00-.082-.039.09.09 0 00-.079.041c-.019.028-.027.069-.026.125zm.571-.279l.006.061a.185.185 0 01.15-.074c.056-.001.098.015.126.048.028.032.043.081.045.146l.006.341-.142.003-.005-.338c-.001-.03-.008-.051-.021-.064-.013-.014-.035-.02-.065-.02a.098.098 0 00-.089.052l.007.373-.141.002-.01-.528.133-.002zm.833.624l-.445.008-.002-.11.445-.008.002.11zm.321-.376l-.117.002.005.26-.147.003-.012-.711.264-.005c.084-.001.149.016.195.053.047.037.07.089.072.157 0 .049-.009.09-.03.123a.217.217 0 01-.094.078l.159.288v.007l-.157.003-.138-.258zm-.119-.117l.118-.002c.037 0 .066-.01.085-.029a.098.098 0 00.029-.078c0-.034-.01-.06-.03-.079-.019-.019-.048-.028-.088-.027l-.117.002.003.213zm.733.376a.262.262 0 01-.191-.068.255.255 0 01-.076-.188v-.014a.33.33 0 01.028-.143.222.222 0 01.086-.098.24.24 0 01.128-.036.214.214 0 01.171.065c.043.045.065.109.066.193l.001.057-.336.006a.133.133 0 00.042.083c.024.02.053.03.088.029a.152.152 0 00.127-.061l.07.076a.198.198 0 01-.084.072.293.293 0 01-.12.027zm-.024-.433a.09.09 0 00-.068.029.157.157 0 00-.031.082l.196-.003v-.012c-.001-.031-.01-.055-.027-.071a.089.089 0 00-.07-.025zm.605.267c0-.017-.009-.03-.026-.04a.275.275 0 00-.083-.025c-.126-.024-.19-.077-.191-.157a.144.144 0 01.056-.118.23.23 0 01.152-.05.244.244 0 01.161.044.15.15 0 01.063.122l-.141.003a.067.067 0 00-.02-.05c-.014-.013-.034-.019-.062-.019-.024.001-.042.006-.055.017a.052.052 0 00-.019.042.045.045 0 00.023.037c.015.01.04.017.076.024a.502.502 0 01.089.022c.075.026.113.073.114.14a.137.137 0 01-.06.118.261.261 0 01-.159.047.284.284 0 01-.119-.021.198.198 0 01-.081-.063.15.15 0 01-.031-.089l.134-.003a.072.072 0 00.028.057c.018.014.041.02.07.019a.103.103 0 00.061-.016.048.048 0 00.02-.041zm.547.083a.177.177 0 01-.144.066c-.056.001-.1-.015-.13-.047-.031-.032-.047-.079-.048-.142l-.006-.346.141-.002.006.341c.001.055.026.082.076.081.048-.001.081-.018.098-.052l-.007-.374.142-.002.009.528-.133.003-.004-.054zm.367-.481l.005.059a.185.185 0 01.151-.072c.068-.001.115.025.141.078a.183.183 0 01.158-.083c.057-.001.1.015.128.048.029.033.044.083.045.15l.006.337-.142.003-.006-.337c0-.03-.006-.052-.018-.065-.012-.014-.033-.021-.063-.02-.042 0-.071.021-.086.062l.006.363-.141.002-.006-.336c0-.031-.007-.053-.019-.066-.012-.014-.033-.02-.062-.02a.093.093 0 00-.086.051l.007.374-.141.002-.01-.528.133-.002zm.986.521a.267.267 0 01-.191-.068.259.259 0 01-.076-.189v-.014a.325.325 0 01.028-.142.229.229 0 01.086-.098.24.24 0 01.128-.037.218.218 0 01.171.066c.043.044.065.109.066.192l.001.058-.336.006a.13.13 0 00.042.082c.024.021.053.03.088.03a.155.155 0 00.127-.061l.07.076a.212.212 0 01-.084.072.293.293 0 01-.12.027zm-.024-.434a.09.09 0 00-.067.03.143.143 0 00-.032.082l.196-.004v-.011a.102.102 0 00-.027-.072c-.016-.017-.04-.025-.07-.025z"
                        ></path>
                        <path
                        id="attach-resume"
                        fill="#535353"
                        d="M293.54 326.909l-.275.005-.055.166-.128.002.256-.715.111-.002.281.706-.129.002-.061-.164zm-.242-.095l.206-.004-.108-.293-.098.297zm.958-.363l-.222.003.011.612-.123.002-.011-.611-.219.003-.002-.099.564-.01.002.1zm.615-.011l-.222.004.011.611-.123.002-.01-.611-.22.004-.002-.1.564-.01.002.1zm.441.438l-.276.005-.054.166-.129.002.256-.715.111-.002.281.706-.128.002-.061-.164zm-.243-.095l.206-.004-.108-.293-.098.297zm1.041.015a.257.257 0 01-.081.179.284.284 0 01-.193.067.28.28 0 01-.151-.037.28.28 0 01-.102-.113.419.419 0 01-.039-.172l-.001-.066a.402.402 0 01.032-.178.264.264 0 01.1-.12.281.281 0 01.154-.044.268.268 0 01.19.06.266.266 0 01.087.179l-.123.003c-.007-.051-.023-.088-.047-.11-.024-.022-.059-.033-.106-.032a.146.146 0 00-.123.061.297.297 0 00-.04.173l.001.063a.31.31 0 00.044.175c.028.04.069.059.122.058.048 0 .085-.012.109-.034.024-.022.038-.059.044-.11l.123-.002zm.679.22l-.123.002-.005-.316-.318.005.006.316-.124.002-.012-.71.123-.003.005.296.318-.005-.005-.296.123-.002.012.711zm.652-.286l-.137.003.004.274-.123.002-.013-.711.25-.005a.293.293 0 01.191.052.196.196 0 01.07.159.197.197 0 01-.127.195l.165.294v.006l-.132.003-.148-.272zm-.139-.096l.127-.003a.136.136 0 00.097-.033.108.108 0 00.033-.087.112.112 0 00-.034-.087c-.022-.021-.054-.031-.097-.031l-.13.002.004.239zm.917.039l-.292.005.004.219.341-.006.002.099-.465.008-.013-.711.462-.008.001.099-.337.006.003.197.292-.005.002.097zm.523.125a.083.083 0 00-.034-.071.395.395 0 00-.12-.05.547.547 0 01-.137-.055c-.066-.039-.099-.092-.1-.157a.172.172 0 01.067-.143.283.283 0 01.181-.059.313.313 0 01.133.025.22.22 0 01.093.077c.022.033.034.07.035.111l-.123.002a.11.11 0 00-.037-.086c-.023-.021-.057-.031-.1-.03-.04 0-.072.01-.094.027a.088.088 0 00-.032.073.08.08 0 00.038.065.42.42 0 00.12.049c.055.015.1.033.134.053a.215.215 0 01.075.071.194.194 0 01.025.095.17.17 0 01-.066.143.292.292 0 01-.184.055.348.348 0 01-.142-.025.253.253 0 01-.102-.078.201.201 0 01-.038-.116l.124-.002c0 .04.014.071.041.093a.18.18 0 00.116.031c.043-.001.075-.01.096-.028a.084.084 0 00.031-.07zm.743-.541l.008.475a.23.23 0 01-.069.181.28.28 0 01-.192.07.279.279 0 01-.195-.062.235.235 0 01-.075-.18l-.008-.474.123-.002.008.475c.001.048.014.084.038.108.025.025.06.037.107.036.095-.002.142-.053.14-.153l-.008-.471.123-.003zm.292-.005l.215.542.195-.549.16-.003.012.711-.123.002-.004-.234.007-.314-.201.552-.088.001-.219-.543.018.312.004.235-.123.002-.013-.711.16-.003zm1.139.374l-.292.005.003.219.342-.006.001.098-.464.009-.013-.711.462-.008.001.099-.338.006.004.196.292-.005.002.098zm.178.375l-.093.002.266-.777.093-.001-.266.776zm.911-.308a.257.257 0 01-.081.179.292.292 0 01-.194.067.286.286 0 01-.15-.037.267.267 0 01-.102-.113.44.44 0 01-.04-.172l-.001-.067a.411.411 0 01.033-.177.264.264 0 01.1-.12.28.28 0 01.153-.045.276.276 0 01.191.061.27.27 0 01.086.179l-.123.002c-.006-.051-.022-.087-.046-.109a.15.15 0 00-.106-.032.141.141 0 00-.123.061.29.29 0 00-.041.173l.001.063a.319.319 0 00.044.175c.029.04.069.059.122.058.049-.001.085-.012.109-.034.024-.023.039-.059.045-.11l.123-.002zm.362.07l.171-.559.136-.002-.243.715-.12.002-.267-.706.135-.003.188.553z"
                        ></path>
                    </g>
                    <path
                        id="app-header"
                        fill="#404040"
                        d="M278.452 312.618l-.129.143.011.371-.145.004-.031-1.097.144-.004.016.542.469-.556.175-.005-.416.497.481.599-.173.005-.402-.499zm.855.486l-.144.004-.031-1.097.144-.004.031 1.097zm.652-.463l-.256.007.013.444-.145.005-.032-1.098.362-.01c.123-.004.218.021.286.076.068.054.104.135.107.243a.293.293 0 01-.051.18.327.327 0 01-.149.118l.27.459v.009l-.155.004-.25-.437zm-.26-.111l.222-.006a.247.247 0 00.168-.061.186.186 0 00.06-.151c-.002-.068-.024-.119-.065-.154s-.1-.052-.176-.05l-.221.006.012.416zm1.082.021l-.129.143.01.371-.144.004-.031-1.097.144-.004.015.542.47-.556.174-.005-.416.497.482.599-.173.005-.402-.499zm.842.368l.518-.015.003.118-.662.02-.032-1.098.145-.004.028.979zm1.296-.206l-.458.014-.095.289-.148.004.385-1.109.126-.004.45 1.086-.148.004-.112-.284zm-.418-.107l.371-.01-.2-.508-.171.518zm1.665.358l-.145.004-.575-.83.025.846-.145.004-.032-1.097.145-.004.576.833-.024-.849.143-.004.032 1.097zm.255-.007l-.031-1.098.308-.009a.503.503 0 01.254.056.434.434 0 01.174.176.592.592 0 01.069.266l.002.07a.584.584 0 01-.053.274.418.418 0 01-.165.185.532.532 0 01-.255.071l-.303.009zm.116-.983l.025.86.152-.004a.322.322 0 00.255-.112c.061-.071.089-.17.085-.298l-.002-.065a.428.428 0 00-.096-.287.31.31 0 00-.251-.099l-.168.005zm.796 1.175l-.08-.052a.364.364 0 00.068-.205l-.004-.126.136-.004.003.109a.36.36 0 01-.033.154.343.343 0 01-.09.124zm.929-.592l.025.145.027-.132.194-.772.121-.003.233.76.034.131.019-.148.148-.756.145-.004-.233 1.105-.132.004-.248-.793-.019-.084-.015.085-.211.806-.131.004-.296-1.09.145-.004.194.746zm1.7.011l-.458.013-.094.29-.149.004.386-1.11.126-.003.449 1.085-.147.005-.113-.284zm-.418-.107l.372-.011-.201-.508-.171.519zm1.215.465l-.119.004.422-1.205.118-.004-.421 1.205zm1.314-.622a.682.682 0 01-.274-.123.256.256 0 01-.09-.191.268.268 0 01.097-.217.411.411 0 01.266-.093.456.456 0 01.202.038c.06.028.106.067.14.117a.3.3 0 01.053.167l-.144.004a.2.2 0 00-.068-.154.256.256 0 00-.179-.053.27.27 0 00-.166.053.156.156 0 00-.055.132.142.142 0 00.059.112c.039.03.104.056.196.079a.866.866 0 01.215.079.277.277 0 01.159.249.258.258 0 01-.097.217.443.443 0 01-.275.088.513.513 0 01-.211-.037.352.352 0 01-.154-.115.29.29 0 01-.058-.169l.145-.005a.192.192 0 00.077.156c.05.037.116.054.198.052a.287.287 0 00.173-.052.151.151 0 00.057-.129.145.145 0 00-.06-.123.629.629 0 00-.206-.082zm1.43-.065a.68.68 0 01-.046.283.412.412 0 01-.148.188.424.424 0 01-.229.07.418.418 0 01-.231-.057.43.43 0 01-.16-.177.656.656 0 01-.064-.272l-.003-.079a.675.675 0 01.047-.281.415.415 0 01.149-.19.422.422 0 01.228-.072.41.41 0 01.393.238.687.687 0 01.062.28l.002.069zm-.145-.067a.495.495 0 00-.087-.297.256.256 0 00-.221-.098.254.254 0 00-.213.111.483.483 0 00-.072.291l.003.081a.493.493 0 00.087.296c.055.07.129.104.221.101a.26.26 0 00.214-.108.494.494 0 00.07-.295l-.002-.082zm.964.072l-.458.013.014.485-.144.004-.032-1.098.677-.019.003.119-.532.015.01.376.459-.013.003.118zm1.003-.523l-.351.01.028.979-.144.004-.028-.979-.35.01-.003-.119.844-.024.004.119zm.428.621l.025.144.027-.132.194-.772.121-.003.233.76.034.131.019-.148.148-.756.145-.004-.233 1.105-.132.004-.248-.793-.019-.083-.015.084-.211.806-.131.004-.296-1.09.144-.004.195.747zm1.7.01l-.458.013-.094.29-.149.004.386-1.11.126-.003.449 1.085-.148.005-.112-.284zm-.418-.107l.372-.011-.201-.508-.171.519zm1.213-.073l-.256.007.012.444-.144.004-.032-1.097.362-.011a.43.43 0 01.286.076c.068.055.103.136.107.243a.294.294 0 01-.051.181.331.331 0 01-.15.118l.27.458.001.009-.155.005-.25-.437zm-.26-.111l.222-.007a.248.248 0 00.168-.06.188.188 0 00.06-.152.2.2 0 00-.065-.154.255.255 0 00-.176-.05l-.221.006.012.417zm1.422.014l-.473.013.011.389.55-.016.003.119-.694.02-.031-1.098.686-.02.004.12-.543.015.01.353.474-.014.003.119zm.66.583l-.119.003.422-1.205.119-.003-.422 1.205zm1.595-.626l-.459.014.014.484-.144.004-.031-1.097.676-.02.004.119-.533.016.011.375.458-.013.004.118zm.998-.642l.021.746a.345.345 0 01-.09.257.392.392 0 01-.258.119l-.038.002a.405.405 0 01-.289-.089.345.345 0 01-.115-.264l-.022-.748.143-.004.021.743c.002.08.026.141.071.184.044.042.107.062.188.06.081-.002.143-.026.185-.071a.253.253 0 00.06-.187l-.022-.744.145-.004zm.4.969l.518-.015.003.118-.662.019-.032-1.097.145-.005.028.98zm.827-.024l.518-.015.003.118-.662.019-.032-1.097.145-.004.028.979zm1.763-.912l-.351.01.028.979-.143.004-.028-.979-.351.011-.003-.12.845-.024.003.119zm.345.97l-.144.004-.032-1.098.144-.004.032 1.098zm.419-1.111l.383.885.331-.906.187-.005.031 1.098-.144.004-.012-.428v-.461l-.333.899-.11.003-.384-.876.028.458.012.428-.144.004-.031-1.098.186-.005zm1.79.539l-.474.014.011.389.55-.016.004.118-.694.02-.032-1.097.687-.02.003.119-.542.016.01.352.473-.013.004.118zm-27.333-3.135l.248-.009.048 1.332a.554.554 0 01-.147.428.596.596 0 01-.424.168c-.186.007-.333-.036-.44-.128a.52.52 0 01-.17-.396l.247-.009a.35.35 0 00.096.249c.062.058.148.085.26.081a.324.324 0 00.243-.106.374.374 0 00.087-.274l-.048-1.336zm1.553 1.689c-.089.113-.223.173-.402.179-.148.005-.263-.034-.344-.117-.081-.084-.124-.211-.131-.381l-.032-.909.238-.009.032.903c.007.212.097.315.268.309.182-.007.3-.079.356-.217l-.037-1.017.238-.009.05 1.398-.226.008-.01-.138zm.774-1.289l.014.176a.509.509 0 01.409-.217c.294-.01.449.151.463.485l.033.923-.238.009-.033-.925c-.004-.101-.03-.175-.077-.221-.047-.047-.117-.069-.212-.065a.343.343 0 00-.201.069.42.42 0 00-.131.168l.036.996-.238.008-.05-1.398.225-.008zm1.536 1.345l-.238.009-.049-1.398.237-.009.05 1.398zm-.32-1.759a.15.15 0 01.031-.1c.023-.027.058-.042.104-.044.047-.001.082.011.107.037a.145.145 0 01.04.097.14.14 0 01-.033.098.137.137 0 01-.104.042c-.046.002-.082-.01-.107-.035a.138.138 0 01-.038-.095zm.614 1.036a.834.834 0 01.066-.372.607.607 0 01.215-.262.615.615 0 01.325-.101.586.586 0 01.466.182c.122.127.187.301.195.519v.017a.842.842 0 01-.065.37.6.6 0 01-.213.26.615.615 0 01-.329.102.586.586 0 01-.466-.181c-.121-.128-.186-.3-.194-.517v-.017zm.24.02a.607.607 0 00.12.369.344.344 0 00.293.131.342.342 0 00.283-.152c.068-.099.099-.233.093-.405a.599.599 0 00-.123-.368.343.343 0 00-.293-.133.338.338 0 00-.279.151c-.069.096-.1.232-.094.407zm1.981-.572a.754.754 0 00-.118-.004c-.156.005-.259.076-.31.211l.035.992-.238.009-.05-1.398.232-.008.009.161a.37.37 0 01.326-.199.242.242 0 01.106.014l.008.222zm1.955.284l-.786.028.03.831-.247.008-.067-1.881 1.16-.041.007.204-.913.032.023.644.786-.028.007.203zm1.012-.39a.87.87 0 00-.117-.005c-.156.006-.259.077-.31.212l.035.992-.238.009-.05-1.398.232-.008.009.161a.37.37 0 01.325-.199.245.245 0 01.107.014l.007.222zm.148.467a.849.849 0 01.067-.372.598.598 0 01.539-.362.584.584 0 01.467.181c.122.128.187.301.194.52l.001.016a.84.84 0 01-.065.37.59.59 0 01-.542.362.583.583 0 01-.466-.181c-.122-.128-.186-.3-.194-.517l-.001-.017zm.241.02a.6.6 0 00.12.37.346.346 0 00.293.13.342.342 0 00.283-.152c.067-.098.098-.233.092-.405a.592.592 0 00-.122-.368.346.346 0 00-.294-.133.343.343 0 00-.279.151c-.068.097-.1.232-.093.407zm1.525-.77l.014.176a.504.504 0 01.409-.217c.294-.01.449.151.463.484l.033.924-.238.009-.033-.926c-.004-.1-.03-.174-.077-.221-.046-.046-.117-.068-.212-.064a.33.33 0 00-.201.069.416.416 0 00-.131.167l.036.997-.238.008-.05-1.398.225-.008zm1.539-.394l.012.339.26-.01.006.185-.26.009.031.867c.002.056.015.098.039.126.025.027.065.039.12.037a.587.587 0 00.113-.02l.007.194a.707.707 0 01-.182.033c-.106.003-.188-.026-.244-.089a.421.421 0 01-.091-.272l-.03-.867-.254.009-.006-.185.253-.009-.012-.338.238-.009zm2.318.785l-.811.029.024.667.942-.034.007.203-1.189.043-.067-1.881 1.177-.043.007.205-.93.033.022.605.811-.029.007.202zm.608-.55l.014.175a.505.505 0 01.409-.216c.294-.011.448.15.463.484l.033.923-.238.009-.033-.925c-.004-.101-.03-.175-.077-.221-.047-.047-.117-.068-.213-.065a.348.348 0 00-.201.069c-.056.044-.1.1-.13.168l.035.996-.238.009-.049-1.398.225-.008zm1.194.645c-.007-.214.037-.388.134-.522a.477.477 0 01.39-.211.482.482 0 01.393.154l-.026-.728.238-.009.071 1.985-.219.008-.017-.15a.482.482 0 01-.391.19.477.477 0 01-.402-.185c-.106-.129-.162-.3-.17-.514l-.001-.018zm.239.019a.626.626 0 00.111.368c.069.088.16.129.275.125a.345.345 0 00.323-.216l-.023-.642a.35.35 0 00-.335-.186.318.318 0 00-.267.145c-.062.093-.09.228-.084.406zm3.049-.296l-.811.029.023.667.943-.034.007.203-1.189.043-.067-1.881 1.176-.042.008.204-.93.033.021.605.812-.029.007.202zm.607-.55l.014.175a.507.507 0 01.41-.216c.294-.011.448.15.463.484l.032.924-.237.008-.033-.925c-.005-.101-.031-.174-.078-.221-.046-.047-.117-.068-.212-.065a.348.348 0 00-.201.069c-.057.044-.1.1-.13.168l.035.996-.238.009-.05-1.398.225-.008zm1.196.645c-.007-.218.037-.393.132-.525a.484.484 0 01.392-.208.48.48 0 01.404.167l.006-.156.217-.007.049 1.364a.572.572 0 01-.146.434.584.584 0 01-.424.171.697.697 0 01-.296-.054.508.508 0 01-.227-.169l.119-.148a.465.465 0 00.381.177.36.36 0 00.266-.108.376.376 0 00.088-.28l-.004-.12a.49.49 0 01-.384.179.476.476 0 01-.403-.183c-.105-.129-.162-.306-.17-.534zm.241.019a.63.63 0 00.109.368.313.313 0 00.275.125.348.348 0 00.323-.217l-.022-.638a.355.355 0 00-.336-.189.317.317 0 00-.266.145c-.062.093-.09.228-.083.406zm1.579.628l-.238.008-.05-1.398.238-.008.05 1.398zm-.321-1.76a.14.14 0 01.032-.099c.023-.028.057-.043.104-.044.046-.002.082.01.107.036a.144.144 0 01.039.097.135.135 0 01-.033.098c-.023.027-.057.041-.104.043-.046.001-.081-.01-.106-.035a.144.144 0 01-.039-.096zm.878.34l.014.175a.505.505 0 01.409-.216c.294-.011.448.151.463.484l.033.924-.238.008-.033-.925c-.004-.101-.03-.174-.077-.221-.047-.046-.117-.068-.213-.065a.342.342 0 00-.201.07.423.423 0 00-.13.167l.035.996-.238.009-.049-1.398.225-.008zm1.856 1.359a.61.61 0 01-.467-.169.697.697 0 01-.195-.494l-.002-.044a.852.852 0 01.065-.374.623.623 0 01.212-.263.552.552 0 01.306-.104.519.519 0 01.428.164c.104.116.161.286.169.509l.003.099-.942.034a.505.505 0 00.131.331c.08.081.179.12.298.116a.406.406 0 00.211-.06.542.542 0 00.149-.142l.149.108c-.11.185-.282.281-.515.289zm-.074-1.252a.314.314 0 00-.238.115.506.506 0 00-.111.298l.697-.024v-.019a.459.459 0 00-.108-.278.297.297 0 00-.24-.092zm1.47 1.202a.607.607 0 01-.467-.169.705.705 0 01-.195-.494l-.001-.044a.838.838 0 01.065-.374.616.616 0 01.212-.263.551.551 0 01.305-.104.518.518 0 01.428.164c.105.116.161.286.169.509l.004.1-.943.033a.5.5 0 00.132.331c.08.081.179.12.297.116a.41.41 0 00.212-.06.539.539 0 00.148-.142l.149.109c-.11.184-.281.28-.515.288zm-.074-1.252a.319.319 0 00-.238.115.513.513 0 00-.11.299l.697-.025-.001-.018a.453.453 0 00-.108-.279.297.297 0 00-.24-.092zm1.523-.01a.631.631 0 00-.117-.005c-.156.005-.26.076-.311.211l.036.993-.238.008-.05-1.398.231-.008.01.161a.37.37 0 01.325-.199.24.24 0 01.106.014l.008.223z"
                    ></path>
                    <g id="wyze-logo-job-app">
                        <path
                        fill="url(#paint14_linear)"
                        d="M316.063 308.206l-.349.009 1.16 1.685.032 1.274.35-.009-.033-1.274 1.144-1.743-.384.01-.941 1.452-.979-1.404z"
                        ></path>
                        <path
                        fill="url(#paint15_linear)"
                        d="M312.327 308.301l.384-.01 1.302 2.492 1.177-2.555.349-.008-1.387 3.09-.126.003-.125.004-.566-1.088-.51 1.115-.107.002-.174.005-1.544-3.017.419-.01 1.252 2.526.462-1.01-.806-1.539z"
                        ></path>
                        <path
                        fill="url(#paint16_linear)"
                        d="M321.367 310.73l.009.331-2.759.07.227-.338 1.807-2.37-1.996.05-.008-.332 2.723-.069-.236.338-1.851 2.372 2.084-.052z"
                        ></path>
                        <path
                        fill="url(#paint17_linear)"
                        d="M324.233 308l.009.332-2.724.069-.008-.332 2.723-.069z"
                        ></path>
                        <path
                        fill="url(#paint18_linear)"
                        d="M324.275 309.66l-.008-.332-2.724.068.009.332 2.723-.068z"
                        ></path>
                        <path
                        fill="url(#paint19_linear)"
                        d="M324.3 310.655l.009.332-2.724.069-.008-.332 2.723-.069z"
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
                <g id="cam-feed">
                    <path
                    id="container"
                    fill="#878080"
                    d="M279.25 296.746a1.999 1.999 0 011.942-2.026l64.94-1.853a2 2 0 012.057 1.972l.805 60.187a1.998 1.998 0 01-1.89 2.023l-64.917 3.554a2.001 2.001 0 01-2.11-1.971l-.827-61.886z"
                    ></path>
                    <path
                    id="header"
                    fill="url(#paint20_linear)"
                    d="M279.28 299.02l68.942-1.695.176 13.14-68.937 2.082-.181-13.527z"
                    ></path>
                    <path
                    id="Front Porch Cam"
                    fill="#E8E4E4"
                    d="M283.35 309.811l-.895.009.009.942-.281.002-.02-2.133 1.321-.012.002.232-1.04.009.007.73.895-.009.002.23zm1.164-.41a.712.712 0 00-.134-.009c-.177.001-.297.078-.359.23l.01 1.125-.271.003-.015-1.585.264-.003.006.183a.425.425 0 01.496-.196l.003.252zm.154.533a.957.957 0 01.087-.42.692.692 0 01.252-.289.7.7 0 01.373-.105.664.664 0 01.525.22c.135.148.204.346.206.594v.019a.943.943 0 01-.085.417.677.677 0 01-.628.394.666.666 0 01-.525-.22c-.134-.148-.202-.345-.205-.591v-.019zm.273.03a.677.677 0 00.125.422.394.394 0 00.33.157.39.39 0 00.327-.165c.08-.109.119-.26.117-.455a.674.674 0 00-.128-.421.393.393 0 00-.33-.159.386.386 0 00-.322.163c-.081.107-.121.259-.119.458zm1.759-.827l.011.199a.574.574 0 01.472-.232c.335-.004.506.184.512.562l.01 1.047-.271.003-.01-1.049c-.002-.114-.029-.199-.081-.253-.052-.054-.132-.081-.24-.08a.39.39 0 00-.231.073.466.466 0 00-.153.186l.01 1.129-.271.003-.014-1.585.256-.003zm1.763-.4l.003.384.296-.003.002.21-.296.002.009.983a.23.23 0 00.041.144c.027.031.072.046.136.045a.578.578 0 00.128-.019l.002.22a.764.764 0 01-.207.031c-.122.001-.213-.034-.275-.107a.472.472 0 01-.096-.311l-.009-.983-.288.003-.002-.21.288-.002-.003-.384.271-.003zm1.692 1.118l.008.835-.282.003-.019-2.133.786-.007c.234-.002.417.056.55.174a.6.6 0 01.203.471c.002.207-.061.367-.19.481-.128.112-.312.17-.554.172l-.502.004zm-.002-.23l.505-.004c.151-.002.265-.038.345-.109.079-.072.118-.175.117-.309a.397.397 0 00-.123-.303.473.473 0 00-.33-.116l-.522.005.008.836zm1.479.245a.924.924 0 01.087-.42.688.688 0 01.252-.29.698.698 0 01.372-.104.666.666 0 01.525.219c.136.148.204.346.207.594v.019a.938.938 0 01-.086.417.663.663 0 01-.25.288.692.692 0 01-.377.106.669.669 0 01-.525-.219c-.135-.148-.203-.345-.205-.591v-.019zm.272.029a.681.681 0 00.126.422.394.394 0 00.33.157.389.389 0 00.326-.164c.08-.109.119-.261.118-.455a.675.675 0 00-.129-.421.391.391 0 00-.33-.16.393.393 0 00-.322.163c-.081.107-.12.26-.119.458zm2.271-.588a.917.917 0 00-.133-.009c-.178.002-.298.079-.36.231l.011 1.125-.271.002-.015-1.585.264-.002.006.183a.423.423 0 01.376-.216c.053 0 .093.006.12.019l.002.252zm.868 1.142a.393.393 0 00.253-.09.311.311 0 00.118-.221l.256-.002a.49.49 0 01-.091.26.609.609 0 01-.23.198.658.658 0 01-.304.076.659.659 0 01-.518-.21c-.128-.143-.193-.34-.195-.59l-.001-.045a.97.97 0 01.081-.413.647.647 0 01.616-.385.628.628 0 01.444.156.568.568 0 01.193.412l-.256.003a.37.37 0 00-.379-.348.38.38 0 00-.319.152c-.074.099-.111.243-.109.43l.001.052c.001.182.04.322.116.42a.38.38 0 00.324.145zm1.194-1.212a.574.574 0 01.467-.225c.335-.004.506.184.512.562l.01 1.047-.271.003-.01-1.049c-.002-.115-.029-.199-.081-.253-.052-.054-.131-.081-.24-.08a.39.39 0 00-.231.073.466.466 0 00-.153.186l.01 1.129-.271.003-.021-2.25.271-.003.008.857zm3.744.682c-.025.226-.106.401-.246.525-.138.123-.324.186-.556.188a.752.752 0 01-.609-.265c-.153-.179-.231-.42-.234-.723l-.002-.205a1.22 1.22 0 01.101-.524.8.8 0 01.298-.349.83.83 0 01.45-.125c.227-.002.409.059.547.185.138.125.219.299.244.522l-.283.003c-.026-.17-.08-.292-.163-.368a.484.484 0 00-.343-.111.505.505 0 00-.421.203c-.1.134-.149.323-.147.569l.002.206c.002.232.052.415.15.551a.468.468 0 00.408.201c.156-.001.275-.037.357-.109.084-.072.138-.196.164-.372l.283-.002zm1.327.664a.548.548 0 01-.039-.166.607.607 0 01-.45.2.56.56 0 01-.386-.128.43.43 0 01-.153-.336.448.448 0 01.184-.385c.125-.093.302-.141.529-.143l.264-.002-.001-.125a.306.306 0 00-.087-.225c-.058-.056-.141-.083-.252-.082a.398.398 0 00-.242.075c-.065.05-.097.109-.097.178l-.272.003a.369.369 0 01.081-.229.581.581 0 01.227-.178.77.77 0 01.317-.068c.183-.001.327.043.431.134.104.09.159.215.165.375l.006.73a.898.898 0 00.059.346v.024l-.284.002zm-.451-.202a.485.485 0 00.241-.068.412.412 0 00.164-.173l-.003-.325-.213.002c-.332.003-.497.101-.495.296.001.085.03.151.087.198.057.047.13.071.219.07zm1.345-1.391l.009.176a.586.586 0 01.468-.21c.222-.002.373.082.455.251a.608.608 0 01.203-.187.622.622 0 01.3-.073c.348-.003.526.18.535.548l.01 1.062-.271.002-.01-1.046c-.001-.113-.027-.197-.08-.252-.052-.057-.139-.084-.261-.083a.359.359 0 00-.25.093.362.362 0 00-.113.243l.01 1.052-.273.002-.01-1.038c-.002-.231-.116-.345-.341-.343-.178.002-.299.079-.363.231l.011 1.157-.271.002-.015-1.585.257-.002z"
                    ></path>
                    <path
                    id="wyze-logo"
                    fill="#fff"
                    d="M287.862 300.329l-.514.013 1.709 2.48.048 1.876.514-.013-.048-1.876 1.683-2.567-.565.015-1.386 2.138-1.441-2.066zm-5.5.141l.565-.015 1.918 3.668 1.732-3.761.514-.013-2.041 4.551-.185.004-.185.005-.833-1.6-.75 1.641-.158.004-.257.006-2.274-4.44.617-.016 1.844 3.719.68-1.487-1.187-2.266zm13.31 3.571l.013.489-4.061.104.333-.498 2.66-3.491-2.939.075-.012-.488 4.009-.103-.347.498-2.724 3.493 3.068-.079zm4.218-4.019l.013.488-4.01.103-.012-.489 4.009-.102zm.063 2.443l-.013-.489-4.009.103.012.488 4.01-.102zm.037 1.466l.013.489-4.01.102-.012-.489 4.009-.102z"
                    ></path>
                    <g id="feed">
                    <path
                        id="Rectangle 609"
                        fill="#8DCAAD"
                        d="M279.602 312.14l60.983-1.404v46.215l-60.963 2.379-.02-47.19z"
                    ></path>
                    <path
                        id="Polygon 13"
                        fill="#B6C3DD"
                        d="M340.559 310.71l-43.04.965-17.914.56-.007 5.768 60.961-2.48v-4.813z"
                    ></path>
                    <path
                        id="Rectangle 610"
                        fill="#AFB6D7"
                        d="M279.693 327.339l60.682-2.656-.368 4.775-60.31 2.749-.004-4.868z"
                    ></path>
                    <path
                        id="Rectangle 611"
                        fill="#909699"
                        d="M279.47 320.022l61.213-2.792-.235 7.639-60.841 2.713-.137-7.56z"
                    ></path>
                    <g id="brick-wall">
                        <path
                        id="Rectangle-354"
                        fill="#C4C4C4"
                        d="M0 0h49.028v6.316H0z"
                        transform="rotate(-2.449 7780.651 -6671.655) skewX(.104)"
                        ></path>
                        <path
                        id="Vector"
                        fill="#A53B33"
                        d="M340.622 328.962l-1.461.077.033.733 1.46-.077-.032-.733zm-4.615.212l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.261l-2.984.128.032.733 2.984-.128-.032-.733zm-6.139.262l-2.984.128.032.733 2.985-.128-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm41.378-3.376l-1.46.077.032.733 1.461-.078-.033-.732zm-4.615.211l-2.984.128.032.733 2.984-.128-.032-.733zm-6.139.262l-2.984.127.032.733 2.985-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.138.261l-2.985.128.033.733 2.984-.128-.032-.733zm41.412-2.579l-2.952.141.033.733 2.952-.141-.033-.733zm-6.107.275l-2.984.128.033.733 2.984-.128-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.138.262l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.985-.128-.033-.732zm-6.139.261l-2.984.128.033.733 2.984-.128-.033-.733zm43.011-.253l-2.952.141.033.733 2.952-.141-.033-.733zm-6.107.276l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.261l-2.984.128.033.733 2.984-.128-.033-.733zm-6.139.262l-2.984.128.033.733 2.984-.128-.033-.733zm-6.138.262l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.985-.127-.033-.733zm42.834-4.237l-1.46.077.032.733 1.461-.077-.033-.733zm-4.615.212l-2.984.127.032.733 2.985-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.128-.033-.732zm-6.138.261l-2.985.128.033.733 2.984-.128-.032-.733zm-6.139.262l-2.985.128.033.732 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm41.413-2.579l-2.953.14.033.733 2.952-.14-.032-.733zm-6.107.275l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.128-.032-.732zm-6.139.261l-2.984.128.032.733 2.985-.128-.033-.733zm-6.139.262l-2.984.128.033.732 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm42.905-2.643l-1.46.077.032.733 1.461-.077-.033-.733zm-4.615.212l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.128-.033-.732zm-6.139.261l-2.984.128.033.733 2.984-.128-.033-.733zm-6.138.262l-2.985.128.033.732 2.984-.127-.032-.733zm-6.139.262l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm41.413-2.58l-2.953.141.033.733 2.952-.141-.032-.733zm-6.107.276l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.128-.032-.732zm-6.139.261l-2.984.128.032.733 2.985-.128-.033-.733zm-6.139.262l-2.984.128.032.732 2.985-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm41.431-.969l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.261l-2.984.128.032.733 2.984-.128-.032-.733zm-6.139.262l-2.984.128.032.733 2.985-.128-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm41.516-.973l-2.984.127.032.733 2.985-.127-.033-.733zm-6.139.262l-2.984.127.032.733 2.985-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.261l-2.984.128.033.733 2.984-.128-.033-.733zm-6.138.262l-2.985.128.033.733 2.984-.128-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm44.499-1.1l-2.984.127.033.733 2.984-.127-.033-.733zm-6.138.262l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.261l-2.984.128.032.733 2.985-.128-.033-.733zm-6.139.262l-2.984.128.032.733 2.985-.128-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm41.516-.973l-2.984.128.032.733 2.984-.128-.032-.733zm-6.139.262l-2.984.128.032.732 2.985-.127-.033-.733zm-6.139.262l-2.984.127.032.733 2.985-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.138.262l-2.985.127.033.733 2.984-.128-.032-.732zm-6.139.261l-2.985.128.033.733 2.984-.128-.032-.733zm44.499-1.1l-2.984.128.033.733 2.984-.128-.033-.733zm-6.139.262l-2.984.128.033.732 2.984-.127-.033-.733zm-6.138.262l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.985-.127-.033-.733zm-6.139.262l-2.984.127.032.733 2.985-.128-.033-.732zm-6.139.261l-2.984.128.033.733 2.984-.128-.033-.733zm41.516-.972l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.128-.032-.732zm-6.139.261l-2.984.128.032.733 2.984-.128-.032-.733zm-6.139.262l-2.984.128.032.732 2.985-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.138.262l-2.985.127.033.733 2.984-.127-.032-.733zm44.499-1.1l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.128-.033-.732zm-6.139.261l-2.984.128.033.733 2.984-.128-.033-.733zm-6.138.262l-2.985.128.033.732 2.984-.127-.032-.733zm-6.139.262l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.985-.127-.033-.733zm41.232-7.346l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.262l-2.984.127.033.733 2.984-.127-.033-.733zm-6.139.261l-2.984.128.033.733 2.984-.128-.033-.733zm-6.139.262l-2.984.128.033.733 2.984-.128-.033-.733zm-6.138.262l-2.985.127.033.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.984-.127-.032-.733zm-6.139.262l-2.984.127.032.733 2.985-.127-.033-.733zm-1.509 1.597l-.033-.733-1.407.06.033.733 1.407-.06zm.212 4.78l-.032-.733-1.407.06.032.733 1.407-.06zm-.071-1.594l-.032-.733-1.407.06.032.733 1.407-.06zm-.071-1.593l-.032-.733-1.407.06.033.733 1.406-.06z"
                        ></path>
                    </g>
                    <path
                        id="Rectangle 576"
                        fill="#D0D7E4"
                        d="M340.58 317.222l-.001-1.697-60.975 2.268v1.504l60.976-2.075z"
                    ></path>
                    <path
                        id="Rectangle 578_3"
                        fill="#C8D7F4"
                        d="M340.715 318.909l-.06-1.69-61.05 2.079v1.692l61.11-2.081z"
                    ></path>
                    <g id="columns" fill="#DAE0EB">
                        <path
                        id="column"
                        d="M336.126 318.561l4.533-.155.017.469-.378.013.017.469-.378.013.59 16.602.005 12.478-3.341.114-.016-.469.377-.013-.016-.469.378-.013-.999-28.127-.378.013-.017-.469-.378.013-.016-.469z"
                        ></path>
                        <path
                        id="column_2"
                        d="M303.069 319.686l-4.533.155.016.468.378-.012.017.468.378-.012.999 28.127-.378.013.016.469-.377.013.016.468 4.534-.154-.017-.469-.378.013-.016-.469-.378.013-.999-28.127.378-.013-.017-.469.378-.013-.017-.469z"
                        ></path>
                    </g>
                    <path
                        id="railing"
                        fill="url(#paint21_linear)"
                        fillRule="evenodd"
                        d="M337.874 341.223l-34.757 1.184.023.653.756-.026.19 5.352-.756.026.024.653 34.756-1.184-.023-.652-.567.019-.19-5.352.567-.02-.023-.653zm-33.221 7.144l-.19-5.352.566-.02.19 5.353-.566.019zm1.133-.039l-.19-5.352.567-.019.19 5.352-.567.019zm1.51-5.41l-.567.019.19 5.353.567-.02-.19-5.352zm.757 5.333l-.19-5.352.566-.02.19 5.353-.566.019zm1.51-5.41l-.567.019.19 5.353.567-.02-.19-5.352zm.756 5.333l-.19-5.352.567-.02.19 5.353-.567.019zm1.51-5.41l-.566.019.19 5.352.567-.019-.191-5.352zm.757 5.333l-.19-5.353.567-.019.19 5.353-.567.019zm1.51-5.41l-.567.019.191 5.352.566-.019-.19-5.352zm.757 5.333l-.19-5.353.567-.019.19 5.352-.567.02zm1.51-5.411l-.567.02.19 5.352.567-.019-.19-5.353zm.757 5.333l-.19-5.352.566-.019.19 5.352-.566.019zm1.51-5.41l-.567.019.19 5.353.567-.019-.19-5.353zm.756 5.333l-.19-5.352.567-.019.19 5.352-.567.019zm1.51-5.41l-.566.019.19 5.353.566-.02-.19-5.352zm.757 5.333l-.19-5.352.567-.02.19 5.353-.567.019zm1.51-5.41l-.567.019.19 5.353.567-.02-.19-5.352zm.757 5.333l-.19-5.352.566-.02.191 5.353-.567.019zm1.51-5.41l-.567.019.19 5.352.567-.019-.19-5.352zm.757 5.333l-.19-5.353.566-.019.19 5.352-.566.02zm1.51-5.411l-.567.02.19 5.352.567-.019-.19-5.353zm.756 5.334l-.19-5.353.567-.019.19 5.352-.567.02zm1.51-5.411l-.566.02.19 5.352.566-.019-.19-5.353zm.757 5.333l-.19-5.352.567-.019.19 5.352-.567.019zm1.51-5.41l-.567.019.19 5.353.567-.019-.19-5.353zm.757 5.333l-.19-5.352.566-.019.19 5.352-.566.019zm1.51-5.41l-.567.019.19 5.353.567-.02-.19-5.352zm.757 5.333l-.191-5.352.567-.02.19 5.353-.566.019zm1.509-5.41l-.566.019.19 5.352.567-.019-.191-5.352z"
                        clipRule="evenodd"
                    ></path>
                    <path
                        id="Rectangle 612"
                        fill="#C8D7F4"
                        d="M340.568 347.967l-60.97 2.652.016 8.706 60.97-2.38-.016-8.978z"
                    ></path>
                    <g id="walkway">
                        <path
                        id="Union_2"
                        fill="#BFBABA"
                        d="M282.467 345.695l-2.705.161-.087-1.411 2.831-.168-.039 1.418zm-.209-4.454l-2.645.157.009-1.907 2.536.122.1 1.628zm-2.537-6.277l2.405-.143.226 1.839-2.517.149-.114-1.845zm5.011 10.597l-1.95.116-.101-1.628 1.951-.116.1 1.628zm-2.162-4.338l1.887-.112-.1-1.628-1.888.111.101 1.629zm1.618-6.524l-1.699.101.094 1.519 1.712.117-.107-1.737zm6.702 8.319l1.572-.093-.1-1.629-1.573.094.101 1.628zm.5-9.29l-1.643-.012-.087-1.411 1.462-.086.268 1.509zm-1.204 3.013l1.51-.09.101 1.628-1.51.09-.101-1.628zm-3.777 6.324l-2.126.344-.113-1.845 2.048-.122.191 1.623zm-2.639-8.995l1.939-.307-.171-1.432-1.868.111.1 1.628zm2.278 3.134l-2.027-.098.114 1.845 1.928-.114-.015-1.633zm-6.274 6.799l1.887-.112-.13-2.117-.913.054-.945.547.101 1.628zm1.689-9.469l-1.699.1-.093-1.503.85-.503.821-.048.121 1.954zm-1.72 2.825l1.761-.104.101 1.628-1.762.104-.1-1.628zm4.163 6.072l-2.013.12-.101-1.629 1.891-.112.223 1.621zm-2.275-9.234l1.825-.108-.198-1.405-1.714.102.087 1.411zm2.012 2.931l-1.887.112.1 1.628 1.901.105-.114-1.845zm4.944 4.392l2.013-.119-.021 1.635-1.892.112-.1-1.628zm.947-9.207l-1.887.111.087 1.411.922.164.851-.269.027-1.417zm-1.26 6.175l1.887-.112-.215-1.621-1.773.105.101 1.628zm-1.088 6.928l-2.202.13-.114-1.845 2.208-.022.108 1.737zm-2.477-4.32l2.139-.127-.107-1.736-2.146.018.114 1.845zm1.618-6.524l-1.887.112.111 1.798.991.207.89-.424-.105-1.693zm1.11 10.829l1.762-.104-.087-1.411-1.762.104.087 1.411zm1.362-4.547l-1.762.104-.087-1.411.668-.421 1.07-.063.111 1.791zm-2.346-6.289l1.636-.097.087 1.411-1.602.64-.121-1.954zm.284 8.699l1.586.124-.1-1.629-1.586-.124.1 1.629zm.759-9.197l-1.396-.109-.089-1.437 1.384-.082.101 1.628zm-1.21 2.905l1.496-.307.131 2.117-.778-.335-.749.153-.1-1.628zm3.158 8.201l1.636-.096-.114-1.846-1.623.314.101 1.628zm1.172-4.536l-1.573.093-.1-1.628 1.559-.31.114 1.845zm-2.206-6.079l1.321-.078.114 1.845-1.334-.139-.101-1.628zm4.438 10.523l-1.447.085-.104-1.682 1.464.186.087 1.411zm-1.91-4.354l1.384-.082-.087-1.411-.712-.285-.693.041.108 1.737zm.548-6.46l-1.447.086.087 1.411 1.351-.08.009-1.417z"
                        ></path>
                        <path
                        id="Union_3"
                        fill="#9D8F8F"
                        d="M279.721 334.964l2.405-.143.226 1.839-2.517.149-.114-1.845zm5.011 10.597l-1.95.116-.101-1.628 1.951-.116.1 1.628zm-2.162-4.338l1.887-.112-.1-1.628-1.888.111.101 1.629zm1.618-6.524l-1.699.101.094 1.519 1.712.117-.107-1.737zm6.702 8.319l1.572-.093-.1-1.629-1.573.094.101 1.628zm.5-9.29l-1.643-.012-.087-1.411 1.462-.086.268 1.509zm-1.204 3.013l1.51-.09.101 1.628-1.51.09-.101-1.628zm-6.416-2.671l1.939-.307-.171-1.432-1.868.111.1 1.628zm-3.996 9.933l1.887-.112-.13-2.117-.913.054-.945.547.101 1.628zm1.689-9.469l-1.699.1-.093-1.503.85-.503.821-.048.121 1.954zm-1.72 2.825l1.761-.104.101 1.628-1.762.104-.1-1.628zm4.163 6.072l-2.013.12-.101-1.629 1.891-.112.223 1.621zm4.681-1.911l2.013-.119-.021 1.635-1.892.112-.1-1.628zm-.313-3.032l1.887-.112-.215-1.621-1.773.105.101 1.628zm-1.088 6.928l-2.202.13-.114-1.845 2.208-.022.108 1.737zm-2.477-4.32l2.139-.127-.107-1.736-2.146.018.114 1.845zm2.728 4.305l1.762-.104-.087-1.411-1.762.104.087 1.411zm1.362-4.547l-1.762.104-.087-1.411.668-.421 1.07-.063.111 1.791zm-2.346-6.289l1.636-.097.087 1.411-1.602.64-.121-1.954zm.284 8.699l1.586.124-.1-1.629-1.586-.124.1 1.629zm.759-9.197l-1.396-.109-.089-1.437 1.384-.082.101 1.628zm-1.21 2.905l1.496-.307.131 2.117-.778-.335-.749.153-.1-1.628zm6.562 8.109l-1.447.085-.104-1.682 1.464.186.087 1.411zm-1.91-4.354l1.384-.082-.087-1.411-.712-.285-.693.041.108 1.737zm.548-6.46l-1.447.086.087 1.411 1.351-.08.009-1.417z"
                        ></path>
                        <path
                        id="Union_4"
                        fill="#847C7C"
                        d="M284.732 345.561l-1.95.116-.101-1.628 1.951-.116.1 1.628zm-.544-10.862l-1.699.101.094 1.519 1.712.117-.107-1.737zm6.702 8.319l1.572-.093-.1-1.629-1.573.094.101 1.628zm.5-9.29l-1.643-.012-.087-1.411 1.462-.086.268 1.509zm-1.204 3.013l1.51-.09.101 1.628-1.51.09-.101-1.628zm-10.412 7.262l1.887-.112-.13-2.117-.913.054-.945.547.101 1.628zm1.689-9.469l-1.699.1-.093-1.503.85-.503.821-.048.121 1.954zm-1.72 2.825l1.761-.104.101 1.628-1.762.104-.1-1.628zm4.966 3.737l2.139-.127-.107-1.736-2.146.018.114 1.845zm2.728 4.305l1.762-.104-.087-1.411-1.762.104.087 1.411zm-.984-10.836l1.636-.097.087 1.411-1.602.64-.121-1.954zm.284 8.699l1.586.124-.1-1.629-1.586-.124.1 1.629zm.759-9.197l-1.396-.109-.089-1.437 1.384-.082.101 1.628zm5.352 11.014l-1.447.085-.104-1.682 1.464.186.087 1.411z"
                        ></path>
                    </g>
                    <path
                        id="Rectangle 584"
                        fill="url(#paint22_linear)"
                        d="M279.616 345.428l15.152-.004c.567 0 1.108.24 1.488.661l.558.617c1.138 1.259.296 3.269-1.397 3.337l-15.799.633-.002-5.244z"
                    ></path>
                    <g id="guy-front">
                        <g id="guy-back">
                        <ellipse
                            id="Ellipse 7_2"
                            fill="#FBCCD8"
                            rx="2.999"
                            ry="3.132"
                            transform="matrix(1 0 .0001 1 299.536 330.761)"
                        ></ellipse>
                        <g id="leg-left-back">
                            <path
                            id="Rectangle 66"
                            fill="#868383"
                            d="M297.847 344.463l2.526-.033-.452 11.403-1.723.022-.351-11.392z"
                            ></path>
                        </g>
                        <path
                            id="Rectangle 65"
                            fill="#7C7979"
                            d="M299.724 344.444l2.561-.001s.127-.164-.444 1.472c-.362 1.041-2.116.801-2.116.305l-.001-1.776z"
                        ></path>
                        <g id="Rectangle 71" fill="#FBCCD8">
                            <path d="M297.525 337.754l-.75-.922-3.298 4.183.501.814 3.547-4.075z"></path>
                            <path d="M297.525 337.754l-.75-.922 1.102-1.713c.741-.911 1.557.68.976 1.112l-1.328 1.523z"></path>
                        </g>
                        <path
                            id="Rectangle 72"
                            fill="url(#paint23_linear)"
                            d="M297.187 338.287l-1.093-.895 1.158-2.239c.938-1.174 2.382.551 1.625 1.153l-1.69 1.981z"
                        ></path>
                        <g id="leg-right-back">
                            <g id="Rectangle 69" fill="#7D5740">
                            <path d="M299.723 355.863s-.649-.026-1.305.042c-.638.066-1.164.204-1.38.554-.225.364.139.58.139.58s1.365.026 2.232.036c.256.003.531-.101.515-.357a.66.66 0 00-.054-.218c-.214-.505-.147-.637-.147-.637z"></path>
                            <path d="M299.723 355.863s-.649-.026-1.305.042l.055-.208h1.238l.012.166z"></path>
                            </g>
                            <g id="Rectangle 71_2" fill="#7D5740">
                            <path d="M301.679 355.863s-.649-.026-1.305.041c-.638.066-1.164.205-1.38.554-.225.364.139.581.139.581s1.365.025 2.232.036c.256.003.531-.102.515-.358a.686.686 0 00-.054-.218c-.214-.504-.147-.636-.147-.636z"></path>
                            <path d="M301.679 355.863s-.649-.026-1.305.041l.055-.207 1.237-.001.013.167z"></path>
                            </g>
                            <g id="Rectangle 70" fill="#693C21">
                            <path
                                fillRule="evenodd"
                                d="M298.418 355.898l.142-.014c-.242.173-.723.539-1.523.568.244-.325.764-.491 1.381-.554z"
                                clipRule="evenodd"
                            ></path>
                            <path d="M298.418 355.898l.054-.208 1.056.006.013.167s-.401-.028-.981.021l-.142.014z"></path>
                            </g>
                            <g id="Rectangle 72_2" fill="#693C21">
                            <path
                                fillRule="evenodd"
                                d="M300.373 355.897l.142-.013c-.242.173-.723.539-1.522.567.244-.325.764-.49 1.38-.554z"
                                clipRule="evenodd"
                            ></path>
                            <path d="M300.373 355.897l.055-.208 1.056.006.012.167s-.4-.028-.981.022l-.142.013z"></path>
                            </g>
                            <path
                            id="Rectangle 63"
                            fill="#7C7979"
                            d="M299.663 344.489l2.527-.036-.427 11.403-1.722.025-.378-11.392z"
                            ></path>
                        </g>
                        <path
                            id="Ellipse 9_2"
                            fill="#FBCCD8"
                            d="M292.803 342.164c-.079.445-.01.703.402.809.413.106.818-.451.897-.897.079-.445-.064-.718-.476-.824-.413-.106-.6.487-.823.912z"
                        ></path>
                        <path
                            id="Rectangle 58"
                            fill="#FBCCD8"
                            d="M0 0h2.144v1.585H0z"
                            transform="matrix(1 0 .0001 1 298.755 333.126)"
                        ></path>
                        <path
                            id="Rectangle 54"
                            fill="#3550DD"
                            d="M297.322 335.348c-.001-1.261 4.953-1.255 4.954-.002l.004 9.028-4.498.002s-.46-7.038-.46-9.028z"
                        ></path>
                        <g id="package">
                            <g id="Union_5" fill="#BD7B3D">
                            <path d="M294.145 339.871l2.257-.001 2.257-.001-.673.694-4.548.002.707-.694z"></path>
                            <path
                                fillRule="evenodd"
                                d="M298.661 344.725l-.002-4.856-.673.694.002 4.955.673-.793z"
                                clipRule="evenodd"
                            ></path>
                            <path d="M297.988 345.518l-4.548.001-.002-4.954 4.548-.002.002 4.955z"></path>
                            </g>
                            <g id="Union_6" fill="#A26934">
                            <path d="M294.145 339.871l2.257-.001 2.257-.001-.673.694-4.548.002.707-.694z"></path>
                            <path
                                fillRule="evenodd"
                                d="M298.661 344.725l-.002-4.856-.673.694.002 4.955.673-.793z"
                                clipRule="evenodd"
                            ></path>
                            </g>
                            <path
                            id="Union_7"
                            fill="#B07338"
                            d="M294.145 339.871l2.257-.001 2.257-.001-.673.694-4.548.002.707-.694z"
                            ></path>
                            <path
                            id="Rectangle 529"
                            fill="#C4C4C4"
                            d="M296.537 339.87l-.556.001-.557.693h.557l.556-.694z"
                            ></path>
                            <path
                            id="Rectangle 530"
                            fill="#7D7272"
                            d="M296.284 339.87h-.101l-.518.694h.114l.505-.694z"
                            ></path>
                        </g>
                        <g id="Rectangle 56" fill="#FBCCD8">
                            <path d="M300.998 338.581l-1.269-.633-2.675 5.664.919.625 3.025-5.656z"></path>
                            <path d="M300.998 338.581l-1.269-.633.782-2.216c.612-1.243 2.201.048 1.622.733l-1.135 2.116z"></path>
                        </g>
                        <path
                            id="Rectangle 64"
                            fill="url(#paint24_linear)"
                            d="M300.904 338.78l-1.263-.644.863-2.389c.66-1.345 2.225-.004 1.617.743l-1.217 2.29z"
                        ></path>
                        <path
                            id="Vector 12"
                            fill="#300B0B"
                            d="M301.153 330.88c0 .595.653 2.109 1.174 1.342 1.302-2.494-.284-4.452-1.669-4.451-1.528-1.228-3.417.49-4.2.746.001.567 2.755 1.544 3.977 1.213.903-.244.549.903.718 1.15z"
                        ></path>
                        <path
                            id="Ellipse 8"
                            fill="#FBCCD8"
                            d="M296.233 344.488c-.105.481-.014.76.535.875.548.115 1.086-.488 1.191-.97.105-.482-.084-.778-.633-.892-.548-.115-.073.339-1.093.987z"
                        ></path>
                        </g>
                    </g>
                    </g>
                    <g id="apple-menu_2">
                    <ellipse
                        id="Ellipse 27_2"
                        fill="#FE5E5E"
                        rx="0.75"
                        ry="0.753"
                        transform="rotate(-3.651 4801.025 -4279.973) skewX(-.024)"
                    ></ellipse>
                    <ellipse
                        id="Ellipse 28_2"
                        fill="#FFF494"
                        rx="0.75"
                        ry="0.753"
                        transform="rotate(-3.651 4799.525 -4327) skewX(-.024)"
                    ></ellipse>
                    <ellipse
                        id="Ellipse 29_2"
                        fill="#5DFD63"
                        rx="0.75"
                        ry="0.753"
                        transform="rotate(-3.651 4798.025 -4374.028) skewX(-.024)"
                    ></ellipse>
                    </g>
                    <g id="hud-menu">
                    <path
                        id="Front Door Status:"
                        fill="#fff"
                        d="M341.843 313.148l-.447.012.012.471-.141.003-.027-1.066.661-.017.003.116-.52.013.009.365.447-.012.003.115zm.579-.214a.473.473 0 00-.067-.004c-.089.003-.148.042-.178.118l.014.563-.135.003-.02-.792.132-.003.004.091a.211.211 0 01.186-.111.128.128 0 01.061.009l.003.126zm.081.265a.478.478 0 01.04-.21.345.345 0 01.124-.147.344.344 0 01.185-.055.334.334 0 01.265.105.44.44 0 01.108.296v.009a.46.46 0 01-.04.209.32.32 0 01-.123.146.343.343 0 01-.187.056.334.334 0 01-.265-.105.435.435 0 01-.107-.294v-.01zm.137.013a.337.337 0 00.066.21.2.2 0 00.166.076.195.195 0 00.162-.085.378.378 0 00.055-.229.333.333 0 00-.068-.209.194.194 0 00-.166-.077.197.197 0 00-.16.084.369.369 0 00-.055.23zm.873-.427l.006.099a.288.288 0 01.235-.12c.167-.004.254.088.26.277l.014.523-.136.004-.013-.524c-.002-.058-.016-.099-.043-.126-.026-.027-.066-.04-.12-.038a.198.198 0 00-.115.038.23.23 0 00-.075.094l.014.565-.136.003-.02-.792.129-.003zm.878-.215l.005.192.147-.003.003.104-.148.004.013.491c0 .032.008.056.021.072.014.015.036.022.068.021a.325.325 0 00.064-.01l.003.11a.426.426 0 01-.103.017c-.061.001-.107-.016-.139-.051a.243.243 0 01-.05-.155l-.012-.492-.144.004-.003-.105.144-.003-.005-.192.136-.004zm.725.967l-.027-1.066.301-.008a.489.489 0 01.247.055c.072.04.129.097.169.171a.568.568 0 01.066.259l.002.069a.574.574 0 01-.052.265.414.414 0 01-.162.179.513.513 0 01-.249.068l-.295.008zm.116-.954l.021.835.148-.003a.32.32 0 00.25-.108c.059-.069.087-.165.084-.29l-.002-.062a.422.422 0 00-.093-.28.3.3 0 00-.244-.096l-.164.004zm.8.527a.482.482 0 01.04-.211.356.356 0 01.124-.146.354.354 0 01.186-.056.336.336 0 01.264.106.427.427 0 01.108.295v.01a.473.473 0 01-.039.209.334.334 0 01-.124.146.352.352 0 01-.187.056.332.332 0 01-.264-.106.426.426 0 01-.107-.294l-.001-.009zm.137.013a.34.34 0 00.066.21.196.196 0 00.166.075.194.194 0 00.162-.084.373.373 0 00.055-.229.331.331 0 00-.068-.209.194.194 0 00-.166-.077.19.19 0 00-.159.084.362.362 0 00-.056.23zm.719-.035a.466.466 0 01.04-.21.343.343 0 01.123-.147.353.353 0 01.186-.055.33.33 0 01.264.105.43.43 0 01.108.296v.009a.473.473 0 01-.039.209.333.333 0 01-.123.146.35.35 0 01-.188.056.334.334 0 01-.264-.105.43.43 0 01-.107-.294v-.01zm.136.013a.337.337 0 00.066.21.2.2 0 00.166.076.195.195 0 00.162-.085.368.368 0 00.055-.228.336.336 0 00-.067-.21.196.196 0 00-.166-.077.195.195 0 00-.16.084.369.369 0 00-.056.23zm1.131-.312a.473.473 0 00-.067-.004c-.089.003-.148.042-.178.119l.014.562-.135.003-.02-.792.132-.003.004.091a.211.211 0 01.186-.111c.027 0 .047.002.061.009l.003.126zm-6.535 2.361a.667.667 0 01-.267-.12.249.249 0 01-.087-.186.258.258 0 01.095-.21.402.402 0 01.26-.09.445.445 0 01.197.038.319.319 0 01.136.114c.033.049.05.103.052.162l-.141.003a.196.196 0 00-.066-.15.25.25 0 00-.175-.051.262.262 0 00-.161.05.154.154 0 00-.055.128c.001.044.021.08.058.11a.577.577 0 00.19.077c.09.023.16.048.21.077a.318.318 0 01.114.102.26.26 0 01.04.141.247.247 0 01-.095.21.432.432 0 01-.269.085.524.524 0 01-.206-.037.354.354 0 01-.15-.112.282.282 0 01-.055-.165l.141-.003a.188.188 0 00.075.151.303.303 0 00.192.051.28.28 0 00.17-.05.147.147 0 00.056-.125.145.145 0 00-.058-.12.63.63 0 00-.201-.08zm.726-.527l.005.192.147-.004.003.105-.148.003.013.492c0 .031.008.055.021.071.014.015.036.022.068.022a.341.341 0 00.064-.011l.003.11a.382.382 0 01-.103.017c-.061.002-.107-.015-.139-.051a.243.243 0 01-.05-.155l-.012-.491-.144.003-.003-.104.144-.004-.005-.192.136-.003zm.82.964a.301.301 0 01-.021-.083.304.304 0 01-.223.104.284.284 0 01-.194-.061.219.219 0 01-.079-.167.225.225 0 01.089-.194.442.442 0 01.263-.076l.132-.003-.001-.062a.154.154 0 00-.046-.112c-.029-.028-.071-.041-.126-.039a.199.199 0 00-.121.039c-.032.026-.047.056-.046.09l-.137.004a.188.188 0 01.039-.116.296.296 0 01.112-.09.394.394 0 01.158-.037.313.313 0 01.217.064.248.248 0 01.085.186l.009.365c.002.072.013.13.032.172l.001.012-.143.004zm-.227-.098a.234.234 0 00.201-.124l-.004-.162-.107.003c-.166.004-.247.054-.245.152a.122.122 0 00.045.098.166.166 0 00.11.033zm.713-.899l.005.192.148-.004.002.105-.148.003.013.492a.118.118 0 00.021.071c.014.015.037.022.068.022a.363.363 0 00.065-.011l.002.11a.382.382 0 01-.103.017c-.061.002-.107-.015-.139-.051a.243.243 0 01-.05-.155l-.012-.491-.144.003-.003-.104.144-.004-.004-.192.135-.003zm.819.885c-.051.064-.128.097-.23.099-.084.002-.15-.02-.195-.068-.045-.048-.069-.12-.072-.217l-.013-.515.135-.004.013.512c.003.12.053.179.151.177.104-.003.171-.043.204-.121l-.015-.576.135-.004.021.792-.129.004-.005-.079zm.796-.152a.101.101 0 00-.044-.084.405.405 0 00-.145-.049.719.719 0 01-.165-.048.233.233 0 01-.091-.071.175.175 0 01-.031-.1.205.205 0 01.077-.167.32.32 0 01.21-.073.333.333 0 01.22.064.222.222 0 01.088.176l-.136.003a.122.122 0 00-.05-.094.178.178 0 00-.12-.038.189.189 0 00-.114.035.102.102 0 00-.04.086.082.082 0 00.041.073c.026.016.073.03.141.044.068.013.123.03.166.05.042.02.074.044.095.074a.18.18 0 01.033.106.204.204 0 01-.08.173.358.358 0 01-.219.069.393.393 0 01-.169-.029.27.27 0 01-.118-.091.23.23 0 01-.044-.13l.135-.003a.145.145 0 00.057.107.22.22 0 00.136.036.218.218 0 00.122-.034.096.096 0 00.045-.085zm.311.132a.084.084 0 01.019-.059.079.079 0 01.062-.025c.028-.001.049.006.064.021a.082.082 0 01.023.058.075.075 0 01-.02.057c-.014.016-.035.024-.063.025-.027 0-.049-.007-.063-.021a.085.085 0 01-.022-.056zm-.016-.647a.09.09 0 01.019-.059c.014-.016.035-.024.063-.025.028-.001.049.007.063.022a.083.083 0 01.024.058.08.08 0 01-.021.057c-.014.015-.034.023-.062.024-.028.001-.049-.006-.064-.021a.083.083 0 01-.022-.056z"
                    ></path>
                    <path
                        id="Locked"
                        fill="#45FE57"
                        d="M341.435 319.32l.505-.013.003.115-.647.016-.027-1.066.142-.004.024.952zm.601-.304a.468.468 0 01.04-.211.339.339 0 01.309-.202.332.332 0 01.264.106.427.427 0 01.108.295l.001.01a.49.49 0 01-.04.209.344.344 0 01-.123.146.355.355 0 01-.188.056.338.338 0 01-.264-.106.43.43 0 01-.107-.294v-.009zm.137.012a.337.337 0 00.066.21.193.193 0 00.166.076.197.197 0 00.162-.085.375.375 0 00.055-.228.337.337 0 00-.068-.209.196.196 0 00-.166-.078.197.197 0 00-.16.084.37.37 0 00-.055.23zm1.08.265a.199.199 0 00.125-.047.156.156 0 00.057-.112l.128-.003a.243.243 0 01-.043.131.325.325 0 01-.265.141.327.327 0 01-.26-.101.433.433 0 01-.103-.293v-.023a.475.475 0 01.037-.207.326.326 0 01.118-.143.354.354 0 01.187-.054.316.316 0 01.223.074c.06.052.094.12.1.205l-.128.003a.186.186 0 00-.192-.171.192.192 0 00-.159.079.353.353 0 00-.051.216l.001.025a.34.34 0 00.062.21.192.192 0 00.163.07zm.681-.289l-.083.091.007.278-.135.004-.029-1.125.136-.003.017.68.07-.089.24-.267.165-.004-.3.339.356.452-.159.004-.285-.36zm.863.36a.344.344 0 01-.265-.099.393.393 0 01-.108-.28l-.001-.025a.476.476 0 01.039-.211.355.355 0 01.123-.149.322.322 0 01.174-.057.298.298 0 01.243.096c.059.066.09.163.093.289l.001.057-.537.013a.288.288 0 00.073.188.221.221 0 00.169.068.239.239 0 00.121-.033.293.293 0 00.085-.08l.084.063a.332.332 0 01-.294.16zm-.035-.71a.182.182 0 00-.136.064.289.289 0 00-.065.169l.397-.01v-.011a.261.261 0 00-.06-.158.172.172 0 00-.136-.054zm.457.282a.466.466 0 01.079-.295.273.273 0 01.224-.117.274.274 0 01.223.09l-.011-.413.136-.004.028 1.125-.124.003-.009-.085a.274.274 0 01-.224.105.268.268 0 01-.227-.107.466.466 0 01-.094-.292l-.001-.01zm.136.012c.003.09.023.16.061.209.039.05.091.074.156.073a.199.199 0 00.185-.121l-.009-.364a.2.2 0 00-.189-.107.183.183 0 00-.154.081.388.388 0 00-.05.229z"
                    ></path>
                    <path
                        id="Unlocked"
                        fill="#FECA45"
                        d="M342.02 318.353l.018.725a.335.335 0 01-.089.249.377.377 0 01-.252.114l-.037.003a.397.397 0 01-.281-.088.335.335 0 01-.112-.257l-.019-.726.139-.004.019.722a.241.241 0 00.068.179c.043.041.104.061.183.059.08-.002.14-.025.181-.069a.243.243 0 00.059-.181l-.018-.722.141-.004zm.336.266l.006.099a.288.288 0 01.235-.12c.167-.004.254.088.26.277l.014.523-.136.004-.013-.524c-.002-.058-.016-.099-.043-.126-.026-.027-.066-.04-.12-.038a.198.198 0 00-.115.038.23.23 0 00-.075.094l.014.565-.136.003-.02-.792.129-.003zm.866.77l-.135.004-.029-1.125.136-.003.028 1.124zm.171-.408a.48.48 0 01.04-.21.352.352 0 01.124-.147.353.353 0 01.186-.055.33.33 0 01.264.105.43.43 0 01.108.296v.009a.473.473 0 01-.039.209.341.341 0 01-.311.202.332.332 0 01-.264-.105.426.426 0 01-.107-.294l-.001-.01zm.137.013a.337.337 0 00.066.21.197.197 0 00.166.076.195.195 0 00.162-.085.368.368 0 00.055-.228.342.342 0 00-.067-.21.196.196 0 00-.166-.077.195.195 0 00-.16.084.362.362 0 00-.056.23zm1.08.264a.198.198 0 00.126-.047.155.155 0 00.057-.111l.128-.003a.239.239 0 01-.044.13.292.292 0 01-.113.101.322.322 0 01-.151.041.329.329 0 01-.261-.101.435.435 0 01-.102-.294l-.001-.022a.49.49 0 01.037-.207.333.333 0 01.118-.143.349.349 0 01.187-.055.315.315 0 01.223.075c.061.051.094.12.1.204l-.128.004a.186.186 0 00-.192-.171.188.188 0 00-.158.078.343.343 0 00-.051.216v.026a.35.35 0 00.062.21.19.19 0 00.163.069zm.681-.288l-.082.091.007.278-.136.003-.028-1.124.135-.004.018.681.07-.089.24-.267.165-.004-.3.338.356.453-.159.004-.286-.36zm.863.36a.345.345 0 01-.265-.099.395.395 0 01-.108-.281l-.001-.025a.48.48 0 01.04-.211.343.343 0 01.122-.148.314.314 0 01.174-.057.295.295 0 01.243.096c.059.066.09.162.093.289l.002.056-.537.014c.004.078.028.14.073.188a.217.217 0 00.169.067.235.235 0 00.12-.032.31.31 0 00.086-.08l.084.062a.332.332 0 01-.295.161zm-.035-.71a.183.183 0 00-.136.064.279.279 0 00-.064.168l.396-.01v-.01a.253.253 0 00-.06-.158.17.17 0 00-.136-.054zm.458.282a.46.46 0 01.079-.295.271.271 0 01.223-.117.273.273 0 01.223.089l-.01-.413.135-.003.029 1.124-.125.004-.009-.085a.273.273 0 01-.223.105.272.272 0 01-.228-.107.474.474 0 01-.094-.292v-.01zm.136.012a.346.346 0 00.061.209c.038.05.09.074.155.072a.199.199 0 00.186-.12l-.009-.364a.2.2 0 00-.19-.107.177.177 0 00-.153.081.38.38 0 00-.05.229z"
                    ></path>
                    <g id="lock" fill="#FFFEFE">
                        <path
                        id="body"
                        fillRule="evenodd"
                        d="M344.225 323.649a.854.854 0 100 1.708h.569a.854.854 0 100-1.708h-.569zm1.16.854a.657.657 0 00-.657-.657h-.438a.657.657 0 000 1.314h.438a.657.657 0 00.657-.657z"
                        clipRule="evenodd"
                        ></path>
                        <path
                        id="locked"
                        d="M344.082 322.795h-.142v.894c0 .039.032.071.071.071a.07.07 0 00.071-.071v-.894zm.997 0h-.143v.841c0 .04.032.071.072.071a.07.07 0 00.071-.071v-.841zm-1.139 0h.142c0-.569.854-.569.854 0h.143c0-.712-1.139-.712-1.139 0z"
                        ></path>
                        <path
                        id="unlocked"
                        d="M344.082 322.795h-.142v.894c0 .039.032.071.071.071a.07.07 0 00.071-.071v-.894zm.997 0h-.143v.288c0 .04.032.071.072.071a.07.07 0 00.071-.071v-.288zm-1.139 0h.142c0-.569.854-.569.854 0h.143c0-.712-1.139-.712-1.139 0z"
                        ></path>
                    </g>
                    </g>
                </g>
                <g id="alert-msg">
                    <path
                    id="msg-box"
                    fill="url(#paint25_linear)"
                    stroke="#4DFF16"
                    strokeWidth="0.5"
                    d="M337.747 293.001l13.99-.418a1.75 1.75 0 011.802 1.749v3.494a1.75 1.75 0 01-1.698 1.749l-13.989.418a1.75 1.75 0 01-1.802-1.749v-3.494a1.75 1.75 0 011.697-1.749z"
                    ></path>
                    <path
                    id="Motion alert at front door cam..."
                    fill="#EEE"
                    d="M337.618 296.24l.291.767.255-.779.289-.006.023 1.065-.22.005-.007-.291.011-.504-.27.801-.151.003-.304-.787.033.502.007.291-.22.005-.023-1.066.286-.006zm.994.641a.463.463 0 01.041-.211.33.33 0 01.127-.146.384.384 0 01.197-.055.362.362 0 01.264.093.388.388 0 01.119.263l.003.055a.422.422 0 01-.096.295.353.353 0 01-.27.115.357.357 0 01-.276-.103.423.423 0 01-.109-.297v-.009zm.212.01a.299.299 0 00.046.172.14.14 0 00.123.057.143.143 0 00.119-.061c.028-.041.041-.104.039-.19a.296.296 0 00-.047-.17.142.142 0 00-.123-.059.142.142 0 00-.119.064.327.327 0 00-.038.187zm.909-.618l.004.194.136-.003.003.155-.135.003.008.395c.001.03.007.051.018.063.012.012.034.018.065.018a.354.354 0 00.062-.007l.004.16a.425.425 0 01-.128.022c-.148.004-.225-.07-.232-.219l-.009-.427-.116.002-.003-.155.116-.002-.005-.195.212-.004zm.498.976l-.212.004-.018-.792.213-.004.017.792zm-.247-.992a.11.11 0 01.03-.079.123.123 0 01.087-.033.12.12 0 01.087.029c.022.02.033.046.034.078 0 .032-.01.058-.032.079a.12.12 0 01-.085.033.122.122 0 01-.087-.029.105.105 0 01-.034-.078zm.38.585a.466.466 0 01.041-.211.327.327 0 01.127-.145.375.375 0 01.197-.055.358.358 0 01.264.092.393.393 0 01.119.264l.003.054a.419.419 0 01-.096.295.354.354 0 01-.27.116.356.356 0 01-.276-.104.42.42 0 01-.109-.296v-.01zm.212.011a.304.304 0 00.046.172.14.14 0 00.123.056.14.14 0 00.119-.061c.028-.04.041-.103.039-.19a.301.301 0 00-.047-.17.141.141 0 00-.123-.058.138.138 0 00-.119.063.33.33 0 00-.038.188zm.855-.423l.008.091a.276.276 0 01.225-.111c.084-.002.147.022.189.07.042.048.065.122.068.22l.011.511-.211.005-.011-.507c-.001-.045-.012-.077-.032-.096-.02-.02-.052-.03-.098-.029a.146.146 0 00-.132.079l.012.559-.211.004-.017-.792.199-.004zm1.494.759a.23.23 0 01-.022-.07.257.257 0 01-.198.09.285.285 0 01-.195-.063.218.218 0 01-.08-.168.226.226 0 01.089-.196.463.463 0 01.269-.074l.097-.002-.001-.045a.126.126 0 00-.031-.087c-.019-.022-.048-.032-.089-.031a.125.125 0 00-.083.027.086.086 0 00-.029.071l-.211.005a.217.217 0 01.039-.129.287.287 0 01.118-.094.436.436 0 01.174-.037.343.343 0 01.233.069.253.253 0 01.091.204l.008.343a.383.383 0 00.035.17v.013l-.214.004zm-.178-.143a.19.19 0 00.086-.022.147.147 0 00.058-.058l-.003-.136-.079.002c-.106.002-.162.04-.167.113l-.001.013a.087.087 0 00.03.064.104.104 0 00.076.024zm.746.131l-.212.005-.025-1.125.213-.004.024 1.124zm.54.003a.39.39 0 01-.286-.101.38.38 0 01-.116-.282v-.021a.479.479 0 01.041-.214.335.335 0 01.128-.147.36.36 0 01.192-.056.327.327 0 01.257.097.411.411 0 01.1.288l.002.087-.504.011a.2.2 0 00.064.123c.036.03.08.045.132.044a.228.228 0 00.189-.093l.107.114a.313.313 0 01-.127.108.432.432 0 01-.179.042zm-.038-.65a.135.135 0 00-.102.045.223.223 0 00-.047.123l.294-.007v-.017a.154.154 0 00-.041-.107.135.135 0 00-.104-.037zm.916.022a.53.53 0 00-.076-.004c-.08.002-.132.03-.156.084l.012.519-.212.004-.017-.792.2-.004.007.094c.041-.073.099-.111.174-.113.024 0 .046.003.066.008l.002.204zm.384-.402l.004.195.135-.003.004.155-.136.003.009.395c.001.03.007.05.018.063.012.012.033.018.065.017a.29.29 0 00.062-.006l.004.16a.43.43 0 01-.128.022c-.148.003-.226-.07-.232-.22l-.009-.426-.116.002-.003-.155.115-.002-.004-.195.212-.005zm1.107.963a.212.212 0 01-.023-.071.251.251 0 01-.198.09.28.28 0 01-.195-.063.215.215 0 01-.08-.168.226.226 0 01.089-.195.466.466 0 01.269-.074l.097-.002-.001-.045a.13.13 0 00-.031-.088c-.019-.021-.048-.032-.089-.031a.126.126 0 00-.083.028c-.02.017-.029.041-.029.071l-.211.004a.217.217 0 01.039-.128.28.28 0 01.118-.094.423.423 0 01.174-.037.338.338 0 01.233.068.256.256 0 01.091.205l.008.343a.383.383 0 00.035.17v.012l-.213.005zm-.179-.143a.178.178 0 00.086-.023.145.145 0 00.058-.057l-.003-.136-.079.001c-.106.003-.162.04-.167.114v.012c0 .027.01.048.029.065a.114.114 0 00.076.024zm.755-.857l.004.195.135-.003.004.155-.136.003.009.395c.001.03.007.05.018.063.012.012.033.018.065.018a.354.354 0 00.062-.007l.004.16a.425.425 0 01-.128.022c-.148.003-.225-.07-.232-.22l-.009-.426-.116.002-.003-.155.116-.002-.005-.195.212-.005zm.706.972l-.014-.637-.118.003-.004-.155.118-.003-.001-.067a.275.275 0 01.071-.208.296.296 0 01.213-.079.466.466 0 01.108.012l.002.164a.312.312 0 00-.065-.005c-.08.002-.118.04-.117.115l.002.063.157-.003.003.155-.157.003.014.637-.212.005zm.911-.614a.53.53 0 00-.076-.004c-.08.002-.132.03-.156.085l.012.518-.212.004-.017-.792.199-.004.008.094c.041-.073.099-.111.174-.113.024 0 .046.003.066.009l.002.203zm.047.189a.48.48 0 01.041-.211.332.332 0 01.127-.145.387.387 0 01.197-.055.362.362 0 01.264.092.393.393 0 01.119.264l.003.054a.414.414 0 01-.096.295.354.354 0 01-.27.116.358.358 0 01-.276-.104.416.416 0 01-.108-.296l-.001-.01zm.212.011a.304.304 0 00.046.172c.03.039.07.058.123.056a.14.14 0 00.119-.061c.028-.04.041-.103.039-.19a.294.294 0 00-.047-.17.141.141 0 00-.123-.058.137.137 0 00-.119.064.327.327 0 00-.038.187zm.855-.423l.008.091a.278.278 0 01.226-.111c.084-.001.147.022.189.07.042.049.064.122.067.22l.012.511-.212.005-.011-.506c-.001-.045-.011-.078-.031-.097-.02-.02-.053-.03-.098-.029a.148.148 0 00-.133.079l.013.559-.212.004-.017-.792.199-.004zm.894-.214l.004.194.136-.003.003.156-.135.003.009.395c0 .029.006.05.018.062.011.013.033.019.065.018a.366.366 0 00.062-.007l.003.161a.457.457 0 01-.127.022c-.149.003-.226-.07-.232-.22l-.01-.427-.115.003-.004-.155.116-.003-.004-.195.211-.004zm-10.328 2.311a.483.483 0 01.076-.297.27.27 0 01.225-.114.24.24 0 01.193.082l-.009-.404.212-.005.025 1.124-.191.004-.012-.084a.25.25 0 01-.201.104.27.27 0 01-.227-.105.496.496 0 01-.091-.305zm.212.011c.001.074.015.13.042.169a.127.127 0 00.114.057c.066-.001.111-.03.137-.085l-.007-.313c-.028-.055-.074-.081-.139-.08-.102.003-.151.086-.147.252zm.632-.031a.48.48 0 01.041-.211.335.335 0 01.127-.146.387.387 0 01.197-.054.358.358 0 01.264.092.393.393 0 01.119.264l.003.054a.416.416 0 01-.096.295.354.354 0 01-.27.116.358.358 0 01-.276-.104.417.417 0 01-.108-.296l-.001-.01zm.212.011a.304.304 0 00.046.172c.03.038.07.057.123.056a.14.14 0 00.119-.061c.028-.04.041-.103.039-.19a.294.294 0 00-.047-.17.141.141 0 00-.123-.058.138.138 0 00-.119.063.33.33 0 00-.038.188zm.636-.03a.482.482 0 01.04-.211.334.334 0 01.128-.145.384.384 0 01.197-.055.36.36 0 01.263.092.398.398 0 01.12.264l.002.054a.414.414 0 01-.095.295.352.352 0 01-.271.116.354.354 0 01-.276-.104.423.423 0 01-.108-.296v-.01zm.212.011a.294.294 0 00.046.172.14.14 0 00.123.057.142.142 0 00.118-.062c.028-.04.041-.103.039-.189a.287.287 0 00-.047-.171.138.138 0 00-.122-.058.136.136 0 00-.119.064c-.028.04-.04.103-.038.187zm1.109-.23a.53.53 0 00-.076-.004c-.08.002-.132.03-.156.085l.011.518-.211.004-.017-.791.199-.005.008.094c.041-.073.099-.111.174-.113.024 0 .046.003.066.009l.002.203zm.814.42a.141.141 0 00.095-.034.112.112 0 00.036-.087l.198-.004a.27.27 0 01-.04.149.293.293 0 01-.117.106.358.358 0 01-.164.04.343.343 0 01-.27-.101.431.431 0 01-.105-.297v-.014a.417.417 0 01.091-.294.34.34 0 01.264-.115.334.334 0 01.24.08.298.298 0 01.096.223l-.198.004a.144.144 0 00-.04-.099.128.128 0 00-.098-.036.127.127 0 00-.11.056c-.024.036-.036.095-.034.175l.001.022c.001.082.015.14.041.175.026.035.064.052.114.051zm.915.136a.237.237 0 01-.023-.071.251.251 0 01-.198.09.279.279 0 01-.194-.063.215.215 0 01-.08-.168.225.225 0 01.088-.195.466.466 0 01.269-.074l.097-.002-.001-.046a.13.13 0 00-.03-.087c-.019-.021-.049-.032-.089-.031a.127.127 0 00-.084.028c-.02.017-.029.041-.028.071l-.212.004a.209.209 0 01.04-.128.268.268 0 01.118-.094.435.435 0 01.173-.038.344.344 0 01.234.069.26.26 0 01.091.205l.007.343a.383.383 0 00.035.17l.001.012-.214.005zm-.178-.143a.193.193 0 00.086-.023.142.142 0 00.057-.057l-.003-.137-.079.002c-.106.003-.161.04-.167.114v.012c.001.026.01.048.029.065a.116.116 0 00.077.024zm.704-.661l.008.089a.277.277 0 01.225-.109c.102-.002.173.037.213.116a.275.275 0 01.235-.126c.086-.001.151.022.194.072.043.048.065.123.068.224l.011.505-.213.005-.011-.505c-.001-.045-.01-.077-.028-.097-.018-.021-.049-.031-.094-.03-.063.002-.106.033-.129.094l.012.544-.211.004-.011-.504c-.001-.046-.011-.079-.03-.099-.018-.02-.049-.03-.093-.029-.06.002-.102.027-.128.078l.012.56-.211.004-.018-.792.199-.004zm1.126.664a.105.105 0 01.031-.083.118.118 0 01.085-.033.122.122 0 01.087.029.11.11 0 01.036.081.104.104 0 01-.032.082.125.125 0 01-.086.033.122.122 0 01-.086-.029.102.102 0 01-.035-.08zm.436-.01a.107.107 0 01.032-.083.123.123 0 01.085-.033.118.118 0 01.086.03c.023.02.035.047.036.081a.106.106 0 01-.032.082.119.119 0 01-.086.032.12.12 0 01-.086-.028.105.105 0 01-.035-.081zm.436-.01a.105.105 0 01.032-.082.121.121 0 01.085-.034c.034 0 .063.009.086.03.023.02.035.048.036.081a.105.105 0 01-.032.082.123.123 0 01-.085.033.122.122 0 01-.087-.029.107.107 0 01-.035-.081z"
                    ></path>
                    <path
                    id="wyze-logo_2"
                    fill="#fff"
                    d="M339.552 293.691l-.156.005.525.744.021.568.155-.006-.02-.567.5-.782-.171.007-.412.65-.442-.619zm-1.663.06l.171-.006.592 1.103.511-1.143.156-.006-.602 1.383-.056.002-.056.002-.257-.481-.222.498-.047.002-.078.003-.702-1.335.186-.007.57 1.118.201-.451-.367-.682zm4.036 1.036l.006.148-1.228.045.099-.152.793-1.064-.888.032-.006-.147 1.212-.044-.103.151-.812 1.065.927-.034zm1.262-1.229l.006.148-1.212.044-.006-.148 1.212-.044zm.027.739l-.005-.148-1.212.044.005.148 1.212-.044zm.016.443l.006.147-1.212.045-.006-.148 1.212-.044z"
                    ></path>
                </g>
                <path
                    id="cursor"
                    fill="#000"
                    stroke="#FDFDFD"
                    strokeWidth="0.15"
                    d="M347.149 341.451l-.348-1.807 1.509 1.005-.678.226-.021.007-.014.017-.448.552z"
                ></path>
                <g id="computer-frame">
                    <g id="Rectangle 574">
                    <path
                        fill="url(#paint26_linear)"
                        d="M298.667 363h22.666v29.324h-22.666V363z"
                    ></path>
                    <path
                        fill="url(#paint27_linear)"
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
                    d="M428.869 480.803v55.985h-8.52v-55.985h8.52z"
                ></path>
                <path
                    id="Union_8"
                    fill="#000"
                    fillRule="evenodd"
                    d="M498.542 441.639a1.999 1.999 0 00-1.281-2.521l-.721-.235a1.999 1.999 0 00-2.521 1.281l-5.551 17.026a2 2 0 001.282 2.521l.721.235c.421.137.854.127 1.245-.002a58.208 58.208 0 00-.351 2.427c-.222 1.792-.36 3.497-.489 5.09-.034.431-.069.853-.104 1.267-.165 1.954-.348 3.711-.701 5.271-.352 1.557-.868 2.894-1.684 4.014-.812 1.115-1.939 2.041-3.554 2.751-1.073.471-2.359.846-3.906 1.116.032-.142.049-.29.049-.441v-.758a2 2 0 00-2-2h-17.907a2 2 0 00-2 2v.758a2 2 0 002 2h17.907c.471 0 .905-.163 1.247-.437 2.008-.283 3.656-.727 5.013-1.323 1.761-.774 3.034-1.806 3.96-3.077.922-1.267 1.48-2.744 1.85-4.382.37-1.635.558-3.453.723-5.408l.105-1.281c.129-1.591.264-3.268.484-5.037.147-1.188.332-2.414.576-3.675.022-.05.041-.102.058-.155l3.16-9.694c.223-.465.458-.932.706-1.403l-.212-.112 1.896-5.816z"
                    clipRule="evenodd"
                ></path>
                <g id="Union_9" fill="#262A2E">
                    <path d="M483.342 461.827c-9.993-1.679-6.285-28.684-.713-61.827 1.474-8.769 2.218-17.209 2.889-24.817 1.864-21.149 3.162-35.873 18.002-33.378 14.84 2.495 11.252 16.834 6.098 37.43-1.854 7.409-3.911 15.628-5.385 24.397-5.572 33.144-10.898 59.875-20.891 58.195z"></path>
                    <path d="M360.713 472.284c0 12.825 15.202 12.302 39.818 11.455 6.919-.238 14.583-.502 22.861-.502 20.69 0 62.679 0 62.679-10.953 0-13.852-16.154-12.99-39.069-11.768-7.287.389-15.258.814-23.61.814-7.423 0-14.544-.252-21.152-.485-24.209-.856-41.527-1.469-41.527 11.439zm57.202 62.776l1.217 18.256h10.954l1.825-18.256c2.982.092 6.425.223 9.118.391 7.85 8.093 7.407 17.145 6.704 20.3 3.043-1.826 5.477-1.826 8.52 0 0-7.808-3.564-15.502-7.253-19.663 3.798.376 7.261.832 10.415 1.352 2.746 1.718 2.923 4.923 2.923 6.14 1.217-1.217 3.651-1.826 6.085 0-.047-1.236-.92-3.587-1.37-4.626 18.307 4.32 23.366 12.896 22.669 16.797 2.434-2.435 6.694-2.435 9.737 0 1.149-15.704-27.472-24.218-50.176-26.455a198.312 198.312 0 00-11.286-.789c-1.934-.08-3.769-.125-5.477-.14h-14.605c-4.801.043-10.61.322-16.763.929-22.705 2.237-51.393 10.632-51.393 27.063 3.651-2.434 5.477-3.043 9.737 0 0-7.302 5.579-13.085 23.886-17.405-.45 1.039-1.323 3.39-1.371 4.626 1.826-1.217 3.652-1.826 6.086 0 0-1.217.177-4.422 2.923-6.14 3.116-.514 6.535-.965 10.279-1.339-3.369 5.863-5.9 14.781-5.9 19.65 3.043-1.826 5.477-1.826 9.128 0 0 0-2.434-10.954 3.091-20.183a265.95 265.95 0 0110.297-.508zm76.675 29.819a3.652 3.652 0 11.001-7.303 3.652 3.652 0 01-.001 7.303z"></path>
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
            <g id="guy2">
            <g id="leg-right-2">
                <g id="Rectangle 69_2" fill="#DDAA6F">
                <path d="M321.781 488.986s-1.317-7.334-4.691-17.413c-3.284-9.808-8.289-21.234-13.798-23.915-5.738-2.792-7.28 3.287-7.28 3.287l10.441 44.208a.826.826 0 00.365.526c.954.602 4.154 2.224 7.732-.354 5.975-4.306 7.231-6.339 7.231-6.339z"></path>
                <path d="M321.781 488.986s-1.317-7.334-4.691-17.413l3 .449 3.884 16.446-2.193.518z"></path>
                </g>
            </g>
            <path
                id="Rectangle 66_2"
                fill="#22189F"
                d="M449.598 460.636l-6.819-27.327-124.088 37.845 4.649 18.632 126.258-29.15z"
            ></path>
            <g id="leg-left-2">
                <g id="Rectangle 67" fill="#CAA172">
                <path d="M327.164 505.849s-2.314-7.083-7.042-16.602c-4.602-9.263-11.132-19.892-16.957-21.789-6.068-1.976-6.759 4.258-6.759 4.258l16.424 42.351a.826.826 0 00.434.47c1.028.465 4.42 1.631 7.61-1.415 5.326-5.086 6.29-7.273 6.29-7.273z"></path>
                <path d="M327.164 505.849s-2.314-7.083-7.042-16.602l3.033.032 6.11 15.756-2.101.814z"></path>
                </g>
                <path
                id="Rectangle 63_2"
                fill="#160C8E"
                d="M449.425 459.049l-10.649-26.074-117.416 55.168 7.261 17.778 120.804-46.872z"
                ></path>
            </g>
            <g id="body-int-upper">
                <g id="arm-int-right">
                <path
                    id="Rectangle 71_3"
                    fill="#F0E262"
                    d="M417.371 370.166L411 355.628l24.422-15.046c15.245-7.248 19.299 15.551 8.734 17.89l-26.785 11.694z"
                ></path>
                <path
                    id="Rectangle 70_2"
                    fill="#E99C7D"
                    d="M426.675 370.166l-4.772-14.538-51.284 33.804 2.472 12.064 53.584-31.33zm0 0l-4.772-14.538 18.291-15.046c11.418-7.248 14.454 15.551 6.542 17.889l-20.061 11.695z"
                ></path>
                <path
                    id="Ellipse 9_3"
                    fill="#E99C7D"
                    d="M360.973 391.692c-3.256 3.529-4.156 6.632-1.204 11.486 2.952 4.855 9.67 3.279 12.927-.25 3.256-3.53 3.61-7.468.658-12.323s-2.293 2.485-12.381 1.087z"
                ></path>
                </g>
                <g id="body-head-int">
                <ellipse
                    id="Ellipse 7_3"
                    fill="#E99C7D"
                    rx="39.628"
                    ry="35.526"
                    transform="matrix(-1 0 0 1 434.515 286.532)"
                ></ellipse>
                <path
                    id="Rectangle 58_2"
                    fill="#E99C7D"
                    d="M0 0h23.903v18.045H0z"
                    transform="matrix(-1 0 0 1 447.915 310.78)"
                ></path>
                <path
                    id="Vector 12_2"
                    fill="#300B0B"
                    d="M444.414 293.562c-.976 6.696-1.196 16.922 12.632 22.361 4.682-1.595 7.55-3.456 9.149-6.071 16.632-27.197 7.231-51.373-8.046-53.605-24.54-23.531-51.618-7.541-59.316 6.293-7.698 13.833 27.903 18.562 41.932 16.812 10.359-1.292 2.189 11.147 3.649 14.21z"
                ></path>
                <path
                    id="Rectangle 54_2"
                    fill="#F0E262"
                    d="M458.054 336.107c0-14.262-43.937-14.18-43.937 0v102.115s5.258 7.121 20.249 7.87c18.749.938 19.64-7.87 19.64-7.87s4.048-79.607 4.048-102.115z"
                ></path>
                </g>
                <g id="arm-int-left">
                <g id="Rectangle 56_2" fill="#E99C7D">
                    <path d="M412.382 372.883l-6.629-14.422-67.862 35.016 3.514 12.003 70.977-32.597z"></path>
                    <path d="M412.382 372.883l-6.629-14.422 24.151-15.477c15.113-7.518 19.572 15.206 9.05 17.731l-26.572 12.168z"></path>
                </g>
                <path
                    id="Rectangle 64_2"
                    fill="#F0E262"
                    d="M412.381 372.883l-6.628-14.422 24.15-15.477c15.114-7.518 19.573 15.206 9.051 17.731l-26.573 12.168z"
                ></path>
                <path
                    id="Ellipse 8_2"
                    fill="#E99C7D"
                    d="M325.053 395.965c-4.284 3.606-5.429 6.729-1.402 11.513s12.967 3.049 17.251-.557c4.285-3.606 4.688-7.552.661-12.336-4.027-4.784-3.017 2.539-16.51 1.38z"
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
          x1="314.535"
          x2="314.721"
          y1="298.162"
          y2="312.076"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#88E19B"></stop>
          <stop offset="1" stopColor="#0CB9B6"></stop>
        </linearGradient>
        <linearGradient
          id="paint21_linear"
          x1="320.495"
          x2="320.722"
          y1="341.815"
          y2="348.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.057" stopColor="#DAE0EB"></stop>
          <stop offset="0.094" stopColor="#ADB5BF"></stop>
          <stop offset="0.156" stopColor="#DAE0EB"></stop>
          <stop offset="0.875" stopColor="#DAE0EB"></stop>
          <stop offset="0.906" stopColor="#ADB5BF"></stop>
          <stop offset="0.948" stopColor="#DAE0EB"></stop>
        </linearGradient>
        <linearGradient
          id="paint22_linear"
          x1="276.096"
          x2="276.443"
          y1="345.509"
          y2="351.266"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4C4C4"></stop>
          <stop offset="1" stopColor="#838383"></stop>
        </linearGradient>
        <linearGradient
          id="paint23_linear"
          x1="298.217"
          x2="297.306"
          y1="336.849"
          y2="336.161"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3550DD"></stop>
          <stop offset="1" stopColor="#263DB4"></stop>
        </linearGradient>
        <linearGradient
          id="paint24_linear"
          x1="301.635"
          x2="300.096"
          y1="337.251"
          y2="336.648"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3550DD"></stop>
          <stop offset="1" stopColor="#263DB4"></stop>
        </linearGradient>
        <linearGradient
          id="paint25_linear"
          x1="345.046"
          x2="344.951"
          y1="292.391"
          y2="300.413"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#88E19B"></stop>
          <stop offset="1" stopColor="#0CB9B6"></stop>
        </linearGradient>
        <linearGradient
          id="paint26_linear"
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
          id="paint27_linear"
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

export default Scene2
