import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import {useStore} from '../Store'




const Scene1 = () => {

    const next = useStore(state => state.nextScene)

    useEffect(() => {
        const rLeg = gsap.fromTo("#leg-right" , .45, {rotate: 5}, {rotate: -5, ease:'none', repeat:-1, yoyo: true});
        rLeg.progress(0.5).pause();
        rLeg.play();
        
        const lLeg = gsap.fromTo("#leg-left", .45, {rotate: -5}, {rotate: 5, ease:'none', repeat:-1, yoyo: true});
        lLeg.progress(0.5).pause();
        lLeg.play();
        
        const rLegBack = gsap.fromTo("#leg-right-back, #leg-left-back", .45, {rotate: -5}, {rotate: 5, ease:'none', repeat:-1, yoyo: true});
        rLegBack.progress(0.5).pause();
        rLegBack.play();
        
        const lLegBack = gsap.fromTo("#leg-left-back", .45, {rotate: 5}, {rotate: -5, ease:'none', repeat:-1, yoyo: true});
        lLegBack.progress(0.5).pause();
        lLegBack.play();
    
        const stopWalking = () => {
            lLegBack.pause()
            rLegBack.pause()
        }

        const tl = gsap.timeline()
            tl.to("#scene-1", {duration: 1, opacity: 1})

            // Walk up to porch 
            tl.fromTo("#guy", {duration: 3, x: -200}, {duration: 3, x: 290, ease: 'none'})
            tl.to("#guy-side", {display: "none", duration: 0})
            tl.to("#guy-back", {display: "block", duration: 0})
            //Zoom to porch
            tl.to("#scene-1", {duration: 3, attr:{viewBox: "250 250 400 200"}})
            tl.to("#guy", {duration: 3, scale:0.38 , y: -3, onComplete: stopWalking}, "-=3")

            // zoom in product 2
            tl.to("#scene-1", {duration: 2, attr:{viewBox: "470 310 20 15"}})
            tl.fromTo("#product-display-2", {display: "block", opacity: 0}, {opacity: 1})
            tl.to("#product-title-2", {duration: 0.5 ,display: "block", scale: .8, x: 4})
            tl.to("#product-info-2", {duration: 0.5, display: "block", scale: .7, x: 4})
            tl.to("#product-price-2", {duration: 0.5, display: "block", scale: .7, x: 4})
            tl.to("#product-card-2", {duration: 0.5, opacity: 0, delay: 2})
            tl.to("#product-display-2", {duration: 0.5, opacity: 0})
            
            // zoom in on product 1
            tl.to("#scene-1", 1.5, {attr:{viewBox: "460 353 20 15", delay: 1}})
            tl.fromTo("#product-display", {display: "block", opacity: 0}, {opacity: 1})
            tl.to("#product-title", {duration: 0.5, display: "block", scale: .8, x: 3})
            tl.to("#product-info", {duration: 0.5, display: "block", scale: .7, x: 3})
            tl.to("#product-price", {duration: 0.5, display: "block", scale: .7, x: 3})
            tl.to("#product-card", {duration: 0.4, opacity: 0, delay:2})
            tl.to("#product-display", {duration: 0.5, opacity: 0})

            // zoom out and fade
            tl.to("#scene-1", {duration: 3, attr:{viewBox: "250 250 400 200"}})
            tl.to("#scene-1", {duration: 0.4, opacity: 0, onComplete: next})
    }, [next])

    return (
        <svg 
            id="scene-1" 
            width="839" 
            height="596" 
            viewBox="0 0 839 596" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            title="Delivery!"
            role="img"
            alt="A package delivery to the front porch of a house"


            >
            <g id="scene-1-exterior" clipPath="url(#clip0)">
                <desc>
                    A delivery person walks along a path carrying a medium sized box with both hands continuing to the front porch of a large blue house — they stop at the front steps. Above the front door is a mounted camera. The view zooms in on a small, white,  wall-mounted camera — product information appears next to the camera that reads “Wyze Lock Keypad, Wire Free, One-touch Lock, Time-based Guest Codes, $19.99”. The view zooms back out to show the delivery person and porch and then fades to black.
                </desc>
                <path fill="url(#paint0_linear)" d="M0 0h839v596H0z" />
                <g id="scene-container">
                    <g id="bg-houses">
                        <g id="house-bg" fill="#9CADDF">
                            <g id="Rectangle 342">
                                <path
                                    d="M686.901 264.018h41.392v29.63h-41.392v-29.63zM686.901 264.018h41.392l-20.522-20.575-20.87 20.575z" />
                            </g>
                            <path id="Rectangle 361" d="M695.162 266.682h5.672v10.032h-5.672v-10.032z" stroke="#798FFF" />
                            <path id="Rectangle 362" d="M714.632 266.682h5.672v10.032h-5.672v-10.032z" stroke="#798FFF" />
                            <path id="Rectangle 567" d="M684.028 264.139l22.44-22.271 1.275 1.561-23.754 23.446.039-2.736z" />
                            <path id="Rectangle 569" d="M684.848 262.523l22.701-22.531.401.491-23.99 23.769.888-1.729z" />
                            <path id="Rectangle 570" d="M729.769 262.216l-22.206-22.187-.238.679 23.317 23.223-.873-1.715z" />
                            <path id="Rectangle 568" d="M730.634 263.936l-23.045-23.194-1.32 1.426 24.428 24.546-.063-2.778z" />
                        </g>
                        <g id="house-bg_2" fill="#9CADDF">
                            <g id="Rectangle 342_2">
                                <path
                                    d="M185.049 254.729h91.481v37.501h-91.481v-37.501zM185.049 254.729h91.481l-45.355-26.041-46.126 26.041z" />
                            </g>
                            <path id="Rectangle 361_2" d="M202.702 257.967H216.447v12.962H202.702v-12.962z" stroke="#798FFF" />
                            <path id="Rectangle 362_2" d="M245.734 257.967H259.479v12.962H245.734v-12.962z" stroke="#798FFF" />
                            <path id="Rectangle 567_2"
                                d="M178.701 254.882l49.593-28.188 2.819 1.976-52.499 29.675.087-3.463z" />
                            <path id="Rectangle 569_2" d="M180.512 252.836l50.171-28.516.887.621-53.02 30.084 1.962-2.189z" />
                            <path id="Rectangle 570_2" d="M279.793 252.448l-49.078-28.081-.527.859 51.534 29.392-1.929-2.17z" />
                            <path id="Rectangle 568_2"
                                d="M281.704 254.625l-50.932-29.356-2.916 1.805 53.988 31.067-.14-3.516z" />
                        </g>
                        <g id="house-bg_3" fill="#9CADDF">
                            <g id="Rectangle 342_3">
                                <path
                                    d="M743.391 264.136h74.767v30.65h-74.767v-30.65zM743.391 264.136h74.767l-37.069-21.282-37.698 21.282z" />
                            </g>
                            <path id="Rectangle 361_3" d="M757.909 266.875h11.052V277.286h-11.052V266.875z" stroke="#798FFF" />
                            <path id="Rectangle 362_3" d="M793.08 266.875h11.051V277.286H793.08V266.875z" stroke="#798FFF" />
                            <path id="Rectangle 567_3" d="M738.202 264.262l40.533-23.039 2.304 1.616-42.908 24.253.071-2.83z" />
                            <path id="Rectangle 569_3" d="M739.682 262.589l41.005-23.306.725.508-43.333 24.587 1.603-1.789z" />
                            <path id="Rectangle 570_3" d="M820.824 262.272l-40.111-22.95-.431.702 42.119 24.022-1.577-1.774z" />
                            <path id="Rectangle 568_3"
                                d="M822.386 264.051l-41.627-23.992-2.383 1.475 44.125 25.391-.115-2.874z" />
                        </g>
                        <g id="house-bg_4" fill="#9CADDF">
                            <g id="Rectangle 342_4">
                                <path
                                    d="M-21.876 273.406h91.482v37.501h-91.482v-37.501zM-21.876 273.406h91.482l-45.356-26.04-46.126 26.04z" />
                            </g>
                            <path id="Rectangle 361_4" d="M-4.223 276.645H9.522v12.962H-4.223v-12.962z" stroke="#798FFF" />
                            <path id="Rectangle 362_4" d="M38.81 276.645H52.554v12.962H38.809v-12.962z" stroke="#798FFF" />
                            <path id="Rectangle 567_4" d="M-28.224 273.559l49.593-28.188 2.82 1.976-52.5 29.675.087-3.463z" />
                            <path id="Rectangle 569_4" d="M-26.413 271.513l50.171-28.516.887.621-53.02 30.084 1.962-2.189z" />
                            <path id="Rectangle 570_4" d="M72.868 271.125L23.79 243.044l-.527.859 51.533 29.392-1.928-2.17z" />
                            <path id="Rectangle 568_4"
                                d="M74.779 273.302l-50.932-29.356-2.916 1.805 53.989 31.067-.141-3.516z" />
                        </g>
                        <g id="house-bg_5" fill="#9CADDF">
                            <g id="Rectangle 342_5">
                                <path
                                    d="M401.049 271.631h69.13v48.041h-69.13v-48.041zM401.049 271.631h69.13l-34.274-33.359-34.856 33.359z" />
                            </g>
                            <path id="Rectangle 361_5" d="M414.511 275.639h10.143v16.886h-10.143v-16.886z" stroke="#798FFF" />
                            <path id="Rectangle 362_5" d="M447.029 275.639h10.143v16.886h-10.143v-16.886z" stroke="#798FFF" />
                            <path id="Rectangle 567_5" d="M396.252 271.827l37.476-36.11 2.13 2.531-39.672 38.015.066-4.436z" />
                            <path id="Rectangle 569_5" d="M397.621 269.206l37.912-36.531.67.797-40.065 38.538 1.483-2.804z" />
                            <path id="Rectangle 570_5" d="M472.644 268.709l-37.087-35.973-.398 1.1 38.943 37.653-1.458-2.78z" />
                            <path id="Rectangle 568_5"
                                d="M474.088 271.498l-38.487-37.606-2.204 2.311 40.798 39.799-.107-4.504z" />
                        </g>
                        <g id="house-bg_6" fill="#9CADDF">
                            <g id="Rectangle 342_6">
                                <path
                                    d="M489.899 252.722h77.403v48.041h-77.403v-48.041zM489.899 252.722h77.403l-38.375-33.359-39.028 33.359z" />
                            </g>
                            <path id="Rectangle 361_6" d="M504.912 256.73h11.476v16.886h-11.476V256.73z" stroke="#798FFF" />
                            <path id="Rectangle 362_6" d="M541.322 256.73h11.476v16.886h-11.476V256.73z" stroke="#798FFF" />
                            <path id="Rectangle 567_6" d="M484.528 252.918l41.961-36.111 2.385 2.532-44.42 38.015.074-4.436z" />
                            <path id="Rectangle 569_6" d="M486.06 250.297l42.45-36.531.75.796-44.86 38.539 1.66-2.804z" />
                            <path id="Rectangle 570_6" d="M570.062 249.8l-41.525-35.974-.446 1.101 43.603 37.653-1.632-2.78z" />
                            <path id="Rectangle 568_6"
                                d="M571.679 252.588l-43.094-37.606-2.467 2.312 45.68 39.799-.119-4.505z" />
                        </g>
                        <g id="house-bg_7">
                            <g id="Rectangle 342_7" fill="#CD99A5">
                                <path
                                    d="M534.367 246.666h139.491v57.183H534.367v-57.183zM534.367 246.666h139.491l-69.157-39.706-70.334 39.706z" />
                            </g>
                            <path id="Rectangle 361_7" d="M561.022 251.342h21.484v20.29h-21.484v-20.29z" fill="#B1BEFF"
                                stroke="#798FFF" />
                            <path id="Rectangle 362_7" d="M626.638 251.342h21.483v20.29h-21.483v-20.29z" fill="#B1BEFF"
                                stroke="#798FFF" />
                            <path id="Rectangle 567_7" d="M524.687 246.9l75.62-42.981 4.299 3.013-80.051 45.248.132-5.28z"
                                fill="#E1E6FD" />
                            <path id="Rectangle 569_7" d="M527.449 243.78l76.501-43.482 1.352.948-80.845 45.872 2.992-3.338z"
                                fill="#534E4E" />
                            <path id="Rectangle 570_7" d="M678.832 243.189l-74.834-42.819-.803 1.31 78.579 44.817-2.942-3.308z"
                                fill="#534E4E" />
                            <path id="Rectangle 568_7" d="M681.747 246.508l-77.662-44.762-4.446 2.752 82.322 47.371-.214-5.361z"
                                fill="#E1E6FD" />
                        </g>
                        <g id="house-bg_8">
                            <g id="Rectangle 342_8" fill="#CCCD99">
                                <path d="M47.483 248.806h111.759v70.012H47.483v-70.012z" />
                                <path d="M47.483 248.806h111.759l-55.409-48.615-56.35 48.615z" />
                            </g>
                            <path id="Rectangle 361_8" d="M68.938 254.419h17.014v25.066H68.938v-25.066z" fill="#B1BEFF"
                                stroke="#798FFF" />
                            <path id="Rectangle 362_8" d="M121.509 254.419H138.522v25.066H121.509v-25.066z" fill="#B1BEFF"
                                stroke="#798FFF" />
                            <path id="Rectangle 567_8" d="M39.727 249.092l60.586-52.625 3.444 3.69-64.135 55.4.105-6.465z"
                                fill="#E1E6FD" />
                            <path id="Rectangle 569_8" d="M41.94 245.273l61.292-53.238 1.083 1.16-64.772 56.164 2.398-4.086z"
                                fill="#534E4E" />
                            <path id="Rectangle 570_8" d="M163.227 244.548l-59.956-52.425-.644 1.604 62.956 54.873-2.356-4.052z"
                                fill="#534E4E" />
                            <path id="Rectangle 568_8" d="M165.561 248.612l-62.221-54.804-3.562 3.369 65.955 58-.172-6.565z"
                                fill="#E1E6FD" />
                        </g>
                        <g id="bg-house-2">
                            <path id="Rectangle 343" fill="#879EE9" d="M260.95 219.962h158.657v89.661H260.95z" />
                            <path id="Rectangle 353" fill="#514949" d="M314.625 258.796h1.184v41.88h-1.184z" />
                            <path id="Rectangle 355" fill="#6B6791" d="M329.031 259.177h22.496v41.499h-22.496z" />
                            <path id="Rectangle 322" d="M301.404 308.481h74.592v1.142h-74.592v-1.142z" fill="#5B6FAC" />
                            <path id="Rectangle 321" d="M301.404 306.578h74.592v1.903h-74.592v-1.903z" fill="#768ED9" />
                            <path id="Rectangle 324" d="M301.404 303.722h74.592v1.904h-74.592v-1.904z" fill="#768ED9" />
                            <path id="Rectangle 326" d="M301.404 300.676h74.592v1.904h-74.592v-1.904z" fill="#768ED9" />
                            <path id="Polygon 4" d="M339.588 156l89.806 66.389H249.782L339.588 156z" fill="#7478F1" />
                            <path id="Rectangle 356" fill="#EDDDDD" d="M372.444 225.483h26.048v23.415h-26.048z" />
                            <path id="Rectangle 357" fill="#EDDDDD" d="M326.663 225.483h26.048v23.415h-26.048z" />
                            <path id="Rectangle 358" fill="#EDDDDD" d="M280.881 225.483h26.048v23.415h-26.048z" />
                            <path id="Rectangle 359" fill="#EDDDDD" d="M371.458 259.177h38.283v28.364h-38.283z" />
                            <path id="Rectangle 360" fill="#EDDDDD" d="M270.817 258.796H309.1v28.364h-38.283z" />
                            <path id="Rectangle 363" fill="#514949" d="M364.748 259.748h1.184v40.928h-1.184z" />
                            <path id="Polygon 5" d="M340.18 250.801l26.147 6.912v2.225h-52.294v-2.225l26.147-6.912z"
                                fill="#E79898" />
                            <path id="Polygon 6" fillRule="evenodd" clipRule="evenodd"
                                d="M366.327 259.938v-2.225h-52.294v2.225h52.294z" fill="#BA7A7A" />
                        </g>
                        <g id="bg-house-2_2">
                            <path id="Rectangle 343_2" fill="#EFB79E" d="M788.733 224.567h141.305v89.661H788.733z" />
                            <path id="Rectangle 353_2" fill="#514949" d="M836.538 263.401h1.055v41.88h-1.055z" />
                            <path id="Rectangle 322_2" d="M824.762 313.086h66.435v1.142h-66.435v-1.142z" fill="#5B6FAC" />
                            <path id="Rectangle 321_2" d="M824.762 311.183h66.435v1.903h-66.435v-1.903z" fill="#768ED9" />
                            <path id="Rectangle 324_2" d="M824.762 308.327h66.435v1.904h-66.435v-1.904z" fill="#768ED9" />
                            <path id="Rectangle 326_2" d="M824.762 305.281h66.435v1.904h-66.435v-1.904z" fill="#768ED9" />
                            <path id="Polygon 4_2" d="M858.77 160.605l79.985 66.389H778.786l79.984-66.389z" fill="#7C483D" />
                            <path id="Rectangle 358_2" fill="#EDDDDD" d="M808.941 230.068h22.682v23.391h-22.682z" />
                            <path id="Rectangle 360_2" fill="#EDDDDD" d="M801.853 263.383h29.77v28.352h-29.77z" />
                            <path id="Polygon 5_2" d="M859.298 255.406l23.287 6.912v2.225H836.01v-2.225l23.288-6.912z"
                                fill="#423B3B" />
                            <path id="Polygon 6_2" fillRule="evenodd" clipRule="evenodd"
                                d="M882.585 264.543v-2.225H836.01v2.225h46.575z" fill="#EDE764" />
                        </g>
                        <path id="grass"
                            d="M435.406 291.318C338.92 260.462 51.92 280.04-18.221 292.897v233.191H1244.27c.52-82.456 1.24-247.655 0-248.798-101.77-8.344-391.608-9.397-516.35 15.607-137.548-30.794-293.283-1.579-292.514-1.579z"
                            fill="#8DCAAD" />
                    </g>
                </g>
                <g id="foreground">
                    <g id="sidewalk">
                        <path id="Rectangle 59" d="M-23 526h862v69H-23v-69z" fill="#AFB6D7" />
                        <path id="Vector 13" d="M477.484 528.26l-7.24 66.958" stroke="#868DB3" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Vector 14" d="M320.543 528.521l-7.24 66.958" stroke="#868DB3" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Vector 15" d="M163.601 528.781l-7.239 66.958" stroke="#868DB3" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Vector 16" d="M6.66 529.042L-.58 596" stroke="#868DB3" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                        <path id="Vector 17" d="M626.952 528.521l-7.24 66.958" stroke="#868DB3" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Vector 18" d="M774.085 528l-7.24 66.958" stroke="#868DB3" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <g id="house-main">
                        <path id="house-interior" fill="#FFDADA" d="M324.966 131.152h256.081v277.561H324.966z" />
                        <g id="lattice" fill="#C4C4C4">
                            <path
                                d="M638.13 420.864l1.583 2.845v-2.845h-1.583zM637.972 430.777l1.752 4.248v-7.396l-1.752 3.148z" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M514.662 423.86l-1.735-2.996h-2.523l-1.548 2.782-1.605-2.782h-2.208l2.733 4.72-5.256 9.441h2.208l4.155-7.529 1.837 3.172-2.523 4.357h2.207l1.417-2.455 1.422 2.455h2.523l1.549-2.781 1.604 2.781h2.208l1.773-3.073 1.696 3.073h2.208l1.605-2.781 1.548 2.781h2.523l1.453-2.509 1.386 2.509h2.838l1.451-2.514 1.387 2.514h2.839l1.731-3.001 1.738 3.001h2.523l1.267-2.275 1.256 2.275h2.207l1.773-3.073 1.696 3.073h2.839l1.416-2.455 1.422 2.455h2.523l1.267-2.275 1.256 2.275h3.469l1.451-2.514 1.387 2.514h2.839l1.731-3.001 1.738 3.001h2.523l1.267-2.275 1.256 2.275h2.838l1.451-2.514 1.387 2.514h2.839l1.731-3.001 1.738 3.001h2.523l1.267-2.275 1.256 2.275h3.469l1.128-1.955 1.079 1.955h3.47l1.416-2.455 1.422 2.455h2.523l1.583-2.844 1.571 2.844h2.838l1.45-2.514 1.388 2.514h2.839l1.731-3.001 1.738 3.001h2.523l1.267-2.275 1.256 2.275h1.594l-1.752-4.248 1.752-3.148-.011-3.92-1.583-2.845h-2.523l-1.608 2.777-1.546-2.777h-2.523l-1.422 2.455-1.416-2.455h-3.469l-1.256 2.276-1.267-2.276h-2.523l-1.608 2.777-1.546-2.777H612.9l-1.738 3.001-1.731-3.001h-2.839l-1.57 2.845-1.583-2.845h-2.523l-1.608 2.777-1.546-2.777h-2.523l-1.421 2.455-1.417-2.455h-2.839l-1.57 2.845-1.583-2.845h-2.523l-1.608 2.777-1.546-2.777h-2.523l-1.422 2.455-1.416-2.455h-3.469l-1.256 2.276-1.267-2.276h-2.523l-1.929 3.332-1.856-3.332h-2.523l-1.421 2.455-1.417-2.455h-2.208l-1.57 2.845-1.583-2.845h-2.523l-1.608 2.777-1.546-2.777h-2.523l-1.422 2.455-1.416-2.455h-2.839l-1.604 2.782-1.549-2.782h-2.523l-1.608 2.777-1.546-2.777h-2.523l-1.453 2.51-1.385-2.51h-2.839l-1.256 2.276-1.267-2.276h-2.523l-1.734 2.996zm0 3.786l1.552 2.691-1.71 3.099-1.591-2.758 1.749-3.032zm116.529-5.192l1.706 3.09-1.555 2.686-1.742-3.018 1.591-2.758zm1.247 7.677l1.529-2.648 1.831 3.319-1.453 2.634-1.907-3.305zm-5.932.444l1.997-3.461 1.742 3.009-2.034 3.514-1.705-3.062zm8.566-5.008l1.796-3.113 1.769 3.205-1.75 3.17-1.815-3.262zm-10.758 4.996l-1.78 3.074-1.908-3.427 1.754-3.15 1.934 3.503zm1.114-1.924l-1.963-3.527 1.901-3.415 2.041 3.524-1.979 3.418zm-9.561-3.095l-1.706-3.09-1.906 3.304 1.741 3.018 1.871-3.232zm-.774 5.134l1.844-3.195 1.516 2.747-1.769 3.206-1.591-2.758zm-3.935-3.019l-2.003 3.472 1.704 3.061 2.041-3.524-1.742-3.009zm6.884-2.092l1.796-3.113 1.453 2.633-1.75 3.173-1.499-2.693zm-11.081 5.554l-1.778 3.071-1.902-3.415 1.753-3.148 1.927 3.492zm1.116-1.927l-1.958-3.515 1.908-3.427 2.035 3.514-1.985 3.428zm-9.871-3.65l-1.705-3.09-1.592 2.758 1.742 3.018 1.555-2.686zm-.458 4.587l1.528-2.648 1.832 3.319-1.454 2.634-1.906-3.305zm-3.936-3.017l-1.997 3.461 1.705 3.062 2.035-3.514-1.743-3.009zm6.569-1.547l1.796-3.113 1.769 3.205-1.749 3.17-1.816-3.262zm-10.758 4.997l-1.78 3.073-1.592-2.86 1.752-3.148 1.62 2.935zm1.114-1.925l-1.648-2.96 1.908-3.427 1.719 2.969-1.979 3.418zm-9.561-3.095l-1.705-3.09-1.592 2.758 1.742 3.018 1.555-2.686zm-.458 4.587l1.528-2.648 1.832 3.319-1.454 2.634-1.906-3.305zm-3.936-3.017l-1.997 3.461 1.705 3.062 2.034-3.514-1.742-3.009zm6.569-1.547l1.796-3.113 1.769 3.205-1.749 3.17-1.816-3.262zm-10.758 4.996l-2.101 3.629-1.902-3.415 2.07-3.717 1.933 3.503zm1.114-1.924l-1.963-3.527 1.901-3.415 2.041 3.524-1.979 3.418zm-9.884-2.537l-2.013-3.648-1.591 2.758 2.056 3.564 1.548-2.674zm-.451 4.576l1.521-2.637 1.524 2.761-1.453 2.634-1.592-2.758zm-4.251-3.564l-1.676 2.904 2.015 3.619 1.719-2.969-2.058-3.554zm6.879-.99l2.117-3.67 1.454 2.633-2.065 3.742-1.506-2.705zm-10.745 3.882l-1.781 3.076-1.283-2.305 1.752-3.148 1.312 2.377zm1.113-1.923l-1.339-2.404 1.599-2.871 1.397 2.413-1.657 2.862zm-9.252-2.539l-1.705-3.09-1.592 2.758 1.742 3.018 1.555-2.686zm-.458 4.587l1.528-2.648 1.832 3.319-1.454 2.634-1.906-3.305zm-3.936-3.017l-1.997 3.461 1.705 3.062 2.034-3.514-1.742-3.009zm6.569-1.547l1.796-3.113 1.769 3.205-1.749 3.17-1.816-3.262zm-10.758 4.997l-1.78 3.073-1.7-3.054 1.787-3.087 1.693 3.068zm1.114-1.925l-1.7-3.055 1.945-3.359 1.734 2.996-1.979 3.418zm-22.36-.246l1.824-3.306-1.453-2.633-1.902 3.296 1.531 2.643zm2.913-1.333l-1.806 3.245 1.629 2.814 1.803-3.113-1.626-2.946zm3.816 2.958l1.705 3.064 1.608-2.777-1.708-3.069-1.605 2.782zm-1.077-1.935l-1.654-2.971 1.577-2.832 1.685 3.027-1.608 2.776zm-11.123.692l-1.86-3.223 1.71-3.098 1.901 3.296-1.751 3.025zm18.27-3.231l-1.705-3.09-1.648 2.854 1.703 3.085 1.65-2.849zm-.577 4.793l1.647-2.855 1.71 3.099-1.647 2.855-1.71-3.099zm2.752-4.77l1.796-3.113 1.71 3.098-1.789 3.101-1.717-3.086z" />
                        </g>
                        <g id="lattice_2" fill="#C4C4C4">
                            <path
                                d="M266.325 420.864l-1.583 2.845v-2.845h1.583zM266.483 430.777l-1.752 4.248v-7.396l1.752 3.148z" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M389.793 423.86l1.735-2.996h2.523l1.548 2.782 1.605-2.782h2.208l-2.733 4.72 5.256 9.441h-2.208l-4.155-7.529-1.837 3.172 2.523 4.357h-2.207l-1.417-2.455-1.422 2.455h-2.523l-1.549-2.781-1.604 2.781h-2.208l-1.773-3.073-1.696 3.073h-2.208l-1.605-2.781-1.548 2.781h-2.523l-1.453-2.509-1.386 2.509h-2.838l-1.451-2.514-1.387 2.514h-2.839l-1.731-3.001-1.738 3.001h-2.523l-1.267-2.275-1.256 2.275h-2.207l-1.773-3.073-1.696 3.073h-2.839l-1.416-2.455-1.422 2.455h-2.523l-1.267-2.275-1.256 2.275h-3.469l-1.451-2.514-1.387 2.514h-2.839l-1.731-3.001-1.738 3.001h-2.523l-1.267-2.275-1.256 2.275h-2.838l-1.451-2.514-1.387 2.514h-2.839l-1.731-3.001-1.738 3.001h-2.523l-1.267-2.275-1.256 2.275h-3.469l-1.128-1.955-1.08 1.955h-3.469l-1.416-2.455-1.422 2.455h-2.523l-1.584-2.844-1.57 2.844h-2.838l-1.451-2.514-1.387 2.514h-2.839l-1.731-3.001-1.738 3.001h-2.523l-1.267-2.275-1.256 2.275h-1.594l1.752-4.248-1.752-3.148.011-3.92 1.583-2.845h2.523l1.608 2.777 1.546-2.777h2.523l1.422 2.455 1.416-2.455h3.469l1.256 2.276 1.267-2.276h2.523l1.608 2.777 1.546-2.777h2.523l1.738 3.001 1.731-3.001h2.838l1.571 2.845 1.583-2.845h2.523l1.608 2.777 1.546-2.777h2.523l1.421 2.455 1.417-2.455h2.838l1.571 2.845 1.583-2.845h2.523l1.608 2.777 1.546-2.777h2.523l1.421 2.455 1.417-2.455h3.469l1.256 2.276 1.267-2.276h2.523l1.929 3.332 1.856-3.332h2.523l1.421 2.455 1.417-2.455h2.208l1.57 2.845 1.583-2.845h2.523l1.608 2.777 1.546-2.777h2.523l1.422 2.455 1.416-2.455h2.839l1.604 2.782 1.549-2.782h2.523l1.608 2.777 1.546-2.777h2.523l1.453 2.51 1.385-2.51h2.839l1.256 2.276 1.267-2.276h2.523l1.734 2.996zm0 3.786l-1.552 2.691 1.71 3.099 1.591-2.758-1.749-3.032zm-116.529-5.192l-1.706 3.09 1.555 2.686 1.742-3.018-1.591-2.758zm-1.247 7.677l-1.529-2.648-1.832 3.319 1.454 2.634 1.907-3.305zm5.932.444l-1.997-3.461-1.742 3.009 2.034 3.514 1.705-3.062zm-8.566-5.008l-1.796-3.113-1.769 3.205 1.749 3.17 1.816-3.262zm10.758 4.996l1.78 3.074 1.907-3.427-1.753-3.15-1.934 3.503zm-1.114-1.924l1.963-3.527-1.901-3.415-2.041 3.524 1.979 3.418zm9.561-3.095l1.706-3.09 1.906 3.304-1.741 3.018-1.871-3.232zm.774 5.134l-1.844-3.195-1.516 2.747 1.769 3.206 1.591-2.758zm3.935-3.019l2.003 3.472-1.704 3.061-2.041-3.524 1.742-3.009zm-6.884-2.092l-1.796-3.113-1.453 2.633 1.75 3.173 1.499-2.693zm11.081 5.554l1.778 3.071 1.902-3.415-1.753-3.148-1.927 3.492zm-1.116-1.927l1.958-3.515-1.908-3.427-2.035 3.514 1.985 3.428zm9.871-3.65l1.705-3.09 1.592 2.758-1.742 3.018-1.555-2.686zm.458 4.587l-1.528-2.648-1.832 3.319 1.454 2.634 1.906-3.305zm3.936-3.017l1.997 3.461-1.705 3.062-2.035-3.514 1.743-3.009zm-6.569-1.547l-1.796-3.113-1.769 3.205 1.749 3.17 1.816-3.262zm10.758 4.997l1.78 3.073 1.592-2.86-1.753-3.148-1.619 2.935zm-1.114-1.925l1.648-2.96-1.908-3.427-1.719 2.969 1.979 3.418zm9.561-3.095l1.705-3.09 1.592 2.758-1.742 3.018-1.555-2.686zm.458 4.587l-1.528-2.648-1.832 3.319 1.454 2.634 1.906-3.305zm3.936-3.017l1.997 3.461-1.705 3.062-2.035-3.514 1.743-3.009zm-6.569-1.547l-1.796-3.113-1.769 3.205 1.749 3.17 1.816-3.262zm10.758 4.996l2.101 3.629 1.902-3.415-2.07-3.717-1.933 3.503zm-1.114-1.924l1.963-3.527-1.902-3.415-2.04 3.524 1.979 3.418zm9.884-2.537l2.013-3.648 1.591 2.758-2.056 3.564-1.548-2.674zm.451 4.576l-1.521-2.637-1.524 2.761 1.453 2.634 1.592-2.758zm4.251-3.564l1.675 2.904-2.014 3.619-1.719-2.969 2.058-3.554zm-6.879-.99l-2.117-3.67-1.454 2.633 2.065 3.742 1.506-2.705zm10.745 3.882l1.781 3.076 1.283-2.305-1.752-3.148-1.312 2.377zm-1.113-1.923l1.339-2.404-1.599-2.871-1.397 2.413 1.657 2.862zm9.252-2.539l1.705-3.09 1.592 2.758-1.742 3.018-1.555-2.686zm.458 4.587l-1.528-2.648-1.832 3.319 1.454 2.634 1.906-3.305zm3.936-3.017l1.997 3.461-1.705 3.062-2.034-3.514 1.742-3.009zm-6.569-1.547l-1.796-3.113-1.769 3.205 1.749 3.17 1.816-3.262zm10.758 4.997l1.78 3.073 1.7-3.054-1.787-3.087-1.693 3.068zm-1.114-1.925l1.7-3.055-1.945-3.359-1.734 2.996 1.979 3.418zm22.36-.246l-1.824-3.306 1.453-2.633 1.902 3.296-1.531 2.643zm-2.913-1.333l1.806 3.245-1.629 2.814-1.803-3.113 1.626-2.946zm-3.816 2.958l-1.705 3.064-1.608-2.777 1.708-3.069 1.605 2.782zm1.077-1.935l1.654-2.971-1.577-2.832-1.685 3.027 1.608 2.776zm11.123.692l1.86-3.223-1.71-3.098-1.901 3.296 1.751 3.025zm-18.27-3.231l1.705-3.09 1.647 2.854-1.702 3.085-1.65-2.849zm.577 4.793l-1.647-2.855-1.71 3.099 1.647 2.855 1.71-3.099zm-2.752-4.77l-1.796-3.113-1.71 3.098 1.789 3.101 1.717-3.086z" />
                        </g>
                        <g id="railing-side">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M631.191 406.794v-26.221h-1.892v26.221h1.892zm-5.676-26.221h1.892v26.221h-1.892v-26.221zm-1.893 26.221v-26.221h-1.892v26.221h1.892zm-5.676-26.221h1.892v26.221h-1.892v-26.221zm-1.892 26.221v-26.221h-1.893v26.221h1.893zm-5.677-26.221h1.892v26.221h-1.892v-26.221zm-1.892 26.221v-26.221h-1.893v26.221h1.893zm-5.677-26.221h1.892v26.221h-1.892v-26.221zm-1.892 26.221v-26.221h-1.892v26.221h1.892zm-5.677-26.221h1.892v26.221h-1.892v-26.221zm-1.892 26.221v-26.221h-1.892v26.221h1.892zm-5.677-26.221h1.892v26.221h-1.892v-26.221z"
                                fill="url(#paint1_linear)" />
                            <path d="M583.886 380.573H633.714v-3.198h-49.828v3.198z" fill="url(#paint2_linear)" />
                            <path d="M583.886 406.794v3.198h49.828v-3.198H583.886z" fill="url(#paint3_linear)" />
                        </g>
                        <g id="railing-side_2">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M321.497 406.154v-26.221h-1.892v26.221h1.892zm-5.676-26.221h1.892v26.221h-1.892v-26.221zm-1.893 26.221v-26.221h-1.892v26.221h1.892zm-5.676-26.221h1.892v26.221h-1.892v-26.221zm-1.892 26.221v-26.221h-1.893v26.221h1.893zm-5.677-26.221h1.892v26.221h-1.892v-26.221zm-1.892 26.221v-26.221h-1.893v26.221h1.893zm-5.677-26.221h1.892v26.221h-1.892v-26.221zm-1.892 26.221v-26.221h-1.892v26.221h1.892zm-5.677-26.221h1.892v26.221h-1.892v-26.221zm-1.892 26.221v-26.221h-1.892v26.221h1.892zm-5.677-26.221h1.892v26.221h-1.892v-26.221z"
                                fill="url(#paint4_linear)" />
                            <path d="M274.192 379.933H324.02v-3.198h-49.828v3.198z" fill="url(#paint5_linear)" />
                            <path d="M274.192 406.154v3.198h49.828v-3.198H274.192z" fill="url(#paint6_linear)" />
                        </g>
                        <g id="Rectangle 571" fill="#C8D7F4">
                            <path
                                d="M264.731 415.747h375.291v5.756H264.731v-5.756zM264.731 415.747h375.291l-51.721-21.424H325.597l-60.866 21.424z" />
                        </g>
                        <path id="porch-ceiling" d="M580.417 309.584l59.605-18.547h-59.605v18.547z" fill="#A8B5CE" />
                        <path id="porch-ceiling_2" d="M562.44 154.175l59.606-18.546H562.44v18.546z" fill="#A8B5CE" />
                        <path id="porch-ceiling_3" d="M345.781 154.175l-59.605-18.546h59.605v18.546z" fill="#A8B5CE" />
                        <path id="porch-ceiling_4" d="M325.597 309.584l-59.605-18.547h59.605v18.547z" fill="#A8B5CE" />
                        <g id="siding">
                            <path id="Rectangle 387" fill="url(#paint7_linear)" d="M318.344 231.56h269.327v5.756H318.344z" />
                            <path id="Rectangle 388" fill="url(#paint8_linear)" d="M318.344 237.315h269.327v5.756H318.344z" />
                            <path id="Rectangle 389" fill="url(#paint9_linear)" d="M318.344 243.071h269.327v5.756H318.344z" />
                            <path id="Rectangle 390" fill="url(#paint10_linear)" d="M318.344 248.827h269.327v5.756H318.344z" />
                            <path id="Rectangle 391" fill="url(#paint11_linear)" d="M318.344 254.583h269.327v5.756H318.344z" />
                            <path id="Rectangle 392" fill="url(#paint12_linear)" d="M318.344 260.339h269.327v5.756H318.344z" />
                            <path id="Rectangle 393" fill="url(#paint13_linear)" d="M318.344 266.095h269.327v5.756H318.344z" />
                            <path id="Rectangle 394" fill="url(#paint14_linear)" d="M318.344 271.851h269.327v5.756H318.344z" />
                            <path id="Rectangle 395" fill="url(#paint15_linear)" d="M318.344 277.607h269.327v5.756H318.344z" />
                            <path id="Rectangle 396" fill="url(#paint16_linear)" d="M318.344 283.363h269.327v5.756H318.344z" />
                            <path id="Rectangle 397" fill="url(#paint17_linear)" d="M318.344 289.118h269.327v5.756H318.344z" />
                            <path id="Rectangle 398" fill="url(#paint18_linear)" d="M318.344 294.874h269.327v5.756H318.344z" />
                            <path id="Rectangle 399" fill="url(#paint19_linear)" d="M318.344 300.63h269.327v5.756H318.344z" />
                            <path id="Rectangle 400" fill="url(#paint20_linear)" d="M318.344 306.386h269.327v5.756H318.344z" />
                            <path id="Rectangle 401" fill="url(#paint21_linear)" d="M388.356 312.142h45.413v5.756h-45.413z" />
                            <path id="Rectangle 426" fill="url(#paint22_linear)" d="M324.651 312.142h29.645v5.756h-29.645z" />
                            <path id="Rectangle 427" fill="url(#paint23_linear)" d="M324.651 317.898h29.645v5.756h-29.645z" />
                            <path id="Rectangle 428" fill="url(#paint24_linear)" d="M324.651 323.654h29.645v5.756h-29.645z" />
                            <path id="Rectangle 429" fill="url(#paint25_linear)" d="M324.651 329.409h29.645v5.756h-29.645z" />
                            <path id="Rectangle 430" fill="url(#paint26_linear)" d="M324.651 335.165h29.645v5.756h-29.645z" />
                            <path id="Rectangle 431" fill="url(#paint27_linear)" d="M324.651 340.921h29.645v5.756h-29.645z" />
                            <path id="Rectangle 432" fill="url(#paint28_linear)" d="M324.651 346.677h29.645v5.756h-29.645z" />
                            <path id="Rectangle 433" fill="url(#paint29_linear)" d="M324.651 352.433h29.645v5.756h-29.645z" />
                            <path id="Rectangle 434" fill="url(#paint30_linear)" d="M324.651 358.189h29.645v5.756h-29.645z" />
                            <path id="Rectangle 435" fill="url(#paint31_linear)" d="M324.651 363.945h29.645v5.756h-29.645z" />
                            <path id="Rectangle 436" fill="url(#paint32_linear)" d="M324.651 369.7h29.645v5.756h-29.645z" />
                            <path id="Rectangle 402" fill="url(#paint33_linear)" d="M477.291 317.898h42.26v5.756h-42.26z" />
                            <path id="Rectangle 447" fill="url(#paint34_linear)" d="M477.291 312.142h42.26v5.756h-42.26z" />
                            <path id="Rectangle 425" fill="url(#paint35_linear)" d="M388.356 317.898h44.783v5.756h-44.783z" />
                            <path id="Rectangle 403" fill="url(#paint36_linear)" d="M477.291 323.654h42.26v5.756h-42.26z" />
                            <path id="Rectangle 448" fill="url(#paint37_linear)" d="M551.718 312.142h34.06v5.756h-34.06z" />
                            <path id="Rectangle 449" fill="url(#paint38_linear)" d="M551.718 317.898h34.06v5.756h-34.06z" />
                            <path id="Rectangle 450" fill="url(#paint39_linear)" d="M551.718 323.654h34.06v5.756h-34.06z" />
                            <path id="Rectangle 451" fill="url(#paint40_linear)" d="M551.718 329.409h34.06v5.756h-34.06z" />
                            <path id="Rectangle 452" fill="url(#paint41_linear)" d="M551.718 335.165h34.06v5.756h-34.06z" />
                            <path id="Rectangle 453" fill="url(#paint42_linear)" d="M551.718 340.921h34.06v5.756h-34.06z" />
                            <path id="Rectangle 454" fill="url(#paint43_linear)" d="M551.718 346.677h34.06v5.756h-34.06z" />
                            <path id="Rectangle 455" fill="url(#paint44_linear)" d="M551.718 352.433h34.06v5.756h-34.06z" />
                            <path id="Rectangle 456" fill="url(#paint45_linear)" d="M551.718 358.189h34.06v5.756h-34.06z" />
                            <path id="Rectangle 457" fill="url(#paint46_linear)" d="M551.718 363.945h34.06v5.756h-34.06z" />
                            <path id="Rectangle 458" fill="url(#paint47_linear)" d="M551.718 369.7h34.06v5.756h-34.06z" />
                            <path id="Rectangle 459" fill="url(#paint48_linear)" d="M519.55 375.456h66.228v5.756H519.55z" />
                            <path id="Rectangle 424" fill="url(#paint49_linear)" d="M388.356 323.654h44.783v5.756h-44.783z" />
                            <path id="Rectangle 404" fill="url(#paint50_linear)" d="M477.291 329.409h42.26v5.756h-42.26z" />
                            <path id="Rectangle 423" fill="url(#paint51_linear)" d="M388.356 329.409h44.783v5.756h-44.783z" />
                            <path id="Rectangle 405" fill="url(#paint52_linear)" d="M388.356 335.165h44.783v5.756h-44.783z" />
                            <path id="Rectangle 420" fill="url(#paint53_linear)" d="M477.291 335.165h42.26v5.756h-42.26z" />
                            <path id="Rectangle 406" fill="url(#paint54_linear)" d="M388.356 340.921h44.783v5.756h-44.783z" />
                            <path id="Rectangle 419" fill="url(#paint55_linear)" d="M477.291 340.921h42.26v5.756h-42.26z" />
                            <path id="Rectangle 407" fill="url(#paint56_linear)" d="M388.356 346.677h44.783v5.756h-44.783z" />
                            <path id="Rectangle 421" fill="url(#paint57_linear)" d="M477.291 346.677h42.26v5.756h-42.26z" />
                            <path id="Rectangle 408" fill="url(#paint58_linear)" d="M388.356 352.433h44.783v5.756h-44.783z" />
                            <path id="Rectangle 437" fill="url(#paint59_linear)" d="M388.356 358.189h44.783v5.756h-44.783z" />
                            <path id="Rectangle 438" fill="url(#paint60_linear)" d="M388.356 363.945h44.783v5.756h-44.783z" />
                            <path id="Rectangle 439" fill="url(#paint61_linear)" d="M388.356 369.7h44.783v5.756h-44.783z" />
                            <path id="Rectangle 440" fill="url(#paint62_linear)" d="M324.02 375.456h109.118v5.756H324.02z" />
                            <path id="Rectangle 441" fill="url(#paint63_linear)" d="M324.02 381.212h109.118v5.756H324.02z" />
                            <path id="Rectangle 442" fill="url(#paint64_linear)" d="M324.02 386.968h109.118v5.756H324.02z" />
                            <path id="Rectangle 443" fill="url(#paint65_linear)" d="M324.02 392.724h109.118v5.756H324.02z" />
                            <path id="Rectangle 444" fill="url(#paint66_linear)" d="M324.02 398.48h109.118v5.756H324.02z" />
                            <path id="Rectangle 446" fill="url(#paint67_linear)" d="M324.651 404.236h109.118v5.756H324.651z" />
                            <path id="Rectangle 422" fill="url(#paint68_linear)" d="M477.291 352.433h42.26v5.756h-42.26z" />
                            <path id="Rectangle 409" fill="url(#paint69_linear)" d="M477.291 358.189h42.26v5.756h-42.26z" />
                            <path id="Rectangle 410" fill="url(#paint70_linear)" d="M477.291 363.945h42.26v5.756h-42.26z" />
                            <path id="Rectangle 411" fill="url(#paint71_linear)" d="M477.291 369.7h42.26v5.756h-42.26z" />
                            <path id="Rectangle 412" fill="url(#paint72_linear)" d="M477.291 375.456h42.26v5.756h-42.26z" />
                            <path id="Rectangle 413" fill="url(#paint73_linear)" d="M477.291 381.212h110.38v5.756h-110.38z" />
                            <path id="Rectangle 414" fill="url(#paint74_linear)" d="M477.291 386.968h110.38v5.756h-110.38z" />
                            <path id="Rectangle 415" fill="url(#paint75_linear)" d="M477.291 392.724h110.38v5.756h-110.38z" />
                            <path id="Rectangle 416" fill="url(#paint76_linear)" d="M477.291 398.48h110.38v5.756h-110.38z" />
                            <path id="Rectangle 417" fill="url(#paint77_linear)" d="M477.291 404.236h110.38v5.756h-110.38z" />
                            <path id="Rectangle 445" fill="url(#paint78_linear)" d="M477.291 409.991h110.38v5.756h-110.38z" />
                            <path id="Rectangle 379" fill="url(#paint79_linear)" d="M320.236 185.513h34.06v5.756h-34.06z" />
                            <path id="Rectangle 483" fill="url(#paint80_linear)" d="M320.236 179.757h34.06v5.756h-34.06z" />
                            <path id="Rectangle 486" fill="url(#paint81_linear)" d="M320.236 174.001h34.06v5.756h-34.06z" />
                            <path id="Rectangle 489" fill="url(#paint82_linear)" d="M320.236 168.245h34.06v5.756h-34.06z" />
                            <path id="Rectangle 492" fill="url(#paint83_linear)" d="M320.236 162.489h263.65v5.756h-263.65z" />
                            <path id="Rectangle 493" fill="url(#paint84_linear)" d="M320.236 157.373h263.65v5.756h-263.65z" />
                            <path id="Rectangle 494" fill="url(#paint85_linear)" d="M320.236 152.257h263.65v5.756h-263.65z" />
                            <path id="Rectangle 495" fill="url(#paint86_linear)" d="M320.236 147.14h263.65v5.756h-263.65z" />
                            <path id="Rectangle 496" fill="url(#paint87_linear)" d="M320.236 142.024h263.65v5.756h-263.65z" />
                            <path id="Rectangle 497" fill="url(#paint88_linear)" d="M320.236 136.908h263.65v5.756h-263.65z" />
                            <path id="Rectangle 498" fill="url(#paint89_linear)" d="M320.236 131.791h263.65v5.756h-263.65z" />
                            <path id="Rectangle 462" fill="url(#paint90_linear)" d="M320.236 191.269h34.06v5.756h-34.06z" />
                            <path id="Rectangle 465" fill="url(#paint91_linear)" d="M320.236 197.024h34.06v5.756h-34.06z" />
                            <path id="Rectangle 468" fill="url(#paint92_linear)" d="M320.236 202.78h34.06v5.756h-34.06z" />
                            <path id="Rectangle 471" fill="url(#paint93_linear)" d="M320.236 208.536h34.06v5.756h-34.06z" />
                            <path id="Rectangle 474" fill="url(#paint94_linear)" d="M320.236 214.292h34.06v5.756h-34.06z" />
                            <path id="Rectangle 477" fill="url(#paint95_linear)" d="M320.236 220.048h34.06v5.756h-34.06z" />
                            <path id="Rectangle 480" fill="url(#paint96_linear)" d="M320.236 225.804h34.06v5.756h-34.06z" />
                            <path id="Rectangle 460" fill="url(#paint97_linear)" d="M551.718 185.513h32.168v5.756h-32.168z" />
                            <path id="Rectangle 484" fill="url(#paint98_linear)" d="M551.718 179.757h32.168v5.756h-32.168z" />
                            <path id="Rectangle 487" fill="url(#paint99_linear)" d="M551.718 174.001h32.168v5.756h-32.168z" />
                            <path id="Rectangle 490" fill="url(#paint100_linear)" d="M551.718 168.245h32.168v5.756h-32.168z" />
                            <path id="Rectangle 463" fill="url(#paint101_linear)" d="M551.718 191.269h32.168v5.756h-32.168z" />
                            <path id="Rectangle 466" fill="url(#paint102_linear)" d="M551.718 197.024h32.168v5.756h-32.168z" />
                            <path id="Rectangle 469" fill="url(#paint103_linear)" d="M551.718 202.78h32.168v5.756h-32.168z" />
                            <path id="Rectangle 472" fill="url(#paint104_linear)" d="M551.718 208.536h32.168v5.756h-32.168z" />
                            <path id="Rectangle 475" fill="url(#paint105_linear)" d="M551.718 214.292h32.168v5.756h-32.168z" />
                            <path id="Rectangle 478" fill="url(#paint106_linear)" d="M551.718 220.048h32.168v5.756h-32.168z" />
                            <path id="Rectangle 481" fill="url(#paint107_linear)" d="M551.718 225.804h32.168v5.756h-32.168z" />
                            <path id="Rectangle 461" fill="url(#paint108_linear)" d="M416.109 185.513h74.427v5.756h-74.427z" />
                            <path id="Rectangle 485" fill="url(#paint109_linear)" d="M416.109 179.757h74.427v5.756h-74.427z" />
                            <path id="Rectangle 488" fill="url(#paint110_linear)" d="M416.109 174.001h74.427v5.756h-74.427z" />
                            <path id="Rectangle 491" fill="url(#paint111_linear)" d="M416.109 168.245h74.427v5.756h-74.427z" />
                            <path id="Rectangle 464" fill="url(#paint112_linear)" d="M416.109 191.269h74.427v5.756h-74.427z" />
                            <path id="Rectangle 467" fill="url(#paint113_linear)" d="M416.109 197.024h74.427v5.756h-74.427z" />
                            <path id="Rectangle 470" fill="url(#paint114_linear)" d="M416.109 202.78h74.427v5.756h-74.427z" />
                            <path id="Rectangle 473" fill="url(#paint115_linear)" d="M416.109 208.536h74.427v5.756h-74.427z" />
                            <path id="Rectangle 476" fill="url(#paint116_linear)" d="M416.109 214.292h74.427v5.756h-74.427z" />
                            <path id="Rectangle 479" fill="url(#paint117_linear)" d="M416.109 220.048h74.427v5.756h-74.427z" />
                            <path id="Rectangle 482" fill="url(#paint118_linear)" d="M416.109 225.804h74.427v5.756h-74.427z" />
                            <path id="Rectangle 418" fill="url(#paint119_linear)" d="M318.344 409.991h114.795v5.756H318.344z" />
                        </g>
                        <g id="trim" fill="#B6C3DD">
                            <path id="Rectangle 572" d="M318.344 135.629h7.569v280.119h-7.569z" />
                            <path id="Rectangle 573" d="M580.101 135.629h7.569v280.119h-7.569z" />
                            <path id="Rectangle 574" transform="matrix(0 -1 -1 0 427.462 415.747)" d="M0 0h7.674v101.549H0z" />
                            <path id="Rectangle 575" transform="matrix(0 -1 -1 0 580.732 415.747)" d="M0 0h7.674v102.18H0z" />
                        </g>
                        <g id="porch-roof">
                            <path id="Polygon 13"
                                d="M408.018 243.071h88.826l148.855 27.203v9.891H260.315v-9.891l147.703-27.203z"
                                fill="#585252" />
                            <path id="Rectangle 576" d="M260 280.165h385.383l-5.361 5.116H264.731L260 280.165z"
                                fill="#B6C3DD" />
                            <path id="Rectangle 578" fill="#C8D7F4" d="M264.731 285.281h375.291v5.756H264.731z" />
                            <g id="roof">
                                <path id="Polygon 14" d="M433.769 64h38.791l154.847 61.396H282.391L433.769 64z"
                                    fill="#585252" />
                                <path id="Rectangle 577" d="M281.761 125.396h345.015l-4.799 4.477H285.996l-4.235-4.477z"
                                    fill="#B6C3DD" />
                                <path id="Rectangle 579" fill="#C8D7F4" d="M286.176 129.873h335.555v5.756H286.176z" />
                            </g>
                        </g>
                        <g id="columns" fill="#DAE0EB">
                            <path id="column"
                                d="M264.731 291.037h15.137v1.949h-1.261v1.948h-1.262V411.85h1.262v1.949h1.261v1.948h-15.137v-1.948h1.261v-1.949h1.262V294.934h-1.262v-1.948h-1.261v-1.949z" />
                            <path id="column_2"
                                d="M298.16 300.63h13.245v1.619h-1.103v1.619h-1.104v97.13h1.104v1.619h1.103v1.619H298.16v-1.619h1.104v-1.619h1.104v-97.13h-1.104v-1.619h-1.104v-1.619z" />
                            <path id="column_3"
                                d="M596.501 300.63h13.245v1.609h-1.103v1.609h-1.104v96.531h1.104v1.608h1.103v1.609h-13.245v-1.609h1.104v-1.608h1.103v-96.531h-1.103v-1.609h-1.104v-1.609z" />
                            <path id="column_4"
                                d="M624.884 291.037h15.138v1.949h-1.262v1.948h-1.261V411.85h1.261v1.949h1.262v1.948h-15.138v-1.948h1.262v-1.949h1.261V294.934h-1.261v-1.948h-1.262v-1.949z" />
                            <path id="column_5"
                                d="M500.628 291.037h15.138v1.949h-1.262v1.948h-1.261V411.85h1.261v1.949h1.262v1.948h-15.138v-1.948h1.261v-1.949h1.262V294.934h-1.262v-1.948h-1.261v-1.949z" />
                            <path id="column_6"
                                d="M390.248 291.037h15.138v1.949h-1.262v1.948h-1.261V411.85h1.261v1.949h1.262v1.948h-15.138v-1.948h1.262v-1.949h1.261V294.934h-1.261v-1.948h-1.262v-1.949z" />
                        </g>
                        <path id="railing" fillRule="evenodd" clipRule="evenodd"
                            d="M277.345 379.294h116.057v3.197h-2.523v26.222h2.523v3.197H277.345v-3.197h1.893v-26.222h-1.893v-3.197zm111.642 29.419v-26.222h-1.893v26.222h1.893zm-3.785 0v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.893v26.222h-1.893v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222zm-1.893 26.222v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222zm-1.893 26.222v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.893v26.222h1.893zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.893v26.222h1.893zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.893v26.222h-1.893v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.893v26.222h-1.893v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.893v26.222h-1.893v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222zm-1.893 26.222v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222zm-1.893 26.222v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222z"
                            fill="url(#paint120_linear)" />
                        <path id="railing_2" fillRule="evenodd" clipRule="evenodd"
                            d="M512.297 379.294h116.056v3.197h-2.523v26.222h2.523v3.197H512.297v-3.197h1.892v-26.222h-1.892v-3.197zm111.641 29.419v-26.222h-1.892v26.222h1.892zm-3.785 0v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.893v26.222h1.893zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.893v26.222h1.893zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.893v26.222h-1.893v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.893v26.222h-1.893v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222zm-1.893 26.222v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222zm-1.893 26.222v-26.222h-1.892v26.222h1.892zm-5.676-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.893v26.222h1.893zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.893v26.222h1.893zm-5.677-26.222h1.892v26.222h-1.892v-26.222zm-1.892 26.222v-26.222h-1.892v26.222h1.892zm-5.677-26.222h1.892v26.222h-1.892v-26.222z"
                            fill="url(#paint121_linear)" />
                        <g id="window">
                            <path id="Rectangle 521" transform="matrix(1 0 0 -1 351.773 372.898)" fill="#B6C3DD"
                                d="M0 0h5.046v62.035H0z" />
                            <path id="Rectangle 522" transform="matrix(1 0 0 -1 385.833 372.898)" fill="#B6C3DD"
                                d="M0 0h5.046v62.035H0z" />
                            <path id="Rectangle 523" transform="matrix(0 1 1 0 351.773 305.746)" fill="#B6C3DD"
                                d="M0 0h5.116v39.106H0z" />
                            <path id="Rectangle 524" transform="matrix(0 1 1 0 351.773 372.898)" fill="#B6C3DD"
                                d="M0 0h5.116v39.106H0z" />
                            <path id="Subtract" fillRule="evenodd" clipRule="evenodd"
                                d="M356.819 310.863h29.014v62.035h-29.014v-62.035zm1.892 3.837h8.2v12.791h-8.2V314.7zm8.2 28.779h-8.2v12.791h8.2v-12.791zm-8.2-15.349h8.2v12.791h-8.2V328.13zm8.2 28.78h-8.2v12.79h8.2v-12.79zm.63-42.21h8.2v12.791h-8.2V314.7zm8.2 28.779h-8.2v12.791h8.2v-12.791zm-8.2-15.349h8.2v12.791h-8.2V328.13zm8.2 28.78h-8.2v12.79h8.2v-12.79zm.631-42.21h7.569v12.791h-7.569V314.7zm7.569 28.779h-7.569v12.791h7.569v-12.791zm-7.569-15.349h7.569v12.791h-7.569V328.13zm7.569 28.78h-7.569v12.79h7.569v-12.79z"
                                fill="#5A3207" />
                        </g>
                        <g id="window_2">
                            <path id="Rectangle 521_2" transform="matrix(1 0 0 -1 515.135 372.898)" fill="#B6C3DD"
                                d="M0 0h5.046v62.035H0z" />
                            <path id="Rectangle 522_2" transform="matrix(1 0 0 -1 549.195 372.898)" fill="#B6C3DD"
                                d="M0 0h5.046v62.035H0z" />
                            <path id="Rectangle 523_2" transform="matrix(0 1 1 0 515.135 305.746)" fill="#B6C3DD"
                                d="M0 0h5.116v39.106H0z" />
                            <path id="Rectangle 524_2" transform="matrix(0 1 1 0 515.135 372.898)" fill="#B6C3DD"
                                d="M0 0h5.116v39.106H0z" />
                            <path id="Subtract_2" fillRule="evenodd" clipRule="evenodd"
                                d="M520.181 310.863h29.014v62.035h-29.014v-62.035zm1.892 3.837h8.2v12.791h-8.2V314.7zm8.2 28.779h-8.2v12.791h8.2v-12.791zm-8.2-15.349h8.2v12.791h-8.2V328.13zm8.2 28.78h-8.2v12.79h8.2v-12.79zm.631-42.21h8.199v12.791h-8.199V314.7zm8.199 28.779h-8.199v12.791h8.199v-12.791zm-8.199-15.349h8.199v12.791h-8.199V328.13zm8.199 28.78h-8.199v12.79h8.199v-12.79zm.631-42.21h7.569v12.791h-7.569V314.7zm7.569 28.779h-7.569v12.791h7.569v-12.791zm-7.569-15.349h7.569v12.791h-7.569V328.13zm7.569 28.78h-7.569v12.79h7.569v-12.79z"
                                fill="#5A3207" />
                        </g>
                        <g id="double-window">
                            <g id="Group 3">
                                <path id="Rectangle 522_3" transform="matrix(1 0 0 -1 549.195 230.281)" fill="#B6C3DD"
                                    d="M0 0h5.046v62.035H0z" />
                                <path id="Rectangle 523_3" transform="matrix(0 1 1 0 520.181 163.129)" fill="#B6C3DD"
                                    d="M0 0h5.116v34.06H0z" />
                                <path id="Rectangle 524_3" transform="matrix(0 1 1 0 520.181 230.281)" fill="#B6C3DD"
                                    d="M0 0h5.116v34.06H0z" />
                                <path id="Subtract_3" fillRule="evenodd" clipRule="evenodd"
                                    d="M520.181 168.245h29.014v62.036h-29.014v-62.036zm1.892 3.837h8.2v12.791h-8.2v-12.791zm8.2 28.78h-8.2v12.791h8.2v-12.791zm-8.2-15.349h8.2v12.79h-8.2v-12.79zm8.2 28.779h-8.2v12.791h8.2v-12.791zm.631-42.21h8.199v12.791h-8.199v-12.791zm8.199 28.78h-8.199v12.791h8.199v-12.791zm-8.199-15.349h8.199v12.79h-8.199v-12.79zm8.199 28.779h-8.199v12.791h8.199v-12.791zm.631-42.21h7.569v12.791h-7.569v-12.791zm7.569 28.78h-7.569v12.791h7.569v-12.791zm-7.569-15.349h7.569v12.79h-7.569v-12.79zm7.569 28.779h-7.569v12.791h7.569v-12.791z"
                                    fill="#5A3207" />
                            </g>
                            <g id="Group 4">
                                <path id="Rectangle 521_3" transform="matrix(1 0 0 -1 487.382 230.281)" fill="#B6C3DD"
                                    d="M0 0h5.046v62.035H0z" />
                                <path id="Rectangle 523_4" transform="matrix(0 1 1 0 487.382 163.129)" fill="#B6C3DD"
                                    d="M0 0h5.116v34.06H0z" />
                                <path id="Rectangle 524_4" transform="matrix(0 1 1 0 487.382 230.281)" fill="#B6C3DD"
                                    d="M0 0h5.116v34.06H0z" />
                                <path id="Subtract_4" fillRule="evenodd" clipRule="evenodd"
                                    d="M492.428 168.245h29.014v62.036h-29.014v-62.036zm1.893 3.837h8.199v12.791h-8.199v-12.791zm8.199 28.78h-8.199v12.791h8.199v-12.791zm-8.199-15.349h8.199v12.79h-8.199v-12.79zm8.199 28.779h-8.199v12.791h8.199v-12.791zm.631-42.21h8.2v12.791h-8.2v-12.791zm8.2 28.78h-8.2v12.791h8.2v-12.791zm-8.2-15.349h8.2v12.79h-8.2v-12.79zm8.2 28.779h-8.2v12.791h8.2v-12.791zm.63-42.21h7.569v12.791h-7.569v-12.791zm7.569 28.78h-7.569v12.791h7.569v-12.791zm-7.569-15.349h7.569v12.79h-7.569v-12.79zm7.569 28.779h-7.569v12.791h7.569v-12.791z"
                                    fill="#5A3207" />
                            </g>
                        </g>
                        <g id="double-window_2">
                            <g id="Group 3_2">
                                <path id="Rectangle 522_4" transform="matrix(1 0 0 -1 413.586 230.281)" fill="#B6C3DD"
                                    d="M0 0h5.046v62.035H0z" />
                                <path id="Rectangle 523_5" transform="matrix(0 1 1 0 384.572 163.129)" fill="#B6C3DD"
                                    d="M0 0h5.116v34.06H0z" />
                                <path id="Rectangle 524_5" transform="matrix(0 1 1 0 384.572 230.281)" fill="#B6C3DD"
                                    d="M0 0h5.116v34.06H0z" />
                                <path id="Subtract_5" fillRule="evenodd" clipRule="evenodd"
                                    d="M384.572 168.245h29.014v62.036h-29.014v-62.036zm1.892 3.837h8.199v12.791h-8.199v-12.791zm8.199 28.78h-8.199v12.791h8.199v-12.791zm-8.199-15.349h8.199v12.79h-8.199v-12.79zm8.199 28.779h-8.199v12.791h8.199v-12.791zm.631-42.21h8.2v12.791h-8.2v-12.791zm8.2 28.78h-8.2v12.791h8.2v-12.791zm-8.2-15.349h8.2v12.79h-8.2v-12.79zm8.2 28.779h-8.2v12.791h8.2v-12.791zm.631-42.21h7.568v12.791h-7.568v-12.791zm7.568 28.78h-7.568v12.791h7.568v-12.791zm-7.568-15.349h7.568v12.79h-7.568v-12.79zm7.568 28.779h-7.568v12.791h7.568v-12.791z"
                                    fill="#5A3207" />
                            </g>
                            <g id="Group 4_2">
                                <path id="Rectangle 521_4" transform="matrix(1 0 0 -1 351.773 230.281)" fill="#B6C3DD"
                                    d="M0 0h5.046v62.035H0z" />
                                <path id="Rectangle 523_6" transform="matrix(0 1 1 0 351.773 163.129)" fill="#B6C3DD"
                                    d="M0 0h5.116v34.06H0z" />
                                <path id="Rectangle 524_6" transform="matrix(0 1 1 0 351.773 230.281)" fill="#B6C3DD"
                                    d="M0 0h5.116v34.06H0z" />
                                <path id="Subtract_6" fillRule="evenodd" clipRule="evenodd"
                                    d="M356.819 168.245h29.014v62.036h-29.014v-62.036zm1.892 3.837h8.2v12.791h-8.2v-12.791zm8.2 28.78h-8.2v12.791h8.2v-12.791zm-8.2-15.349h8.2v12.79h-8.2v-12.79zm8.2 28.779h-8.2v12.791h8.2v-12.791zm.63-42.21h8.2v12.791h-8.2v-12.791zm8.2 28.78h-8.2v12.791h8.2v-12.791zm-8.2-15.349h8.2v12.79h-8.2v-12.79zm8.2 28.779h-8.2v12.791h8.2v-12.791zm.631-42.21h7.569v12.791h-7.569v-12.791zm7.569 28.78h-7.569v12.791h7.569v-12.791zm-7.569-15.349h7.569v12.79h-7.569v-12.79zm7.569 28.779h-7.569v12.791h7.569v-12.791z"
                                    fill="#5A3207" />
                            </g>
                        </g>
                        <g id="porch-steps">
                            <rect id="Rectangle 580" x="397.502" y="421.503" width="117.949" height="7.035" rx="2"
                                fill="url(#paint122_linear)" />
                            <rect id="Rectangle 581" x="395.294" y="428.63" width="122.364" height="3.167" rx="1.584"
                                fill="#565252" />
                            <rect id="Rectangle 582" x="393.717" y="431.736" width="125.518" height="3.198" rx="1.599"
                                fill="#736161" />
                            <rect id="Rectangle 583" x="391.194" y="434.934" width="130.564" height="3.198" rx="1.599"
                                fill="#655B5B" />
                        </g>
                        <g id="walkway">
                            <g id="Union" fill="#BFBABA">
                                <path
                                    d="M418.316 439.41h-27.122v8.314h28.384l-1.262-8.314zM418.975 465.632h-26.519l1.261 11.192 25.258-1.599v-9.593zM397.502 503.364h24.108l1.121-10.872h-25.229v10.872zM441.023 439.41H421.47v9.594h19.553v-9.594zM422.101 465.632h18.922v9.593h-18.922v-9.593zM442.284 503.364h-17.03v-8.953l17.03-1.279v10.232zM504.097 452.201h15.768v9.593h-15.768v-9.593zM514.82 506.562l-16.4.64v8.314h14.655l1.745-8.954zM500.943 489.295h15.138v-9.594h-15.138v9.594zM459.314 453.48l-21.445-1.279v10.872h20.539l.906-9.593zM438.5 507.202l19.553 1.128-.826 8.465H438.5v-9.593zM459.314 488.015l-20.183 1.28v-10.873h19.33l.853 9.593zM392.456 450.283h18.922v12.471h-9.146l-9.776-2.878v-9.593zM415.162 505.283h-17.03v8.855l8.799 2.657h8.231v-11.512zM396.24 489.295h17.661v-9.594H396.24v9.594zM434.085 452.201h-20.184v9.593h18.96l1.224-9.593zM417.055 507.202h18.291l-1.108 8.314h-17.183v-8.314zM435.346 489.295h-18.922v-9.594l18.922-1.279v10.873zM482.021 461.794h20.184l-1.224-9.593h-18.96v9.593zM497.159 515.516h-18.922v-8.314l9.11-1.279 8.665 1.279 1.147 8.314zM480.76 479.701h18.922l-1.147 9.594H480.76v-9.594zM465.622 439.41h-22.076v10.873l22.076-.64V439.41zM443.546 465.632h21.445v10.232l-21.445.64v-10.872zM463.729 503.364h-18.922v-10.593l9.777-1.558 9.145 2.181v9.97zM468.145 439.41h17.66v8.314h-17.66v-8.314zM484.544 465.632h-17.661v8.314l6.938 2.238h10.723v-10.552zM464.991 503.364h16.399v-8.314l-16.399-3.197v11.511zM462.468 452.201l15.769-1.279v9.593l-15.769 1.279v-9.593zM475.714 505.923l-13.877 1.128v8.465h13.877v-9.593zM461.837 489.295l15.138 1.279v-12.471l-7.569 2.238-7.569-.64v9.594zM488.328 440.05h16.4v10.872l-16.4-1.279v-9.593zM502.835 466.271h-15.768v9.593l15.768 1.279v-10.872zM484.544 502.725h13.246v-10.872l-13.246 1.279v9.593zM522.388 439.41h-14.507v9.913l14.507-1.599v-8.314zM505.989 465.632h13.876v8.314l-6.938 1.918h-6.938v-10.232zM515.45 503.364h-14.507v-8.314h13.54l.967 8.314z" />
                            </g>
                            <g id="Union_2" fill="#9D8F8F">
                                <path
                                    d="M397.502 503.364h24.108l1.121-10.872h-25.229v10.872zM441.023 439.41H421.47v9.594h19.553v-9.594zM422.101 465.632h18.922v9.593h-18.922v-9.593zM442.284 503.364h-17.03v-8.953l17.03-1.279v10.232zM504.097 452.201h15.768v9.593h-15.768v-9.593zM514.82 506.562l-16.4.64v8.314h14.655l1.745-8.954zM500.943 489.295h15.138v-9.594h-15.138v9.594zM438.5 507.202l19.553 1.128-.826 8.465H438.5v-9.593zM392.456 450.283h18.922v12.471h-9.146l-9.776-2.878v-9.593zM415.162 505.283h-17.03v8.855l8.799 2.657h8.231v-11.512zM396.24 489.295h17.661v-9.594H396.24v9.594zM434.085 452.201h-20.184v9.593h18.96l1.224-9.593zM482.021 461.794h20.184l-1.224-9.593h-18.96v9.593zM480.76 479.701h18.922l-1.147 9.594H480.76v-9.594zM465.622 439.41h-22.076v10.873l22.076-.64V439.41zM443.546 465.632h21.445v10.232l-21.445.64v-10.872zM468.145 439.41h17.66v8.314h-17.66v-8.314zM484.544 465.632h-17.661v8.314l6.938 2.238h10.723v-10.552zM464.991 503.364h16.399v-8.314l-16.399-3.197v11.511zM462.468 452.201l15.769-1.279v9.593l-15.769 1.279v-9.593zM475.714 505.923l-13.877 1.128v8.465h13.877v-9.593zM461.837 489.295l15.138 1.279v-12.471l-7.569 2.238-7.569-.64v9.594zM522.388 439.41h-14.507v9.913l14.507-1.599v-8.314zM505.989 465.632h13.876v8.314l-6.938 1.918h-6.938v-10.232zM515.45 503.364h-14.507v-8.314h13.54l.967 8.314z" />
                            </g>
                            <g id="Union_3" fill="#847C7C">
                                <path
                                    d="M441.023 439.41H421.47v9.594h19.553v-9.594zM442.284 503.364h-17.03v-8.953l17.03-1.279v10.232zM504.097 452.201h15.768v9.593h-15.768v-9.593zM514.82 506.562l-16.4.64v8.314h14.655l1.745-8.954zM500.943 489.295h15.138v-9.594h-15.138v9.594zM392.456 450.283h18.922v12.471h-9.146l-9.776-2.878v-9.593zM415.162 505.283h-17.03v8.855l8.799 2.657h8.231v-11.512zM396.24 489.295h17.661v-9.594H396.24v9.594zM443.546 465.632h21.445v10.232l-21.445.64v-10.872zM468.145 439.41h17.66v8.314h-17.66v-8.314zM464.991 503.364h16.399v-8.314l-16.399-3.197v11.511zM462.468 452.201l15.769-1.279v9.593l-15.769 1.279v-9.593zM475.714 505.923l-13.877 1.128v8.465h13.877v-9.593zM522.388 439.41h-14.507v9.913l14.507-1.599v-8.314z" />
                            </g>
                        </g>
                        <g id="door">
                            <path id="Rectangle 424_2" transform="matrix(1 0 0 -1 427.462 408.713)" fill="#B6C3DD"
                                d="M0 0h5.677v96.571H0z" />
                            <path id="Rectangle 426_2" d="M424.939 305.746l1.621 6.396h52.669l1.215-6.396h-55.505z"
                                fill="#B6C3DD" />
                            <path id="Rectangle 425_2" transform="matrix(1 0 0 -1 472.245 408.713)" fill="#B6C3DD"
                                d="M0 0h6.307v96.571H0z" />
                            <path id="door_2" fillRule="evenodd" clipRule="evenodd"
                                d="M433.139 312.142h39.106v96.832h-39.106v-96.832zm5.348 10.845h9.167v10.845h-9.167v-10.845zm9.167 11.62h-9.167v10.845h9.167v-10.845zm.764-11.62h9.168v10.845h-9.168v-10.845zm9.168 11.62h-9.168v10.845h9.168v-10.845zm.764-11.62h9.168v10.845h-9.168v-10.845zm9.168 11.62h-9.168v10.845h9.168v-10.845z"
                                fill="#68100D" />
                            <path id="threshold" fill="#452303" d="M427.462 408.713h51.09v7.035h-51.09z" />
                            <g id="door-knob-ext">
                                <ellipse id="Ellipse 25" rx="2.208" ry="2.238" transform="matrix(-1 0 0 1 469.366 362.687)"
                                    fill="#A6A6A6" />
                                <g id="Ellipse 26" fill="#8C8C8C">
                                    <path
                                        d="M469.766 362.687c0 .353.282.64.631.64.348 0 .63-.287.63-.64a.635.635 0 00-.63-.64.626.626 0 00-.513.268.643.643 0 00-.118.372z" />
                                    <path
                                        d="M469.766 362.687c0 .353.282.64.631.64-1.194.255-3.238.319-3.869-.32-.643-.652 0-.692.315-.692.505 0 .631.372 1.577.372.631 0 1.062-.239 1.464-.372a.643.643 0 00-.118.372z" />
                                </g>
                            </g>
                            <g id="lock-ext">
                                <ellipse id="Ellipse 27" cx="470.037" cy="357.943" rx="1.261" ry="1.279" fill="#A6A6A6" />
                                <path id="Ellipse 28"
                                    d="M470.352 358.263c0 .353-.141.639-.315.639-.174 0-.315-.286-.315-.639 0-.353.141-.64.315-.64.174 0 .315.287.315.64z"
                                    fill="#C4C4C4" />
                            </g>
                            <g id="keypad">
                                <g id="product-display" display="none">
                                    <path id="product-container" fill="#F2F2F2" d="M435 309h80v97h-80z" />
                                    <path fill="#333" d="M435 309h80v43.667h-80z" />
                                    <path fill="#333" d="M435 367h80v39h-80z" />
                                    <g id="product-card">
                                        <g id="product-title" display="none">
                                            <path id="Wyze Lock Keypad"
                                                d="M459.5 358h-.228l-.233-1.05h.224l.142.712.206-.712h.204l.204.709.142-.709h.216l-.232 1.05h-.228l-.209-.734-.208.734zm1.18.036l.012-.028-.305-.79h.227l.193.533.222-.533h.222l-.36.844a.483.483 0 01-.139.201.335.335 0 01-.207.06.458.458 0 01-.092-.009v-.177l.032.004a.425.425 0 00.04.002.155.155 0 00.093-.027.182.182 0 00.062-.08zm.624-.036v-.146l.393-.463h-.39v-.173h.654v.146l-.396.463h.405V358h-.666zm1.466-.098a.504.504 0 01-.149.086.493.493 0 01-.334-.005.431.431 0 01-.134-.085.408.408 0 01-.12-.288.4.4 0 01.555-.372.38.38 0 01.204.22c.02.051.03.107.03.167v.054h-.582a.218.218 0 00.081.118c.04.03.087.045.141.045a.276.276 0 00.096-.016.235.235 0 00.077-.046l.135.122zm-.339-.528a.183.183 0 00-.122.044.215.215 0 00-.07.114h.382a.221.221 0 00-.072-.113.172.172 0 00-.118-.045zm.832.626v-1.05h.218v.858h.574V358h-.792zm.859-.39a.4.4 0 01.254-.375.423.423 0 01.327 0 .4.4 0 01.22.216.392.392 0 01-.088.447.41.41 0 01-.132.085.41.41 0 01-.164.032.431.431 0 01-.297-.117.408.408 0 01-.12-.288zm.417.226c.06 0 .111-.022.153-.066a.223.223 0 00.063-.16.226.226 0 00-.063-.162.204.204 0 00-.153-.066.204.204 0 00-.153.066.226.226 0 00-.063.162c0 .063.021.116.063.16a.204.204 0 00.153.066zm.932-.001a.225.225 0 00.097-.021.282.282 0 00.089-.066l.123.127a.43.43 0 01-.611.023.403.403 0 01-.117-.288.4.4 0 01.032-.159.397.397 0 01.378-.248c.062 0 .121.013.178.038a.41.41 0 01.146.102l-.126.133a.305.305 0 00-.09-.07.23.23 0 00-.104-.024.197.197 0 00-.15.066.232.232 0 00-.06.162c0 .064.021.117.062.16a.206.206 0 00.153.065zm.416.165v-1.05l.205-.045v.643l.338-.33h.232l-.366.359.389.423h-.263l-.33-.357V358h-.205zm1.167 0v-1.05h.218v.471l.459-.471h.265l-.507.499.531.551h-.291l-.457-.492V358h-.218zm1.672-.098a.504.504 0 01-.149.086.493.493 0 01-.334-.005.431.431 0 01-.134-.085.408.408 0 01-.12-.288.4.4 0 01.555-.372.38.38 0 01.204.22c.02.051.03.107.03.167v.054h-.582a.218.218 0 00.081.118c.04.03.087.045.141.045a.276.276 0 00.096-.016.235.235 0 00.077-.046l.135.122zm-.339-.528a.183.183 0 00-.122.044.215.215 0 00-.07.114h.382a.221.221 0 00-.072-.113.172.172 0 00-.118-.045zm.699.662l.012-.028-.304-.79h.226l.194.533.222-.533h.222l-.36.844a.483.483 0 01-.14.201.335.335 0 01-.207.06.44.44 0 01-.091-.009v-.177a.155.155 0 00.165-.021.18.18 0 00.061-.08zm.653.278v-1.096h.203v.065a.366.366 0 01.222-.075.406.406 0 01.282.117.398.398 0 01.115.285.393.393 0 01-.246.37.393.393 0 01-.27.015.395.395 0 01-.1-.046v.365h-.206zm.392-.931a.275.275 0 00-.104.02.217.217 0 00-.082.054v.307c.022.022.049.04.081.053a.284.284 0 00.105.019.222.222 0 00.228-.226.214.214 0 00-.068-.161.217.217 0 00-.16-.066zm.811.631a.308.308 0 01-.206-.067.217.217 0 01-.079-.174c0-.074.028-.132.085-.174a.391.391 0 01.236-.063.622.622 0 01.19.03v-.055c0-.045-.014-.079-.042-.102a.19.19 0 00-.123-.035.402.402 0 00-.108.017.856.856 0 00-.13.048l-.075-.152a.994.994 0 01.177-.063.727.727 0 01.171-.021c.105 0 .186.026.244.077.059.05.089.121.089.213V358h-.203v-.054a.364.364 0 01-.105.051.411.411 0 01-.121.017zm-.089-.245c0 .03.013.054.039.072a.188.188 0 00.104.025.301.301 0 00.172-.049v-.117a.474.474 0 00-.165-.029.198.198 0 00-.111.027.08.08 0 00-.039.071zm1.257.231v-.065a.34.34 0 01-.222.076.392.392 0 01-.282-.118.402.402 0 01-.086-.127.415.415 0 01.087-.443.406.406 0 01.5-.054v-.319l.205-.045V358h-.202zm-.417-.392a.22.22 0 00.066.161.22.22 0 00.162.066.263.263 0 00.186-.075v-.305a.23.23 0 00-.083-.054.27.27 0 00-.103-.019.223.223 0 00-.228.226z"
                                                fill="#000" />
                                        </g>
                                        <g id="product-info" display="none">
                                            <path id="â¢ Wire Free, One-touch Lock â¢ Time-based Guest Codes"
                                                d="M460.475 359.748a.099.099 0 01-.1-.1c0-.028.009-.052.029-.072.02-.02.043-.03.071-.03.028 0 .052.01.072.03.02.02.03.044.03.072a.101.101 0 01-.102.1zm.643.252h-.078l-.151-.7h.078l.119.578.173-.578h.075l.173.576.12-.576h.075l-.151.7h-.078l-.177-.593-.178.593zm.718-.597a.049.049 0 01-.035-.015.049.049 0 010-.07.049.049 0 01.07 0 .049.049 0 010 .07.045.045 0 01-.035.015zm.037.096V360h-.074v-.501h.074zM462 360v-.501h.074v.071a.152.152 0 01.058-.06.15.15 0 01.107-.02.098.098 0 01.022.005v.068a.138.138 0 00-.026-.006.128.128 0 00-.107.024.155.155 0 00-.054.076V360H462zm.731-.053a.326.326 0 01-.088.047.312.312 0 01-.201-.005.257.257 0 01-.136-.137.27.27 0 01.052-.286.24.24 0 01.268-.055.228.228 0 01.075.055.262.262 0 01.05.082.26.26 0 01.019.101v.023h-.411c.005.049.026.09.061.123a.18.18 0 00.127.049.246.246 0 00.076-.012.169.169 0 00.062-.034l.046.049zm-.2-.391a.164.164 0 00-.113.044.189.189 0 00-.057.113h.335a.192.192 0 00-.057-.111.148.148 0 00-.108-.046zm.571.444v-.7h.501v.068h-.424v.25h.278v.067h-.278V360h-.077zm.532 0v-.501h.074v.071a.16.16 0 01.187-.075v.068a.11.11 0 00-.026-.006.132.132 0 00-.107.024.17.17 0 00-.054.076V360h-.074zm.732-.053a.326.326 0 01-.088.047.312.312 0 01-.201-.005.257.257 0 01-.136-.137.27.27 0 01.052-.286.24.24 0 01.268-.055.228.228 0 01.075.055.262.262 0 01.05.082.26.26 0 01.019.101v.023h-.411c.005.049.026.09.061.123a.18.18 0 00.127.049.246.246 0 00.076-.012.169.169 0 00.062-.034l.046.049zm-.2-.391a.164.164 0 00-.113.044.189.189 0 00-.057.113h.335a.192.192 0 00-.057-.111.148.148 0 00-.108-.046zm.765.391a.326.326 0 01-.088.047.312.312 0 01-.201-.005.269.269 0 01-.082-.055.27.27 0 01-.002-.368.24.24 0 01.268-.055.244.244 0 01.125.137.26.26 0 01.019.101v.023h-.411c.006.049.026.09.061.123a.18.18 0 00.127.049.242.242 0 00.076-.012.16.16 0 00.062-.034l.046.049zm-.2-.391a.164.164 0 00-.113.044.189.189 0 00-.057.113h.335a.181.181 0 00-.057-.111.144.144 0 00-.108-.046zm.325.37h.08l-.08.211h-.058l.058-.211zm1.103-.276c0 .05-.01.097-.028.142a.361.361 0 01-.474.191.366.366 0 01-.115-.076.36.36 0 01-.104-.257c0-.05.009-.097.028-.141a.352.352 0 01.333-.22.351.351 0 01.255.105.357.357 0 01.105.256zm-.078 0a.305.305 0 00-.022-.114.282.282 0 00-.462-.092.265.265 0 00-.059.092.286.286 0 00-.022.114c0 .041.007.079.022.114a.285.285 0 00.149.154.276.276 0 00.112.022.278.278 0 00.2-.084.305.305 0 00.06-.092.305.305 0 00.022-.114zm.184.35v-.501h.074v.059a.173.173 0 01.069-.051.214.214 0 01.089-.018c.057 0 .103.018.139.054a.19.19 0 01.054.14V360h-.073v-.302a.145.145 0 00-.038-.105.135.135 0 00-.102-.039.168.168 0 00-.081.02.156.156 0 00-.057.057V360h-.074zm.971-.053a.326.326 0 01-.088.047.312.312 0 01-.201-.005.257.257 0 01-.136-.137.27.27 0 01.052-.286.24.24 0 01.268-.055.228.228 0 01.075.055.262.262 0 01.05.082.26.26 0 01.019.101v.023h-.411c.005.049.026.09.061.123a.18.18 0 00.127.049.246.246 0 00.076-.012.169.169 0 00.062-.034l.046.049zm-.2-.391a.164.164 0 00-.113.044.189.189 0 00-.057.113h.335a.192.192 0 00-.057-.111.148.148 0 00-.108-.046zm.33.13h.349v.066h-.349v-.066zm.508.202v-.326h-.108v-.063h.108v-.127l.073-.019v.146h.151v.063h-.151v.307c0 .027.006.046.018.058.012.011.032.017.059.017a.205.205 0 00.073-.013v.065a.34.34 0 01-.088.013c-.043 0-.077-.01-.1-.031a.116.116 0 01-.035-.09zm.265-.139a.25.25 0 01.02-.102.248.248 0 01.236-.158.254.254 0 01.255.26.27.27 0 01-.075.186.253.253 0 01-.28.055.246.246 0 01-.136-.138.252.252 0 01-.02-.103zm.256.195a.17.17 0 00.071-.015.185.185 0 00.097-.103.22.22 0 000-.153.185.185 0 00-.097-.103.17.17 0 00-.071-.015.172.172 0 00-.072.015.185.185 0 00-.097.103.19.19 0 00-.014.076.199.199 0 00.052.139.178.178 0 00.131.056zm.428-.445v.302c0 .044.013.079.038.105.026.026.06.039.102.039a.154.154 0 00.138-.078v-.368h.074V360h-.074v-.058a.173.173 0 01-.069.051.223.223 0 01-.088.017.19.19 0 01-.14-.054.19.19 0 01-.054-.14v-.317h.073zm.712.443a.183.183 0 00.077-.016.223.223 0 00.069-.047l.046.05a.287.287 0 01-.194.08.253.253 0 01-.255-.26.26.26 0 01.255-.26c.036 0 .071.007.105.021a.278.278 0 01.091.058l-.047.054a.205.205 0 00-.148-.065.179.179 0 00-.169.117.22.22 0 000 .152c.01.023.023.044.039.061.017.017.037.03.059.04.023.01.047.015.072.015zm.279.058v-.7l.074-.017v.275a.173.173 0 01.069-.051.214.214 0 01.089-.018c.057 0 .103.018.139.054a.19.19 0 01.054.14V360h-.073v-.302a.145.145 0 00-.038-.105.135.135 0 00-.102-.039.168.168 0 00-.081.02.156.156 0 00-.057.057V360h-.074zm.778 0v-.7h.077v.631h.417V360h-.494zm.538-.251a.269.269 0 01.074-.185.257.257 0 01.362 0 .269.269 0 010 .371.253.253 0 01-.28.055.248.248 0 01-.136-.138.27.27 0 01-.02-.103zm.256.195a.174.174 0 00.129-.056.191.191 0 00.039-.062.22.22 0 000-.153.172.172 0 00-.039-.062.174.174 0 00-.129-.056.179.179 0 00-.169.118.21.21 0 00.038.215.179.179 0 00.131.056zm.593-.002a.19.19 0 00.077-.016.249.249 0 00.069-.047l.046.05a.311.311 0 01-.09.059.268.268 0 01-.204.001.248.248 0 01-.135-.138.25.25 0 01-.02-.102c0-.036.006-.07.02-.101a.248.248 0 01.135-.138.239.239 0 01.1-.021.288.288 0 01.196.079l-.047.054a.205.205 0 00-.148-.065.178.178 0 00-.169.117.186.186 0 00-.014.075.199.199 0 00.053.138c.016.017.036.03.059.04.022.01.046.015.072.015zm.278.058v-.7l.074-.017v.442l.262-.226h.09l-.275.238.288.263h-.101l-.264-.24v.24h-.074zm-11.588 1.748a.1.1 0 01-.071-.029.1.1 0 01-.029-.071.101.101 0 01.1-.102c.028 0 .052.01.072.03.02.02.03.044.03.072 0 .027-.01.051-.03.071a.098.098 0 01-.072.029zm.397-.379v-.069h.583v.069h-.253V362h-.077v-.631h-.253zm.701.034a.047.047 0 01-.035-.015.049.049 0 010-.07.047.047 0 01.035-.015c.014 0 .025.005.035.015a.049.049 0 010 .07.047.047 0 01-.035.015zm.037.096V362h-.074v-.501h.074zm.126.501v-.501h.074v.055a.197.197 0 01.24-.04.172.172 0 01.065.066.192.192 0 01.074-.068.211.211 0 01.098-.023c.054 0 .098.018.132.054a.197.197 0 01.052.14V362h-.073v-.302a.153.153 0 00-.035-.105.122.122 0 00-.095-.039.137.137 0 00-.075.021.17.17 0 00-.058.061 1.385 1.385 0 01.005.047V362h-.073v-.302a.153.153 0 00-.035-.105.121.121 0 00-.094-.039.15.15 0 00-.128.073V362h-.074zm1.281-.053a.326.326 0 01-.088.047.312.312 0 01-.201-.005.257.257 0 01-.136-.137.27.27 0 01.052-.286.24.24 0 01.268-.055.228.228 0 01.075.055.262.262 0 01.05.082.26.26 0 01.019.101v.023h-.411c.005.049.026.09.061.123a.18.18 0 00.127.049.246.246 0 00.076-.012.169.169 0 00.062-.034l.046.049zm-.2-.391a.164.164 0 00-.113.044.189.189 0 00-.057.113h.335a.192.192 0 00-.057-.111.148.148 0 00-.108-.046zm.33.13h.349v.066h-.349v-.066zm.949.063a.269.269 0 01-.073.185.25.25 0 01-.18.074.251.251 0 01-.161-.058v.05h-.073v-.7l.074-.017v.269a.238.238 0 01.161-.061.254.254 0 01.179.075.26.26 0 01.073.183zm-.259-.193a.199.199 0 00-.154.07v.248a.184.184 0 00.067.051.212.212 0 00.087.018.177.177 0 00.132-.055.19.19 0 00.054-.138.205.205 0 00-.054-.138.18.18 0 00-.132-.056zm.524.453a.208.208 0 01-.134-.042.134.134 0 01-.051-.109c0-.047.018-.084.054-.111a.232.232 0 01.146-.042.319.319 0 01.147.034v-.066c0-.04-.011-.07-.034-.09-.022-.021-.055-.031-.099-.031a.29.29 0 00-.075.011.501.501 0 00-.082.033l-.028-.057a.606.606 0 01.1-.038.37.37 0 01.092-.012c.064 0 .112.015.146.045.035.03.052.073.052.129V362h-.072v-.049a.235.235 0 01-.162.058zm-.114-.153c0 .028.012.051.035.069a.156.156 0 00.092.026c.03 0 .058-.005.082-.014a.182.182 0 00.067-.044v-.094a.268.268 0 00-.145-.04.156.156 0 00-.096.027.084.084 0 00-.035.07zm.421.075l.045-.048a.27.27 0 00.076.05.245.245 0 00.087.017c.04 0 .073-.008.098-.025.025-.017.038-.038.038-.065a.061.061 0 00-.023-.05.139.139 0 00-.07-.026l-.087-.012a.21.21 0 01-.112-.044.12.12 0 01-.036-.091c0-.042.018-.077.053-.104a.21.21 0 01.135-.042.311.311 0 01.197.066l-.039.05a.336.336 0 00-.082-.042.245.245 0 00-.08-.014.146.146 0 00-.084.023.07.07 0 00-.032.06.06.06 0 00.022.05.162.162 0 00.071.024l.087.012c.05.007.087.022.112.045a.118.118 0 01.038.091.143.143 0 01-.059.11.226.226 0 01-.144.043.291.291 0 01-.211-.078zm.924.016a.326.326 0 01-.088.047.312.312 0 01-.201-.005.269.269 0 01-.082-.055.27.27 0 01-.002-.368.24.24 0 01.268-.055.244.244 0 01.125.137.26.26 0 01.019.101v.023h-.411c.006.049.026.09.061.123a.18.18 0 00.127.049.242.242 0 00.076-.012.16.16 0 00.062-.034l.046.049zm-.2-.391a.164.164 0 00-.113.044.189.189 0 00-.057.113h.335a.181.181 0 00-.057-.111.144.144 0 00-.108-.046zm.735.444v-.053a.236.236 0 01-.162.061.247.247 0 01-.179-.074.268.268 0 01-.073-.185.26.26 0 01.073-.183.255.255 0 01.34-.018v-.248l.074-.017V362h-.073zm-.341-.252a.199.199 0 00.054.139.178.178 0 00.132.056.192.192 0 00.154-.07v-.248a.204.204 0 00-.154-.069.188.188 0 00-.186.192zm1.437-.083a.348.348 0 01-.098.246.33.33 0 01-.242.1.36.36 0 01-.334-.502.361.361 0 01.486-.189c.048.02.089.048.123.084l-.052.053a.313.313 0 00-.224-.097.28.28 0 00-.261.176.305.305 0 00.059.321.28.28 0 00.301.065.234.234 0 00.081-.049.237.237 0 00.057-.076.236.236 0 00.026-.095h-.251v-.068h.329v.031zm.176-.166v.302c0 .044.013.079.038.105.026.026.06.039.102.039a.154.154 0 00.138-.078v-.368h.074V362h-.074v-.058a.173.173 0 01-.069.051.223.223 0 01-.088.017.19.19 0 01-.14-.054.19.19 0 01-.054-.14v-.317h.073zm.9.448a.326.326 0 01-.088.047.312.312 0 01-.201-.005.269.269 0 01-.082-.055.27.27 0 01-.002-.368.24.24 0 01.268-.055.244.244 0 01.125.137.26.26 0 01.019.101v.023h-.411c.006.049.026.09.061.123a.18.18 0 00.127.049.242.242 0 00.076-.012.16.16 0 00.062-.034l.046.049zm-.2-.391a.164.164 0 00-.113.044.189.189 0 00-.057.113h.335a.181.181 0 00-.057-.111.144.144 0 00-.108-.046zm.297.375l.045-.048a.236.236 0 00.163.067c.04 0 .072-.008.098-.025.025-.017.038-.038.038-.065a.061.061 0 00-.023-.05.139.139 0 00-.07-.026l-.087-.012a.207.207 0 01-.112-.044.12.12 0 01-.036-.091c0-.042.017-.077.053-.104a.21.21 0 01.135-.042.311.311 0 01.197.066l-.039.05a.355.355 0 00-.082-.042.245.245 0 00-.08-.014.146.146 0 00-.084.023.068.068 0 00-.032.06.06.06 0 00.022.05.157.157 0 00.071.024l.087.012c.05.007.087.022.112.045a.118.118 0 01.038.091.132.132 0 01-.016.061.154.154 0 01-.043.049.24.24 0 01-.144.043.342.342 0 01-.117-.02.28.28 0 01-.094-.058zm.549-.043v-.326h-.108v-.063h.108v-.127l.073-.019v.146h.151v.063h-.151v.307c0 .027.006.046.018.058.012.011.032.017.059.017a.205.205 0 00.073-.013v.065a.34.34 0 01-.088.013c-.043 0-.077-.01-.1-.031a.116.116 0 01-.035-.09zm.864.052a.305.305 0 00.124-.025.268.268 0 00.099-.071l.05.052a.375.375 0 01-.275.115.365.365 0 01-.258-.104.38.38 0 01-.077-.115.378.378 0 010-.283.357.357 0 01.335-.22c.054 0 .105.01.153.031a.35.35 0 01.124.084l-.051.054a.313.313 0 00-.226-.098.289.289 0 00-.203.084.282.282 0 00-.06.092.305.305 0 00.06.321.293.293 0 00.205.083zm.333-.191a.269.269 0 01.074-.185.262.262 0 01.281-.055.233.233 0 01.081.055.236.236 0 01.055.083.25.25 0 01.02.102.252.252 0 01-.02.103.236.236 0 01-.055.083.247.247 0 01-.18.075.262.262 0 01-.182-.075.27.27 0 01-.074-.186zm.256.195a.174.174 0 00.129-.056.199.199 0 00.053-.139.19.19 0 00-.014-.076.172.172 0 00-.039-.062.174.174 0 00-.129-.056.179.179 0 00-.169.118.21.21 0 00.038.215.179.179 0 00.131.056zm.75.056v-.053a.225.225 0 01-.162.061.254.254 0 01-.179-.074.283.283 0 01-.054-.083.289.289 0 010-.203.26.26 0 01.134-.137.262.262 0 01.184-.005.218.218 0 01.076.042v-.248l.074-.017V362h-.073zm-.341-.252a.22.22 0 00.014.077c.01.024.024.045.04.062a.18.18 0 00.132.056.205.205 0 00.087-.018.176.176 0 00.067-.052v-.248a.171.171 0 00-.067-.05.198.198 0 00-.087-.019.188.188 0 00-.186.192zm.962.199a.326.326 0 01-.088.047.312.312 0 01-.201-.005.257.257 0 01-.136-.137.27.27 0 01.052-.286.24.24 0 01.268-.055.228.228 0 01.075.055.262.262 0 01.05.082.26.26 0 01.019.101v.023h-.411c.005.049.026.09.061.123a.18.18 0 00.127.049.246.246 0 00.076-.012.169.169 0 00.062-.034l.046.049zm-.2-.391a.164.164 0 00-.113.044.189.189 0 00-.057.113h.335a.192.192 0 00-.057-.111.148.148 0 00-.108-.046zm.296.375l.045-.048a.27.27 0 00.076.05.245.245 0 00.087.017c.04 0 .073-.008.098-.025.026-.017.038-.038.038-.065a.059.059 0 00-.023-.05c-.014-.013-.038-.021-.07-.026l-.087-.012a.21.21 0 01-.112-.044.12.12 0 01-.036-.091c0-.042.018-.077.053-.104a.213.213 0 01.135-.042.311.311 0 01.197.066l-.039.05a.336.336 0 00-.082-.042.24.24 0 00-.08-.014.146.146 0 00-.084.023.07.07 0 00-.032.06c0 .021.008.038.022.05a.167.167 0 00.071.024l.087.012a.2.2 0 01.112.045.114.114 0 01.038.091.143.143 0 01-.059.11.226.226 0 01-.144.043.291.291 0 01-.211-.078z"
                                                fill="#000" />
                                        </g>
                                        <g id="product-price" display="none">
                                            <path id="$ 19.99"
                                                d="M466.365 364.098v-.123a.566.566 0 01-.18-.044.497.497 0 01-.148-.096l.092-.126a.457.457 0 00.236.119v-.21l-.072-.014a.355.355 0 01-.182-.078.215.215 0 01-.055-.156c0-.079.028-.14.082-.186a.371.371 0 01.227-.075v-.096h.085v.1a.73.73 0 01.302.103l-.075.137a.713.713 0 00-.227-.09v.207l.069.011c.09.018.156.045.197.081.04.035.061.085.061.149a.23.23 0 01-.089.188.4.4 0 01-.238.078v.121h-.085zm-.008-.64l.008.001v-.203a.186.186 0 00-.104.029.083.083 0 00-.039.07c0 .032.009.055.027.069a.265.265 0 00.108.034zm.099.169l-.006-.001v.208a.232.232 0 00.112-.034c.029-.019.043-.044.043-.073 0-.03-.01-.052-.03-.065a.312.312 0 00-.119-.035zm.999-.537v.91h-.178v-.729l-.178.073v-.155l.243-.099h.113zm.452-.016a.4.4 0 01.164.034.4.4 0 01.208.234.587.587 0 01-.003.384.457.457 0 01-.091.153.4.4 0 01-.142.099.47.47 0 01-.452-.053l.101-.128a.282.282 0 00.181.06.225.225 0 00.183-.079.371.371 0 00.074-.228.301.301 0 01-.109.078.376.376 0 01-.265.007.304.304 0 01-.101-.058.266.266 0 01-.089-.201.284.284 0 01.096-.216.387.387 0 01.245-.086zm.005.441a.254.254 0 00.113-.026.292.292 0 00.095-.074.28.28 0 00-.075-.138.186.186 0 00-.13-.052.189.189 0 00-.125.042.133.133 0 00-.05.105c0 .043.016.077.049.104a.189.189 0 00.123.039zm.566.286a.1.1 0 01.075.031.103.103 0 010 .15.1.1 0 01-.075.031.1.1 0 01-.074-.031.101.101 0 01-.031-.074c0-.03.01-.055.031-.076a.1.1 0 01.074-.031zm.51-.727c.06 0 .115.012.164.034a.386.386 0 01.208.234.612.612 0 01-.002.384.408.408 0 01-.233.252.474.474 0 01-.452-.053l.101-.128a.29.29 0 00.084.046c.03.009.062.014.097.014a.225.225 0 00.183-.079.371.371 0 00.074-.228.31.31 0 01-.109.078.354.354 0 01-.138.027.372.372 0 01-.127-.02.319.319 0 01-.102-.058.284.284 0 01-.065-.088.282.282 0 01.003-.233.305.305 0 01.07-.096.381.381 0 01.244-.086zm.006.441c.04 0 .078-.009.113-.026a.302.302 0 00.095-.074.274.274 0 00-.076-.138.183.183 0 00-.13-.052.19.19 0 00-.125.042.135.135 0 00-.049.105c0 .043.016.077.048.104a.19.19 0 00.124.039zm.818-.441c.06 0 .115.012.164.034a.386.386 0 01.208.234.612.612 0 01-.002.384.408.408 0 01-.233.252.477.477 0 01-.452-.053l.101-.128a.29.29 0 00.084.046c.03.009.062.014.097.014a.225.225 0 00.183-.079.371.371 0 00.074-.228.31.31 0 01-.109.078.357.357 0 01-.138.027.372.372 0 01-.127-.02.269.269 0 01-.167-.146.282.282 0 01-.023-.113.27.27 0 01.026-.12.305.305 0 01.07-.096.381.381 0 01.244-.086zm.006.441c.04 0 .078-.009.113-.026a.302.302 0 00.095-.074.274.274 0 00-.076-.138.185.185 0 00-.13-.052.19.19 0 00-.125.042.132.132 0 00-.049.105c0 .043.016.077.048.104a.19.19 0 00.124.039z"
                                                fill="#000" />
                                        </g>
                                    </g>
                                </g>
                                <g id="buttons">
                                    <rect id="Rectangle 3" x="473.821" y="355.403" width="3.784" height="10.233" rx="1"
                                        fill="#808081" />
                                    <rect id="Rectangle 1" x="473.821" y="355.403" width="3.583" height="10.233" rx="1"
                                        fill="#E2E3E5" />
                                    <ellipse id="Ellipse 13" cx="474.78" cy="356.426" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 14" cx="474.78" cy="358.063" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 15" cx="474.78" cy="359.752" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 16" cx="474.78" cy="361.389" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 17" cx="474.78" cy="363.077" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 18" cx="474.78" cy="364.714" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 19" cx="476.445" cy="364.714" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 20" cx="476.445" cy="363.077" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 21" cx="476.445" cy="361.389" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 22" cx="476.445" cy="359.752" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 23" cx="476.445" cy="358.063" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 24" cx="476.445" cy="356.426" rx=".606" ry=".614" fill="#636466" />
                                    <ellipse id="Ellipse 1" cx="474.78" cy="356.375" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 3" cx="474.78" cy="358.012" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 5" cx="474.78" cy="359.7" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 7" cx="474.78" cy="361.338" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 9" cx="474.78" cy="363.026" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 11" cx="474.78" cy="364.663" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 2" cx="476.445" cy="356.375" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 4" cx="476.445" cy="358.012" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 6" cx="476.445" cy="359.7" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 8" cx="476.445" cy="361.338" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 10" cx="476.445" cy="363.026" rx=".606" ry=".614" fill="#8D9097" />
                                    <ellipse id="Ellipse 12" cx="476.445" cy="364.663" rx=".606" ry=".614" fill="#8D9097" />
                                </g>
                                <g id="Vector" fill="#fff">
                                    <path
                                        d="M474.824 356.15v.429h-.044v-.381l-.068.03v-.04l.084-.038h.028zM476.31 356.579v-.032l.169-.188a.247.247 0 00.041-.055.1.1 0 00.011-.046.067.067 0 00-.026-.053.096.096 0 00-.063-.022.132.132 0 00-.056.013.218.218 0 00-.056.04l-.026-.031a.208.208 0 01.138-.061c.038 0 .07.011.094.032a.1.1 0 01.038.08.13.13 0 01-.003.029.141.141 0 01-.031.059.403.403 0 01-.031.038l-.145.159h.219v.038h-.273zM476.554 357.787v.276h.058v.039h-.058v.115h-.043v-.115h-.229v-.035l.225-.28h.047zm-.221.276h.178v-.223l-.178.223zM476.458 359.91a.15.15 0 01-.119-.057.225.225 0 01-.047-.148c0-.035.005-.067.014-.096a.225.225 0 01.038-.074.17.17 0 01.06-.047.172.172 0 01.131-.01.182.182 0 01.047.021l-.022.035a.204.204 0 00-.04-.018.145.145 0 00-.041-.006.125.125 0 00-.104.051.24.24 0 00-.039.14.16.16 0 01.124-.065.148.148 0 01.102.038.132.132 0 01.04.095.137.137 0 01-.087.131.148.148 0 01-.057.01zm-.004-.238a.125.125 0 00-.064.017.165.165 0 00-.053.046.185.185 0 00.039.099.104.104 0 00.082.037.094.094 0 00.071-.029.097.097 0 00.029-.071.091.091 0 00-.03-.071.1.1 0 00-.074-.028zM476.445 361.548a.189.189 0 01-.06-.009.146.146 0 01-.048-.025.12.12 0 01-.032-.039.114.114 0 01-.011-.049c0-.026.01-.049.028-.069a.137.137 0 01.072-.041.126.126 0 01-.06-.038.087.087 0 01-.023-.06.099.099 0 01.038-.08.137.137 0 01.043-.024.178.178 0 01.106 0 .137.137 0 01.043.024.097.097 0 01.016.14.126.126 0 01-.06.038.13.13 0 01.071.041.102.102 0 01.016.118.105.105 0 01-.03.039.157.157 0 01-.048.025.2.2 0 01-.061.009zm0-.251a.1.1 0 00.066-.022.07.07 0 000-.111.1.1 0 00-.066-.023.097.097 0 00-.065.023.07.07 0 000 .111c.018.015.04.022.065.022zm0 .215a.11.11 0 00.076-.026.079.079 0 00.032-.063.078.078 0 00-.032-.062.115.115 0 00-.076-.026.12.12 0 00-.077.026.08.08 0 00-.031.062.08.08 0 00.031.063.114.114 0 00.077.026zM476.445 363.237a.14.14 0 01-.119-.062.208.208 0 01-.034-.07.314.314 0 01-.012-.089.31.31 0 01.012-.089.199.199 0 01.034-.07.155.155 0 01.053-.046.134.134 0 01.066-.016c.024 0 .047.005.067.016.02.011.038.026.052.046a.199.199 0 01.034.07.308.308 0 010 .178.208.208 0 01-.034.07.152.152 0 01-.052.046.138.138 0 01-.067.016zm0-.04a.1.1 0 00.088-.049.235.235 0 00.033-.132.235.235 0 00-.033-.132.1.1 0 00-.088-.049.103.103 0 00-.088.049.235.235 0 00-.033.132c0 .055.011.099.033.132a.103.103 0 00.088.049zM474.921 358.099a.122.122 0 01-.011.05.13.13 0 01-.078.065.207.207 0 01-.207-.052l.029-.029a.16.16 0 00.054.039c.019.008.04.012.064.012a.117.117 0 00.076-.024.076.076 0 00.03-.062.077.077 0 00-.026-.059.096.096 0 00-.066-.023h-.05v-.038h.048a.073.073 0 00.056-.022.073.073 0 00.022-.056.074.074 0 00-.027-.057.093.093 0 00-.065-.024.138.138 0 00-.059.013.177.177 0 00-.052.04l-.029-.03a.204.204 0 01.064-.046.182.182 0 01.13-.007.122.122 0 01.071.062c.007.015.01.03.01.047a.096.096 0 01-.021.061.121.121 0 01-.058.037.124.124 0 01.069.038c.017.019.026.04.026.065zM474.649 359.69l.01-.215h.241v.039h-.204l-.006.149a.242.242 0 01.046-.018.244.244 0 01.048-.005c.041 0 .074.012.1.036a.124.124 0 01.038.093.136.136 0 01-.041.103.148.148 0 01-.107.039.2.2 0 01-.144-.058l.027-.03c.019.017.037.03.055.038a.16.16 0 00.063.012c.03 0 .055-.009.075-.028a.101.101 0 00.029-.074.088.088 0 00-.029-.069.108.108 0 00-.075-.027.155.155 0 00-.048.007.179.179 0 00-.048.018l-.03-.01zM474.673 361.542l.211-.39h-.255v-.039h.302v.034l-.208.395h-.05zM474.767 362.796a.143.143 0 01.119.058.24.24 0 01.047.147.322.322 0 01-.014.096.225.225 0 01-.038.074.172.172 0 01-.138.065.195.195 0 01-.099-.029l.021-.035a.15.15 0 00.081.024.12.12 0 00.103-.051.226.226 0 00.04-.14.147.147 0 01-.057.048.134.134 0 01-.067.017.18.18 0 01-.057-.009.151.151 0 01-.045-.029.126.126 0 01-.039-.095c0-.02.003-.039.01-.056a.148.148 0 01.03-.045.148.148 0 01.103-.04zm.004.238a.135.135 0 00.064-.016.181.181 0 00.053-.047.17.17 0 00-.039-.099.103.103 0 00-.081-.037.094.094 0 00-.072.029.097.097 0 00-.029.071c0 .029.01.053.029.072.02.018.045.027.075.027z" />
                                </g>
                                <path id="Union_4" fillRule="evenodd" clipRule="evenodd"
                                    d="M474.578 364.657v.307h.404v-.307h-.404zm.357.035h-.31v.236h.31v-.236z" fill="#FFFEFE" />
                                <path id="Union_5" fillRule="evenodd" clipRule="evenodd"
                                    d="M476.244 364.657v.307h.403v-.307h-.403zm.357.035h-.311v.236h.311v-.236z"
                                    fill="#FFFEFE" />
                                <g id="Union_6" fill="#FFFEFE">
                                    <path
                                        d="M474.704 364.503h-.025v.154h.025v-.154zM474.881 364.503h-.025v.154h.025v-.154zM474.679 364.503h.025c0-.102.152-.102.152 0h.025c0-.128-.202-.128-.202 0z" />
                                </g>
                                <g id="Union_7" fill="#FFFEFE">
                                    <path
                                        d="M476.37 364.452h-.026v.211h.026v-.211zM476.546 364.452h-.025v.109h.025v-.109zM476.344 364.452h.026c0-.102.151-.102.151 0h.025c0-.128-.202-.128-.202 0z" />
                                </g>
                                <path id="Rectangle 2" fill="#2E2D2D" d="M475.487 355.71h.303v.102h-.303z" />
                            </g>
                        </g>
                        <g id="wyze-cam">
                            <g id="product-display-2" display="none">
                                <path id="product-container_2" fill="#F2F2F2" d="M446 267h80v97h-80z" />
                                <path id="product-info_4" fill="#333" d="M446 267h80v43.667h-80z" />
                                <path id="product-info_5" fill="#333" d="M446 325h80v39h-80z" />
                                <g id="product-card-2">
                                    <g id="product-title-2" display="none">
                                        <path id="Wyze Cam V2"
                                            d="M467.5 316h-.228l-.233-1.05h.224l.142.712.206-.712h.204l.204.709.142-.709h.216l-.232 1.05h-.228l-.209-.734-.208.734zm1.18.036l.012-.028-.305-.79h.227l.193.533.222-.533h.222l-.36.844a.483.483 0 01-.139.201.335.335 0 01-.207.06.458.458 0 01-.092-.009v-.177l.032.004a.425.425 0 00.04.002.155.155 0 00.093-.027.182.182 0 00.062-.08zm.624-.036v-.146l.393-.463h-.39v-.173h.654v.146l-.396.463h.405V316h-.666zm1.466-.098a.504.504 0 01-.149.086.493.493 0 01-.334-.005.431.431 0 01-.134-.085.408.408 0 01-.12-.288.4.4 0 01.555-.372.38.38 0 01.204.22c.02.051.03.107.03.167v.054h-.582a.218.218 0 00.081.118c.04.03.087.045.141.045a.276.276 0 00.096-.016.235.235 0 00.077-.046l.135.122zm-.339-.528a.183.183 0 00-.122.044.215.215 0 00-.07.114h.382a.221.221 0 00-.072-.113.172.172 0 00-.118-.045zm1.357.44a.37.37 0 00.155-.034.405.405 0 00.127-.1l.143.141a.533.533 0 01-.192.141.585.585 0 01-.638-.103.528.528 0 01-.16-.384.523.523 0 01.162-.386.561.561 0 01.397-.156.586.586 0 01.437.197l-.147.145a.376.376 0 00-.29-.142.333.333 0 00-.336.342c0 .048.009.093.026.135a.343.343 0 00.18.178.358.358 0 00.136.026zm.786.2a.305.305 0 01-.205-.067.218.218 0 01-.08-.174c0-.074.029-.132.086-.174a.388.388 0 01.235-.063.622.622 0 01.191.03v-.055c0-.045-.014-.079-.042-.102a.19.19 0 00-.123-.035.402.402 0 00-.108.017.863.863 0 00-.131.048l-.075-.152a.994.994 0 01.177-.063.727.727 0 01.171-.021.36.36 0 01.245.077c.059.05.088.121.088.213V316h-.202v-.054a.364.364 0 01-.105.051.418.418 0 01-.122.017zm-.088-.245c0 .03.013.054.039.072.026.017.06.025.103.025a.308.308 0 00.173-.049v-.117a.463.463 0 00-.165-.029.198.198 0 00-.111.027.08.08 0 00-.039.071zm.673.231v-.782h.205v.059a.308.308 0 01.339-.042.26.26 0 01.101.085.306.306 0 01.112-.087.35.35 0 01.146-.03c.087 0 .158.029.214.087a.31.31 0 01.084.224V316h-.205v-.456a.172.172 0 00-.041-.119.133.133 0 00-.106-.045.18.18 0 00-.15.078l.003.027a.271.271 0 01.001.029V316h-.205v-.456a.172.172 0 00-.041-.119.133.133 0 00-.106-.045.184.184 0 00-.083.018.186.186 0 00-.063.053V316h-.205zm2 0l-.426-1.05h.235l.321.83.329-.83h.225l-.432 1.05h-.252zm.735 0v-.144l.414-.371a.59.59 0 00.101-.112.194.194 0 00.03-.102.142.142 0 00-.054-.114.204.204 0 00-.135-.045c-.05 0-.097.01-.141.03a.591.591 0 00-.141.099l-.116-.138a.675.675 0 01.194-.125.547.547 0 01.364-.018.347.347 0 01.122.065.298.298 0 01.106.232c0 .06-.015.116-.045.167a.792.792 0 01-.156.175l-.256.228h.471V316h-.758z"
                                            fill="#000" />
                                    </g>
                                    <g id="product-info-2" display="none">
                                        <path id="â¢ Night Vision, 2-way Audio â¢ 1080p Full HD, 8x Digital Zoom"
                                            d="M467.163 317.748a.1.1 0 01-.071-.029.1.1 0 01-.029-.071.101.101 0 01.1-.102c.028 0 .052.01.072.03.02.02.03.044.03.072 0 .027-.01.051-.03.071a.098.098 0 01-.072.029zm.457-.448h.077l.421.568v-.568h.073v.7h-.068l-.43-.583V318h-.073v-.7zm.748.103a.047.047 0 01-.035-.015.049.049 0 010-.07.047.047 0 01.035-.015c.014 0 .025.005.035.015a.049.049 0 010 .07.047.047 0 01-.035.015zm.037.096V318h-.074v-.501h.074zm.353.505a.245.245 0 01-.177-.074.254.254 0 01-.073-.183.25.25 0 01.153-.237.247.247 0 01.257.039v-.05h.073v.513c0 .064-.019.113-.056.147-.038.035-.091.052-.16.052a.4.4 0 01-.196-.052l.032-.058c.03.016.057.028.083.035a.3.3 0 00.078.011c.047 0 .083-.011.108-.034a.132.132 0 00.037-.1v-.067a.256.256 0 01-.159.058zm-.177-.257a.194.194 0 00.052.137c.016.017.036.03.059.04.022.01.046.015.072.015a.213.213 0 00.088-.018.172.172 0 00.065-.051v-.246a.175.175 0 00-.066-.05.212.212 0 00-.087-.018.177.177 0 00-.131.055.19.19 0 00-.038.061.186.186 0 00-.014.075zm.536.253v-.7l.074-.017v.275a.173.173 0 01.069-.051.211.211 0 01.089-.018.19.19 0 01.139.054.19.19 0 01.054.14V318h-.073v-.302a.145.145 0 00-.038-.105.138.138 0 00-.102-.039.168.168 0 00-.081.02.142.142 0 00-.057.057V318h-.074zm.591-.112v-.326h-.108v-.063h.108v-.127l.073-.019v.146h.151v.063h-.151v.307c0 .027.006.046.018.058.012.011.032.017.059.017a.205.205 0 00.073-.013v.065a.34.34 0 01-.088.013c-.043 0-.077-.01-.1-.031a.116.116 0 01-.035-.09zm.746.112l-.287-.7h.083l.253.628.257-.628h.078l-.291.7h-.093zm.488-.597a.047.047 0 01-.035-.015.049.049 0 010-.07.047.047 0 01.035-.015c.014 0 .025.005.035.015a.049.049 0 010 .07.047.047 0 01-.035.015zm.037.096V318h-.074v-.501h.074zm.075.432l.045-.048a.27.27 0 00.076.05.245.245 0 00.087.017c.04 0 .073-.008.098-.025.025-.017.038-.038.038-.065a.061.061 0 00-.023-.05.139.139 0 00-.07-.026l-.087-.012a.21.21 0 01-.112-.044.12.12 0 01-.036-.091c0-.042.018-.077.053-.104a.21.21 0 01.135-.042.311.311 0 01.197.066l-.039.05a.336.336 0 00-.082-.042.245.245 0 00-.08-.014.146.146 0 00-.084.023.07.07 0 00-.032.06.06.06 0 00.022.05.162.162 0 00.071.024l.087.012c.05.007.087.022.112.045a.118.118 0 01.038.091.143.143 0 01-.059.11.226.226 0 01-.144.043.291.291 0 01-.211-.078zm.534-.528a.049.049 0 01-.035-.015.049.049 0 010-.07.049.049 0 01.07 0 .049.049 0 010 .07.045.045 0 01-.035.015zm.037.096V318h-.074v-.501h.074zm.103.25a.269.269 0 01.074-.185.262.262 0 01.281-.055.233.233 0 01.081.055.236.236 0 01.055.083.25.25 0 01.02.102.252.252 0 01-.02.103.236.236 0 01-.055.083.247.247 0 01-.18.075.262.262 0 01-.182-.075.27.27 0 01-.074-.186zm.256.195a.174.174 0 00.129-.056.199.199 0 00.053-.139.19.19 0 00-.014-.076.172.172 0 00-.039-.062.174.174 0 00-.129-.056.179.179 0 00-.169.118.21.21 0 00.038.215.179.179 0 00.131.056zm.358.056v-.501h.074v.059a.188.188 0 01.069-.051.218.218 0 01.089-.018c.057 0 .103.018.139.054a.19.19 0 01.054.14V318h-.073v-.302a.141.141 0 00-.038-.105.135.135 0 00-.102-.039.168.168 0 00-.081.02.156.156 0 00-.057.057V318h-.074zm.562-.074h.08l-.08.211h-.058l.058-.211zm.374.074v-.054l.265-.255a.677.677 0 00.095-.109.162.162 0 00.026-.089.123.123 0 00-.046-.099.168.168 0 00-.114-.039.24.24 0 00-.096.02.42.42 0 00-.098.066l-.043-.051a.426.426 0 01.116-.074.306.306 0 01.215-.01c.029.01.053.024.073.041a.166.166 0 01.048.063.215.215 0 01-.013.192.332.332 0 01-.044.059.935.935 0 01-.071.072l-.213.203h.371V318h-.471zm.554-.314h.349v.066h-.349v-.066zm.625.314h-.072l-.141-.501h.073l.108.4.125-.4h.066l.124.4.109-.4h.07l-.142.501h-.071l-.124-.401-.125.401zm.696.009a.205.205 0 01-.134-.042.134.134 0 01-.051-.109c0-.047.018-.084.054-.111a.23.23 0 01.146-.042.33.33 0 01.147.034v-.066c0-.04-.012-.07-.034-.09-.023-.021-.056-.031-.099-.031a.278.278 0 00-.075.011.468.468 0 00-.082.033l-.028-.057a.574.574 0 01.1-.038.357.357 0 01.092-.012c.063 0 .112.015.146.045.034.03.052.073.052.129V318h-.072v-.049a.26.26 0 01-.075.044.274.274 0 01-.087.014zm-.114-.153c0 .028.011.051.035.069a.154.154 0 00.092.026.24.24 0 00.082-.014.19.19 0 00.067-.044v-.094a.278.278 0 00-.145-.04.156.156 0 00-.096.027.081.081 0 00-.035.07zm.579.209l.029-.066-.204-.5h.082l.162.411.175-.411h.08l-.249.576a.285.285 0 01-.071.104.153.153 0 01-.099.032.213.213 0 01-.047-.005v-.067l.019.003a.155.155 0 00.023.001.09.09 0 00.058-.019.154.154 0 00.042-.059zm.548-.065l.291-.7h.093l.287.7h-.084l-.088-.22h-.33l-.089.22h-.08zm.196-.286h.276l-.137-.342-.139.342zm.593-.215v.302c0 .044.013.079.038.105.026.026.06.039.102.039a.154.154 0 00.138-.078v-.368h.074V318h-.074v-.058a.173.173 0 01-.069.051.223.223 0 01-.088.017.19.19 0 01-.14-.054.19.19 0 01-.054-.14v-.317h.073zm.869.501v-.053a.225.225 0 01-.162.061.254.254 0 01-.179-.074.268.268 0 01-.073-.185.26.26 0 01.073-.183.248.248 0 01.264-.06.227.227 0 01.076.042v-.248l.074-.017V318h-.073zm-.341-.252a.19.19 0 00.113.18.18.18 0 00.073.015c.031 0 .06-.006.087-.018a.183.183 0 00.067-.052v-.248a.179.179 0 00-.067-.05.198.198 0 00-.087-.019.188.188 0 00-.186.192zm.577-.345a.049.049 0 01-.035-.015.049.049 0 010-.07.049.049 0 01.07 0 .049.049 0 010 .07.045.045 0 01-.035.015zm.037.096V318h-.074v-.501h.074zm.103.25a.269.269 0 01.074-.185.257.257 0 01.362 0 .269.269 0 010 .371.253.253 0 01-.28.055.248.248 0 01-.136-.138.27.27 0 01-.02-.103zm.256.195a.174.174 0 00.129-.056.191.191 0 00.039-.062.22.22 0 000-.153.172.172 0 00-.039-.062.174.174 0 00-.129-.056.179.179 0 00-.169.118.21.21 0 00.038.215.179.179 0 00.131.056zm-11.293 1.804a.1.1 0 01-.071-.029.1.1 0 01-.029-.071.101.101 0 01.1-.102c.028 0 .052.01.072.03.02.02.03.044.03.072 0 .027-.01.051-.03.071a.098.098 0 01-.072.029zm.599-.448v.7h-.073v-.623l-.118.052v-.067l.144-.062h.047zm.4.71a.263.263 0 01-.116-.026.28.28 0 01-.09-.074.36.36 0 01-.058-.114.486.486 0 01-.021-.146c0-.053.007-.101.021-.145a.34.34 0 01.058-.114.259.259 0 01.206-.101.259.259 0 01.206.101.341.341 0 01.059.114.475.475 0 01.021.145.486.486 0 01-.021.146.362.362 0 01-.059.114.259.259 0 01-.206.1zm0-.066a.183.183 0 00.155-.08.355.355 0 00.058-.214.355.355 0 00-.058-.214.181.181 0 00-.155-.081.18.18 0 00-.154.081.355.355 0 00-.058.214c0 .089.019.161.058.214.039.053.09.08.154.08zm.638.066a.36.36 0 01-.105-.015.28.28 0 01-.083-.041.202.202 0 01-.054-.063.169.169 0 01.023-.189.227.227 0 01.109-.07.2.2 0 01-.089-.064.151.151 0 01-.034-.097c0-.026.006-.05.018-.072a.17.17 0 01.049-.058.24.24 0 01.073-.038.312.312 0 01.186 0 .235.235 0 01.074.038.17.17 0 01.049.058.148.148 0 01.018.072.151.151 0 01-.034.097.2.2 0 01-.089.064.227.227 0 01.109.07.16.16 0 01.042.109.17.17 0 01-.02.08.202.202 0 01-.054.063.28.28 0 01-.083.041.35.35 0 01-.105.015zm0-.41a.184.184 0 00.115-.036.113.113 0 00.047-.09.113.113 0 00-.047-.09.176.176 0 00-.115-.037.178.178 0 00-.115.037.112.112 0 00-.046.09c0 .035.015.065.046.09.031.024.07.036.115.036zm0 .35a.218.218 0 00.134-.041.124.124 0 00.055-.103.121.121 0 00-.055-.101.218.218 0 00-.134-.041.223.223 0 00-.135.041.122.122 0 00-.054.101c0 .041.018.075.054.103a.223.223 0 00.135.041zm.631.06a.263.263 0 01-.116-.026.28.28 0 01-.09-.074.36.36 0 01-.058-.114.486.486 0 01-.021-.146c0-.053.007-.101.021-.145a.34.34 0 01.058-.114.25.25 0 01.091-.074.247.247 0 01.115-.027.268.268 0 01.206.101.341.341 0 01.059.114.475.475 0 01.021.145.486.486 0 01-.021.146.294.294 0 01-.15.188.259.259 0 01-.115.026zm0-.066a.184.184 0 00.155-.08.362.362 0 00.058-.214.362.362 0 00-.058-.214.183.183 0 00-.155-.081.18.18 0 00-.154.081.355.355 0 00-.058.214c0 .089.019.161.058.214.038.053.09.08.154.08zm.394.261v-.706h.073v.054a.238.238 0 01.162-.062.254.254 0 01.179.075.26.26 0 01.053.285.262.262 0 01-.053.083.25.25 0 01-.18.074.241.241 0 01-.16-.058v.255h-.074zm.228-.649a.199.199 0 00-.154.07v.248a.184.184 0 00.067.051.212.212 0 00.087.018.177.177 0 00.132-.055.19.19 0 00.054-.138.205.205 0 00-.054-.138.18.18 0 00-.132-.056zm.59.444v-.7h.501v.068h-.424v.25h.278v.067h-.278V320h-.077zm.619-.501v.302c0 .044.013.079.038.105a.135.135 0 00.102.039.16.16 0 00.08-.02.161.161 0 00.058-.058v-.368h.074V320h-.074v-.058a.173.173 0 01-.069.051.223.223 0 01-.088.017.19.19 0 01-.14-.054.19.19 0 01-.054-.14v-.317h.073zm.552-.216V320h-.074v-.7l.074-.017zm.2 0V320h-.074v-.7l.074-.017zm.355.717v-.7h.077v.313h.407v-.313h.077v.7h-.077v-.318h-.407V320h-.077zm.715 0v-.7h.231a.392.392 0 01.264.099.34.34 0 01.104.251.345.345 0 01-.104.251.352.352 0 01-.116.073.418.418 0 01-.148.026h-.231zm.235-.63h-.158v.56h.158a.286.286 0 00.204-.08.278.278 0 00.082-.2.28.28 0 00-.082-.199.285.285 0 00-.204-.081zm.436.556h.08l-.08.211h-.058l.058-.211zm.644.084a.35.35 0 01-.105-.015.28.28 0 01-.083-.041.202.202 0 01-.054-.063.169.169 0 01.023-.189.227.227 0 01.109-.07.195.195 0 01-.089-.064.151.151 0 01-.034-.097c0-.026.006-.05.018-.072a.17.17 0 01.049-.058.23.23 0 01.073-.038.303.303 0 01.26.038c.02.016.037.035.049.058a.157.157 0 01-.016.169.206.206 0 01-.089.064.232.232 0 01.109.07.16.16 0 01.042.109.17.17 0 01-.02.08.202.202 0 01-.054.063.292.292 0 01-.083.041.35.35 0 01-.105.015zm0-.41a.186.186 0 00.115-.036.113.113 0 00.047-.09.113.113 0 00-.047-.09.176.176 0 00-.115-.037.176.176 0 00-.115.037.112.112 0 00-.046.09c0 .035.015.065.046.09a.182.182 0 00.115.036zm0 .35a.218.218 0 00.134-.041.127.127 0 00.055-.103.123.123 0 00-.055-.101.218.218 0 00-.134-.041.219.219 0 00-.135.041.122.122 0 00-.054.101c0 .041.018.075.054.103a.219.219 0 00.135.041zm.313.05l.197-.258-.187-.243h.088l.142.188.142-.188h.085l-.185.242.198.259h-.088l-.153-.204-.155.204h-.084zm.778 0v-.7h.231a.392.392 0 01.264.099.34.34 0 01.104.251.345.345 0 01-.104.251.352.352 0 01-.116.073.418.418 0 01-.148.026h-.231zm.235-.63h-.158v.56h.158a.286.286 0 00.204-.08.278.278 0 00.082-.2.28.28 0 00-.082-.199.285.285 0 00-.204-.081zm.508.033a.047.047 0 01-.035-.015.049.049 0 010-.07.047.047 0 01.035-.015c.014 0 .025.005.035.015a.049.049 0 010 .07.047.047 0 01-.035.015zm.037.096V320h-.074v-.501h.074zm.353.505a.249.249 0 01-.25-.257.25.25 0 01.153-.237.254.254 0 01.099-.02.256.256 0 01.158.059v-.05h.073v.513c0 .064-.019.113-.056.147-.037.035-.091.052-.16.052a.4.4 0 01-.196-.052l.032-.058c.03.016.058.028.083.035a.3.3 0 00.078.011c.047 0 .083-.011.108-.034.025-.023.037-.056.037-.1v-.067a.256.256 0 01-.159.058zm-.177-.257c0 .027.005.052.014.076a.19.19 0 00.038.061.187.187 0 00.131.055.213.213 0 00.088-.018.165.165 0 00.065-.051v-.246a.175.175 0 00-.066-.05.212.212 0 00-.087-.018.18.18 0 00-.169.116.204.204 0 00-.014.075zm.573-.344a.049.049 0 01-.035-.015.049.049 0 010-.07.049.049 0 01.07 0 .049.049 0 010 .07.045.045 0 01-.035.015zm.037.096V320h-.074v-.501h.074zm.188.389v-.326h-.108v-.063h.108v-.127l.073-.019v.146h.151v.063h-.151v.307c0 .027.006.046.018.058.012.011.032.017.059.017a.205.205 0 00.073-.013v.065a.34.34 0 01-.088.013c-.043 0-.077-.01-.1-.031a.116.116 0 01-.035-.09zm.461.121a.208.208 0 01-.134-.042.134.134 0 01-.051-.109c0-.047.018-.084.054-.111a.232.232 0 01.146-.042.319.319 0 01.147.034v-.066c0-.04-.011-.07-.034-.09-.022-.021-.055-.031-.099-.031a.29.29 0 00-.075.011.501.501 0 00-.082.033l-.028-.057a.606.606 0 01.1-.038.37.37 0 01.092-.012c.064 0 .112.015.146.045.035.03.052.073.052.129V320h-.072v-.049a.235.235 0 01-.162.058zm-.114-.153c0 .028.012.051.035.069a.156.156 0 00.092.026c.03 0 .058-.005.082-.014a.182.182 0 00.067-.044v-.094a.268.268 0 00-.145-.04.156.156 0 00-.096.027.084.084 0 00-.035.07zm.546-.573V320h-.074v-.7l.074-.017zm.302.717v-.055l.445-.577h-.441v-.068h.542v.055l-.447.577h.455V320h-.554zm.595-.251a.269.269 0 01.074-.185.257.257 0 01.362 0 .269.269 0 010 .371.253.253 0 01-.28.055.248.248 0 01-.136-.138.27.27 0 01-.02-.103zm.256.195a.174.174 0 00.129-.056.191.191 0 00.039-.062.22.22 0 000-.153.172.172 0 00-.039-.062.174.174 0 00-.129-.056.179.179 0 00-.169.118.21.21 0 00.038.215.179.179 0 00.131.056zm.336-.195a.269.269 0 01.074-.185.257.257 0 01.362 0 .269.269 0 010 .371.253.253 0 01-.28.055.248.248 0 01-.136-.138.27.27 0 01-.02-.103zm.256.195a.174.174 0 00.129-.056.191.191 0 00.039-.062.22.22 0 000-.153.172.172 0 00-.039-.062.174.174 0 00-.129-.056.179.179 0 00-.169.118.21.21 0 00.038.215.179.179 0 00.131.056zm.358.056v-.501h.074v.055a.197.197 0 01.24-.04.172.172 0 01.065.066.192.192 0 01.074-.068.211.211 0 01.098-.023c.054 0 .098.018.132.054a.197.197 0 01.052.14V320h-.073v-.302a.153.153 0 00-.035-.105.122.122 0 00-.095-.039.137.137 0 00-.075.021.17.17 0 00-.058.061 1.385 1.385 0 01.005.047V320h-.073v-.302a.153.153 0 00-.035-.105.121.121 0 00-.094-.039.15.15 0 00-.128.073V320h-.074z"
                                            fill="#000" />
                                    </g>
                                    <g id="product-price-2" display="none">
                                        <path id="$ 19.99_2"
                                            d="M473.722 322.098v-.123a.573.573 0 01-.18-.044.497.497 0 01-.148-.096l.092-.126a.457.457 0 00.236.119v-.21l-.072-.014a.355.355 0 01-.182-.078.214.214 0 01-.054-.156.23.23 0 01.081-.186.371.371 0 01.227-.075v-.096h.085v.1a.73.73 0 01.302.103l-.075.137a.713.713 0 00-.227-.09v.207l.069.011c.09.018.156.045.197.081.04.035.061.085.061.149a.23.23 0 01-.089.188.4.4 0 01-.238.078v.121h-.085zm-.008-.64l.008.001v-.203a.186.186 0 00-.104.029.083.083 0 00-.039.07c0 .032.009.055.027.069a.265.265 0 00.108.034zm.099.169l-.006-.001v.208a.232.232 0 00.112-.034c.029-.019.043-.044.043-.073 0-.03-.01-.052-.03-.065a.312.312 0 00-.119-.035zm.999-.537v.91h-.178v-.729l-.178.073v-.155l.243-.099h.113zm.452-.016a.4.4 0 01.164.034.4.4 0 01.208.234.587.587 0 01-.003.384.457.457 0 01-.091.153.4.4 0 01-.142.099.47.47 0 01-.452-.053l.101-.128a.282.282 0 00.181.06.225.225 0 00.183-.079.371.371 0 00.075-.228.314.314 0 01-.11.078.378.378 0 01-.265.007.304.304 0 01-.101-.058.266.266 0 01-.089-.201.284.284 0 01.097-.216.387.387 0 01.244-.086zm.005.441a.25.25 0 00.113-.026.292.292 0 00.095-.074.28.28 0 00-.075-.138.186.186 0 00-.13-.052.189.189 0 00-.125.042.132.132 0 00-.049.105c0 .043.016.077.048.104a.189.189 0 00.123.039zm.566.286a.1.1 0 01.075.031.103.103 0 010 .15.1.1 0 01-.075.031.1.1 0 01-.074-.031.101.101 0 01-.031-.074c0-.03.01-.055.031-.076a.1.1 0 01.074-.031zm.511-.727c.059 0 .114.012.163.034a.386.386 0 01.208.234.612.612 0 01-.002.384.457.457 0 01-.091.153.4.4 0 01-.142.099.47.47 0 01-.452-.053l.101-.128a.282.282 0 00.181.06.225.225 0 00.183-.079.371.371 0 00.074-.228.31.31 0 01-.109.078.354.354 0 01-.138.027.372.372 0 01-.127-.02.319.319 0 01-.102-.058.284.284 0 01-.065-.088.282.282 0 01.003-.233.305.305 0 01.07-.096.387.387 0 01.245-.086zm.005.441a.254.254 0 00.113-.026.302.302 0 00.095-.074.274.274 0 00-.076-.138.183.183 0 00-.13-.052.186.186 0 00-.124.042.133.133 0 00-.05.105c0 .043.016.077.048.104a.192.192 0 00.124.039zm.819-.441c.059 0 .114.012.163.034a.386.386 0 01.208.234.612.612 0 01-.002.384.408.408 0 01-.233.252.474.474 0 01-.452-.053l.101-.128a.282.282 0 00.181.06.225.225 0 00.183-.079.371.371 0 00.074-.228.31.31 0 01-.109.078.354.354 0 01-.138.027.372.372 0 01-.127-.02.319.319 0 01-.102-.058.284.284 0 01-.065-.088.282.282 0 01.003-.233.305.305 0 01.07-.096.383.383 0 01.245-.086zm.005.441c.04 0 .078-.009.113-.026a.302.302 0 00.095-.074.274.274 0 00-.076-.138.183.183 0 00-.13-.052.186.186 0 00-.124.042.133.133 0 00-.05.105c0 .043.016.077.048.104a.19.19 0 00.124.039z"
                                            fill="#000" />
                                    </g>
                                </g>
                            </g>
                            <g id="camera-wall">
                                <rect id="Rectangle 376" width="5.899" height="6.227" rx="2.95"
                                    transform="matrix(-.99925 -.00788 -.00768 1.00067 488.805 316.206)" fill="#C4C4C4" />
                                <g id="Rectangle 377" filter="url(#filter0_dd)">
                                    <rect width="5.019" height="5.339" rx="2.509"
                                        transform="matrix(-.98709 .16019 .15592 .98777 487.894 316.26)" fill="#C4C4C4" />
                                </g>
                                <path id="Subtract_7" fillRule="evenodd" clipRule="evenodd"
                                    d="M484.266 319.223l3.135.024-.02 2.671-3.135-.025.02-2.67zm.626.132l1.881.015-.012 1.589-1.881-.015.012-1.589z"
                                    fill="url(#paint123_linear)" />
                            </g>
                            <g id="camera">
                                <g id="body">
                                    <path id="Rectangle 364" transform="matrix(-1 0 0 1 487.779 314.14)" fill="#F4F4F4"
                                        d="M0 0h5.837v6.367H0z" />
                                    <path id="Rectangle 365" transform="matrix(-1 0 0 1 487.779 314.14)"
                                        fill="url(#paint124_linear)" d="M0 0h.73v6.367H0z" />
                                    <path id="Rectangle 367" d="M487.757 314.14l.73.148v6.043l-.73.177v-6.368z"
                                        fill="url(#paint125_linear)" />
                                    <path id="Rectangle 366" fill="url(#paint126_linear)" d="M481.943 314.14h.73v6.367h-.73z" />
                                </g>
                                <g id="face-lens">
                                    <ellipse id="Ellipse 9_2" rx="1.964" ry="2.063" transform="matrix(-1 0 0 1 484.861 316.558)"
                                        fill="#383535" />
                                    <ellipse id="Ellipse 10_2" rx=".954" ry="1.002" transform="matrix(-1 0 0 1 484.861 316.558)"
                                        fill="#282828" />
                                    <ellipse id="Ellipse 11_2" rx=".73" ry=".766" transform="matrix(-1 0 0 1 484.861 316.558)"
                                        fill="#444" />
                                    <ellipse id="Ellipse 12_2" rx=".281" ry=".295" transform="matrix(-1 0 0 1 484.861 316.558)"
                                        fill="#121212" />
                                    <ellipse id="Ellipse 13_2" rx=".505" ry=".531" transform="matrix(-1 0 0 1 484.861 319.27)"
                                        fill="#302F35" />
                                    <ellipse id="Ellipse 14_2" rx=".168" ry=".177" transform="matrix(-1 0 0 1 484.861 315.084)"
                                        fill="#1C1C1C" />
                                    <ellipse id="Ellipse 16_2" rx=".056" ry=".059" transform="matrix(-1 0 0 1 484.805 316.439)"
                                        fill="#747474" />
                                    <ellipse id="Ellipse 17_2" rx=".056" ry=".059" transform="matrix(-1 0 0 1 484.861 318.031)"
                                        fill="#000" />
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="brick-wall">
                        <path id="Rectangle 354" fill="#C4C4C4" d="M537.564 412.397h648.271v114.441H537.564z" />
                        <g id="Vector_2" fill="#A53B33">
                            <path
                                d="M1185.84 513.545h-19.75v13.294h19.75v-13.294zM1124.34 513.545h-39.5v13.294h39.5v-13.294zM1043.09 513.545h-39.49v13.294h39.49v-13.294zM961.846 513.545h-39.494v13.294h39.494v-13.294zM880.601 513.545h-39.495v13.294h39.495v-13.294zM799.355 513.545h-39.494v13.294h39.494v-13.294zM718.11 513.545h-39.495v13.294h39.495v-13.294zM636.864 513.545H597.37v13.294h39.494v-13.294zM1185.84 484.646h-19.75v13.293h19.75v-13.293zM1124.34 484.646h-39.5v13.293h39.5v-13.293zM1043.09 484.646h-39.49v13.293h39.49v-13.293zM961.846 484.646h-39.494v13.293h39.494v-13.293zM880.601 484.646h-39.495v13.293h39.495v-13.293zM799.355 484.646h-39.494v13.293h39.494v-13.293zM718.11 484.646h-39.495v13.293h39.495v-13.293zM636.864 484.646H597.37v13.293h39.494v-13.293zM1185.84 470.196h-39.5v13.294h39.5v-13.294zM1104.59 470.196h-39.49v13.294h39.49v-13.294zM1023.34 470.196h-39.49v13.294h39.49v-13.294zM942.099 470.196h-39.494v13.294h39.494v-13.294zM860.854 470.196h-39.495v13.294h39.495v-13.294zM779.608 470.196h-39.494v13.294h39.494v-13.294zM698.363 470.196h-39.495v13.294h39.495v-13.294zM617.117 470.196h-39.494v13.294h39.494v-13.294zM1185.84 499.095h-39.5v13.294h39.5v-13.294zM1104.59 499.095h-39.49v13.294h39.49v-13.294zM1023.34 499.095h-39.49v13.294h39.49v-13.294zM942.099 499.095h-39.494v13.294h39.494v-13.294zM860.854 499.095h-39.495v13.294h39.495v-13.294zM779.608 499.095h-39.494v13.294h39.494v-13.294zM698.363 499.095h-39.495v13.294h39.495v-13.294zM617.117 499.095h-39.494v13.294h39.494v-13.294zM1185.84 455.746h-19.75v13.294h19.75v-13.294zM1124.34 455.746h-39.5v13.294h39.5v-13.294zM1043.09 455.746h-39.49v13.294h39.49v-13.294zM961.846 455.746h-39.494v13.294h39.494v-13.294zM880.601 455.746h-39.495v13.294h39.495v-13.294zM799.355 455.746h-39.494v13.294h39.494v-13.294zM718.11 455.746h-39.495v13.294h39.495v-13.294zM636.864 455.746H597.37v13.294h39.494v-13.294zM1185.84 441.297h-39.5v13.293h39.5v-13.293zM1104.59 441.297h-39.49v13.293h39.49v-13.293zM1023.34 441.297h-39.49v13.293h39.49v-13.293zM942.099 441.297h-39.494v13.293h39.494v-13.293zM860.854 441.297h-39.495v13.293h39.495v-13.293zM779.608 441.297h-39.494v13.293h39.494v-13.293zM698.363 441.297h-39.495v13.293h39.495v-13.293zM617.117 441.297h-39.494v13.293h39.494v-13.293zM1185.84 426.847h-19.75v13.294h19.75v-13.294zM1124.34 426.847h-39.5v13.294h39.5v-13.294zM1043.09 426.847h-39.49v13.294h39.49v-13.294zM961.846 426.847h-39.494v13.294h39.494v-13.294zM880.601 426.847h-39.495v13.294h39.495v-13.294zM799.355 426.847h-39.494v13.294h39.494v-13.294zM718.11 426.847h-39.495v13.294h39.495v-13.294zM636.864 426.847H597.37v13.294h39.494v-13.294zM1185.84 412.397h-39.5v13.294h39.5v-13.294zM1104.59 412.397h-39.49v13.294h39.49v-13.294zM1023.34 412.397h-39.49v13.294h39.49v-13.294zM942.099 412.397h-39.494v13.294h39.494v-13.294zM860.854 412.397h-39.495v13.294h39.495v-13.294zM779.608 412.397h-39.494v13.294h39.494v-13.294zM698.363 412.397h-39.495v13.294h39.495v-13.294zM617.117 412.397h-39.494v13.294h39.494v-13.294zM1164.96 426.847h-39.49v13.294h39.49v-13.294zM1083.71 426.847h-39.49v13.294h39.49v-13.294zM1002.47 426.847h-39.495v13.294h39.495v-13.294zM921.223 426.847h-39.494v13.294h39.494v-13.294zM839.978 426.847h-39.494v13.294h39.494v-13.294zM758.733 426.847h-39.495v13.294h39.495v-13.294zM677.487 426.847h-39.494v13.294h39.494v-13.294zM596.242 426.847h-39.495v13.294h39.495v-13.294zM1145.21 441.297h-39.49v13.293h39.49v-13.293zM1063.97 441.297h-39.5v13.293h39.5v-13.293zM982.722 441.297h-39.495v13.293h39.495v-13.293zM901.476 441.297h-39.494v13.293h39.494v-13.293zM820.231 441.297h-39.494v13.293h39.494v-13.293zM738.985 441.297h-39.494v13.293h39.494v-13.293zM657.74 441.297h-39.494v13.293h39.494v-13.293zM576.494 441.297H537v13.293h39.494v-13.293zM1164.96 455.746h-39.49v13.294h39.49v-13.294zM1083.71 455.746h-39.49v13.294h39.49v-13.294zM1002.47 455.746h-39.495v13.294h39.495v-13.294zM921.223 455.746h-39.494v13.294h39.494v-13.294zM839.978 455.746h-39.494v13.294h39.494v-13.294zM758.733 455.746h-39.495v13.294h39.495v-13.294zM677.487 455.746h-39.494v13.294h39.494v-13.294zM596.242 455.746h-39.495v13.294h39.495v-13.294zM1145.21 470.196h-39.49v13.294h39.49v-13.294zM1063.97 470.196h-39.5v13.294h39.5v-13.294zM982.722 470.196h-39.495v13.294h39.495v-13.294zM901.476 470.196h-39.494v13.294h39.494v-13.294zM820.231 470.196h-39.494v13.294h39.494v-13.294zM738.985 470.196h-39.494v13.294h39.494v-13.294zM657.74 470.196h-39.494v13.294h39.494v-13.294zM576.494 470.196H537v13.294h39.494v-13.294zM1164.96 484.646h-39.49v13.293h39.49v-13.293zM1083.71 484.646h-39.49v13.293h39.49v-13.293zM1002.47 484.646h-39.495v13.293h39.495v-13.293zM921.223 484.646h-39.494v13.293h39.494v-13.293zM839.978 484.646h-39.494v13.293h39.494v-13.293zM758.733 484.646h-39.495v13.293h39.495v-13.293zM677.487 484.646h-39.494v13.293h39.494v-13.293zM596.242 484.646h-39.495v13.293h39.495v-13.293zM1145.21 499.095h-39.49v13.294h39.49v-13.294zM1063.97 499.095h-39.5v13.294h39.5v-13.294zM982.722 499.095h-39.495v13.294h39.495v-13.294zM901.476 499.095h-39.494v13.294h39.494v-13.294zM820.231 499.095h-39.494v13.294h39.494v-13.294zM738.985 499.095h-39.494v13.294h39.494v-13.294zM657.74 499.095h-39.494v13.294h39.494v-13.294zM576.494 499.095H537v13.294h39.494v-13.294zM1164.96 513.545h-39.49v13.294h39.49v-13.294zM1083.71 513.545h-39.49v13.294h39.49v-13.294zM1002.47 513.545h-39.495v13.294h39.495v-13.294zM921.223 513.545h-39.494v13.294h39.494v-13.294zM839.978 513.545h-39.494v13.294h39.494v-13.294zM758.733 513.545h-39.495v13.294h39.495v-13.294zM677.487 513.545h-39.494v13.294h39.494v-13.294zM596.242 513.545h-39.495v13.294h39.495v-13.294zM1145.21 412.397h-39.49v13.294h39.49v-13.294zM1063.97 412.397h-39.5v13.294h39.5v-13.294zM982.722 412.397h-39.495v13.294h39.495v-13.294zM901.476 412.397h-39.494v13.294h39.494v-13.294zM820.231 412.397h-39.494v13.294h39.494v-13.294zM738.985 412.397h-39.494v13.294h39.494v-13.294zM657.74 412.397h-39.494v13.294h39.494v-13.294zM576.494 412.397H537v13.294h39.494v-13.294zM555.619 440.141v-13.294H537v13.294h18.619zM555.619 526.839v-13.294H537v13.294h18.619zM555.619 497.939v-13.293H537v13.293h18.619zM555.619 469.04v-13.294H537v13.294h18.619z" />
                        </g>
                    </g>
                    <g id="brick-wall_2">
                        <path id="Rectangle 354_2" fill="#C4C4C4" d="M-269.436 412h648.271v114.441h-648.271z" />
                        <g id="Vector_3" fill="#A53B33">
                            <path
                                d="M378.835 513.148h-19.747v13.293h19.747v-13.293zM317.337 513.148h-39.494v13.293h39.494v-13.293zM236.092 513.148h-39.495v13.293h39.495v-13.293zM154.846 513.148h-39.494v13.293h39.494v-13.293zM73.6 513.148H34.107v13.293h39.495v-13.293zM-7.645 513.148h-39.494v13.293h39.494v-13.293zM-88.89 513.148h-39.495v13.293h39.495v-13.293zM-170.136 513.148h-39.494v13.293h39.494v-13.293zM378.835 484.248h-19.747v13.294h19.747v-13.294zM317.337 484.248h-39.494v13.294h39.494v-13.294zM236.092 484.248h-39.495v13.294h39.495v-13.294zM154.846 484.248h-39.494v13.294h39.494v-13.294zM73.6 484.248H34.107v13.294h39.495v-13.294zM-7.645 484.248h-39.494v13.294h39.494v-13.294zM-88.89 484.248h-39.495v13.294h39.495v-13.294zM-170.136 484.248h-39.494v13.294h39.494v-13.294zM377.664 469.799h-38.323v13.293h38.323v-13.293zM297.59 469.799h-39.494v13.293h39.494v-13.293zM216.344 469.799H176.85v13.293h39.494v-13.293zM135.099 469.799H95.605v13.293h39.494v-13.293zM53.853 469.799H14.36v13.293h39.494v-13.293zM-27.392 469.799h-39.494v13.293h39.494v-13.293zM-108.637 469.799h-39.495v13.293h39.495v-13.293zM-189.883 469.799h-39.494v13.293h39.494v-13.293zM377.664 498.698h-38.323v13.294h38.323v-13.294zM297.59 498.698h-39.494v13.294h39.494v-13.294zM216.344 498.698H176.85v13.294h39.494v-13.294zM135.099 498.698H95.605v13.294h39.494v-13.294zM53.853 498.698H14.36v13.294h39.494v-13.294zM-27.392 498.698h-39.494v13.294h39.494v-13.294zM-108.637 498.698h-39.495v13.294h39.495v-13.294zM-189.883 498.698h-39.494v13.294h39.494v-13.294zM378.835 455.349h-19.747v13.294h19.747v-13.294zM317.337 455.349h-39.494v13.294h39.494v-13.294zM236.092 455.349h-39.495v13.294h39.495v-13.294zM154.846 455.349h-39.494v13.294h39.494v-13.294zM73.6 455.349H34.107v13.294h39.495v-13.294zM-7.645 455.349h-39.494v13.294h39.494v-13.294zM-88.89 455.349h-39.495v13.294h39.495v-13.294zM-170.136 455.349h-39.494v13.294h39.494v-13.294zM377.664 440.899h-38.323v13.294h38.323v-13.294zM297.59 440.899h-39.494v13.294h39.494v-13.294zM216.344 440.899H176.85v13.294h39.494v-13.294zM135.099 440.899H95.605v13.294h39.494v-13.294zM53.853 440.899H14.36v13.294h39.494v-13.294zM-27.392 440.899h-39.494v13.294h39.494v-13.294zM-108.637 440.899h-39.495v13.294h39.495v-13.294zM-189.883 440.899h-39.494v13.294h39.494v-13.294zM378.835 426.45h-19.747v13.293h19.747V426.45zM317.337 426.45h-39.494v13.293h39.494V426.45zM236.092 426.45h-39.495v13.293h39.495V426.45zM154.846 426.45h-39.494v13.293h39.494V426.45zM73.6 426.45H34.107v13.293h39.495V426.45zM-7.645 426.45h-39.494v13.293h39.494V426.45zM-88.89 426.45h-39.495v13.293h39.495V426.45zM-170.136 426.45h-39.494v13.293h39.494V426.45zM377.664 412h-38.323v13.294h38.323V412zM297.59 412h-39.494v13.294h39.494V412zM216.344 412H176.85v13.294h39.494V412zM135.099 412H95.605v13.294h39.494V412zM53.853 412H14.36v13.294h39.494V412zM-27.392 412h-39.494v13.294h39.494V412zM-108.637 412h-39.495v13.294h39.495V412zM-189.883 412h-39.494v13.294h39.494V412zM357.96 426.45h-39.495v13.293h39.495V426.45zM276.714 426.45H237.22v13.293h39.494V426.45zM195.469 426.45h-39.494v13.293h39.494V426.45zM114.223 426.45H74.729v13.293h39.494V426.45zM32.978 426.45H-6.516v13.293h39.494V426.45zM-48.268 426.45h-39.494v13.293h39.494V426.45zM-129.513 426.45h-39.494v13.293h39.494V426.45zM-210.759 426.45h-39.494v13.293h39.494V426.45zM338.213 440.899h-39.495v13.294h39.495v-13.294zM256.967 440.899h-39.494v13.294h39.494v-13.294zM175.722 440.899h-39.495v13.294h39.495v-13.294zM94.476 440.899H54.982v13.294h39.494v-13.294zM13.23 440.899h-39.494v13.294h39.495v-13.294zM-68.015 440.899h-39.494v13.294h39.494v-13.294zM-149.26 440.899h-39.495v13.294h39.495v-13.294zM-230.506 440.899H-270v13.294h39.494v-13.294zM357.96 455.349h-39.495v13.294h39.495v-13.294zM276.714 455.349H237.22v13.294h39.494v-13.294zM195.469 455.349h-39.494v13.294h39.494v-13.294zM114.223 455.349H74.729v13.294h39.494v-13.294zM32.978 455.349H-6.516v13.294h39.494v-13.294zM-48.268 455.349h-39.494v13.294h39.494v-13.294zM-129.513 455.349h-39.494v13.294h39.494v-13.294zM-210.759 455.349h-39.494v13.294h39.494v-13.294zM338.213 469.799h-39.495v13.293h39.495v-13.293zM256.967 469.799h-39.494v13.293h39.494v-13.293zM175.722 469.799h-39.495v13.293h39.495v-13.293zM94.476 469.799H54.982v13.293h39.494v-13.293zM13.23 469.799h-39.494v13.293h39.495v-13.293zM-68.015 469.799h-39.494v13.293h39.494v-13.293zM-149.26 469.799h-39.495v13.293h39.495v-13.293zM-230.506 469.799H-270v13.293h39.494v-13.293zM357.96 484.248h-39.495v13.294h39.495v-13.294zM276.714 484.248H237.22v13.294h39.494v-13.294zM195.469 484.248h-39.494v13.294h39.494v-13.294zM114.223 484.248H74.729v13.294h39.494v-13.294zM32.978 484.248H-6.516v13.294h39.494v-13.294zM-48.268 484.248h-39.494v13.294h39.494v-13.294zM-129.513 484.248h-39.494v13.294h39.494v-13.294zM-210.759 484.248h-39.494v13.294h39.494v-13.294zM338.213 498.698h-39.495v13.294h39.495v-13.294zM256.967 498.698h-39.494v13.294h39.494v-13.294zM175.722 498.698h-39.495v13.294h39.495v-13.294zM94.476 498.698H54.982v13.294h39.494v-13.294zM13.23 498.698h-39.494v13.294h39.495v-13.294zM-68.015 498.698h-39.494v13.294h39.494v-13.294zM-149.26 498.698h-39.495v13.294h39.495v-13.294zM-230.506 498.698H-270v13.294h39.494v-13.294zM357.96 513.148h-39.495v13.293h39.495v-13.293zM276.714 513.148H237.22v13.293h39.494v-13.293zM195.469 513.148h-39.494v13.293h39.494v-13.293zM114.223 513.148H74.729v13.293h39.494v-13.293zM32.978 513.148H-6.516v13.293h39.494v-13.293zM-48.268 513.148h-39.494v13.293h39.494v-13.293zM-129.513 513.148h-39.494v13.293h39.494v-13.293zM-210.759 513.148h-39.494v13.293h39.494v-13.293zM338.213 412h-39.495v13.294h39.495V412zM256.967 412h-39.494v13.294h39.494V412zM175.722 412h-39.495v13.294h39.495V412zM94.476 412H54.982v13.294h39.494V412zM13.23 412h-39.494v13.294h39.495V412zM-68.015 412h-39.494v13.294h39.494V412zM-149.26 412h-39.495v13.294h39.495V412zM-230.506 412H-270v13.294h39.494V412zM-251.381 439.743V426.45H-270v13.293h18.619zM-251.381 526.441v-13.293H-270v13.293h18.619zM-251.381 497.542v-13.294H-270v13.294h18.619zM-251.381 468.643v-13.294H-270v13.294h18.619z" />
                        </g>
                    </g>
                </g>
                <g id="guy">
                <g id="guy-back">
                    <g id="arm-left-back">
                        <g id="Rectangle 71" fill="#FBCCD8">
                            <path d="M138.113 409.027l7.7-7.939 33.929 36.008-5.154 7.006-36.475-35.075z" />
                            <path
                                d="M138.113 409.027l7.7-7.939-11.333-14.75c-7.625-7.839-16.006 5.862-10.032 9.58l13.665 13.109z" />
                        </g>
                        <path id="Rectangle 72"
                            d="M139.304 410.298l7.628-8.015-12.365-15.853c-8.231-8.485-16.316 5.532-9.972 9.645l14.709 14.223z"
                            fill="url(#paint127_linear)" />
                    </g>
                    <g id="package">
                        <g id="Union_8" fill="#BD7B3D">
                            <path d="M196.33 412.777h-34.924l5.212 5.52h35.186l-5.474-5.52z" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M161.406 451.416v-38.639l5.212 5.52v39.427l-5.212-6.308z" />
                            <path d="M166.618 457.724h35.186v-39.427h-35.186v39.427z" />
                        </g>
                        <g id="Union_9" fill="#A26934">
                            <path d="M196.33 412.777h-34.924l5.212 5.52h35.186l-5.474-5.52z" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M161.406 451.416v-38.639l5.212 5.52v39.427l-5.212-6.308z" />
                        </g>
                        <path id="Union_10" d="M196.33 412.777h-34.924l5.212 5.52h35.186l-5.474-5.52z" fill="#B07338" />
                        <path id="Rectangle 529" d="M177.421 413.033h4.3l4.301 5.52h-4.301l-4.3-5.52z" fill="#C4C4C4" />
                        <path id="Rectangle 530" d="M179.376 413.033h.782l4.002 5.52h-.874l-3.91-5.52z" fill="#7D7272" />
                    </g>
                    <ellipse id="Ellipse 7_2" cx="139.82" cy="351.529" rx="23.198" ry="24.922" fill="#FBCCD8" />
                    <g id="leg-left-back">
                        <g id="Rectangle 69">
                            <path
                                d="M130.482 553.319s5.018-.209 10.093.328c4.939.523 9.009 1.623 10.68 4.404 1.741 2.897-1.07 4.619-1.07 4.619s-13.931.274-19.952.32c-.261.002-.501-.098-.64-.307-.412-.619-1.135-2.136-.245-4.3 1.65-4.013 1.134-5.064 1.134-5.064z"
                                fill="url(#paint128_linear)" />
                            <path d="M130.482 553.319s5.018-.209 10.093.328l-.425-1.654h-9.572l-.096 1.326z"
                                fill="url(#paint129_linear)" />
                        </g>
                        <g id="Rectangle 70" fill="#693C21">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M140.582 553.589a64.45 64.45 0 00-1.1-.107c1.875 1.377 5.594 4.287 11.78 4.51-1.886-2.585-5.913-3.899-10.68-4.403z" />
                            <path
                                d="M140.582 553.589l-.425-1.655-8.168.052-.096 1.326s3.1-.224 7.589.17c.358.032.725.067 1.1.107z" />
                        </g>
                        <path id="Rectangle 66" d="M126.707 462.59l19.546-.249-3.499 90.735-13.327.17-2.72-90.656z"
                            fill="#868383" />
                    </g>
                    <path id="Rectangle 65"
                        d="M126.296 459.518l34.736-.023s.979-1.386-3.434 12.469c-2.809 8.817-19.085 6.309-22.999 6.311-9.71.007-8.303-18.757-8.303-18.757z"
                        fill="#7C7979" />
                    <g id="leg-right-back">
                        <g id="Rectangle 69_2" fill="#7D5740">
                            <path
                                d="M144.603 553.319s5.018-.209 10.093.328c4.938.523 9.009 1.623 10.68 4.404 1.741 2.897-1.071 4.619-1.071 4.619s-13.93.274-19.951.32c-.261.002-.501-.098-.64-.307-.413-.619-1.135-2.136-.246-4.3 1.651-4.013 1.135-5.064 1.135-5.064z" />
                            <path d="M144.603 553.319s5.018-.209 10.093.328l-.425-1.654h-9.572l-.096 1.326z" />
                        </g>
                        <g id="Rectangle 70_2" fill="#693C21">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M154.703 553.589a64.45 64.45 0 00-1.1-.107c1.874 1.377 5.594 4.287 11.78 4.51-1.886-2.585-5.913-3.899-10.68-4.403z" />
                            <path
                                d="M154.703 553.589l-.425-1.655-8.168.052-.096 1.326s3.1-.224 7.589.17c.358.032.725.067 1.1.107z" />
                        </g>
                        <path id="Rectangle 63" d="M140.759 462.809l19.546-.284-3.337 90.741-13.326.193-2.883-90.65z"
                            fill="#7C7979" />
                    </g>
                    <path id="Rectangle 58" fill="#FBCCD8" d="M133.768 370.348h16.589v12.617h-16.589z" />
                    <path id="Rectangle 54"
                        d="M122.673 388.023c0-10.033 38.328-9.975 38.328 0v71.84h-34.797s-3.531-56.005-3.531-71.84z"
                        fill="#3550DD" />
                    <path id="Vector 12"
                        d="M145.627 356.663c0 4.731-1.314 14.371-11.355 16.737-2.962.697-10.086 2.543-16.149-9.392-10.08-19.843.178-36.273 10.893-36.273 11.812-9.774 30.472 2.433 34.507 4.976 0 4.513-4.509 17.118-13.967 14.489-6.985-1.941-2.62 7.491-3.929 9.463z"
                        fill="#300B0B" />
                    <g id="arm-right">
                        <g id="Rectangle 56" fill="#FBCCD8">
                            <path d="M158.867 410.341l9.815-4.676 20.717 41.85-7.106 4.619-23.426-41.793z" />
                            <path
                                d="M158.867 410.341l9.815-4.676-6.056-16.375c-4.737-9.183-17.025.359-12.545 5.422l8.786 15.629z" />
                        </g>
                        <path id="Rectangle 64"
                            d="M159.233 412.109l10.601-5.052-6.548-17.702c-5.12-9.926-18.392.384-13.55 5.858l9.497 16.896z"
                            fill="url(#paint130_linear)" />
                        <path id="Ellipse 8_2"
                            d="M196.011 452.623c1.424 3.387 1.091 5.527-2.948 7.016-4.038 1.489-8.922-2.269-10.345-5.656-1.424-3.387-.366-5.768 3.672-7.257 4.038-1.489 1.002 2.385 9.621 5.897z"
                            fill="#FBCCD8" />
                    </g>
                </g>
                <g id="guy-side">
                    <g id="leg-left">
                        <g id="shoe">
                            <g id="Rectangle 69_3" fill="#7D5740">
                                <path
                                    d="M135.435 551.384s5.161-.326 12.513.28c7.154.59 15.684 2.072 18.402 5.341 2.832 3.406-1.01 5.452-1.01 5.452l-31.419.278a.805.805 0 01-.597-.234c-.618-.627-2.062-2.475-.964-5.194 1.912-4.74 3.075-5.923 3.075-5.923z" />
                                <path d="M135.435 551.384s5.161-.326 12.513.28l-.799-1.948-11.728.104.014 1.564z" />
                            </g>
                            <g id="Rectangle 70_3" fill="#693C21">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M147.948 551.664c-.543-.045-1.074-.085-1.592-.12 2.851 1.614 10.779 4.898 19.691 5.128-3.005-3.037-11.193-4.439-18.099-5.008z" />
                                <path
                                    d="M147.948 551.664l-.799-1.948-11.728.104.014 1.564s4.427-.28 10.921.16c.518.035 1.049.075 1.592.12z" />
                            </g>
                        </g>
                        <path id="Rectangle 63_2" d="M133.164 460.202h19.547l-4.633 89.918h-13.327l-1.587-89.918z"
                            fill="#8C8989" />
                    </g>
                    <g id="package_2">
                        <g id="Union_11" fill="#BD7B3D">
                            <path d="M189.266 413.051h-34.924l5.212 5.473h35.185l-5.473-5.473z" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M154.342 451.364v-38.313l5.212 5.473v39.095l-5.212-6.255z" />
                            <path d="M159.554 457.619h35.185v-39.095h-35.185v39.095z" />
                        </g>
                        <g id="Union_12" fill="#A26934">
                            <path d="M189.266 413.051h-34.924l5.212 5.473h35.185l-5.473-5.473z" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M154.342 451.364v-38.313l5.212 5.473v39.095l-5.212-6.255z" />
                        </g>
                        <path id="Union_13" d="M189.266 413.051h-34.924l5.212 5.473h35.185l-5.473-5.473z" fill="#B07338" />
                        <path id="Rectangle 529_2" d="M170.761 413.051h4.301l4.3 5.473h-4.3l-4.301-5.473z" fill="#C4C4C4" />
                        <path id="Rectangle 530_2" d="M172.716 413.051h.782l4.002 5.473h-.874l-3.91-5.473z"
                            fill="#7D7272" />
                    </g>
                    <ellipse id="Ellipse 7_3" cx="143.412" cy="352.255" rx="27.503" ry="24.63" fill="#FBCCD8" />
                    <path id="Rectangle 65_2"
                        d="M129.811 457.538h27.758s.781-1.291-2.737 11.61c-2.239 8.21-15.247 5.865-18.375 5.865-7.76 0-6.646-17.475-6.646-17.475z"
                        fill="#7C7979" />
                    <path id="Rectangle 58_2" fill="#FBCCD8" d="M134.112 369.066h16.589v12.51h-16.589z" />
                    <path id="Rectangle 54_2"
                        d="M127.075 386.625c0-9.888 30.494-9.831 30.494 0v70.795h-27.684s-2.81-55.19-2.81-70.795z"
                        fill="#3550DD" />
                    <path id="Vector 12_2"
                        d="M138.207 356.313c0 4.691-3.963 11.58-14.004 13.926-3.056-1.564-4.838-3.128-5.675-5.083-8.699-20.324.178-35.967 10.893-35.967 19.208-13.683 24.037 3.711 41.062 6.447-15.279 14.856-18.588 14.363-28.241 12.608-5.548-1.009-2.725 6.114-4.035 8.069z"
                        fill="#300B0B" />
                    <g id="leg-right">
                        <g id="shoe_2">
                            <g id="Rectangle 69_4" fill="#7D5740">
                                <path
                                    d="M135.077 551.15s5.163-.302 12.512.338c7.151.623 15.673 2.146 18.377 5.428 2.815 3.418-1.036 5.446-1.036 5.446l-31.42.132a.809.809 0 01-.596-.236c-.615-.631-2.05-2.485-.94-5.199 1.935-4.731 3.103-5.909 3.103-5.909z" />
                                <path d="M135.077 551.15s5.163-.302 12.512.338l-.791-1.951-11.728.049.007 1.564z" />
                            </g>
                            <g id="Rectangle 70_4" fill="#693C21">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M147.589 551.488c-.543-.047-1.074-.089-1.592-.127 2.843 1.627 10.756 4.949 19.667 5.22-2.991-3.052-11.172-4.491-18.075-5.093z" />
                                <path
                                    d="M147.589 551.488l-.791-1.951-11.728.049.007 1.564s4.428-.259 10.92.211c.518.038 1.049.08 1.592.127z" />
                            </g>
                        </g>
                        <path id="Rectangle 63_3" d="M133.164 460.202h19.547l-4.633 89.918h-13.327l-1.587-89.918z"
                            fill="#7C7979" />
                    </g>
                    <g id="arm-right-side">
                        <g id="Rectangle 56_2" fill="#FBCCD8">
                            <path d="M144.339 409.589l9.848-4.921 19.447 41.925-7.162 4.811-22.133-41.815z" />
                            <path
                                d="M144.339 409.589l9.848-4.921-6.906-16.079c-4.456-9.195-14.395.01-10.086 5.044l7.144 15.956z" />
                        </g>
                        <path id="Ellipse 8_3"
                            d="M180.014 454.248c.813 3.801.11 6-4.134 6.907-4.244.908-8.405-3.85-9.218-7.651-.812-3.8.647-6.135 4.891-7.042s.572 2.676 8.461 7.786z"
                            fill="#FBCCD8" />
                        <path id="Rectangle 73"
                            d="M145.026 412.595l10.328-5.346-7.242-18.591c-5.105-10.605-17.213-.025-12.508 5.869l9.422 18.068z"
                            fill="url(#paint131_linear)" />
                    </g>
                </g>
            </g>
            </g>
            <defs>
        <linearGradient id="paint0_linear" x1="419.5" y1="0" x2="419.5" y2="298" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7E9FFF" />
            <stop offset="1" stopColor="#CAD0E1" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="641.914" y1="377.375" x2="641.914" y2="409.992"
            gradientUnits="userSpaceOnUse">
            <stop offset=".057" stopColor="#DAE0EB" />
            <stop offset=".094" stopColor="#ADB5BF" />
            <stop offset=".156" stopColor="#DAE0EB" />
            <stop offset=".875" stopColor="#DAE0EB" />
            <stop offset=".906" stopColor="#ADB5BF" />
            <stop offset=".948" stopColor="#DAE0EB" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="641.914" y1="377.375" x2="641.914" y2="409.992"
            gradientUnits="userSpaceOnUse">
            <stop offset=".057" stopColor="#DAE0EB" />
            <stop offset=".094" stopColor="#ADB5BF" />
            <stop offset=".156" stopColor="#DAE0EB" />
            <stop offset=".875" stopColor="#DAE0EB" />
            <stop offset=".906" stopColor="#ADB5BF" />
            <stop offset=".948" stopColor="#DAE0EB" />
        </linearGradient>
        <linearGradient id="paint3_linear" x1="641.914" y1="377.375" x2="641.914" y2="409.992"
            gradientUnits="userSpaceOnUse">
            <stop offset=".057" stopColor="#DAE0EB" />
            <stop offset=".094" stopColor="#ADB5BF" />
            <stop offset=".156" stopColor="#DAE0EB" />
            <stop offset=".875" stopColor="#DAE0EB" />
            <stop offset=".906" stopColor="#ADB5BF" />
            <stop offset=".948" stopColor="#DAE0EB" />
        </linearGradient>
        <linearGradient id="paint4_linear" x1="332.22" y1="376.735" x2="332.22" y2="409.352"
            gradientUnits="userSpaceOnUse">
            <stop offset=".057" stopColor="#DAE0EB" />
            <stop offset=".094" stopColor="#ADB5BF" />
            <stop offset=".156" stopColor="#DAE0EB" />
            <stop offset=".875" stopColor="#DAE0EB" />
            <stop offset=".906" stopColor="#ADB5BF" />
            <stop offset=".948" stopColor="#DAE0EB" />
        </linearGradient>
        <linearGradient id="paint5_linear" x1="332.22" y1="376.735" x2="332.22" y2="409.352"
            gradientUnits="userSpaceOnUse">
            <stop offset=".057" stopColor="#DAE0EB" />
            <stop offset=".094" stopColor="#ADB5BF" />
            <stop offset=".156" stopColor="#DAE0EB" />
            <stop offset=".875" stopColor="#DAE0EB" />
            <stop offset=".906" stopColor="#ADB5BF" />
            <stop offset=".948" stopColor="#DAE0EB" />
        </linearGradient>
        <linearGradient id="paint6_linear" x1="332.22" y1="376.735" x2="332.22" y2="409.352"
            gradientUnits="userSpaceOnUse">
            <stop offset=".057" stopColor="#DAE0EB" />
            <stop offset=".094" stopColor="#ADB5BF" />
            <stop offset=".156" stopColor="#DAE0EB" />
            <stop offset=".875" stopColor="#DAE0EB" />
            <stop offset=".906" stopColor="#ADB5BF" />
            <stop offset=".948" stopColor="#DAE0EB" />
        </linearGradient>
        <linearGradient id="paint7_linear" x1="453.007" y1="231.56" x2="453.007" y2="237.315"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint8_linear" x1="453.007" y1="237.315" x2="453.007" y2="243.071"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint9_linear" x1="453.007" y1="243.071" x2="453.007" y2="248.827"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint10_linear" x1="453.007" y1="248.827" x2="453.007" y2="254.583"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint11_linear" x1="453.007" y1="254.583" x2="453.007" y2="260.339"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint12_linear" x1="453.007" y1="260.339" x2="453.007" y2="266.095"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint13_linear" x1="453.007" y1="266.095" x2="453.007" y2="271.851"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint14_linear" x1="453.007" y1="271.851" x2="453.007" y2="277.607"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint15_linear" x1="453.007" y1="277.607" x2="453.007" y2="283.362"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint16_linear" x1="453.007" y1="283.363" x2="453.007" y2="289.118"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint17_linear" x1="453.007" y1="289.118" x2="453.007" y2="294.874"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint18_linear" x1="453.007" y1="294.874" x2="453.007" y2="300.63"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint19_linear" x1="453.007" y1="300.63" x2="453.007" y2="306.386"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint20_linear" x1="453.007" y1="306.386" x2="453.007" y2="312.142"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint21_linear" x1="411.063" y1="312.142" x2="411.063" y2="317.898"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint22_linear" x1="339.474" y1="312.142" x2="339.474" y2="317.898"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint23_linear" x1="339.474" y1="317.898" x2="339.474" y2="323.654"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint24_linear" x1="339.474" y1="323.654" x2="339.474" y2="329.409"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint25_linear" x1="339.474" y1="329.409" x2="339.474" y2="335.165"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint26_linear" x1="339.474" y1="335.165" x2="339.474" y2="340.921"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint27_linear" x1="339.474" y1="340.921" x2="339.474" y2="346.677"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint28_linear" x1="339.474" y1="346.677" x2="339.474" y2="352.433"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint29_linear" x1="339.474" y1="352.433" x2="339.474" y2="358.189"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint30_linear" x1="339.474" y1="358.189" x2="339.474" y2="363.945"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint31_linear" x1="339.474" y1="363.945" x2="339.474" y2="369.7"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint32_linear" x1="339.474" y1="369.7" x2="339.474" y2="375.456"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint33_linear" x1="498.42" y1="317.898" x2="498.42" y2="323.654"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint34_linear" x1="498.42" y1="312.142" x2="498.42" y2="317.898"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint35_linear" x1="410.747" y1="317.898" x2="410.747" y2="323.654"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint36_linear" x1="498.42" y1="323.654" x2="498.42" y2="329.409"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint37_linear" x1="568.748" y1="312.142" x2="568.748" y2="317.898"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint38_linear" x1="568.748" y1="317.898" x2="568.748" y2="323.654"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint39_linear" x1="568.748" y1="323.654" x2="568.748" y2="329.409"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint40_linear" x1="568.748" y1="329.409" x2="568.748" y2="335.165"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint41_linear" x1="568.748" y1="335.165" x2="568.748" y2="340.921"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint42_linear" x1="568.748" y1="340.921" x2="568.748" y2="346.677"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint43_linear" x1="568.748" y1="346.677" x2="568.748" y2="352.433"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint44_linear" x1="568.748" y1="352.433" x2="568.748" y2="358.189"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint45_linear" x1="568.748" y1="358.189" x2="568.748" y2="363.945"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint46_linear" x1="568.748" y1="363.945" x2="568.748" y2="369.7"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint47_linear" x1="568.748" y1="369.7" x2="568.748" y2="375.456"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint48_linear" x1="552.664" y1="375.456" x2="552.664" y2="381.212"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint49_linear" x1="410.747" y1="323.654" x2="410.747" y2="329.409"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint50_linear" x1="498.42" y1="329.409" x2="498.42" y2="335.165"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint51_linear" x1="410.747" y1="329.409" x2="410.747" y2="335.165"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint52_linear" x1="410.747" y1="335.165" x2="410.747" y2="340.921"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint53_linear" x1="498.42" y1="335.165" x2="498.42" y2="340.921"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint54_linear" x1="410.747" y1="340.921" x2="410.747" y2="346.677"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint55_linear" x1="498.42" y1="340.921" x2="498.42" y2="346.677"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint56_linear" x1="410.747" y1="346.677" x2="410.747" y2="352.433"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint57_linear" x1="498.42" y1="346.677" x2="498.42" y2="352.433"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint58_linear" x1="410.747" y1="352.433" x2="410.747" y2="358.189"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint59_linear" x1="410.747" y1="358.189" x2="410.747" y2="363.945"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint60_linear" x1="410.747" y1="363.945" x2="410.747" y2="369.7"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint61_linear" x1="410.747" y1="369.7" x2="410.747" y2="375.456"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint62_linear" x1="378.579" y1="375.456" x2="378.579" y2="381.212"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint63_linear" x1="378.579" y1="381.212" x2="378.579" y2="386.968"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint64_linear" x1="378.579" y1="386.968" x2="378.579" y2="392.724"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint65_linear" x1="378.579" y1="392.724" x2="378.579" y2="398.48"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint66_linear" x1="378.579" y1="398.48" x2="378.579" y2="404.236"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint67_linear" x1="379.21" y1="404.236" x2="379.21" y2="409.991"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint68_linear" x1="498.42" y1="352.433" x2="498.42" y2="358.189"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint69_linear" x1="498.42" y1="358.189" x2="498.42" y2="363.945"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint70_linear" x1="498.42" y1="363.945" x2="498.42" y2="369.7"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint71_linear" x1="498.42" y1="369.7" x2="498.42" y2="375.456"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint72_linear" x1="498.42" y1="375.456" x2="498.42" y2="381.212"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint73_linear" x1="532.48" y1="381.212" x2="532.48" y2="386.968"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint74_linear" x1="532.48" y1="386.968" x2="532.48" y2="392.724"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint75_linear" x1="532.48" y1="392.724" x2="532.48" y2="398.48"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint76_linear" x1="532.48" y1="398.48" x2="532.48" y2="404.236"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint77_linear" x1="532.48" y1="404.236" x2="532.48" y2="409.991"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint78_linear" x1="532.48" y1="409.991" x2="532.48" y2="415.747"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint79_linear" x1="337.266" y1="185.513" x2="337.266" y2="191.269"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint80_linear" x1="337.266" y1="179.757" x2="337.266" y2="185.513"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint81_linear" x1="337.266" y1="174.001" x2="337.266" y2="179.757"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint82_linear" x1="337.266" y1="168.245" x2="337.266" y2="174.001"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint83_linear" x1="452.061" y1="162.489" x2="452.061" y2="168.245"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint84_linear" x1="452.061" y1="157.373" x2="452.061" y2="163.129"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint85_linear" x1="452.061" y1="152.257" x2="452.061" y2="158.012"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint86_linear" x1="452.061" y1="147.14" x2="452.061" y2="152.896"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint87_linear" x1="452.061" y1="142.024" x2="452.061" y2="147.78"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint88_linear" x1="452.061" y1="136.908" x2="452.061" y2="142.663"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint89_linear" x1="452.061" y1="131.791" x2="452.061" y2="137.547"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint90_linear" x1="337.266" y1="191.269" x2="337.266" y2="197.024"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint91_linear" x1="337.266" y1="197.024" x2="337.266" y2="202.78"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint92_linear" x1="337.266" y1="202.78" x2="337.266" y2="208.536"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint93_linear" x1="337.266" y1="208.536" x2="337.266" y2="214.292"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint94_linear" x1="337.266" y1="214.292" x2="337.266" y2="220.048"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint95_linear" x1="337.266" y1="220.048" x2="337.266" y2="225.804"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint96_linear" x1="337.266" y1="225.804" x2="337.266" y2="231.56"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint97_linear" x1="567.802" y1="185.513" x2="567.802" y2="191.269"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint98_linear" x1="567.802" y1="179.757" x2="567.802" y2="185.513"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint99_linear" x1="567.802" y1="174.001" x2="567.802" y2="179.757"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint100_linear" x1="567.802" y1="168.245" x2="567.802" y2="174.001"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint101_linear" x1="567.802" y1="191.269" x2="567.802" y2="197.024"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint102_linear" x1="567.802" y1="197.024" x2="567.802" y2="202.78"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint103_linear" x1="567.802" y1="202.78" x2="567.802" y2="208.536"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint104_linear" x1="567.802" y1="208.536" x2="567.802" y2="214.292"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint105_linear" x1="567.802" y1="214.292" x2="567.802" y2="220.048"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint106_linear" x1="567.802" y1="220.048" x2="567.802" y2="225.804"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint107_linear" x1="567.802" y1="225.804" x2="567.802" y2="231.56"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint108_linear" x1="453.322" y1="185.513" x2="453.322" y2="191.269"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint109_linear" x1="453.322" y1="179.757" x2="453.322" y2="185.513"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint110_linear" x1="453.322" y1="174.001" x2="453.322" y2="179.757"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint111_linear" x1="453.322" y1="168.245" x2="453.322" y2="174.001"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint112_linear" x1="453.322" y1="191.269" x2="453.322" y2="197.024"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint113_linear" x1="453.322" y1="197.024" x2="453.322" y2="202.78"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint114_linear" x1="453.322" y1="202.78" x2="453.322" y2="208.536"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint115_linear" x1="453.322" y1="208.536" x2="453.322" y2="214.292"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint116_linear" x1="453.322" y1="214.292" x2="453.322" y2="220.048"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint117_linear" x1="453.322" y1="220.048" x2="453.322" y2="225.804"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint118_linear" x1="453.322" y1="225.804" x2="453.322" y2="231.56"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint119_linear" x1="375.741" y1="409.991" x2="375.741" y2="415.747"
            gradientUnits="userSpaceOnUse">
            <stop offset=".859" stopColor="#7693CE" />
            <stop offset="1" stopColor="#535353" />
        </linearGradient>
        <linearGradient id="paint120_linear" x1="335.374" y1="379.294" x2="335.374" y2="411.91"
            gradientUnits="userSpaceOnUse">
            <stop offset=".057" stopColor="#DAE0EB" />
            <stop offset=".094" stopColor="#ADB5BF" />
            <stop offset=".156" stopColor="#DAE0EB" />
            <stop offset=".875" stopColor="#DAE0EB" />
            <stop offset=".906" stopColor="#ADB5BF" />
            <stop offset=".948" stopColor="#DAE0EB" />
        </linearGradient>
        <linearGradient id="paint121_linear" x1="570.325" y1="379.294" x2="570.325" y2="411.91"
            gradientUnits="userSpaceOnUse">
            <stop offset=".057" stopColor="#DAE0EB" />
            <stop offset=".094" stopColor="#ADB5BF" />
            <stop offset=".156" stopColor="#DAE0EB" />
            <stop offset=".875" stopColor="#DAE0EB" />
            <stop offset=".906" stopColor="#ADB5BF" />
            <stop offset=".948" stopColor="#DAE0EB" />
        </linearGradient>
        <linearGradient id="paint122_linear" x1="456.476" y1="421.503" x2="456.476" y2="428.538"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#838383" />
        </linearGradient>
        <linearGradient id="paint123_linear" x1="485.834" y1="319.235" x2="485.813" y2="321.905"
            gradientUnits="userSpaceOnUse">
            <stop offset=".016" stopColor="#ADADAD" />
            <stop offset="1" stopColor="#9E9E9E" />
        </linearGradient>
        <linearGradient id="paint124_linear" x1="0" y1="6.367" x2=".73" y2="6.367" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint125_linear" x1="487.757" y1="320.508" x2="488.487" y2="320.508"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#C4C4C4" />
        </linearGradient>
        <linearGradient id="paint126_linear" x1="481.943" y1="320.508" x2="482.672" y2="320.508"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint127_linear" x1="130.137" y1="399.802" x2="136.716" y2="393.765"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#3550DD" />
            <stop offset="1" stopColor="#263DB4" />
        </linearGradient>
        <linearGradient id="paint128_linear" x1="129.732" y1="563.046" x2="151.748" y2="560.818"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#7D5740" />
            <stop offset="1" stopColor="#856552" />
        </linearGradient>
        <linearGradient id="paint129_linear" x1="129.732" y1="563.046" x2="151.748" y2="560.818"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#7D5740" />
            <stop offset="1" stopColor="#856552" />
        </linearGradient>
        <linearGradient id="paint130_linear" x1="153.574" y1="400.814" x2="166.297" y2="395.665"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#3550DD" />
            <stop offset="1" stopColor="#263DB4" />
        </linearGradient>
        <linearGradient id="paint131_linear" x1="137.703" y1="402.206" x2="152.988" y2="393.829"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#3550DD" />
            <stop offset="1" stopColor="#263DB4" />
        </linearGradient>
        <clipPath id="clip0">
            <path fill="#fff" d="M0 0h839v596H0z" />
        </clipPath>
        <filter id="filter0_dd" x="477.3" y="310.629" width="17.066" height="17.34" filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-2" dy="-2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
    </defs>
        </svg>
    )

}

export default Scene1



