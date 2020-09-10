import React, { useEffect } from 'react'
import {useStore} from '../Store'
import { gsap } from 'gsap'

const Scene5 = () => {
    const next = useStore(state => state.nextScene)
    
    // function showButton() {
    //     const btn = document.querySelector("#replay")
    //     btn.style.display = "block"
    // }

    useEffect(() => {
        const tl = gsap.timeline()
            tl.set("#package-table", {display: "block"})

            // Opening scene -> rolls in on chair, lits items from box
            tl.fromTo("#guy4, #chair-front", 2, {x: 1000, display: "block"}, {x: 0, ease: "none"})
            tl.to("#chair-front", 2, {x: -1000, ease: "none"})
            tl.to("#guy4", .15, {y:-20, }, "-=2")
            tl.to("#leg-left-3", .2, {rotate: 70, transformOrigin: "15% 10%"}, "-=2")
            tl.to("#leg-right-4", .2, {rotate: 70, transformOrigin: "15% 10%"}, "-=2")
            tl.to("#guy4", 0, {scaleX: -1, transformOrigin: "20% 50%"}, "-=2")
            tl.to("#arm-int-left", .2, {rotate: -20}, "-=2")
            tl.to("#arm-int-right", .2, {rotate: -50}, "-=2")
            tl.to("#wyze-outdoor-cam", {display: "block"}, "-=2")
            tl.to("#base", {display: "block"}, "-=2")
            tl.to("#box-open", {display: "block"},"-=2")

            // zoom in on product
            tl.to("#scene-5", {attr:{viewBox: "80 235 190 120"}, duration: 1}, "-=1")

            tl.fromTo("#product-display", .32, {display: "none", opacity: 0}, {display: "block", opacity: 1})
            tl.fromTo("#product-title", .8, {display:"none", opacity: 0}, {display: "block", opacity: 1})
            tl.fromTo("#product-info", .8, {display:"none", opacity: 0}, {display: "block", opacity: 1}, "-=0.3")
            tl.fromTo("#product-price", 1.6, {display:"none", opacity: 0}, {display: "block", opacity: 1})
            tl.to("#product-card", 0.4, {opacity: 0, delay:2})
            tl.to("#product-display", 0.5, {opacity: 0})

            tl.to("#scene-5", {attr:{viewBox: "0 0 838 596"}, duration: 1})

            tl.to("#guy4", .2, {y: -100, rotate: 10})
            tl.to("#leg-left-3", .2, {rotate: 30}, "-=.1")
            tl.to("#leg-right-4", .2, {rotate: 140, transformOrigin: "10% 50%"}, "-=.3")
            tl.to("#arm-int-left", .2, {rotate: -50}, "-=.2")
            tl.to("#arm-int-right", .2, {rotate: -120}, "-=.2")

            tl.to("#wyze-logo", {display: "block"})
            tl.to("#replay", .2, {display: "block"})
                .fromTo("#replay", .4, {opacity: 0, y:10, rotate: -10}, {opacity: 1, y:0, rotate: 0})

    }, [next])

    return (
        <>
            <svg
                id="scene-5"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="838"
                height="596"
                fill="none"
                viewBox="0 0 838 596"
                title="What's in the box?"
                role="img"
                alt="The person slides in on chair and reveals the contents of the package"
                >
                <g id="scene-5-the-box" clipPath="url(#clip0)">
                    <desc>
                        The person slides in on the office chair and when they are in line with the table and package (in one motion) they stand up out of the chair (the chair continues to slide out of screens viewport) and lift the contents from the now open top flap of the box and into to air showing — in each hand respectfully — a slightly beefier camera and accompanying base antenna unit. View zooms into the camera and base. Text displays reading “Wyze Cam Outdoor, Wireless livestream & recording, 6 month battery charge, $49.99”. View zooms out to the person leaps into the air with outstretched arms still holding the new camera unit. At the apex of leap the image freeze-frames and in large white title lettering the word “WYZE” (and logo of the company) displays across the entire screen.
                    </desc>
                    <path fill="#fff" d="M0 0h838v596H0z"></path>
                    <g id="inside-door">
                    <g id="outside-bg">
                        <path
                        id="grass"
                        fill="#8DCAAD"
                        d="M6.578 384.491h786.595v213.036H6.578z"
                        ></path>
                        <path
                        id="sky"
                        fill="#8FD9FD"
                        d="M33.89 62.206h737.433v270.392L33.89 330.739V62.206z"
                        ></path>
                        <path
                        id="road"
                        fill="#909699"
                        d="M25.696 332.598H763.13v51.893l-737.433-.356v-51.537z"
                        ></path>
                        <path
                        id="walkway"
                        fill="#AFB6D7"
                        d="M296.088 384.491h412.417v40.898l-412.417.071v-40.969z"
                        ></path>
                        <g id="brick-wall">
                        <path
                            id="Rectangle 354"
                            fill="#C4C4C4"
                            d="M12.04 310.748h464.31V425.46H12.04z"
                        ></path>
                        <path
                            id="Vector"
                            fill="#A53B33"
                            d="M476.238 411.494l-25.977.269v13.241l25.977-.269v-13.241zm-82.069.269h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.153 0H13.65v13.241h53.06v-13.241zm409.528-29.053l-25.977.268v13.241l25.977-.269v-13.24zm-82.069.268h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.153 0H13.65v13.241h53.06v-13.241zm409.528-14.661l-52.507.269v13.241l52.507-.269v-13.241zm-108.6.269h-53.06v13.241h53.06v-13.241zm-109.152 0h-53.06v13.241h53.06v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm326.905 28.516l-52.507.269v13.24l52.507-.268v-13.241zm-108.6.269h-53.06v13.24h53.06v-13.24zm-109.152 0h-53.06v13.24h53.06v-13.24zm-109.153 0h-53.06v13.24h53.06v-13.24zm326.905-43.446l-25.977.269v13.24l25.977-.268v-13.241zm-82.069.269h-53.061v13.24h53.061v-13.24zm-109.153 0h-53.06v13.24h53.06v-13.24zm-109.153 0h-53.06v13.24h53.06v-13.24zm-109.153 0H13.65v13.24h53.06v-13.24zm409.528-14.661l-52.507.268v13.241l52.507-.268v-13.241zm-108.6.268h-53.06v13.241h53.06v-13.241zm-109.152 0h-53.06v13.241h53.06v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm326.905-14.661l-25.977.269v13.241l25.977-.269V325.14zm-82.069.269h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.153 0H13.65v13.241h53.06v-13.241zm409.528-14.661l-52.507.269v13.241l52.507-.269v-13.241zm-108.6.269h-53.06v13.241h53.06v-13.241zm-109.152 0h-53.06v13.241h53.06v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm299.412 14.392h-53.06v13.241h53.06v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.152 0h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm300.928 14.392h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.152 0h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm353.988 14.393h-53.06v13.24h53.06v-13.24zm-109.153 0h-53.06v13.24h53.06v-13.24zm-109.152 0h-53.061v13.24h53.061v-13.24zm-109.153 0h-53.06v13.24h53.06v-13.24zm300.928 14.392h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.152 0h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm353.988 14.392h-53.06v13.241h53.06v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.152 0h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm300.928 14.393h-53.061v13.24h53.061v-13.24zm-109.153 0h-53.06v13.24h53.06v-13.24zm-109.152 0h-53.061v13.24h53.061v-13.24zm-109.153 0h-53.06v13.24h53.06v-13.24zm353.988 14.392h-53.06v13.241h53.06v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.152 0h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm300.928-100.746h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241zm-109.152 0h-53.061v13.241h53.061v-13.241zm-109.153 0h-53.06v13.241h53.06v-13.241z"
                        ></path>
                        </g>
                        <g id="railing">
                        <path
                            id="Rectangle 474"
                            fill="url(#paint0_linear)"
                            d="M1.115 324.404h505.278v13.656H1.115z"
                        ></path>
                        <path
                            id="Rectangle 475"
                            fill="url(#paint1_linear)"
                            d="M1.115 450.041h505.278v13.656H1.115z"
                        ></path>
                        <path
                            id="Rectangle 476"
                            fill="#DAE0EB"
                            d="M9.353 338.06h8.238v111.981H9.353z"
                        ></path>
                        <path
                            id="Rectangle 477"
                            fill="#DAE0EB"
                            d="M25.83 338.06h8.238v111.981H25.83z"
                        ></path>
                        <path
                            id="Rectangle 478"
                            fill="#DAE0EB"
                            d="M42.306 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 479"
                            fill="#DAE0EB"
                            d="M58.783 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 480"
                            fill="#DAE0EB"
                            d="M75.259 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 481"
                            fill="#DAE0EB"
                            d="M91.736 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 482"
                            fill="#DAE0EB"
                            d="M108.212 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 483"
                            fill="#DAE0EB"
                            d="M124.689 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 484"
                            fill="#DAE0EB"
                            d="M141.165 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 485"
                            fill="#DAE0EB"
                            d="M157.642 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 486"
                            fill="#DAE0EB"
                            d="M174.118 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 487"
                            fill="#DAE0EB"
                            d="M190.594 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 488"
                            fill="#DAE0EB"
                            d="M207.071 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 489"
                            fill="#DAE0EB"
                            d="M223.547 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 490"
                            fill="#DAE0EB"
                            d="M240.024 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 491"
                            fill="#DAE0EB"
                            d="M256.5 338.06h8.238v111.981H256.5z"
                        ></path>
                        <path
                            id="Rectangle 492"
                            fill="#DAE0EB"
                            d="M272.977 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 493"
                            fill="#DAE0EB"
                            d="M289.453 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 494"
                            fill="#DAE0EB"
                            d="M305.93 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 495"
                            fill="#DAE0EB"
                            d="M322.406 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 496"
                            fill="#DAE0EB"
                            d="M338.883 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 497"
                            fill="#DAE0EB"
                            d="M355.359 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 498"
                            fill="#DAE0EB"
                            d="M371.836 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 499"
                            fill="#DAE0EB"
                            d="M388.312 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 500"
                            fill="#DAE0EB"
                            d="M404.789 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 501"
                            fill="#DAE0EB"
                            d="M421.265 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 502"
                            fill="#DAE0EB"
                            d="M437.741 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 503"
                            fill="#DAE0EB"
                            d="M454.218 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 504"
                            fill="#DAE0EB"
                            d="M470.694 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 505"
                            fill="#DAE0EB"
                            d="M487.171 338.06h8.238v111.981h-8.238z"
                        ></path>
                        <path
                            id="Rectangle 506"
                            fill="#DAE0EB"
                            d="M487.171 338.06h8.238v111.981h-8.238z"
                        ></path>
                        </g>
                        <g id="brick-wall_2">
                        <path
                            id="Rectangle 354_2"
                            fill="#C4C4C4"
                            d="M637.493 310.748H784.98V425.46H637.493z"
                        ></path>
                        <path
                            id="Vector_2"
                            fill="#A53B33"
                            d="M771.659 411.763h-53.06v13.241h53.06v-13.241zm0-28.785h-53.06v13.241h53.06v-13.241zm-26.53-14.392h-53.06v13.241h53.06v-13.241zm0 28.785h-53.06v13.241h53.06v-13.241zm26.53-43.177h-53.06v13.241h53.06v-13.241zm-26.53-14.393h-53.06v13.241h53.06v-13.241zm26.53-14.392h-53.06v13.241h53.06v-13.241zm-26.53-14.392h-53.06v13.241h53.06v-13.241zm-28.046 14.392h-53.06v13.241h53.06v-13.241zm-26.53 14.392h-53.061v13.241h53.061v-13.241zm26.53 14.393h-53.06v13.241h53.06v-13.241zm-26.53 14.392h-53.061v13.241h53.061v-13.241zm26.53 14.392h-53.06v13.241h53.06v-13.241zm-26.53 14.393h-53.061v13.241h53.061v-13.241zm26.53 14.392h-53.06v13.241h53.06v-13.241zm-26.53-100.746h-53.061v13.241h53.061v-13.241zm-28.046 27.633v-13.241h-25.015v13.241h25.015zm0 86.354v-13.241h-25.015v13.241h25.015zm0-28.785v-13.241h-25.015v13.241h25.015zm0-28.784v-13.241h-25.015v13.241h25.015z"
                        ></path>
                        </g>
                        <g id="walkway_2">
                        <path
                            id="Union"
                            fill="#BFBABA"
                            d="M533.587 537.44h-29.925v-11.444h31.317l-1.392 11.444zm.727-36.092h-29.26l1.392-15.406 27.868 2.201v13.205zm-23.693-51.939h26.601l1.237 14.965h-27.838v-14.965zm48.02 88.031h-21.574v-13.204h21.574v13.204zm-20.878-36.092h20.878v-13.205h-20.878v13.205zm22.27-51.939h-18.79v12.324l18.79 1.761v-14.085zm68.202 70.425h17.399v-13.205h-17.399v13.205zm11.831-74.827l-18.094-.88v-11.444h16.169l1.925 12.324zm-15.311 23.769h16.703v13.205h-16.703v-13.205zm-45.932 49.298l-23.661 1.76v-14.965h22.662l.999 13.205zm-22.966-73.947l21.575-1.553-.912-11.652h-20.663v13.205zm22.966 26.41l-22.27-1.761v14.965h21.329l.941-13.204zm-73.769 51.938h20.878v-17.166h-10.091l-10.787 3.961v13.205zm25.054-75.707h-18.791v-12.189l9.709-3.657h9.082v15.846zm-20.878 22.008h19.486v13.205H509.23v-13.205zm41.756 51.058h-22.27v-13.205h20.92l1.35 13.205zm-18.79-75.707h20.182l-1.223-11.444h-18.959v11.444zm20.182 24.649H531.5v13.205l20.878 1.76v-14.965zm51.499 37.853h22.27l-1.349 13.205h-20.921v-13.205zm16.703-73.946h-20.878v11.444l10.052 1.761 9.56-1.761 1.266-11.444zm-18.095 49.298h20.879l-1.266-13.205h-19.613v13.205zm-16.702 55.459h-24.358v-14.965l24.358.88v14.085zm-24.358-36.092h23.662v-14.085l-23.662-.881v14.966zm22.27-51.939h-20.878v14.582l10.787 2.144 10.091-3.002v-13.724zm4.872 88.031h19.486v-11.444h-19.486v11.444zm18.094-36.092h-19.486v-11.445l7.655-3.081h11.831v14.526zm-21.574-51.939h18.094v11.444l-18.094 4.402v-15.846zm-2.784 70.425l17.399 1.761V508.39l-17.399-1.761v13.205zm14.615-73.946l-15.311-1.554v-11.651h15.311v13.205zm-15.311 22.888l16.703-1.761v17.166l-8.351-3.081-8.352.881v-13.205zm29.23 67.784h18.094v-14.965l-18.094 1.76v13.205zm16.006-36.093h-17.398v-13.204l17.398-1.761v14.965zm-20.182-50.178h14.615v14.966l-14.615-1.761v-13.205zm41.756 87.151h-16.006v-13.644l16.006 2.2v11.444zm-18.094-36.092h15.311v-11.445l-7.656-2.64h-7.655v14.085zm10.439-51.939h-16.007v11.444h14.94l1.067-11.444z"
                        ></path>
                        <path
                            id="Union_2"
                            fill="#9D8F8F"
                            d="M510.621 449.409h26.601l1.237 14.965h-27.838v-14.965zm48.02 88.031h-21.574v-13.204h21.574v13.204zm-20.878-36.092h20.878v-13.205h-20.878v13.205zm22.27-51.939h-18.79v12.324l18.79 1.761v-14.085zm68.202 70.425h17.399v-13.205h-17.399v13.205zm11.831-74.827l-18.094-.88v-11.444h16.169l1.925 12.324zm-15.311 23.769h16.703v13.205h-16.703v-13.205zm-68.898-24.649l21.575-1.553-.912-11.652h-20.663v13.205zm-50.803 78.348h20.878v-17.166h-10.091l-10.787 3.961v13.205zm25.054-75.707h-18.791v-12.189l9.709-3.657h9.082v15.846zm-20.878 22.008h19.486v13.205H509.23v-13.205zm41.756 51.058h-22.27v-13.205h20.92l1.35 13.205zm52.891-13.205h22.27l-1.349 13.205h-20.921v-13.205zm-1.392-24.648h20.879l-1.266-13.205h-19.613v13.205zm-16.702 55.459h-24.358v-14.965l24.358.88v14.085zm-24.358-36.092h23.662v-14.085l-23.662-.881v14.966zm27.142 36.092h19.486v-11.444h-19.486v11.444zm18.094-36.092h-19.486v-11.445l7.655-3.081h11.831v14.526zm-21.574-51.939h18.094v11.444l-18.094 4.402v-15.846zm-2.784 70.425l17.399 1.761V508.39l-17.399-1.761v13.205zm14.615-73.946l-15.311-1.554v-11.651h15.311v13.205zm-15.311 22.888l16.703-1.761v17.166l-8.351-3.081-8.352.881v-13.205zm66.81 68.664h-16.006v-13.644l16.006 2.2v11.444zm-18.094-36.092h15.311v-11.445l-7.656-2.64h-7.655v14.085zm10.439-51.939h-16.007v11.444h14.94l1.067-11.444z"
                        ></path>
                        <path
                            id="Union_3"
                            fill="#847C7C"
                            d="M558.641 537.44h-21.574v-13.204h21.574v13.204zm1.392-88.031h-18.79v12.324l18.79 1.761v-14.085zm68.202 70.425h17.399v-13.205h-17.399v13.205zm11.831-74.827l-18.094-.88v-11.444h16.169l1.925 12.324zm-15.311 23.769h16.703v13.205h-16.703v-13.205zm-119.701 53.699h20.878v-17.166h-10.091l-10.787 3.961v13.205zm25.054-75.707h-18.791v-12.189l9.709-3.657h9.082v15.846zm-20.878 22.008h19.486v13.205H509.23v-13.205zm52.195 32.572h23.662v-14.085l-23.662-.881v14.966zm27.142 36.092h19.486v-11.444h-19.486v11.444zm-3.48-88.031h18.094v11.444l-18.094 4.402v-15.846zm-2.784 70.425l17.399 1.761V508.39l-17.399-1.761v13.205zm14.615-73.946l-15.311-1.554v-11.651h15.311v13.205zm51.499 91.552h-16.006v-13.644l16.006 2.2v11.444z"
                        ></path>
                        </g>
                        <path
                        id="column"
                        fill="#DAE0EB"
                        d="M736.885 10.312h-80.274v8.467h6.69v8.466h6.689V535.22h-6.689v8.466h-6.69v8.466h80.274v-8.466h-6.689v-8.466h-6.69V27.245h6.69v-8.466h6.689v-8.467z"
                        ></path>
                    </g>
                    <path
                        id="Subtract"
                        fill="#CCA6A6"
                        fillRule="evenodd"
                        d="M-9.81-17H838.5v625.452H-9.81V-17zm169.337 150.218h125.636v264.93H159.527v-264.93zm524.396-8.194H514.587v415.148h169.336V125.024z"
                        clipRule="evenodd"
                    ></path>
                    <g id="window-int" fillRule="evenodd" clipRule="evenodd">
                        <path
                        id="Union_4"
                        fill="#0A245A"
                        d="M145.87 119.562v292.242h152.95V119.562H145.87zm139.293 278.585V133.218H159.527v264.929h125.636z"
                        ></path>
                        <path
                        id="Subtract_2"
                        fill="#4A2B0A"
                        d="M159.527 133.218h125.636v264.93H159.527v-264.93zm8.193 16.387h35.506v54.625H167.72v-54.625zm35.506 122.906H167.72v54.624h35.506v-54.624zm-35.506-65.55h35.506v54.625H167.72v-54.625zm35.506 122.906H167.72v54.624h35.506v-54.624zm2.732-180.262h35.506v54.625h-35.506v-54.625zm35.506 122.906h-35.506v54.624h35.506v-54.624zm-35.506-65.55h35.506v54.625h-35.506v-54.625zm35.506 122.906h-35.506v54.624h35.506v-54.624zm2.731-180.262h32.775v54.625h-32.775v-54.625zm32.775 122.906h-32.775v54.624h32.775v-54.624zm-32.775-65.55h32.775v54.625h-32.775v-54.625zm32.775 122.906h-32.775v54.624h32.775v-54.624z"
                        ></path>
                    </g>
                    <g id="floor">
                        <path
                        id="floor_2"
                        fill="#3D2104"
                        d="M-9.507 539.216h851.034v69.813H-9.507z"
                        ></path>
                        <g id="floor-boards" fill="#7D5740">
                        <path
                            id="Rectangle 618"
                            d="M26.071 539.216h9.962l-41.27 69.813h-4.27v-9.774l35.578-60.039z"
                        ></path>
                        <path
                            id="Rectangle 621"
                            fillRule="evenodd"
                            d="M24.648 539.216l-9.252-1.205L.182 564.5v16l24.466-41.284z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            id="Rectangle 622"
                            fillRule="evenodd"
                            d="M13.263 539.216H3.301L-9.507 560.83v16.903l22.77-38.517z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            id="Rectangle 623"
                            fillRule="evenodd"
                            d="M1.878 539.216h-9.962l-1.423 2.402v16.857l11.385-19.259z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            id="Rectangle 620"
                            d="M37.457 539.216h9.962L6.147 609.029h-9.961l41.27-69.813z"
                        ></path>
                        <path
                            id="Rectangle 624"
                            d="M48.842 539.216h9.962l-41.272 69.813H7.571l41.27-69.813z"
                        ></path>
                        <path
                            id="Rectangle 625"
                            d="M60.227 539.216h9.962l-41.271 69.813h-9.962l41.27-69.813z"
                        ></path>
                        <path
                            id="Rectangle 626"
                            d="M71.612 539.216h9.962l-41.271 69.813H30.34l41.27-69.813z"
                        ></path>
                        <path
                            id="Rectangle 627"
                            d="M82.997 539.216h9.962l-41.271 69.813h-9.962l41.27-69.813z"
                        ></path>
                        <path
                            id="Rectangle 628"
                            d="M94.382 539.216h9.962l-41.271 69.813H53.11l41.27-69.813z"
                        ></path>
                        <path
                            id="Rectangle 629"
                            d="M105.767 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 630"
                            d="M117.152 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 631"
                            d="M128.537 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 632"
                            d="M139.922 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 633"
                            d="M151.307 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 634"
                            d="M162.692 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 635"
                            d="M174.077 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 636"
                            d="M185.462 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 637"
                            d="M196.848 539.216h9.961l-41.271 69.813h-9.962l41.272-69.813z"
                        ></path>
                        <path
                            id="Rectangle 638"
                            d="M208.233 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 639"
                            d="M219.618 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 640"
                            d="M231.003 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 641"
                            d="M242.388 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 642"
                            d="M253.773 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 643"
                            d="M265.158 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 644"
                            d="M276.543 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 645"
                            d="M287.928 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 646"
                            d="M299.313 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 647"
                            d="M310.698 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 648"
                            d="M322.083 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 649"
                            d="M333.468 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 650"
                            d="M344.853 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 651"
                            d="M356.239 539.216h9.961l-41.271 69.813h-9.962l41.272-69.813z"
                        ></path>
                        <path
                            id="Rectangle 652"
                            d="M367.624 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 653"
                            d="M379.009 539.216h9.962L347.7 609.029h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 654"
                            d="M390.394 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 655"
                            d="M401.779 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 656"
                            d="M413.164 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 657"
                            d="M424.549 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 658"
                            d="M435.934 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 659"
                            d="M447.319 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 660"
                            d="M458.704 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 661"
                            d="M470.089 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 662"
                            d="M481.474 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 663"
                            d="M492.859 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 664"
                            d="M504.244 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 665"
                            d="M515.629 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 666"
                            d="M527.014 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 667"
                            d="M538.4 539.216h9.961l-41.271 69.813h-9.962l41.272-69.813z"
                        ></path>
                        <path
                            id="Rectangle 668"
                            d="M549.785 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 669"
                            d="M561.17 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 670"
                            d="M572.555 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 671"
                            d="M583.94 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 672"
                            d="M595.325 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 673"
                            d="M606.71 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 674"
                            d="M618.095 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 675"
                            d="M629.48 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 676"
                            d="M640.865 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 677"
                            d="M652.25 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 678"
                            d="M663.635 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 679"
                            d="M675.02 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 680"
                            d="M686.406 539.216h9.961l-41.271 69.813h-9.962l41.272-69.813z"
                        ></path>
                        <path
                            id="Rectangle 681"
                            d="M697.791 539.216h9.961l-41.271 69.813h-9.962l41.272-69.813z"
                        ></path>
                        <path
                            id="Rectangle 682"
                            d="M709.176 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 683"
                            d="M720.561 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 684"
                            d="M731.946 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 685"
                            d="M743.331 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 686"
                            d="M754.716 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 687"
                            d="M766.101 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 688"
                            d="M777.486 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 689"
                            d="M788.871 539.216h9.962l-41.271 69.813H747.6l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 690"
                            d="M800.256 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 691"
                            d="M811.641 539.216h9.962l-41.271 69.813h-9.962l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 692"
                            d="M823.027 539.216h9.961l-41.271 69.813h-9.961l41.271-69.813z"
                        ></path>
                        <path
                            id="Rectangle 693"
                            fillRule="evenodd"
                            d="M841.527 539.216h-7.116l-41.271 69.813h9.962l38.425-64.998v-4.815z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            id="Rectangle 694"
                            fillRule="evenodd"
                            d="M814.488 609.029l27.039-45.739v-16.933l-37.001 62.672h9.962z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            id="Rectangle 695"
                            fillRule="evenodd"
                            d="M825.872 609.029l15.655-26.481v-16.851l-25.617 43.332h9.962z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            id="Rectangle 696"
                            fillRule="evenodd"
                            d="M837.258 609.029l4.269-7.222v-16.851l-14.231 24.073h9.962z"
                            clipRule="evenodd"
                        ></path>
                        </g>
                    </g>
                    <g id="door">
                        <path
                        id="door_2"
                        fill="#9F703E"
                        fillRule="evenodd"
                        d="M514.587 125.024h169.336v415.148H514.587V125.024zm23.158 46.497h39.699v46.496h-39.699v-46.496zm39.699 49.817h-39.699v46.497h39.699v-46.497zm3.308-49.817h39.699v46.496h-39.699v-46.496zm39.699 49.817h-39.699v46.497h39.699v-46.497zm3.308-49.817h39.699v46.496h-39.699v-46.496zm39.699 49.817h-39.699v46.497h39.699v-46.497z"
                        clipRule="evenodd"
                        ></path>
                        <g id="door-handle">
                        <ellipse
                            id="Ellipse 25"
                            cx="530.5"
                            cy="347.5"
                            fill="url(#paint2_radial)"
                            rx="12.5"
                            ry="9.5"
                        ></ellipse>
                        <g id="Ellipse 26" fill="#A5A3A3">
                            <path d="M525.548 347.625c0 1.449-1.242 2.624-2.774 2.624S520 349.074 520 347.625c0-1.45 1.242-2.625 2.774-2.625.93 0 1.753.433 2.257 1.098.325.43.517.957.517 1.527z"></path>
                            <path d="M525.548 347.625c0 1.449-1.242 2.624-2.774 2.624 5.251 1.05 14.241 1.313 17.015-1.312 2.829-2.677 0-2.839-1.387-2.839-2.219 0-2.774 1.527-6.935 1.527-2.774 0-4.672-.983-6.436-1.527.325.43.517.957.517 1.527z"></path>
                        </g>
                        <g id="Ellipse 27" fill="#B5B3B3">
                            <path d="M526.491 347.75c0 .966-1.005 1.75-2.246 1.75-1.24 0-2.245-.784-2.245-1.75 0-.967.76-1.75 2-1.75h1c.263.287 1.491 1.37 1.491 1.75z"></path>
                            <path d="M526.491 347.75c0 .966-1.005 1.75-2.246 1.75 4.251.699 11.529.874 13.774-.875 2.29-1.785 0-1.893-1.122-1.893-1.797 0-2.529.768-5.897.768-2.246 0-4.572-1.137-6-1.5.263.287 1.491 1.37 1.491 1.75z"></path>
                        </g>
                        <g id="lock">
                            <rect
                            id="Rectangle 6"
                            width="15.696"
                            height="31"
                            fill="#D4D5D7"
                            rx="2"
                            transform="matrix(-1 0 0 1 535.696 302)"
                            ></rect>
                            <path
                            id="Subtract_3"
                            fill="url(#paint3_linear)"
                            fillRule="evenodd"
                            d="M533.696 302a2 2 0 012 2v27a2 2 0 01-2 2H522a2 2 0 01-2-2v-27a2 2 0 012-2h11.696zm-4.392.785a6 6 0 016 6v17.43a6 6 0 01-6 6h-2.912a6 6 0 01-6-6v-17.43a6 6 0 016-6h2.912z"
                            clipRule="evenodd"
                            ></path>
                            <path
                            id="lock 2"
                            fill="url(#pattern0)"
                            d="M524.316 306.709h7.063v1.962h-7.063z"
                            ></path>
                            <g id="Subtract_4">
                            <path
                                fill="url(#paint4_linear)"
                                d="M535.696 304.375h-.526a2.36 2.36 0 00-2.184-1.59h2.111c.372.422.599.979.599 1.59z"
                            ></path>
                            <path
                                fill="url(#paint5_linear)"
                                d="M535.696 304.375v26.642h-.526c.087-.249.134-.516.134-.795v-25.051a2.41 2.41 0 00-.134-.796h.526z"
                            ></path>
                            <path
                                fill="url(#paint6_linear)"
                                d="M522.747 302.785a2.36 2.36 0 00-2.221 1.59H520c0-.611.227-1.168.599-1.59h2.148z"
                            ></path>
                            <path
                                fill="url(#paint7_linear)"
                                d="M520 331.017v-26.642h.526a2.435 2.435 0 00-.134.796v25.051c0 .279.048.546.134.795H520z"
                            ></path>
                            <path
                                fill="url(#paint8_linear)"
                                d="M520.526 331.017s-.371 1.011.574 1.085h-.708s-.392-.515-.392-1.085h.526z"
                            ></path>
                            <path
                                fill="url(#paint9_linear)"
                                d="M535.17 331.017h.526c0 .57-.197.773-.526 1.183v-1.183z"
                            ></path>
                            </g>
                            <circle
                            id="Ellipse 26_2"
                            r="6.475"
                            fill="#424242"
                            transform="matrix(-1 0 0 1 528.044 324.171)"
                            ></circle>
                            <circle
                            id="Ellipse 25_2"
                            r="6.082"
                            fill="#D4D5D7"
                            transform="matrix(-1 0 0 1 528.044 324.171)"
                            ></circle>
                            <circle
                            id="Ellipse 27_2"
                            r="0.196"
                            fill="#7FFF00"
                            transform="matrix(-1 0 0 1 528.044 303.766)"
                            ></circle>
                            <g id="Rectangle 14" filter="url(#filter0_dd)">
                            <rect
                                width="10.595"
                                height="1.57"
                                fill="#D4D5D7"
                                rx="0.785"
                                transform="matrix(-1 0 0 1 533.342 323.582)"
                            ></rect>
                            </g>
                        </g>
                        </g>
                    </g>
                    <path
                        id="trim"
                        fill="#0A245A"
                        d="M697.58 540.172h-13.656V125.024H514.587v415.148h-13.656V111.368H697.58v428.804z"
                    ></path>
                    <g id="table">
                        <path
                        id="table-leg"
                        fill="#673F3F"
                        d="M37.987 444.578h5.462s1.366 21.85 1.366 27.313c0 9.559-1.366 15.022-1.366 23.215-.744 35.016 0 66.915 0 66.915h-4.097s-.26-33.014-1.365-66.915c0-9.559-1.366-12.29-1.366-23.215 0-6.828 1.366-27.313 1.366-27.313z"
                        ></path>
                        <path
                        id="table-leg_2"
                        fill="#673F3F"
                        d="M24.33 425.46h5.463s1.366 21.85 1.366 27.312c0 9.559-1.366 15.022-1.366 23.216-.744 35.015 0 66.915 0 66.915h-4.097s-.261-33.015-1.365-66.915c0-9.56-1.366-12.291-1.366-23.216 0-6.828 1.366-27.312 1.366-27.312z"
                        ></path>
                        <path
                        id="table-leg_3"
                        fill="#673F3F"
                        d="M313.841 444.578h5.463s1.365 21.85 1.365 27.313c0 9.559-1.365 15.022-1.365 23.215-.745 35.016 0 66.915 0 66.915h-4.097s-.261-33.014-1.366-66.915c0-9.559-1.365-12.29-1.365-23.215 0-6.828 1.365-27.313 1.365-27.313z"
                        ></path>
                        <path
                        id="table-leg_4"
                        fill="#673F3F"
                        d="M300.185 425.46h5.463s1.365 21.85 1.365 27.312c0 9.559-1.365 15.022-1.365 23.216-.745 35.015 0 66.915 0 66.915h-4.097s-.261-33.015-1.366-66.915c0-9.56-1.365-12.291-1.365-23.216 0-6.828 1.365-27.312 1.365-27.312z"
                        ></path>
                        <path
                        id="Rectangle 617"
                        fill="#673F3F"
                        d="M22.965 414.535l13.656 19.118v10.925L22.965 425.46v-10.925z"
                        ></path>
                        <path
                        id="Rectangle 615"
                        fill="#724747"
                        d="M22.965 414.535h284.048l13.656 19.118H36.621l-13.656-19.118z"
                        ></path>
                        <path
                        id="Rectangle 616"
                        fill="#673F3F"
                        d="M36.621 433.653H320.67v10.925H36.621v-10.925z"
                        ></path>
                        <g id="package-table">
                        <g id="Union_5" fill="#BD7B3D">
                            <path d="M175.577 357.56h54.731l-8.169 8.577H167l8.577-8.577z"></path>
                            <path
                            fillRule="evenodd"
                            d="M230.308 417.6v-60.04l-8.169 8.577v61.266l8.169-9.803z"
                            clipRule="evenodd"
                            ></path>
                            <path d="M222.139 427.403H167v-61.266h55.139v61.266z"></path>
                        </g>
                        <g id="Union_6" fill="#A26934">
                            <path d="M175.577 357.56h54.731l-8.169 8.577H167l8.577-8.577z"></path>
                            <path
                            fillRule="evenodd"
                            d="M230.308 417.6v-60.04l-8.169 8.577v61.266l8.169-9.803z"
                            clipRule="evenodd"
                            ></path>
                        </g>
                        <path
                            id="top-closed"
                            fill="#B07338"
                            d="M175.577 357.56h54.731l-8.169 8.577H167l8.577-8.577z"
                        ></path>
                        <g id="tape">
                            <path
                            id="Rectangle 529"
                            fill="#C4C4C4"
                            d="M204.577 357.56h-6.74l-6.739 8.577h6.739l6.74-8.577z"
                            ></path>
                            <path
                            id="Rectangle 530"
                            fill="#7D7272"
                            d="M201.514 357.56h-1.226l-6.271 8.577h1.37l6.127-8.577z"
                            ></path>
                        </g>
                        <g id="box-open">
                            <g id="flaps" fill="#B07338">
                            <path
                                fillRule="evenodd"
                                d="M176 357.5l-12-9.5-11 9.5 14 9 9-9zm46.5 9H233l9-15-12 6-7.5 9z"
                                clipRule="evenodd"
                            ></path>
                            <path d="M176 357.5l-9 9h55.5l7.5-9h-54z"></path>
                            </g>
                            <path
                            id="opening"
                            fill="#8A5A2B"
                            d="M176 357.5l-9 9h55.5l7.5-9h-54z"
                            ></path>
                        </g>
                        </g>
                    </g>
                    </g>
                    <g id="chair-front">
                    <path
                        id="Vector 8"
                        fill="#57595A"
                        d="M310.552 480.803v55.985h8.519v-55.985h-8.519z"
                    ></path>
                    <path
                        id="Union_7"
                        fill="#000"
                        fillRule="evenodd"
                        d="M240.878 441.639a2 2 0 011.282-2.521l.72-.235a2 2 0 012.522 1.281l5.55 17.026a2 2 0 01-1.282 2.521l-.72.235a1.991 1.991 0 01-1.245-.002c.137.827.252 1.636.35 2.428.222 1.791.36 3.496.489 5.089.035.431.069.853.104 1.267.165 1.954.348 3.711.701 5.271.352 1.557.868 2.894 1.684 4.014.812 1.115 1.939 2.041 3.554 2.751 1.073.471 2.359.847 3.906 1.116a2.007 2.007 0 01-.049-.441v-.758a2 2 0 012-2h17.908a2 2 0 012 2v.758a2 2 0 01-2 2h-17.908c-.471 0-.905-.163-1.247-.437-2.008-.283-3.656-.727-5.012-1.323-1.761-.774-3.035-1.806-3.96-3.077-.922-1.267-1.481-2.744-1.851-4.382-.37-1.635-.557-3.453-.723-5.408l-.105-1.281c-.129-1.591-.264-3.268-.483-5.036a54.514 54.514 0 00-.577-3.676 1.904 1.904 0 01-.058-.155l-3.16-9.694a38.387 38.387 0 00-.706-1.403l.212-.112-1.896-5.816z"
                        clipRule="evenodd"
                    ></path>
                    <g id="Union_8" fill="#262A2E">
                        <path d="M256.078 461.827c9.993-1.679 6.285-28.684.713-61.827-1.474-8.769-2.218-17.209-2.889-24.817-1.864-21.149-3.162-35.873-18.002-33.378-14.84 2.495-11.251 16.834-6.098 37.43 1.854 7.409 3.911 15.628 5.385 24.397 5.572 33.144 10.899 59.875 20.891 58.195z"></path>
                        <path d="M378.708 472.284c0 12.825-15.203 12.302-39.819 11.455-6.919-.238-14.583-.502-22.861-.502-20.69 0-62.679 0-62.679-10.953 0-13.851 16.154-12.99 39.069-11.768 7.287.389 15.258.814 23.61.814 7.423 0 14.544-.252 21.152-.485 24.209-.856 41.528-1.469 41.528 11.439zm-57.203 62.776l-1.217 18.256h-10.953l-1.826-18.256c-2.982.092-6.424.223-9.117.391-7.851 8.094-7.408 17.145-6.705 20.3-3.043-1.826-5.477-1.826-8.519 0 0-7.808 3.563-15.502 7.252-19.663a162.62 162.62 0 00-10.415 1.352c-2.746 1.718-2.923 4.923-2.923 6.14-1.217-1.217-3.651-1.826-6.085 0 .047-1.236.921-3.587 1.37-4.626-18.307 4.32-23.365 12.896-22.669 16.797-2.434-2.435-6.694-2.435-9.737 0-1.149-15.704 27.472-24.218 50.177-26.455 3.964-.391 7.785-.646 11.286-.789 1.933-.08 3.768-.125 5.476-.14h14.605c4.802.043 10.61.322 16.763.929 22.705 2.237 51.393 10.633 51.393 27.063-3.651-2.434-5.477-3.043-9.736 0 0-7.302-5.579-13.085-23.886-17.405.449 1.039 1.322 3.39 1.37 4.626-1.826-1.217-3.651-1.826-6.085 0 0-1.217-.177-4.422-2.923-6.14a162.609 162.609 0 00-10.28-1.339c3.369 5.863 5.9 14.781 5.9 19.65-3.043-1.826-5.477-1.826-9.128 0 0 0 2.434-10.954-3.091-20.183a265.95 265.95 0 00-10.297-.508zm-76.675 29.819a3.652 3.652 0 10-.001-7.303 3.652 3.652 0 00.001 7.303z"></path>
                        <path
                        fillRule="evenodd"
                        d="M244.83 567.313a6.085 6.085 0 100-12.17 6.085 6.085 0 000 12.17zm4.868-6.086a4.868 4.868 0 11-9.736.002 4.868 4.868 0 019.736-.002z"
                        clipRule="evenodd"
                        ></path>
                        <path d="M291.078 561.227a3.651 3.651 0 11-7.302.002 3.651 3.651 0 017.302-.002z"></path>
                        <path
                        fillRule="evenodd"
                        d="M293.513 561.227a6.086 6.086 0 11-12.173 0 6.086 6.086 0 0112.173 0zm-6.086 4.869a4.87 4.87 0 100-9.738 4.87 4.87 0 000 9.738z"
                        clipRule="evenodd"
                        ></path>
                        <path d="M339.761 564.879a3.651 3.651 0 100-7.302 3.651 3.651 0 000 7.302z"></path>
                        <path
                        fillRule="evenodd"
                        d="M339.761 567.313a6.086 6.086 0 100-12.173 6.086 6.086 0 000 12.173zm4.869-6.086a4.87 4.87 0 11-9.738 0 4.87 4.87 0 019.738 0z"
                        clipRule="evenodd"
                        ></path>
                        <path d="M357.287 547.84a2.921 2.921 0 11-5.843 0 2.921 2.921 0 015.843 0z"></path>
                        <path
                        fillRule="evenodd"
                        d="M359.234 547.84a4.868 4.868 0 11-9.736 0 4.868 4.868 0 019.736 0zm-4.868 3.894a3.894 3.894 0 10.001-7.789 3.894 3.894 0 00-.001 7.789z"
                        clipRule="evenodd"
                        ></path>
                        <path d="M274.039 550.761a2.92 2.92 0 100-5.841 2.92 2.92 0 000 5.841z"></path>
                        <path
                        fillRule="evenodd"
                        d="M274.04 552.708a4.869 4.869 0 10-.001-9.737 4.869 4.869 0 00.001 9.737zm3.894-4.868a3.894 3.894 0 11-7.788 0 3.894 3.894 0 017.788 0z"
                        clipRule="evenodd"
                        ></path>
                        <path d="M388.444 561.227a3.652 3.652 0 11-7.303 0 3.652 3.652 0 017.303 0z"></path>
                        <path
                        fillRule="evenodd"
                        d="M390.878 561.227a6.085 6.085 0 11-12.17.001 6.085 6.085 0 0112.17-.001zm-6.085 4.869a4.868 4.868 0 100-9.736 4.868 4.868 0 000 9.736z"
                        clipRule="evenodd"
                        ></path>
                    </g>
                    </g>
                    <g id="guy4">
                    <g id="leg-right-4">
                        <g id="Rectangle 69" fill="#DDAA6F">
                        <path d="M417.639 488.986s1.318-7.334 4.692-17.413c3.283-9.808 8.288-21.234 13.797-23.915 5.738-2.792 7.28 3.287 7.28 3.287l-10.44 44.208a.828.828 0 01-.366.526c-.954.602-4.153 2.224-7.732-.354-5.975-4.306-7.231-6.339-7.231-6.339z"></path>
                        <path d="M417.639 488.986s1.318-7.334 4.692-17.413l-3 .449-3.885 16.446 2.193.518z"></path>
                        </g>
                        <path
                        id="Rectangle 66"
                        fill="#22189F"
                        d="M289.822 460.636l6.819-27.327 124.088 37.845-4.649 18.632-126.258-29.15z"
                        ></path>
                    </g>
                    <g id="leg-left-3">
                        <g id="Rectangle 67" fill="#CAA172">
                        <path d="M412.256 505.849s2.314-7.083 7.043-16.602c4.601-9.263 11.131-19.892 16.956-21.789 6.068-1.976 6.759 4.258 6.759 4.258l-16.424 42.351a.826.826 0 01-.434.47c-1.028.465-4.42 1.631-7.609-1.415-5.326-5.086-6.291-7.273-6.291-7.273z"></path>
                        <path d="M412.256 505.849s2.314-7.083 7.043-16.602l-3.034.032-6.11 15.756 2.101.814z"></path>
                        </g>
                        <path
                        id="Rectangle 63"
                        fill="#160C8E"
                        d="M289.995 459.049l10.65-26.074 117.415 55.168-7.261 17.778-120.804-46.872z"
                        ></path>
                    </g>
                    <g id="body-int-upper">
                        <g id="arm-int-right">
                        <path
                            id="Rectangle 71"
                            fill="#F0E262"
                            d="M319.061 374.883l6.371-14.538L301.01 345.3c-15.245-7.248-19.299 15.551-8.734 17.889l26.785 11.694z"
                        ></path>
                        <g id="Rectangle 70" fill="#E99C7D">
                            <path d="M312.745 370.166l4.772-14.538 51.284 33.804-2.472 12.064-53.584-31.33z"></path>
                            <path d="M312.745 370.166l4.772-14.538-18.291-15.046c-11.418-7.248-14.454 15.551-6.541 17.889l20.06 11.695z"></path>
                        </g>
                        <path
                            id="Ellipse 9"
                            fill="#E99C7D"
                            d="M378.448 391.692c3.256 3.529 4.155 6.632 1.203 11.486-2.952 4.855-9.67 3.279-12.926-.25-3.256-3.53-3.611-7.468-.659-12.323s2.293 2.485 12.382 1.087z"
                        ></path>
                        <g id="base">
                            <g id="base-antena">
                            <path
                                id="Vector 35"
                                fill="#D9DADE"
                                d="M404.99 361.467l-22.878 33.1-3.106-2.287c-.874.85-2.378 1.795-1.403-1.219l24.209-32.12 2.095 1.294 1.083 1.232z"
                            ></path>
                            <g id="Vector 36" fill="#9A9B9F">
                                <path d="M379.006 392.28l23.636-32.355-.83-.984-24.209 32.12c-1.811 2.46.453 2.51 1.403 1.219z"></path>
                                <path d="M402.642 359.925l2.348 1.542-1.083-1.232-2.095-1.294.83.984z"></path>
                            </g>
                            <ellipse
                                id="Ellipse 27_3"
                                cx="378.448"
                                cy="391.434"
                                fill="#A2A3A7"
                                rx="0.601"
                                ry="1.553"
                                transform="rotate(36.363 378.448 391.434)"
                            ></ellipse>
                            </g>
                            <path
                            id="Vector 38"
                            fill="#D4D5D9"
                            d="M362.061 382.603c.129.613.696 1.47 1.934-.007.032.024 3.121-4.212 4.662-6.332l3.271 1.724.386-.524 10.726 6.466 1.248 1.852 3.343 1.964 5.449 7.806-7.395 10.043-.864-.515-18.148-10.747-.921 1.25-5.516-8.726.795-1.081-.603-.955 1.633-2.218z"
                            ></path>
                            <g id="Vector 39" fill="#BDBEC2">
                            <path d="M368.657 376.264l5.115 7.498 19.308 11.79-5.449-7.806-3.343-1.964-1.248-1.852-10.726-6.466-.386.524-3.271-1.724z"></path>
                            <path
                                fillRule="evenodd"
                                d="M362.061 382.603c.129.613.696 1.47 1.934-.007.032.024 3.121-4.212 4.662-6.332l5.115 7.498-7.543 10.244 18.592 11.074-18.148-10.747-.921 1.25-5.516-8.726.795-1.081-.603-.955 1.633-2.218z"
                                clipRule="evenodd"
                            ></path>
                            <path d="M366.673 394.333l-.921 1.25 18.147 10.749.922-1.252-18.148-10.747z"></path>
                            </g>
                            <g id="base-antena_2">
                            <path
                                id="Vector 35_2"
                                fill="#D9DADE"
                                d="M390.237 351.6l-22.878 33.1-3.106-2.287c-.874.849-2.378 1.794-1.403-1.219l24.209-32.12 2.095 1.294 1.083 1.232z"
                            ></path>
                            <g id="Vector 36_2" fill="#9A9B9F">
                                <path d="M364.253 382.413l23.636-32.355-.83-.984-24.209 32.12c-1.811 2.46.453 2.51 1.403 1.219z"></path>
                                <path d="M387.889 350.058l2.348 1.542-1.083-1.232-2.095-1.294.83.984z"></path>
                            </g>
                            <ellipse
                                id="Ellipse 27_4"
                                cx="363.695"
                                cy="381.567"
                                fill="#A2A3A7"
                                rx="0.601"
                                ry="1.553"
                                transform="rotate(36.363 363.695 381.567)"
                            ></ellipse>
                            </g>
                            <g id="Vector 41" fill="#BDBEC2">
                            <path d="M368.657 376.264l5.115 7.498 19.308 11.79-5.449-7.806-3.343-1.964-1.248-1.852-10.726-6.466-.386.524-3.271-1.724z"></path>
                            <path
                                fillRule="evenodd"
                                d="M362.061 382.603c.129.613.696 1.47 1.934-.007.032.024 3.121-4.212 4.662-6.332l5.115 7.498-7.543 10.244 18.592 11.074-18.148-10.747-.921 1.25-5.516-8.726.795-1.081-.603-.955 1.633-2.218z"
                                clipRule="evenodd"
                            ></path>
                            <path d="M366.673 394.333l-.921 1.25 18.147 10.749.922-1.252-18.148-10.747z"></path>
                            </g>
                            <path
                            id="Vector 62"
                            fill="#9799A1"
                            d="M365.844 384.541l-.351.424-.555-.979.351-.425.555.98z"
                            ></path>
                            <path
                            id="Vector 64"
                            fill="#9799A1"
                            d="M366.318 383.882l-.351.425-.555-.979.351-.425.555.979z"
                            ></path>
                            <path
                            id="Vector 66"
                            fill="#9799A1"
                            d="M366.792 383.224l-.351.424-.555-.979.351-.424.555.979z"
                            ></path>
                            <path
                            id="Vector 63"
                            fill="#61636C"
                            d="M365.78 384.618l-.223.27-.447-.764.206-.28.464.774z"
                            ></path>
                            <path
                            id="Vector 65"
                            fill="#61636C"
                            d="M366.254 383.959l-.223.271-.448-.764.207-.281.464.774z"
                            ></path>
                            <path
                            id="Vector 67"
                            fill="#61636C"
                            d="M366.728 383.301l-.223.27-.448-.764.207-.28.464.774z"
                            ></path>
                            <path
                            id="Vector 40"
                            fill="#929398"
                            fillRule="evenodd"
                            d="M384.821 405.08l-18.592-11.074-5.198-8.23-.795 1.081 5.516 8.726.921-1.25 18.148 10.747z"
                            clipRule="evenodd"
                            ></path>
                            <path
                            id="Rectangle 705"
                            fill="#DCDDE1"
                            d="M373.75 383.792l19.329 11.76-.148.201-19.365-11.658.184-.303z"
                            ></path>
                            <path
                            id="Rectangle 706"
                            fill="#DCDDE1"
                            d="M373.751 383.622l18.963 11.412.366.518-19.338-11.75.009-.18z"
                            ></path>
                            <path
                            id="Rectangle 707"
                            fill="#DCDDE1"
                            d="M368.601 376.316l5.262 7.473-.198.137-5.158-7.477.094-.133z"
                            ></path>
                            <path
                            id="Rectangle 708"
                            fill="#CACCD3"
                            d="M366.31 394.065l.403.297-.931 1.181-.274-.389.802-1.089z"
                            ></path>
                            <path
                            id="Rectangle 709"
                            fill="#61636C"
                            d="M381.812 387.878l-.311-.168.163.482.293.165-.145-.479z"
                            ></path>
                            <path
                            id="Vector 43"
                            fill="#9799A2"
                            d="M369.234 382.66l.327-.444 1.989 2.958-.356.484-1.96-2.998z"
                            ></path>
                            <path
                            id="Vector 50"
                            fill="#9799A2"
                            d="M368.759 383.305l.327-.444 1.989 2.958-.356.484-1.96-2.998z"
                            ></path>
                            <path
                            id="Vector 52"
                            fill="#9799A2"
                            d="M368.284 383.95l.327-.443 1.989 2.957-.356.484-1.96-2.998z"
                            ></path>
                            <path
                            id="Vector 54"
                            fill="#9799A2"
                            d="M367.809 384.596l.327-.444 1.989 2.958-.356.484-1.96-2.998z"
                            ></path>
                            <path
                            id="Vector 56"
                            fill="#9799A2"
                            d="M367.334 385.241l.326-.444 1.99 2.958-.357.484-1.959-2.998z"
                            ></path>
                            <path
                            id="Vector 58"
                            fill="#9799A2"
                            d="M366.858 385.886l.327-.443 1.99 2.957-.357.484-1.96-2.998z"
                            ></path>
                            <path
                            id="Vector 60"
                            fill="#9799A2"
                            d="M366.383 386.532l.327-.444 1.99 2.958-.357.484-1.96-2.998z"
                            ></path>
                            <path
                            id="Vector 49"
                            fill="#61636C"
                            d="M369.425 382.738l.138-.271 1.898 2.828-.178.242-1.858-2.799z"
                            ></path>
                            <path
                            id="Vector 51"
                            fill="#61636C"
                            d="M368.95 383.384l.138-.272 1.898 2.828-.178.242-1.858-2.798z"
                            ></path>
                            <path
                            id="Vector 53"
                            fill="#61636C"
                            d="M368.475 384.029l.138-.272 1.898 2.828-.178.242-1.858-2.798z"
                            ></path>
                            <path
                            id="Vector 55"
                            fill="#61636C"
                            d="M368 384.674l.138-.271 1.898 2.828-.178.242-1.858-2.799z"
                            ></path>
                            <path
                            id="Vector 57"
                            fill="#61636C"
                            d="M367.525 385.32l.138-.272 1.898 2.828-.178.242-1.858-2.798z"
                            ></path>
                            <path
                            id="Vector 59"
                            fill="#61636C"
                            d="M367.05 385.965l.137-.272 1.899 2.828-.178.242-1.858-2.798z"
                            ></path>
                            <path
                            id="Vector 61"
                            fill="#61636C"
                            d="M366.574 386.61l.138-.272 1.899 2.829-.179.242-1.858-2.799z"
                            ></path>
                        </g>
                        </g>
                        <g id="body-head-int">
                        <ellipse
                            id="Ellipse 7"
                            cx="304.905"
                            cy="286.532"
                            fill="#E99C7D"
                            rx="39.628"
                            ry="35.526"
                        ></ellipse>
                        <path
                            id="Rectangle 58"
                            fill="#E99C7D"
                            d="M291.505 310.78h23.903v18.045h-23.903z"
                        ></path>
                        <path
                            id="Vector 12"
                            fill="#300B0B"
                            d="M295.006 293.562c.976 6.696 1.196 16.922-12.632 22.361-4.682-1.595-7.549-3.456-9.149-6.071-16.632-27.197-7.231-51.373 8.046-53.605 24.54-23.531 51.618-7.541 59.316 6.293 7.698 13.833-27.903 18.562-41.931 16.812-10.36-1.292-2.189 11.147-3.65 14.21z"
                        ></path>
                        <path
                            id="Rectangle 54"
                            fill="#F0E262"
                            d="M281.366 336.107c0-14.262 43.938-14.18 43.938 0v102.115s-5.258 7.121-20.25 7.87c-18.749.938-19.64-7.87-19.64-7.87s-4.048-79.607-4.048-102.115z"
                        ></path>
                        </g>
                        <g id="arm-int-left">
                        <g id="Rectangle 56" fill="#E99C7D">
                            <path d="M327.039 372.883l6.628-14.422 67.862 35.016-3.514 12.003-70.976-32.597z"></path>
                            <path d="M327.039 372.883l6.628-14.422-24.15-15.477c-15.114-7.518-19.573 15.206-9.051 17.731l26.573 12.168z"></path>
                        </g>
                        <path
                            id="Rectangle 64"
                            fill="#F0E262"
                            d="M327.039 372.883l6.628-14.422-24.15-15.477c-15.114-7.518-19.573 15.206-9.051 17.731l26.573 12.168z"
                        ></path>
                        <path
                            id="Ellipse 8"
                            fill="#E99C7D"
                            d="M414.367 395.965c4.284 3.606 5.43 6.729 1.403 11.513-4.027 4.784-12.968 3.049-17.252-.557-4.284-3.606-4.687-7.552-.66-12.336 4.027-4.784 3.016 2.539 16.509 1.38z"
                        ></path>
                        <g id="wyze-outdoor-cam">
                            <g id="wyze-outdoor-cam_2">
                            <path
                                id="Vector 69"
                                fill="#ABACB0"
                                fillRule="evenodd"
                                d="M403.662 365.967l-13.376 27.065 11.06 11.221 13.875-28.074-11.559-10.212z"
                                clipRule="evenodd"
                            ></path>
                            <path
                                id="Vector 72"
                                fill="#E0E0E0"
                                d="M415.088 376.047l.133.132-13.875 28.074-.133-.132 13.875-28.074z"
                            ></path>
                            <g id="Vector 71" fill="#D8D9DD">
                                <path d="M415.221 376.179l24.74 9.779-12.41-10.632-23.889-9.359 11.237 9.927.322.285z"></path>
                                <path d="M415.221 376.179l-13.875 28.074 25.055 9.141 13.56-27.436-24.74-9.779z"></path>
                            </g>
                            <path
                                id="Vector 70"
                                fill="#CFD0D4"
                                d="M415.221 376.179l24.74 9.779-12.41-10.632-23.889-9.359 11.237 9.927.322.285z"
                            ></path>
                            <path
                                id="Vector 73"
                                fill="#E8E9EF"
                                d="M415.442 376.266l-.221-.087-13.875 28.074.224.082 13.872-28.069z"
                            ></path>
                            <ellipse
                                id="Ellipse 28"
                                cx="420.872"
                                cy="395.009"
                                fill="url(#paint10_linear)"
                                rx="11.883"
                                ry="13.938"
                                transform="rotate(36.005 420.872 395.009)"
                            ></ellipse>
                            <path
                                id="Ellipse 37"
                                fill="url(#paint11_linear)"
                                stroke="#000"
                                strokeWidth="0.05"
                                d="M430.412 401.954c-4.52 6.219-12.477 8.132-17.771 4.284-4.91-3.568-5.816-10.842-2.318-16.84l8.745 3.597c.188 3.269 4.498 5.131 7.151 2.737l6.392 2.37c-.495 1.325-1.309 2.627-2.199 3.852z"
                            ></path>
                            <path
                                id="Ellipse 38"
                                fill="#211E1E"
                                d="M427.133 393.842c-1.147 2.32-3.642 2.832-5.668 1.83-2.026-1.001-2.554-3.801-1.408-6.12 1.147-2.32 3.507-3.229 5.534-2.228 2.026 1.002 3.016 4.071 1.542 6.518z"
                            ></path>
                            <ellipse
                                id="Ellipse 33"
                                cx="423.594"
                                cy="391.365"
                                fill="#2F2F2F"
                                rx="3.381"
                                ry="3.855"
                                transform="rotate(26.3 423.594 391.365)"
                            ></ellipse>
                            <ellipse
                                id="Ellipse 34"
                                cx="423.594"
                                cy="391.365"
                                fill="#111010"
                                rx="2.313"
                                ry="2.669"
                                transform="rotate(26.3 423.594 391.365)"
                            ></ellipse>
                            <path
                                id="Ellipse 35"
                                fill="#1E1D1D"
                                d="M425.373 391.914c-.58 1.175-1.884 1.715-2.912 1.207s-1.231-1.793-.65-2.968c.605-.957 1.717-1.467 2.673-1.126 1.028.508 1.47 1.712.889 2.887z"
                            ></path>
                            <path
                                id="Ellipse 32"
                                fill="#F51BC5"
                                fillOpacity="0.13"
                                d="M425.124 389.74c-.58 1.175-2.054 3.086-2.054 3.086s-1.936.036-1.125-2.275c.434-1.237 2.113-2 3.179-.811z"
                            ></path>
                            <ellipse
                                id="Ellipse 36"
                                cx="425.895"
                                cy="385.228"
                                fill="#5D5E62"
                                rx="0.83"
                                ry="1.008"
                                transform="rotate(11.24 425.895 385.228)"
                            ></ellipse>
                            <path
                                id="Vector 74"
                                fill="#464646"
                                d="M425.284 395.575l-.427-.608c2.248-1.469 2.374-2.929 2.342-3.937.093-.128.421-.467.449-.506.568 2.332-1.384 4.808-2.364 5.051z"
                            ></path>
                            <ellipse
                                id="Ellipse 39"
                                cx="424.631"
                                cy="409.585"
                                fill="#535252"
                                rx="0.178"
                                ry="0.237"
                                transform="rotate(26.3 424.631 409.585)"
                            ></ellipse>
                            <path
                                id="Subtract_5"
                                fill="url(#paint12_linear)"
                                fillRule="evenodd"
                                d="M421.726 377.607c5.535 2.726 10.305 4.317 10.68 3.558.377-.763-3.84-3.617-9.42-6.375l-.159-.079c-5.512-2.709-10.253-4.288-10.626-3.531-.378.763 3.839 3.617 9.419 6.375l.106.052zm-.001-.265c-4.934-2.438-8.674-4.938-8.355-5.584.319-.646 4.578.807 9.511 3.245 4.934 2.438 8.674 4.938 8.355 5.584-.32.646-4.578-.806-9.511-3.245z"
                                clipRule="evenodd"
                            ></path>
                            </g>
                        </g>
                        </g>
                    </g>
                    <path
                        id="pelvis"
                        fill="#160C8E"
                        d="M285.304 436.914l39.994.008s1.126-1.951-3.94 17.551c-3.223 12.411-21.966 8.861-26.473 8.86-11.181-.002-9.581-26.419-9.581-26.419z"
                    ></path>
                    </g>
                    <path
                    id="wyze-logo"
                    fill="#F2F2F2"
                    d="M329.121 205h-20.422l65.351 105.449v78.464h20.422v-78.464L463.908 205h-22.465l-57.182 87.87-55.14-87.87zm-218.517 0h22.465l72.433 155.331L278.066 205h20.422l-85.63 188h-14.713l-31.446-67.762L135.253 393h-16.48L33 205h24.507l69.442 157.375 28.492-61.397L110.604 205zm524.85 163.478v20.435H474.119l13.741-20.435 109.149-143.043H480.245V205h159.293l-14.295 20.435-111.689 143.043h121.9zM807 205v20.435H647.707V205H807zm0 102.174v-20.435H647.707v20.435H807zm0 61.304v20.435H647.707v-20.435H807z"
                    ></path>
                    <g id="product-display" display="none">
                    <path
                        id="product-container"
                        fill="#F2F2F2"
                        d="M28 132h306v335H28z"
                    ></path>
                    <path id="Rectangle" fill="#333" d="M28 20h306v215H28z"></path>
                    <path id="Rectangle_2" fill="#333" d="M28 358h306v233H28z"></path>
                    <g id="product-card">
                        <g id="product-title" display="none">
                        <path
                            id="Wyze Cam Outdoor"
                            fill="#000"
                            d="M124.331 271.871h-1.064l-1.085-4.9h1.043l.665 3.325.959-3.325h.952l.952 3.311.665-3.311h1.008l-1.085 4.9h-1.064l-.973-3.423-.973 3.423zm5.508.168l.056-.133-1.421-3.682h1.057l.903 2.485 1.036-2.485h1.036l-1.68 3.934c-.187.439-.404.752-.651.938-.248.187-.57.28-.966.28-.084 0-.166-.004-.245-.014a.784.784 0 01-.182-.028v-.826c.046.01.095.017.147.021.051.005.114.007.189.007a.726.726 0 00.434-.126.836.836 0 00.287-.371zm2.912-.168v-.679l1.834-2.163h-1.82v-.805h3.052v.679l-1.848 2.163h1.89v.805h-3.108zm6.841-.455a2.334 2.334 0 01-.693.399 2.299 2.299 0 01-.784.126 2.015 2.015 0 01-1.4-.546 1.929 1.929 0 01-.413-.595 1.913 1.913 0 01-.147-.749 1.862 1.862 0 011.876-1.89c.257 0 .495.052.714.154.224.098.416.234.574.406.164.173.29.381.378.623.094.238.14.497.14.777v.252h-2.716c.066.229.192.413.378.553.187.14.406.21.658.21.159 0 .308-.025.448-.077.14-.051.259-.123.357-.217l.63.574zm-1.582-2.464a.848.848 0 00-.567.203 1.016 1.016 0 00-.329.532h1.785a1.023 1.023 0 00-.336-.525.809.809 0 00-.553-.21zm6.336 2.051c.257 0 .497-.053.721-.161.224-.107.422-.261.595-.462l.665.658a2.473 2.473 0 01-.896.658 2.65 2.65 0 01-1.113.245c-.369 0-.714-.065-1.036-.196a2.607 2.607 0 01-.826-.532 2.471 2.471 0 01-.553-.798 2.511 2.511 0 01-.196-.994c0-.354.068-.686.203-.994.135-.312.32-.581.553-.805.233-.224.509-.401.826-.532.322-.13.665-.196 1.029-.196.392 0 .772.084 1.141.252.369.164.667.385.896.665l-.686.679a1.76 1.76 0 00-.609-.49 1.646 1.646 0 00-1.365-.049c-.191.08-.357.192-.497.336-.14.14-.25.308-.329.504a1.64 1.64 0 00-.119.63c0 .224.04.434.119.63.084.192.196.357.336.497.145.14.313.252.504.336.196.08.408.119.637.119zm3.666.931c-.392 0-.711-.102-.959-.308a1.016 1.016 0 01-.371-.812c0-.345.133-.616.399-.812.266-.196.633-.294 1.099-.294a2.93 2.93 0 01.889.14v-.259c0-.21-.065-.368-.196-.476-.13-.107-.322-.161-.574-.161a1.88 1.88 0 00-.504.077 4.15 4.15 0 00-.609.224l-.35-.707c.285-.13.56-.228.826-.294.271-.065.537-.098.798-.098.49 0 .871.119 1.141.357.276.234.413.565.413.994v2.366h-.945v-.252a1.671 1.671 0 01-.49.238 1.916 1.916 0 01-.567.077zm-.413-1.141c0 .14.061.252.182.336.122.08.283.119.483.119.159 0 .304-.018.434-.056.136-.042.259-.1.371-.175v-.546a1.645 1.645 0 00-.371-.098 2.22 2.22 0 00-.399-.035c-.219 0-.392.042-.518.126a.375.375 0 00-.182.329zm3.141 1.078v-3.647h.959v.273a1.457 1.457 0 01.952-.343c.234 0 .444.049.63.147.192.094.348.227.469.399.145-.177.32-.312.525-.406a1.63 1.63 0 01.679-.14c.406 0 .74.136 1.001.406.262.271.392.619.392 1.043v2.268h-.959v-2.128c0-.228-.063-.413-.189-.553a.623.623 0 00-.497-.21.836.836 0 00-.399.098.873.873 0 00-.301.266l.014.126c.005.042.007.087.007.133v2.268h-.959v-2.128c0-.228-.063-.413-.189-.553a.623.623 0 00-.497-.21.852.852 0 00-.385.084.865.865 0 00-.294.245v2.562h-.959zm12.813-2.45c0 .35-.067.682-.203.994a2.51 2.51 0 01-1.372 1.337 2.65 2.65 0 01-1.022.196c-.359 0-.697-.065-1.015-.196a2.618 2.618 0 01-.826-.532 2.628 2.628 0 01-.546-.805 2.479 2.479 0 01-.203-.994 2.535 2.535 0 01.749-1.792c.234-.228.509-.408.826-.539.318-.13.656-.196 1.015-.196.364 0 .705.066 1.022.196.318.131.591.311.819.539.234.224.418.493.553.805.136.308.203.637.203.987zm-1.043 0c0-.228-.039-.438-.119-.63a1.493 1.493 0 00-.329-.504 1.4 1.4 0 00-.49-.336 1.512 1.512 0 00-.616-.126c-.219 0-.424.042-.616.126-.186.08-.35.192-.49.336a1.64 1.64 0 00-.441 1.134 1.67 1.67 0 00.441 1.141c.14.14.304.252.49.336.192.08.397.119.616.119.22 0 .425-.039.616-.119a1.515 1.515 0 00.819-.847 1.65 1.65 0 00.119-.63zm2.608-1.197v2.121c0 .234.067.42.203.56.14.14.324.21.553.21.163 0 .308-.03.434-.091a.869.869 0 00.322-.273v-2.527h.959v3.647h-.959v-.294a1.62 1.62 0 01-.469.273c-.173.061-.36.091-.56.091-.42 0-.766-.135-1.036-.406-.271-.275-.406-.625-.406-1.05v-2.261h.959zm3.715 2.618v-1.813h-.749v-.805h.749v-.931l.959-.217v1.148h1.036v.805h-1.036v1.617c0 .173.037.294.112.364.075.07.205.105.392.105.089 0 .173-.004.252-.014.079-.014.166-.037.259-.07v.784a2.054 2.054 0 01-.371.077 2.306 2.306 0 01-.371.035c-.406 0-.714-.091-.924-.273-.205-.186-.308-.457-.308-.812zm5.159 1.029v-.301a1.563 1.563 0 01-.483.266 1.83 1.83 0 01-.553.084c-.257 0-.5-.049-.728-.147a1.874 1.874 0 01-.987-.994 1.909 1.909 0 01-.14-.735 1.885 1.885 0 01.546-1.33c.168-.168.366-.298.595-.392a1.893 1.893 0 011.736.14v-1.491l.959-.21v5.11h-.945zm-1.946-1.827c0 .294.102.544.308.749.205.206.457.308.756.308.177 0 .338-.03.483-.091a1.1 1.1 0 00.385-.259v-1.421a1.074 1.074 0 00-.385-.252 1.289 1.289 0 00-.483-.091c-.304 0-.558.103-.763.308a1.017 1.017 0 00-.301.749zm3.477.007c0-.266.049-.513.147-.742.103-.233.241-.434.413-.602a1.963 1.963 0 011.386-.553c.271 0 .525.049.763.147.238.098.444.234.616.406.178.168.315.369.413.602.103.229.154.476.154.742s-.051.516-.154.749a1.759 1.759 0 01-.413.595 1.983 1.983 0 01-1.379.546 2.015 2.015 0 01-1.386-.546 1.929 1.929 0 01-.413-.595 1.913 1.913 0 01-.147-.749zm1.946 1.057c.28 0 .518-.102.714-.308.196-.205.294-.455.294-.749 0-.298-.098-.55-.294-.756a.951.951 0 00-.714-.308.951.951 0 00-.714.308 1.056 1.056 0 00-.294.756c0 .294.098.544.294.749a.948.948 0 00.714.308zm2.395-1.057c0-.266.049-.513.147-.742.103-.233.241-.434.413-.602a1.963 1.963 0 011.386-.553c.271 0 .525.049.763.147.238.098.444.234.616.406.178.168.315.369.413.602.103.229.154.476.154.742s-.051.516-.154.749a1.759 1.759 0 01-.413.595 1.983 1.983 0 01-1.379.546 2.015 2.015 0 01-1.386-.546 1.929 1.929 0 01-.413-.595 1.913 1.913 0 01-.147-.749zm1.946 1.057c.28 0 .518-.102.714-.308.196-.205.294-.455.294-.749 0-.298-.098-.55-.294-.756a.951.951 0 00-.714-.308.951.951 0 00-.714.308 1.056 1.056 0 00-.294.756c0 .294.098.544.294.749a.948.948 0 00.714.308zm2.536.763v-3.647h.959v.399c.116-.158.256-.277.42-.357.168-.084.352-.126.553-.126a1.4 1.4 0 01.231.028c.065.01.121.028.168.056v.84a.916.916 0 00-.231-.07 1.238 1.238 0 00-.259-.028c-.187 0-.36.047-.518.14a.967.967 0 00-.364.406v2.359h-.959z"
                        ></path>
                        </g>
                        <g id="product-info" display="none">
                        <path
                            id="â¢ Wireless livestream &amp; recording â¢ 6 month battery charge"
                            fill="#000"
                            d="M130.701 280.916a.423.423 0 01-.43-.43c0-.12.041-.223.125-.309a.416.416 0 01.305-.129c.12 0 .224.043.31.129a.422.422 0 01.129.309c0 .118-.043.22-.129.306a.423.423 0 01-.31.124zM133.47 282h-.335l-.65-3.01h.336l.511 2.485.744-2.485h.323l.744 2.477.516-2.477h.322l-.649 3.01h-.336l-.761-2.55-.765 2.55zm3.087-2.567a.207.207 0 01-.151-.065.205.205 0 01-.064-.15.2.2 0 01.064-.151.206.206 0 01.151-.064c.06 0 .11.021.15.064a.206.206 0 010 .301.197.197 0 01-.15.065zm.159.413V282h-.318v-2.154h.318zm.542 2.154v-2.154h.319v.305a.672.672 0 01.602-.353.57.57 0 01.107.009c.032.003.063.01.095.021v.293a.785.785 0 00-.112-.026.555.555 0 00-.46.103.703.703 0 00-.232.327V282h-.319zm3.146-.228c-.12.089-.246.156-.378.202a1.34 1.34 0 01-.426.065 1.108 1.108 0 01-.791-.323 1.129 1.129 0 01-.318-.795c0-.155.027-.3.081-.435.058-.134.134-.252.228-.352a1.04 1.04 0 01.753-.323.953.953 0 01.722.323c.092.1.164.218.215.352.055.135.082.28.082.435v.099h-1.767c.022.212.11.388.262.528a.774.774 0 00.546.211c.112 0 .221-.017.327-.051a.75.75 0 00.266-.147l.198.211zm-.86-1.681a.698.698 0 00-.486.189.806.806 0 00-.245.486h1.441a.816.816 0 00-.245-.477.637.637 0 00-.465-.198zm1.791-1.174V282h-.318v-3.01l.318-.073zm2.357 2.855c-.12.089-.246.156-.378.202a1.34 1.34 0 01-.426.065 1.108 1.108 0 01-.791-.323 1.129 1.129 0 01-.318-.795c0-.155.027-.3.081-.435.058-.134.134-.252.228-.352a1.04 1.04 0 01.753-.323.953.953 0 01.722.323c.092.1.164.218.215.352.055.135.082.28.082.435v.099h-1.767c.022.212.11.388.262.528a.774.774 0 00.546.211c.112 0 .221-.017.327-.051a.75.75 0 00.266-.147l.198.211zm-.86-1.681a.698.698 0 00-.486.189.806.806 0 00-.245.486h1.441a.816.816 0 00-.245-.477.637.637 0 00-.465-.198zm1.274 1.612l.194-.206a1.004 1.004 0 00.701.288.75.75 0 00.421-.108c.109-.071.164-.164.164-.279a.258.258 0 00-.099-.215.597.597 0 00-.301-.112l-.374-.051c-.215-.032-.376-.095-.482-.19a.513.513 0 01-.155-.391c0-.181.076-.33.228-.447a.904.904 0 01.581-.181 1.372 1.372 0 01.847.284l-.168.215c-.12-.08-.238-.14-.353-.181a1.009 1.009 0 00-.344-.06.618.618 0 00-.361.099.303.303 0 00-.137.258c0 .092.031.164.094.215a.659.659 0 00.305.103l.375.052c.215.029.375.093.481.193a.5.5 0 01.164.392.532.532 0 01-.069.262.647.647 0 01-.185.211.956.956 0 01-.275.137 1.187 1.187 0 01-.344.048c-.178 0-.346-.029-.503-.086a1.284 1.284 0 01-.405-.25zm1.953 0l.194-.206c.097.092.206.163.326.215.124.049.248.073.374.073a.753.753 0 00.422-.108c.109-.071.163-.164.163-.279a.258.258 0 00-.099-.215.593.593 0 00-.301-.112l-.374-.051c-.215-.032-.375-.095-.481-.19a.51.51 0 01-.155-.391c0-.181.076-.33.228-.447a.901.901 0 01.58-.181 1.378 1.378 0 01.847.284l-.167.215a1.644 1.644 0 00-.353-.181 1.013 1.013 0 00-.344-.06.615.615 0 00-.361.099.304.304 0 00-.138.258c0 .092.032.164.095.215a.659.659 0 00.305.103l.374.052c.215.029.376.093.482.193a.5.5 0 01.163.392.532.532 0 01-.069.262.644.644 0 01-.184.211.963.963 0 01-.276.137c-.106.032-.22.048-.344.048-.177 0-.345-.029-.503-.086a1.28 1.28 0 01-.404-.25zm3.38-2.786V282h-.318v-3.01l.318-.073zm.702.516a.206.206 0 01-.15-.065.206.206 0 010-.301.205.205 0 01.15-.064c.06 0 .111.021.151.064a.2.2 0 01.064.151.205.205 0 01-.064.15.199.199 0 01-.151.065zm.159.413V282h-.318v-2.154h.318zm1.227 2.154l-.934-2.154h.353l.735 1.741.736-1.741h.339l-.928 2.154h-.301zm3.251-.228c-.12.089-.246.156-.378.202a1.34 1.34 0 01-.426.065 1.108 1.108 0 01-.791-.323 1.129 1.129 0 01-.318-.795c0-.155.027-.3.081-.435.058-.134.134-.252.228-.352a1.04 1.04 0 01.753-.323.953.953 0 01.722.323c.092.1.163.218.215.352.055.135.082.28.082.435v.099h-1.768a.814.814 0 00.263.528.774.774 0 00.546.211c.112 0 .221-.017.327-.051a.75.75 0 00.266-.147l.198.211zm-.86-1.681a.698.698 0 00-.486.189.8.8 0 00-.245.486h1.441a.812.812 0 00-.246-.477.633.633 0 00-.464-.198zm1.274 1.612l.194-.206a1.004 1.004 0 00.701.288.75.75 0 00.421-.108c.109-.071.164-.164.164-.279a.258.258 0 00-.099-.215.597.597 0 00-.301-.112l-.374-.051c-.215-.032-.376-.095-.482-.19a.513.513 0 01-.155-.391c0-.181.076-.33.228-.447a.902.902 0 01.581-.181 1.372 1.372 0 01.847.284l-.168.215c-.12-.08-.238-.14-.353-.181a1.009 1.009 0 00-.344-.06.618.618 0 00-.361.099.303.303 0 00-.137.258c0 .092.031.164.094.215a.659.659 0 00.305.103l.375.052c.215.029.375.093.481.193a.5.5 0 01.164.392.532.532 0 01-.069.262.647.647 0 01-.185.211.956.956 0 01-.275.137 1.187 1.187 0 01-.344.048c-.178 0-.346-.029-.503-.086a1.284 1.284 0 01-.405-.25zm2.363-.185v-1.401h-.464v-.271h.464v-.546l.314-.082v.628h.649v.271h-.649v1.32c0 .114.026.197.078.249.051.049.136.073.253.073a.83.83 0 00.314-.056v.28a.853.853 0 01-.185.043c-.066.008-.13.013-.193.013-.187 0-.33-.045-.43-.134-.101-.088-.151-.217-.151-.387zm1.304.482v-2.154h.318v.305a.675.675 0 01.602-.353c.041 0 .076.003.108.009.031.003.063.01.094.021v.293a.743.743 0 00-.111-.026.555.555 0 00-.46.103.711.711 0 00-.233.327V282h-.318zm3.146-.228c-.12.089-.247.156-.378.202a1.34 1.34 0 01-.426.065 1.108 1.108 0 01-.791-.323 1.15 1.15 0 01-.233-.352 1.15 1.15 0 01-.086-.443c0-.155.028-.3.082-.435.057-.134.133-.252.228-.352a1.036 1.036 0 01.753-.323c.143 0 .276.029.399.086a.947.947 0 01.323.237c.092.1.163.218.215.352.054.135.082.28.082.435v.099h-1.768a.814.814 0 00.263.528.774.774 0 00.546.211c.112 0 .22-.017.327-.051a.758.758 0 00.266-.147l.198.211zm-.86-1.681a.698.698 0 00-.486.189.8.8 0 00-.245.486h1.44a.805.805 0 00-.245-.477.634.634 0 00-.464-.198zm2.118 1.948a.89.89 0 01-.576-.181.58.58 0 01-.219-.469c0-.2.077-.359.232-.477.155-.12.364-.181.628-.181.114 0 .225.013.331.039.109.026.209.062.301.108v-.284c0-.172-.049-.301-.146-.387-.098-.089-.24-.133-.426-.133-.106 0-.214.015-.323.047a1.864 1.864 0 00-.352.142l-.121-.245c.155-.075.299-.129.43-.164.132-.034.264-.051.396-.051.272 0 .482.064.628.193.149.129.223.314.223.555V282h-.309v-.211a1.054 1.054 0 01-.323.189 1.1 1.1 0 01-.374.061zm-.49-.658c0 .12.05.219.151.296a.655.655 0 00.395.112c.129 0 .247-.02.353-.06a.81.81 0 00.288-.189v-.404a.868.868 0 00-.288-.129 1.21 1.21 0 00-.336-.043.665.665 0 00-.412.116.354.354 0 00-.151.301zm2.028.619v-2.154h.318v.236a.828.828 0 01.632-.279c.149 0 .283.036.4.107a.721.721 0 01.28.284.854.854 0 01.739-.391c.233 0 .422.077.568.232a.832.832 0 01.224.602V282h-.314v-1.299a.647.647 0 00-.151-.451.52.52 0 00-.408-.168.605.605 0 00-.323.09.77.77 0 00-.249.263.95.95 0 01.013.099.653.653 0 01.008.103V282h-.314v-1.299a.652.652 0 00-.15-.451.515.515 0 00-.404-.168.61.61 0 00-.314.082.672.672 0 00-.237.232V282h-.318zm7.126-.172l-.193.228-.254-.198-.262-.219a1.237 1.237 0 01-.435.301 1.342 1.342 0 01-.529.103c-.298 0-.539-.077-.722-.232a.782.782 0 01-.271-.619c0-.172.045-.323.133-.452.092-.129.243-.251.452-.365l.082-.048a1.477 1.477 0 01-.215-.344.908.908 0 01-.061-.331c0-.2.069-.368.207-.503a.72.72 0 01.52-.202c.198 0 .36.059.486.176a.567.567 0 01.194.443.636.636 0 01-.121.379 1.141 1.141 0 01-.361.313l-.215.129c.117.132.246.269.387.409.14.138.284.272.43.404.072-.114.13-.241.176-.378.049-.138.088-.281.116-.43l.293.047a3.463 3.463 0 01-.146.516 2.13 2.13 0 01-.224.439c.092.08.183.157.275.232l.258.202zm-1.974-2.18c0 .089.018.175.052.258.037.08.1.175.189.284l.245-.142a.729.729 0 00.237-.211.448.448 0 00.082-.262.336.336 0 00-.117-.263.376.376 0 00-.27-.107.4.4 0 00-.301.125.436.436 0 00-.117.318zm-.391 1.535c0 .178.065.321.194.43.131.106.303.159.516.159a.994.994 0 00.735-.322 18.92 18.92 0 01-.486-.461 8.167 8.167 0 01-.426-.455l-.099.056a1.105 1.105 0 00-.335.27.54.54 0 00-.099.323zm3.591.817v-2.154h.319v.305a.672.672 0 01.602-.353c.04 0 .075.003.107.009.032.003.063.01.095.021v.293a.785.785 0 00-.112-.026.555.555 0 00-.46.103.703.703 0 00-.232.327V282h-.319zm3.146-.228c-.12.089-.246.156-.378.202a1.34 1.34 0 01-.426.065 1.108 1.108 0 01-.791-.323 1.129 1.129 0 01-.318-.795c0-.155.027-.3.081-.435.058-.134.134-.252.228-.352a1.04 1.04 0 01.753-.323.953.953 0 01.722.323c.092.1.163.218.215.352.055.135.082.28.082.435v.099h-1.768a.814.814 0 00.263.528.774.774 0 00.546.211c.112 0 .221-.017.327-.051a.75.75 0 00.266-.147l.198.211zm-.86-1.681a.698.698 0 00-.486.189.8.8 0 00-.245.486h1.441a.812.812 0 00-.246-.477.633.633 0 00-.464-.198zm2.483 1.66a.822.822 0 00.331-.069.998.998 0 00.297-.202l.198.215a1.275 1.275 0 01-.387.253 1.136 1.136 0 01-.878.005 1.07 1.07 0 01-.58-.594 1.133 1.133 0 01-.086-.438 1.146 1.146 0 01.318-.792c.098-.1.214-.179.348-.236.135-.06.278-.09.43-.09.155 0 .306.03.452.09.149.06.279.143.391.249l-.202.233a.925.925 0 00-.297-.207.835.835 0 00-.339-.073.793.793 0 00-.564.241.853.853 0 00-.223.585c0 .117.02.228.06.331.043.1.099.188.168.262a.815.815 0 00.563.237zm1.016-.83c0-.155.028-.301.086-.439.057-.138.134-.256.232-.357a1.106 1.106 0 011.208-.236 1.098 1.098 0 01.585.593c.057.138.086.284.086.439 0 .157-.029.305-.086.443a1.093 1.093 0 01-.585.593 1.093 1.093 0 01-1.526-1.036zm1.1.838a.743.743 0 00.555-.241.846.846 0 00.228-.597.873.873 0 00-.228-.594.755.755 0 00-.555-.241.754.754 0 00-.309.065.815.815 0 00-.25.176.854.854 0 00-.228.594.889.889 0 00.224.597.785.785 0 00.563.241zm1.539.241v-2.154h.318v.305a.668.668 0 01.25-.258.66.66 0 01.46-.086c.031.003.063.01.094.021v.293a.727.727 0 00-.112-.026.56.56 0 00-.46.103.717.717 0 00-.232.327V282h-.318zm3.012 0v-.228a.948.948 0 01-.318.198 1.087 1.087 0 01-.378.064 1.093 1.093 0 01-.77-.318 1.124 1.124 0 01-.314-.795c0-.155.027-.3.082-.435a1.08 1.08 0 01.232-.352 1.074 1.074 0 01.774-.323c.123 0 .244.022.361.065.121.04.23.1.327.18v-1.066l.318-.073V282h-.314zm-1.466-1.084c0 .118.02.228.06.331a.793.793 0 00.74.508.895.895 0 00.374-.078.766.766 0 00.288-.223v-1.067a.886.886 0 00-.662-.296.768.768 0 00-.568.236.81.81 0 00-.232.589zm2.481-1.483a.207.207 0 01-.151-.065.205.205 0 01-.064-.15.2.2 0 01.064-.151.206.206 0 01.151-.064c.06 0 .11.021.15.064a.206.206 0 010 .301.197.197 0 01-.15.065zm.159.413V282h-.319v-2.154h.319zm.542 2.154v-2.154h.318v.253a.815.815 0 01.297-.219.917.917 0 01.383-.077c.244 0 .443.077.598.232a.817.817 0 01.232.602V282h-.314v-1.299a.619.619 0 00-.164-.451.582.582 0 00-.438-.168.707.707 0 00-.348.086.68.68 0 00-.246.245V282h-.318zm3.336.017c-.149 0-.289-.028-.421-.086a1.127 1.127 0 01-.34-.232 1.14 1.14 0 01-.232-.353 1.152 1.152 0 01-.082-.434c0-.155.028-.299.082-.434a1.098 1.098 0 01.576-.585c.132-.057.274-.086.426-.086.123 0 .242.023.357.069.117.043.225.104.322.185v-.215h.314v2.206c0 .275-.08.485-.241.632-.16.149-.389.223-.688.223-.149 0-.296-.02-.442-.06a1.5 1.5 0 01-.4-.163l.137-.25c.129.069.248.119.357.151.112.031.224.047.336.047.203 0 .358-.049.464-.146.106-.098.159-.241.159-.43v-.288c-.097.08-.205.142-.322.185a1.026 1.026 0 01-.362.064zm-.761-1.105a.855.855 0 00.224.589.82.82 0 00.563.237.908.908 0 00.379-.078.704.704 0 00.279-.219v-1.058a.72.72 0 00-.284-.215.907.907 0 00-.374-.077.77.77 0 00-.727.499c-.04.1-.06.207-.06.322zm-58.179 7.004a.423.423 0 01-.43-.43c0-.12.041-.223.125-.309a.416.416 0 01.305-.129c.12 0 .224.043.31.129a.422.422 0 01.129.309c0 .118-.043.22-.129.306a.423.423 0 01-.31.124zm3.044 1.123c-.178 0-.341-.035-.49-.104a1.177 1.177 0 01-.387-.296 1.4 1.4 0 01-.249-.452 1.786 1.786 0 01-.091-.585c0-.249.033-.475.099-.679.069-.206.164-.381.284-.525.123-.143.271-.253.443-.331a1.439 1.439 0 01.959-.068c.126.034.238.083.335.146l-.155.245a1.11 1.11 0 00-.283-.116 1.072 1.072 0 00-.297-.043c-.324 0-.581.117-.77.352-.189.233-.289.554-.301.964.112-.132.25-.237.413-.314.163-.078.331-.116.503-.116.149 0 .287.024.413.073.129.046.239.11.331.193a.898.898 0 01.297.675.95.95 0 01-.082.392.932.932 0 01-.55.516c-.129.048-.27.073-.422.073zm-.043-1.66a.96.96 0 00-.46.12 1.183 1.183 0 00-.387.327c.034.281.132.507.292.679a.782.782 0 00.594.258.743.743 0 00.529-.197.665.665 0 00.21-.499.624.624 0 00-.219-.495.804.804 0 00-.559-.193zm2.46 1.621v-2.154h.319v.236a.832.832 0 01.632-.279.76.76 0 01.4.107c.12.069.213.164.279.284a.854.854 0 01.74-.391c.232 0 .421.077.567.232a.832.832 0 01.224.602V289h-.314v-1.299a.652.652 0 00-.15-.451.523.523 0 00-.409-.168.6.6 0 00-.322.09.764.764 0 00-.25.263.95.95 0 01.013.099.549.549 0 01.009.103V289h-.314v-1.299a.647.647 0 00-.151-.451.515.515 0 00-.404-.168.613.613 0 00-.314.082.67.67 0 00-.236.232V289h-.319zm3.597-1.079a1.135 1.135 0 01.318-.796 1.1 1.1 0 01.783-.322c.152 0 .293.028.425.086a1.095 1.095 0 01.585.593c.057.138.086.284.086.439 0 .157-.029.305-.086.443a1.09 1.09 0 01-1.01.679 1.09 1.09 0 01-1.015-.679 1.132 1.132 0 01-.086-.443zm1.101.838c.109 0 .21-.021.305-.064a.733.733 0 00.249-.177.846.846 0 00.228-.597.873.873 0 00-.228-.594.745.745 0 00-.249-.176.759.759 0 00-.864.176.873.873 0 00-.228.594c0 .117.02.228.06.331.04.1.095.189.163.266a.796.796 0 00.254.177.758.758 0 00.31.064zm1.538.241v-2.154h.318v.253a.807.807 0 01.297-.219.917.917 0 01.383-.077c.244 0 .443.077.598.232a.817.817 0 01.232.602V289h-.314v-1.299a.619.619 0 00-.164-.451.582.582 0 00-.438-.168.707.707 0 00-.348.086.68.68 0 00-.246.245V289h-.318zm2.543-.482v-1.401h-.465v-.271h.465v-.546l.314-.082v.628h.649v.271h-.649v1.32c0 .114.026.197.077.249.052.049.136.073.254.073a.838.838 0 00.314-.056v.28a.867.867 0 01-.185.043 1.62 1.62 0 01-.194.013c-.186 0-.329-.045-.43-.134-.1-.088-.15-.217-.15-.387zm1.304.482v-3.01l.318-.073v1.182a.798.798 0 01.297-.219.912.912 0 01.382-.077c.244 0 .443.077.598.232a.813.813 0 01.232.602V289h-.314v-1.299a.618.618 0 00-.163-.451.584.584 0 00-.439-.168.707.707 0 00-.348.086.677.677 0 00-.245.245V289h-.318zm5.378-1.079c0 .154-.029.301-.086.438a1.081 1.081 0 01-.228.357 1.082 1.082 0 01-.349.232 1.091 1.091 0 01-1.118-.163V289h-.313v-3.01l.318-.073v1.157a.874.874 0 01.309-.194c.121-.046.248-.069.383-.069a1.063 1.063 0 01.998.675c.057.135.086.28.086.435zm-1.114-.83a.891.891 0 00-.378.081.739.739 0 00-.284.22v1.066c.074.092.17.165.288.219a.912.912 0 00.374.078.757.757 0 00.568-.237.823.823 0 00.232-.593.823.823 0 00-.065-.327.797.797 0 00-.421-.443.77.77 0 00-.314-.064zm2.256 1.948a.89.89 0 01-.576-.181.58.58 0 01-.219-.469c0-.2.077-.359.232-.477.155-.12.364-.181.628-.181.114 0 .225.013.331.039.109.026.209.062.301.108v-.284c0-.172-.049-.301-.146-.387-.098-.089-.24-.133-.426-.133-.106 0-.214.015-.323.047a1.864 1.864 0 00-.352.142l-.121-.245c.155-.075.299-.129.43-.164.132-.034.264-.051.396-.051.272 0 .482.064.628.193.149.129.223.314.223.555V289h-.309v-.211a1.054 1.054 0 01-.323.189 1.1 1.1 0 01-.374.061zm-.49-.658c0 .12.05.219.151.296a.655.655 0 00.395.112c.129 0 .247-.02.353-.06a.81.81 0 00.288-.189v-.404a.868.868 0 00-.288-.129 1.21 1.21 0 00-.336-.043.665.665 0 00-.412.116.354.354 0 00-.151.301zm2.211.137v-1.401h-.465v-.271h.465v-.546l.314-.082v.628h.649v.271h-.649v1.32c0 .114.025.197.077.249.052.049.136.073.254.073a.838.838 0 00.314-.056v.28a.882.882 0 01-.185.043 1.62 1.62 0 01-.194.013c-.186 0-.33-.045-.43-.134-.1-.088-.15-.217-.15-.387zm1.612 0v-1.401h-.464v-.271h.464v-.546l.314-.082v.628h.649v.271h-.649v1.32c0 .114.026.197.077.249.052.049.137.073.254.073a.838.838 0 00.314-.056v.28a.853.853 0 01-.185.043c-.066.008-.13.013-.193.013-.187 0-.33-.045-.43-.134-.101-.088-.151-.217-.151-.387zm3.051.254c-.12.089-.246.156-.378.202a1.34 1.34 0 01-.426.065 1.113 1.113 0 01-.791-.323 1.147 1.147 0 01-.232-.352 1.15 1.15 0 01-.086-.443c0-.155.027-.3.082-.435.057-.134.133-.252.228-.352a1.025 1.025 0 01.752-.323c.143 0 .277.029.4.086a.943.943 0 01.322.237c.092.1.164.218.215.352.055.135.082.28.082.435v.099h-1.767a.812.812 0 00.808.739c.112 0 .221-.017.327-.051a.763.763 0 00.267-.147l.197.211zm-.86-1.681a.693.693 0 00-.485.189.802.802 0 00-.246.486h1.441a.81.81 0 00-.245-.477.637.637 0 00-.465-.198zm1.473 1.909v-2.154h.318v.305a.668.668 0 01.25-.258.66.66 0 01.46-.086c.031.003.063.01.094.021v.293a.743.743 0 00-.111-.026.56.56 0 00-.461.103.717.717 0 00-.232.327V289h-.318zm2.032.279l.124-.283-.877-2.15h.353l.696 1.767.753-1.767h.344l-1.071 2.476c-.092.207-.193.356-.305.448a.654.654 0 01-.426.137.868.868 0 01-.116-.008.543.543 0 01-.086-.013v-.288c.029.005.056.01.082.013.028.002.061.004.099.004.097 0 .18-.027.249-.082a.662.662 0 00.181-.254zm3.619-.528a.825.825 0 00.331-.069.981.981 0 00.296-.202l.198.215a1.275 1.275 0 01-.387.253 1.127 1.127 0 01-.877.005 1.048 1.048 0 01-.348-.237 1.126 1.126 0 01-.319-.795 1.149 1.149 0 01.319-.792c.097-.1.213-.179.348-.236.135-.06.278-.09.43-.09.155 0 .305.03.451.09.15.06.28.143.392.249l-.202.233a.925.925 0 00-.297-.207.84.84 0 00-.34-.073.782.782 0 00-.563.241.834.834 0 00-.163.262.848.848 0 00-.061.323c0 .117.02.228.061.331.043.1.098.188.167.262a.82.82 0 00.564.237zm1.198.249v-3.01l.318-.073v1.182a.798.798 0 01.297-.219.917.917 0 01.383-.077c.243 0 .442.077.597.232a.813.813 0 01.232.602V289h-.313v-1.299a.619.619 0 00-.164-.451.583.583 0 00-.438-.168.71.71 0 00-.349.086.677.677 0 00-.245.245V289h-.318zm3.039.039a.89.89 0 01-.576-.181.58.58 0 01-.219-.469c0-.2.077-.359.232-.477.155-.12.364-.181.628-.181.114 0 .225.013.331.039.109.026.209.062.301.108v-.284c0-.172-.049-.301-.146-.387-.098-.089-.24-.133-.426-.133a1.13 1.13 0 00-.322.047 1.844 1.844 0 00-.353.142l-.12-.245c.154-.075.298-.129.43-.164.131-.034.263-.051.395-.051.272 0 .482.064.628.193.149.129.224.314.224.555V289h-.31v-.211a1.054 1.054 0 01-.323.189 1.1 1.1 0 01-.374.061zm-.49-.658c0 .12.05.219.151.296a.655.655 0 00.395.112c.129 0 .247-.02.353-.06a.81.81 0 00.288-.189v-.404a.868.868 0 00-.288-.129 1.21 1.21 0 00-.336-.043.665.665 0 00-.412.116.354.354 0 00-.151.301zm2.028.619v-2.154h.318v.305a.668.668 0 01.25-.258.66.66 0 01.46-.086c.031.003.063.01.094.021v.293a.743.743 0 00-.111-.026.56.56 0 00-.461.103.717.717 0 00-.232.327V289h-.318zm2.307.017c-.149 0-.289-.028-.421-.086a1.127 1.127 0 01-.34-.232 1.14 1.14 0 01-.232-.353 1.152 1.152 0 01-.082-.434c0-.155.028-.299.082-.434a1.098 1.098 0 01.576-.585c.132-.057.274-.086.426-.086.123 0 .242.023.357.069.117.043.225.104.322.185v-.215h.314v2.206c0 .275-.08.485-.241.632-.16.149-.389.223-.688.223-.149 0-.296-.02-.442-.06a1.5 1.5 0 01-.4-.163l.137-.25c.129.069.248.119.357.151.112.031.224.047.336.047.203 0 .358-.049.464-.146.106-.098.159-.241.159-.43v-.288c-.097.08-.205.142-.322.185a1.026 1.026 0 01-.362.064zm-.761-1.105a.855.855 0 00.224.589.82.82 0 00.563.237.908.908 0 00.379-.078.704.704 0 00.279-.219v-1.058a.72.72 0 00-.284-.215.907.907 0 00-.374-.077.77.77 0 00-.727.499c-.04.1-.06.207-.06.322zm4.119.86c-.12.089-.246.156-.378.202a1.34 1.34 0 01-.426.065 1.102 1.102 0 01-.791-.323 1.147 1.147 0 01-.232-.352 1.15 1.15 0 01-.086-.443c0-.155.027-.3.082-.435a1.19 1.19 0 01.227-.352 1.04 1.04 0 01.753-.323c.143 0 .277.029.4.086a.943.943 0 01.322.237c.092.1.164.218.215.352.055.135.082.28.082.435v.099h-1.767a.812.812 0 00.808.739c.112 0 .221-.017.327-.051a.763.763 0 00.267-.147l.197.211zm-.86-1.681a.698.698 0 00-.486.189.806.806 0 00-.245.486h1.441a.81.81 0 00-.245-.477.637.637 0 00-.465-.198z"
                        ></path>
                        </g>
                        <g id="product-price" display="none">
                        <path
                            id="$ 49.99"
                            fill="#000"
                            d="M158.387 301.45v-.564a2.62 2.62 0 01-.828-.204 2.345 2.345 0 01-.684-.444l.426-.582c.152.148.322.27.51.366.188.092.38.154.576.186v-.972l-.33-.066c-.388-.072-.668-.192-.84-.36-.168-.168-.252-.408-.252-.72 0-.36.126-.646.378-.858.256-.212.604-.326 1.044-.342v-.444h.396v.462c.24.024.48.078.72.162.244.08.468.184.672.312l-.348.63a3.399 3.399 0 00-.54-.27 2.691 2.691 0 00-.504-.144v.954l.318.054c.416.08.718.204.906.372.188.164.282.394.282.69 0 .356-.136.644-.408.864-.268.22-.634.34-1.098.36v.558h-.396zm-.036-2.952l.036.006v-.936a.853.853 0 00-.48.132.38.38 0 00-.18.324c0 .148.042.254.126.318.084.064.25.116.498.156zm.456.78l-.024-.006v.96c.216-.016.388-.068.516-.156.132-.088.198-.2.198-.336 0-.14-.046-.24-.138-.3-.092-.064-.276-.118-.552-.162zm6.196-2.478v2.526h.516v.69h-.516V301h-.822v-.984h-2.37v-.66l2.244-2.556h.948zm-2.244 2.526h1.422v-1.614l-1.422 1.614zm4.557-2.598a1.8 1.8 0 01.756.156c.228.1.422.242.582.426.164.18.29.398.378.654.092.256.138.538.138.846 0 .336-.05.644-.15.924-.1.276-.24.512-.42.708-.18.196-.398.348-.654.456a2.155 2.155 0 01-.846.162c-.228 0-.454-.036-.678-.108a1.796 1.796 0 01-.564-.3l.468-.588a1.28 1.28 0 00.834.276c.36 0 .642-.122.846-.366.208-.248.322-.598.342-1.05a1.449 1.449 0 01-.504.36c-.2.084-.412.126-.636.126-.212 0-.408-.032-.588-.096a1.483 1.483 0 01-.468-.264 1.255 1.255 0 01-.3-.408 1.257 1.257 0 01-.108-.522c0-.2.04-.384.12-.552.08-.172.188-.32.324-.444.14-.124.306-.22.498-.288.196-.072.406-.108.63-.108zm.024 2.034c.188 0 .362-.04.522-.12.164-.08.31-.194.438-.342a1.265 1.265 0 00-.348-.636.84.84 0 00-.6-.24.878.878 0 00-.576.192.608.608 0 00-.228.486c0 .196.074.356.222.48.148.12.338.18.57.18zm2.611 1.32c.136 0 .252.048.348.144a.474.474 0 01.144.348.467.467 0 01-.144.342.474.474 0 01-.348.144.467.467 0 01-.342-.144.467.467 0 01-.144-.342c0-.136.048-.252.144-.348a.467.467 0 01.342-.144zm2.357-3.354a1.8 1.8 0 01.756.156c.228.1.422.242.582.426.164.18.29.398.378.654.092.256.138.538.138.846 0 .336-.05.644-.15.924-.1.276-.24.512-.42.708-.18.196-.398.348-.654.456a2.155 2.155 0 01-.846.162c-.228 0-.454-.036-.678-.108a1.796 1.796 0 01-.564-.3l.468-.588a1.28 1.28 0 00.834.276c.36 0 .642-.122.846-.366.208-.248.322-.598.342-1.05a1.449 1.449 0 01-.504.36c-.2.084-.412.126-.636.126-.212 0-.408-.032-.588-.096a1.483 1.483 0 01-.468-.264 1.255 1.255 0 01-.3-.408 1.257 1.257 0 01-.108-.522c0-.2.04-.384.12-.552.08-.172.188-.32.324-.444.14-.124.306-.22.498-.288.196-.072.406-.108.63-.108zm.024 2.034c.188 0 .362-.04.522-.12.164-.08.31-.194.438-.342a1.265 1.265 0 00-.348-.636.84.84 0 00-.6-.24.878.878 0 00-.576.192.608.608 0 00-.228.486c0 .196.074.356.222.48.148.12.338.18.57.18zm3.779-2.034a1.8 1.8 0 01.756.156c.228.1.422.242.582.426.164.18.29.398.378.654.092.256.138.538.138.846 0 .336-.05.644-.15.924-.1.276-.24.512-.42.708-.18.196-.398.348-.654.456a2.155 2.155 0 01-.846.162c-.228 0-.454-.036-.678-.108a1.796 1.796 0 01-.564-.3l.468-.588a1.28 1.28 0 00.834.276c.36 0 .642-.122.846-.366.208-.248.322-.598.342-1.05a1.449 1.449 0 01-.504.36c-.2.084-.412.126-.636.126-.212 0-.408-.032-.588-.096a1.483 1.483 0 01-.468-.264 1.255 1.255 0 01-.3-.408 1.257 1.257 0 01-.108-.522c0-.2.04-.384.12-.552.08-.172.188-.32.324-.444.14-.124.306-.22.498-.288.196-.072.406-.108.63-.108zm.024 2.034c.188 0 .362-.04.522-.12.164-.08.31-.194.438-.342a1.265 1.265 0 00-.348-.636.84.84 0 00-.6-.24.878.878 0 00-.576.192.608.608 0 00-.228.486c0 .196.074.356.222.48.148.12.338.18.57.18z"
                        ></path>
                        </g>
                    </g>
                    <g id="base_2">
                        <g id="base-antena_3">
                        <path
                            id="Vector 35_3"
                            fill="#D9DADE"
                            d="M222.355 243.746l-14.037 37.709 3.653 1.237c-.196 1.203-.109 2.977 1.803.452l12.471-38.239-2.26-.977-1.63-.182z"
                        ></path>
                        <g id="Vector 36_3" fill="#9A9B9F">
                            <path d="M211.971 282.692l12.992-37.904 1.282.117-12.471 38.239c-.98 2.894-2.317 1.066-1.803-.452z"></path>
                            <path d="M224.963 244.788l-2.608-1.042 1.63.182 2.26.977-1.282-.117z"></path>
                        </g>
                        <ellipse
                            id="Ellipse 27_5"
                            fill="#A2A3A7"
                            rx="0.601"
                            ry="1.553"
                            transform="scale(-1 1) rotate(-18.705 751.627 787.916)"
                        ></ellipse>
                        </g>
                        <path
                        id="Vector 38_2"
                        fill="#D4D5D9"
                        d="M229.607 291.043c-.576.245-1.604.271-1.101-1.589-.038-.013 1.665-4.971 2.522-7.448l-3.287-1.695.209-.617-11.443-5.09-2.233.037-3.525-1.617-9.519.003-3.999 11.813.917.414 19.202 8.724-.498 1.471 10.313-.474.431-1.271 1.128-.052.883-2.609z"
                        ></path>
                        <g id="Vector 39_2" fill="#BDBEC2">
                        <path d="M231.028 282.006l-9.076.099-20.722-9.078 9.519-.003 3.525 1.617 2.233-.037 11.443 5.09-.209.617 3.287 1.695z"></path>
                        <path
                            fillRule="evenodd"
                            d="M229.607 291.043c-.576.245-1.604.271-1.101-1.589-.038-.013 1.665-4.971 2.522-7.448l-9.076.099-4.08 12.05-19.724-8.901 19.202 8.724-.498 1.471 10.313-.474.431-1.271 1.128-.052.883-2.609z"
                            clipRule="evenodd"
                        ></path>
                        <path d="M217.35 293.978l-.498 1.471-19.202-8.723.498-1.472 19.202 8.724z"></path>
                        </g>
                        <g id="base-antena_4">
                        <path
                            id="Vector 35_4"
                            fill="#D9DADE"
                            d="M238.891 250.191L224.855 287.9l3.653 1.237c-.196 1.203-.109 2.977 1.803.452l12.471-38.239-2.26-.977-1.631-.182z"
                        ></path>
                        <g id="Vector 36_4" fill="#9A9B9F">
                            <path d="M228.508 289.137l12.992-37.904 1.282.117-12.471 38.239c-.98 2.894-2.317 1.066-1.803-.452z"></path>
                            <path d="M241.5 251.233l-2.609-1.042 1.631.182 2.26.977-1.282-.117z"></path>
                        </g>
                        <ellipse
                            id="Ellipse 27_6"
                            fill="#A2A3A7"
                            rx="0.601"
                            ry="1.553"
                            transform="scale(-1 1) rotate(-18.705 762.925 841.34)"
                        ></ellipse>
                        </g>
                        <g id="Vector 41_2" fill="#BDBEC2">
                        <path d="M231.028 282.006l-9.076.099-20.722-9.078 9.519-.003 3.525 1.617 2.233-.037 11.443 5.09-.209.617 3.287 1.695z"></path>
                        <path
                            fillRule="evenodd"
                            d="M229.607 291.043c-.576.245-1.604.271-1.101-1.589-.038-.013 1.665-4.971 2.522-7.448l-9.076.099-4.08 12.05-19.724-8.901 19.202 8.724-.498 1.471 10.313-.474.431-1.271 1.128-.052.883-2.609z"
                            clipRule="evenodd"
                        ></path>
                        <path d="M217.35 293.978l-.498 1.471-19.202-8.723.498-1.472 19.202 8.724z"></path>
                        </g>
                        <path
                        id="Vector 62_2"
                        fill="#9799A1"
                        d="M225.853 289.051l-.147.531 1.12-.106.147-.531-1.12.106z"
                        ></path>
                        <path
                        id="Vector 64_2"
                        fill="#9799A1"
                        d="M226.121 288.285l-.147.531 1.121-.106.147-.531-1.121.106z"
                        ></path>
                        <path
                        id="Vector 66_2"
                        fill="#9799A1"
                        d="M226.389 287.52l-.146.531 1.12-.106.147-.531-1.121.106z"
                        ></path>
                        <path
                        id="Vector 63_2"
                        fill="#61636C"
                        d="M225.826 289.147l-.094.338.883-.071.112-.329-.901.062z"
                        ></path>
                        <path
                        id="Vector 65_2"
                        fill="#61636C"
                        d="M226.094 288.382l-.093.338.882-.071.112-.33-.901.063z"
                        ></path>
                        <path
                        id="Vector 67_2"
                        fill="#61636C"
                        d="M226.363 287.616l-.094.338.883-.071.112-.329-.901.062z"
                        ></path>
                        <path
                        id="Vector 40_2"
                        fill="#929398"
                        fillRule="evenodd"
                        d="M198.148 285.254l19.724 8.901 9.724-.451-.431 1.271-10.313.474.498-1.471-19.202-8.724z"
                        clipRule="evenodd"
                        ></path>
                        <path
                        id="Rectangle 705_2"
                        fill="#DCDDE1"
                        d="M221.94 282.141l-20.71-9.114-.08.237 20.646 9.201.144-.324z"
                        ></path>
                        <path
                        id="Rectangle 706_2"
                        fill="#DCDDE1"
                        d="M222.079 282.043l-20.215-9.013-.634-.003 20.706 9.126.143-.11z"
                        ></path>
                        <path
                        id="Rectangle 707_2"
                        fill="#DCDDE1"
                        d="M231.017 282.081l-9.14-.035.001.241 9.084-.052.055-.154z"
                        ></path>
                        <path
                        id="Rectangle 708_2"
                        fill="#CACCD3"
                        d="M217.777 294.123l-.474-.161-.435 1.44.476.002.433-1.281z"
                        ></path>
                        <path
                        id="Rectangle 709_2"
                        fill="#61636C"
                        d="M213.973 277.87l.316.16-.488.142-.303-.146.475-.156z"
                        ></path>
                        <path
                        id="Vector 43_2"
                        fill="#9799A2"
                        d="M225.454 285.194l.176-.521-3.564.062-.193.569 3.581-.11z"
                        ></path>
                        <path
                        id="Vector 50_2"
                        fill="#9799A2"
                        d="M225.197 285.953l.176-.521-3.564.062-.192.569 3.58-.11z"
                        ></path>
                        <path
                        id="Vector 52_2"
                        fill="#9799A2"
                        d="M224.94 286.713l.176-.522-3.564.062-.193.569 3.581-.109z"
                        ></path>
                        <path
                        id="Vector 54_2"
                        fill="#9799A2"
                        d="M224.683 287.472l.176-.522-3.564.062-.192.569 3.58-.109z"
                        ></path>
                        <path
                        id="Vector 56_2"
                        fill="#9799A2"
                        d="M224.426 288.231l.176-.522-3.564.062-.193.57 3.581-.11z"
                        ></path>
                        <path
                        id="Vector 58_2"
                        fill="#9799A2"
                        d="M224.169 288.99l.176-.522-3.564.062-.193.57 3.581-.11z"
                        ></path>
                        <path
                        id="Vector 60_2"
                        fill="#9799A2"
                        d="M223.912 289.749l.176-.522-3.564.062-.193.57 3.581-.11z"
                        ></path>
                        <path
                        id="Vector 49_2"
                        fill="#61636C"
                        d="M225.28 285.083l.144-.269-3.406.063-.096.285 3.358-.079z"
                        ></path>
                        <path
                        id="Vector 51_2"
                        fill="#61636C"
                        d="M225.023 285.842l.144-.269-3.406.063-.096.285 3.358-.079z"
                        ></path>
                        <path
                        id="Vector 53_2"
                        fill="#61636C"
                        d="M224.766 286.601l.144-.269-3.406.063-.096.285 3.358-.079z"
                        ></path>
                        <path
                        id="Vector 55_2"
                        fill="#61636C"
                        d="M224.509 287.36l.144-.269-3.406.063-.096.285 3.358-.079z"
                        ></path>
                        <path
                        id="Vector 57_2"
                        fill="#61636C"
                        d="M224.252 288.119l.144-.269-3.406.064-.096.284 3.358-.079z"
                        ></path>
                        <path
                        id="Vector 59_2"
                        fill="#61636C"
                        d="M223.995 288.878l.144-.269-3.406.064-.096.284 3.358-.079z"
                        ></path>
                        <path
                        id="Vector 61_2"
                    fill="#61636C"
                    d="M223.738 289.637l.144-.269-3.406.064-.096.284 3.358-.079z"
                    ></path>
                </g>
                <g id="wyze-outdoor-cam_3">
                    <path
                    id="Vector 69_2"
                    fill="#ABACB0"
                    fillRule="evenodd"
                    d="M194.51 307.416l4.903 29.788-13.852 7.509-5.085-30.9 14.034-6.397z"
                    clipRule="evenodd"
                    ></path>
                    <path
                    id="Vector 72_2"
                    fill="#E0E0E0"
                    d="M180.642 313.726l-.166.087 5.085 30.9.166-.087-5.085-30.9z"
                    ></path>
                    <g id="Vector 71_2" fill="#D8D9DD">
                    <path d="M180.476 313.813l-26.516 2.14 14.97-6.551 25.58-1.986-13.643 6.219-.391.178z"></path>
                    <path d="M180.476 313.813l5.085 30.9-26.631 1.438-4.97-30.198 26.516-2.14z"></path>
                    </g>
                    <path
                    id="Vector 70_2"
                    fill="#CFD0D4"
                    d="M180.476 313.813l-26.516 2.14 14.97-6.551 25.58-1.986-13.643 6.219-.391.178z"
                    ></path>
                    <path
                    id="Vector 73_2"
                    fill="#E8E9EF"
                    d="M180.239 313.832l.237-.019 5.085 30.9-.238.013-5.084-30.894z"
                    ></path>
                    <ellipse
                    id="Ellipse 28_2"
                    fill="url(#paint13_linear)"
                    rx="11.883"
                    ry="13.938"
                    transform="scale(-1 1) rotate(19.051 -1068.603 -340.198)"
                    ></ellipse>
                    <path
                    id="Ellipse 37_2"
                    fill="url(#paint14_linear)"
                    stroke="#000"
                    strokeWidth="0.05"
                    d="M180.811 326.299c-2.513-7.276-9.579-11.438-15.782-9.296-4.968 1.715-7.938 6.905-7.608 12.661m16.758 13.655c5.737-1.982 8.724-8.676 7.127-15.433l-9.413.89c-1.133 3.072-5.799 3.597-7.639.533l-6.805.403c.087 1.412.486 2.895.98 4.326 2.51 7.267 9.563 11.417 15.75 9.281z"
                    ></path>
                    <path
                    id="Ellipse 38_2"
                    fill="#211E1E"
                    d="M163.931 327.235c.42 2.554 2.658 3.77 4.888 3.403s3.551-2.89 3.131-5.444c-.42-2.553-2.413-4.111-4.643-3.744-2.23.367-4.072 3.015-3.376 5.785z"
                    ></path>
                    <ellipse
                    id="Ellipse 33_2"
                    fill="#2F2F2F"
                    rx="3.381"
                    ry="3.855"
                    transform="scale(-1 1) rotate(9.346 -2077.535 -864.944)"
                    ></ellipse>
                    <ellipse
                    id="Ellipse 34_2"
                    fill="#111010"
                    rx="2.313"
                    ry="2.669"
                    transform="scale(-1 1) rotate(9.346 -2077.535 -864.944)"
                    ></ellipse>
                    <path
                    id="Ellipse 35_2"
                    fill="#1E1D1D"
                    d="M166.177 325.904c.212 1.293 1.302 2.19 2.433 2.004 1.131-.186 1.7-1.357 1.488-2.649-.3-1.093-1.215-1.904-2.229-1.858-1.132.187-1.905 1.21-1.692 2.503z"
                    ></path>
                    <path
                    id="Ellipse 32_2"
                    fill="#F51BC5"
                    fillOpacity="0.13"
                    d="M167.048 323.897c.213 1.293 1.066 3.551 1.066 3.551s1.841.599 1.739-1.849c-.055-1.309-1.438-2.528-2.805-1.702z"
                    ></path>
                    <ellipse
                    id="Ellipse 36_2"
                    fill="#5D5E62"
                    rx="0.83"
                    ry="1.008"
                    transform="scale(-1 1) rotate(-5.713 3116.473 1839.474)"
                    ></ellipse>
                    <path
                    id="Vector 74_2"
                    fill="#464646"
                    d="M165.194 329.432l.586-.457c-1.721-2.061-1.416-3.494-1.093-4.449-.051-.15-.266-.57-.281-.615-1.223 2.065-.079 5.002.788 5.521z"
                    ></path>
                    <ellipse
                    id="Ellipse 39_2"
                    fill="#535252"
                    rx="0.178"
                    ry="0.237"
                    transform="scale(-1 1) rotate(9.346 -2179.136 -817.808)"
                    ></ellipse>
                    <path
                    id="Subtract_6"
                    fill="url(#paint15_linear)"
                    fillRule="evenodd"
                    d="M173.837 313.283c-6.089.993-11.116 1.124-11.253.289-.138-.84 4.728-2.341 10.869-3.352l.176-.028c6.062-.985 11.057-1.113 11.194-.28.138.84-4.728 2.341-10.869 3.351l-.117.02zm.078-.254c5.43-.893 9.737-2.194 9.62-2.905-.117-.711-4.613-.563-10.043.33-5.43.894-9.737 2.195-9.62 2.906.117.711 4.613.563 10.043-.331z"
                    clipRule="evenodd"
                    ></path>
                </g>
                </g>
                </g>
                <defs>
        <linearGradient
          id="paint0_linear"
          x1="253.754"
          x2="253.754"
          y1="329.867"
          y2="338.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE0EB"></stop>
          <stop offset="1" stopColor="#A7B1C4"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="253.754"
          x2="253.754"
          y1="455.503"
          y2="463.697"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE0EB"></stop>
          <stop offset="1" stopColor="#A7B1C4"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="527.848"
          x2="528.044"
          y1="302"
          y2="333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#828282"></stop>
          <stop offset="0.026" stopColor="#D4D5D7"></stop>
          <stop offset="0.975" stopColor="#D4D5D7"></stop>
          <stop offset="1" stopColor="#828282"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="535.696"
          x2="520"
          y1="317.895"
          y2="317.895"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#848484"></stop>
          <stop offset="0.025" stopColor="#D4D5D7"></stop>
          <stop offset="0.974" stopColor="#D4D5D7"></stop>
          <stop offset="1" stopColor="#848484"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="535.696"
          x2="520"
          y1="317.895"
          y2="317.895"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#848484"></stop>
          <stop offset="0.025" stopColor="#D4D5D7"></stop>
          <stop offset="0.974" stopColor="#D4D5D7"></stop>
          <stop offset="1" stopColor="#848484"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="535.696"
          x2="520"
          y1="317.895"
          y2="317.895"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#848484"></stop>
          <stop offset="0.025" stopColor="#D4D5D7"></stop>
          <stop offset="0.974" stopColor="#D4D5D7"></stop>
          <stop offset="1" stopColor="#848484"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="535.696"
          x2="520"
          y1="317.895"
          y2="317.895"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#848484"></stop>
          <stop offset="0.025" stopColor="#D4D5D7"></stop>
          <stop offset="0.974" stopColor="#D4D5D7"></stop>
          <stop offset="1" stopColor="#848484"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="535.696"
          x2="520"
          y1="317.895"
          y2="317.895"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#848484"></stop>
          <stop offset="0.025" stopColor="#D4D5D7"></stop>
          <stop offset="0.974" stopColor="#D4D5D7"></stop>
          <stop offset="1" stopColor="#848484"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="535.696"
          x2="520"
          y1="317.895"
          y2="317.895"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#848484"></stop>
          <stop offset="0.025" stopColor="#D4D5D7"></stop>
          <stop offset="0.974" stopColor="#D4D5D7"></stop>
          <stop offset="1" stopColor="#848484"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="432.264"
          x2="409.239"
          y1="390.93"
          y2="397.035"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#272728"></stop>
          <stop offset="1" stopColor="#4D4D4E"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="432.568"
          x2="410.271"
          y1="399.042"
          y2="389.809"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A2A2C"></stop>
          <stop offset="1" stopColor="#474749"></stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear"
          x1="412.359"
          x2="431.98"
          y1="371.126"
          y2="380.955"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBBCC1"></stop>
          <stop offset="1" stopColor="#E3E4E8"></stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear"
          x1="23.274"
          x2="0.249"
          y1="9.859"
          y2="15.963"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#272728"></stop>
          <stop offset="1" stopColor="#4D4D4E"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear"
          x1="157.216"
          x2="181.236"
          y1="330.624"
          y2="328.294"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A2A2C"></stop>
          <stop offset="1" stopColor="#474749"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear"
          x1="184.686"
          x2="163.052"
          y1="309.814"
          y2="313.495"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBBCC1"></stop>
          <stop offset="1" stopColor="#E3E4E8"></stop>
        </linearGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 18 -23.6842 0 531 338.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#868686"></stop>
          <stop stopColor="#BFBFBF"></stop>
          <stop offset="0.684" stopColor="#BFBEBE"></stop>
          <stop offset="1" stopColor="#7E7E7E"></stop>
        </radialGradient>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h838v596H0z"></path>
        </clipPath>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0067 0 0 .02543 -1.895 -3.2)"
            xlinkHref="#image0"
          ></use>
        </pattern>
        <filter
          id="filter0_dd"
          width="13.595"
          height="4.57"
          x="521.247"
          y="322.082"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="0.5" dy="0.5"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-0.5" dy="-0.5"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <image
          id="image0"
          width="700"
          height="700"
          data-name="lock.jpg"
          xlinkHref="data:image/jpeg;base64,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AAAAAAAAAAAAaAYAAAAAAAAAQIAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAiAAAEAIAQAQAAAAAAAUFAAAAAAAAAAAAAAAAAAAAAAAAigAAEAAAAAAAAAAAAAQmAAAAAAAAAAAAAAAAAAAAAAAAiAAAAAAAKJAAAgAAAAUUAAAAAAAAAAAAAAAAAAAAAAAAiAAAAAAgADCgABAAEAUFAAAAAAAAAAAAAAAAAAAAAAAAqIwAAAAAAAEgAAAgAAAVAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAgAAEAAAVAAAAAAAAAAAAAAAAAAAAAAAAKAAgAAAAAAAAAAAAAAAVAAAAAAAAAAAAAAAAAAAAAAAAGAAAAgAAAAAAAAAAAAwUAAAAAAAAAAAAAAAAAAAAAAAAooAAAAIAAAAAAAAAYAUFAAAAAAAAAAAAAAAAAAAAAAAAigAAAAAAAAAAAAAAEAQFAAAAAAAAAAAAAAAAAAAAAAAAgIAAEAAAAAAAAAAAAQUVAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAiIAAAAAAAAAAAAAAQAAVAAAAAAAAAAAAAAAAAAAAAAAAigAAAAAAAAAAAIAAAAU4AAAAAAAAAAAAAAAAAAAAAAAAKoAQEAAAAAAAMAAAAAERAAAAAAAAAAAAAAAAAAAAAAAACgAEAAAAAAAQAAIAAAIVAAAAAAAAAAAAAAAAAAAAAAAAooAIAAAAAAEAAAAAgkIFAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAEEIgIAEEoAEVAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAQYAAUEAE44AYVAAAAAAAAAAAAAAAAAAAAAAAAIIAEAAAAAAAgAAAQIAIVAAAAAAAAAAAAAAAAAAAAAAAAoIAgAAQAAAIAAEACGooEAAAAAAAAAAAAAAAAAAAAAAAAggAAAAAAAAAAAgIAGAAFAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAEQAAAnUZAAAAAAAAAAAAAAAAAAAAAAAAIIGAAwkYAIAAAMgoASQFAAAAAAAAAAAAAAAAAAAAAAAAI4CAwQQQggoYAgAEADoZAAAAAAAAAAAAAAAAAAAAAAAAAsBAAAQAAAAAAAAAJBAgAAAAAAAAAAAAAAAAAAAAAAAA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"
        ></image>
      </defs>
            </svg>
            <button 
                id="replay"
                onClick={next}
                >Play Again
            </button>
        </>
    )
}

export default Scene5
