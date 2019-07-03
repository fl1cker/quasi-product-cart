import React from 'react';
import { connect } from 'react-redux';
import './HeaderToolbar.scss';

const HeaderToolbar = (props) => {
    let shouldShowShoppingCart = false;
    const showShoppingCartOnDelay = () => {
        shouldShowShoppingCart = false;
        setTimeout(() => {
            if (!shouldShowShoppingCart) {
                props.showShoppingCart();
            }
        }, 150)
    }

    const hideShoppingCart = () => {
        shouldShowShoppingCart = true;
        props.hideShoppingCart();
    }

    const fillColor = 'white';

    //const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250px" height="150px" viewBox="15 160 1020 560.0801391601562" preserveAspectRatio="xMidYMid meet" ><rect id="svgEditorBackground" x="0" y="0" width="1020" height="560" style="fill: none; stroke: none;"/><g id="e5_group" transform="matrix(1.15815 0 0 1.15815 -117.843 -52.4233)"><text style="fill:white;font-family:Arial;font-size:20px;" x="299.12933349609375" y="266.889892578125" id="e2_texte" transform="matrix(10.2877 0 0 10.2877 -2942.72 -2403.67)">P</text><text style="fill:white;font-family:Arial;font-size:20px;" x="317.5652770996094" y="271.049560546875" id="e3_texte" transform="matrix(9.8727 2.89254 -2.89254 9.8727 -2131.05 -3280.92)">U</text><text style="fill:white;font-family:Arial;font-size:20px;" x="325.1061706542969" y="275.1999206542969" id="e4_texte" transform="matrix(9.98315 2.48471 -2.48471 9.98315 -2224.41 -3218.38)">E</text><text style="fill:white;font-family:Arial;font-size:20px;" x="327.6753234863281" y="253.75868225097656" id="e5_texte" transform="matrix(9.8783 -2.87338 2.87338 9.8783 -3454.83 -1201.1)">R</text><text style="fill:white;font-family:Arial;font-size:20px;" x="359.52130126953125" y="274.54736328125" id="e6_texte" transform="matrix(8.97088 5.03591 -5.03591 8.97088 -1233.43 -3927.44)">I</text><text style="fill:white;font-family:Arial;font-size:20px;" x="353.7274475097656" y="268.8597412109375" id="e7_texte" transform="matrix(10.2877 0 0 10.2877 -2942.72 -2403.67)">L</text><text style="font-family: Arial; font-size: 20px;fill:white;" x="367.5721130371094" y="272.8932189941406" id="e8_texte" transform="matrix(9.71629 3.38094 -3.38094 9.71629 -1889.44 -3562.85)">E</text></g><line id="e6_line" x1="59.04978923759384" y1="175.56307983398438" x2="41.04959087333603" y2="164.0620880126953" style="stroke:white;fill:none;stroke-width:5px;"/><line id="e7_line" x1="39.7773551940918" y1="161.51832981147842" x2="40.777366638183594" y2="311.5204355243691" style="stroke:white;fill:none;stroke-width:5px;"/><line id="e2_line" x1="205.02976613627646" y1="155.56292724609375" x2="187.02956777201865" y2="144.0619354248047" style="stroke:white;fill:none;stroke-width:5px;"/><line id="e4_line" x1="189.58915334330771" y1="143.04486083984375" x2="168.1265526352999" y2="219.6964111328125" style="stroke:white;fill:none;stroke-width:5px;"/><line id="e3_line" x1="310.29999929057334" y1="186.22438049316406" x2="292.3000603257296" y2="174.723388671875" style="stroke:white;fill:none;stroke-width:5px;"/><line id="e1_line" x1="294.85960012065146" y1="173.70614624023438" x2="273.39707570658896" y2="250.35769653320312" style="stroke:white;fill:white;stroke-width:5px;"/><line id="e5_line" x1="444.18768310546875" y1="204.62102895365928" x2="426.187744140625" y2="193.12003713237021" style="stroke:white;fill:none;stroke-width:5px;"/><line id="e8_line" x1="427.7208493890239" y1="193.09194082864235" x2="412.743" y2="246.173" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(0.0188451 1.01386 -1.01386 0.0188451 615.021 -243.546)"/><line id="e9_line" x1="498.1554327478437" y1="208.99321403404656" x2="482.604" y2="265.584" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(0.0188451 1.01386 -1.01386 0.0188451 615.021 -243.546)"/><line id="e10_line" x1="427.83505249023443" y1="275.6532287597656" x2="409.8351135253907" y2="264.1522216796875" style="stroke:white;fill:none;stroke-width:5px;"/><line id="e11_line" x1="418.6367988051298" y1="354.3498840332031" x2="400.63685984028604" y2="342.848876953125" style="stroke:white;fill:none;stroke-width:5px;"/><line id="e12_line" x1="574.7015313634845" y1="221.4797473917347" x2="559.1500787267657" y2="278.0705524454456" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(0.0188451 1.01386 -1.01386 0.0188451 615.021 -243.546)"/><path d="M139.50890127119936,200.79050603037135q22.99601675274377,22.99601675274377,1.0220451890108393,44.96998831647667" style="fill:none;stroke:white;stroke-width:5px;" id="e5_arc2"/><path d="M542.7078814111162,201.5954752391916q17.626841892521952,21.33156595327054,-2.5313651626945557,37.44825585130732" style="fill:none;stroke:white;stroke-width:5px;" id="e3_arc2" transform="matrix(0.955157 -0.2961 0.2961 0.955157 -34.0867 169.636)"/><line id="e14_line" x1="476.3672482652483" y1="419.4726114368365" x2="464.8162533922014" y2="408.12162877082085" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(0.8029 -0.596113 0.596113 0.8029 -23.2926 274.792)"/><line id="e16_line" x1="670.0594383140462" y1="204.24946777216093" x2="629.3614402671712" y2="181.4111041247" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(0.0185163 -0.999828 0.999828 0.0185163 457.07 886.705)"/><line id="e17_line" x1="651.0233154296875" y1="276.5967102050781" x2="633.0233764648438" y2="265.09576416015625" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(-0.986218 0.165449 -0.165449 -0.986218 1475.05 504.284)"/><line id="e18_line" x1="773.1188198490049" y1="287.6203860787737" x2="773.3646084232237" y2="328.50090976041434" style="stroke:white;fill:white;stroke-width:5px;" transform="matrix(0.0221112 -0.999756 0.999756 0.0221112 442.217 1105.52)"/><path d="M594.5744835312717,325.9909119844914c-12.264542268130072,-13.286587457140797,-30.150333075819503,-31.427889562083124,-49.56919166702551,-39.09322847966433" style="fill:none;stroke:white;stroke-width:5px;" id="e19_arc3"/><line id="e13_line" x1="438.21488753144314" y1="-290.80681350524014" x2="423.2370432931619" y2="-237.7258961468417" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(-0.107349 1.00834 -1.00834 -0.107349 689.337 -268.391)"/><line id="e15_line" x1="505.280748454885" y1="-268.46540329163486" x2="489.72932633574436" y2="-211.87472030823642" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(-0.107349 1.00834 -1.00834 -0.107349 689.337 -268.391)"/><line id="e19_line" x1="914.327289570466" y1="275.6532893415934" x2="896.3273506056222" y2="264.1521907087809" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(0.992242 0.124325 -0.124325 0.992242 48.809 -103.197)"/><line id="e20_line" x1="907.1573176619058" y1="354.0958671678153" x2="889.1573786970621" y2="342.5948600877372" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(0.992242 0.124325 -0.124325 0.992242 48.809 -103.197)"/><line id="e21_line" x1="583.4048258990567" y1="-260.2012461740212" x2="567.853373262338" y2="-203.61051741425558" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(-0.107349 1.00834 -1.00834 -0.107349 689.337 -268.391)"/><line id="e22_line" x1="935.1720272012702" y1="206.25967815803577" x2="917.1720882364265" y2="194.75857952522327" style="stroke:white;fill:none;stroke-width:5px;" transform="matrix(0.992242 0.124325 -0.124325 0.992242 48.809 -103.197)"/></svg>`;

    return (
        <div className="HeaderToolbar">
            <div className="HeaderToolbar-title">
                <img src="images/logo/puerile-logo.svg" alt="puerile logo" className="HeaderToolbar-logo-svg"></img>
            </div>
            <div className="HeaderToolbar-shopping-cart">
                <img src="images/icons/shopping-cart.svg" alt="shopping cart icon" className="HeaderToolbar-shopping-cart-svg" onMouseEnter={() => showShoppingCartOnDelay()} onMouseOut={() => hideShoppingCart()}></img>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        showShoppingCart: () => dispatch({ type: 'SET_ICON_HOVER', data: true }),
        hideShoppingCart: () => dispatch({ type: 'SET_ICON_HOVER', data: false }),
    }
}

export default connect(null, mapDispatchToProps)(HeaderToolbar);