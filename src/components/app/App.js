import { lazy, Suspense } from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
 
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/singleComicPage/SingleComicPage'));
const SingleCharacterPage = lazy(() => import('../pages/singleCharacterPage/SingleCharacterPage'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                    <main>
                        <Suspense fallback={<Spinner/>}>
                            <Routes>
                                <Route exact path="/" element={<MainPage/>}/>
                                <Route exact path="/comics" element={<ComicsPage/>}/>
                                <Route exact path="/comics/:comicId" element={<SingleComicPage/>}/>
                                <Route exact path='/characters/:charId' element={<SingleCharacterPage/>}/>
                            </Routes>
                        </Suspense>
                    </main>
            </div>
        </Router>
    )
}


export default App;