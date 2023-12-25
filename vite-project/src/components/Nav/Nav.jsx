import { Routes, Route, Link } from "react-router-dom";
import styles from './styles.module.css'
import { AboutMe } from "../AboutMe/AboutMe";
import { Calculator } from "../Calculator/Calculator";
import { Test } from "../Test/Test";


export const Nav = () => {

    return <div className={styles.container}>
        <nav id="nav">
            <ul>
                <li><Link to="/" id="logo">About me</Link></li>
                <li><Link to="calculator" id="calculator">Calculator</Link></li>
                <li><Link to="test" id="test">Test</Link></li>

            </ul>

        </nav>
        <div className="routes">
            <Routes>

                <Route path="/" element={<AboutMe />} />
                <Route path="calculator" element={<Calculator />} />
                <Route path="test" element={<Test />} />

            </Routes>

        </div>

    </div>

}